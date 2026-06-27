# Importing a Certificate into Java `cacerts` on macOS (Homebrew OpenJDK)

## Scenario

Import a certificate (e.g., a Zscaler certificate) into the Java
truststore (`cacerts`) used by Homebrew OpenJDK.

------------------------------------------------------------------------

## 1. Default `cacerts` Password

The default password for the Java `cacerts` truststore is:

``` text
changeit
```

> Note: If you use `sudo`, the first password prompt is **your macOS
> administrator password**, **not** the keystore password.

------------------------------------------------------------------------

## 2. Verify the Truststore

List the certificates in the truststore:

``` bash
keytool -list \
  -keystore /opt/homebrew/opt/openjdk@21/libexec/openjdk.jdk/Contents/Home/lib/security/cacerts \
  -storepass changeit
```

If the command succeeds and displays something like:

``` text
Your keystore contains 109 entries
```

then the truststore was opened successfully and `changeit` is the
correct password.

------------------------------------------------------------------------

## 3. Import the Certificate

``` bash
sudo keytool -importcert \
  -trustcacerts \
  -alias zscaler-cert \
  -file zscalercert.der \
  -keystore /opt/homebrew/opt/openjdk@21/libexec/openjdk.jdk/Contents/Home/lib/security/cacerts \
  -storepass changeit
```

When prompted:

``` text
Trust this certificate? [no]:
```

Type:

``` text
yes
```

------------------------------------------------------------------------

## 4. Verify the Import

``` bash
sudo keytool -list \
  -keystore /opt/homebrew/opt/openjdk@21/libexec/openjdk.jdk/Contents/Home/lib/security/cacerts \
  -storepass changeit \
  -alias zscaler-cert
```

If the certificate details are displayed, the import was successful.

------------------------------------------------------------------------

## Troubleshooting

### "Password:" appears before the command runs

This is almost always **sudo** asking for your macOS login password.

### "Keystore was tampered with, or password was incorrect"

Possible causes:

-   You're using the wrong keystore.
-   The `cacerts` password has been changed from the default.
-   The file path is incorrect.

### Find the Java truststore in use

``` bash
java -XshowSettings:properties -version 2>&1 | grep "java.home"
```

The truststore is typically located at:

``` text
<java.home>/lib/security/cacerts
```

------------------------------------------------------------------------

## Key Takeaways

-   macOS password ≠ Java keystore password.
-   Default `cacerts` password is usually `changeit`.
-   Seeing "Your keystore contains ... entries" means the password
    worked.
-   Use `-importcert` to add trusted certificates.
-   Verify the import afterward with `keytool -list`.
