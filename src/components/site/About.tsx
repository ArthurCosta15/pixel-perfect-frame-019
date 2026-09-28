import { Coffee, Flame, Leaf } from "lucide-react";
import { Reveal } from "./Reveal";
import aboutImg from "@/assets/about-preparo.jpg";

const steps = [
  { icon: Leaf, label: "Seleção do grão" },
  { icon: Flame, label: "Torra" },
  { icon: Coffee, label: "Preparo" },
];

export function About() {
  return (
    <section id="sobre" className="bg-background py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <Reveal className="order-2 lg:order-1">
          <div className="relative">
            <img
              src={aboutImg}
              alt="Preparo de café filtrado em coador manual sobre mesa de madeira"
              width={1008}
              height={1312}
              loading="lazy"
              className="w-full rounded-sm object-cover shadow-soft"
            />
            <div
              className="absolute -right-3 -bottom-3 hidden size-28 border border-clay/40 sm:block"
              aria-hidden
            />
          </div>
        </Reveal>

        <Reveal className="order-1 lg:order-2" delay={80}>
          <p className="eyebrow">Sobre a Rudimentar</p>
          <h2 className="mt-5 text-[2.1rem] leading-[1.08] sm:text-5xl">
            Mais que café.
            <br />
            Uma experiência.
          </h2>
          <p className="mt-7 max-w-xl text-[1.02rem] leading-relaxed text-muted-foreground">
            A Rudimentar Coffee® nasceu para transformar o café em experiência. Entre aromas,
            métodos de preparo, grãos selecionados e momentos compartilhados, criamos um espaço para
            quem aprecia café de verdade.
          </p>

          <p className="mt-8 font-display text-lg text-foreground">
            Cafeteria <span className="text-clay">•</span> Torrefação{" "}
            <span className="text-clay">•</span> Cafés Especiais
          </p>

          <ul className="mt-10 flex flex-wrap items-center gap-x-10 gap-y-5 border-t border-border pt-7">
            {steps.map((s, i) => (
              <li key={s.label} className="flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-full border border-border bg-secondary text-clay">
                  <s.icon className="size-4" aria-hidden />
                </span>
                <span className="text-sm text-muted-foreground">
                  <span className="mr-2 font-display text-clay">0{i + 1}</span>
                  {s.label}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
