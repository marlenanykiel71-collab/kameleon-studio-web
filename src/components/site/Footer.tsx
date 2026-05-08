import { useEffect, useState } from "react";
import { Facebook, Instagram, Youtube, X } from "lucide-react";
import logo from "@/assets/logo.png";

interface FooterProps { name: string; }

export function Footer({ name }: FooterProps) {
  const [policyOpen, setPolicyOpen] = useState(false);

  useEffect(() => {
    if (!policyOpen) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setPolicyOpen(false);
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [policyOpen]);

  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background">
      <div className="container-x py-12 grid gap-8 md:grid-cols-3 items-start">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Logo Kameleon" width={40} height={40} className="h-10 w-10 object-contain" />
          <div>
            <div className="font-display font-bold tracking-widest">{name}</div>
            <div className="text-xs text-muted-foreground">Salon Fryzjerski</div>
          </div>
        </div>
        <div className="text-sm text-muted-foreground md:text-center">
          © {year} {name}. Wszystkie prawa zastrzeżone.
          <button
            onClick={() => setPolicyOpen(true)}
            className="block mx-auto md:mt-1 mt-2 text-foreground/80 hover:text-primary underline-offset-4 hover:underline"
          >
            Polityka prywatności
          </button>
        </div>
        <div className="flex md:justify-end gap-3">
          {[
            { Icon: Facebook, href: "https://facebook.com", label: "Facebook" },
            { Icon: Instagram, href: "https://instagram.com", label: "Instagram" },
            { Icon: Youtube, href: "https://youtube.com", label: "YouTube" },
          ].map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="h-10 w-10 inline-flex items-center justify-center rounded-md border border-border hover:border-primary hover:text-primary transition-colors"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>

      {policyOpen && (
        <div
          className="fixed inset-0 z-[100] bg-background/98 backdrop-blur-sm overflow-y-auto animate-fade-in"
          role="dialog"
          aria-modal="true"
          aria-labelledby="policy-title"
        >
          <div className="container-x py-12 max-w-3xl">
            <div className="flex justify-between items-center mb-8">
              <h2 id="policy-title">Polityka prywatności</h2>
              <button
                onClick={() => setPolicyOpen(false)}
                className="p-2 rounded-md border border-border hover:text-primary"
                aria-label="Zamknij"
              >
                <X size={22} />
              </button>
            </div>
            <div className="space-y-5 text-muted-foreground">
              <p>
                Niniejsza Polityka prywatności określa zasady przetwarzania danych osobowych w
                Salonie Fryzjerskim {name}. Twoje dane są dla nas ważne — przetwarzamy je z należytą starannością
                i zgodnie z obowiązującymi przepisami (RODO).
              </p>
              <h3 className="text-foreground">1. Administrator danych</h3>
              <p>Administratorem danych osobowych jest Salon Fryzjerski {name}.</p>
              <h3 className="text-foreground">2. Zakres zbieranych danych</h3>
              <p>Zbieramy dane wyłącznie w zakresie niezbędnym do realizacji wizyt i kontaktu (imię, telefon, e-mail).</p>
              <h3 className="text-foreground">3. Cele przetwarzania</h3>
              <p>Dane są wykorzystywane do umawiania i potwierdzania wizyt oraz do kontaktu w sprawach z nimi związanych.</p>
              <h3 className="text-foreground">4. Pliki cookies</h3>
              <p>Strona może wykorzystywać pliki cookies w celach statystycznych i poprawy działania serwisu.</p>
              <h3 className="text-foreground">5. Twoje prawa</h3>
              <p>Masz prawo dostępu do swoich danych, ich poprawiania, usunięcia oraz wniesienia sprzeciwu wobec przetwarzania.</p>
              <h3 className="text-foreground">6. Kontakt</h3>
              <p>W sprawach związanych z ochroną danych skontaktuj się z nami telefonicznie lub mailowo.</p>
            </div>
            <div className="mt-10 text-center">
              <button onClick={() => setPolicyOpen(false)} className="btn-cta">Zamknij</button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
