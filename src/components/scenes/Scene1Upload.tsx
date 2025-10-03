import { Upload } from "lucide-react";
import { LaptopFrame } from "../LaptopFrame";

export const Scene1Upload = () => {
  return (
    <LaptopFrame>
      <div className="w-full h-full flex flex-col items-center justify-center space-y-8">
        <h2 className="text-3xl font-semibold text-foreground animate-fade-in">Upload PDF Plans</h2>
        
        {/* Upload Box with Shimmer */}
        <div className="relative w-full max-w-md h-64 border-2 border-dashed border-border rounded-xl flex flex-col items-center justify-center bg-secondary/30 transition-all overflow-hidden">
          {/* Shimmer Effect */}
          <div 
            className="absolute inset-0 animate-shimmer"
            style={{
              background: "linear-gradient(90deg, transparent, hsl(var(--primary) / 0.1), transparent)",
              backgroundSize: "200% 100%"
            }}
          />
          
          <Upload className="w-12 h-12 text-muted-foreground mb-4 relative z-10" />
          <p className="text-muted-foreground text-sm relative z-10">Drag and drop your PDF here</p>
          
          {/* Animated PDF Icon with Bounce */}
          <div className="absolute inset-0 flex items-center justify-center animate-bounce-in" style={{ animationDelay: "0.3s" }}>
            <div className="relative">
              <div className="w-20 h-24 bg-destructive rounded shadow-2xl flex items-center justify-center text-destructive-foreground font-bold text-xs transform transition-all">
                PDF
              </div>
              {/* Growing shadow */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-2 bg-black/20 rounded-full blur-sm animate-scale-in" style={{ animationDelay: "0.5s" }} />
            </div>
          </div>
        </div>
      </div>
    </LaptopFrame>
  );
};
