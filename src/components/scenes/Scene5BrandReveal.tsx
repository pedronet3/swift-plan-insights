import placeAiLogo from "@/assets/place-ai-logo.png";

export const Scene5BrandReveal = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center space-y-8 px-4 relative overflow-hidden">
      {/* Ambient Particles */}
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-primary/20 animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${3 + Math.random() * 2}s`
          }}
        />
      ))}

      {/* Spotlight Gradient */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: "radial-gradient(circle at center, hsl(var(--primary) / 0.2), transparent 60%)"
        }}
      />

      {/* Logo with Float Animation */}
      <div className="relative animate-zoom-in">
        <div className="animate-float">
          <img 
            src={placeAiLogo} 
            alt="Place AI - Compliance reporting automation" 
            className="h-32 w-auto"
          />
        </div>
      </div>

      {/* Tagline - Staggered Entrance */}
      <div className="text-center space-y-4 max-w-2xl relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground animate-blur-in" style={{ animationDelay: "0.5s" }}>
          Compliance reports now made in minutes.
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground font-light animate-blur-in" style={{ animationDelay: "0.8s" }}>
          Faster, more accurate, and cheaper.
        </p>
      </div>

      {/* Brand Name */}
      <div className="animate-blur-in" style={{ animationDelay: "1.1s" }}>
        <h2 className="text-3xl font-bold text-foreground">Place AI</h2>
      </div>
    </div>
  );
};
