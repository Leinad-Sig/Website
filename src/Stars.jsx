
import React, {useEffect, useMemo, useState} from 'react';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
 
function Star() {
   const [init, setInit] = useState(false);
   useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);
 
  const particlesLoaded = (container) => {
    console.log("Particles Loaded:", container);
  };
 
  const options = useMemo(() => ({
    background: {
      color: "#000000",
    },
    fpsLimit: 40,
    particles: {
      color: { value: ["#f1f1f1","#FFFF00", "#82CAFF"] },
      move: {
        direction: "none",
        enable: true,
        outModes: { default: "bounce" },
        random: false,
        speed: 0.2,
        straight: false,
      },
      number: {
        density: { enable: true, area: 1080 },
        value: 500,
      },
      opacity: {
        value: { min: 0.1, max: 0.5 },
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 0.5, max: 5 },
        random: { enable: true },
      },
    },
    detectRetina: true,
  }), []);
 
  return (
    <div className="App">
     {init && (
        <Particles
          id="tsparticles"
          options={options}
          particlesLoaded={particlesLoaded}
        />
      )}
    </div>
  );
}
 
export default Star;