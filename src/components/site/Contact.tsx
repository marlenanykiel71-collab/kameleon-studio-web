import { MapPin, Phone, Mail } from "lucide-react";

interface ContactProps {
  address: string;
  phone: string;
  email: string;
}

export function Contact({ address, phone, email }: ContactProps) {
  const items = [
    { icon: MapPin, label: "Adres", value: address, href: `https://maps.google.com/?q=${encodeURIComponent(address)}` },
    { icon: Phone, label: "Telefon", value: phone, href: `tel:${phone.replace(/\s/g, "")}` },
    { icon: Mail, label: "E-mail", value: email, href: `mailto:${email}` },
  ];

  return (
    <section id="kontakt" className="section bg-card">
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto reveal">
          <span className="eyebrow">Kontakt</span>
          <h2>Zapraszamy do salonu</h2>
          <p className="mt-4 text-muted-foreground">
            Skontaktuj się z nami telefonicznie lub mailowo — z przyjemnością odpowiemy na wszystkie pytania.
          </p>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-3 max-w-4xl mx-auto">
          {items.map((it, i) => (
            <a
              key={it.label}
              href={it.href}
              target={it.label === "Adres" ? "_blank" : undefined}
              rel={it.label === "Adres" ? "noreferrer" : undefined}
              className="reveal group p-6 rounded-md border border-border bg-background hover:border-primary transition-colors text-center"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="mx-auto h-12 w-12 rounded-md bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <it.icon size={22} />
              </div>
              <div className="mt-4 text-xs uppercase tracking-widest text-muted-foreground">{it.label}</div>
              <div className="mt-1 font-display font-semibold">{it.value}</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
