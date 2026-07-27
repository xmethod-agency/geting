"use client";

import { useRef, useEffect } from "react";

interface TextRevealProps {
  children: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  className?: string;
}

export function TextReveal({
  children,
  as: Tag = "p",
  className = "",
}: TextRevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const chars = el.querySelectorAll<HTMLSpanElement>(".char");
    if (!chars.length) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        const rect = el.getBoundingClientRect();
        const viewH = window.innerHeight;

        const onScroll = () => {
          const r = el.getBoundingClientRect();
          const progress = Math.min(
            1,
            Math.max(0, (viewH - r.top) / (viewH + r.height) * 1.8)
          );

          chars.forEach((char, i) => {
            const charProgress = Math.min(
              1,
              Math.max(0, (progress * chars.length - i) / 8)
            );
            char.style.opacity = `${0.2 + charProgress * 0.8}`;
          });

          if (progress >= 1) {
            window.removeEventListener("scroll", onScroll);
            chars.forEach((c) => (c.style.opacity = "1"));
          }
        };

        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });

        return () => window.removeEventListener("scroll", onScroll);
      },
      { threshold: 0, rootMargin: "0px 0px -10% 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const chars = children.split("").map((char, i) => (
    <span
      key={i}
      className="char inline-block transition-opacity duration-75"
      style={{ opacity: 0.2 }}
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
