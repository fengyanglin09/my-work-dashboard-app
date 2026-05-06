# JDK 17 to 21 Upgrade Plan - NERDS_UI

**Date**: May 6, 2026  
**Project**: NERDS_UI Angular Application  
**Upgrade**: JDK 17 (temurin-17) → JDK 21 (temurin-21)

## Status

✅ **Step 1 Completed**: IntelliJ IDEA configuration updated  
⏳ **Next Step**: Install JDK 21 and configure IDE

---

## Executive Summary

NERDS_UI is primarily an Angular/TypeScript application with no Java source code. However, JDK is used for:
- IntelliJ IDEA IDE configuration
- SonarQube code analysis (if running locally)
- Backend Java webservice integration (separate project)

This upgrade is **low-risk** as it only affects IDE and tooling configuration, not application runtime code.

---

## Upgrade Steps

### ✅ COMPLETED: Step 1 - Update IntelliJ IDEA Configuration

**File Modified**: `.idea/misc.xml`

**Changes Made**:
- `languageLevel`: `JDK_17` → `JDK_21`
- `project-jdk-name`: `temurin-17` → `temurin-21`

### ⏳ PENDING: Step 2 - Install JDK 21

Due to sudo permission restrictions, manual installation is required. Choose one of these methods:

#### Option A: Download from Adoptium (Recommended)

1. Visit [Eclipse Temurin Downloads](https://adoptium.net/temurin/releases/?os=mac&arch=arm)
2. Download **JDK 21 (LTS)** for **macOS** (ARM64 architecture)
3. Run the `.pkg` installer (you'll need admin rights)
4. Verify installation: `/usr/libexec/java_home -V`

#### Option B: Use SDKMAN (Alternative)

If you have SDKMAN installed:
```bash
sdk install java 21.0.5-tem
sdk default java 21.0.5-tem
```

#### Option C: Manual Homebrew with Admin Rights

If you can get temporary admin access:
```bash
brew install --cask temurin@21
```

### ⏳ PENDING: Step 3 - Configure IntelliJ IDEA SDK

After JDK 21 is installed:

1. Open **IntelliJ IDEA**
2. Go to **File → Project Structure** (⌘ + ;)
3. Under **Project Settings → Project**:
   - Set **SDK** to: `temurin-21` (or browse to the JDK 21 installation path)
   - Set **Language level** to: `21 - Pattern matching for switch`
4. Click **Apply** and **OK**

### ⏳ PENDING: Step 4 - Verify Configuration

Run these verification commands:

```bash
# Verify JDK 21 is installed
/usr/libexec/java_home -V

# Verify project builds successfully
npm install
npm run build

# Verify tests pass
npm test

# Verify dev server runs
npm start
```

### ⏳ PENDING: Step 5 - SonarQube Scanner Compatibility

If you run SonarQube analysis locally:

1. Check your SonarScanner version:
   ```bash
   sonar-scanner --version
   ```

2. Ensure SonarScanner is **version 5.0+** (supports JDK 17-21)
   - If older, upgrade: `brew upgrade sonar-scanner`

3. Test analysis runs without errors

---

## Key Changes Between JDK 17 and 21

Since this project has no Java source code, these changes don't directly impact the application but are good to know for the backend webservice:

### New Features in JDK 21
- **Virtual Threads** (Project Loom) - Preview
- **Pattern Matching for switch** - Standard feature
- **Record Patterns** - Standard feature
- **Sequenced Collections** - New interfaces
- **String Templates** (Preview)

### Deprecations & Removals
- No major breaking changes for JDK 17 → 21 migration
- Most JDK 17 code runs on JDK 21 without modification

### Performance Improvements
- Garbage collection enhancements
- Startup time improvements
- Better memory management

---

## Rollback Strategy

If issues occur, revert to JDK 17:

1. **Revert `.idea/misc.xml`**:
   ```bash
   git checkout .idea/misc.xml
   ```

2. **Configure IntelliJ IDEA**:
   - File → Project Structure → Project
   - Set SDK back to `temurin-17`

3. **Verify functionality**:
   ```bash
   npm install && npm test && npm run build
   ```

---

## CI/CD Considerations

### Azure DevOps Pipeline Updates (If Applicable)

If this project has CI/CD pipelines that use Java:

1. **Check pipeline configuration** files (azure-pipelines.yml, etc.)
2. **Update Java version** in pipeline agents:
   ```yaml
   - task: JavaToolInstaller@0
     inputs:
       versionSpec: '21'
       jdkArchitectureOption: 'x64'
       jdkSourceOption: 'PreInstalled'
   ```

3. **Update SonarQube analysis** tasks if configured

### Backend Webservice Coordination

The README mentions a companion Java webservice. Coordinate with the backend team to:

1. Ensure backend is compatible with JDK 21
2. Plan parallel upgrade if needed
3. Test integration after both upgrades

---

## Team Synchronization

To ensure all team members use JDK 21, create a `.sdkmanrc` file:

```bash
# .sdkmanrc
java=21.0.5-tem
```

Or create a `.java-version` file:

```bash
# .java-version
21
```

Add to project root and commit to version control.

---

## Verification Checklist

- [ ] JDK 21 installed and verified with `/usr/libexec/java_home -V`
- [ ] IntelliJ IDEA Project SDK configured to JDK 21
- [ ] `.idea/misc.xml` updated (already completed ✅)
- [ ] npm install runs successfully
- [ ] npm test passes all tests
- [ ] npm run build completes without errors
- [ ] npm start launches dev server successfully
- [ ] SonarQube analysis runs (if applicable)
- [ ] CI/CD pipelines updated (if applicable)
- [ ] Backend webservice compatibility verified (if applicable)
- [ ] Team members notified of upgrade

---

## Java Upgrade Tools Reference

While this project doesn't have Java source code, these tools are useful for Java projects:

### jdeps (Java Dependency Analysis)
```bash
# Analyze dependencies and module usage
jdeps --class-path 'libs/*' application.jar
```

### jdeprscan (Deprecated API Scanner)
```bash
# Scan for deprecated APIs
jdeprscan --class-path 'libs/*' application.jar --release 21
```

### jlink (Custom Runtime Images)
```bash
# Create custom JRE with only needed modules
jlink --module-path $JAVA_HOME/jmods --add-modules java.base --output custom-runtime
```

---

## Resources

- [Eclipse Temurin Downloads](https://adoptium.net/temurin/releases/)
- [JDK 21 Release Notes](https://openjdk.org/projects/jdk/21/)
- [Migration Guide: JDK 17 to 21](https://docs.oracle.com/en/java/javase/21/migrate/getting-started.html)
- [IntelliJ IDEA JDK Configuration](https://www.jetbrains.com/help/idea/sdk.html)
- [SonarQube Requirements](https://docs.sonarsource.com/sonarqube/latest/requirements/prerequisites-and-overview/)

---

## Support & Troubleshooting

### Issue: "Project SDK is not defined"

**Solution**: File → Project Structure → Project → Set SDK to temurin-21

### Issue: "Cannot find Java compiler"

**Solution**: Verify JAVA_HOME environment variable:
```bash
export JAVA_HOME=$(/usr/libexec/java_home -v 21)
```

### Issue: npm commands fail after JDK upgrade

**Solution**: JDK upgrade shouldn't affect npm. Try:
```bash
rm -rf node_modules package-lock.json
npm install
```

---

## Conclusion

The JDK 17 → 21 upgrade for NERDS_UI is straightforward as the project contains no Java source code. The main task is installing JDK 21 and updating IntelliJ IDEA's configuration (already completed for config files).

**Next Action**: Install JDK 21 using one of the methods in Step 2, then configure the IntelliJ IDEA SDK.

