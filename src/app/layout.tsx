import type { Metadata } from "next";
import { Space_Grotesk, Space_Mono } from "next/font/google";
import { SmoothScroll } from "@/components/smooth-scroll";
import { CustomCursor } from "@/components/custom-cursor";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const spaceMono = Space_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://geting.hk"),
  title: {
    default: "Geting - AI Infrastructure, Engineered",
    template: "%s | Geting",
  },
  description:
    "Vertically integrated AI infrastructure. Energy, data centers, cloud, and custom software engineering.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Geting",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${spaceMono.variable} dark`}
    >
      <body className="min-h-dvh flex flex-col">
        <SmoothScroll />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
