type Props = {
  number: string;
  title: string;
  description: string;
};

export default function ProcessStep({
  number,
  title,
  description,
}: Props) {
  return (
    <div className="group border-t border-white/10 py-12 transition-all duration-500 hover:border-[#D4B26A]/50">

      <div className="grid grid-cols-[120px_1fr] gap-10">

        <div className="relative">

          <span
            className="
              absolute
              -top-8
              left-0
              font-bodoni
              text-8xl
              text-white/4
            "
          >
            {number}
          </span>

          <p className="relative text-lg text-[#D4B26A]">
            {number}
          </p>

        </div>

        <div>

          <h3 className="text-3xl text-white transition-colors duration-300 group-hover:text-[#D4B26A]">
            {title}
          </h3>

          <p className="mt-4 max-w-xl leading-8 text-zinc-400">
            {description}
          </p>

        </div>

      </div>

    </div>
  );
}