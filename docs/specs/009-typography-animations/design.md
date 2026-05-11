# Design: Typography & Entrance Animations

## Overview

Replace the generic Arial/Helvetica font stack with a modern curated pairing and add scroll-triggered entrance animations to every section.

## Typography

**Heading + Body:** Inter — clean, geometric, highly legible. Loaded via `next/font/google` with `subsets: ['latin']`, `display: 'swap'`.

**Monospace:** JetBrains Mono — sharper and more distinctive than system monospace. Used for terminal commands, code labels, section prefixes, and the hero terminal window.

**Font Variables:**
- `--font-sans` → Inter
- `--font-mono` → JetBrains Mono

Applied to `<html>` via className from next/font, then referenced in globals.css theme block.

## Entrance Animations

**Mechanism:** A custom `useInView` React hook wrapping the Intersection Observer API.
- Threshold: `0.15` (triggers when 15% of the element is visible).
- `rootMargin: '0px 0px -60px 0px'` to trigger slightly before full entry.
- Returns a `ref` and `isInView` boolean.

**Section animation:**
- Initial state: `opacity: 0; transform: translateY(24px);`
- In-view state: `opacity: 1; transform: translateY(0);`
- Transition: `600ms ease-out`
- Applied via CSS classes toggled by the hook.

**Staggered children (card grids):**
- Each child gets `transition-delay: calc(index * 100ms)`.
- Same fade + slide-up animation.

**Reduced motion:**
- `useInView` checks `window.matchMedia('(prefers-reduced-motion: reduce)')`.
- If true, elements render immediately visible with no animation.

## Terminal Cursor Blink

```css
@keyframes cursor-blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

.terminal-cursor {
  animation: cursor-blink 1s step-end infinite;
}
```
