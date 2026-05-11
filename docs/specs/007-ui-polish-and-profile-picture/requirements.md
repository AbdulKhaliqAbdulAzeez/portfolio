# Requirements: UI Polish & Profile Picture

## User Stories

- As a visitor, I want to see a picture of the developer so I can put a face to the name and build a personal connection.
- As a visitor, I want interactive elements to feel responsive and polished, reinforcing the "hacker/terminal" theme.
- As a developer, I want my terminal window to look more authentic with subtle CRT-like effects.

## Functional Requirements

- The profile picture must load efficiently (use Next.js `<Image />` component).
- The picture must have an `alt` tag (e.g., "Abdul Khaliq Abdul Azeez").
- The location of the picture should adapt correctly on mobile (stacking) and desktop (grid).

## Non-Functional Requirements

- The new visual effects (glows, scanlines) must not negatively impact performance or create jank during scrolling.
- Hover states must remain accessible (high contrast).
- The new UI elements must align with the existing `emerald`, `cyan`, and `amber` color palette.
