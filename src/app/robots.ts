import type { MetadataRoute } from "next";
import { BRAND } from "@/content/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `https://${BRAND.domain}/sitemap.xml`,
  };
}
