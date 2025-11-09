"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { DEFAULT_LOCALE, SUPPORTED_LOCALES } from "@/lib/i18n";

function getBrowserLocale(): string {
  if (typeof navigator === "undefined") {
    return DEFAULT_LOCALE;
  }

  const preferred =
    navigator.languages?.[0] ?? navigator.language ?? DEFAULT_LOCALE;
  const normalized = preferred.toLowerCase();

  const matched = SUPPORTED_LOCALES.find((locale) =>
    normalized.startsWith(locale)
  );
  return matched ?? DEFAULT_LOCALE;
}

export default function RootRedirect() {
  const router = useRouter();

  useEffect(() => {
    const targetLocale = getBrowserLocale();
    router.replace(`/${targetLocale}`);
  }, [router]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 text-slate-300">
      <p className="text-sm uppercase tracking-[0.35em] text-slate-500">
        Redirecting…
      </p>
    </main>
  );
}
