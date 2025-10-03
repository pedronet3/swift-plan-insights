import { useEffect, useState } from "react";
import { LaptopFrame } from "../LaptopFrame";
import { CheckCircle2, Loader2 } from "lucide-react";

const clauses = [
  "Checking Clause D1.2: Egress width…",
  "Checking Clause C2.6: Fire-resistance…",
  "Checking Clause F4.4: Glazing safety…",
];

export const Scene2Progress = () => {
  const [currentClause, setCurrentClause] = useState(0);
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentClause((prev) => Math.min(prev + 1, clauses.length - 1));
    }, 1200);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setPercentage((prev) => Math.min(prev + 1, 100));
    }, 40);

    return () => clearInterval(timer);
  }, []);

  return (
    <LaptopFrame>
      <div className="w-full h-full flex flex-col items-center justify-center space-y-12 px-8">
        {/* Progress Log - Stacking */}
        <div className="w-full max-w-lg space-y-3">
          {clauses.map((clause, index) => (
            <div
              key={index}
              className={`flex items-center space-x-3 transition-all duration-500 ${
                index <= currentClause ? "opacity-100" : "opacity-0"
              }`}
              style={{ 
                animationDelay: `${index * 0.4}s`,
                animation: index <= currentClause ? "slide-in-stack 0.4s ease-out forwards" : "none"
              }}
            >
              {index < currentClause ? (
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 animate-check-bounce" />
              ) : index === currentClause ? (
                <Loader2 className="w-5 h-5 text-primary flex-shrink-0 animate-spin" />
              ) : (
                <div className="w-5 h-5 flex-shrink-0" />
              )}
              <p className="text-sm font-mono text-foreground">{clause}</p>
            </div>
          ))}
        </div>

        {/* Progress Bar with Gradient Shine */}
        <div className="w-full max-w-lg space-y-3">
          <div className="h-4 bg-secondary rounded-full overflow-hidden shadow-inner">
            <div 
              className="h-full rounded-full relative"
              style={{
                width: `${percentage}%`,
                background: "linear-gradient(90deg, hsl(var(--primary)), hsl(var(--primary) / 0.8), hsl(var(--primary)))",
                backgroundSize: "200% 100%",
                animation: "gradient-shine 2s ease infinite",
                transition: "width 0.1s linear"
              }}
            />
          </div>
          <div className="flex items-center justify-between">
            <p className="text-sm text-muted-foreground">Processing compliance checks...</p>
            <p className="text-sm font-semibold text-primary">{percentage}%</p>
          </div>
        </div>
      </div>
    </LaptopFrame>
  );
};
