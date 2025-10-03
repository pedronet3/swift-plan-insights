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
      1: 1500,  // Scene 1: 1.5s
      2: 2000,  // Scene 2: 2s
      3: 2000,  // Scene 3: 2s
      4: 1500,  // Scene 4: 1.5s
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
