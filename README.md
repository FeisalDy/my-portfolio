# Feisal Dharma Yuda — Multilingual Portfolio

Static, SEO-friendly portfolio powered by Next.js App Router, Tailwind CSS, and Markdown content. Indonesia (`/id`) is the default locale with English (`/en`) available; when localized Markdown is missing the site falls back to Indoensia automatically.Static, SEO-ready portfolio built with Next.js App Router, Tailwind CSS, and Markdown content sourced from the filesystem. English (`/en`) is the default locale with Indonesian (`/id`) available and automatic fallback when a translation is missing.Static, SEO-ready portfolio built with Next.js App Router, Tailwind CSS, and Markdown content sourced from the filesystem. English (`/en`) is the default locale with Indonesian (`/id`) available and automatic fallback when a translation is missing.Static, SEO-ready portfolio built with Next.js App Router, Tailwind CSS, and Markdown content sourced from the filesystem. English (`/en`) is the default locale with Indonesian (`/id`) available and automatic fallback when translations are missing.

## Features## Features## Features

- Locale-aware routing with `/id` and `/en`, plus browser language detection from `/`- Locale-aware routing with `/id` and `/en`, plus browser-language detection from `/`## Features

- Markdown-driven About and Project pages with frontmatter metadata

- Static export (`output: "export"`) ready for Vercel hosting- Markdown-driven About and Project pages with frontmatter-based metadata

- Automatic content fallback to English when translations are missing

- Sitemap, `hreflang` alternates, Open Graph, and Twitter metadata via Next.js Metadata API- 100% static export compatible with Vercel hosting (Next.js `output: "export"`)- Locale-aware routing with `/en` and `/id`, plus browser-language detection from `/`

## Local Development- Automatic fallback to English Markdown when a localized file is unavailable- Locale-aware routing with `/en` and `/id`, plus browser-language detection from `/`## Local Development

```bash- Sitemap, `hreflang` alternates, and social metadata generated via the Next.js Metadata API- Markdown-driven About and Project pages with frontmatter-based metadata

npm install

npm run dev- 100% static export compatible with Vercel hosting```bash

`````

## Local Development- Automatic fallback to English Markdown when a localized file is unavailable## Content Management

Visit `http://localhost:3000`. Navigating to `/` redirects to `/id` or `/en` depending on `navigator.language`.

- Sitemap, `hreflang` alternates, and social metadata generated via the Next.js Metadata API

## Content Management

````bash

All Markdown lives under `content/<locale>/` and is parsed at build time.

npm installAll Markdown content lives under `content/<locale>/`. The project list is generated from the English project directory and falls back to English when a localized file is missing.

### About Page

npm run dev

- Canonical content: `content/en/about.md`

- Optional translation: `content/id/about.md````## Local Development### About Page

- Supported frontmatter: `title`, `description`



### Project Entries

Open `http://localhost:3000` in your browser. Visiting `/` redirects to `/id` or `/en` based on `navigator.language`.```bash- Edit `content/en/about.md`. Optional translations live in `content/id/about.md`.

1. Add a file in `content/en/projects/<slug>.md` using the schema below.

2. Optionally add a localized copy in `content/id/projects/<slug>.md`.



```yaml## Content Managementnpm install### Add a Project

---

title: "Project Title"

date: "2025-02-10"

description: "Short summary of the project"Markdown content lives in `content/<locale>/` and is parsed at build time.npm run dev

cover: "/images/project-cover.svg"

tags: ["Next.js", "Tailwind", "Fullstack"]

demo: "https://example.com"

repo: "https://github.com/FeisalDy/project"### About Page```1. Create a file in `content/en/projects/<slug>.md` using the schema below.

news:

  - label: "News headline"

    url: "https://example.com/news"

---- Update `content/en/about.md` for the canonical content.## Static Export



Markdown body content...- Optional translation: `content/id/about.md`.

`````

- Supported frontmatter keys: `title`, `description`.Open `http://localhost:3000` in your browser. Visiting `/` redirects to `/id` or `/en` based on `navigator.language`.

Projects appear automatically for both locales. Any number of `news` links are collapsed into a single "View News" dropdown on the project detail page.

## Static Export

### Add a ProjectGenerate the production bundle and static output:

```bash

npm run build

```

1. Create a Markdown file in `content/en/projects/<slug>.md` using the schema below.## Content Management## Project Structure

Creates a fully static bundle compatible with Vercel. Output directory remains `.next` (handled by Vercel during deploy).

2. Optionally add a localized copy in `content/id/projects/<slug>.md`.

## Key Paths

Markdown content lives in `content/<locale>/` and is parsed at build time.```

````

app/```yaml

  [locale]/

    layout.tsx---## Deployment

    page.tsx

    about/page.tsxtitle: "Project Title"

    projects/[slug]/page.tsx

components/date: "2025-02-10"### About Page

  LanguageSwitcher.tsx

  NewsDropdown.tsxdescription: "Short summary of the project"

  ProjectCard.tsx

content/cover: "/images/project-cover.svg"Deploy by connecting the repository to Vercel. Ensure the following remain true:

  en/

    about.mdtags: ["Next.js", "Tailwind", "Fullstack"]

    projects/

      project-1.mddemo: "https://example.com"- Update `content/en/about.md` for the canonical content.## License

      project-2.md

  id/repo: "https://github.com/FeisalDy/project"- Optional translation: `content/id/about.md`.

    about.md

    projects/news:- Supported frontmatter keys: `title`, `description`.This project is released under the MIT License. Replace placeholder visuals (profile image, Open Graph artwork) with your own assets before publishing.

      project-1.md

      project-2.md  - label: "News headline"

public/

  images/    url: "https://example.com/news"This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

    profile-placeholder.svg

    project-design-system.svg---

    project-logistics.svg

```### Add a Project



## DeploymentFull project description in Markdown.



- No runtime environment variables required```## Getting Started

- Build command: `npm run build`

- Output directory: `.next`



## NotesProjects automatically appear for both locales. When a localized file is missing, the site uses the English version and displays a language badge. Add as many `news` entries as needed—the UI collapses them into a single dropdown.1. Create a Markdown file in `content/en/projects/<slug>.md` using the schema below.



Placeholder illustrations live in `public/images/`; replace them before launch.2. Optionally add a localized copy in `content/id/projects/<slug>.md`.First, run the development server:



## License## Static Export



MIT — feel free to adapt.`yaml`bash


```bash

npm run build---npm run dev

````

title: "Project Title"# or

The build outputs a fully static site that can be deployed to Vercel without additional configuration.

date: "2025-02-10"yarn dev

## Key Paths

description: "Short summary of the project"# or

`````

app/cover: "/images/project-cover.svg"pnpm dev

  [locale]/

    layout.tsxtags: ["Next.js", "Tailwind", "Fullstack"]# or

    page.tsx

    about/page.tsxdemo: "https://example.com"bun dev

    projects/[slug]/page.tsx

content/repo: "https://github.com/FeisalDy/project"```

  en/

    about.md---

    projects/

      project-1.mdOpen [http://localhost:3000](http://localhost:3000) with your browser to see the result.

      project-2.md

  id/Full project description in Markdown.

    about.md

    projects/```You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

      project-1.md

      project-2.mdProjects automatically appear for both locales. When a localized file is missing, the site uses the indonesia version and displays a language badge.This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

public/

  images/## Static Export## Learn More

    profile-placeholder.svg

    project-design-system.svg````bashTo

    project-logistics.svg

```npm run build



## Deployment```- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.



- No runtime environment variables are required.- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

- Build command: `npm run build`

- Output directory: `.next` (handled automatically by Vercel static export)The build outputs a fully static site that can be deployed to Vercel without additional configuration.



## NotesYou can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!



Placeholder assets live under `public/images/`. Replace them with production-ready visuals before launching.## Key Paths



## License## Deploy on Vercel



MIT — adapt and extend freely.````


app/The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

[locale]/

    layout.tsxCheck out our[Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

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

`````

## Deployment

- No runtime environment variables are required.
- Build command: `npm run build`
- Output directory: `.next` (handled automatically by Vercel static export)

## Notes

Placeholder assets live under `public/images/`. Replace them with production-ready visuals before launching.
