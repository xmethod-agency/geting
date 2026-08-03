import { SHARED_CONTENT } from "../shared";
import type { SiteContent } from "../types";

export const eightBlocks: SiteContent = {
  ...SHARED_CONTENT,
  // Copy is inherited from SHARED_CONTENT; add overrides here when the brands diverge.
  brand: {
    id: "8blocks",
    name: "8Blocks",
    wordmark: "8BLOCKS",
    legalName: "8Blocks",
    tagline: "AI Infrastructure, Engineered",
    description:
      "Vertically integrated AI infrastructure. Energy, data centers, cloud, and custom software engineering.",
    domain: "8blocks.ai",
    email: "info@8blocks.ai",
    // jurisdiction, address, registrationNumber and phone stay empty until the
    // legal entity is confirmed; the UI hides those blocks while they are unset.
  },
};
