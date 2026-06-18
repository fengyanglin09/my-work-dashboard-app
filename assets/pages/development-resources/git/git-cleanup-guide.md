# Git History Cleanup Guide

## Problem

When sensitive files (passwords, secrets) or large files (>100MB) are committed to a git repo, simply deleting them in a new commit is not enough — they remain accessible in the commit history. GitHub will block pushes if it detects either exposed credentials (secret scanning) or files exceeding its 100MB size limit.

---

## Solution: `git filter-repo`

`git filter-repo` is the modern, recommended tool for rewriting git history. It replaces the older `git filter-branch` command.

### Install on Mac

```bash
brew install git-filter-repo
```

---

## Commands

### 1. Remove a file or folder from all history

```bash
git filter-repo --path path/to/secret-file --invert-paths
```

> `--invert-paths` means "keep everything *except* this path."

### 2. Remove multiple files/folders in one command

```bash
git filter-repo \
  --path frontend/node_modules --invert-paths \
  --path frontend/node/node --invert-paths
```

### 3. Replace a hardcoded secret string across all history

```bash
git filter-repo --replace-text <(echo 'your-actual-password==>REDACTED')
```

### 4. Force flag (if not on a fresh clone)

`git filter-repo` refuses to run on a repo that isn't a fresh clone. Either clone fresh first (recommended), or add `--force`:

```bash
git filter-repo --path path/to/file --invert-paths --force
```

### 5. Fresh clone workflow (recommended)

```bash
cd ..
git clone https://github.com/your-username/your-repo.git repo-clean
cd repo-clean
git filter-repo --path path/to/file --invert-paths
git push origin --force --all
git push origin --force --tags
```

### 6. Force push after rewriting history

```bash
git push origin --force --all
git push origin --force --tags
```

> If git complains about the remote after `filter-repo`, re-add it:
> ```bash
> git remote add origin https://github.com/your-username/your-repo.git
> ```

---

## Stop Tracking a File (Without Deleting It Locally)

If a file is already tracked by git but you want to remove it from the repo without deleting it from your machine:

```bash
# Remove a single file from tracking
git rm --cached path/to/file

# Remove a folder from tracking
git rm -r --cached path/to/folder

# Then commit the change
git commit -m "Stop tracking secret/large file"
git push
```

---

## Prevent It from Happening Again — `.gitignore`

Add the offending paths to `.gitignore` so they never get committed again:

```
# Secrets
.env
*.pem
config/secrets.yml

# Dependencies
node_modules/

# Large binaries
frontend/node/node
```

> **Important:** `.gitignore` only prevents *untracked* files from being added. If a file is already tracked, you must use `git rm --cached` first (see above).

---

## After Cleanup Checklist

- [ ] Rotate any exposed credentials immediately — assume they are compromised
- [ ] Verify the file is gone from history: `git log --all --full-history -- path/to/file`
- [ ] Add the path to `.gitignore`
- [ ] If collaborators have clones, notify them — they will need to re-clone or rebase since history has been rewritten
- [ ] If GitHub still flags the secret, go to **Settings → Code security → Secret scanning** on your repo to resolve the alert, or contact GitHub support to clear their cache
