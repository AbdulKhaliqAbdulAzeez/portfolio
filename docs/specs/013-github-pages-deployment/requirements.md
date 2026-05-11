# Requirements: GitHub Pages Deployment

## User Stories

- As a recruiter, I can open the portfolio from GitHub Pages without running the project locally.
- As the site owner, every push to `main` deploys the latest static portfolio automatically.
- As a developer, local development still works without GitHub Pages-specific setup.

## Functional Requirements

- GitHub Actions must build and deploy the portfolio as a static site.
- The site must support GitHub Project Pages under `/repo-name/`.
- Static assets must load correctly under the Project Pages base path.
- The workflow must support manual dispatch from the GitHub Actions tab.
- The build must run lint before publishing.
- The deployment must use GitHub's official Pages artifact and deploy actions.

## Non-Functional Requirements

- The published site must not require a Node.js server runtime.
- Workflow failures must clearly expose lint or build errors in GitHub Actions logs.
- The published site must not have broken CSS, JavaScript, image, or PDF links caused by root-relative paths.
- The deployment must not require committing the generated `out/` directory.
- Local development must remain available through `npm run dev`.
