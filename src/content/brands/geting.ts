import { SHARED_CONTENT } from "../shared";
import type { SiteContent } from "../types";

export const geting: SiteContent = {
  ...SHARED_CONTENT,
  brand: {
    id: "geting",
    name: "Geting",
    wordmark: "GETING",
    legalName: "Geting Limited",
    jurisdiction: "Hong Kong",
    tagline: "AI Infrastructure, Engineered",
    description:
      "Vertically integrated AI infrastructure. Energy, data centers, cloud, and custom software engineering.",
    domain: "geting-limited.com",
    email: "info@geting-limited.com",
    phone: "+852 0000 0000", // TODO: replace with real number
    address:
      "Unit 308, 3/F., Chevalier House, 45-51 Chatham Road South, Tsim Sha Tsui, Hong Kong",
    registrationNumber: "80598211",
    logo: "/logo-geting.png",
  },
};
