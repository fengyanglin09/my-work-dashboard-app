# Java Version Management With SDKMAN

Use SDKMAN to install Java and switch between JDK versions without manually editing `JAVA_HOME`.

## Install SDKMAN

SDKMAN works on macOS, Linux, and Windows through WSL.

```shell
curl -s "https://get.sdkman.io" | bash
```

For ZSH, this also works:

```shell
curl -s "https://get.sdkman.io" | zsh
```

Open a new terminal, or load SDKMAN in the current terminal:

```shell
source "$HOME/.sdkman/bin/sdkman-init.sh"
```

Confirm the install:

```shell
sdk version
```

## Install Java

Install the latest stable Java version:

```shell
sdk install java
```

List available Java versions:

```shell
sdk list java
```

Install a specific version:

```shell
sdk install java 21.0.4-tem
```

The exact version identifiers change over time, so copy the version value from `sdk list java`.

## Switch Java Versions

Use a Java version only in the current terminal:

```shell
sdk use java 21.0.4-tem
```

Set a Java version as the default for new terminals:

```shell
sdk default java 21.0.4-tem
```

Check the active Java version:

```shell
sdk current java
```

Confirm what the shell sees:

```shell
java -version
```

```shell
echo "$JAVA_HOME"
```

## Project-Specific Java Version

From the project root, create an `.sdkmanrc` file:

```shell
sdk env init
```

Edit `.sdkmanrc` so it contains the Java version the project should use:

```text
java=21.0.4-tem
```

Switch to the project version:

```shell
sdk env
```

Install any missing versions from `.sdkmanrc`:

```shell
sdk env install
```

Return to your default Java version:

```shell
sdk env clear
```

## Optional Auto-Switching

To switch versions automatically when entering a project folder, edit:

```shell
~/.sdkman/etc/config
```

Set:

```text
sdkman_auto_env=true
```

With auto-env enabled, SDKMAN reads `.sdkmanrc` when you enter a project directory.

## Maintenance

Refresh SDKMAN metadata:

```shell
sdk update
```

Upgrade installed SDKs when updates are available:

```shell
sdk upgrade
```

Remove an old Java version:

```shell
sdk uninstall java 17.0.10-tem
```

Find the install path for a Java version:

```shell
sdk home java 21.0.4-tem
```

## Notes

- Use `sdk list java` before installing because Java version identifiers change.
- Use `sdk use` for a temporary shell-only switch.
- Use `sdk default` for your normal daily Java version.
- Use `.sdkmanrc` when a project must stay on a specific JDK.

## References

- [SDKMAN](https://sdkman.io/)
- [SDKMAN installation](https://sdkman.io/install/)
- [SDKMAN usage](https://sdkman.io/usage/)
- [SDKMAN Java candidate](https://sdkman.io/sdks/java/)
