import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  { q: "Czy konieczna jest wcześniejsza rezerwacja wizyty?", a: "Tak, ze względu na duże zainteresowanie zalecamy umawianie wizyt z wyprzedzeniem — telefonicznie lub osobiście w salonie." },
  { q: "Jakich produktów używacie podczas zabiegów?", a: "Pracujemy wyłącznie na profesjonalnych kosmetykach uznanych marek, dbając o zdrowie i kondycję włosów na każdym etapie." },
  { q: "Czy oferujecie konsultacje przed metamorfozą?", a: "Oczywiście — przed każdą większą zmianą fryzury lub koloryzacją odbywa się bezpłatna konsultacja, podczas której dobieramy idealne rozwiązanie." },
  { q: "Ile trwa profesjonalna koloryzacja?", a: "W zależności od techniki (balayage, ombre, refleksy) i długości włosów zabieg trwa od 2 do 4 godzin." },
  { q: "Czy salon jest przyjazny dzieciom?", a: "Tak, wykonujemy strzyżenia dziecięce w spokojnej atmosferze dostosowanej do najmłodszych klientów." },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <section id="faq" className="section">
      <div className="container-x max-w-3xl">
        <div className="reveal text-center">
          <span className="eyebrow">FAQ</span>
          <h2>Najczęściej zadawane pytania</h2>
        </div>
        <div className="mt-12 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="reveal border border-border rounded-md bg-card overflow-hidden">
                <button
                  className="w-full flex items-center justify-between text-left p-5 gap-4 hover:text-primary transition-colors"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span className="font-display font-semibold">{f.q}</span>
                  <span className="shrink-0 text-primary">{isOpen ? <Minus size={20} /> : <Plus size={20} />}</span>
                </button>
                <div
                  className="grid transition-all duration-300"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-muted-foreground">{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </section>
  );
}
