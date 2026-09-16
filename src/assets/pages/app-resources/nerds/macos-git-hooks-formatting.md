# Set up Git formatting hooks on macOS

This runbook installs the existing NERDS Git hooks into your local clone so that a normal
`git commit` formats Java code before Git creates the commit.

It does **not** change application code, Maven configuration, or the versioned hook scripts.

## How the existing setup works

There are three separate pieces:

1. The versioned source scripts live in `.githooks/`.
2. Git runs executable scripts in the local-only `.git/hooks/` directory during actions such as
   commit and push.
3. Maven contains the `fmt-maven-plugin`, which provides `./mvnw fmt:format`.

The `maven-resources-plugin` in `pom.xml` is an **installer**, not the hook itself. When Maven
runs its `validate` phase, that plugin copies scripts from `.githooks/` into `.git/hooks/`.

The pre-commit script runs:

```sh
./mvnw fmt:format
git add .
```

So the normal sequence is:

```text
git commit
  -> Git runs .git/hooks/pre-commit
  -> pre-commit runs ./mvnw fmt:format
  -> pre-commit stages the formatted files
  -> Git creates the commit
```

## Why macOS needs manual setup

The repository has:

- Windows-oriented scripts in `.githooks/`
- POSIX shell scripts in `.githooks/linux/`

The Maven profile that copies the POSIX shell scripts activates on Linux, not macOS. Therefore,
on a Mac, use the portable scripts from `.githooks/linux/` directly.

Also, Maven resource copying does not reliably preserve the executable permission required by
Git hooks. The `chmod` command below is required.

## One-time setup for this local clone

Run these commands from the NERDS API repository root:

```bash
cp .githooks/linux/pre-commit .git/hooks/pre-commit
cp .githooks/linux/pre-push .git/hooks/pre-push
chmod +x .git/hooks/pre-commit .git/hooks/pre-push
```

What each command does:

- The first command installs the formatter hook that Git invokes before a commit.
- The second installs the test hook that Git invokes before a push.
- `chmod +x` makes both files executable; Git ignores a non-executable hook.

This setup is required once per clone because `.git/hooks/` is not committed to the repository.

## Required configuration checks

### 1. Confirm Git is using the standard hooks directory

Run:

```bash
git config --get core.hooksPath
```

Expected result: no output.

If it prints a path, Git uses that directory instead of `.git/hooks/`. To return this repository
to the standard behavior, run:

```bash
git config --local --unset core.hooksPath
```

Then repeat the one-time setup commands above.

### 2. Confirm both scripts are executable

Run:

```bash
ls -l .git/hooks/pre-commit .git/hooks/pre-push
```

Each permissions field should begin with `-rwx`, for example:

```text
-rwxr-xr-x ... .git/hooks/pre-commit
```

### 3. Confirm the Mac-compatible interpreter

Run:

```bash
head -n 1 .git/hooks/pre-commit
```

Expected result:

```text
#!/bin/sh
```

Do not use the base `.githooks/pre-commit` file on macOS. Its first line targets the Windows
Git-Bash shell.

### 4. Confirm Maven can run the formatter

Run:

```bash
./mvnw fmt:format
```

This should complete successfully. It may modify Java files to apply the project formatter.
Review and stage any changes you want to commit.

## Normal daily use

Stage the files you intend to commit, then commit normally:

```bash
git add <files>
git commit -m "Describe the change"
```

The pre-commit hook formats the code automatically. The first commit after a formatter upgrade
or a large code change can take longer because Maven must run.

Before pushing:

```bash
git push
```

The pre-push hook runs `./mvnw clean test` and stops the push if the test command fails. It writes
Maven output to `mvnpush.log`; do not add that generated log to a commit.

## Important staging caveat

The current pre-commit script ends with `git add .`. That stages all changes under the repository,
including unrelated or untracked files—not only the files you staged before committing.

Before committing, check the entire worktree—not only the staged set:

```bash
git status
```

Commit only when there are no unrelated changes or untracked files you do not want included. Do
not rely on partial staging when using the current hook. To review what the hook committed, run:

```bash
git show --stat HEAD
```

## If the hook stops working

Re-run the one-time setup commands if:

- you cloned the repository again;
- `.git/hooks/` was deleted or replaced;
- `./mvnw validate` was run and replaced the macOS hook with the Windows-oriented source script;
- the hook is no longer executable.

```bash
cp .githooks/linux/pre-commit .git/hooks/pre-commit
cp .githooks/linux/pre-push .git/hooks/pre-push
chmod +x .git/hooks/pre-commit .git/hooks/pre-push
```

## Skipping a hook temporarily

Git allows a hook to be skipped with:

```bash
git commit --no-verify -m "Describe the change"
```

Use this only when you understand why the hook cannot run. The commit will not be formatted by
the pre-commit hook, and a later push may still be blocked by the pre-push test hook.
