"use client";

import { useRef, useEffect, useState } from "react";

export function FooterWordmark() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [translateY, setTranslateY] = useState(100);

  useEffect(() => {
    const update = () => {
      const docH = document.documentElement.scrollHeight;
      const viewH = window.innerHeight;
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      const maxScroll = docH - viewH;
      const distFromBottom = maxScroll - scrollY;
      const progress = Math.min(1, Math.max(0, 1 - distFromBottom / 600));
      setTranslateY((1 - progress) * 70);
    };

    window.addEventListener("scroll", update, { passive: true });
    const interval = setInterval(update, 16);
    update();

    return () => {
      window.removeEventListener("scroll", update);
      clearInterval(interval);
    };
  }, []);

  return (
    <div
      ref={wrapRef}
      className="relative z-0 h-[clamp(6rem,18vw,15rem)] overflow-hidden select-none pb-4"
      aria-hidden="true"
    >
      <p
        className="font-mono text-[clamp(6rem,20vw,18rem)] leading-[0.8] tracking-[-0.06em] text-center whitespace-nowrap absolute inset-x-0 bottom-0 text-lime"
        style={{
          transform: `translateY(${translateY}%)`,
        }}
      >
        GETING
      </p>
    </div>
  );
}
