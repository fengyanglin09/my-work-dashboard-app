# Understanding Java Keystores and Truststores

## Why I Needed to Import the Zscaler Certificate

This guide explains:

- What a keystore is
- What a truststore is
- What `cacerts` is
- Why Java was failing SSL connections
- What we did to fix it

---

# What is a Keystore?

Think of a **keystore** as a **locked safe**.

Inside the safe are cryptographic items such as:

- Certificates
- Private keys
- Trusted Certificate Authorities (CAs)

The password protects the safe from unauthorized modifications.

There are two common types of Java keystores.

---

# 1. Identity Keystore

An identity keystore contains **your own identity**.

For example:

- Your server certificate
- Your private key

Think of it as carrying your **passport**.

When a client connects to your server, your server presents this certificate to prove its identity.

---

# 2. Truststore

A truststore contains certificates that Java **trusts**.

Instead of proving who **you** are, it answers:

> "Which Certificate Authorities do I trust?"

The file we modified was:

```text
.../lib/security/cacerts
```

This is Java's default truststore.

---

# What is `cacerts`?

Every JDK ships with a truststore called `cacerts`.

It already contains trusted Certificate Authorities such as:

- DigiCert
- GlobalSign
- Amazon
- Microsoft
- Let's Encrypt

When Java connects to an HTTPS website like:

```text
https://google.com
```

Google sends its certificate.

Java checks:

> "Is the certificate issued by a CA that I trust?"

If yes:

```text
Connection succeeds.
```

If not:

```text
SSLHandshakeException
PKIX path building failed
```

---

# Why Did My Application Fail?

My company uses **Zscaler**.

Normally the connection looks like:

```text
Java
   |
   | HTTPS
   v
Google
```

With Zscaler installed, it becomes:

```text
Java
   |
   | HTTPS
   v
Zscaler
   |
   | HTTPS
   v
Google
```

Zscaler inspects encrypted traffic for security purposes.

Instead of forwarding Google's original certificate, it generates a new certificate signed by the company's own Certificate Authority.

Java receives something like:

```text
Issuer:
    Zscaler Root CA
```

instead of

```text
Issuer:
    DigiCert
```

Since Java had never seen the Zscaler CA before, it refused the connection.

---

# What Did We Do?

We told Java:

> "You can trust certificates signed by Zscaler."

We did this by importing the Zscaler certificate into Java's truststore.

The command was:

```bash
keytool -importcert \
    -trustcacerts \
    -alias zscaler-cert \
    -file zscalercert.der \
    -keystore cacerts
```

This adds the certificate to Java's trusted Certificate Authorities.

Before:

```text
cacerts
 ├── DigiCert
 ├── Amazon
 ├── Microsoft
 └── ...
```

After:

```text
cacerts
 ├── DigiCert
 ├── Amazon
 ├── Microsoft
 ├── Let's Encrypt
 ├── Zscaler
 └── ...
```

Now when Java encounters:

```text
Issuer = Zscaler
```

it recognizes the issuer as trusted and the SSL connection succeeds.

---

# Why Was There a Password?

The truststore is protected so that unauthorized users cannot modify it.

Without protection, malware could add fake Certificate Authorities and compromise secure connections.

Oracle ships Java with a default truststore password:

```text
changeit
```

Many installations continue using this default password.

---

# Why Did I See Two Password Prompts?

There were actually **two different passwords** involved.

## 1. macOS Password

When using:

```bash
sudo
```

macOS asks:

> "Are you allowed to modify this system file?"

This password is:

- Your Mac login password

---

## 2. Java Keystore Password

After macOS grants permission, Java asks:

> "Are you allowed to modify the truststore?"

The default password is:

```text
changeit
```

These two passwords protect different things.

---

# How Did We Know the Password Worked?

We ran:

```bash
keytool -list \
  -keystore .../cacerts \
  -storepass changeit
```

The output showed:

```text
Your keystore contains 109 entries
```

This confirmed that:

- The keystore opened successfully.
- The password `changeit` was correct.

---

# Visual Summary

```text
                 Java Application
                        │
                 HTTPS Request
                        │
                        ▼
            Receives Server Certificate
                        │
                        ▼
          Is the issuer trusted?
                        │
           ┌────────────┴────────────┐
           │                         │
         YES                        NO
           │                         │
    Continue connection     SSL Handshake Failed
           │
           ▼
     Check Java Truststore (`cacerts`)
```

---

# Key Takeaways

- A **keystore** is a secure container for certificates and keys.
- A **truststore** contains Certificate Authorities that Java trusts.
- `cacerts` is Java's default truststore.
- Zscaler replaces website certificates with certificates signed by the Zscaler Root CA.
- Java initially rejected these certificates because it didn't trust the Zscaler CA.
- Importing the Zscaler certificate taught Java to trust certificates issued by Zscaler.
- The macOS administrator password and the Java truststore password are two separate passwords.
- Seeing **"Your keystore contains ... entries"** confirms the truststore password was accepted.
