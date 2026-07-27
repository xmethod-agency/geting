"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react";
import { STACK_ITEMS } from "@/content/site";
import { useReveal } from "@/hooks/use-reveal";
import { TextReveal } from "@/components/text-reveal";

export function StackIndex() {
  const [active, setActive] = useState<number>(0);
  const ref = useReveal();
  const sectionRef = useRef<HTMLElement>(null);
  const [parallaxY, setParallaxY] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const viewH = window.innerHeight;
      if (rect.top < viewH && rect.bottom > 0) {
        const progress = Math.max(0, Math.min(1, (viewH - rect.top) / viewH));
        setParallaxY((1 - progress) * 60);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      ref={(el) => {
        sectionRef.current = el;
        if (typeof ref === "function") ref(el);
        else if (ref) (ref as React.MutableRefObject<HTMLElement | null>).current = el;
      }}
      className="section-pad bg-void reveal relative z-20 -mt-8"
      style={{ transform: `translateY(${parallaxY}px)` }}
    >
      <div className="absolute -top-16 inset-x-0 h-16 bg-gradient-to-b from-transparent to-void pointer-events-none" aria-hidden="true" />
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0">
          <div className="lg:col-span-5 lg:pr-16">
            <p className="text-mono-sm text-lime uppercase tracking-widest mb-6">
              The stack
            </p>
            <TextReveal as="h2" className="text-headline text-white">
              Vertically integrated, from power to production.
            </TextReveal>
          </div>

          <div className="lg:col-span-7">
            {STACK_ITEMS.map((item, i) => (
              <button
                key={item.id}
                className="w-full text-left group"
                onClick={() => setActive(i)}
                onMouseEnter={() => setActive(i)}
              >
                <div
                  className={`flex items-start gap-6 py-6 border-t transition-all duration-300 ${
                    active === i
                      ? "border-lime/30"
                      : "border-white/[0.06]"
                  }`}
                >
                  <span
                    className={`font-mono text-xs mt-1 transition-colors duration-300 ${
                      active === i ? "text-lime" : "text-stone/40"
                    }`}
                  >
                    0{i + 1}
                  </span>

                  <div className="flex-1 min-w-0">
                    <h3
                      className={`text-xl tracking-tight transition-colors duration-300 ${
                        active === i ? "text-white" : "text-stone"
                      }`}
                    >
                      {item.title}
                    </h3>
                    <div
                      className={`grid transition-[grid-template-rows,opacity] duration-500 ease-out ${
                        active === i
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="pt-3 text-sm text-stone leading-relaxed max-w-[420px]">
                          {item.summary}
                        </p>
                        <Link
                          href={`/services#${item.anchor}`}
                          className="inline-flex items-center gap-1 mt-3 text-[13px] text-lime hover:text-lime-deep transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          Learn more
                          <ArrowUpRight size={14} weight="bold" />
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`hidden md:block w-1.5 h-1.5 rounded-full mt-2 transition-all duration-300 ${
                      active === i
                        ? "bg-lime shadow-[0_0_8px_var(--color-lime)]"
                        : "bg-white/10"
                    }`}
                  />
                </div>
              </button>
            ))}
            <div className="border-t border-white/[0.06]" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
}
