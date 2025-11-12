"use client";

import { useEffect, useId, useRef, useState } from "react";

type NewsLink = {
  label: string;
  url: string;
};

type Props = {
  links: NewsLink[];
};

export function NewsDropdown({ links }: Props) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const buttonId = useId();

  useEffect(() => {
    if (!open) {
      return;
    }

    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [open]);

  if (links.length === 0) {
    return null;
  }

  return (
    <div className="relative" ref={menuRef}>
      <button
        type="button"
        id={buttonId}
        className="inline-flex items-center gap-2 rounded-full border border-sky-400/40 px-5 py-3 text-sm font-semibold text-sky-300 transition hover:bg-sky-400/10 hover:cursor-pointer"
        aria-haspopup="true"
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
      >
        View News
        <span
          aria-hidden
          className={`transition-transform ${open ? "rotate-180" : "rotate-0"}`}
        >
          ▼
        </span>
      </button>
      {open ? (
        <div
          role="menu"
          aria-labelledby={buttonId}
          className="absolute right-0 top-[calc(100%+0.5rem)] z-20 w-64 rounded-2xl border border-white/10 bg-slate-900/95 p-3 shadow-2xl backdrop-blur"
        >
          <ul className="flex flex-col gap-2">
            {links.map((link) => (
              <li key={link.url}>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-xl px-3 py-2 text-sm text-slate-200 transition hover:bg-slate-800/70 hover:text-sky-200"
                >
                  <span>{link.label}</span>
                  <span aria-hidden>↗</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
