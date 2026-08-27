import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { StatusChip } from "@/components/Placeholder";
import { CtaBand, PageHero, Section } from "@/components/ui";
import { CONTROLLED_COMPANIES, SEO, VENTURE_CAPABILITIES } from "@/lib/copy";
import { pageMeta } from "@/lib/seo";
import { CTA } from "@/lib/site";

export const metadata = pageMeta(SEO.ventureStudio.title, SEO.ventureStudio.description, "/venture-studio");

export default function VentureStudioPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Venture Studio", path: "/venture-studio" },
        ]}
      />
      <PageHero
        eyebrow="Platform area"
        title={SEO.ventureStudio.h1}
        body="DCRBN Venture Studio is the build side of the platform. We selectively partner with founders, products, and opportunities where DCRBN can help turn proven insight, workflow, technology, or market opportunity into a scalable business."
        secondary={CTA.partner}
      />
      <Section>
        <p className="max-w-[60ch] text-[16.5px] leading-relaxed font-light text-soft">We do not just advise. We help build.</p>
        <h2 className="mt-12 text-[clamp(26px,3.4vw,36px)] font-medium text-hi">Venture Studio capabilities</h2>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {VENTURE_CAPABILITIES.map((item) => (
            <li key={item} className="rounded-xl border border-line bg-panel px-4 py-4 text-[15px] text-hi">
              {item}
            </li>
          ))}
        </ul>
      </Section>
      <Section className="bg-ink-sec">
        <h2 className="text-[clamp(26px,3.4vw,36px)] font-medium text-hi">DCRBN-controlled companies</h2>
        <p className="mt-4 max-w-[62ch] text-[16px] leading-relaxed text-soft">
          Companies where DCRBN has controlling equity, build responsibility, or company-creation involvement. Sixframe
          belongs inside the Venture Studio as a DCRBN-controlled company.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {CONTROLLED_COMPANIES.map((company) => (
            <Link key={company.slug} href={company.href} className="no-underline">
              <article className="h-full rounded-2xl border border-line bg-panel p-6">
                <div className="mb-4 flex items-center justify-between gap-3">
                  <h3 className="text-[18px] text-hi">{company.name}</h3>
                  <StatusChip status={company.approvalStatus} />
                </div>
                <p className="text-[14.5px] leading-relaxed text-soft">{company.oneLiner}</p>
              </article>
            </Link>
          ))}
        </div>
      </Section>
      <CtaBand
        title="Building Infrastructure That Inspires Us?"
        body="If you are a founder building in AI, blockchain, or quantum with traction, conviction, and a problem worth solving, DCRBN may be the force multiplier around your next stage of growth."
      />
    </>
  );
}
