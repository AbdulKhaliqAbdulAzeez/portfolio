# Tasks: Typography & Entrance Animations

## Phase 1: Font Installation

- [ ] Add Inter and JetBrains Mono via `next/font/google` in `layout.tsx`.
- [ ] Apply font CSS variables to `<html>` element.
- [ ] Update `globals.css` `@theme` block with new `--font-sans` and `--font-mono` values.
- [ ] Update body font-family declaration.

## Phase 2: Font Propagation

- [ ] Search and replace `font-mono` Tailwind classes to use JetBrains Mono variable.
- [ ] Verify all terminal-styled elements use the new mono font.
- [ ] Check that no layout shift occurs from font swap.

## Phase 3: Entrance Animations

- [ ] Create `src/lib/useInView.ts` hook with Intersection Observer.
- [ ] Add `prefers-reduced-motion` check to the hook.
- [ ] Add animation CSS classes to `globals.css` (`.animate-in`, `.animate-in.visible`).
- [ ] Update `Section.tsx` to use `useInView` and apply animation classes.
- [ ] Add staggered delay support for child card grids.
- [ ] Update `SkillsSection`, `DecisionsSection`, `CertificationsSection` for staggered children.

## Phase 4: Terminal Cursor

- [ ] Add `@keyframes cursor-blink` to `globals.css`.
- [ ] Update `.terminal-cursor` class with blink animation.
- [ ] Verify cursor blink is visible and crisp.
