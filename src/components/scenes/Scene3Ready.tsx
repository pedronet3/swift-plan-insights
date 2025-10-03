import { CheckCircle2 } from "lucide-react";
import { LaptopFrame } from "../LaptopFrame";
import { Button } from "@/components/ui/button";

export const Scene3Ready = () => {
  return (
    <LaptopFrame>
      <div className="w-full h-full flex flex-col items-center justify-center space-y-8 relative overflow-hidden">
        {/* Confetti Particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 rounded-full animate-confetti"
            style={{
              left: `${Math.random() * 100}%`,
              top: "-20px",
              backgroundColor: i % 3 === 0 ? "hsl(var(--primary))" : i % 3 === 1 ? "hsl(var(--accent))" : "hsl(var(--muted-foreground))",
              animationDelay: `${Math.random() * 0.5}s`,
              animationDuration: `${2 + Math.random()}s`
            }}
          />
        ))}

        {/* Background Celebration Glow */}
        <div 
          className="absolute inset-0 opacity-20 animate-glow-pulse"
          style={{
            background: "radial-gradient(circle at center, hsl(var(--primary) / 0.3), transparent 70%)"
          }}
        />

        {/* Success Banner with Glow Pulse */}
        <div className="relative w-full max-w-md bg-primary/10 border-2 border-primary rounded-xl p-8 flex items-center justify-center space-x-4 animate-glow-pulse">
          <CheckCircle2 className="w-12 h-12 text-primary animate-check-bounce" />
          <h2 className="text-2xl font-semibold text-foreground">Compliance Report Ready ✓</h2>
        </div>

        {/* Download Button with Shimmer */}
        <div className="relative">
          <Button 
            size="lg" 
            className="relative bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg overflow-hidden"
          >
            {/* Shimmer Wave Effect */}
            <div 
              className="absolute inset-0 animate-shimmer"
              style={{
                background: "linear-gradient(90deg, transparent, hsl(var(--primary-foreground) / 0.3), transparent)",
                backgroundSize: "200% 100%"
              }}
            />
            <span className="relative z-10">Download Report</span>
          </Button>
        </div>
      </div>
    </LaptopFrame>
  );
};
