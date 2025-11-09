"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/lib/i18n";

type Props = {
  locale: Locale;
  labels: {
    label: string;
    optionEn: string;
    optionId: string;
  };
};

const LOCALE_ITEMS: Array<{ code: Locale; key: "optionEn" | "optionId" }> = [
  { code: "en", key: "optionEn" },
  { code: "id", key: "optionId" },
];

export function LanguageSwitcher({ locale, labels }: Props) {
  const pathname = usePathname();
  const segments = pathname?.split("/").filter(Boolean) ?? [];
  const rest = segments.slice(1).join("/");

  return (
    <nav
      aria-label={labels.label}
      className="flex items-center gap-1 rounded-full bg-white/5 p-1 text-sm shadow-inner shadow-black/20"
    >
      {LOCALE_ITEMS.map(({ code, key }) => {
        const isActive = code === locale;
        const href = `/${code}${rest ? `/${rest}` : ""}`;

        return (
          <Link
            key={code}
            prefetch
            href={href}
            aria-current={isActive ? "page" : undefined}
            className={`rounded-full px-3 py-1 transition ${
              isActive
                ? "bg-sky-400/20 text-sky-100"
                : "text-slate-400 hover:text-slate-100"
            }`}
          >
            {labels[key]}
          </Link>
        );
      })}
    </nav>
  );
}
