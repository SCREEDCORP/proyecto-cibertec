// src/components/Header.jsx
import React, { useEffect, useState } from "react";

const heroImages = [
  "/img/valentino1.jpg",
  "/img/acqua.jpg",
  "/img/arabe.jpeg",
  "/img/dolce.jpg",
  "/img/diseñador.png",
  "/img/sauvage.png",
];

export default function TopNav() {
  const [heroIndices, setHeroIndices] = useState([0, 1]);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroIndices(() => {
        const nextA = Math.floor(Math.random() * heroImages.length);
        let nextB = Math.floor(Math.random() * heroImages.length);
        if (nextB === nextA) {
          nextB = (nextB + 1) % heroImages.length;
        }
        return [nextA, nextB];
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid md:grid-cols-2 gap-8 py-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
              Colección{" "}
              <span className="underline underline-offset-8 decoration-4">
                Otoño 2025
              </span>
            </h1>
            <p className="mt-4 text-neutral-600">
              Prendas esenciales con siluetas modernas y tejidos premium para un
              guardarropa versátil.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="https://web.whatsapp.com/send?phone=51907993160&text=Hola%2C%20me%20gustar%C3%ADa%20comprar."
                className="rounded-full px-5 py-3 bg-black text-white text-sm font-medium shadow-sm hover:shadow"
              >
                Comprar ahora
              </a>
              <a
                href="#categorias"
                className="rounded-full px-5 py-3 bg-white text-sm font-medium border border-neutral-200 hover:bg-neutral-50"
              >
                Ver categorías
              </a>
            </div>
            <div className="mt-8 flex items-center gap-6 text-xs text-neutral-500">
              <span className="inline-flex items-center gap-2">
                <i className="h-2 w-2 rounded-full bg-emerald-500 inline-block" />
                Stock verificado
              </span>
              <span className="inline-flex items-center gap-2">
                <i className="h-2 w-2 rounded-full bg-sky-500 inline-block" />
                Cambios y devoluciones
              </span>
              <span className="inline-flex items-center gap-2">
                <i className="h-2 w-2 rounded-full bg-amber-500 inline-block" />
                12 cuotas sin interés*
              </span>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {heroIndices.map((idx, i) => (
              <div
                key={`${idx}-${i}`}
                className="relative aspect-[3/5] w-full overflow-hidden rounded-3xl shadow-xl border border-neutral-200 bg-neutral-100"
              >
                <img
                  src={heroImages[idx]}
                  alt="img"
                  className="h-full w-full object-cover transition duration-700 ease-in-out"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
