## Cleo Harmony

Cleo Harmony Home Page - https://itconnect.mayo.edu/cleo-harmony


### Developer Login
- To request access to the CLEO HARMONY envrironment, please request access using SAILPOINT

| Environment | URL |
|-------------|-----|
| Development | https://developer.dev.imftportal.mayo.edu |
| TEST | https://developer.test.imftportal.mayo.edu |
| PRODUCTION | https://developer.imftportal.mayo.edu |


### STEPS followed for Cleo Harmony Setup
1. How to create SFTP / Portal Users - https://mcsm.service-now.com/nav_to.do?uri=%2Fkb_view.do%3Fsysparm_article%3DKB0082138
2. How to create SSH FTP (SFTP) Host - https://mcsm.service-now.com/nav_to.do?uri=%2Fkb_view.do%3Fsysparm_article%3DKB0078986


---


## Connecting to Cleo Harmony SFTP Server
1. open SSH client session to SFTP server (using Spring’s DefaultSftpSessionFactory)
2. during session establishment, server sends its host key (public key)
3. client checks if host key is known/trusted (using Spring’s SftpSessionFactory.setHostKeyVerifier)
4. if host key is trusted, session continues; if not, session establishment fails with exception
5. if session is established, client can perform SFTP operations (list, download, etc)
6. if host key verification fails, client should log error and alert (e.g. email) to investigate potential security issue


#### Fetch the public host key from the SFTP server (e.g. using ssh-keyscan) and add it to your Spring SftpSessionFactory config:

```shell
ssh-keyscan -t rsa dev.imftportal.mayo.edu
```

#### turn the public key into fingerprint format (e.g. using ssh-keygen):

```shell
ssh-keyscan -t rsa dev.imftportal.mayo.edu | ssh-keygen -lf -
```


#### create a known_hosts file with the server's host key (e.g. using echo):

```yaml
dev.imftportal.mayo.edu ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAACAQCZhkiF+v69XqPlQ0DobT14jtw7Yp9b+0Bq6lZsaar2t70JI81Uu8fN8/asCYSjS8zyfe5j3JvaoKpGOSmQJqWHAGG7O6wJLi4WHnzdeTuOgpkDfkENFwo4iSlUMzxMULELKcYRj+nx7XuoIFKj/gJI1uXtqSRXOifCZPDbs6w9Am1jRcmawnKNPauBrOZKdIUy+XzTSZ1lfZ++1ybUOd3oRJ0zXTZ/bSXSRxuKny1snyTaM38ixeu5n8T7Bg8ImhS27Pv41SedWYoNpxO3oo2MAzTotGGjKGY4GRYl9z20DYNvunt13LlyCQnQfjEmLky4Kj17CK9gPPUcuEkfHzNPKgC9A5IalY1fJfXaabZ6E8XIrN0gfCgOTgwfPnsBB/UNwrUwa73hMz7wLfQtrRDLVvLPKK0d2+yEkR+kt6rzybSg9yZDX4AVCgwfZac6RlKhTdAyneJwIFokLcCXoo42MZh/6cwrRUgduFL0t5cLH/aBP5H/eOQzxPZNpj41VxmdoBC6rhkc5SS5t3srY0fW0cXruLn7ARQ6F4cb/39QWJB2xzZDiESIFArzwq+gDp5PmAz6fBZ6hPTQ7webWx47aBePqe34ZhSXkoiILpNLyYJdbKf+5dxb6AMGHD6U34Qr12BV5bYk7/PA2pjM0Iysj5DhSGR/RL2OdBPbUGwFqQ==
test.imftportal.mayo.edu ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAACAQCZhkiF+v69XqPlQ0DobT14jtw7Yp9b+0Bq6lZsaar2t70JI81Uu8fN8/asCYSjS8zyfe5j3JvaoKpGOSmQJqWHAGG7O6wJLi4WHnzdeTuOgpkDfkENFwo4iSlUMzxMULELKcYRj+nx7XuoIFKj/gJI1uXtqSRXOifCZPDbs6w9Am1jRcmawnKNPauBrOZKdIUy+XzTSZ1lfZ++1ybUOd3oRJ0zXTZ/bSXSRxuKny1snyTaM38ixeu5n8T7Bg8ImhS27Pv41SedWYoNpxO3oo2MAzTotGGjKGY4GRYl9z20DYNvunt13LlyCQnQfjEmLky4Kj17CK9gPPUcuEkfHzNPKgC9A5IalY1fJfXaabZ6E8XIrN0gfCgOTgwfPnsBB/UNwrUwa73hMz7wLfQtrRDLVvLPKK0d2+yEkR+kt6rzybSg9yZDX4AVCgwfZac6RlKhTdAyneJwIFokLcCXoo42MZh/6cwrRUgduFL0t5cLH/aBP5H/eOQzxPZNpj41VxmdoBC6rhkc5SS5t3srY0fW0cXruLn7ARQ6F4cb/39QWJB2xzZDiESIFArzwq+gDp5PmAz6fBZ6hPTQ7webWx47aBePqe34ZhSXkoiILpNLyYJdbKf+5dxb6AMGHD6U34Qr12BV5bYk7/PA2pjM0Iysj5DhSGR/RL2OdBPbUGwFqQ==
imftportal.mayo.edu ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAACAQCwLYvjOaVBfahWL7oT9s9sOp79ImgcZbw/4tKdoOMxF+KwR0JEkth2xrydmV5MvZSlA1jPS/XqJavCnDUnJQS20zqElsOF0TxoVW0D6TlA9ffIHuKYIP+sAwWzGatIdRel/8lBl11N1IqN7mhr83ZqTYaDUS5McNCszneCf1yXqGnn+x4tnXKZ0O23roQTxMgwVG2pwWSI3v4uPzC2Xy0NAwUUHEDKi2adE94EMSJakzP5SpTM4hb9fXe+ZypynXcWALhlNKT67Rrb+RaHKb2Vl1EnS1shc5MktrQ/b7tlzRW8Qx/MREIEGInRuAtlk6+uNzQ+rLRQ5a2UU/7Y8/oEu/JqU2qKs8P6gxTr4ZaG5yS4hto0Z3Ed2Zmv/Ld0rsKSL0Mfg4ypZoWKTGW/OtGeSp6d1fKUoI3n1J41WMKitPWT+haHmOgC7BfMcWpOlcZe0vYecQa1VTUgagfjSv5H0kEC9BWwoEdef2Un7c6R1422g/BSZOpjLBm7HU+m8jmuxn2K549y1dmSXvau1LaFFlDjlDTNpvQRH7/loJmEIF9vuD+x7Wgu1c+04jVn4dYr+6Bwg8Z6KRBOO/yG0X5AZwVVHgp9M56naOxSJ0FPxK62qEIEGF0KU3/l/6IxMuEM2ljdWJSjFraIcEAFigTaGHUemLeGznBITCInFDq1SQ==
```

#### configure your Spring SftpSessionFactory to use the known_hosts file for host key verification:

```java
@Configuration
@Slf4j
public class SftpSessionConfig {

//    private static final Logger logger = LoggerFactory.getLogger(SftpSessionConfig.class);

    @Bean
    public DefaultSftpSessionFactory sftpSessionFactory(SftpProps props) {
        DefaultSftpSessionFactory factory = new DefaultSftpSessionFactory(true);

        factory.setHost(props.host());
        factory.setPort(props.port());
        factory.setUser(props.username());
        factory.setPassword(props.password());

        // Host key handling (dev-friendly)
        // By default we prefer to use a known_hosts file shipped on the classpath.
        factory.setAllowUnknownKeys(false);
        // Load known_hosts from classpath (do NOT pass a literal "classpath:" string to FileSystemResource)
        Resource knownHosts = new ClassPathResource("trusted-host/known_hosts");
        if (knownHosts.exists()) {
            factory.setKnownHostsResource(knownHosts);
        } else {
            // In development environments it's convenient to fall back to allowing unknown keys
            // rather than failing with FileNotFoundException. In production you should ensure
            // the known_hosts file is present and remove this fallback.
            System.out.println("cannot find known hosts file");
            log.warn("Known hosts resource not found on classpath: trusted-host/known_hosts. Falling back to allowUnknownKeys=true.");
            factory.setAllowUnknownKeys(true);
        }

        // IMPORTANT: logs show the client tries keyboard-interactive and can't answer prompts.
        // Force password-only auth so it won't attempt keyboard-interactive.
        factory.setSshClientConfigurer(sshClient ->
                sshClient.setUserAuthFactories(List.of(new UserAuthPasswordFactory()))
        ); // available in SI 7.x :contentReference[oaicite:1]{index=1}

        // Optional: increase from default 30s (your earlier timeouts were 30000ms)
        factory.setTimeout(60_000); // also in SI 7.x :contentReference[oaicite:2]{index=2}

        return factory;
    }

    @Bean
    public SftpRemoteFileTemplate sftpTemplate(DefaultSftpSessionFactory sf) {
        return new SftpRemoteFileTemplate(sf);
    }
}

```





