// src/components/Home.jsx
import React from "react";
import FechaFooter from "./FechaFooter.jsx";

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      {/*}----------------------------------------------------------------------------------------------------------------------------------
       Top bar */}
      <div className="w-full bg-black text-white text-xs">
        <div className="mx-auto max-w-6xl px-4 py-2 text-center">
          Envío gratis en pedidos desde S/199
        </div>
      </div>

      {/* ----------------------------------------------------------------------------------------------------------------------------------
      Navbar */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-neutral-200">
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
          <div className="font-semibold text-xl tracking-tight">
            D A N T E S
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a className="hover:text-black/70" href="#">
              Perfumes
            </a>
            <a className="hover:text-black/70" href="#">
              Contactanos
            </a>
            <a className="hover:text-black/70" href="#">
              Nosotros
            </a>
          </nav>
          <div className="flex items-center gap-3 text-lg">
            <button className="p-2 rounded-full hover:bg-neutral-100">
              🤍
            </button>
            <button className="p-2 rounded-full hover:bg-neutral-100">
              🛒
            </button>
          </div>
        </div>
      </header>

      {/*---------------------------------------------------------------------------------------------------------------------------------- 
      Hero */}
      <section className="relative">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid md:grid-cols-2 gap-8 py-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
                Colección de{" "}
                <span className="underline underline-offset-8 decoration-4">
                  Primavera 2025
                </span>
              </h1>
              <p className="mt-4 text-neutral-600">
                Perfumes esenciales con aromas Frutales y Calidos para el dia a
                dia del Caballero o Dama.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="#destacados"
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
            <div>
              <div className="aspect-[6/5] w-full rounded-3xl overflow-hidden shadow-xl bg-gradient-to-br from-neutral-200 via-neutral-100 to-white relative">
                <div className="absolute inset-0 grid grid-cols-2">
                  <img
                    src="/img/valentino1.jpg"
                    alt="Khamrah Qahwa"
                    className="w-full h-full object-cover"
                  />
                  <img
                    src="/perfume-2.jpg"
                    alt="Notas de café especiado y dulce"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[11px] text-neutral-600">
                  <span>khamrah qahwa</span>
                  <span> Notas de café especiado y dulce</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*----------------------------------------------------------------------------------------------------------------------------------
       Categorías */}
      <section id="categorias" className="py-10">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex items-end justify-between">
            <h2 className="text-2xl font-semibold">Explora por categorías</h2>
            <a href="#" className="text-sm text-neutral-600 hover:text-black">
              Ver todo →
            </a>
          </div>
          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { title: "Arabe", bg: "from-stone-200 to-stone-100" },
              { title: "Diseñador", bg: "from-zinc-200 to-zinc-100" },
              { title: "Nicho", bg: "from-neutral-200 to-neutral-100" },
            ].map((c) => (
              <a
                key={c.title}
                href="#"
                className="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white"
              >
                <div className={`aspect-[4/3] bg-gradient-to-br ${c.bg}`} />
                <div className="absolute inset-0 p-3 flex items-end">
                  <span className="inline-flex rounded-full bg-white/90 px-3 py-1 text-xs font-medium border border-neutral-200 group-hover:translate-y-[-2px] transition">
                    {c.title}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------------------------------------------------------------------------------
      Destacados*/}
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
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="group rounded-2xl border border-neutral-200 bg-white overflow-hidden"
              >
                <div className="aspect-square bg-gradient-to-br from-neutral-200 to-white" />
                <div className="p-3">
                  <div className="flex items-start justify-between gap-2">
                    <p className="text-sm font-medium line-clamp-1">
                      Producto {i + 1}
                    </p>
                    <span className="text-sm font-semibold">
                      S/{(179 + i).toFixed(0)}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-neutral-500">Amaderado · </p>
                  <div className="mt-3 flex items-center gap-2">
                    <div className="flex items-center">
                      {Array.from({ length: 5 }).map((_, s) => (
                        <span
                          key={s}
                          className={`h-3 w-3 ${
                            s < 4 ? "opacity-100" : "opacity-30"
                          }`}
                        >
                          ⭐
                        </span>
                      ))}
                    </div>
                    <span className="text-xs text-neutral-500">(128)</span>
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

      {/* ----------------------------------------------------------------------------------------------------------------------------------
      Banner */}
      <section className="py-12">
        <div className="mx-auto max-w-6xl px-4">
          <div className="rounded-3xl overflow-hidden border border-neutral-200 bg-gradient-to-r from-neutral-900 to-neutral-700 text-white">
            <div className="px-6 md:px-10 py-10 md:py-14 grid md:grid-cols-2 gap-6 items-center">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-white/70">
                  Exclusivo online
                </p>
                <h3 className="mt-2 text-3xl font-semibold leading-tight">
                  Hasta 40% de descuento en por Compras de 3 perfumes
                </h3>
                <p className="mt-3 text-sm text-white/80">
                  100% Originales Arabes , Diseñador y Nicho. Solo por tiempo
                  limitado.
                </p>
                <div className="mt-6 flex gap-3">
                  <a
                    href="#"
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

      {/*-----------------------------------------------------------------------------------------------------------------------------------
       Newsletter 
      <section className="py-10">
        <div className="mx-auto max-w-6xl px-4">
          <div className="rounded-3xl border border-neutral-200 bg-white p-6 md:p-10">
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <div>
                <h3 className="text-2xl font-semibold">Únete a la lista</h3>
                <p className="mt-2 text-sm text-neutral-600">Accede a lanzamientos exclusivos y ofertas.</p>
              </div>
              <form className="flex flex-col sm:flex-row gap-3">
                <input className="flex-1 rounded-xl border border-neutral-300 px-4 py-3 outline-none focus:ring-2 focus:ring-black/10" placeholder="tu@email.com" />
                <button className="rounded-xl bg-black text-white px-5 py-3 text-sm font-medium hover:shadow active:scale-[.99]">Suscribirme</button>
              </form>
            </div>
          </div>
        </div>
      </section>
      */}
      {/*----------------------------------------------------------------------------------------------------------------------------------
       Footer */}
      <footer className="border-t border-neutral-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-10 grid md:grid-cols-4 gap-8 text-sm">
          <div>
            <div className="font-semibold">D A N T E S</div>
            <p className="mt-3 text-neutral-600">
              Calidad, diseño y transparencia. Ediciones limitadas.
            </p>
          </div>
          <div>
            <p className="font-medium">Ayuda</p>
            <ul className="mt-3 space-y-2 text-neutral-600">
              <li>Envíos</li>
              <li>Cambios y devoluciones</li>
            </ul>
          </div>
          <div>
            <p className="font-medium">Compañía</p>
            <ul className="mt-3 space-y-2 text-neutral-600">
              <li>Historia</li>
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
          © <FechaFooter /> D A N T E S. Todos los derechos reservados.
        </div>
      </footer>
    </div>
  );
}
