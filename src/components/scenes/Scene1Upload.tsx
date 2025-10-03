import { Upload } from "lucide-react";
import { LaptopFrame } from "../LaptopFrame";

export const Scene1Upload = () => {
  return (
    <LaptopFrame>
      <div className="w-full h-full flex flex-col items-center justify-center space-y-8">
        <h2 className="text-3xl font-semibold text-foreground">Upload PDF Plans</h2>
        
        {/* Upload Box */}
        <div className="relative w-full max-w-md h-64 border-2 border-dashed border-border rounded-xl flex flex-col items-center justify-center bg-secondary/30 transition-all">
          <Upload className="w-12 h-12 text-muted-foreground mb-4" />
          <p className="text-muted-foreground text-sm">Drag and drop your PDF here</p>
          
          {/* Animated PDF Icon */}
          <div className="absolute inset-0 flex items-center justify-center animate-slide-up">
            <div className="w-20 h-24 bg-red-500 rounded shadow-lg flex items-center justify-center text-white font-bold text-xs">
              PDF
            </div>
          </div>
        </div>
      </div>
    </LaptopFrame>
  );
};
