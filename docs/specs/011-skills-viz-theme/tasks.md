# Tasks: Interactive Skills Visualization & Theme Toggle

## Phase 1: Skills Enhancement

- [ ] Add icon/emoji field to each skill category in `profile.ts`.
- [ ] Update `SkillsSection.tsx` to display category icons.
- [ ] Add hover lift and glow intensification transitions.
- [ ] Test hover states across all 6 skill categories.

## Phase 2: Theme Toggle Component

- [ ] Create `src/components/ThemeToggle.tsx` with sun/moon toggle.
- [ ] Implement localStorage read/write for theme preference.
- [ ] Add `ThemeToggle` to `Navbar.tsx` and `MobileMenu.tsx`.

## Phase 3: Light Mode CSS

- [ ] Define `[data-theme="light"]` CSS custom properties in `globals.css`.
- [ ] Add inline script to `layout.tsx` for FOUC prevention.
- [ ] Audit all components for hardcoded dark-mode colors.
- [ ] Replace hardcoded colors with CSS custom property references.

## Phase 4: Testing

- [ ] Test dark mode (default) — verify no visual regressions.
- [ ] Test light mode — verify all sections render correctly.
- [ ] Test toggle persistence across page reloads.
- [ ] Test keyboard accessibility of toggle button.
