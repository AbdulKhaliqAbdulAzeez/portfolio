# Design: Interactive Skills Visualization & Theme Toggle

## Overview

Enhance the skills section from plain lists to interactive cards with icons and hover effects. Add a global dark/light theme toggle.

## Skills Enhancement

**Card improvements:**
- Each skill category gets a small icon (emoji or SVG): ☁️ Cloud, 🏗️ IaC, 🐧 Linux, ⚡ Automation, 🌐 Web, 🎯 Interests.
- Icon displayed at top-left of each card.
- Hover: card lifts (`translateY(-4px)`), border glow intensifies, subtle scale.
- Transition: `300ms ease`.

**Data change:** Add an `icon` field to each skill category in `profile.ts`.

## Theme Toggle

**Button:** Sun ☀️ (in dark mode, switches to light) / Moon 🌙 (in light mode, switches to dark). Positioned in navbar next to the Resume link.

**Mechanism:**
1. `ThemeToggle.tsx` client component reads/writes `localStorage.theme`.
2. On mount, applies `data-theme="light"` to `<html>` if stored.
3. Inline `<script>` in `layout.tsx` runs before React hydration to prevent FOUC.
4. CSS custom properties under `[data-theme="light"]` override dark defaults.

**Light palette:**
```css
[data-theme="light"] {
  --background: #f8faf9;
  --foreground: #1a1a1a;
  --card-bg: rgba(255, 255, 255, 0.95);
  --card-border: #e4e4e7;
  --accent-emerald: #059669;
  --accent-cyan: #0891b2;
  --accent-amber: #d97706;
}
```
