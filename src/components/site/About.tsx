import about from "@/assets/about.jpg";

export function About() {
  return (
    <section id="o-nas" className="section">
      <div className="container-x grid gap-12 md:grid-cols-2 md:gap-16 items-center">
        <div className="reveal relative">
          <div className="absolute -inset-3 -z-10 rounded-md glow-primary opacity-60" />
          <img
            src={about}
            alt="Zespół stylistów salonu Kameleon przy pracy"
            width={1024}
            height={1024}
            loading="lazy"
            className="w-full h-auto rounded-md object-cover aspect-[4/5] md:aspect-square"
          />
        </div>
        <div className="reveal">
          <span className="eyebrow">O nas</span>
          <h2>Pasja do fryzjerstwa, której zaufały setki klientów</h2>
          <div className="mt-6 space-y-4 text-muted-foreground">
            <p>
              <strong className="text-foreground">Salon Fryzjerski Kameleon</strong> to miejsce, w którym
              pasja do fryzjerstwa łączy się z nowoczesnymi trendami i profesjonalną pielęgnacją.
            </p>
            <p>
              Naszą misją jest pomoc w odkrywaniu Twojej nowej wersji — poprzez odważne koloryzacje,
              precyzyjne cięcia i regenerujące zabiegi. Każda wizyta to chwila relaksu i metamorfozy.
            </p>
            <p>
              Pracujemy wyłącznie na produktach najwyższej jakości, dbając o zdrowy blask
              i trwałość każdej stylizacji.
            </p>
          </div>
          <div className="mt-8 grid grid-cols-3 gap-4 max-w-md">
            {[
              { n: "12+", l: "lat doświadczenia" },
              { n: "5k+", l: "klientów rocznie" },
              { n: "100%", l: "naturalnych produktów" },
            ].map((s) => (
              <div key={s.l} className="text-center">
                <div className="font-display text-2xl md:text-3xl font-bold text-neon">{s.n}</div>
                <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
