import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ContactForm } from "./contact-form";
import { BRAND } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with our team about AI infrastructure, cloud services, or custom engineering.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="flex-1 pt-[72px]">
        <div className="section-pad bg-void">
          <div className="container-wide">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-0">
              <div className="lg:col-span-6 lg:pr-20">
                <p className="text-mono-sm text-lime uppercase tracking-widest mb-6">
                  Contact
                </p>
                <h1 className="text-display text-white">
                  Let&apos;s build.
                </h1>
                <p className="mt-5 text-[15px] text-stone max-w-[380px] leading-relaxed">
                  Tell us about your infrastructure needs. Our engineering team
                  will get back to you within one business day.
                </p>
                <div className="mt-12">
                  <ContactForm />
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="lg:sticky lg:top-28 space-y-6">
                  <div className="grid grid-cols-1 gap-px bg-white/[0.04] rounded-lg overflow-hidden">
                    <InfoCell label="Email" value={BRAND.email} href={`mailto:${BRAND.email}`} />
                    <InfoCell label="Phone" value={BRAND.phone} href={`tel:${BRAND.phone}`} />
                    <InfoCell label="Headquarters" value="Denver, Colorado" />
                  </div>

                  <div className="border border-white/[0.06] rounded-lg bg-deep p-8 relative overflow-hidden">
                    <div className="absolute inset-0 opacity-[0.03]" aria-hidden="true">
                      <svg className="w-full h-full">
                        <defs>
                          <pattern id="contact-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
                          </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#contact-grid)" />
                      </svg>
                    </div>
                    <p className="relative z-10 text-mono-sm text-stone uppercase tracking-wider">
                      Map placeholder
                    </p>
                    <div className="relative z-10 mt-4 w-3 h-3 rounded-full bg-lime shadow-[0_0_12px_var(--color-lime)]" />
                  </div>

                  <p className="text-xs text-stone/50">
                    By submitting this form you agree to our{" "}
                    <a
                      href="/privacy"
                      className="text-stone underline underline-offset-2 hover:text-white transition-colors"
                    >
                      privacy policy
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

function InfoCell({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href?: string;
}) {
  return (
    <div className="bg-deep p-6 flex items-start justify-between gap-4">
      <p className="text-mono-sm text-stone/60 uppercase tracking-wider">{label}</p>
      {href ? (
        <a href={href} className="text-sm text-white hover:text-lime transition-colors text-right">
          {value}
        </a>
      ) : (
        <p className="text-sm text-white text-right">{value}</p>
      )}
    </div>
  );
}
