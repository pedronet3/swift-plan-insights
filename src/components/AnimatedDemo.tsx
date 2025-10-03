import { useEffect, useState } from "react";
import { Scene1Upload } from "./scenes/Scene1Upload";
import { Scene2Progress } from "./scenes/Scene2Progress";
import { Scene3Ready } from "./scenes/Scene3Ready";
import { Scene4Transition } from "./scenes/Scene4Transition";
import { Scene5BrandReveal } from "./scenes/Scene5BrandReveal";

type Scene = 1 | 2 | 3 | 4 | 5;

export const AnimatedDemo = () => {
  const [currentScene, setCurrentScene] = useState<Scene>(1);

  useEffect(() => {
    const timings = {
      1: 3500,  // Scene 1: 3.5s
      2: 4500,  // Scene 2: 4.5s
      3: 3500,  // Scene 3: 3.5s
      4: 2000,  // Scene 4: 2s
      5: 0,     // Scene 5: stays
    };

    if (currentScene < 5) {
      const timer = setTimeout(() => {
        setCurrentScene((prev) => (prev + 1) as Scene);
      }, timings[currentScene]);

      return () => clearTimeout(timer);
    }
  }, [currentScene]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="w-full max-w-5xl mx-auto px-4">
        {currentScene === 1 && <Scene1Upload />}
        {currentScene === 2 && <Scene2Progress />}
        {currentScene === 3 && <Scene3Ready />}
        {currentScene === 4 && <Scene4Transition />}
        {currentScene === 5 && <Scene5BrandReveal />}
      </div>
    </div>
  );
};
