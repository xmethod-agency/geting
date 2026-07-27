"use client";

import { useEffect, useRef, type RefObject } from "react";

export function useReveal<T extends HTMLElement = HTMLElement>(
  externalRef?: RefObject<T | null>
) {
  const internalRef = useRef<T>(null);
  const ref = externalRef || internalRef;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [ref]);

  return ref;
}
