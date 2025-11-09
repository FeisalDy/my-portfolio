# Feisal Dharma Yuda — Multilingual Portfolio# Feisal Dharma Yuda — Multilingual Portfolio

Static, SEO-ready portfolio built with Next.js App Router, Tailwind CSS, and Markdown content sourced from the filesystem. English (`/en`) is the default locale with Indonesian (`/id`) available and automatic fallback when a translation is missing.Static, SEO-ready portfolio built with Next.js App Router, Tailwind CSS, and Markdown content sourced from the filesystem. English (`/en`) is the default locale with Indonesian (`/id`) available and automatic fallback when translations are missing.

## Features

## Features

- Locale-aware routing with `/en` and `/id`, plus browser-language detection from `/`

- Locale-aware routing with `/en` and `/id`, plus browser-language detection from `/`## Local Development

- Markdown-driven About and Project pages with frontmatter-based metadata

- 100% static export compatible with Vercel hosting```bash

- Automatic fallback to English Markdown when a localized file is unavailable## Content Management

- Sitemap, `hreflang` alternates, and social metadata generated via the Next.js Metadata API

All Markdown content lives under `content/<locale>/`. The project list is generated from the English project directory and falls back to English when a localized file is missing.

## Local Development### About Page

```bash- Edit `content/en/about.md`. Optional translations live in `content/id/about.md`.

npm install### Add a Project

npm run dev

```1. Create a file in `content/en/projects/<slug>.md` using the schema below.

## Static Export

Open `http://localhost:3000` in your browser. Visiting `/` redirects to `/en` or `/id` based on `navigator.language`.

Generate the production bundle and static output:

## Content Management## Project Structure

Markdown content lives in `content/<locale>/` and is parsed at build time.```

## Deployment

### About Page

Deploy by connecting the repository to Vercel. Ensure the following remain true:

- Update `content/en/about.md` for the canonical content.## License

- Optional translation: `content/id/about.md`.

- Supported frontmatter keys: `title`, `description`.This project is released under the MIT License. Replace placeholder visuals (profile image, Open Graph artwork) with your own assets before publishing.

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

### Add a Project

## Getting Started

1. Create a Markdown file in `content/en/projects/<slug>.md` using the schema below.

2. Optionally add a localized copy in `content/id/projects/<slug>.md`.First, run the development server:

`yaml`bash

---npm run dev

title: "Project Title"# or

date: "2025-02-10"yarn dev

description: "Short summary of the project"# or

cover: "/images/project-cover.svg"pnpm dev

tags: ["Next.js", "Tailwind", "Fullstack"]# or

demo: "https://example.com"bun dev

repo: "https://github.com/FeisalDy/project"```

---

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Full project description in Markdown.

```You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

Projects automatically appear for both locales. When a localized file is missing, the site uses the English version and displays a language badge.This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Static Export## Learn More

````bashTo learn more about Next.js, take a look at the following resources:

npm run build

```- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.

- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

The build outputs a fully static site that can be deployed to Vercel without additional configuration.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Key Paths

## Deploy on Vercel

````

app/The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

[locale]/

    layout.tsxCheck out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

    page.tsx
    about/page.tsx
    projects/[slug]/page.tsx

content/
en/
about.md
projects/
project-1.md
project-2.md
id/
about.md
projects/
project-1.md

```

## Deployment

- No runtime environment variables are required.
- Build command: `npm run build`
- Output directory: `.next` (handled automatically by Vercel static export)

## Notes

Placeholder assets live under `public/images/`. Replace them with production-ready visuals before launching.

## License

MIT — adapt and extend freely.
```
