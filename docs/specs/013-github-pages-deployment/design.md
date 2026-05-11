# Design: GitHub Pages Deployment

## Overview

Deploy the portfolio with a static Next.js export and GitHub's official Pages workflow. The site targets GitHub Project Pages, so build-time environment variables provide the repository base path and canonical site URL.

## Deployment Architecture

- Next.js builds a static export into `out/`.
- GitHub Actions installs dependencies with `npm ci`.
- The workflow runs lint before building.
- The workflow creates `out/.nojekyll` so GitHub Pages serves `_next` assets directly.
- `actions/upload-pages-artifact` uploads `out/`.
- `actions/deploy-pages` publishes the artifact to GitHub Pages.

## Base Path Strategy

GitHub Project Pages serves the site from:

```text
https://<github-username>.github.io/<repository-name>/
```

The workflow sets:

```text
NEXT_PUBLIC_BASE_PATH=/<repository-name>
NEXT_PUBLIC_SITE_URL=https://<github-username>.github.io/<repository-name>
```

`next.config.ts` uses `NEXT_PUBLIC_BASE_PATH` for `basePath` and `assetPrefix`. Public asset links use `withBasePath()` so `/resume.pdf` and `/portfolioImage.png` resolve correctly both locally and on Pages.

## Workflow Design

The workflow runs on pushes to `main` and manual dispatches:

1. Check out the repository.
2. Set up Node.js 20 with npm cache.
3. Configure GitHub Pages.
4. Install dependencies with `npm ci`.
5. Run `npm run lint`.
6. Run `npm run build:pages`.
7. Create `out/.nojekyll`.
8. Upload the Pages artifact.
9. Deploy the artifact.

## Failure Modes

- Lint failures block deployment before a static export is created.
- Build failures block artifact upload and leave the previous deployment unchanged.
- Missing GitHub Pages configuration causes the deploy job to fail until the repository's Pages source is set to GitHub Actions.
- Incorrect repository settings or permissions are visible in the deploy job logs.

## Local Development Behavior

- `NEXT_PUBLIC_BASE_PATH` defaults to an empty string.
- `NEXT_PUBLIC_SITE_URL` defaults to `http://localhost:3001`.
- `npm run dev` continues to serve the site at `http://localhost:3001`.
- No GitHub Actions-only environment variable is required for local development.
