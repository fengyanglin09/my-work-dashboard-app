# Frequently Used Git Commands

A practical reference for common Git commands, plus a few "oops, I need to recover" commands.

## Check Current State

```bash
git status
git branch -vv
git log --oneline -10
```

Useful when you want to answer: what branch am I on, what changed, and what are my latest commits?

```bash
git diff
git diff --cached
git diff --cached <file>
git show <commit-hash>
```

Use `git diff` for unstaged changes and `git diff --cached` for staged changes.

## Stage And Commit

```bash
git add <file>
git add -A
git add -p
git restore --staged <file>
```

`git add -p` is great when a file has multiple unrelated changes and you only want to commit part of it.

```bash
git commit -m "message"
git commit
git commit --amend
git commit --amend --no-edit
```

Use `--amend` only when the last commit has not been pushed/shared, because it rewrites that commit.

## Undo A Local Commit

```bash
git reset --soft HEAD~1
```

This un-commits the last commit but keeps all changes staged.

| Command | Un-commits? | What happens to your changes |
|---|---|---|
| `git reset --soft HEAD~1` | Yes | Kept and staged |
| `git reset --mixed HEAD~1` | Yes | Kept but unstaged |
| `git reset HEAD~1` | Yes | Same as mixed: kept but unstaged |
| `git reset --hard HEAD~1` | Yes | Deleted |

`HEAD~1` means one commit before the current `HEAD`. Use `HEAD~2` for two commits back.

Use `reset` for local commits you have not pushed. For a pushed/shared commit, use `revert`.

```bash
git revert <commit-hash>
```

`git revert` creates a new commit that undoes the old commit without rewriting shared history.

## Discard Local Changes

```bash
git restore <file>
git restore .
```

These discard unstaged changes. Use carefully.

```bash
git clean -n
git clean -fd
```

`git clean -n` previews untracked files that would be removed. `git clean -fd` actually deletes them.

## Branches

```bash
git branch
git switch <branch>
git switch -c <new-branch>
git branch -m <new-name>
```

```bash
git branch -d <branch>
git branch -D <branch>
```

Use `-d` for merged branches. Use `-D` only when you intentionally want to force-delete.

## Sync With Remote

```bash
git fetch
git pull
git pull --rebase
```

`git fetch` downloads remote changes without changing your working branch. `git pull` fetches and merges. `git pull --rebase` fetches and replays your local commits on top of the remote branch.

```bash
git push
git push -u origin <branch>
git push --force-with-lease
```

Prefer `--force-with-lease` over `--force`. It refuses to overwrite remote work if someone else pushed after your last fetch.

## Stash Temporary Work

```bash
git stash
git stash -u
git stash list
```

```bash
git stash pop
git stash apply
git stash drop
```

Use `git stash -u` when you also need to stash new untracked files.

## Inspect History

```bash
git log --oneline --graph --all
git log -p <file>
git log --author="name"
git blame <file>
git show <commit>:<file>
```

`git show <commit>:<file>` is useful when you want to view a past version of one file without checking it out.

## Compare Branches Or Commits

```bash
git diff <branch1> <branch2>
git diff main...feature
git diff <commit1> <commit2> -- <file>
```

`main...feature` shows what changed on `feature` since it branched from `main`.

## Recovery

```bash
git reflog
```

`git reflog` is your safety net. It shows where `HEAD` has recently been, which helps recover commits after a bad reset or branch move.

```bash
git reset --hard <hash>
git restore --source=<hash> <file>
git cherry-pick <hash>
```

Use `git restore --source=<hash> <file>` when you only want one file from an older commit.

## Quick Undo Recipes

| I want to... | Command |
|---|---|
| Undo last commit and keep changes staged | `git reset --soft HEAD~1` |
| Undo last commit and keep changes unstaged | `git reset HEAD~1` |
| Throw away last commit and its changes | `git reset --hard HEAD~1` |
| Undo an already-pushed commit | `git revert <hash>` |
| Fix the last commit message | `git commit --amend` |
| Add staged files to the last commit | `git commit --amend --no-edit` |
| Unstage a file | `git restore --staged <file>` |
| Discard changes to a file | `git restore <file>` |
| Preview untracked files to delete | `git clean -n` |
| Recover a lost commit | `git reflog`, then `git reset --hard <hash>` |
