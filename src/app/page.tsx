'use client';

import { useState, useEffect } from 'react';

const fonts = [
  'font-serif',
  'font-sans',
  'font-mono',
  'font-bold',
  'font-light',
  'font-medium',
];

const colors = [
  'text-red-500',
  'text-blue-500',
  'text-green-500',
  'text-purple-500',
  'text-yellow-500',
  'text-pink-500',
  'text-indigo-500',
  'text-orange-500',
  'text-cyan-500',
  'text-emerald-500',
];

const sizes = [
  'text-6xl',
  'text-7xl',
  'text-8xl',
  'text-9xl',
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % (fonts.length * colors.length * sizes.length));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const fontIndex = currentIndex % fonts.length;
  const colorIndex = Math.floor(currentIndex / fonts.length) % colors.length;
  const sizeIndex = Math.floor(currentIndex / (fonts.length * colors.length)) % sizes.length;

  const currentFont = fonts[fontIndex];
  const currentColor = colors[colorIndex];
  const currentSize = sizes[sizeIndex];

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-black">
      <h1 className={`${currentFont} ${currentColor} ${currentSize} transition-all duration-500`}>
        Zita
      </h1>
    </div>
  );
}