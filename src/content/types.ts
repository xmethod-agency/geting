export type BrandId = "geting" | "8blocks";

export type SiteStatus = "LIVE" | "BUILD" | "PLANNED";

export interface Brand {
  id: BrandId;
  name: string;
  /** Oversized wordmark rendered at the bottom of the footer. */
  wordmark: string;
  legalName: string;
  /** Country of incorporation. When empty the privacy policy drops the data-transfer section. */
  jurisdiction?: string;
  tagline: string;
  description: string;
  domain: string;
  email: string;
  phone?: string;
  address?: string;
  registrationNumber?: string;
  /** Omit to fall back to a text wordmark in the header and footer. */
  logo?: string;
}

export interface Link {
  label: string;
  href: string;
}

export interface Metric {
  label: string;
  value: string;
  note?: string;
}

export interface Hero {
  headline: string;
  sub: string;
  cta: Link;
  specs: Metric[];
}

export interface StackItem {
  id: string;
  title: string;
  summary: string;
  anchor: string;
}

export interface Infrastructure {
  metrics: Metric[];
  sites: { name: string; status: SiteStatus; note?: string }[];
}

export interface Practice {
  title: string;
  desc: string;
}

export interface CtaBand {
  headline: string;
  sub: string;
  cta: Link;
}

export interface Service {
  id: string;
  title: string;
  headline: string;
  description: string;
  specs: { key: string; value: string }[];
}

export interface SiteContent {
  brand: Brand;
  nav: Link[];
  hero: Hero;
  stack: StackItem[];
  statement: string;
  infrastructure: Infrastructure;
  practices: Practice[];
  ctaBand: CtaBand;
  services: Service[];
  footerLinks: Link[];
}

/** Everything a brand inherits from the shared content unless it overrides it. */
export type SharedContent = Omit<SiteContent, "brand">;
