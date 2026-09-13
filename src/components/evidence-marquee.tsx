export function EvidenceMarquee({
  label,
  items,
}: {
  label: string;
  items: string[];
}) {
  return (
    <aside className="evidence-marquee" aria-label={label}>
      <div className="evidence-marquee-track">
        {[false, true].map((duplicate) => (
          <ul
            className="evidence-marquee-group"
            aria-hidden={duplicate || undefined}
            key={duplicate ? "duplicate" : "primary"}
          >
            {items.map((item) => (
              <li key={item}>
                <span>{item}</span>
                <i aria-hidden="true">✦</i>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </aside>
  );
}
