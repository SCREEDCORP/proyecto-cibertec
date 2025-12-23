// src/components/Destacados.jsx
import React from "react";

const Productos = [
  { title: "Valentino", price: 179, image: "/img/valentino1.jpg" },
  { title: "Acqua", price: 180, image: "/img/acqua.jpg" },
  { title: "Arabe", price: 181, image: "/img/arabe.jpeg" },
  { title: "Dolce", price: 182, image: "/img/dolce.jpg" },
  { title: "Diseñador", price: 183, image: "/img/diseñador.png" },
  { title: "Valentinos", price: 184, image: "/img/valentino.jpg" },
  { title: "Arabe", price: 185, image: "/img/arabe.jpeg" },
  { title: "Dolce", price: 186, image: "/img/dolce.jpg" },
];

export default function Destacados() {
  return (
    <section id="destacados" className="py-10">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl font-semibold">Destacados</h2>
          <div className="flex items-center gap-2">
            <button className="h-9 w-9 rounded-full border border-neutral-200 hover:bg-neutral-50">
              ←
            </button>
            <button className="h-9 w-9 rounded-full border border-neutral-200 hover:bg-neutral-50">
              →
            </button>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          {Productos.map((product) => (
            <div
              key={product.title}
              className="group rounded-2xl border border-neutral-200 bg-white overflow-hidden"
            >
              <div className="aspect-square bg-neutral-100">
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-3">
                <div className="flex items-start justify-between gap-2">
                  <p className="text-sm font-medium line-clamp-1">
                    {product.title}
                  </p>
                  <span className="text-sm font-semibold">
                    S/{product.price}
                  </span>
                </div>
                <button className="mt-3 w-full rounded-xl border border-neutral-200 py-2 text-sm hover:bg-neutral-50 active:scale-[.99] transition">
                  Añadir al carrito
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
