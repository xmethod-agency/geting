"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { List, X } from "@phosphor-icons/react";
import { BRAND, NAV_LINKS } from "@/content/site";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const close = useCallback(() => setMenuOpen(false), []);

  useEffect(() => { close(); }, [pathname, close]);

  useEffect(() => {
    if (!menuOpen) return;
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") close(); };
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", handler); document.body.style.overflow = ""; };
  }, [menuOpen, close]);

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <nav className="container-wide relative z-10 flex items-center justify-between h-[72px] gap-4">
        {/* Logo */}
        <Link href="/" className="shrink-0 group flex items-center gap-3">
          <Image
            src="/logo-geting.png"
            alt={BRAND.name}
            width={36}
            height={36}
            className="rounded-md"
            priority
          />
        </Link>

        {/* Nav islands - no header bg, each item is its own glass pill */}
        <div className="hidden md:flex items-center gap-1.5">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`
                px-5 py-2 rounded-md text-[13px] transition-all duration-200
                backdrop-blur-xl border
                ${pathname === link.href
                  ? "bg-white/[0.1] border-white/[0.12] text-white"
                  : "bg-white/[0.04] border-white/[0.06] text-stone hover:bg-white/[0.08] hover:border-white/[0.1] hover:text-white"
                }
              `}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:block shrink-0">
          <Link
            href="/contact"
            className="inline-flex items-center h-9 px-5 text-[13px] font-medium tracking-wide bg-lime text-void rounded-md transition-all hover:bg-lime-deep hover:shadow-[0_0_24px_var(--color-lime-dim)] active:scale-[0.97]"
          >
            Get in touch
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden w-9 h-9 rounded-md bg-white/[0.04] backdrop-blur-xl border border-white/[0.06] flex items-center justify-center text-white/70 hover:text-white hover:bg-white/[0.08] transition-all"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={18} weight="light" /> : <List size={18} weight="light" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="fixed inset-0 top-[72px] z-40 bg-void/95 backdrop-blur-2xl md:hidden"
          role="dialog"
          aria-modal="true"
        >
          <div className="container-wide flex flex-col pt-8 gap-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={close}
                className="flex items-center px-5 py-4 rounded-md bg-white/[0.04] border border-white/[0.06] text-lg font-light tracking-tight text-white/80 hover:bg-white/[0.08] hover:text-white transition-all"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={close}
              className="mt-6 inline-flex items-center justify-center h-12 px-8 text-sm font-medium bg-lime text-void rounded-md"
            >
              Get in touch
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
