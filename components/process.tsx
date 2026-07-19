import ProcessStep from "./processStep";

const steps = [
  {
    number: "01",
    title: "Consultation",
    description:
      "Understanding your lifestyle, preferences and the occasion before a single cut is made.",
  },
  {
    number: "02",
    title: "Measurements",
    description:
      "Every measurement is taken with precision to achieve a flawless silhouette.",
  },
  {
    number: "03",
    title: "Craftsmanship",
    description:
      "Our master tailors shape every garment by hand using premium fabrics.",
  },
  {
    number: "04",
    title: "Final Fitting",
    description:
      "The finishing touches ensure every detail feels effortless and refined.",
  },
];

export default function Process() {
  return (
    <section className="relative bg-black py-40">
      <div className="mx-auto max-w-7xl px-8">
        <p className="text-xs uppercase tracking-[0.4em] text-[#D4B26A]">
          The Experience
        </p>

        <h2 className="mt-6 font-bodoni text-7xl leading-[0.9] text-white">
          Tailored to
          <br />
          Perfection.
        </h2>

        <div className="mt-24">
          {steps.map((step) => (
            <ProcessStep key={step.number} {...step} />
          ))}
        </div>
      </div>
      <div className="mx-auto mt-32 max-w-4xl border-t border-white/10 pt-20 text-center">
        <p className="text-xs uppercase tracking-[0.45em] text-[#D4B26A]">
          Our Philosophy
        </p>

        <h2 className="mt-8 font-bodoni text-6xl leading-[0.95] text-white">
          Luxury is never rushed.
        </h2>

        <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-zinc-400">
          Every garment is thoughtfully crafted to be worn with confidence,
          treasured for years, and remembered long after the occasion has
          passed.
        </p>
      </div>
    </section>
  );
}
