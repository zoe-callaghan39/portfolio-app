// src/components/StarsBackground/StarsBackground.js
import React, { useEffect, useRef } from "react";

const StarsBackground = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    /* tune these to taste */
    const INITIAL_STARS = 600; // first burst
    const NEW_STAR_EVERY = 25; // ms – steady drizzle
    const DIM_RATIO = 0.5; // share of dimmer stars

    /* helper that makes one star */
    const spawnStar = (sprinkle = false) => {
      const el = document.createElement("div");
      el.className = "star"; // class from StarsBackground.css

      /* ─── random parameters ─── */
      const size = Math.random() * 2.9 + 0.8; // 0.8 – 3.7 px
      const x = Math.random() * 100; // %
      const tw = Math.random() * 3 + 2; // 2 – 5 s (twinkle period)
      const fall = Math.random() * 15 + 10; // 10 – 25 s (fall period)
      const isDim = Math.random() < DIM_RATIO; // brightness band

      /* pick a random point *within* the fall animation for the first sprinkle */
      const progress = sprinkle ? Math.random() : 0; // 0–1
      const delay = -progress * fall; // negative => already in flight

      /* inline style bundle */
      Object.assign(el.style, {
        width: `${size}px`,
        height: `${size}px`,
        left: `${x}%`,
        top: `-5px`, // always spawn just above viewport
        animation: `
          ${
            isDim ? "twinkleDim" : "twinkleBright"
          } ${tw}s infinite ease-in-out ${delay}s,
          fall    ${fall}s        linear   forwards       ${delay}s
        `.trim(),
      });

      /* remove node when its fall finishes */
      el.addEventListener("animationend", (e) => {
        if (e.animationName === "fall") el.remove();
      });

      container.appendChild(el);
    };

    /* 1️⃣ initial sprinkle (negative delays push stars down the path) */
    for (let i = 0; i < INITIAL_STARS; i++) spawnStar(true);

    /* 2️⃣ continuous drizzle from the very top */
    const timer = setInterval(() => spawnStar(false), NEW_STAR_EVERY);

    /* cleanup on unmount */
    return () => {
      clearInterval(timer);
      container.innerHTML = "";
    };
  }, []);

  return <div ref={containerRef} className="starsContainer" />;
};

export default StarsBackground;
