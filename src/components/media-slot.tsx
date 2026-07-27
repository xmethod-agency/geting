interface MediaSlotProps {
  label?: string;
  aspect?: string;
  className?: string;
}

export function MediaSlot({
  label = "Media placeholder",
  aspect = "16/9",
  className = "",
}: MediaSlotProps) {
  return (
    <div
      className={`relative border border-graphite bg-carbon overflow-hidden rounded-xl ${className}`}
      style={{ aspectRatio: aspect }}
      role="img"
      aria-label={label}
    >
      <div className="absolute inset-0 grid place-items-center">
        <span className="font-mono text-xs text-ash tracking-wide uppercase">
          {label}
        </span>
      </div>
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.03]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="grid-pattern"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid-pattern)" />
      </svg>
    </div>
  );
}
