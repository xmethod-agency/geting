"use client";

import { useRef, useEffect } from "react";

interface TextRevealProps {
  children: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  className?: string;
  instant?: boolean;
}

export function TextReveal({
  children,
  as: Tag = "p",
  className = "",
  instant = false,
}: TextRevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const chars = el.querySelectorAll<HTMLSpanElement>(".char");
    if (!chars.length) return;

    if (instant) {
      chars.forEach((c) => (c.style.opacity = "1"));
      return;
    }

    let scrollHandler: (() => void) | null = null;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const onScroll = () => {
            const r = el.getBoundingClientRect();
            const viewH = window.innerHeight;
            const progress = Math.min(
              1,
              Math.max(0, ((viewH - r.top) / (viewH + r.height)) * 1.8)
            );

            chars.forEach((char, i) => {
              const charProgress = Math.min(
                1,
                Math.max(0, (progress * chars.length - i) / 8)
              );
              char.style.opacity = `${0.2 + charProgress * 0.8}`;
            });
          };

          onScroll();
          scrollHandler = onScroll;
          window.addEventListener("scroll", onScroll, { passive: true });
        } else {
          if (scrollHandler) {
            window.removeEventListener("scroll", scrollHandler);
            scrollHandler = null;
          }
          chars.forEach((c) => (c.style.opacity = "0.2"));
        }
      },
      { threshold: 0, rootMargin: "0px 0px -10% 0px" }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      if (scrollHandler) window.removeEventListener("scroll", scrollHandler);
    };
  }, [instant]);

  const chars = children.split("").map((char, i) => (
    <span
      key={i}
      className="char inline-block transition-opacity duration-75"
      style={{ opacity: instant ? 1 : 0.2 }}
    >
      {char === " " ? "\u00A0" : char}
    </span>
  ));

  return (
    // @ts-expect-error dynamic tag
    <Tag ref={ref} className={className}>
      {chars}
    </Tag>
  );
}
