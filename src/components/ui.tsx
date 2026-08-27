import { Mark } from "./Mark";
import { Cta } from "./Cta";
import { CTA } from "@/lib/site";

export function Container({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <div id={id} className={`mx-auto w-full max-w-[1080px] px-[clamp(20px,5vw,40px)] ${className}`}>
      {children}
    </div>
  );
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 inline-flex items-center gap-2.5 text-[12px] font-semibold tracking-[0.2em] text-blue-lt uppercase">
      <Mark className="h-2.5 w-2.5" />
      {children}
    </p>
  );
}

export function Section({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`py-[clamp(56px,7vw,96px)] ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}

export function PageHero({
  eyebrow,
  title,
  body,
  primary = CTA.primary,
  secondary,
}: {
  eyebrow?: string;
  title: string;
  body: React.ReactNode;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
}) {
  return (
    <section className="relative overflow-hidden pt-[72px]">
      <HeroGlow />
      <Container className="relative z-10 flex flex-col items-center py-[clamp(88px,14vh,140px)] text-center">
        {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
        <h1 className="max-w-[16ch] text-[clamp(36px,6vw,68px)] leading-[1.05] font-medium tracking-[-0.025em] text-hi">
          {title}
        </h1>
        <div className="mt-6 max-w-[62ch] text-[clamp(16px,1.6vw,18px)] leading-[1.65] font-light text-soft">{body}</div>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Cta href={primary.href}>{primary.label}</Cta>
          {secondary ? (
            <Cta href={secondary.href} variant="secondary">
              {secondary.label}
            </Cta>
          ) : null}
        </div>
      </Container>
    </section>
  );
}

export function HeroGlow() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <span className="glow-orb drift-a top-[-220px] left-[-160px] h-[640px] w-[640px] bg-[radial-gradient(circle,rgba(8,123,255,.5),transparent_68%)] opacity-50" />
      <span className="glow-orb drift-b top-[-40px] right-[-140px] h-[520px] w-[520px] bg-[radial-gradient(circle,rgba(8,123,255,.3),transparent_68%)] opacity-50" />
    </div>
  );
}

export function CtaBand({
  title,
  body,
  closing,
  secondary = true,
}: {
  title: string;
  body: string;
  closing?: string;
  secondary?: boolean;
}) {
  return (
    <section className="border-t border-line bg-lead py-[clamp(72px,8vw,110px)]">
      <Container className="text-center">
        <h2 className="text-[clamp(28px,4vw,44px)] leading-[1.12] font-medium tracking-[-0.02em] text-hi">{title}</h2>
        <p className="mx-auto mt-5 max-w-[62ch] text-[17px] leading-relaxed font-light text-soft">{body}</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Cta href={CTA.primary.href}>{CTA.primary.label}</Cta>
          {secondary ? (
            <Cta href={CTA.partner.href} variant="secondary">
              {CTA.partner.label}
            </Cta>
          ) : null}
        </div>
        {closing ? <p className="mt-6 text-[14px] text-mute">{closing}</p> : null}
      </Container>
    </section>
  );
}

export function Card({
  title,
  body,
  index,
  children,
}: {
  title: string;
  body?: string;
  index?: string;
  children?: React.ReactNode;
}) {
  return (
    <article className="rounded-2xl border border-line bg-panel p-[clamp(22px,2.6vw,30px)] transition duration-300 hover:-translate-y-[3px] hover:border-blue-lt/40 hover:shadow-[0_18px_44px_rgba(0,0,0,.42)]">
      {index ? <p className="mb-3 font-mono text-[12px] tracking-widest text-blue-lt">{index}</p> : null}
      <h3 className="text-[20px] leading-snug font-medium text-hi">{title}</h3>
      {body ? <p className="mt-3 text-[15px] leading-relaxed font-light text-soft">{body}</p> : null}
      {children}
    </article>
  );
}
