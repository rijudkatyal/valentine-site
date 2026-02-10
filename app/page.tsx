"use client";

import { useState } from "react";

export default function Home() {
  const [step, setStep] = useState(1);
  const [noScale, setNoScale] = useState(1);
  const [noX, setNoX] = useState(0);
  const [noY, setNoY] = useState(0);
  const [answered, setAnswered] = useState(false);

  const moveNo = () => {
    setNoX(Math.random() * 200 - 100);
    setNoY(Math.random() * 200 - 100);
    if (noScale > 0.3) setNoScale(noScale - 0.1);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-pink-200">
      <div className="bg-white p-10 rounded-3xl shadow-xl text-center max-w-md">

        {/* STEP 1 */}
        {step === 1 && (
          <>
            <h1 className="text-3xl font-bold mb-6">
              Hey, I wanted to ask you something really important…
            </h1>

            <button
              className="bg-pink-500 text-white px-8 py-3 rounded-xl text-lg"
              onClick={() => setStep(2)}
            >
              Yes, ask
            </button>
          </>
        )}

        {/* STEP 2 */}
        {step === 2 && !answered && (
          <>
            <div className="text-6xl mb-4">💑</div>

            <h1 className="text-3xl font-bold mb-6">
              Will you be my Valentine?
            </h1>

            <div className="flex gap-6 justify-center">
              <button
                className="bg-pink-500 text-white px-8 py-3 rounded-xl"
                onClick={() => setAnswered(true)}
              >
                Yes
              </button>

              <button
                onMouseEnter={moveNo}
                onClick={moveNo}
                style={{
                  transform: `translate(${noX}px, ${noY}px) scale(${noScale})`,
                  transition: "all 0.2s ease"
                }}
                className="border border-pink-400 px-8 py-3 rounded-xl"
              >
                No
              </button>
            </div>
          </>
        )}

        {/* STEP 3 SUCCESS */}
        {answered && (
          <>
            <div className="text-6xl mb-4">❤️</div>
            <h2 className="text-3xl font-bold">
              Yay! I love you ❤️
            </h2>
          </>
        )}

      </div>
    </div>
  );
}