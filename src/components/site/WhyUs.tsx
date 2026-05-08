import { Sparkles, ShieldCheck, Leaf, Award } from "lucide-react";

const reasons = [
  { icon: Award, title: "Doświadczeni styliści", desc: "Zespół z wieloletnią praktyką, regularnie szkolony w aktualnych trendach." },
  { icon: Sparkles, title: "Indywidualne podejście", desc: "Każda stylizacja jest dopasowana do Twojej osobowości i typu urody." },
  { icon: Leaf, title: "Najwyższa jakość", desc: "Pracujemy wyłącznie na profesjonalnych, sprawdzonych kosmetykach." },
  { icon: ShieldCheck, title: "Komfort i zaufanie", desc: "Atmosfera, w której naprawdę można się zrelaksować i zaufać stylistom." },
];

export function WhyUs() {
  return (
    <section id="dlaczego-my" className="section">
      <div className="container-x">
        <div className="max-w-2xl reveal">
          <span className="eyebrow">Dlaczego my</span>
          <h2>Cztery powody, dla których wracają do nas klienci</h2>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((r, i) => (
            <div
              key={r.title}
              className="reveal p-6 rounded-md border border-border bg-card hover:border-primary/60 transition-colors"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="h-11 w-11 rounded-md bg-primary/10 text-primary flex items-center justify-center">
                <r.icon size={22} />
              </div>
              <h3 className="mt-5 text-lg">{r.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
