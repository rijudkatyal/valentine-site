"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [noScale, setNoScale] = useState(1);
  const [answered, setAnswered] = useState(null);
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.5;
    }
  }, []);

  const moveNoButton = () => {
    const randomX = Math.random() * 200 - 100;
    const randomY = Math.random() * 200 - 100;

    setNoPosition({ x: randomX, y: randomY });

    if (noScale > 0.15) {
      setNoScale(noScale - 0.1);
    }
  };

  const handleYesClick = () => {
    setAnswered("yes");
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-pink-200 overflow-hidden">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-pink-400 text-2xl"
          initial={{ y: "100vh", x: Math.random() * 1000, opacity: 0 }}
          animate={{ y: "-10vh", opacity: [0, 1, 1, 0] }}
          transition={{
            duration: 8 + Math.random() * 5,
            repeat: Infinity,
            delay: Math.random() * 5
          }}
        >
          ❤️
        </motion.div>
      ))}

      <audio
        ref={audioRef}
        src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
        loop
      />

      <div className="bg-white p-10 rounded-3xl shadow-2xl text-center">
        {answered !== "yes" ? (
          <>
            <div className="text-7xl mb-4">💑</div>

            <h1 className="text-3xl font-bold mb-6">
              Will you be my Valentine?
            </h1>

            <div className="flex gap-6 justify-center">
              <button
                className="bg-pink-500 text-white px-8 py-3 rounded-xl text-lg"
                onClick={handleYesClick}
              >
                Yes
              </button>

              <motion.button
                style={{
                  scale: noScale,
                  x: noPosition.x,
                  y: noPosition.y
                }}
                onMouseEnter={moveNoButton}
                onClick={moveNoButton}
                className="border border-pink-400 px-8 py-3 rounded-xl text-lg"
              >
                No
              </motion.button>
            </div>
          </>
        ) : (
          <div>
            <div className="text-7xl mb-4">❤️</div>
            <h2 className="text-3xl font-bold">
              Yay! I love you ❤️
            </h2>
          </div>
        )}
      </div>
    </div>
  );
}