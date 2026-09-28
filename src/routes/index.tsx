import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { CoffeeSection } from "@/components/site/CoffeeSection";
import { Experience } from "@/components/site/Experience";
import { Gallery } from "@/components/site/Gallery";
import { InstagramSection } from "@/components/site/InstagramSection";
import { Location } from "@/components/site/Location";
import { CTA } from "@/components/site/CTA";
import { Footer } from "@/components/site/Footer";

const title = "Rudimentar Coffee® | Cafeteria, Torrefação e Cafés Especiais";
const description =
  "Rudimentar Coffee® — cafeteria, torrefação e cafés especiais em Taquaritinga do Norte - PE. Venha conhecer nossa experiência e apreciar um café especial.";

const localBusiness = {
  "@context": "https://schema.org",
  "@type": "CafeOrCoffeeShop",
  name: "Rudimentar Coffee®",
  description,
  telephone: "+5581997950037",
  priceRange: "R$20-80",
  address: {
    "@type": "PostalAddress",
    streetAddress: "R. Vig. Tejo, 34 - Centro",
    addressLocality: "Taquaritinga do Norte",
    addressRegion: "PE",
    postalCode: "55790-000",
    addressCountry: "BR",
  },
  sameAs: ["https://www.instagram.com/rudimentarcoffee/", "https://linktr.ee/rudimentarcoffe"],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "21:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday", "Sunday"],
      opens: "08:00",
      closes: "22:00",
    },
  ],
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "pt_BR" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(localBusiness),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <CoffeeSection />
        <Experience />
        <Gallery />
        <InstagramSection />
        <Location />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
