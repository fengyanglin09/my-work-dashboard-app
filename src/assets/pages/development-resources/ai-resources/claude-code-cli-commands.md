# Claude Code CLI Commands

Useful Claude Code commands for day-to-day project work.

## Start A Session

Start Claude Code in the current project:

```shell
claude
```

Start with an initial prompt:

```shell
claude "review this project structure and explain where the main app routes live"
```

Ask a one-off question and exit:

```shell
claude -p "summarize the current package.json scripts"
```

Pipe content into Claude:

```shell
git diff | claude -p "review this diff for bugs and missing tests"
```

## Change Models

Inside a running Claude Code session, use the model picker:

```text
/model
```

Check the current model and session status:

```text
/status
```

Start a one-time session with a specific model:

```shell
claude --model sonnet
```

```shell
claude --model opus
```

You can also use a full model name when needed:

```shell
claude --model claude-sonnet-4-20250514
```

For a persistent default, set the environment variable in your shell config:

```shell
export ANTHROPIC_MODEL="claude-sonnet-4-20250514"
```

If you are using the Mayo LLM Gateway, keep your gateway variables from the local setup doc in place as well.

## Work With Images

Use images when a screenshot, diagram, or mockup explains the problem better than text.

Paste an image into the running Claude Code prompt:

```text
Ctrl+V
```

On macOS, use `Ctrl+V` for image paste in most terminals. Some terminals may also support `Cmd+V`.

Drag an image into the Claude Code terminal, then ask:

```text
Describe the UI issue in this screenshot and suggest the smallest CSS fix.
```

Reference an image by path:

```text
Analyze this screenshot: /Users/your.name/Desktop/login-error.png
```

Compare a screenshot to the implementation:

```text
This screenshot shows the target layout. Inspect the Angular component and update the CSS to match it, then run the build.
```

## Continue Or Resume Work

Continue the most recent session in this project:

```shell
claude --continue
```

Continue and ask a follow-up in print mode:

```shell
claude --continue -p "summarize what changed and what still needs verification"
```

Choose a previous session to resume:

```shell
claude --resume
```

Resume a known session id:

```shell
claude --resume "SESSION_ID"
```

## Manage Context

Clear the conversation and start fresh:

```text
/clear
```

Compact a long conversation:

```text
/compact
```

Compact with focus:

```text
/compact keep the auth decisions, route changes, and remaining TODOs
```

Inspect context usage:

```text
/context
```

## Permissions And Project Setup

Create or refresh project memory:

```text
/init
```

Edit project memory:

```text
/memory
```

Review tool permission rules:

```text
/permissions
```

Add another directory for the current session:

```shell
claude --add-dir ../my-spring-lib
```

## Handy Interactive Commands

```text
/help
```

Show available commands.

```text
/copy
```

Copy the last response.

```text
/cost
```

Show usage information.

```text
/doctor
```

Check installation health.

## Useful Prompt Patterns

Ask for investigation before edits:

```text
Read the auth flow first. Tell me the smallest safe change before editing files.
```

Ask for a focused review:

```text
Review the current diff for bugs, route regressions, and missing tests. Findings first.
```

Ask for verification:

```text
Make the change, run the relevant Angular build, and summarize only failures or important warnings.
```

Ask with an image:

```text
Use this screenshot as the target. Fix the layout so the visible spacing and alignment match, then verify with a screenshot.
```

## References

- [Claude Code CLI reference](https://docs.anthropic.com/en/docs/claude-code/cli-usage)
- [Claude Code commands](https://code.claude.com/docs/en/commands)
- [Claude Code common workflows - images](https://code.claude.com/docs/en/common-workflows)
- [Claude Code interactive mode](https://code.claude.com/docs/en/interactive-mode)
