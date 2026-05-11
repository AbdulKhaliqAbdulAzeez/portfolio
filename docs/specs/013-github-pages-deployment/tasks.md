# Tasks: GitHub Pages Deployment

## Phase 1: Documentation

- [ ] Create GitHub Pages requirements, design, and tasks docs.
- [ ] Create Sprint 10 deployment foundation plan.
- [ ] Create Sprint 11 verification and hardening plan.

## Phase 2: Next.js Export Readiness

- [ ] Add `output: "export"` to `next.config.ts`.
- [ ] Add `images.unoptimized` for static image export.
- [ ] Add dynamic `basePath` and `assetPrefix`.
- [ ] Preserve the existing `turbopack.root` setting.
- [ ] Add a `build:pages` package script.

## Phase 3: Asset Path Hardening

- [ ] Add `src/lib/paths.ts` with `withBasePath()`.
- [ ] Wrap resume PDF links with `withBasePath()`.
- [ ] Wrap the profile image path with `withBasePath()`.
- [ ] Verify hash links and external links are not changed by the helper.

## Phase 4: Workflow

- [ ] Add `.github/workflows/deploy-pages.yml`.
- [ ] Configure push-to-main and manual dispatch triggers.
- [ ] Configure official Pages artifact upload and deploy actions.
- [ ] Generate `out/.nojekyll` during the workflow.

## Phase 5: Verification

- [ ] Run `npm run lint`.
- [ ] Run `npm run build:pages`.
- [ ] Run a Project Pages build with `NEXT_PUBLIC_BASE_PATH=/portfolio-site`.
- [ ] Confirm `out/index.html` exists.
- [ ] Confirm Pages-mode generated HTML references the base path.
- [ ] Confirm `out/.nojekyll` is created by the workflow step.
