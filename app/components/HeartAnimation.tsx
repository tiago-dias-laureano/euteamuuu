"use client";

import React, { useEffect } from "react";

const HeartAnimation: React.FC = () => {
  useEffect(() => {
    const heartContainer = document.getElementById("heart-container")!;
    const emojis = ["🥰", "❤️"];

    const createHeart = () => {
      const heart = document.createElement("div");
      heart.className = "heart";
      heart.textContent = emojis[Math.floor(Math.random() * emojis.length)];
      heart.style.left = `${Math.random() * 100}vw`;
      heart.style.animationDuration = "2s";
      heart.style.fontSize = `${Math.random() * 3 + 1}rem`;

      heartContainer.appendChild(heart);
      setTimeout(() => heart.remove(), 3000);
    };

    const interval = setInterval(createHeart, 200);
    setTimeout(() => clearInterval(interval), 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      id="heart-container"
      className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-50"
    ></div>
  );
};

export default HeartAnimation;
