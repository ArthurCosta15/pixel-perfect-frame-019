import { Coffee, Droplets, Flame, FlaskConical, GlassWater, Instagram, Wheat } from "lucide-react";
import { brand } from "@/lib/brand";
import { Reveal } from "./Reveal";

/** Textos genéricos e editáveis — nenhum produto ou preço específico. */
const items = [
  {
    icon: Coffee,
    title: "Espresso",
    text: "A base de tudo: extração cuidadosa para revelar corpo, doçura e aroma.",
  },
  {
    icon: Droplets,
    title: "Café filtrado",
    text: "Um café limpo e aromático, feito com tempo e atenção em cada etapa.",
  },
  {
    icon: FlaskConical,
    title: "Métodos de Preparo",
    text: "Uma experiência para descobrir novas formas de apreciar o café.",
  },
  {
    icon: GlassWater,
    title: "Bebidas com café",
    text: "Combinações preparadas para quem gosta de explorar novos sabores.",
  },
  {
    icon: Wheat,
    title: "Café Especial",
    text: "Grãos selecionados e preparados para revelar diferentes aromas e sabores.",
  },
  {
    icon: Flame,
    title: "Torrefação",
    text: "Grãos cuidadosamente selecionados e torrados para preservar suas características.",
  },
];

export function CoffeeSection() {
  return (
    <section id="cafes" className="border-y border-border bg-secondary/50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Cafés especiais</p>
          <h2 className="mt-5 text-[2.1rem] leading-[1.08] sm:text-5xl">
            O café é o protagonista.
          </h2>
        </Reveal>

        <ul className="mt-14 grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <Reveal
              as="li"
              key={item.title}
              delay={i * 60}
              className="group bg-background p-8 transition-colors duration-300 hover:bg-card sm:p-10"
            >
              <item.icon
                className="size-6 text-clay transition-transform duration-300 group-hover:-translate-y-0.5"
                aria-hidden
              />
              <h3 className="mt-6 text-[1.4rem]">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
            </Reveal>
          ))}
        </ul>

        <Reveal className="mt-12">
          <a
            href={brand.instagram}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 rounded-sm border border-primary/25 px-7 py-4 text-sm font-medium text-primary transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
          >
            <Instagram className="size-4" aria-hidden />
            Conheça nosso Instagram
          </a>
        </Reveal>
      </div>
    </section>
  );
}
