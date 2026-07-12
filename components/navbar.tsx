import { MenuIcon, SearchIcon, ShoppingBagIcon } from "lucide-react";
import Navlink from "./navlink";

const Navbar = () => {
  return (
    <div>
      <header className="absolute top-0 left-0 w-full z-50 bg-secondary/25 backdrop-blur-sm">
        <div className="container mx-auto flex items-center justify-between py-4 px-6">
          <nav className="space-x-4">
            <Navlink href="#">Collection</Navlink>
            <Navlink href="#">Tailoring</Navlink>
            <Navlink href="#">Journal</Navlink>
            <Navlink href="#">About</Navlink>
          </nav>
          <div className="text-2xl font-semibold tracking-[0.18em] text-primary font-bodoni">
            VELLMONT
          </div>
          <div className="flex items-center space-x-4">
            <SearchIcon className="w-5 h-5 text-primary hover:text-primary/80 cursor-pointer" />
            <ShoppingBagIcon className="w-5 h-5 text-primary hover:text-primary/80 ml-4 cursor-pointer" />
            <MenuIcon className="w-5 h-5 text-primary hover:text-primary/80 ml-4 cursor-pointer" />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
