import { Coffee, Flame, MapPin, MessageCircle, ArrowDown } from "lucide-react";
import { brand } from "@/lib/brand";
import heroImg from "@/assets/hero-espresso.jpg";

const marks = [
  { icon: Coffee, label: "Cafés especiais" },
  { icon: Flame, label: "Torrefação própria" },
  { icon: MapPin, label: "Taquaritinga do Norte - PE" },
];

export function Hero() {
  return (
    <section id="inicio" className="relative isolate overflow-hidden bg-espresso">
      <img
        src={heroImg}
        alt="Barista servindo um espresso em xícara de cerâmica no balcão da cafeteria"
        width={1600}
        height={1200}
        className="absolute inset-0 size-full object-cover opacity-70"
      />
      <div
        className="absolute inset-0 bg-espresso/70 sm:bg-gradient-to-r sm:from-espresso/92 sm:via-espresso/70 sm:to-espresso/25"
        aria-hidden
      />

      <div className="relative mx-auto flex min-h-[92svh] max-w-7xl flex-col justify-end px-5 pt-32 pb-14 sm:px-8 sm:pb-20 lg:min-h-[88svh]">
        <div className="max-w-2xl animate-rise">
          <p className="eyebrow text-cream/70">{brand.tagline}</p>
          <h1 className="mt-6 text-[2.6rem] leading-[1.02] text-espresso-foreground sm:text-6xl lg:text-7xl">
            Café especial.
            <br />
            <em className="font-normal text-clay not-italic">Experiências que ficam.</em>
          </h1>
          <p className="mt-6 max-w-lg text-[0.95rem] leading-relaxed text-cream/75 sm:text-base">
            <strong className="font-medium text-espresso-foreground">RUDIMENTAR COFFEE®</strong> —
            cafeteria, torrefação e cafés especiais em Taquaritinga do Norte.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#sobre"
              className="inline-flex items-center justify-center gap-2 rounded-sm bg-cream px-7 py-4 text-sm font-medium text-espresso transition-all duration-300 hover:bg-espresso-foreground hover:shadow-lift"
            >
              Conheça a Rudimentar
              <ArrowDown className="size-4" aria-hidden />
            </a>
            <a
              href={brand.whatsapp}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center justify-center gap-2 rounded-sm border border-cream/35 px-7 py-4 text-sm font-medium text-espresso-foreground transition-all duration-300 hover:border-cream hover:bg-cream/10"
            >
              <MessageCircle className="size-4" aria-hidden />
              Fale pelo WhatsApp
            </a>
          </div>

          <ul className="mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t border-cream/15 pt-6">
            {marks.map((m) => (
              <li
                key={m.label}
                className="flex items-center gap-2.5 text-[0.78rem] tracking-wide text-cream/70"
              >
                <m.icon className="size-4 text-clay" aria-hidden />
                {m.label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
