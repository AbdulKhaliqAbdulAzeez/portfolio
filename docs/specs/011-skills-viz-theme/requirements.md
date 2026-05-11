# Requirements: Interactive Skills Visualization & Theme Toggle

## User Stories

- As a recruiter, I want the skills section to feel interactive and visually engaging instead of plain bullet lists.
- As a visitor, I want to switch between dark and light themes based on my preference.
- As a returning visitor, I want my theme choice to be remembered.

## Functional Requirements

- Each skill category card must display a representative icon or emoji.
- Skill cards must have enhanced hover states (lift, glow intensification).
- A theme toggle button (sun/moon icon) must be available in the navbar.
- Theme preference must persist via `localStorage`.
- Light mode must use a carefully designed palette that maintains the terminal aesthetic.

## Non-Functional Requirements

- Theme switch must not cause flash of unstyled content (FOUC) — apply before first paint via inline script.
- All components must use CSS custom properties for theme-sensitive colors, not hardcoded values.
- The toggle must be keyboard accessible.
