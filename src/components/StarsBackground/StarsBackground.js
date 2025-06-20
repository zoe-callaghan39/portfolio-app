import React, { useEffect, useRef } from "react";

const StarsBackground = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const INITIAL_STARS = 600;
    const NEW_STAR_EVERY = 25;
    const DIM_RATIO = 0.5;

    const spawnStar = (sprinkle = false) => {
      const el = document.createElement("div");
      el.className = "star";

      const size = Math.random() * 2.9 + 0.8;
      const x = Math.random() * 100;
      const tw = Math.random() * 3 + 2;
      const fall = Math.random() * 15 + 10;
      const isDim = Math.random() < DIM_RATIO;

      const progress = sprinkle ? Math.random() : 0;
      const delay = -progress * fall;

      Object.assign(el.style, {
        width: `${size}px`,
        height: `${size}px`,
        left: `${x}%`,
        top: `-5px`,
        animation: `
          ${
            isDim ? "twinkleDim" : "twinkleBright"
          } ${tw}s infinite ease-in-out ${delay}s,
          fall    ${fall}s        linear   forwards       ${delay}s
        `.trim(),
      });

      el.addEventListener("animationend", (e) => {
        if (e.animationName === "fall") el.remove();
      });

      container.appendChild(el);
    };

    for (let i = 0; i < INITIAL_STARS; i++) spawnStar(true);

    const timer = setInterval(() => spawnStar(false), NEW_STAR_EVERY);

    return () => {
      clearInterval(timer);
      container.innerHTML = "";
    };
  }, []);

  return <div ref={containerRef} className="starsContainer" />;
};

export default StarsBackground;
