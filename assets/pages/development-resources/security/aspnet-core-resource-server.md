## Overview
#### In this flow:

- Your API = Resource Server (validates tokens)
- Client App = requests tokens from Azure Entra ID using its own identity (no user involved)
- Azure Entra ID = Authorization Server (issues tokens)

#### Steps to implement:

##### Step 1: Azure Portal Setup
- Register the API App (Resource Server)
1. Go to Azure Portal → Microsoft Entra ID → App registrations → New registration
2. Name it (e.g., MyApi)
3. After creation, go to Expose an API:

   * Set Application ID URI (e.g., api://your-api-client-id)
   * Add a Scope → e.g., api://your-api-client-id/access_as_application

- Register the Client App
1. New registration → Name it (e.g., MyClientApp)
2. Go to Certificates & secrets → New client secret → save the value
3. Go to API permissions → Add a permission → My APIs → select your API → Application permissions
4. Select your scope → Add permissions
5. Click Grant admin consent ✅

##### Step 2: NuGet Packages

```yaml
dotnet add package Microsoft.Identity.Web
dotnet add package Microsoft.AspNetCore.Authentication.JwtBearer
```

##### Step 3: appsettings.json

```json
{
  "AzureAd": {
      "Instance": "https://login.microsoftonline.com/",  
      "TenantId": "YOUR_TENANT_ID",
      "ClientId": "YOUR_API_CLIENT_ID",
      "Audience": "api://YOUR_API_CLIENT_ID"
  }
}
```

##### Step 4: Program.cs

```csharp
public static class AppSecurityConfigurations
{
    private static readonly string[] PublicPaths =
    [
        "/swagger",
        "/public",
        "/favicon.ico"
    ];

    public static IServiceCollection AddSecurityModule(this IServiceCollection services, IConfiguration configuration)
    {
        // Add Azure AD JWT Bearer authentication
        services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
            .AddMicrosoftIdentityWebApi(configuration.GetSection("AzureAd"));
        
        services.PostConfigure<JwtBearerOptions>(
            JwtBearerDefaults.AuthenticationScheme,
            options =>
            {
                var azureAd = configuration
                    .GetSection("AzureAd")
                    .Get<MicrosoftIdentityOptions>();

                if (azureAd is null || string.IsNullOrWhiteSpace(azureAd.ClientId))
                {
                    throw new InvalidOperationException("AzureAd:ClientId is missing.");
                }
                
                var clientId = azureAd!.ClientId;

                options.TokenValidationParameters.ValidAudiences = new[]
                {
                    clientId,
                    $"api://{clientId}"
                };
            });
        
        services.AddAuthorization(options =>
        {
            // Protect everything by default
            options.FallbackPolicy = new AuthorizationPolicyBuilder()
                .RequireAssertion(ctx =>
                {
                    // Get the current HTTP path
                    if (ctx.Resource is not HttpContext httpContext)
                        return false;

                    var path = httpContext.Request.Path;

                    // permitAll() for public paths
                    if (PublicPaths.Any(p => path.StartsWithSegments(p)))
                        return true;

                    // anyRequest().authenticated() for everything else
                    return httpContext.User.Identity?.IsAuthenticated == true;
                })
                // .RequireAuthenticatedUser()
                .Build();
            
            options.AddPolicy("AdminOnly", p => p.RequireRole("Admin"));
            options.AddPolicy("ApiReader", p => p.RequireRole("ApiReader"));
            
        });
        return services;
    }

}
```

##### Step 5: Protect your API endpoints
- Basic — require any valid token:
```csharp
[Authorize]
[ApiController]
[Route("[controller]")]
public class WeatherController : ControllerBase
{
    [HttpGet]
    public IActionResult Get() => Ok("Authenticated!");
}
```

- With role/scope check (recommended for Client Credentials):
```csharp
[Authorize]
[ApiController]
[Route("[controller]")]
public class DataController : ControllerBase
{
    [HttpGet]
    [RequiredScope("access_as_application")] // OR use roles for app permissions
    public IActionResult Get() => Ok("Authorized with scope!");
}
```

##### Step 6: Client App — Requesting a Token

- The client uses its client_id + client_secret to get a token:

```csharp
// Using Microsoft.Identity.Client (MSAL)
var app = ConfidentialClientApplicationBuilder
    .Create("CLIENT_APP_CLIENT_ID")
    .WithClientSecret("CLIENT_SECRET")
    .WithAuthority($"https://login.microsoftonline.com/YOUR_TENANT_ID")
    .Build();

var result = await app.AcquireTokenForClient(
    new[] { "api://YOUR_API_CLIENT_ID/.default" } // .default = all granted app permissions
).ExecuteAsync();

// Use result.AccessToken in HTTP calls
httpClient.DefaultRequestHeaders.Authorization =
    new AuthenticationHeaderValue("Bearer", result.AccessToken);
```


-----------------------------------------------------------------------------
