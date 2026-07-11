import Link from "next/link";

type NavlinkProps = {
  children: React.ReactNode;
  href: string;
};

const Navlink = ({ children, href }: NavlinkProps) => {
  return (
    <Link
      href={href}
      className="text-primary text-sm group relative hover:text-primary/80"
    >
      {children}
      <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-[#BFA46F] transition-all duration-300 ease-in-out group-hover:w-full"></span>
    </Link>
  );
};

export default Navlink;
