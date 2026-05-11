# Requirements: Mobile Responsiveness & Navigation

## User Stories

- As a mobile visitor, I want to navigate the site without horizontal scrolling or overflow so I can access all sections easily.
- As a mobile visitor, I want a hamburger menu so nav links don't clutter the small screen.
- As a visitor on any device, I want touch targets large enough to tap confidently.

## Functional Requirements

- A hamburger/drawer menu must be available for viewports < 768 px.
- Navbar links must never horizontally overflow at any viewport width.
- Contact section buttons must wrap gracefully on small screens (vertical stack below `sm`).
- Education coursework chips must display in a single column below `sm`.
- The mobile menu must close on link click and outside tap.

## Non-Functional Requirements

- All interactive touch targets must be ≥ 44 × 44 px.
- The mobile menu transition must be smooth (no jank).
- No JavaScript-dependent layout — the page must be usable if JS fails to load.
- The hamburger menu must be keyboard accessible (focus trap, Escape to close).
