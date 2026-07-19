import Link from "next/link";

export default function Cta() {
  return (
    <section className="relative overflow-hidden bg-black py-48">
      {/* Background Word */}
      <h2
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          -translate-x-1/2
          -translate-y-1/2
          select-none
          font-bodoni
          text-[14rem]
          uppercase
          tracking-[0.25em]
          text-white/5
        "
      >
        CONFIDENCE
      </h2>

      <div className="relative mx-auto flex max-w-4xl flex-col items-center px-8 text-center">

        <p className="text-xs uppercase tracking-[0.45em] text-[#D4B26A]">
          VELLMONT
        </p>

        <h2 className="mt-8 font-bodoni text-7xl leading-[0.9] text-white">
          Dress
          <br />
          with
          <br />
          Confidence.
        </h2>

        <p className="mt-10 max-w-xl text-lg leading-8 text-zinc-400">
          Crafted for men who appreciate timeless tailoring,
          exceptional materials, and uncompromising attention
          to detail.
        </p>

        <Link
          href="#"
          className="
            mt-14
            rounded-full
            border
            border-[#D4B26A]
            px-10
            py-5
            uppercase
            tracking-[0.25em]
            transition-all
            duration-300
            hover:bg-[#D4B26A]
            hover:text-black
          "
        >
          Book a Consultation
        </Link>

      </div>
    </section>
  );
}