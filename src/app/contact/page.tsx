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
                  <div className="grid grid-cols-1 gap-px bg-white/[0.04] rounded-sm overflow-hidden">
                    <InfoCell label="Email" value={BRAND.email} href={`mailto:${BRAND.email}`} />
                    <InfoCell label="Registered Office" value={BRAND.address} />
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
      <p className="text-mono-sm text-stone/60 uppercase tracking-wider shrink-0">{label}</p>
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
