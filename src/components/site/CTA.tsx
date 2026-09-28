import { Instagram, MessageCircle } from "lucide-react";
import { brand } from "@/lib/brand";
import { Reveal } from "./Reveal";
import ctaImg from "@/assets/cta-dark.jpg";

export function CTA() {
  return (
    <section id="contato" className="relative isolate overflow-hidden bg-espresso">
      <img
        src={ctaImg}
        alt="Xícara de café preto fumegando sobre mesa de madeira escura"
        width={1904}
        height={1008}
        loading="lazy"
        className="absolute inset-0 size-full object-cover opacity-60"
      />
      <div className="absolute inset-0 bg-espresso/75 sm:bg-gradient-to-r sm:from-espresso/94 sm:via-espresso/75 sm:to-espresso/30" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-5 py-28 sm:px-8 sm:py-36">
        <Reveal className="max-w-xl">
          <p className="eyebrow text-cream/70">Rudimentar Coffee®</p>
          <h2 className="mt-5 text-[2.2rem] leading-[1.06] text-espresso-foreground sm:text-5xl">
            Seu próximo café especial está aqui.
          </h2>
          <p className="mt-6 text-[1.02rem] leading-relaxed text-cream/75">
            Passe na Rudimentar e descubra uma nova forma de apreciar café.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href={brand.whatsapp}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center justify-center gap-2 rounded-sm bg-cream px-7 py-4 text-sm font-medium text-espresso transition-all duration-300 hover:bg-espresso-foreground hover:shadow-lift"
            >
              <MessageCircle className="size-4" aria-hidden />
              Falar no WhatsApp
            </a>
            <a
              href={brand.instagram}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center justify-center gap-2 rounded-sm border border-cream/35 px-7 py-4 text-sm font-medium text-espresso-foreground transition-all duration-300 hover:border-cream hover:bg-cream/10"
            >
              <Instagram className="size-4" aria-hidden />
              Ver Instagram
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
