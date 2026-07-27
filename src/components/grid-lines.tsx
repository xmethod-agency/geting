export function GridLines() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0"
      aria-hidden="true"
    >
      <div className="container-wide h-full relative">
        <div className="absolute inset-y-0 left-0 w-px border-l border-dashed border-white/[0.04]" />
        <div className="absolute inset-y-0 left-1/4 w-px border-l border-dashed border-white/[0.04]" />
        <div className="absolute inset-y-0 left-1/2 w-px border-l border-dashed border-white/[0.04]" />
        <div className="absolute inset-y-0 left-3/4 w-px border-l border-dashed border-white/[0.04]" />
        <div className="absolute inset-y-0 right-0 w-px border-r border-dashed border-white/[0.04]" />
      </div>
    </div>
  );
}
