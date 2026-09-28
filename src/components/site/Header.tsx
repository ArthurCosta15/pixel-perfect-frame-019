import { useEffect, useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { brand, navLinks } from "@/lib/brand";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-border/70 bg-background/85 backdrop-blur-md"
          : "border-b border-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-5 sm:h-20 sm:px-8">
        <a
          href="#inicio"
          className="font-display text-[0.95rem] tracking-[0.18em] uppercase sm:text-base"
        >
          Rudimentar<span className="text-clay"> Coffee®</span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative text-[0.8rem] tracking-wide text-muted-foreground transition-colors hover:text-foreground after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-clay after:transition-all after:duration-300 hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={brand.whatsapp}
            target="_blank"
            rel="noreferrer noopener"
            className="hidden items-center gap-2 rounded-sm bg-primary px-5 py-2.5 text-[0.78rem] font-medium tracking-wide text-primary-foreground transition-all duration-300 hover:bg-espresso hover:shadow-soft sm:inline-flex"
          >
            <MessageCircle className="size-4" aria-hidden />
            Fale conosco
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            className="inline-flex size-10 items-center justify-center rounded-sm border border-border text-foreground transition-colors hover:bg-secondary lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-5 py-4 sm:px-8">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-border/60 py-3.5 font-display text-xl"
              >
                {l.label}
              </a>
            ))}
            <a
              href={brand.whatsapp}
              target="_blank"
              rel="noreferrer noopener"
              className="mt-5 inline-flex items-center justify-center gap-2 rounded-sm bg-primary px-5 py-3.5 text-sm font-medium text-primary-foreground"
            >
              <MessageCircle className="size-4" aria-hidden />
              Fale pelo WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
