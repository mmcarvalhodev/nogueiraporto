import { getSiteSettings } from "@/lib/settings";

export default async function TrustBar() {
  const settings = await getSiteSettings();

  const items = [
    { label: settings.trustBar1Label, value: settings.trustBar1Value },
    { label: settings.trustBar2Label, value: settings.trustBar2Value },
    { label: settings.trustBar3Label, value: settings.trustBar3Value },
    { label: settings.trustBar4Label, value: settings.trustBar4Value },
  ].filter((item) => item.value && item.value.trim().length > 0);

  if (items.length === 0) return null;

  return (
    <section
      className="bg-darkest text-light border-t"
      style={{ borderColor: "rgba(201, 169, 97, 0.2)" }}
    >
      <div
        className={`max-w-6xl mx-auto px-6 py-6 grid grid-cols-2 ${
          items.length === 3
            ? "md:grid-cols-3"
            : items.length === 2
              ? "md:grid-cols-2"
              : items.length === 1
                ? "md:grid-cols-1"
                : "md:grid-cols-4"
        } gap-6 text-center`}
      >
        {items.map((item, idx) => (
          <div key={idx}>
            <div className="text-xs uppercase tracking-widest text-accent mb-1">
              {item.label}
            </div>
            <div className="font-serif text-lg">{item.value}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
