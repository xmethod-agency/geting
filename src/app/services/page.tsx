import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { SERVICES, AMBER_STATEMENT } from "@/content/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "AI Cloud, managed inference, modular data centers, colocation, energy development, and custom software engineering.",
};

function ServiceBlock({
  service,
  index,
}: {
  service: (typeof SERVICES)[number];
  index: number;
}) {
  return (
    <div id={service.id} className="scroll-mt-28 py-16 md:py-24 border-t border-white/[0.06] first:border-0 first:pt-0">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0">
        <div className="lg:col-span-5 lg:pr-12">
          <span className="text-mono-sm text-accent/60 uppercase tracking-widest">
            0{index + 1}
          </span>
          <h2 className="mt-3 text-headline text-white">{service.headline}</h2>
          <p className="mt-4 text-sm text-stone leading-relaxed max-w-[400px]">
            {service.description}
          </p>
        </div>

        <div className="lg:col-span-7">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/[0.04] rounded-lg overflow-hidden">
            {service.specs.map((spec) => (
              <div key={spec.key} className="bg-deep p-6">
                <p className="text-mono-sm text-stone/60 uppercase tracking-wider mb-2">
                  {spec.key}
                </p>
                <p className="text-sm text-white">{spec.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="flex-1 pt-[72px]">
        <div className="section-pad bg-void">
          <div className="container-wide">
            <p className="text-mono-sm text-accent uppercase tracking-widest mb-6">
              Services
            </p>
            <h1 className="text-display text-white max-w-[700px]">
              What we build.
            </h1>
            <p className="mt-5 text-[15px] text-stone max-w-[480px] leading-relaxed">
              Six capabilities across the full AI infrastructure stack, from
              energy sourcing to production software.
            </p>
          </div>
        </div>

        <div className="bg-void">
          <div className="container-wide">
            <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-12 lg:gap-16">
              <nav className="lg:sticky lg:top-28 lg:self-start">
                <div className="flex lg:flex-col gap-4 lg:gap-1 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
                  {SERVICES.map((s, i) => (
                    <a
                      key={s.id}
                      href={`#${s.id}`}
                      className="flex items-center gap-3 py-2 text-sm text-stone hover:text-white transition-colors whitespace-nowrap lg:whitespace-normal group"
                    >
                      <span className="text-mono-sm text-stone/30 group-hover:text-accent/50 transition-colors">
                        0{i + 1}
                      </span>
                      {s.title}
                    </a>
                  ))}
                </div>
              </nav>

              <div>
                {SERVICES.slice(0, 3).map((service, i) => (
                  <ServiceBlock key={service.id} service={service} index={i} />
                ))}

                <div className="my-16 md:my-24 -mx-4 md:mx-0 bg-accent rounded-none md:rounded-lg p-10 md:p-16">
                  <p className="text-title text-void max-w-[500px] font-medium">
                    {AMBER_STATEMENT}
                  </p>
                </div>

                {SERVICES.slice(3).map((service, i) => (
                  <ServiceBlock key={service.id} service={service} index={i + 3} />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="pb-24" />
      </main>
      <Footer />
    </>
  );
}
