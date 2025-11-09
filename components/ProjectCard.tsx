import Image from "next/image";
import Link from "next/link";
import type { ProjectSummary } from "@/lib/content";
import type { Locale } from "@/lib/i18n";

type Props = {
  project: ProjectSummary;
  locale: Locale;
  fallbackBadge?: string;
};

export function ProjectCard({ project, locale, fallbackBadge }: Props) {
  const { frontmatter, slug, isFallback } = project;
  const href = `/${locale}/projects/${slug}`;
  const formattedDate = new Date(frontmatter.date).toLocaleDateString(
    locale === "id" ? "id-ID" : "en-US",
    {
      year: "numeric",
      month: "short",
      day: "numeric",
    }
  );

  return (
    <article className="fade-in group relative flex flex-col gap-6 overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-xl transition hover:-translate-y-1 hover:shadow-2xl">
      <div className="relative h-48 w-full overflow-hidden rounded-2xl bg-slate-900/40">
        {frontmatter.cover ? (
          <Image
            src={frontmatter.cover}
            alt={frontmatter.title}
            fill
            className="object-cover transition duration-500 group-hover:scale-105"
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            priority={false}
          />
        ) : null}
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <h3 className="text-xl font-semibold text-slate-50">
            {frontmatter.title}
          </h3>
          {isFallback && fallbackBadge ? (
            <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-wide text-slate-200">
              {fallbackBadge}
            </span>
          ) : null}
        </div>
        <p className="text-base text-slate-300">{frontmatter.description}</p>
      </div>
      <div className="flex flex-wrap items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-slate-400">
        {frontmatter.tags?.map((tag) => (
          <span key={tag} className="rounded-full bg-white/5 px-3 py-1">
            {tag}
          </span>
        ))}
      </div>
      <div className="flex items-center justify-between pt-2 text-sm text-sky-300">
        <span className="flex items-center gap-2">
          <span
            className="inline-flex h-2 w-2 animate-pulse rounded-full bg-sky-400"
            aria-hidden="true"
          />
          {formattedDate}
        </span>
        <Link
          href={href}
          className="inline-flex items-center gap-2 rounded-full bg-sky-400/10 px-4 py-2 text-sky-100 transition hover:bg-sky-400/20"
        >
          Explore
          <span aria-hidden>→</span>
        </Link>
      </div>
    </article>
  );
}
