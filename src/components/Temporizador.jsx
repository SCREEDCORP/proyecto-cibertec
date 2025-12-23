// src/components/CountdownBar.jsx
import React, { useEffect, useState } from "react";

export default function CountdownBar() {
  const [secondsLeft, setSecondsLeft] = useState(60 * 60);

  useEffect(() => {
    const interval = setInterval(() => {
      setSecondsLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (totalSeconds) => {
    const minutes = String(Math.floor((totalSeconds % 3600) / 60));
    const seconds = String(totalSeconds % 60);
    return `${minutes}:${seconds}`;
  };

  return (
    <div className="w-full bg-black text-white text-xs">
      <div className="mx-auto max-w-6xl px-4 py-2 text-center">
        Envío gratis en pedidos desde S/199 · Oferta Termina en{" "}
        {formatTime(secondsLeft)}
      </div>
    </div>
  );
}
