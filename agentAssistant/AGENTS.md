# Agent Instructions

This project can use Gemini CLI as a low-cost scouting assistant before Codex CLI performs final reasoning and edits.

## Roles

- Gemini: read, search, summarize, draft low-risk boilerplate, explain errors, and prepare compact context.
- Codex: make final code changes, integrate behavior, choose architecture, review security-sensitive work, and verify changes.

## Preferred Workflow

Before scanning many files, use Gemini through the helper scripts in `tools/`:

- `tools/find-related-files "task"` to identify likely files.
- `tools/summarize-file path/to/file` for large or unfamiliar files.
- `tools/make-context-pack "task"` to create `context-pack.md`.
- `tools/review-diff` for a quick scout review of local changes.
- `tools/ask-gemini "prompt"` for focused exploratory questions.

Use `context-pack.md` as a starting point, not as authority. Verify paths, symbols, behavior, and risks directly before editing.

## Gemini Is Appropriate For

- File discovery before broad repo scans.
- Summaries of large files.
- Mapping task descriptions to likely source files, tests, or config.
- Drafting simple boilerplate that Codex will inspect and integrate.
- Explaining compiler errors, stack traces, failing tests, or diffs.

## Gemini Is Not Authority For

- Final architecture decisions.
- Security-sensitive or privacy-sensitive changes.
- Final code review.
- Correctness claims without local verification.
- Large rewrites or behavior changes.

## Codex Responsibilities

- Read the relevant source before changing it.
- Keep edits minimal and consistent with the existing codebase.
- Preserve user changes and avoid unrelated refactors.
- Run available tests, builds, or targeted checks.
- Treat Gemini output as scouting context and verify final behavior locally.

## Example

```bash
tools/make-context-pack "refactor the authentication module"
```

Then ask Codex:

```text
Use context-pack.md to refactor the authentication module. Keep changes minimal.
```
