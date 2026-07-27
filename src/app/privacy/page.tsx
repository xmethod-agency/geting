import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { BRAND } from "@/content/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How we handle your personal data.",
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="flex-1 pt-[72px]">
        <div className="section-pad bg-void">
          <div className="container-wide max-w-[680px]">
            <p className="text-mono-sm text-lime uppercase tracking-widest mb-6">
              Legal
            </p>
            <h1 className="text-headline text-white">Privacy Policy</h1>
            <div className="mt-10 space-y-8 text-sm text-stone leading-relaxed">
              <p>
                {BRAND.name} operates the website {BRAND.domain}. This page
                informs you of our policies regarding the collection, use, and
                disclosure of personal data when you use our website.
              </p>

              <div className="space-y-3">
                <h2 className="text-base text-white font-medium">Data we collect</h2>
                <p>
                  When you submit the contact form, we collect your name, email
                  address, company name (optional), and your message. We use this
                  information solely to respond to your inquiry.
                </p>
              </div>

              <div className="space-y-3">
                <h2 className="text-base text-white font-medium">How we use your data</h2>
                <p>
                  We use the information you provide to respond to your request and
                  to improve our services. We do not sell, rent, or share your
                  personal data with third parties for marketing purposes.
                </p>
              </div>

              <div className="space-y-3">
                <h2 className="text-base text-white font-medium">Data retention</h2>
                <p>
                  We retain contact form submissions for as long as necessary to
                  fulfill the purpose for which they were collected, typically no
                  longer than 12 months.
                </p>
              </div>

              <div className="space-y-3">
                <h2 className="text-base text-white font-medium">Contact</h2>
                <p>
                  For questions about this policy, email us at{" "}
                  <a
                    href={`mailto:${BRAND.email}`}
                    className="text-white underline underline-offset-2 hover:text-lime transition-colors"
                  >
                    {BRAND.email}
                  </a>
                  .
                </p>
              </div>

              <p className="text-xs text-stone/40 pt-4">
                Last updated: July 2026. This is a placeholder policy. Replace
                with legally reviewed text before launch.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
