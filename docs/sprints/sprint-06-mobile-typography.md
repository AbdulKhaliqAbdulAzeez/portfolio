# Sprint 06: Mobile Responsiveness & Typography

## Objectives

- Fix broken mobile navigation with a hamburger/drawer menu.
- Fix contact button and education chip overflow on narrow viewports.
- Upgrade typography from Arial/Helvetica to Inter + JetBrains Mono.
- Add scroll-driven entrance animations to all sections.
- Add cursor blink animation to the terminal window.

## Tasks

- [ ] Create `MobileMenu.tsx` client component with slide-in drawer.
- [ ] Add hamburger button to `Navbar.tsx`, hidden above `md`.
- [ ] Hide desktop nav links below `md`.
- [ ] Fix Contact button overflow with responsive vertical stack.
- [ ] Fix Education chip grid for mobile (single column).
- [ ] Install Inter + JetBrains Mono via `next/font/google`.
- [ ] Update `globals.css` theme tokens for new font families.
- [ ] Create `useInView` hook with Intersection Observer.
- [ ] Wrap `<Section>` with entrance animation classes.
- [ ] Add staggered child animation to card grids.
- [ ] Add `@keyframes cursor-blink` to terminal cursor.
- [ ] Test at 320, 375, 768, 1024, 1440 px viewports.
- [ ] Verify no layout shift from font swap.

## Done When

- No horizontal overflow at any viewport width.
- Hamburger menu opens and closes smoothly on mobile.
- Modern fonts render without layout shift.
- Sections animate in on scroll with staggered children.
- `prefers-reduced-motion` is respected.
- Terminal cursor blinks with glow.
