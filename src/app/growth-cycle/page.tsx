import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { Card, CtaBand, PageHero, Section } from "@/components/ui";
import { GROWTH_LAYERS, PHASES, SEO } from "@/lib/copy";
import { pageMeta } from "@/lib/seo";
import { CTA } from "@/lib/site";

export const metadata = pageMeta(SEO.growthCycle.title, SEO.growthCycle.description, "/growth-cycle");

export default function GrowthCyclePage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Growth Cycle", path: "/growth-cycle" },
        ]}
      />
      <PageHero
        eyebrow="How we scale"
        title={SEO.growthCycle.h1}
        body="DCRBN identifies the real constraint, deploys only the layers required to move it, and coordinates resources, relationships, systems, and operators toward the outcomes that can accelerate the company’s next stage."
        secondary={CTA.secondary}
      />
      <Section>
        <p className="max-w-[68ch] text-[16.5px] leading-relaxed font-light text-soft">
          DCRBN does not deploy every capability to every company. We identify the bottleneck and activate the right
          growth layers at the right time.
        </p>
        <h2 className="mt-12 text-[clamp(26px,3.4vw,36px)] font-medium text-hi">Growth layers</h2>
        <ol className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {GROWTH_LAYERS.map((layer, i) => (
            <li key={layer} className="rounded-2xl border border-line bg-panel p-5">
              <p className="font-mono text-[12px] tracking-widest text-blue-lt">0{i + 1}</p>
              <p className="mt-2 text-[17px] text-hi">{layer}</p>
            </li>
          ))}
        </ol>
      </Section>
      <Section className="bg-ink-sec">
        <h2 className="text-[clamp(26px,3.4vw,36px)] font-medium text-hi">Six-phase methodology</h2>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {PHASES.map((phase, i) => (
            <Card key={phase.name} index={`0${i + 1}`} title={phase.name} body={phase.body} />
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
