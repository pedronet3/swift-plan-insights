import { CheckCircle2 } from "lucide-react";
import { LaptopFrame } from "../LaptopFrame";
import { Button } from "@/components/ui/button";

export const Scene3Ready = () => {
  return (
    <LaptopFrame>
      <div className="w-full h-full flex flex-col items-center justify-center space-y-8 animate-scale-in">
        {/* Success Banner */}
        <div className="w-full max-w-md bg-primary/10 border-2 border-primary rounded-xl p-8 flex items-center justify-center space-x-4">
          <CheckCircle2 className="w-12 h-12 text-primary" />
          <h2 className="text-2xl font-semibold text-foreground">Compliance Report Ready ✓</h2>
        </div>

        {/* Download Button */}
        <Button 
          size="lg" 
          className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg animate-pulse-glow"
        >
          Download Report
        </Button>
      </div>
    </LaptopFrame>
  );
};
