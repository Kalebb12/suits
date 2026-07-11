import HeroBG from "./heroBG";
import Navbar from "./navbar";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-secondary text-secondary-foreground">
      {/* Background Layers */}
      <HeroBG />

      {/* Hero Content */}
      <div className="relative z-10">
        {/* Navbar + Hero */}
        <Navbar />
      </div>
    </section>
  );
};

export default HeroSection;
