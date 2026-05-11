# Requirements: Typography & Entrance Animations

## User Stories

- As a visitor, I want the site to feel modern and polished through professional typography instead of default system fonts.
- As a visitor, I want sections to animate in as I scroll so the site feels dynamic and alive.
- As a visitor with motion sensitivity, I want animations to be disabled when I've set `prefers-reduced-motion`.

## Functional Requirements

- Headings and body text must use Inter (or Outfit) loaded via `next/font/google`.
- Monospace elements (terminal commands, labels) must use JetBrains Mono.
- Each section must fade in with a subtle slide-up when it enters the viewport.
- Card grids must stagger their entrance animation with slight delays per item.
- The terminal cursor must blink with a glowing pulse animation.

## Non-Functional Requirements

- Fonts must be self-hosted via `next/font` to avoid external requests and layout shift.
- Font swap must not cause Cumulative Layout Shift (CLS) — use `font-display: swap` with proper fallback sizing.
- Animations must complete within 600 ms to feel snappy, not sluggish.
- All animations must respect `prefers-reduced-motion: reduce`.
