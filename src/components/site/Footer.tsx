import { brand } from "@/lib/brand";

const links = [
  { label: "Instagram", href: brand.instagram },
  { label: "WhatsApp", href: brand.whatsapp },
  { label: "Como chegar", href: brand.maps },
  { label: "Linktree", href: brand.linktree },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <p className="font-display text-base tracking-[0.18em] uppercase">
              Rudimentar<span className="text-clay"> Coffee®</span>
            </p>
            <p className="mt-3 text-sm text-muted-foreground">{brand.tagline}</p>
          </div>

          <div>
            <h3 className="eyebrow">Contato</h3>
            <address className="mt-4 space-y-1 text-sm leading-relaxed text-muted-foreground not-italic">
              <p>
                {brand.address.street}
                <br />
                {brand.address.city}
              </p>
              <p>
                <a href={`tel:+5581997950037`} className="transition-colors hover:text-foreground">
                  {brand.phoneLabel}
                </a>
              </p>
              <p>
                <a
                  href={brand.instagram}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="transition-colors hover:text-foreground"
                >
                  {brand.instagramHandle}
                </a>
              </p>
            </address>
          </div>

          <div>
            <h3 className="eyebrow">Links</h3>
            <ul className="mt-4 space-y-2">
              {links.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-14 border-t border-border pt-7 text-xs tracking-wide text-muted-foreground">
          © 2026 RUDIMENTAR COFFEE®. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
