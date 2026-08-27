import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { Placeholder } from "@/components/Placeholder";
import { CtaBand, PageHero, Section } from "@/components/ui";
import { NETWORK_VALUES, PHASES, PLACEHOLDER_BIO, SEO, TEAM } from "@/lib/copy";
import { pageMeta } from "@/lib/seo";
import { CTA, SITE } from "@/lib/site";

export const metadata = pageMeta(SEO.about.title, SEO.about.description, "/about");

export default function AboutPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ]}
      />
      <PageHero
        eyebrow="About"
        title={SEO.about.h1}
        body="DCRBN exists to support solutions that can help shape a future of abundance. We work with founders and companies building meaningful infrastructure across AI, blockchain, quantum, and adjacent frontiers."
        secondary={CTA.secondary}
      />
      <Section id="why">
        <h2 className="text-[clamp(26px,3.4vw,36px)] font-medium text-hi">Why We Exist</h2>
        <p className="mt-5 max-w-[68ch] text-[16.5px] leading-relaxed font-light text-soft">
          We believe inspired founders need more than advice. They need resources, network, strategy, visibility,
          partnerships, capital readiness, and people willing to help execute.
        </p>
        <p className="mt-4 max-w-[68ch] text-[16.5px] leading-relaxed font-light text-soft">{SITE.missionLine}</p>
      </Section>
      <Section id="believe" className="bg-ink-sec">
        <h2 className="text-[clamp(26px,3.4vw,36px)] font-medium text-hi">What We Believe</h2>
        <p className="mt-5 max-w-[68ch] text-[16.5px] leading-relaxed font-light text-soft">{SITE.brandLine}</p>
        <p className="mt-4 max-w-[68ch] text-[16.5px] leading-relaxed font-light text-soft">
          DCRBN is not a collection of services. It is one platform with advisory, consulting, venture studio, capital
          readiness, distribution, and company-building capabilities connected around Speed to Scale.
        </p>
      </Section>
      <Section id="how">
        <h2 className="text-[clamp(26px,3.4vw,36px)] font-medium text-hi">How We Work</h2>
        <p className="mt-5 max-w-[68ch] text-[16.5px] leading-relaxed font-light text-soft">
          DCRBN identifies the real constraint, deploys only the layers required to move it, and coordinates resources,
          relationships, systems, and operators toward the outcomes that can accelerate the company’s next stage.
        </p>
        <ol className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {PHASES.map((phase, i) => (
            <li key={phase.name} className="rounded-2xl border border-line bg-panel p-5">
              <p className="font-mono text-[12px] text-blue-lt">0{i + 1}</p>
              <p className="mt-2 text-[18px] text-hi">{phase.name}</p>
              <p className="mt-2 text-[14.5px] leading-relaxed text-soft">{phase.body}</p>
            </li>
          ))}
        </ol>
      </Section>
      <Section id="people" className="bg-ink-sec">
        <h2 className="text-[clamp(26px,3.4vw,36px)] font-medium text-hi">The People</h2>
        <p className="mt-4 max-w-[62ch] text-[15px] text-mute">
          Approved names only. Titles, bios, and photos publish when supplied.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {TEAM.map((person) => (
            <article key={person.name} className="rounded-2xl border border-line bg-panel p-5">
              <div className="mb-4 aspect-square rounded-xl border border-dashed border-line bg-ink-sec" />
              <h3 className="text-[17px] text-hi">{person.name}</h3>
              <div className="mt-3">
                <Placeholder>{PLACEHOLDER_BIO}</Placeholder>
              </div>
            </article>
          ))}
        </div>
      </Section>
      <Section id="ecosystem">
        <h2 className="text-[clamp(26px,3.4vw,36px)] font-medium text-hi">Our Ecosystem</h2>
        <p className="mt-5 max-w-[68ch] text-[16.5px] leading-relaxed font-light text-soft">
          Great solutions need great people around them. DCRBN brings together operators, advisors, strategists,
          creators, technologists, investors, and strategic partners who can help founders move faster.
        </p>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {NETWORK_VALUES.map((item) => (
            <li key={item} className="rounded-xl border border-line bg-panel px-4 py-4 text-[15px] text-hi">
              {item}
            </li>
          ))}
        </ul>
      </Section>
      <CtaBand
        title="Apply for Speed to Scale"
        body="If you are a founder building in AI, blockchain, or quantum with traction, conviction, and a problem worth solving, DCRBN may be the force multiplier around your next stage of growth."
      />
    </>
  );
}
