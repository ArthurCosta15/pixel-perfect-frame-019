/**
 * Dados da marca em um só lugar — edite aqui para atualizar todo o site.
 */
export const brand = {
  name: "RUDIMENTAR COFFEE®",
  tagline: "Cafeteria • Torrefação • Cafés Especiais",
  phoneLabel: "(81) 99795-0037",
  whatsapp:
    "https://wa.me/5581997950037?text=" +
    encodeURIComponent(
      "Olá! Conheci a Rudimentar Coffee pelo site e gostaria de saber mais.",
    ),
  instagram: "https://www.instagram.com/rudimentarcoffee/",
  instagramHandle: "@rudimentarcoffee",
  linktree: "https://linktr.ee/rudimentarcoffe",
  maps:
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent(
      "Rudimentar Coffee, R. Vig. Tejo, 34 - Centro, Taquaritinga do Norte - PE, 55790-000",
    ),
  address: {
    street: "R. Vig. Tejo, 34 - Centro",
    city: "Taquaritinga do Norte - PE",
    zip: "CEP 55790-000",
  },
  hours: [
    { days: "Terça a sexta", time: "08:00 — 21:00" },
    { days: "Sábado e domingo", time: "08:00 — 22:00" },
    { days: "Segunda", time: "Fechado" },
  ],
  priceRange: "R$ 20–80",
} as const;

export const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Cafés", href: "#cafes" },
  { label: "Experiência", href: "#experiencia" },
  { label: "Localização", href: "#localizacao" },
  { label: "Contato", href: "#contato" },
] as const;
