import { Reveal } from "./Reveal";
import espresso from "@/assets/hero-espresso.jpg";
import graos from "@/assets/gallery-graos.jpg";
import barista from "@/assets/gallery-barista.jpg";
import latteart from "@/assets/gallery-latteart.jpg";
import metodos from "@/assets/about-preparo.jpg";
import ambiente from "@/assets/ambiente.jpg";
import torrefacao from "@/assets/torrefacao.jpg";
import detalhes from "@/assets/cta-dark.jpg";

/**
 * Para trocar pelas fotos reais da Rudimentar Coffee:
 * substitua os arquivos importados acima (ou os imports) e ajuste `caption`/`alt`.
 * `span` controla a altura do bloco na composição masonry.
 */
const photos = [
  { src: espresso, alt: "Espresso sendo servido no balcão", caption: "Espresso", span: "row-span-6" },
  { src: graos, alt: "Grãos de café torrados em tigela de cerâmica", caption: "Grãos selecionados", span: "row-span-8" },
  { src: barista, alt: "Barista compactando o café no filtro", caption: "Barista", span: "row-span-7" },
  { src: latteart, alt: "Xícara com latte art em formato de folha", caption: "Latte art", span: "row-span-5" },
  { src: metodos, alt: "Café filtrado sendo preparado em coador manual", caption: "Métodos de preparo", span: "row-span-7" },
  { src: ambiente, alt: "Ambiente interno da cafeteria", caption: "Ambiente interno", span: "row-span-5" },
  { src: torrefacao, alt: "Torrador girando os grãos de café", caption: "Torrefação", span: "row-span-6" },
  { src: detalhes, alt: "Xícara de café preto sobre mesa de madeira escura", caption: "Detalhes", span: "row-span-6" },
];

export function Gallery() {
  return (
    <section className="border-t border-border py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Galeria</p>
          <h2 className="mt-5 text-[2.1rem] leading-[1.08] sm:text-5xl">Da torra à xícara.</h2>
        </Reveal>

        <div className="mt-14 grid auto-rows-[26px] grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {photos.map((p, i) => (
            <Reveal
              key={p.caption}
              delay={(i % 4) * 70}
              className={`group relative overflow-hidden rounded-sm ${p.span}`}
            >
              <img
                src={p.src}
                alt={p.alt}
                loading="lazy"
                className="size-full object-cover transition-all duration-700 group-hover:scale-[1.06] group-hover:brightness-[0.72]"
              />
              <span className="absolute inset-x-0 bottom-0 translate-y-2 bg-gradient-to-t from-espresso/80 to-transparent p-4 text-[0.7rem] tracking-[0.18em] text-espresso-foreground uppercase opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                {p.caption}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
