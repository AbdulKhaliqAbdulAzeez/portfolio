# Design: SEO, Performance & Blog Foundation

## Overview

Harden SEO with structured data and meta tags, improve Lighthouse scores, and create a blog section for technical writing.

## Structured Data

Embed JSON-LD in `layout.tsx`:
```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Abdul Khaliq Abdul Azeez",
  "jobTitle": "Junior IT Student Pursuing Cloud Engineering",
  "url": "https://portfolio-url.com",
  "sameAs": ["GitHub URL", "LinkedIn URL"],
  "knowsAbout": ["Cloud Engineering", "Terraform", "Linux", "Networking"]
}
```

## Sitemap & Robots

- `src/app/sitemap.ts`: Export a `sitemap()` function returning an array of URLs with `lastModified` dates.
- `src/app/robots.ts`: Export a `robots()` function allowing all crawlers, linking to the sitemap.

## Twitter Cards

Add to `layout.tsx` metadata:
```ts
twitter: {
  card: "summary_large_image",
  title: "Abdul Khaliq Abdul Azeez | Cloud Engineering Portfolio",
  description: "...",
}
```

## Blog Architecture

**Route structure:**
- `/blog` — index page listing all posts
- `/blog/[slug]` — individual post page

**Data:** Store posts as TypeScript objects in `src/data/posts/`. Each post has:
- `slug`, `title`, `date`, `excerpt`, `readTime`, `content` (TSX or markdown string)

**Blog index design:** Terminal-themed cards in a single-column layout. Each card shows:
- Date (mono, emerald)
- Title (h3, zinc-50)
- Excerpt (zinc-400)
- Read time (mono, cyan)
- "Read →" link

**Blog post design:** Prose-style layout (max-w-3xl centered). White text, generous line height, code blocks with terminal styling.

## Navbar Update

Add "Blog" link to nav items array, positioned between "Skills" and "Certs".
