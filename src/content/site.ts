import { eightBlocks } from "./brands/8blocks";
import { geting } from "./brands/geting";
import type { SiteContent } from "./types";

// Inlined at build time, so each Netlify site needs NEXT_PUBLIC_BRAND set before `next build`.
const content: SiteContent =
  process.env.NEXT_PUBLIC_BRAND === "8blocks" ? eightBlocks : geting;

export const BRAND = content.brand;
export const NAV_LINKS = content.nav;
export const HERO = content.hero;
export const STACK_ITEMS = content.stack;
export const AMBER_STATEMENT = content.statement;
export const INFRASTRUCTURE = content.infrastructure;
export const ENGINEERING_PRACTICES = content.practices;
export const CTA_BAND = content.ctaBand;
export const SERVICES = content.services;

export const FOOTER = {
  copyright: `${new Date().getFullYear()} ${content.brand.legalName}`,
  links: content.footerLinks,
};
