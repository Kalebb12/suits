import HeroBG from "./heroBG";

const HerroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-secondary text-secondary-foreground">
      {/* Background Layers */}
      <HeroBG />

      {/* Hero Content */}
      <div className="relative z-10">{/* Navbar + Hero */}</div>
    </section>
  );
};

export default HerroSection;
