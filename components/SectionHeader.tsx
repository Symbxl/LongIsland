export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "text-center" : ""}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className="mt-3 font-display text-3xl text-ink-50 sm:text-4xl lg:text-5xl text-balance">
        {title}
      </h2>
      {description && (
        <p className={`mt-4 max-w-2xl text-base leading-relaxed text-ink-300 ${align === "center" ? "mx-auto" : ""}`}>
          {description}
        </p>
      )}
      <div className={`mt-5 divider-gold ${align === "center" ? "mx-auto" : ""}`} aria-hidden />
    </div>
  );
}
