import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getAbout } from "@/lib/content";
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

  const locale = resolved.locale as Locale;
  const dictionary = getDictionary(locale);
  const about = await getAbout(locale);

  const title = about.frontmatter.title ?? dictionary.metadata.aboutTitle;
  const description =
    about.frontmatter.description ?? dictionary.metadata.aboutDescription;

  return {
    title,
    description,
    alternates: {
      canonical: `/${locale}/about`,
      languages: {
        en: "/en/about",
        id: "/id/about",
      },
    },
    openGraph: {
      title,
      description,
      locale: locale === "id" ? "id_ID" : "en_US",
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [OG_IMAGE],
    },
  } satisfies Metadata;
}

export default async function AboutPage({ params }: PageParams) {
  const resolved = await params;

  if (!isLocale(resolved.locale)) {
    notFound();
  }

  const locale = resolved.locale as Locale;
  const dictionary = getDictionary(locale);
  const about = await getAbout(locale);

  return (
    <div className="mx-auto w-full max-w-3xl space-y-12 px-6 pb-24 pt-12 sm:px-12">
      <div className="space-y-4">
        <p className="text-sm uppercase tracking-[0.35em] text-slate-500">
          {dictionary.about.title}
        </p>
        <h1 className="text-4xl font-semibold text-slate-50">
          {about.frontmatter.title ?? dictionary.about.title}
        </h1>
        <p className="max-w-xl text-base text-slate-300">
          {about.frontmatter.description ??
            dictionary.metadata.aboutDescription}
        </p>
        {about.isFallback ? (
          <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.25em] text-slate-300">
            {dictionary.projects.fallbackBadge}
          </p>
        ) : null}
      </div>
      <article
        className="prose"
        dangerouslySetInnerHTML={{ __html: about.html }}
      />
      <div className="flex items-center justify-between border-t border-white/10 pt-6 text-sm text-slate-400">
        <Link href={`/${locale}`} className="transition hover:text-sky-300">
          ← {dictionary.nav.home}
        </Link>
        <a
          href="mailto:feisaldy26@gmail.com"
          className="transition hover:text-sky-300"
        >
          feisaldy26@gmail.com
        </a>
      </div>
    </div>
  );
}
