import { Instagram } from "lucide-react";
import { brand } from "@/lib/brand";
import { Reveal } from "./Reveal";
import latteart from "@/assets/gallery-latteart.jpg";
import graos from "@/assets/gallery-graos.jpg";
import barista from "@/assets/gallery-barista.jpg";
import ambiente from "@/assets/ambiente.jpg";
import espresso from "@/assets/hero-espresso.jpg";
import torrefacao from "@/assets/torrefacao.jpg";

/** Grade pronta para receber as fotos do Instagram — troque os imports pelas reais. */
const feed = [
  { src: latteart, alt: "Publicação: latte art" },
  { src: espresso, alt: "Publicação: espresso" },
  { src: graos, alt: "Publicação: grãos de café" },
  { src: barista, alt: "Publicação: barista preparando café" },
  { src: torrefacao, alt: "Publicação: torrefação" },
  { src: ambiente, alt: "Publicação: ambiente da cafeteria" },
];

export function InstagramSection() {
  return (
    <section className="border-t border-border bg-secondary/50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <p className="eyebrow">Instagram</p>
            <h2 className="mt-5 text-[2.1rem] leading-[1.08] sm:text-5xl">Acompanhe a Rudimentar.</h2>
            <p className="mt-6 max-w-md text-[1.02rem] leading-relaxed text-muted-foreground">
              Novos cafés, experiências, bastidores e tudo o que acontece por aqui.
            </p>

            <div className="mt-8 flex items-center gap-6">
              <p className="font-display text-xl">{brand.instagramHandle}</p>
              <span className="h-4 w-px bg-border" aria-hidden />
              <p className="text-sm text-muted-foreground">7 mil+ seguidores</p>
            </div>

            <a
              href={brand.instagram}
              target="_blank"
              rel="noreferrer noopener"
              className="mt-9 inline-flex items-center gap-2 rounded-sm bg-primary px-7 py-4 text-sm font-medium text-primary-foreground transition-all duration-300 hover:bg-espresso hover:shadow-soft"
            >
              <Instagram className="size-4" aria-hidden />
              Seguir no Instagram
            </a>
          </Reveal>

          <div className="grid grid-cols-3 gap-3 sm:gap-4 lg:col-span-7">
            {feed.map((p, i) => (
              <Reveal key={p.alt} delay={(i % 3) * 70}>
                <a
                  href={brand.instagram}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="group block overflow-hidden rounded-sm"
                >
                  <img
                    src={p.src}
                    alt={p.alt}
                    loading="lazy"
                    className="aspect-square w-full object-cover transition-all duration-700 group-hover:scale-[1.06] group-hover:brightness-[0.75]"
                  />
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
