import { useEffect, useState } from "react";
import { LaptopFrame } from "../LaptopFrame";

const clauses = [
  "Checking Clause D1.2: Egress width…",
  "Checking Clause C2.6: Fire-resistance…",
  "Checking Clause F4.4: Glazing safety…",
];

export const Scene2Progress = () => {
  const [currentClause, setCurrentClause] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentClause((prev) => (prev + 1) % clauses.length);
    }, 650);

    return () => clearInterval(interval);
  }, []);

  return (
    <LaptopFrame>
      <div className="w-full h-full flex flex-col items-center justify-center space-y-12 px-8">
        {/* Progress Log */}
        <div className="w-full max-w-lg">
          {clauses.map((clause, index) => (
            <div
              key={index}
              className={`text-sm font-mono text-muted-foreground mb-2 transition-opacity duration-300 ${
                index === currentClause ? "opacity-100 animate-fade-in" : "opacity-0"
              }`}
            >
              {clause}
            </div>
          ))}
        </div>

        {/* Progress Bar */}
        <div className="w-full max-w-lg">
          <div className="h-3 bg-secondary rounded-full overflow-hidden">
            <div className="h-full bg-primary rounded-full animate-progress-fill" />
          </div>
          <p className="text-sm text-muted-foreground mt-2 text-center">Processing compliance checks...</p>
        </div>
      </div>
    </LaptopFrame>
  );
};
