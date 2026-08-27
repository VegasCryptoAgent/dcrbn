export type RedirectRow = {
  source: string;
  destination: string;
  permanent: boolean;
  oldHost?: string;
  disposition: "Keep" | "Adapt" | "Merge" | "Retire" | "New";
  title: string;
  approval: "Approved" | "Placeholder" | "Needs verification";
  notes: string;
};

export const REDIRECTS: RedirectRow[] = [
  {
    source: "/",
    destination: "/",
    permanent: true,
    oldHost: "iangroup.ai",
    disposition: "Adapt",
    title: "Homepage",
    approval: "Approved",
    notes: "Full homepage architecture replaced with DCRBN Speed to Scale copy.",
  },
  {
    source: "/how-we-scale",
    destination: "/growth-cycle",
    permanent: true,
    disposition: "Adapt",
    title: "How We Scale",
    approval: "Approved",
    notes: "Maps to Speed to Scale Growth Cycle.",
  },
  {
    source: "/fractional-experts",
    destination: "/advisory",
    permanent: true,
    disposition: "Merge",
    title: "Fractional Experts",
    approval: "Approved",
    notes: "Capability absorbed into Advisory & Consulting / operator support.",
  },
  {
    source: "/growth-distribution",
    destination: "/speed-to-scale",
    permanent: true,
    disposition: "Merge",
    title: "Growth & Distribution",
    approval: "Approved",
    notes: "Capability absorbed into Speed to Scale growth layers.",
  },
  {
    source: "/capital",
    destination: "/advisory",
    permanent: true,
    disposition: "Merge",
    title: "Capital",
    approval: "Approved",
    notes: "Capital readiness lives under Advisory & Consulting.",
  },
  {
    source: "/venture-studio",
    destination: "/venture-studio",
    permanent: true,
    disposition: "Adapt",
    title: "Venture Studio",
    approval: "Approved",
    notes: "Retained as a primary platform area with DCRBN-controlled companies.",
  },
  {
    source: "/results",
    destination: "/proof",
    permanent: true,
    disposition: "Adapt",
    title: "Results",
    approval: "Placeholder",
    notes: "Rebuilt as three-layer Proof. Case studies remain placeholders until approved.",
  },
  {
    source: "/about",
    destination: "/about",
    permanent: true,
    disposition: "Adapt",
    title: "About",
    approval: "Placeholder",
    notes: "Approved team names only. Bios, titles, and photos pending.",
  },
  {
    source: "/scale-diagnostic",
    destination: "/apply",
    permanent: true,
    disposition: "Adapt",
    title: "Scale Diagnostic",
    approval: "Approved",
    notes: "CTA and form replaced with Apply for Speed to Scale.",
  },
  {
    source: "/privacy",
    destination: "/privacy",
    permanent: true,
    disposition: "Adapt",
    title: "Privacy Policy",
    approval: "Needs verification",
    notes: "Adapted from existing DCRBN LLC policy. Counsel should review brand/email updates.",
  },
  {
    source: "/terms",
    destination: "/terms",
    permanent: true,
    disposition: "Adapt",
    title: "Terms of Service",
    approval: "Needs verification",
    notes: "Adapted from existing DCRBN LLC terms. Counsel should review brand/email updates.",
  },
  {
    source: "/consulting",
    destination: "/advisory",
    permanent: true,
    disposition: "Merge",
    title: "Consulting (legacy Vite route)",
    approval: "Approved",
    notes: "Legacy IAN-Group app route.",
  },
  {
    source: "/accelerator",
    destination: "/speed-to-scale",
    permanent: true,
    disposition: "Retire",
    title: "Accelerator (legacy Vite route)",
    approval: "Approved",
    notes: "Retired as a standalone expression.",
  },
  {
    source: "/6frame-ai-studio",
    destination: "/sixframe",
    permanent: true,
    disposition: "Adapt",
    title: "6Frame AI Studio (legacy Vite route)",
    approval: "Approved",
    notes: "Sixframe now lives under Venture Studio.",
  },
  {
    source: "/case-studies",
    destination: "/proof",
    permanent: true,
    disposition: "Merge",
    title: "Case Studies (legacy Vite route)",
    approval: "Placeholder",
    notes: "Do not republish unapproved metrics from the old site.",
  },
  {
    source: "/pitch",
    destination: "/apply",
    permanent: true,
    disposition: "Merge",
    title: "Pitch (legacy Vite route)",
    approval: "Approved",
    notes: "Applications now go through Apply for Speed to Scale.",
  },
  {
    source: "/free-ai-tools",
    destination: "/",
    permanent: true,
    disposition: "Retire",
    title: "Free AI Tools (legacy Vite route)",
    approval: "Approved",
    notes: "Retired. Not part of DCRBN platform architecture.",
  },
];

export const NEXT_REDIRECTS = REDIRECTS.filter(
  (row) => row.source !== row.destination
).map((row) => ({
  source: row.source,
  destination: row.destination,
  permanent: row.permanent,
}));
