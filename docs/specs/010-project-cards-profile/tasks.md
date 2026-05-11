# Tasks: Project Cards UX & Profile Photo

## Phase 1: Expand/Collapse Card

- [ ] Add `"use client"` to `ProjectCard.tsx` and add `useState` for expanded state.
- [ ] Separate card content into summary (always visible) and detail (togglable) sections.
- [ ] Add expand/collapse CSS animation classes to `globals.css`.
- [ ] Create terminal-styled toggle button.
- [ ] Test all 3 project cards on desktop and mobile.

## Phase 2: Profile Photo

- [ ] Obtain or generate profile photo asset.
- [ ] Place photo at `public/profile.jpg` (or `.webp`).
- [ ] Update `HeroSection.tsx` image `src` to new file.
- [ ] Add hover zoom transition to profile image.
- [ ] Remove old `profile.svg` if replaced.
- [ ] Verify image optimization via Next.js `<Image>`.
