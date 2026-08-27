export function Placeholder({
  children = "[PLACEHOLDER — CLIENT APPROVAL REQUIRED]",
}: {
  children?: React.ReactNode;
}) {
  return (
    <p className="rounded-xl border border-dashed border-line bg-white/2 px-4 py-3 text-[13px] leading-relaxed text-mute">
      {children}
    </p>
  );
}

export function StatusChip({
  status,
}: {
  status: "Approved" | "Needs verification" | "Placeholder" | "Do not publish yet";
}) {
  const tone =
    status === "Approved"
      ? "border-blue-lt/40 text-blue-lt"
      : status === "Placeholder"
        ? "border-line text-mute"
        : "border-amber-400/30 text-amber-200/80";
  return (
    <span className={`inline-flex rounded-full border px-2.5 py-1 text-[11px] tracking-wide ${tone}`}>
      {status}
    </span>
  );
}
