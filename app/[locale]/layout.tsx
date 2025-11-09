import Link from "next/link";
import { ReactNode } from "react";
import { notFound } from "next/navigation";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { getDictionary, isLocale, Locale } from "@/lib/i18n";
import { getAllLocaleParams } from "@/lib/content";

export function generateStaticParams() {
  return getAllLocaleParams();
}

type Props = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: Props) {
  const resolved = await params;

  if (!isLocale(resolved.locale)) {
    notFound();
  }

  const locale = resolved.locale as Locale;
  const dictionary = getDictionary(locale);

  return (
    <div
      data-locale={locale}
      className="flex min-h-screen flex-col bg-slate-950 text-slate-100"
    >
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-6 focus:top-6 focus:rounded-full focus:bg-sky-400/20 focus:px-4 focus:py-2 focus:text-sm"
      >
        Skip to content
      </a>
      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 pb-6 pt-12 sm:px-12">
        <Link
          href={`/${locale}`}
          className="flex items-center gap-3 text-sm uppercase tracking-[0.35em] text-slate-400 hover:text-sky-300"
        >
          <span
            className="inline-flex h-2 w-2 rounded-full bg-sky-400"
            aria-hidden="true"
          />
          {dictionary.nav.home}
        </Link>
        <div className="flex items-center gap-3">
          <nav className="hidden items-center gap-4 text-sm font-medium text-slate-200 md:flex">
            <Link
              href={`/${locale}/about`}
              className="transition hover:text-sky-300"
            >
              {dictionary.nav.about}
            </Link>
            <Link
              href={`/${locale}#projects`}
              className="transition hover:text-sky-300"
            >
              {dictionary.nav.projects}
            </Link>
          </nav>
          <LanguageSwitcher
            locale={locale}
            labels={dictionary.languageSwitcher}
          />
        </div>
      </header>
      <main id="main-content" className="flex-1">
        {children}
      </main>
      <footer className="mx-auto w-full max-w-6xl px-6 pb-12 pt-8 text-sm text-slate-500 sm:px-12">
        <div className="flex flex-col gap-2 border-t border-white/5 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-slate-400">
            © {new Date().getFullYear()} Feisal Dharma Yuda
          </p>
          <p>{dictionary.footer.note}</p>
        </div>
      </footer>
    </div>
  );
}
