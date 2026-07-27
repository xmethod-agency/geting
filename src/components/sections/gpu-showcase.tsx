"use client";

import { ArrowUpRight } from "@phosphor-icons/react";
import Link from "next/link";
import { TextReveal } from "@/components/text-reveal";
import { useReveal } from "@/hooks/use-reveal";

const GPU_CARDS = [
  {
    brand: "NVIDIA",
    name: "GB200 NVL72",
    featured: true,
    image: null, // TODO: add image path
  },
  {
    brand: "NVIDIA",
    name: "HGX B200",
    featured: false,
    image: null,
  },
  {
    brand: "AMD",
    name: "MI355x",
    featured: false,
    image: null,
  },
  {
    brand: "AMD",
    name: "MI300x",
    featured: false,
    image: null,
  },
] as const;

export function GpuShowcase() {
  const ref = useReveal<HTMLElement>();

  return (
    <section ref={ref} className="section-pad bg-void reveal">
      <div className="container-wide">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 md:mb-16">
          <TextReveal as="h2" className="text-headline text-white max-w-[600px]">
            Built for the demands of AI. Ready for what is next.
          </TextReveal>
          <p className="text-sm text-stone max-w-[280px] leading-relaxed">
            We have the latest GPU offerings. Purpose-built for cutting-edge AI,
            engineered for performance at scale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[5px]">
          {GPU_CARDS.map((gpu) => (
            <div
              key={gpu.name}
              className={`relative flex flex-col justify-between p-6 min-h-[440px] md:min-h-[520px] rounded-lg group transition-colors ${
                gpu.featured ? "bg-void border border-white/[0.06]" : "bg-deep border border-white/[0.06] hover:bg-carbon"
              }`}
            >
              {/* Image placeholder */}
              <div className="flex-1 flex items-center justify-center">
                {gpu.image ? (
                  <img src={gpu.image} alt={gpu.name} className="max-h-[240px] object-contain" />
                ) : (
                  <div className="w-full h-[200px] rounded-md border border-dashed border-white/[0.08] flex items-center justify-center">
                    <span className="text-mono-sm text-stone/40">GPU image</span>
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="mt-6">
                <p className="text-mono-sm text-lime/70 uppercase tracking-widest mb-1">
                  {gpu.brand}
                </p>
                <div className="flex items-end justify-between gap-3">
                  <h3 className="font-mono text-xl md:text-2xl text-white tracking-tighter">
                    {gpu.name}
                  </h3>
                  {gpu.featured ? (
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-1.5 px-4 py-1.5 text-mono-sm bg-lime text-void rounded-md hover:bg-lime-deep transition-colors shrink-0"
                    >
                      Contact sales
                      <ArrowUpRight size={12} weight="bold" />
                    </Link>
                  ) : (
                    <ArrowUpRight
                      size={18}
                      weight="light"
                      className="text-stone group-hover:text-white transition-colors shrink-0"
                    />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
