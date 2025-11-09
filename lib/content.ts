import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { DEFAULT_LOCALE, Locale, SUPPORTED_LOCALES, isLocale } from "./i18n";

const CONTENT_ROOT = path.join(process.cwd(), "content");

export type MarkdownHeading = {
    depth: number;
    value: string;
};

type MarkdownResult<TFrontmatter> = {
    frontmatter: TFrontmatter;
    html: string;
    raw: string;
    localeUsed: Locale;
    isFallback: boolean;
};

type AboutFrontmatter = {
    title?: string;
    description?: string;
};

export type ProjectFrontmatter = {
    title: string;
    date: string;
    description: string;
    cover?: string;
    tags?: string[];
    demo?: string;
    repo?: string;
};

export type ProjectSummary = {
    slug: string;
    frontmatter: ProjectFrontmatter;
    localeUsed: Locale;
    isFallback: boolean;
};

function assertContentRoot() {
    if (!fs.existsSync(CONTENT_ROOT)) {
        throw new Error(`Missing content directory at ${CONTENT_ROOT}`);
    }
}

function localizedPath(locale: Locale, segments: string[]): string {
    return path.join(CONTENT_ROOT, locale, ...segments);
}

function resolveExistingLocale(locale: Locale, segments: string[]): {
    localeUsed: Locale;
    filePath: string;
    isFallback: boolean;
} {
    const directPath = localizedPath(locale, segments);
    if (fs.existsSync(directPath)) {
        return { localeUsed: locale, filePath: directPath, isFallback: false };
    }

    const fallbackPath = localizedPath(DEFAULT_LOCALE, segments);
    if (fs.existsSync(fallbackPath)) {
        return {
            localeUsed: DEFAULT_LOCALE,
            filePath: fallbackPath,
            isFallback: locale !== DEFAULT_LOCALE,
        };
    }

    throw new Error(
        `Unable to locate content for locale ${locale} (fallback ${DEFAULT_LOCALE}) at ${segments.join("/")}`,
    );
}

async function renderMarkdown(value: string): Promise<string> {
    const processed = await remark()
        .use(remarkRehype)
        .use(rehypeSlug)
        .use(rehypeAutolinkHeadings, {
            behavior: "wrap",
            properties: {
                className: ["heading-anchor"],
            },
        })
        .use(rehypeHighlight)
        .use(rehypeStringify)
        .process(value);

    return processed.toString();
}

async function readMarkdownFile<TFrontmatter>(
    locale: Locale,
    segments: string[],
): Promise<MarkdownResult<TFrontmatter>> {
    assertContentRoot();
    const { filePath, localeUsed, isFallback } = resolveExistingLocale(locale, segments);
    const file = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(file);
    const html = await renderMarkdown(content);

    return {
        frontmatter: data as TFrontmatter,
        html,
        raw: content,
        localeUsed,
        isFallback,
    };
}

export function getAllProjectSlugs(): string[] {
    assertContentRoot();
    const englishDir = localizedPath(DEFAULT_LOCALE, ["projects"]);
    if (!fs.existsSync(englishDir)) {
        return [];
    }
    return fs
        .readdirSync(englishDir)
        .filter((file) => file.endsWith(".md"))
        .map((file) => file.replace(/\.md$/, ""));
}

export async function getProject(
    locale: Locale,
    slug: string,
): Promise<MarkdownResult<ProjectFrontmatter>> {
    return readMarkdownFile<ProjectFrontmatter>(locale, ["projects", `${slug}.md`]);
}

export async function getAbout(locale: Locale): Promise<MarkdownResult<AboutFrontmatter>> {
    return readMarkdownFile<AboutFrontmatter>(locale, ["about.md"]);
}

export async function getProjectsSummary(locale: Locale): Promise<ProjectSummary[]> {
    const slugs = getAllProjectSlugs();
    const results = await Promise.all(
        slugs.map(async (slug) => {
            const project = await getProject(locale, slug);
            return {
                slug,
                frontmatter: {
                    ...project.frontmatter,
                    tags: project.frontmatter.tags ?? [],
                },
                localeUsed: project.localeUsed,
                isFallback: project.isFallback,
            } satisfies ProjectSummary;
        }),
    );

    return results.sort((a, b) => {
        return new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime();
    });
}

export function normalizeLocale(value: string | undefined): Locale {
    if (!value) return DEFAULT_LOCALE;
    if (isLocale(value)) return value;
    return DEFAULT_LOCALE;
}

export function getAllLocaleParams() {
    return SUPPORTED_LOCALES.map((locale) => ({ locale }));
}
