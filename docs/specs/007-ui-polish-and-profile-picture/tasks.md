# Tasks: UI Polish & Profile Picture

## Phase 1: Profile Picture Integration

- [x] Obtain or create a placeholder profile picture (e.g., `public/profile.jpg`).
- [x] Update `src/components/HeroSection.tsx` to include the `next/image` component above the `profile.boot` text.
- [x] Apply glowing border styles (`ring`, `ring-offset`, `shadow`) to the profile picture.
- [x] Test layout responsiveness on mobile and desktop.

## Phase 2: Terminal Effects

- [x] Define a custom scanline CSS class in `src/app/globals.css` or use Tailwind arbitrary values.
- [x] Apply the scanline effect to the terminal window in `HeroSection.tsx`.
- [x] Add a subtle emerald box-shadow/glow to the terminal window container.

## Phase 3: Interactive Refinements

- [x] Update button classes in `HeroSection.tsx` to include `active:scale-95` for tactile feedback.
- [x] Add subtle hover glow (`shadow-sm`, `border-emerald-400`) to secondary links.
- [x] Review `AboutSection.tsx` and other sections to ensure card borders have consistent hover states.
