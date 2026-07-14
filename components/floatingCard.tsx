import { Astroid } from "lucide-react";
import Connector from "./connector";

type FloatingCardProps = {
  title: string;
  subtitle: string;
  line?: "left" | "right";
  className?: string;
};

export default function FloatingCard({
  title,
  subtitle,
  line = "right",
  className = "",
}: FloatingCardProps) {
  return (
    <div className={`absolute ${className}`}>
      <div className="flex items-center">
        {line == "left" && <Connector direction={line} />}

        <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-xl shadow-2xl">
          <p className="text-sm font-medium flex items-center gap-2">
            <Astroid className="h-4 w-4 text-[#C9A96A] drop-shadow-[0_0_6px_rgba(201,169,106,0.8)]" />
            <span className="absolute left-2 h-5 w-5 rounded-full bg-[#C9A96A]/30 blur-md animate-[pulseGold_3s_ease-in-out_infinite]" />
            {title}
          </p>

          <p className="mt-1 text-xs text-zinc-400">{subtitle}</p>
        </div>

        {line == "right" && <Connector direction={line} />}
      </div>
    </div>
  );
}
