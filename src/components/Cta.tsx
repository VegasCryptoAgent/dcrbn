import Link from "next/link";

type Variant = "primary" | "secondary" | "ghost";

export function Cta({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center rounded-[10px] px-5 py-3 text-[14px] font-medium no-underline transition duration-200";
  const styles: Record<Variant, string> = {
    primary:
      "bg-blue-mid text-white shadow-[0_10px_26px_rgba(47,134,255,.32)] hover:-translate-y-px hover:shadow-[0_14px_34px_rgba(47,134,255,.46)]",
    secondary:
      "border border-line bg-transparent text-hi hover:border-blue-lt/50 hover:bg-white/[0.03]",
    ghost: "text-soft hover:text-hi",
  };
  const classNames = `${base} ${styles[variant]} ${className}`;
  if (href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:")) {
    return (
      <a href={href} className={classNames} rel="noreferrer">
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={classNames}>
      {children}
    </Link>
  );
}
