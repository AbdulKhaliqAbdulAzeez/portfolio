# Requirements: Project Cards UX & Profile Photo

## User Stories

- As a recruiter, I want to quickly scan project summaries without being overwhelmed by detail, then expand for more info if interested.
- As a visitor, I want to see a real photo of the developer to build a personal connection.
- As a mobile user, I want project cards to be manageable in length.

## Functional Requirements

- Project cards must show a compact summary view by default (name, category label, description, tools, links).
- A "View Details" toggle must expand the card to show cloud relevance, problem/built, decisions, security, and learned sections.
- Expanded state must animate smoothly (no jump-cuts).
- A real profile photo must replace the current placeholder SVG.

## Non-Functional Requirements

- The expand/collapse animation must be performant (use CSS transitions, not JS-driven height calculation).
- The profile photo must be optimized via `next/image` with `priority` loading.
- Collapsed cards should be ≤ 200 px tall to keep the page scannable.
