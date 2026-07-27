"use client";

import { AMBER_STATEMENT } from "@/content/site";
import { useReveal } from "@/hooks/use-reveal";
import { TextReveal } from "@/components/text-reveal";

export function AmberStatement() {
  const ref = useReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      className="relative bg-lime overflow-hidden reveal"
    >
      <div className="absolute inset-0 opacity-[0.12]" aria-hidden="true">
        <svg className="w-full h-full">
          <defs>
            <pattern id="lime-grid" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#000" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#lime-grid)" />
        </svg>
      </div>

      <div className="container-wide relative z-10 py-28 md:py-40">
        <TextReveal as="p" className="text-headline text-void max-w-[800px] font-medium">
          {AMBER_STATEMENT}
        </TextReveal>
      </div>
    </section>
  );
}
