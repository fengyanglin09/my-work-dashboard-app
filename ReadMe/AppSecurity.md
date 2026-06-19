# App Security

This dashboard uses Google Identity Services (GIS) for browser sign-in.

## What This Protects

The Angular route guard protects the dashboard experience inside the app. A user must sign in with Google before Angular routes such as `/pages/specialty-app-dashboard` are shown.

Because this is still a static Angular app on GitHub Pages, this is not the same as server-side access control. If a document or asset is published publicly, the static host can still serve it directly. Treat the Google login as a personal dashboard gate, not as protection for confidential files.

## Google Cloud Setup

In Google Cloud Console:

1. Go to **APIs & Services**.
2. Open **OAuth consent screen** and configure the app branding.
3. Add your Google account as a test user if the app is in testing mode.
4. Open **Credentials**.
5. Create an **OAuth 2.0 Client ID** with application type **Web application**.

Authorized JavaScript origins:

```text
http://localhost
http://localhost:4200
http://localhost:4201
https://fengyanglin09.github.io
```

Redirect URIs are not required for the current GIS button flow.

## Angular Configuration

The Google client ID is stored in the Angular environment files:

```typescript
export const environment = {
    production: false,
    googleClientId: 'YOUR_CLIENT_ID.apps.googleusercontent.com'
};
```

The GIS browser script is loaded from `src/index.html`:

```html
<script src="https://accounts.google.com/gsi/client" async defer></script>
```

The app then initializes the Google button from `AuthService`:

```typescript
window.google!.accounts.id.initialize({
    client_id: environment.googleClientId,
    callback: (response) => {
        // Store and decode the Google ID token for the Angular session.
    }
});
```

## Route Guard

The app uses `authGuard` to redirect unsigned users to `/login`.

```typescript
export const authGuard: CanActivateFn = (_route, state) => {
    const auth = inject(AuthService);
    const router = inject(Router);

    if (auth.isLoggedIn()) {
        return true;
    }

    return router.createUrlTree(['/login'], {
        queryParams: { returnUrl: state.url }
    });
};
```

## GitHub Pages Routing

GitHub Pages is static hosting. It does not know how to serve Angular deep routes directly.

Use hash URLs for deployed routes:

```text
https://fengyanglin09.github.io/my-work-dashboard-app/#/pages/specialty-app-dashboard
```

The production build uses:

```json
"baseHref": "/my-work-dashboard-app/"
```

## Security Notes

- Do not put client secrets in Angular.
- The Google client ID is safe to expose in browser code.
- Client-side token decoding is useful for UI state, but it is not a substitute for server-side token verification.
- If the dashboard ever stores sensitive files, put access control in front of the static site with something like Cloudflare Access, Azure Static Web Apps auth, or a backend that verifies Google ID tokens.
