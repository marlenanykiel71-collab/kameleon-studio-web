import { useEffect, useState } from "react";
import { X } from "lucide-react";
import g1 from "@/assets/gal-1.jpg";
import g2 from "@/assets/gal-2.jpg";
import g3 from "@/assets/gal-3.jpg";
import g4 from "@/assets/gal-4.jpg";
import g5 from "@/assets/gal-5.jpg";
import g6 from "@/assets/gal-6.jpg";

const photos = [
  { src: g1, caption: "Klasyczny bob z grzywką", alt: "Stylowe cięcie bob" },
  { src: g2, caption: "Męski fade i pompadour", alt: "Męska stylizacja fade" },
  { src: g3, caption: "Multicolor balayage", alt: "Koloryzacja balayage" },
  { src: g4, caption: "Elegancki kok ślubny", alt: "Upięcie ślubne" },
  { src: g5, caption: "Definicja loków", alt: "Stylizacja loków" },
  { src: g6, caption: "Pastelowy róż", alt: "Pastelowa koloryzacja" },
];

export function Gallery() {
  const [open, setOpen] = useState<number | null>(null);

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") setOpen((i) => (i === null ? null : (i + 1) % photos.length));
      if (e.key === "ArrowLeft") setOpen((i) => (i === null ? null : (i - 1 + photos.length) % photos.length));
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <section id="galeria" className="section bg-card">
      <div className="container-x">
        <div className="max-w-2xl reveal">
          <span className="eyebrow">Galeria</span>
          <h2>Wybrane realizacje naszych stylistów</h2>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {photos.map((p, i) => (
            <figure key={p.src} className="reveal" style={{ transitionDelay: `${i * 60}ms` }}>
              <button
                onClick={() => setOpen(i)}
                className="group relative block w-full overflow-hidden rounded-md border border-border focus-visible:outline-primary"
                aria-label={`Powiększ: ${p.caption}`}
              >
                <img
                  src={p.src}
                  alt={p.alt}
                  width={800}
                  height={800}
                  loading="lazy"
                  className="aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute inset-0 bg-background/0 group-hover:bg-background/30 transition-colors" />
              </button>
              <figcaption className="mt-3 text-sm text-muted-foreground text-center">{p.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>

      {open !== null && (
        <div
          className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
          role="dialog"
          aria-modal="true"
          aria-label="Powiększone zdjęcie"
          onClick={() => setOpen(null)}
        >
          <button
            className="absolute top-5 right-5 p-2 rounded-md border border-border text-foreground hover:text-primary"
            aria-label="Zamknij"
            onClick={() => setOpen(null)}
          >
            <X size={24} />
          </button>
          <figure className="max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={photos[open].src}
              alt={photos[open].alt}
              className="w-full h-auto max-h-[80vh] object-contain rounded-md"
            />
            <figcaption className="text-center mt-4 text-muted-foreground">{photos[open].caption}</figcaption>
          </figure>
        </div>
      )}
    </section>
  );
}
