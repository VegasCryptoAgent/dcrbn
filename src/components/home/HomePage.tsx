import Link from "next/link";
import { Cta } from "@/components/Cta";
import { Placeholder, StatusChip } from "@/components/Placeholder";
import { Card, CtaBand, Container, Eyebrow, HeroGlow, Section } from "@/components/ui";
import {
  ADVISORY_CAPABILITIES,
  ALIGN_WAYS,
  CONSTRAINTS,
  CONTROLLED_COMPANIES,
  EXECUTION_PROOF,
  FOCUS_AREAS,
  GROWTH_LAYERS,
  NETWORK_VALUES,
  PHASES,
  PLACEHOLDER,
  TRACTION_SIGNALS,
  VENTURE_CAPABILITIES,
} from "@/lib/copy";
import { CTA } from "@/lib/site";

export function HomePage() {
  return (
    <>
      <Hero />
      <Mission />
      <WhoWeBack />
      <Constraints />
      <GrowthCycle />
      <Focus />
      <Advisory />
      <Venture />
      <Proof />
      <Network />
      <Partners />
      <CtaBand
        title="Building Infrastructure That Inspires Us?"
        body="If you are a founder building in AI, blockchain, or quantum with traction, conviction, and a problem worth solving, DCRBN may be the force multiplier around your next stage of growth."
        closing="We work on solutions that inspire us — and founders who are already moving."
      />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden pt-[72px]">
      <HeroGlow />
      <Container className="relative z-10 flex flex-col items-center py-[clamp(108px,16vh,176px)] text-center">
        <Eyebrow>For infrastructure founders building what comes next</Eyebrow>
        <h1 className="max-w-[16ch] text-[clamp(36px,6vw,68px)] leading-[1.05] font-medium tracking-[-0.025em] text-hi">
          Speed to Scale for AI, Blockchain, and Quantum Founders
        </h1>
        <p className="mt-6 max-w-[64ch] text-[clamp(16px,1.55vw,18px)] leading-[1.65] font-light text-soft">
          DCRBN is a Speed to Scale platform for founders building infrastructure projects in AI, blockchain, and
          quantum. We become a force multiplier by bringing our resources, network, strategic relationships, visibility
          engine, agentic infrastructure, product support, advisory capability, and capital readiness to accelerate
          founder growth.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Cta href={CTA.primary.href}>{CTA.primary.label}</Cta>
          <Cta href={CTA.secondary.href} variant="secondary">
            {CTA.secondary.label}
          </Cta>
        </div>
        <p className="mt-6 max-w-[52ch] text-[14px] text-mute">
          We only work on solutions that inspire us and with founders who have the conviction to build them.
        </p>
      </Container>
    </section>
  );
}

function Mission() {
  return (
    <Section id="mission" className="border-t border-line">
      <Eyebrow>Why We Exist</Eyebrow>
      <div className="grid gap-10 md:grid-cols-[1.15fr_.85fr] md:items-end">
        <h2 className="text-[clamp(28px,4vw,44px)] leading-[1.12] font-medium tracking-[-0.02em] text-hi">
          Backing the Infrastructure Layer of an Abundant Future
        </h2>
        <div className="space-y-4 text-[16.5px] leading-relaxed font-light text-soft">
          <p>
            The next era of innovation will be built on new infrastructure: intelligent systems, decentralized networks,
            secure computation, quantum technologies, and tools that expand what humanity can create.
          </p>
          <p>
            DCRBN exists to be a force multiplier for founders building solutions that can help shape a future of
            abundance.
          </p>
        </div>
      </div>
    </Section>
  );
}

function WhoWeBack() {
  return (
    <Section id="who-we-back" className="bg-ink-sec">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_.9fr] lg:items-end">
        <div>
          <h2 className="text-[clamp(28px,4vw,44px)] leading-[1.12] font-medium tracking-[-0.02em] text-hi">
            We Back Infrastructure Founders With Real Signals
          </h2>
          <p className="mt-5 max-w-[58ch] text-[16.5px] leading-relaxed font-light text-soft">
            We look beyond the idea. We look at the founder, the quality of the human, the vision, the problem being
            solved, the team assembled, and the evidence that the market is starting to respond.
          </p>
          <p className="mt-4 max-w-[58ch] text-[16.5px] leading-relaxed font-light text-soft">
            We are especially drawn to founders building infrastructure across AI, blockchain, and quantum — projects
            that can support new markets, new systems, and new ways for people and organizations to operate.
          </p>
        </div>
        <article className="rounded-2xl border border-line bg-panel p-7">
          <h3 className="text-[13px] font-semibold tracking-[0.14em] text-mute uppercase">Not a fit</h3>
          <p className="mt-3 text-[15px] leading-relaxed text-soft">
            We are not built for founders who simply have a good idea and want someone else to build their vision. We
            work with founders who are already moving and want the right ecosystem around them to go faster.
          </p>
        </article>
      </div>
      <ul className="mt-10 flex flex-wrap gap-2.5">
        {TRACTION_SIGNALS.map((item) => (
          <li
            key={item}
            className="rounded-full border border-line bg-panel px-3.5 py-2 text-[13.5px] text-hi"
          >
            {item}
          </li>
        ))}
      </ul>
    </Section>
  );
}

function Constraints() {
  return (
    <Section id="constraints">
      <h2 className="text-[clamp(28px,4vw,44px)] leading-[1.12] font-medium tracking-[-0.02em] text-hi">
        Great Founders Still Hit Growth Constraints
      </h2>
      <p className="mt-5 max-w-[64ch] text-[16.5px] leading-relaxed font-light text-soft">
        Even strong founders stall when they lack the right visibility, strategy, infrastructure, partnerships,
        customers, paid pilots, capital readiness, or operator support.
      </p>
      <p className="mt-4 max-w-[64ch] text-[16.5px] leading-relaxed font-light text-soft">
        DCRBN brings the resources, relationships, and execution ecosystem that help inspired founders move faster.
      </p>
      <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
        {CONSTRAINTS.map((item) => (
          <div key={item} className="rounded-xl border border-line bg-panel px-4 py-5 text-[15px] text-hi">
            {item}
          </div>
        ))}
      </div>
    </Section>
  );
}

function GrowthCycle() {
  return (
    <Section id="growth-cycle" className="bg-ink-sec">
      <h2 className="text-[clamp(28px,4vw,44px)] leading-[1.12] font-medium tracking-[-0.02em] text-hi">
        The Speed to Scale Growth Cycle
      </h2>
      <p className="mt-5 max-w-[68ch] text-[16.5px] leading-relaxed font-light text-soft">
        DCRBN identifies the real constraint, deploys only the layers required to move it, and coordinates resources,
        relationships, systems, and operators toward the outcomes that can accelerate the company’s next stage.
      </p>
      <p className="mt-4 max-w-[68ch] text-[16.5px] leading-relaxed font-light text-soft">
        DCRBN does not deploy every capability to every company. We identify the bottleneck and activate the right
        growth layers at the right time.
      </p>
      <ol className="mt-10 flex flex-wrap gap-2">
        {GROWTH_LAYERS.map((layer, i) => (
          <li key={layer} className="flex items-center gap-2 text-[14px] text-hi">
            <span className="rounded-full border border-blue-lt/30 bg-blue/10 px-3 py-1.5">{layer}</span>
            {i < GROWTH_LAYERS.length - 1 ? <span className="text-mute">→</span> : null}
          </li>
        ))}
      </ol>
      <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {PHASES.map((phase, i) => (
          <Card key={phase.name} index={`0${i + 1}`} title={phase.name} body={phase.body} />
        ))}
      </div>
    </Section>
  );
}

function Focus() {
  return (
    <Section id="focus-areas">
      <h2 className="text-[clamp(28px,4vw,44px)] leading-[1.12] font-medium tracking-[-0.02em] text-hi">
        Focused on Infrastructure That Can Move the World
      </h2>
      <p className="mt-5 max-w-[60ch] text-[16.5px] leading-relaxed font-light text-soft">
        DCRBN partners with founders building the foundational systems behind the next era of technology.
      </p>
      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {FOCUS_AREAS.map((area) => (
          <Card key={area.title} title={area.title} body={area.body} />
        ))}
      </div>
    </Section>
  );
}

function Advisory() {
  return (
    <Section id="advisory" className="bg-ink-sec">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div className="max-w-[68ch]">
          <h2 className="text-[clamp(28px,4vw,44px)] leading-[1.12] font-medium tracking-[-0.02em] text-hi">
            Advisory & Consulting for Inspired Founders and Companies
          </h2>
          <p className="mt-5 text-[16.5px] leading-relaxed font-light text-soft">
            DCRBN supports founders and companies with strategy, positioning, partnerships, capital readiness, growth
            architecture, and operator support.
          </p>
          <p className="mt-4 text-[16.5px] leading-relaxed font-light text-soft">
            This is not passive advisory. It is applied strategic support designed to help the company identify the
            right constraint, activate the right resources, and move toward the next stage of growth.
          </p>
        </div>
        <Cta href="/advisory" variant="secondary">
          Advisory & Consulting
        </Cta>
      </div>
      <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {ADVISORY_CAPABILITIES.map((item) => (
          <Card key={item.title} title={item.title} body={item.body} />
        ))}
      </div>
    </Section>
  );
}

function Venture() {
  return (
    <Section id="venture-studio">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div className="max-w-[68ch]">
          <h2 className="text-[clamp(28px,4vw,44px)] leading-[1.12] font-medium tracking-[-0.02em] text-hi">
            Venture Studio for Disruptive Companies
          </h2>
          <p className="mt-5 text-[16.5px] leading-relaxed font-light text-soft">
            DCRBN Venture Studio is the build side of the platform. We selectively partner with founders, products, and
            opportunities where DCRBN can help turn proven insight, workflow, technology, or market opportunity into a
            scalable business.
          </p>
          <p className="mt-4 text-[16.5px] leading-relaxed font-light text-soft">We do not just advise. We help build.</p>
        </div>
        <Cta href="/venture-studio" variant="secondary">
          Venture Studio
        </Cta>
      </div>
      <ul className="mt-8 grid gap-2 sm:grid-cols-2">
        {VENTURE_CAPABILITIES.map((item) => (
          <li key={item} className="rounded-xl border border-line bg-panel px-4 py-3 text-[15px] text-hi">
            {item}
          </li>
        ))}
      </ul>
      <h3 className="mt-12 text-[20px] text-hi">DCRBN-controlled companies</h3>
      <div className="mt-5 grid gap-4 md:grid-cols-3">
        {CONTROLLED_COMPANIES.map((company) => (
          <Link key={company.slug} href={company.href} className="no-underline">
            <article className="h-full rounded-2xl border border-line bg-panel p-6 transition hover:border-blue-lt/40">
              <div className="mb-4 flex items-center justify-between gap-3">
                <h4 className="text-[18px] text-hi">{company.name}</h4>
                <StatusChip status={company.approvalStatus} />
              </div>
              <p className="text-[14.5px] leading-relaxed text-soft">{company.oneLiner}</p>
            </article>
          </Link>
        ))}
      </div>
    </Section>
  );
}

function Proof() {
  return (
    <Section id="proof" className="bg-ink-sec">
      <h2 className="text-[clamp(28px,4vw,44px)] leading-[1.12] font-medium tracking-[-0.02em] text-hi">
        Proof Across Companies, Portfolio, and Execution
      </h2>
      <p className="mt-5 max-w-[68ch] text-[16.5px] leading-relaxed font-light text-soft">
        DCRBN’s proof should be organized by what we control, what we support, and what outcomes have been created or
        influenced through the platform.
      </p>
      <div className="mt-10 grid gap-4 lg:grid-cols-3">
        <Card title="DCRBN-Controlled Companies" body="Companies where DCRBN has controlling equity, build responsibility, or company-creation involvement.">
          <ul className="mt-4 space-y-2 text-[14.5px] text-soft">
            {CONTROLLED_COMPANIES.map((c) => (
              <li key={c.slug}>
                <Link href={c.href} className="text-blue-lt no-underline hover:text-hi">
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </Card>
        <Card title="Portfolio / Partner Companies" body="Companies DCRBN helps build, advise, scale, or support, but does not necessarily control.">
          <div className="mt-4">
            <Placeholder>{PLACEHOLDER}</Placeholder>
          </div>
        </Card>
        <Card title="Execution Proof" body="Proof by outcome category. Individual stories publish only with approval.">
          <ul className="mt-4 space-y-1.5 text-[14px] text-soft">
            {EXECUTION_PROOF.map((item) => (
              <li key={item.title}>{item.title}</li>
            ))}
          </ul>
        </Card>
      </div>
      <div className="mt-8">
        <Cta href="/proof" variant="secondary">
          See the proof structure
        </Cta>
      </div>
    </Section>
  );
}

function Network() {
  return (
    <Section id="network">
      <h2 className="text-[clamp(28px,4vw,44px)] leading-[1.12] font-medium tracking-[-0.02em] text-hi">
        A Network Built to Accelerate Inspired Founders
      </h2>
      <p className="mt-5 max-w-[68ch] text-[16.5px] leading-relaxed font-light text-soft">
        Great solutions need great people around them. DCRBN brings together operators, advisors, strategists, creators,
        technologists, investors, and strategic partners who can help founders move faster.
      </p>
      <p className="mt-4 max-w-[68ch] text-[16.5px] leading-relaxed font-light text-soft">
        This network is not a logo wall. It is an active growth asset designed to support visibility, partnerships, paid
        pilots, customer access, capital readiness, and company-building execution.
      </p>
      <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {NETWORK_VALUES.map((item) => (
          <li key={item} className="rounded-xl border border-line bg-panel px-4 py-5 text-[15px] text-hi">
            {item}
          </li>
        ))}
      </ul>
    </Section>
  );
}

function Partners() {
  return (
    <Section id="partners" className="bg-ink-sec">
      <h2 className="text-[clamp(28px,4vw,44px)] leading-[1.12] font-medium tracking-[-0.02em] text-hi">
        For Partners and Investors Aligned With Purpose
      </h2>
      <p className="mt-5 max-w-[68ch] text-[16.5px] leading-relaxed font-light text-soft">
        DCRBN creates access to founders building infrastructure across AI, blockchain, and quantum. For strategic
        partners, advisors, and investors, the platform creates opportunities to align early with companies solving
        meaningful problems and building toward a future of abundance.
      </p>
      <ul className="mt-8 grid gap-3 sm:grid-cols-2">
        {ALIGN_WAYS.map((item) => (
          <li key={item} className="rounded-xl border border-line bg-panel px-4 py-4 text-[15px] text-hi">
            {item}
          </li>
        ))}
      </ul>
      <div className="mt-8">
        <Cta href={CTA.partner.href}>{CTA.partner.label}</Cta>
      </div>
    </Section>
  );
}
