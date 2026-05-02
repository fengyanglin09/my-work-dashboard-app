# Managing Multiple Java Versions on macOS

This document provides a step-by-step guide to install and manage multiple Java versions on macOS using Homebrew and jenv.

---

## Step 1: Install Homebrew (if not already installed)

Homebrew is a package manager for macOS. If you don’t have it installed, run the following command:

```zsh
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

---

## Step 2: Install Java Versions Using Homebrew

Use Homebrew to install the desired Java versions. For example:

```zsh
brew install openjdk@17
brew install openjdk@21
```

Homebrew installs Java versions in `/usr/local/opt/` or `/opt/homebrew/opt/` (depending on your system architecture).

---

## Step 3: Install jenv for Java Version Management

jenv is a tool to manage and switch between multiple Java versions.

1. Install jenv:
   ```zsh
   brew install jenv
   ```

2. Add jenv to your shell configuration:
   ```zsh
   echo 'export PATH="$HOME/.jenv/bin:$PATH"' >> ~/.zshrc
   echo 'eval "$(jenv init -)"' >> ~/.zshrc
   source ~/.zshrc
   ```

---

## Step 4: Add Installed Java Versions to jenv

After installing Java, add the versions to jenv:

```zsh
jenv add /Library/Java/JavaVirtualMachines/openjdk-17.jdk/Contents/Home
jenv add /Library/Java/JavaVirtualMachines/openjdk-21.jdk/Contents/Home
```

List the added Java versions:

```zsh
jenv versions
```

---

## Step 5: Set the Active Java Version

You can set the Java version globally, locally, or for the current shell:

- **Set Global Version**:
  ```zsh
  jenv global 17
  ```

- **Set Local Version (for a specific project)**:
  ```zsh
  jenv local 21
  ```

- **Set Shell Version (for the current terminal session)**:
  ```zsh
  jenv shell 21
  ```

Verify the active Java version:

```zsh
java -version
```

---

## Step 6: Troubleshooting

- **Ensure Maven Uses the Correct Java Version**:
  Run the following command to check Maven’s Java version:
  ```zsh
  mvn -v
  ```

- **If Java Version is Not Detected**:
  Ensure the `JAVA_HOME` environment variable is set correctly. For example:
  ```zsh
  export JAVA_HOME=$(/usr/libexec/java_home -v 17)
  ```

---

By following these steps, you can easily manage and switch between multiple Java versions on macOS. Let me know if you need further assistance!
