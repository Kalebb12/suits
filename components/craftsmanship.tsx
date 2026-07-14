import Image from "next/image";

export default function Craftsmanship() {
  return (
    <section className="relative overflow-hidden bg-black py-40">
      {/* Background Word */}
      <h2
        className="
          pointer-events-none
          absolute
          left-1/2
          top-10
          -translate-x-1/2
          select-none
          font-bodoni
          text-[14rem]
          font-semibold
          uppercase
          tracking-[0.2em]
          text-white/3
        "
      >
        CRAFT
      </h2>

      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center justify-between gap-24 px-8">
        {/* LEFT */}
        <div className="max-w-xl">
          <p className="mb-5 text-xs uppercase tracking-[0.4em] text-[#C9A96A]">
            Craftsmanship
          </p>

          <h2 className="font-bodoni text-7xl font-semibold leading-[0.9] text-white">
            Precision
            <br />
            in every
            <br />
            stitch.
          </h2>

          <p className="mt-8 max-w-md text-lg leading-8 text-zinc-400">
            Every garment begins with carefully selected fabrics, refined
            tailoring techniques, and meticulous attention to every detail.
          </p>

          <div className="mt-12 space-y-6">
            <Feature title="Italian Merino Wool" />
            <Feature title="Hand Finished Details" />
            <Feature title="Modern Tailoring" />
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative">
          {/* Glow */}
          <div className="absolute inset-0 rounded-[40px] bg-[#C9A96A]/10 blur-3xl" />

          <div className="relative overflow-hidden rounded-[40px] border border-white/10">
            <Image
              src="/images/fabric1.jpg"
              alt="Suit Fabric"
              width={600}
              height={900}
              className="
                h-180
                w-130
                object-cover
                transition-transform
                duration-700
                hover:scale-105
              "
            />
            <div className="absolute bottom-6 right-6 rounded-2xl border border-white/10 bg-black/40 px-5 py-3 backdrop-blur-xl">
              <p className="text-2xl font-semibold text-white">100%</p>
              <p className="text-xs uppercase tracking-[0.3em] text-[#C9A96A]">
                Merino Wool
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Feature({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-5">
      <div className="h-px w-12 bg-[#C9A96A]" />

      <p className="uppercase tracking-[0.25em] text-sm text-zinc-300">
        {title}
      </p>
    </div>
  );
}
