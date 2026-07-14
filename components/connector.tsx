type ConnectorProps = {
  direction?: "left" | "right";
  length?: number;
};

export default function Connector({
  direction = "right",
  length = 120,
}: ConnectorProps) {
  return (
    <svg width={length + 10} height="10" className="overflow-visible">
      <defs>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="blur" />

          <feMerge>
            <feMergeNode in="blur" />

            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      {direction === "right" ? (
        <>
          {/* Line */}
          <line
            x1="0"
            y1="5"
            x2={length}
            y2="5"
            stroke="#BFA46F"
            strokeWidth="1.5"
          />

          {/* Dot */}
          <circle
            cx={length}
            cy="5"
            r="3"
            fill="#BFA46F"
            filter="url(#glow)"
            style={{
              transformBox: "fill-box",
              transformOrigin: "center",
            }}
            className="animate-[pulseGold_3s_ease-in-out_infinite]"
          />
        </>
      ) : (
        <>
          <circle
            cx="5"
            cy="5"
            r="3"
            fill="#BFA46F"
            filter="url(#glow)"
            style={{
              transformBox: "fill-box",
              transformOrigin: "center",
            }}
            className="animate-[pulseGold_3s_ease-in-out_infinite]"
          />

          <line
            x1="5"
            y1="5"
            x2={length + 5}
            y2="5"
            stroke="#BFA46F"
            strokeWidth="1.5"
          />
        </>
      )}
    </svg>
  );
}
