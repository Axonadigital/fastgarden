"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, Phone, X } from "lucide-react";
import { COMPANY } from "@/lib/company";

const NAV = [
  { label: "Tjänster", href: "#tjanster" },
  { label: "Om oss", href: "#om-oss" },
  { label: "Projekt", href: "#projekt" },
  { label: "Kontakt", href: "#kontakt" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
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
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-[var(--color-bg)]/90 backdrop-blur-md border-b border-[var(--color-border)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-5 md:px-8 lg:px-16 h-20 md:h-24 flex items-center justify-between">
          <a
            href="#hero"
            aria-label={COMPANY.displayName}
            className="flex items-center"
          >
            <Image
              src="/logo.png"
              alt={COMPANY.legalName}
              width={320}
              height={90}
              priority
              className="h-14 md:h-16 w-auto"
            />
          </a>

          <nav className="hidden md:flex items-center gap-10">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[15px] text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={COMPANY.phone.href}
              className="hidden sm:flex items-center gap-2 text-[14px] text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors"
            >
              <Phone size={15} strokeWidth={1.5} />
              <span>{COMPANY.phone.display}</span>
            </a>
            <a
              href={COMPANY.phone.href}
              aria-label="Ring Freddy"
              className="sm:hidden flex items-center justify-center w-11 h-11 text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors"
            >
              <Phone size={18} strokeWidth={1.5} />
            </a>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Öppna meny"
              className="md:hidden flex items-center justify-center w-11 h-11 text-[var(--color-text)]"
            >
              <Menu size={22} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-50 bg-[var(--color-bg)] md:hidden flex flex-col">
          <div className="h-20 px-5 flex items-center justify-between border-b border-[var(--color-border)]">
            <Image
              src="/logo.png"
              alt={COMPANY.legalName}
              width={320}
              height={90}
              className="h-14 w-auto"
            />

            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Stäng meny"
              className="w-11 h-11 flex items-center justify-center"
            >
              <X size={22} strokeWidth={1.5} />
            </button>
          </div>
          <nav className="flex-1 flex flex-col px-5 py-12 gap-2">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="font-serif text-3xl py-4 border-b border-[var(--color-border)] text-[var(--color-text)]"
              >
                {item.label}
              </a>
            ))}
            <a
              href={COMPANY.phone.href}
              onClick={() => setOpen(false)}
              className="mt-8 inline-flex items-center gap-3 text-[var(--color-accent)]"
            >
              <Phone size={18} strokeWidth={1.5} />
              <span className="text-lg">{COMPANY.phone.display}</span>
            </a>
          </nav>
        </div>
      )}
    </>
  );
}
