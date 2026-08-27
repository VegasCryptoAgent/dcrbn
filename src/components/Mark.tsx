export function Mark({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={`inline-block rotate-45 rounded-[3px] bg-gradient-to-br from-blue-mid to-blue-lt shadow-[0_0_14px_rgba(47,134,255,.6)] ${className}`}
    />
  );
}
