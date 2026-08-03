"use client";

import { INFRASTRUCTURE } from "@/content/site";
import { useReveal } from "@/hooks/use-reveal";
import { TextReveal } from "@/components/text-reveal";

const statusStyle = {
  LIVE: "bg-accent/20 text-accent border-accent/30",
  BUILD: "bg-white/5 text-white border-white/10",
  PLANNED: "bg-white/5 text-stone border-white/[0.06]",
} as const;

export function Infrastructure() {
  const ref = useReveal<HTMLElement>();

  return (
    <section id="infrastructure" ref={ref} className="section-pad bg-deep reveal">
      <div className="container-wide">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/[0.04] rounded-sm overflow-hidden mb-20">
          {INFRASTRUCTURE.metrics.map((m) => (
            <div key={m.label} className="bg-deep p-8 md:p-10">
              <p className="font-mono text-3xl md:text-4xl text-white tracking-tighter">
                {m.value}
              </p>
              <p className="mt-2 text-mono-sm text-stone uppercase tracking-wider">
                {m.label}
              </p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <TextReveal as="h2" className="text-headline text-white">
              Global infrastructure footprint.
            </TextReveal>
            <TextReveal as="p" className="mt-4 text-sm text-stone leading-relaxed max-w-[420px]">
              Purpose-built campuses with diverse energy sourcing, advanced cooling, and modular deployment capability.
            </TextReveal>
          </div>

          <div className="space-y-3">
            {INFRASTRUCTURE.sites.map((site) => (
              <div
                key={site.name}
                className="flex items-center justify-between p-4 rounded-sm bg-void/50 border border-white/[0.04] hover:border-white/[0.08] transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className={`w-1.5 h-1.5 rounded-full ${
                    site.status === "LIVE" ? "bg-accent shadow-[0_0_6px_var(--color-accent)]" :
                    site.status === "BUILD" ? "bg-white/60" : "bg-white/20"
                  }`} />
                  <span className="text-sm text-white">{site.name}</span>
                </div>
                <span className={`text-mono-sm px-2 py-0.5 rounded border ${statusStyle[site.status]}`}>
                  {site.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
