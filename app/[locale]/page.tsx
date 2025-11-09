import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectCard } from "@/components/ProjectCard";
import { getProjectsSummary } from "@/lib/content";
import { getDictionary, isLocale, Locale } from "@/lib/i18n";

const OG_IMAGE = "/images/og-default.svg";

type PageParams = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params,
}: PageParams): Promise<Metadata> {
  const resolved = await params;

  if (!isLocale(resolved.locale)) {
    notFound();
  }

  const dictionary = getDictionary(resolved.locale);
  const locale = resolved.locale === "id" ? "id_ID" : "en_US";

  return {
    title: dictionary.metadata.homeTitle,
    description: dictionary.metadata.homeDescription,
    alternates: {
      canonical: `/${resolved.locale}`,
      languages: {
        en: "/en",
        id: "/id",
      },
    },
    openGraph: {
      title: dictionary.metadata.homeTitle,
      description: dictionary.metadata.homeDescription,
      locale,
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: dictionary.metadata.homeTitle,
      description: dictionary.metadata.homeDescription,
      images: [OG_IMAGE],
    },
  } satisfies Metadata;
}

export default async function LocaleHome({ params }: PageParams) {
  const resolved = await params;

  if (!isLocale(resolved.locale)) {
    notFound();
  }

  const locale = resolved.locale as Locale;
  const dictionary = getDictionary(locale);
  const projects = await getProjectsSummary(locale);

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-24 px-6 pb-24 pt-12 sm:px-12">
      <section className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-center">
        <div className="flex flex-col gap-8">
          <span className="text-xs uppercase tracking-[0.45em] text-slate-400">
            {dictionary.hero.role}
          </span>
          <h1 className="text-4xl font-semibold text-slate-50 sm:text-5xl">
            {dictionary.hero.name}
          </h1>
          <p className="text-lg text-slate-300 sm:text-xl">
            {dictionary.hero.tagline}
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href={`/${locale}/about`}
              className="inline-flex items-center gap-2 rounded-full bg-sky-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:shadow-cyan-400/30"
            >
              {dictionary.hero.ctaAbout}
              <span aria-hidden>→</span>
            </Link>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full border border-sky-400/40 px-6 py-3 text-sm font-semibold text-sky-300 transition hover:bg-sky-400/10"
            >
              {dictionary.nav.projects}
            </a>
          </div>
        </div>
        <div className="relative h-72 w-full max-w-md justify-self-center overflow-hidden rounded-3xl border border-white/10 bg-slate-900/40 shadow-2xl">
          <Image
            src="/images/profile-placeholder.svg"
            alt={dictionary.hero.name}
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 320px, 80vw"
            priority
          />
        </div>
      </section>

      <section id="projects" className="flex flex-col gap-10">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-2xl font-semibold text-slate-50">
            {dictionary.projects.heading}
          </h2>
          <Link
            href={`/${locale}/about`}
            className="hidden text-sm text-slate-400 transition hover:text-sky-300 sm:block"
          >
            {dictionary.hero.ctaAbout}
          </Link>
        </div>
        {projects.length === 0 ? (
          <p className="rounded-2xl border border-dashed border-white/10 bg-white/5 p-8 text-center text-slate-400">
            {dictionary.projects.empty}
          </p>
        ) : (
          <div className="grid gap-8 md:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard
                key={`${project.slug}-${project.localeUsed}`}
                project={project}
                locale={locale}
                fallbackBadge={
                  project.isFallback
                    ? dictionary.projects.fallbackBadge
                    : undefined
                }
              />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
