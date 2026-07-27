export const BRAND = {
  name: "Geting",
  legalName: "Geting Limited",
  tagline: "AI Infrastructure, Engineered",
  domain: "geting.hk",
  email: "info@geting.hk",
  phone: "+852 0000 0000", // TODO: replace with real number
  address: "Unit 308, 3/F., Chevalier House, 45-51 Chatham Road South, Tsim Sha Tsui, Hong Kong",
  registrationNumber: "80598211",
} as const;

export const NAV_LINKS = [
  { label: "Services", href: "/services" },
  { label: "About", href: "/#infrastructure" },
  { label: "Contact", href: "/contact" },
] as const;

export const HERO = {
  headline: "We build the engine behind AI.",
  sub: "Energy. Data centers. Cloud. Software. One integrated stack, from power grid to production model.",
  cta: { label: "Get in touch", href: "/contact" },
  specs: [
    { label: "MW Capacity", value: "340", note: "TODO(demo)" },
    { label: "PUE", value: "1.08", note: "TODO(demo)" },
    { label: "GPU Clusters", value: "12", note: "TODO(demo)" },
  ],
} as const;

export const STACK_ITEMS = [
  {
    id: "energy",
    title: "Power and Energy",
    summary:
      "Diverse energy sourcing from solar and wind to natural gas and grid. Co-developed from day one with compute infrastructure.",
    anchor: "power-energy",
  },
  {
    id: "datacenter",
    title: "Data Centers",
    summary:
      "Purpose-built AI factories with advanced cooling, high-density racks, and modular deployment in months.",
    anchor: "data-centers",
  },
  {
    id: "cloud",
    title: "AI Cloud",
    summary:
      "GPU clusters, RDMA networking, scalable storage. Managed Kubernetes, inference endpoints, fine-tuning APIs.",
    anchor: "ai-cloud",
  },
  {
    id: "software",
    title: "Software Engineering",
    summary:
      "Platform engineering, MLOps, data pipelines, integrations, and legacy modernization. Dedicated teams for complex builds.",
    anchor: "software-engineering",
  },
] as const;

export const AMBER_STATEMENT =
  "We do not rent infrastructure. We build it, from the power source to the API endpoint.";

export const INFRASTRUCTURE = {
  metrics: [
    { label: "Megawatts", value: "340+", note: "TODO(demo)" },
    { label: "Sq. Ft.", value: "2.4M", note: "TODO(demo)" },
    { label: "Campuses", value: "5", note: "TODO(demo)" },
    { label: "Uptime SLA", value: "99.99%", note: "TODO(demo)" },
  ],
  sites: [
    { name: "Denver, CO", status: "LIVE" as const, note: "TODO(demo)" },
    { name: "Abilene, TX", status: "LIVE" as const, note: "TODO(demo)" },
    { name: "Reno, NV", status: "BUILD" as const, note: "TODO(demo)" },
    { name: "Frankfurt, DE", status: "PLANNED" as const, note: "TODO(demo)" },
  ],
} as const;

export const ENGINEERING_PRACTICES = [
  {
    title: "Platform Engineering",
    desc: "Infrastructure as code, CI/CD, observability, and developer experience for GPU-native workloads.",
  },
  {
    title: "Backend and API",
    desc: "High-throughput services, event-driven architectures, and API design for real-time AI inference.",
  },
  {
    title: "MLOps and Inference",
    desc: "Model serving pipelines, A/B deployment, monitoring, and autoscaling for production AI.",
  },
  {
    title: "Data Engineering",
    desc: "Streaming and batch pipelines, lakehouse architectures, and governance for training data at scale.",
  },
  {
    title: "Integrations",
    desc: "Connecting AI systems to enterprise workflows. Legacy modernization, migration, and hybrid cloud.",
  },
  {
    title: "Dedicated Teams",
    desc: "Embedded engineering squads for long-term builds. Full ownership from architecture through production.",
  },
] as const;

export const CTA_BAND = {
  headline: "Ready to build something real?",
  sub: "Talk to our engineering team about your infrastructure needs.",
  cta: { label: "Get in touch", href: "/contact" },
} as const;

export const SERVICES = [
  {
    id: "ai-cloud",
    title: "AI Cloud",
    headline: "GPU compute built for scale",
    description:
      "High-performance GPU clusters with RDMA-backed networking, scalable block and object storage, and managed orchestration through Kubernetes and Slurm.",
    specs: [
      { key: "GPU", value: "NVIDIA H100, H200, B200" },
      { key: "Networking", value: "400G InfiniBand, RoCE v2" },
      { key: "Storage", value: "NVMe block, S3-compatible object" },
      { key: "Orchestration", value: "Managed Kubernetes, Slurm" },
    ],
  },
  {
    id: "managed-inference",
    title: "Managed Inference and Fine-tuning",
    headline: "From model to production endpoint",
    description:
      "Serverless and dedicated inference endpoints with autoscaling. Fine-tuning APIs with token-based pricing. Bring your own model or use top open-source checkpoints.",
    specs: [
      { key: "Inference", value: "Serverless, self-serve, tailored" },
      { key: "Fine-tuning", value: "LoRA, full, token-based pricing" },
      { key: "Models", value: "Llama, Mistral, Qwen, BYOM" },
      { key: "Latency", value: "Sub-100ms p99 at scale" },
    ],
  },
  {
    id: "modular-factories",
    title: "Modular AI Factories",
    headline: "Prefab compute, deployed in months",
    description:
      "Factory-manufactured modular data center units. Air or liquid cooled, energy-versatile, deployable as edge zones or dedicated clusters anywhere.",
    specs: [
      { key: "Form factor", value: "Self-contained modular units" },
      { key: "Cooling", value: "Air-cooled, liquid-cooled (2026)" },
      { key: "Power", value: "Solar, grid, gas, SMR-compatible" },
      { key: "Deploy time", value: "3-6 months from order" },
    ],
  },
  {
    id: "colocation",
    title: "Colocation and Dedicated Clusters",
    headline: "Your hardware, our infrastructure",
    description:
      "Dedicated racks and cages in purpose-built AI campuses. Full control over hardware with managed power, cooling, and connectivity.",
    specs: [
      { key: "Density", value: "Up to 100kW per rack" },
      { key: "Connectivity", value: "Carrier-neutral, dark fiber" },
      { key: "Security", value: "SOC 2 Type II, 24/7 NOC" },
      { key: "Contracts", value: "Flexible term, custom SLA" },
    ],
  },
  {
    id: "power-energy",
    title: "Power and Energy Development",
    headline: "Energy-first, by design",
    description:
      "We co-develop power and compute from day one. Diverse energy sourcing, in-house manufacturing of electrical components, and independent power solutions for compressed timelines.",
    specs: [
      { key: "Sources", value: "Solar, wind, natural gas, grid" },
      { key: "Manufacturing", value: "In-house switchgear, transformers" },
      { key: "Scale", value: "Multi-GW development pipeline" },
      { key: "Timeline", value: "Power + compute co-developed" },
    ],
  },
  {
    id: "software-engineering",
    title: "Custom Software Engineering",
    headline: "Beyond infrastructure",
    description:
      "Full-stack engineering for AI-native applications. Platform, backend, MLOps, data, and integrations. Dedicated teams for complex, long-term builds.",
    specs: [
      { key: "Platform", value: "IaC, CI/CD, observability, DX" },
      { key: "AI/ML", value: "Model serving, A/B, monitoring" },
      { key: "Data", value: "Streaming, batch, lakehouse, gov." },
      { key: "Teams", value: "Embedded squads, full ownership" },
    ],
  },
] as const;

export const FOOTER = {
  copyright: `${new Date().getFullYear()} ${BRAND.legalName}`,
  links: [
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
    { label: "Privacy", href: "/privacy" },
  ],
} as const;
