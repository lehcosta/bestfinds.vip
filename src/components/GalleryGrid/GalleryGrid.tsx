"use client";

import React, { useState, useEffect } from "react";

function shuffleArray<T>(array: T[]): T[] {
  const newArray = [...array]; // Create a copy of the original array

  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // Generate a random index between 0 and i
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]]; // Swap elements at i and j
  }

  return newArray;
}

export const GalleryGrid = ({ images = [] }: { images: { src: string }[] }) => {
  const [suffledImages, setSuffledImages] = useState(shuffleArray(images));

  useEffect(() => {
    const interval = setInterval(() => {
      setSuffledImages(shuffleArray(images));
    }, 5000);
    return () => {
      clearInterval(interval);
    };
  });
  return (
    <div className="grid grid-cols-3 md:grid-cols-4 gap-2 md:gap-4">
      {suffledImages.slice(0, 12).map((image, index) => (
        <div
          className={`w-28 h-24 bg-green-100 rounded-xl overflow-hidden ${
            index >= 6 ? "hidden md:block" : ""
          }`}
          key={index}
        >
          <img
            src={image.src}
            alt=""
            className="block object-cover w-full h-full"
          />
        </div>
      ))}
    </div>
  );
};
