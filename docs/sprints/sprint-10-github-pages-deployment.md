# Sprint 10: GitHub Pages Deployment Foundation

## Objectives

- Make the portfolio statically exportable.
- Add a GitHub Actions workflow that deploys to GitHub Pages.
- Preserve the local development workflow.
- Document the deployment requirements and design.

## Tasks

- [ ] Add spec docs for GitHub Pages deployment.
- [ ] Add `build:pages` script.
- [ ] Update `next.config.ts` for static export.
- [ ] Add dynamic Pages base path support.
- [ ] Add GitHub Pages workflow.
- [ ] Add `.nojekyll` generation in workflow.
- [ ] Run local lint and static export build.

## Done When

- `npm run lint` passes.
- Pages-mode static build succeeds.
- `out/index.html` is generated.
- Workflow file exists and uses official GitHub Pages actions.
- No committed `out/` directory is required.
