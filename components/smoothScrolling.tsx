import ReactLenis from "lenis/react";

const SmoothScrolling = ({ children }: { children: React.ReactNode }) => {
  return <ReactLenis root>{children}</ReactLenis>;
};

export default SmoothScrolling;
