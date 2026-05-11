# Design: Mobile Responsiveness & Navigation

## Overview

Fix critical mobile usability issues — the navbar overflows, contact buttons clip, and education chips misalign on narrow viewports. Add a hamburger menu for mobile navigation.

## Hamburger Menu

**Trigger:** A three-line icon button, positioned at the top-right of the navbar. Hidden above `md` breakpoint. Uses emerald accent color.

**Drawer:** Slides in from the right side of the screen.
- Full-height overlay with dark semi-transparent backdrop (`bg-black/60`).
- Panel width: ~280 px, with the site's dark background.
- Links stacked vertically with generous padding (16 px each) for touch targets.
- Resume button at the bottom of the link list.
- Close button (X icon) at the top-right of the drawer panel.
- Closes on: link click, backdrop click, Escape key.

**Animation:** `translateX(100%) → translateX(0)` over 300 ms with ease-out.

## Contact Section

- Below `sm`: Stack buttons vertically (`flex-col`) with full-width buttons.
- Above `sm`: Keep current horizontal flex-wrap layout.

## Education Chips

- Below `sm`: Force `grid-cols-1` instead of `grid-cols-3`.

## General

- All buttons and links: Ensure minimum `min-h-[44px] min-w-[44px]` for touch compliance.
