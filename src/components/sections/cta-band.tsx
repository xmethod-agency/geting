"use client";

import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react";
import { CTA_BAND } from "@/content/site";
import { useReveal } from "@/hooks/use-reveal";
import { TextReveal } from "@/components/text-reveal";

export function CtaBand() {
  const ref = useReveal<HTMLElement>();

  return (
    <section ref={ref} className="section-pad bg-dark-olive reveal">
      <div className="container-wide text-center">
        <TextReveal as="h2" className="text-display text-white mx-auto max-w-[700px]">
          {CTA_BAND.headline}
        </TextReveal>
        <TextReveal as="p" className="mt-5 text-sm text-stone max-w-[400px] mx-auto">
          {CTA_BAND.sub}
        </TextReveal>
        <div className="mt-10">
          <Link
            href={CTA_BAND.cta.href}
            className="inline-flex items-center gap-2 h-12 px-8 text-[13px] font-medium tracking-wide uppercase bg-accent text-void rounded-sm transition-all hover:bg-accent-deep hover:shadow-[0_0_32px_var(--color-accent-dim)] active:scale-[0.98]"
          >
            {CTA_BAND.cta.label}
            <ArrowUpRight size={16} weight="bold" />
          </Link>
        </div>
      </div>
    </section>
  );
}
