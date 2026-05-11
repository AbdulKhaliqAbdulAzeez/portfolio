# Design: Project Cards UX & Profile Photo

## Overview

Reduce visual overload by collapsing project card detail sections behind a toggle, and replace the placeholder profile SVG with a real photo.

## Collapsed Card Layout

Shows only:
- Course label badge (amber)
- Project name (h3)
- Description paragraph
- Tools tag row
- Project links (GitHub, etc.)

Total height target: ~180-200 px.

## Expanded Card Content

Toggled by a "View Details ▾" / "Hide Details ▴" button:
- Status panel (mono key:value pairs)
- Cloud Engineering Relevance block
- Problem / What I Built blocks
- Intentional Decisions list
- Security Decisions list
- What I Learned block

## Expand Animation

Use the CSS `grid-template-rows` trick for smooth height animation:

```css
.card-details {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 400ms ease;
}
.card-details.expanded {
  grid-template-rows: 1fr;
}
.card-details > div {
  overflow: hidden;
}
```

## Toggle Button

Styled as a terminal command:
- `$ ./show-details ▾` (collapsed)
- `$ ./hide-details ▴` (expanded)
- Emerald text, mono font, subtle border

## Profile Photo

- Replace `profile.svg` with `profile.jpg` (or `.webp`).
- Keep existing ring + glow styles on `HeroSection.tsx`.
- Add subtle `hover:scale-105` zoom transition.
- If no real photo is available, use a generated avatar as placeholder.
