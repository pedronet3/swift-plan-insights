import placeAiLogo from "@/assets/place-ai-logo.png";

export const Scene5BrandReveal = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center space-y-8 px-4">
      {/* Logo */}
      <div className="animate-slide-up">
        <img 
          src={placeAiLogo} 
          alt="Place AI" 
          className="h-32 w-auto"
        />
      </div>

      {/* Tagline */}
      <div className="text-center space-y-4 max-w-2xl animate-fade-in" style={{ animationDelay: "0.3s" }}>
        <h1 className="text-4xl md:text-5xl font-bold text-foreground">
          Compliance reports now made in minutes.
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground font-light">
          Faster, more accurate, and cheaper.
        </p>
      </div>

      {/* Brand Name */}
      <div className="animate-fade-in" style={{ animationDelay: "0.6s" }}>
        <h2 className="text-3xl font-bold text-foreground">Place AI</h2>
      </div>
    </div>
  );
};
