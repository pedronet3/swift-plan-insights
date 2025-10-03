export const Scene4Transition = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center relative overflow-hidden">
      {/* Radial Wipe Effect */}
      <div className="absolute inset-0 bg-background animate-radial-wipe" />
    </div>
  );
};
