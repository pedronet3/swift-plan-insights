import { ReactNode } from "react";

interface LaptopFrameProps {
  children: ReactNode;
}

export const LaptopFrame = ({ children }: LaptopFrameProps) => {
  return (
    <div className="relative mx-auto w-full max-w-4xl animate-fade-in">
      {/* Laptop Screen */}
      <div className="relative bg-gray-900 rounded-t-2xl border-8 border-gray-800 shadow-2xl">
        {/* Screen Bezel */}
        <div className="bg-white rounded-t-lg overflow-hidden" style={{ aspectRatio: "16/10" }}>
          {/* Screen Content */}
          <div className="w-full h-full flex items-center justify-center p-12">
            {children}
          </div>
        </div>
        
        {/* Camera Notch */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-700 rounded-full" />
      </div>
      
      {/* Laptop Base */}
      <div className="relative h-4 bg-gradient-to-b from-gray-700 to-gray-800 rounded-b-2xl">
        <div className="absolute inset-x-0 top-0 h-1 bg-gray-600 rounded-full mx-auto w-32" />
      </div>
      
      {/* Shadow */}
      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-black/10 rounded-full blur-2xl" />
    </div>
  );
};
