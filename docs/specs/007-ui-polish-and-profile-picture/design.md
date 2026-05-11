# Design: UI Polish & Profile Picture Integration

## Overview

This spec outlines visual improvements to the current terminal aesthetic, making the site feel more "alive" and personalized by integrating a profile picture and refining interactive elements.

## Profile Picture Location

**Location:** In the `HeroSection`, placed above the `profile.boot` text on the left column.
**Styling:**
- Shape: Circular or slightly rounded square.
- Border: `ring-2 ring-emerald-300 ring-offset-4 ring-offset-[#050807]` (using the dark background color for the offset).
- Size: Moderate (e.g., `w-24 h-24` or `w-32 h-32`).
- Effect: Subtle drop shadow matching the accent color to provide a "glowing" tech aesthetic.

## CRT & Terminal Enhancements

**Terminal Window (`HeroSection`):**
- Add a subtle scanline background pattern or linear gradient to mimic a CRT screen.
- Add a faint box shadow / glow (`shadow-[0_0_15px_rgba(74,222,128,0.15)]`) to the terminal container.
- Ensure the blinking cursor is prominent and crisp.

## Button & Interactive Enhancements

**Buttons & Links:**
- Add `active:scale-95` to make buttons feel tactile.
- Enhance hover states with text-shadow glows for the primary CTA ("Download Resume") and subtle border glows for secondary links.

## General Aesthetic Rules

- Maintain high contrast.
- Keep the dark minimalist background (`#050807` or similar).
- Avoid overly complex animations; stick to transitions and subtle glowing effects.
