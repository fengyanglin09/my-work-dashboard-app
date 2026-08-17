# GitHub Copilot Setup For JetBrains IDEs

Use this guide to install and sign in to GitHub Copilot in IntelliJ IDEA or another JetBrains IDE.

Important assigned GitHub username:

```text
Lin-Pengpeng_MCGHCA
```

The plugin install and sign-in flow is the same across JetBrains IDEs. These steps use IntelliJ IDEA as the example.

## Install The Plugin

1. Open the JetBrains IDE.
2. Go to `Plugins`.
3. Search for `GitHub Copilot`.
4. Click `Install`.
5. Click `Accept` if prompted.
6. Restart the IDE after the plugin finishes installing.

## Sign In

1. Open a project in the IDE.
2. Select the GitHub Copilot icon.
3. Click `Sign in to GitHub`.

Note: the Copilot icon may not appear until a project is open.

## Activate With GitHub Device Code

1. When the sign-in window appears, click `Copy and Open`.
2. Keep the device code from the JetBrains window available.
3. In the GitHub authorization page, select `Use a different account` if another account is already shown.
4. Enter the assigned GitHub username:

```text
Lin-Pengpeng_MCGHCA
```

5. Click `Sign in with your identity provider`.
6. Complete the Microsoft Authenticator prompt if one appears.
7. On the Device Activation page, enter the device code from JetBrains.
8. Click `Continue`.
9. Authorize the GitHub Copilot Plugin when prompted.
10. Relaunch the JetBrains IDE if prompted.

After the IDE relaunches, GitHub Copilot should be available.

## If GitHub Shows A 404 Page

If GitHub shows `404 This is not the web page you are looking for` during sign-in, retry the device activation in an incognito/private browser window.

1. In the IDE, select the GitHub Copilot icon.
2. Click `Sign in to GitHub`.
3. Click `Copy and Open`.
4. Keep the device code from the JetBrains window available.
5. Copy the GitHub authorization URL from the browser.
6. Open a new incognito/private browser window.
7. Go to:

```text
https://github.com/login/device/select_account
```

8. Enter the assigned GitHub username:

```text
Lin-Pengpeng_MCGHCA
```

9. Click `Sign in with your identity provider`.
10. Complete Microsoft Authenticator if prompted.
11. Enter the device code from JetBrains.
12. Click `Continue`.
13. Authorize the GitHub Copilot Plugin.
14. Relaunch the JetBrains IDE if prompted.

## Quick Checks

- The GitHub Copilot plugin is installed and enabled.
- A project is open in the IDE.
- The Copilot icon appears in the IDE.
- Sign-in used the assigned username `Lin-Pengpeng_MCGHCA`.
- The device code was entered at the GitHub Device Activation page.
