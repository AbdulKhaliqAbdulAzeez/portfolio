# Sprint 08: Skills Visualization & Theme Toggle

## Objectives

- Enhance skills section with category icons and interactive hover effects.
- Implement a dark/light theme toggle in the navbar.
- Persist theme preference across sessions.

## Tasks

- [ ] Add icon/emoji field to each skill category in profile data.
- [ ] Update `SkillsSection.tsx` with icons and hover lift animation.
- [ ] Create `ThemeToggle.tsx` client component with sun/moon toggle.
- [ ] Define `[data-theme="light"]` CSS custom properties in `globals.css`.
- [ ] Add inline script to `layout.tsx` for FOUC prevention.
- [ ] Add `ThemeToggle` to navbar and mobile menu.
- [ ] Audit all components for hardcoded dark-mode colors.
- [ ] Test both themes across all sections and viewports.

## Done When

- Skills cards display category icons and lift on hover.
- Theme toggle switches between dark and light mode.
- Theme preference persists across page reloads.
- Both themes look polished across all sections.
- No flash of wrong theme on page load.
