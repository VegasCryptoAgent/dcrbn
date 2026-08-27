import { Cta } from "@/components/Cta";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { Card, CtaBand, PageHero, Section } from "@/components/ui";
import { GROWTH_LAYERS, PHASES, SEO } from "@/lib/copy";
import { pageMeta } from "@/lib/seo";
import { CTA } from "@/lib/site";

export const metadata = pageMeta(SEO.speedToScale.title, SEO.speedToScale.description, "/speed-to-scale");

export default function SpeedToScalePage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Speed to Scale", path: "/speed-to-scale" },
        ]}
      />
      <PageHero
        eyebrow="Speed to Scale"
        title={SEO.speedToScale.h1}
        body="Speed to Scale is DCRBN’s growth platform for infrastructure founders. We activate visibility, strategy, agentic infrastructure, product support, partnerships, revenue, funding, and scale resources around inspired founders."
        secondary={CTA.secondary}
      />
      <Section>
        <h2 className="text-[clamp(26px,3.4vw,36px)] font-medium text-hi">One platform, not a stack of services</h2>
        <p className="mt-5 max-w-[68ch] text-[16.5px] leading-relaxed font-light text-soft">
          DCRBN is not a collection of services. It is one platform with advisory, consulting, venture studio, capital
          readiness, distribution, and company-building capabilities connected around Speed to Scale.
        </p>
        <p className="mt-4 max-w-[68ch] text-[16.5px] leading-relaxed font-light text-soft">
          DCRBN identifies the real constraint, deploys only the layers required to move it, and coordinates resources,
          relationships, systems, and operators toward the outcomes that can accelerate the company’s next stage.
        </p>
        <ol className="mt-10 flex flex-wrap gap-2">
          {GROWTH_LAYERS.map((layer, i) => (
            <li key={layer} className="flex items-center gap-2 text-[14px] text-hi">
              <span className="rounded-full border border-blue-lt/30 bg-blue/10 px-3 py-1.5">{layer}</span>
              {i < GROWTH_LAYERS.length - 1 ? <span className="text-mute">→</span> : null}
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
        <div className="mt-10">
          <Cta href="/growth-cycle" variant="secondary">
            See the Growth Cycle
          </Cta>
        </div>
      </Section>
      <CtaBand
        title="Building Infrastructure That Inspires Us?"
        body="If you are a founder building in AI, blockchain, or quantum with traction, conviction, and a problem worth solving, DCRBN may be the force multiplier around your next stage of growth."
      />
    </>
  );
}
