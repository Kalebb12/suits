import { MenuIcon, SearchIcon, ShoppingBagIcon } from "lucide-react";

const Navbar = () => {
  return (
    <div>
      <header className="absolute top-0 left-0 w-full z-50 bg-secondary/25 backdrop-blur-sm">
        <div className="container mx-auto flex items-center justify-between py-4 px-6">
          <div className="text-2xl font-semibold tracking-[0.18em] text-primary font-bodoni">Suits</div>
          <nav className="space-x-4">
            <a href="#" className="text-primary text-sm group relative hover:text-primary/80">
              Collection
              <span
                className="absolute left-0 -bottom-1 h-0.5 w-0 bg-[#BFA46F] transition-all duration-300 ease-in-out group-hover:w-full"
              ></span>
            </a>
            <a href="#" className="text-primary text-sm group relative hover:text-primary/80">
              Tailoring
              <span
                className="absolute left-0 -bottom-1 h-0.5 w-0 bg-[#BFA46F] transition-all duration-300 ease-in-out group-hover:w-full"
              ></span>
            </a>
            <a href="#" className="text-primary text-sm group relative hover:text-primary/80">
              Journal
              <span
                className="absolute left-0 -bottom-1 h-0.5 w-0 bg-[#BFA46F] transition-all duration-300 ease-in-out group-hover:w-full"
              ></span>
            </a>
            <a href="#" className="text-primary text-sm group relative hover:text-primary/80">
              About
              <span
                className="absolute left-0 -bottom-1 h-0.5 w-0 bg-[#BFA46F] transition-all duration-300 ease-in-out group-hover:w-full"
              ></span>
            </a>
          </nav>
          <div className="flex items-center space-x-4">
            <SearchIcon className="w-5 h-5 text-primary hover:text-primary/80" />
            <ShoppingBagIcon className="w-5 h-5 text-primary hover:text-primary/80 ml-4" />
            <MenuIcon className="w-5 h-5 text-primary hover:text-primary/80 ml-4" />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
