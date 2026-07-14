import { ArrowRight } from "lucide-react";
import Image from "next/image";

type Props = {
  category: string;
  title: string;
  description: string;
  image: string;
  glow: string;
  search: string;
};

export default function CollectionCard({
  category,
  title,
  description,
  image,
  glow,
  search,
}: Props) {
  return (
    <div className="relative flex h-[82vh] w-[85vw] shrink-0 overflow-hidden rounded-[40px] border border-white/10 bg-[#090909]">
      {/* Glow */}
      <div
        className="absolute right-0 top-1/2 h-125 w-125 -translate-y-1/2 rounded-full blur-[140px]"
        style={{
          background: glow,
          opacity: 0.18,
        }}
      />

      {/* Left */}
      <div className="z-10 flex w-1/2 flex-col justify-center px-20">
        <p className="text-xs uppercase tracking-[0.45em] text-[#D8C08A]">
          {category}
        </p>

        <h2 className="mt-6 font-bodoni text-7xl leading-[0.9] text-white">
          {title}
        </h2>

        <p className="mt-8 max-w-md text-lg leading-8 text-zinc-400">
          {description}
        </p>

        <button className="mt-12 group w-fit flex gap-3 items-center rounded-full border border-[#D8C08A] px-8 py-4 uppercase tracking-[0.2em] transition hover:bg-[#D8C08A] hover:text-black">
          Explore <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      </div>

      {/* Right */}
      <div className="relative flex w-1/2 items-end justify-center">
        <Image
          src={image}
          alt={search}
          fill
          className="object-cover"
        />

        <div className="absolute bottom-8 right-8 rounded-2xl border border-white/10 bg-black/30 px-6 py-4 backdrop-blur-xl">
          <p className="text-3xl font-semibold text-white">01</p>

          <p className="mt-1 text-xs uppercase tracking-[0.35em] text-[#D8C08A]">
            Collection
          </p>
        </div>
      </div>
    </div>
  );
}