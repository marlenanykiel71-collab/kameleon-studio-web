import { Phone, ChevronDown } from "lucide-react";
import hero from "@/assets/hero.jpg";

interface HeroProps { phone: string; }

export function Hero({ phone }: HeroProps) {
  return (
    <section id="hero" className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
      <img
        src={hero}
        alt="Wnętrze nowoczesnego salonu fryzjerskiego Kameleon"
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 60% at 50% 40%, rgba(10,10,10,0.55) 0%, rgba(10,10,10,0.85) 60%, rgba(10,10,10,0.95) 100%)",
        }}
      />
      <div className="container-x relative text-center pt-24 pb-20">
        <span className="eyebrow reveal">Salon Fryzjerski</span>
        <h1 className="reveal max-w-4xl mx-auto">
          Odkryj swoją <span className="text-neon">nową wersję</span> w Kameleonie
        </h1>
        <p className="reveal mt-6 max-w-2xl mx-auto text-lg text-muted-foreground">
          Odważne koloryzacje, precyzyjne cięcia i regenerujące zabiegi.
          Stylizacje tworzone z pasją, dopasowane do Twojej osobowości.
        </p>
        <div className="reveal mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href={`tel:${phone.replace(/\s/g, "")}`} className="btn-cta">
            <Phone size={18} /> Zadzwoń teraz
          </a>
          <a href="#oferta" className="btn-ghost">Zobacz ofertę</a>
        </div>
      </div>
      <a
        href="#o-nas"
        aria-label="Przewiń niżej"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-primary animate-bounce"
      >
        <ChevronDown size={28} />
      </a>
    </section>
  );
}
