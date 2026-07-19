import Link from "next/link";

const links = [
  { title: "Home", href: "#" },
  { title: "Craftsmanship", href: "#" },
  { title: "Collections", href: "#" },
  { title: "Experience", href: "#" },
];

const socials = [
  { title: "Instagram", href: "#" },
  { title: "Pinterest", href: "#" },
];

export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-black">
      <div className="absolute left-1/2 top-0 size-100 -translate-x-1/2 rounded-full bg-[#D4B26A]/5 blur-[150px]" />
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
          text-[12rem]
          uppercase
          tracking-[0.3em]
          text-white/2
        "
      >
        VELLMONT
      </h2>

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-8 py-24">
        {/* Logo */}
        <h2 className="font-bodoni text-4xl tracking-[0.3em] text-white">
          VELLMONT
        </h2>

        {/* Description */}
        <p className="mt-6 max-w-md text-center text-zinc-400 leading-8">
          Crafting timeless elegance for the modern gentleman.
        </p>

        {/* Navigation */}
        <nav className="mt-14 flex flex-wrap justify-center gap-10">
          {links.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="text-sm uppercase tracking-[0.25em] text-zinc-500 transition-colors hover:text-[#D4B26A]"
            >
              {link.title}
            </Link>
          ))}
        </nav>

        {/* Socials */}
        <div className="mt-10 flex gap-8">
          {socials.map((social) => (
            <Link
              key={social.title}
              href={social.href}
              className="text-sm uppercase tracking-[0.25em] text-zinc-500 transition-colors hover:text-[#D4B26A]"
            >
              {social.title}
            </Link>
          ))}
        </div>

        {/* Divider */}
        <div className="mt-20 h-px w-full bg-white/10" />

        {/* Bottom */}
        <div className="mt-8 flex w-full flex-col items-center justify-between gap-4 text-sm text-zinc-500 md:flex-row">
          <p>© {year} VELLMONT. All rights reserved.</p>

          <p className="uppercase tracking-[0.25em]">Designed with Precision</p>
        </div>
      </div>
    </footer>
  );
}
