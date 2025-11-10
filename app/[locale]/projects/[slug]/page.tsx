import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllProjectSlugs, getProject } from "@/lib/content";
import { getDictionary, isLocale, Locale } from "@/lib/i18n";

const OG_IMAGE = "/images/og-default.svg";

export async function generateStaticParams() {
  const slugs = getAllProjectSlugs();
  return slugs.flatMap((slug) => [
    { locale: "en", slug },
    { locale: "id", slug },
  ]);
}

type PageParams = {
  params: Promise<{ locale: string; slug: string }>;
};

export async function generateMetadata({
  params,
}: PageParams): Promise<Metadata> {
  const resolved = await params;

  if (!isLocale(resolved.locale)) {
    notFound();
  }

  const locale = resolved.locale as Locale;
  const dictionary = getDictionary(locale);
  const project = await getProject(locale, resolved.slug);
  const title = dictionary.metadata.projectsTitle(project.frontmatter.title);
  const description = dictionary.metadata.projectsDescription(
    project.frontmatter.description
  );

  return {
    title,
    description,
    alternates: {
      canonical: `/${locale}/projects/${resolved.slug}`,
      languages: {
        en: `/en/projects/${resolved.slug}`,
        id: `/id/projects/${resolved.slug}`,
      },
    },
    openGraph: {
      title,
      description,
      locale: locale === "id" ? "id_ID" : "en_US",
      images: [project.frontmatter.cover ?? OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [project.frontmatter.cover ?? OG_IMAGE],
    },
  } satisfies Metadata;
}

export default async function ProjectPage({ params }: PageParams) {
  const resolved = await params;

  if (!isLocale(resolved.locale)) {
    notFound();
  }

  const locale = resolved.locale as Locale;
  const dictionary = getDictionary(locale);
  const project = await getProject(locale, resolved.slug);
  const date = new Date(project.frontmatter.date).toLocaleDateString(
    locale === "id" ? "id-ID" : "en-US",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );

  return (
    <div className="mx-auto w-full max-w-4xl space-y-12 px-6 pb-24 pt-12 sm:px-12">
      <div className="space-y-6">
        <Link
          href={`/${locale}`}
          className="text-sm text-slate-400 transition hover:text-sky-300"
        >
          ← {dictionary.actions.backToProjects}
        </Link>
        <div className="space-y-4">
          <h1 className="text-4xl font-semibold text-slate-50">
            {project.frontmatter.title}
          </h1>
          <div className="flex flex-wrap items-center gap-3 text-sm text-slate-300">
            <span>{date}</span>
            {project.isFallback ? (
              <span className="rounded-full bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.25em] text-slate-300">
                {dictionary.projects.fallbackBadge}
              </span>
            ) : null}
          </div>
          <p className="text-lg text-slate-300">
            {project.frontmatter.description}
          </p>
        </div>
      </div>

      {project.frontmatter.cover ? (
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-slate-900/40 shadow-2xl">
          <Image
            src={project.frontmatter.cover}
            alt={project.frontmatter.title}
            width={1200}
            height={630}
            className="h-auto w-full object-cover"
            priority
          />
        </div>
      ) : null}

      <div className="flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
        {project.frontmatter.tags?.map((tag) => (
          <span key={tag} className="rounded-full bg-white/10 px-4 py-2">
            {tag}
          </span>
        ))}
      </div>

      <article
        className="prose"
        dangerouslySetInnerHTML={{ __html: project.html }}
      />

      <div className="flex flex-wrap gap-4">
        {project.frontmatter.demo ? (
          <a
            href={project.frontmatter.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-sky-400 px-5 py-3 text-sm font-semibold text-slate-950! shadow-lg shadow-cyan-500/20 transition hover:shadow-cyan-400/30"
          >
            {dictionary.actions.viewDemo}
            <span aria-hidden>↗</span>
          </a>
        ) : null}
        {project.frontmatter.repo ? (
          <a
            href={project.frontmatter.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-sky-400/40 px-5 py-3 text-sm font-semibold text-sky-300 transition hover:bg-sky-400/10"
          >
            {dictionary.actions.viewRepo}
            <span aria-hidden>↗</span>
          </a>
        ) : null}
      </div>
    </div>
  );
}
