# Gemini Scout Workflow For Codex

This setup uses Gemini CLI as a local scouting helper so Codex CLI can spend fewer tokens on broad exploration.

Gemini reads, searches, summarizes, drafts low-risk boilerplate, and reviews errors or diffs. Codex makes final code changes, integrates behavior, and verifies the result.

## Requirements

- Bash
- Gemini CLI installed as `gemini`
- Optional but recommended: `rg` from ripgrep
- Optional: Git, for `review-diff`

## Setup

Run the scripts directly from this repo:

```bash
chmod +x tools/ask-gemini tools/summarize-file tools/find-related-files tools/make-context-pack tools/review-diff
tools/ask-gemini "Say hello in one sentence"
```

Or copy them into your local PATH:

```bash
sudo cp tools/ask-gemini tools/summarize-file tools/find-related-files tools/make-context-pack tools/review-diff /usr/local/bin/
```

If you prefer project-local commands, keep them in `tools/` and run them as `tools/make-context-pack`.

## Commands

### ask-gemini

Send a direct prompt:

```bash
tools/ask-gemini "How do I list files in this directory?"
```

Use piped content:

```bash
cat src/main.js | tools/ask-gemini "Summarize likely edit points"
```

### summarize-file

Summarize one file for Codex:

```bash
tools/summarize-file src/utils.js
```

The output focuses on classes, methods, variables, dependencies, and likely edit points.

### find-related-files

Find likely files before Codex scans the repo:

```bash
tools/find-related-files "add a new endpoint to the API"
```

The output is a compact table with file paths, reasons, and confidence.

### make-context-pack

Create a context pack:

```bash
tools/make-context-pack "add a new endpoint to the API"
```

This writes `context-pack.md` with:

- Brief project overview
- Relevant files
- File summaries
- Key methods and classes
- Suggested edit locations
- Warnings and risks
- Suggested next commands

You can choose a custom output file:

```bash
tools/make-context-pack "refactor the auth logic" docs/auth-context.md
```

### review-diff

Review current git diff:

```bash
tools/review-diff
```

Or review a specific diff:

```bash
git diff -- src/ | tools/review-diff
```

This is only a quick scout review. Codex should still perform final review.

## Example Workflow

From the root of a project:

```bash
tools/find-related-files "refactor the authentication module"
tools/make-context-pack "refactor the authentication module"
codex
```

Then tell Codex:

```text
Use context-pack.md to refactor the authentication module. Keep changes minimal.
```

## Notes

- The scripts skip common heavy folders such as `node_modules`, `bin`, `obj`, `build`, `dist`, and `.git`.
- `make-context-pack` includes short previews of likely source/config files and asks Gemini to keep the output compact.
- Gemini output can be wrong or incomplete. Codex should verify paths, symbols, and behavior before editing.
- Do not use Gemini as final authority for architecture, security-sensitive changes, or final code review.
