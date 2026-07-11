const HeroBG = () => {
  return (
    <div className="absolute inset-0 z-0">
      <div
        className="
        absolute
        right-0
        top-1/2
        h-175
        w-175
        -translate-y-1/2
        rounded-full
        blur-[150px]
        bg-[#BFA46F]/20"
      />
      <div
        className="
        absolute
        left-0
        top-0
        h-125
        w-125
        rounded-full
        blur-[150px]
        bg-white/5
    "
      />
      <div
        className="
        absolute
        inset-0
        bg-linear-to-b
        from-transparent
        via-black/10
        to-black
    "
      />
      <div
        className="
        absolute
        inset-0
        opacity-[0.04]
        mix-blend-soft-light
    "
        style={{
          backgroundImage: "url('/noise.png')",
        }}
      />
      <div
        className="
    absolute
    inset-0
    opacity-[0.35]
    -z-10
    bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)]
    bg-size-[80px_80px]
  "
        style={{
          maskImage:
            "radial-gradient(circle at center, black 40%, transparent 100%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle, transparent 40%, rgba(0,0,0,.65) 100%)",
        }}
      />
    </div>
  );
};

export default HeroBG;
