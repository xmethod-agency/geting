"use client";

import { useState } from "react";
import { ENGINEERING_PRACTICES } from "@/content/site";
import { useReveal } from "@/hooks/use-reveal";
import { TextReveal } from "@/components/text-reveal";

export function CustomEngineering() {
  const [hovered, setHovered] = useState<number | null>(null);
  const ref = useReveal<HTMLElement>();

  return (
    <section ref={ref} className="section-pad bg-void reveal">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0">
          <div className="lg:col-span-4 lg:pr-12">
            <div className="lg:sticky lg:top-28">
              <p className="text-mono-sm text-lime uppercase tracking-widest mb-6">
                Engineering
              </p>
              <TextReveal as="h2" className="text-headline text-white">
                Custom software, built for AI workloads.
              </TextReveal>
            </div>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-px bg-white/[0.04]">
            {ENGINEERING_PRACTICES.map((practice, i) => (
              <div
                key={practice.title}
                className="bg-void p-8 group cursor-default transition-colors hover:bg-deep"
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-base text-white font-medium tracking-tight">
                    {practice.title}
                  </h3>
                  <div
                    className={`w-1 h-1 rounded-full mt-2 transition-all duration-300 ${
                      hovered === i
                        ? "bg-lime shadow-[0_0_8px_var(--color-lime)]"
                        : "bg-white/10"
                    }`}
                  />
                </div>
                <p className="text-sm text-stone leading-relaxed">
                  {practice.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
