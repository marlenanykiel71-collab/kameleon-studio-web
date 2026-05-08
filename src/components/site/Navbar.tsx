import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/logo.png";

export type NavItem = { id: string; label: string };

interface NavbarProps {
  items: NavItem[];
  phone: string;
}

export function Navbar({ items, phone }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-background/85 backdrop-blur border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container-x flex items-center justify-between h-16 md:h-20">
        <button
          onClick={() => go("hero")}
          className="flex items-center gap-2"
          aria-label="KAMELEON — strona główna"
        >
          <img src={logo} alt="Logo Salonu Fryzjerskiego Kameleon" width={40} height={40} className="h-10 w-10 object-contain" />
          <span className="font-display font-bold tracking-widest text-sm md:text-base">KAMELEON</span>
        </button>

        <nav aria-label="Główna nawigacja" className="hidden md:flex items-center gap-7">
          {items.map((it) => (
            <button
              key={it.id}
              onClick={() => go(it.id)}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {it.label}
            </button>
          ))}
        </nav>

        <a href={`tel:${phone.replace(/\s/g, "")}`} className="hidden md:inline-flex btn-cta !py-2 !px-4 text-sm">
          <Phone size={16} /> {phone}
        </a>

        <button
          className="md:hidden p-2 rounded-md border border-border"
          aria-label={open ? "Zamknij menu" : "Otwórz menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <nav aria-label="Mobilna nawigacja" className="container-x py-4 flex flex-col gap-1">
            {items.map((it) => (
              <button
                key={it.id}
                onClick={() => go(it.id)}
                className="text-left py-3 px-2 text-base font-medium hover:text-primary"
              >
                {it.label}
              </button>
            ))}
            <a href={`tel:${phone.replace(/\s/g, "")}`} className="btn-cta mt-3 w-full">
              <Phone size={18} /> {phone}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
