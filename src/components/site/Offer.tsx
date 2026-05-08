import o1 from "@/assets/offer-1.jpg";
import o2 from "@/assets/offer-2.jpg";
import o3 from "@/assets/offer-3.jpg";

const items = [
  { img: o1, title: "Koloryzacje", desc: "Odważne i klasyczne — balayage, ombre, refleksy.", alt: "Kreatywna koloryzacja włosów" },
  { img: o2, title: "Strzyżenia", desc: "Precyzyjne cięcia damskie, męskie i dziecięce.", alt: "Precyzyjne strzyżenie u stylistki" },
  { img: o3, title: "Pielęgnacja", desc: "Regeneracja, keratyna, botoks i nawilżenie.", alt: "Zabieg regeneracji włosów" },
];

export function Offer() {
  return (
    <section id="oferta" className="section bg-card">
      <div className="container-x">
        <div className="max-w-2xl reveal">
          <span className="eyebrow">Oferta</span>
          <h2>Usługi szyte na miarę Twojego stylu</h2>
          <p className="mt-4 text-muted-foreground">
            Od subtelnych poprawek po pełne metamorfozy — łączymy najnowsze trendy
            z indywidualnym podejściem do typu włosów i urody.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <article
              key={it.title}
              className="reveal group relative overflow-hidden rounded-md border border-border bg-background"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={it.img}
                  alt={it.alt}
                  width={800}
                  height={1000}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl">{it.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{it.desc}</p>
              </div>
              <div className="absolute inset-x-0 bottom-0 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
