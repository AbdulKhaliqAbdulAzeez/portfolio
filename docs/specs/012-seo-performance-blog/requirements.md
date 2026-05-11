# Requirements: SEO, Performance & Blog Foundation

## User Stories

- As a recruiter finding the site via Google, I want rich search results (name, role, photo) so I can identify the candidate quickly.
- As a visitor, I want the site to load fast and score well on Lighthouse.
- As the developer, I want a blog section to demonstrate communication and technical writing skills.

## Functional Requirements

- JSON-LD structured data (Person schema) must be embedded in the page head.
- A `sitemap.xml` must be auto-generated via Next.js metadata API.
- A `robots.txt` must be served at the root.
- Twitter/X card meta tags must be present.
- A `/blog` index page must list blog posts with title, date, and excerpt.
- A `/blog/[slug]` page must render individual blog post content.
- At least one sample blog post must exist (project write-up).

## Non-Functional Requirements

- Lighthouse Performance score ≥ 90.
- Lighthouse Accessibility score ≥ 95.
- Lighthouse SEO score ≥ 95.
- JSON-LD must validate in Google's Rich Results Test.
- Blog must use the same terminal aesthetic as the rest of the site.
