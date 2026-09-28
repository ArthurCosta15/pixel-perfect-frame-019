import { Coffee, Flame, Heart } from "lucide-react";
import { Reveal } from "./Reveal";
import roastImg from "@/assets/torrefacao.jpg";
import ambienteImg from "@/assets/ambiente.jpg";

const pillars = [
  {
    icon: Coffee,
    title: "Café de verdade",
    text: "Grãos selecionados, preparo cuidadoso e atenção em cada detalhe.",
  },
  {
    icon: Flame,
    title: "Torrefação",
    text: "Uma relação mais próxima com o café, desde o grão até a xícara.",
  },
  {
    icon: Heart,
    title: "Ambiente",
    text: "Um espaço para desacelerar, conversar, trabalhar ou simplesmente apreciar um bom café.",
  },
];

export function Experience() {
  return (
    <section id="experiencia" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Experiência</p>
          <h2 className="mt-5 text-[2.1rem] leading-[1.08] sm:text-5xl">
            Seu momento começa aqui.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-12 lg:gap-14">
          <Reveal className="lg:col-span-7">
            <div className="overflow-hidden rounded-sm">
              <img
                src={ambienteImg}
                alt="Salão da cafeteria com mesas de madeira, plantas e luz natural"
                width={1600}
                height={1104}
                loading="lazy"
                className="h-[280px] w-full object-cover transition-transform duration-700 hover:scale-[1.03] sm:h-[440px] lg:h-[520px]"
              />
            </div>
          </Reveal>

          <div className="lg:col-span-5">
            <ul className="flex flex-col divide-y divide-border">
              {pillars.map((p, i) => (
                <Reveal as="li" key={p.title} delay={i * 90} className="py-7 first:pt-0">
                  <div className="flex items-start gap-5">
                    <span className="mt-0.5 flex size-11 shrink-0 items-center justify-center rounded-full bg-secondary text-clay">
                      <p.icon className="size-5" aria-hidden />
                    </span>
                    <div>
                      <h3 className="text-[1.35rem]">{p.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </ul>

            <Reveal className="mt-4 overflow-hidden rounded-sm">
              <img
                src={roastImg}
                alt="Grãos de café recém-torrados saindo do torrador"
                width={1408}
                height={1008}
                loading="lazy"
                className="h-48 w-full object-cover transition-transform duration-700 hover:scale-[1.03] sm:h-56"
              />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
