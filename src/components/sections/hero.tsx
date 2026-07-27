"use client";

import Link from "next/link";
import { HERO } from "@/content/site";
import { TextReveal } from "@/components/text-reveal";

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-end bg-void overflow-hidden">
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-55"
        aria-hidden="true"
      >
        <source src="/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-void via-void/50 to-void/20" aria-hidden="true" />

      <div className="container-wide relative z-10 pb-16 md:pb-24 pt-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
          <div>
            <TextReveal as="h1" className="text-display text-white">
              {HERO.headline}
            </TextReveal>
            <TextReveal as="p" className="mt-6 text-[15px] text-stone leading-relaxed max-w-[440px]">
              {HERO.sub}
            </TextReveal>
            <div className="mt-8 flex items-center gap-4">
              <Link
                href={HERO.cta.href}
                className="inline-flex items-center h-11 px-6 text-[13px] font-medium tracking-wide uppercase bg-lime text-void rounded-sm transition-all hover:bg-lime-deep hover:shadow-[0_0_24px_var(--color-lime-dim)] active:scale-[0.98]"
              >
                {HERO.cta.label}
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center h-11 px-6 text-[13px] font-medium tracking-wide uppercase text-stone border border-white/10 rounded-sm transition-all hover:border-white/25 hover:text-white"
              >
                Our services
              </Link>
            </div>
          </div>

          <div className="hidden lg:flex justify-end">
            <div className="border border-white/[0.06] rounded-lg bg-void/40 backdrop-blur-sm p-6 space-y-4 min-w-[280px]">
              {HERO.specs.map((spec) => (
                <div key={spec.label} className="flex items-baseline justify-between border-b border-white/[0.04] pb-3 last:border-0 last:pb-0">
                  <span className="text-mono-sm text-stone uppercase">{spec.label}</span>
                  <span className="font-mono text-2xl text-white tracking-tighter">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
