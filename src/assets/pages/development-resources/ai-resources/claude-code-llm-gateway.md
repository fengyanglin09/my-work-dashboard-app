# Claude Code Via Mayo LLM Gateway

This quick-start configures Claude Code to use the Mayo LLM Gateway through the Anthropic-compatible environment variables.

## 0. Create A Key

Go to the Mayo LLM Gateway UI and create a key:

[https://llmgateway.mayo.edu/ui/](https://llmgateway.mayo.edu/ui/)

## 1. Add Environment Variables

Append the required environment variables to `~/.zshrc`:

```shell
cat >> ~/.zshrc <<'EOF'
export ANTHROPIC_BASE_URL="https://llmgateway.mayo.edu"
export ANTHROPIC_AUTH_TOKEN="<your key here>"
EOF
```

Reload your shell config:

```shell
source ~/.zshrc
```

Replace `<your key here>` with your actual key.

## 2. Confirm The Variables

```shell
echo "$ANTHROPIC_BASE_URL"
echo "$ANTHROPIC_AUTH_TOKEN"
```

The base URL should print:

```text
https://llmgateway.mayo.edu
```

The auth token command should print your key.

## 3. Run Claude Code

Start an interactive session:

```shell
claude
```

Start with an initial prompt:

```shell
claude "explain this project"
```

## Useful Claude Commands

### One-Off Questions

Ask a question and exit:

```shell
claude -p "summarize this repository"
```

Pipe a file or command output into Claude:

```shell
cat package.json | claude -p "explain the scripts"
```

```shell
git diff | claude -p "review this diff for bugs"
```

### Continue Work

Continue the most recent conversation in the current directory:

```shell
claude -c
```

Continue and ask a follow-up:

```shell
claude -c -p "check whether the last change needs tests"
```

Resume a named or saved session:

```shell
claude -r "auth-refactor" "continue from where we left off"
```

### Maintenance

Check install and settings health:

```shell
claude doctor
```

Update Claude Code:

```shell
claude update
```

Check auth status:

```shell
claude auth status --text
```

## Practical Prompts

Use these from the root of a project:

```shell
claude "read the app structure and tell me where the dashboard page data lives"
```

```shell
claude "find duplicated helper functions and suggest a small refactor"
```

```shell
claude "run the relevant build checks and summarize failures only"
```

```shell
claude "review the current git diff for bugs, regressions, and missing tests"
```

## Notes

- Keep your gateway key private.
- Do not commit `ANTHROPIC_AUTH_TOKEN` to a repo.
- If a new terminal cannot see the variables, run `source ~/.zshrc` or open a new terminal window.

## References

- [Claude Code CLI reference](https://code.claude.com/docs/en/cli-reference)
