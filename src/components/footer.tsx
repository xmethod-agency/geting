import Link from "next/link";
import Image from "next/image";
import { BRAND, FOOTER } from "@/content/site";
import { FooterWordmark } from "./footer-wordmark";

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-void relative">
      <div className="container-wide py-16 md:py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <Link href="/" className="flex items-center gap-2.5">
              <Image
                src="/logo-geting.png"
                alt={BRAND.name}
                width={28}
                height={28}
                className="rounded-sm"
              />
              <span className="font-mono text-sm tracking-tight text-white">
                {BRAND.name}
              </span>
            </Link>
            <p className="mt-4 text-sm text-stone max-w-[300px] leading-relaxed">
              Vertically integrated AI infrastructure. Energy, data centers,
              cloud, and custom software engineering.
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="text-mono-sm text-stone/60 uppercase tracking-widest mb-4">
              Pages
            </p>
            <div className="flex flex-col gap-3">
              {FOOTER.links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-stone hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="md:col-span-4">
            <p className="text-mono-sm text-stone/60 uppercase tracking-widest mb-4">
              Contact
            </p>
            <a
              href={`mailto:${BRAND.email}`}
              className="text-sm text-stone hover:text-white transition-colors"
            >
              {BRAND.email}
            </a>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/[0.04] flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <p className="text-mono-sm text-stone/40">
              &copy; {FOOTER.copyright}
            </p>
            <p className="text-mono-sm text-stone/30 mt-1">
              {BRAND.address}
            </p>
          </div>
          <p className="text-mono-sm text-stone/40">
            AI infrastructure, engineered.
          </p>
        </div>
      </div>

      <FooterWordmark />
    </footer>
  );
}
