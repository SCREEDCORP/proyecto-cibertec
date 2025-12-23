import React from "react";
import TopNav from "./TopNav";
import Destacados from "./Destacados";
import CountdownBar from "./Temporizador";

const categoryCards = [
  { title: "Árabe", image: "/img/arabe.jpeg" },
  { title: "Acqua", image: "/img/acqua.jpg" },
  { title: "Diseñador", image: "/img/diseñador.png" },
  { title: "Dolce", image: "/img/dolce.jpg" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      <CountdownBar />

      {/* Navbar */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-neutral-200">
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
          <div className="font-semibold text-xl tracking-tight">
            D U M O N T
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a className="hover:text-black/80" href="#">
              Novedades
            </a>
            <a className="hover:text-black/80" href="#">
              Hombre
            </a>
            <a className="hover:text-black/80" href="#">
              Mujer
            </a>
          </nav>
          <div className="flex items-center gap-3 text-lg">
            <button
              className="p-2 rounded-full hover:bg-neutral-100"
              onClick={() =>
                window.open(
                  "https://web.whatsapp.com/send?phone=51907993160&text=Hola%2C%20me%20gustar%C3%ADa%20comprar.",
                  "_blank"
                )
              }
            >
              🛒
            </button>
          </div>
        </div>
      </header>
      <TopNav />

      {/* Categorías */}
      <section id="categorias" className="py-10">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex items-end justify-between">
            <h2 className="text-2xl font-semibold">Explora por categoría</h2>
            <a href="#" className="text-sm text-neutral-600 hover:text-black">
              Ver todo →
            </a>
          </div>
          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
            {categoryCards.map((c) => (
              <a
                key={c.title}
                href="#"
                className="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={c.image}
                    alt={`Categoría ${c.title}`}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-transparent group-hover:from-black/45 group-hover:via-black/15 transition" />
                </div>
                <div className="absolute inset-0 p-3 flex items-end pointer-events-none">
                  <span className="inline-flex rounded-full bg-white/90 px-3 py-1 text-xs font-medium border border-neutral-200 group-hover:translate-y-[-2px] transition">
                    {c.title}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Destacados */}
      <Destacados />

      {/* Banner */}
      <section className="py-12">
        <div className="mx-auto max-w-6xl px-4">
          <div className="rounded-3xl overflow-hidden border border-neutral-200 bg-gradient-to-r from-neutral-900 to-neutral-700 text-white">
            <div className="px-6 md:px-10 py-10 md:py-14 grid md:grid-cols-2 gap-6 items-center">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-white/70">
                  Exclusivo online
                </p>
                <h3 className="mt-2 text-3xl font-semibold leading-tight">
                  Hasta 40% de descuento en línea Essentials
                </h3>
                <p className="mt-3 text-sm text-white/80">
                  Calidad premium con cortes atemporales. Solo por tiempo
                  limitado.
                </p>
                <div className="mt-6 flex gap-3">
                  <a
                    href="https://web.whatsapp.com/send?phone=51907993160&text=Hola%2C%20me%20gustar%C3%ADa%20comprar."
                    className="rounded-full bg-white text-black px-5 py-3 text-sm font-medium hover:bg-white/90"
                  >
                    Comprar
                  </a>
                  <a
                    href="https://web.whatsapp.com/send?phone=51907993160&text=Hola%2C%20me%20gustar%C3%ADa%20comprar."
                    className="rounded-full border border-white/20 px-5 py-3 text-sm font-medium hover:bg-white/10"
                  >
                    Detalles
                  </a>
                </div>
              </div>
              <div className="aspect-[5/3] md:aspect-auto rounded-2xl bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.2),transparent_60%)] border border-white/10" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-10 grid md:grid-cols-4 gap-8 text-sm">
          <div>
            <div className="font-semibold">d u m o n t</div>
            <p className="mt-3 text-neutral-600">
              Calidad, diseño y transparencia. Ediciones limitadas.
            </p>
          </div>
          <div>
            <p className="font-medium">Ayuda</p>
            <ul className="mt-3 space-y-2 text-neutral-600">
              <li>Envíos</li>
              <li>Cambios y devoluciones</li>
              <li>Guía de tallas</li>
            </ul>
          </div>
          <div>
            <p className="font-medium">Compañía</p>
            <ul className="mt-3 space-y-2 text-neutral-600">
              <li>Nosotros</li>
              <li>Valores</li>
              <li>Trabaja con nosotros</li>
            </ul>
          </div>
          <div>
            <p className="font-medium">Legal</p>
            <ul className="mt-3 space-y-2 text-neutral-600">
              <li>Términos</li>
              <li>Privacidad</li>
              <li>Cookies</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-neutral-200 py-6 text-center text-xs text-neutral-500">
          © {new Date().getFullYear()} dumont. Todos los derechos reservados.
        </div>
      </footer>
    </div>
  );
}
