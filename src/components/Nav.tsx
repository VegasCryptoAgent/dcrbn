"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { CTA, NAV, SITE } from "@/lib/site";
import { Mark } from "./Mark";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 h-[72px] transition duration-300 ${
        scrolled || open
          ? "border-b border-line bg-ink/82 backdrop-blur-[12px]"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-full max-w-[1240px] items-center justify-between gap-5 px-[clamp(20px,5vw,48px)]">
        <Link href="/" className="inline-flex items-center gap-[11px] no-underline" aria-label="DCRBN home">
          <Mark />
          <span className="text-[17px] font-semibold tracking-[0.14em] text-hi">{SITE.name}</span>
        </Link>

        <nav className="hidden items-center gap-[clamp(16px,1.8vw,26px)] lg:flex" aria-label="Primary">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative text-[14.5px] text-soft no-underline transition hover:text-hi after:absolute after:inset-x-0 after:-bottom-1.5 after:h-[1.5px] after:origin-left after:scale-x-0 after:bg-blue after:transition after:content-[''] hover:after:scale-x-100"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href={CTA.primary.href}
            className="hidden rounded-[10px] bg-blue-mid px-5 py-2.5 text-[14px] font-medium text-white no-underline shadow-[0_10px_26px_rgba(47,134,255,.32)] transition hover:-translate-y-px hover:shadow-[0_14px_34px_rgba(47,134,255,.46)] sm:inline-flex"
          >
            {CTA.primary.label}
          </Link>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-line text-hi lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <span className="flex flex-col gap-1.5">
              <span className={`block h-px w-5 bg-hi transition ${open ? "translate-y-[3.5px] rotate-45" : ""}`} />
              <span className={`block h-px w-5 bg-hi transition ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
            </span>
          </button>
        </div>
      </div>

      {open ? (
        <div id="mobile-nav" className="border-b border-line bg-ink/97 px-[clamp(20px,5vw,48px)] py-6 lg:hidden">
          <nav className="flex flex-col gap-4" aria-label="Mobile">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[16px] text-hi no-underline"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={CTA.primary.href}
              className="mt-2 inline-flex w-fit rounded-[10px] bg-blue-mid px-5 py-3 text-[14px] text-white no-underline"
              onClick={() => setOpen(false)}
            >
              {CTA.primary.label}
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
