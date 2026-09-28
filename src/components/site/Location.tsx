import { MapPin, Clock, Navigation, MessageCircle } from "lucide-react";
import { brand } from "@/lib/brand";
import { Reveal } from "./Reveal";

export function Location() {
  return (
    <section id="localizacao" className="border-t border-border py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <p className="eyebrow">Localização</p>
          <h2 className="mt-5 text-[2.1rem] leading-[1.08] sm:text-5xl">
            Venha tomar um café
            <br />
            com a gente.
          </h2>

          <div className="mt-10 flex items-start gap-4">
            <MapPin className="mt-1 size-5 shrink-0 text-clay" aria-hidden />
            <address className="text-[1.02rem] leading-relaxed text-muted-foreground not-italic">
              {brand.address.street}
              <br />
              {brand.address.city}
              <br />
              {brand.address.zip}
            </address>
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href={brand.maps}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center justify-center gap-2 rounded-sm bg-primary px-7 py-4 text-sm font-medium text-primary-foreground transition-all duration-300 hover:bg-espresso hover:shadow-soft"
            >
              <Navigation className="size-4" aria-hidden />
              Como chegar
            </a>
            <a
              href={brand.whatsapp}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center justify-center gap-2 rounded-sm border border-primary/25 px-7 py-4 text-sm font-medium text-primary transition-all duration-300 hover:bg-secondary"
            >
              <MessageCircle className="size-4" aria-hidden />
              Chamar no WhatsApp
            </a>
          </div>
        </Reveal>

        <Reveal delay={90}>
          <div className="rounded-sm border border-border bg-card p-8 shadow-soft sm:p-10">
            <div className="flex items-center gap-3">
              <Clock className="size-5 text-clay" aria-hidden />
              <h3 className="text-[1.3rem]">Horário de funcionamento</h3>
            </div>
            <dl className="mt-8 divide-y divide-border">
              {brand.hours.map((h) => (
                <div key={h.days} className="flex items-baseline justify-between gap-6 py-4">
                  <dt className="text-sm font-medium">{h.days}</dt>
                  <dd className="font-display text-lg text-muted-foreground">{h.time}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-6 text-xs tracking-wide text-muted-foreground">
              Faixa de preço: {brand.priceRange} por pessoa
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
