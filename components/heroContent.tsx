import { ArrowRight } from "lucide-react";
import Link from "next/link";
const HeroContent = () => {
  return (
    <div>
      <div className="flex max-w-xl flex-col">
        {/* Small Label */}
        <span className="mb-6 text-xs font-medium uppercase tracking-[0.4em] text-zinc-500">
          EST. 2026 • MODERN BESPOKE
        </span>

        {/* Heading */}
        <h1 className="font-bodoni text-6xl font-semibold leading-[0.9] text-foreground xl:text-8xl">
          <span className="block text-5xl xl:text-7xl">Crafted for</span>

          <span className="block my-2">Gentlemen</span>

          <span className="block text-5xl xl:text-7xl">Who Lead</span>
        </h1>

        {/* Description */}
        <p className="mt-8 max-w-md text-lg leading-8 text-zinc-400">
          Tailored garments that blend timeless craftsmanship with contemporary
          elegance for the modern gentleman.
        </p>

        {/* Buttons */}
        <div className="mt-12 flex items-center gap-6">
          <Link
            href="#"
            className="rounded-full border border-secondary-foreground px-8 py-4 text-sm uppercase tracking-[0.15em] text-foreground transition-all duration-300 hover:bg-secondary-foreground hover:text-black"
          >
            Explore Collection
          </Link>

          <Link
            href="#"
            className="group flex items-center gap-2 text-sm uppercase tracking-[0.15em] text-zinc-300 transition-colors hover:text-foreground"
          >
            Our Story
            <ArrowRight
              className="transition-transform duration-300 group-hover:translate-x-1"
              size={15}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
