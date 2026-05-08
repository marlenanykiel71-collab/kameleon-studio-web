import { createFileRoute } from "@tanstack/react-router";
import { Navbar, type NavItem } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Offer } from "@/components/site/Offer";
import { WhyUs } from "@/components/site/WhyUs";
import { Gallery } from "@/components/site/Gallery";
import { FAQ } from "@/components/site/FAQ";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { useReveal } from "@/components/site/useReveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "KAMELEON — Salon Fryzjerski | Strzyżenia, koloryzacje, pielęgnacja" },
      {
        name: "description",
        content:
          "Salon Fryzjerski Kameleon — odważne koloryzacje, precyzyjne strzyżenia i regenerujące zabiegi. Doświadczeni styliści i najwyższej jakości produkty. Zadzwoń i umów wizytę.",
      },
      { property: "og:title", content: "KAMELEON — Salon Fryzjerski" },
      {
        property: "og:description",
        content:
          "Odkryj swoją nową wersję — koloryzacje, strzyżenia i pielęgnacja w nowoczesnym salonie Kameleon.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "theme-color", content: "#0A0A0A" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
    ],
  }),
  component: Index,
});

// Modular: remove any item from this array to drop it from nav AND content.
const SECTIONS: (NavItem & { Component: () => JSX.Element })[] = [
  { id: "o-nas", label: "O nas", Component: About },
  { id: "oferta", label: "Oferta", Component: Offer },
  { id: "dlaczego-my", label: "Dlaczego my", Component: WhyUs },
  { id: "galeria", label: "Galeria", Component: Gallery },
  { id: "faq", label: "FAQ", Component: FAQ },
  { id: "kontakt", label: "Kontakt", Component: () => <Contact address={COMPANY.address} phone={COMPANY.phone} email={COMPANY.email} /> },
];

const COMPANY = {
  name: "KAMELEON",
  phone: "+48 600 123 456",
  email: "kontakt@kameleon-salon.pl",
  address: "ul. Fryzjerska 12, 00-001 Warszawa",
};

function Index() {
  useReveal();

  const navItems: NavItem[] = SECTIONS.map(({ id, label }) => ({ id, label }));

  const localBusinessLd = {
    "@context": "https://schema.org",
    "@type": "HairSalon",
    name: COMPANY.name,
    image: "/og.jpg",
    telephone: COMPANY.phone,
    email: COMPANY.email,
    address: { "@type": "PostalAddress", streetAddress: COMPANY.address },
    priceRange: "$$",
  };

  return (
    <>
      <Navbar items={navItems} phone={COMPANY.phone} />
      <main>
        <Hero phone={COMPANY.phone} />
        {SECTIONS.map(({ id, Component }) => (
          <Component key={id} />
        ))}
      </main>
      <Footer name={COMPANY.name} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessLd) }}
      />
    </>
  );
}
