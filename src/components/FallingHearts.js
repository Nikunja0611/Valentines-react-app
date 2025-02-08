import React, { useEffect } from "react";
import "../components/FallingHearts.css"; // Make sure this file exists

const FallingHearts = () => {
  useEffect(() => {
    const createHeart = () => {
      const heart = document.createElement("div");
      heart.classList.add("heart");
      heart.innerHTML = "❤️"; // Heart emoji instead of a blank div
      heart.style.left = `${Math.random() * 100}vw`; // Random horizontal position
      heart.style.animationDuration = `${Math.random() * 3 + 2}s`; // Random fall speed

      document.body.appendChild(heart);

      setTimeout(() => {
        heart.remove();
      }, 5000);
    };

    const interval = setInterval(createHeart, 400); // Create hearts every 400ms

    return () => clearInterval(interval);
  }, []);

  return null; // No JSX needed, as hearts are dynamically created
};

export default FallingHearts;
