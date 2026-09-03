import { createFileRoute } from "@tanstack/react-router";
import {
  Beaker,
  ClipboardCheck,
  Container,
  Droplets,
  Filter,
  Wrench,
  MessageCircle,
  MapPin,
  Clock,
  Phone,
  ArrowRight,
  Quote,
  Handshake,
  Timer,
  Navigation,
  type LucideIcon,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Header, Logo } from "@/components/lubrimax/Header";
import { FloatingWhatsApp } from "@/components/lubrimax/FloatingWhatsApp";
import { PhotoPlaceholder } from "@/components/lubrimax/PhotoPlaceholder";
import { AVALIACOES, CONTATO, FAQ, NAV, SERVICOS, whatsappHref } from "@/lib/lubrimax";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "LUBRIMAX | Troca de Óleo e Lubrificantes em Goianira-GO" },
      {
        name: "description",
        content:
          "Troca de óleo, lubrificantes e cuidados automotivos em Goianira-GO. Conheça a LUBRIMAX e consulte atendimento pelo WhatsApp.",
      },
      {
        property: "og:title",
        content: "LUBRIMAX | Troca de Óleo e Lubrificantes em Goianira-GO",
      },
      {
        property: "og:description",
        content:
          "Troca de óleo, lubrificantes e cuidados automotivos em Goianira-GO. Consulte o atendimento pelo WhatsApp.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AutoRepair",
          name: "LUBRIMAX",
          description:
            "Troca de óleo, lubrificantes e cuidados automotivos em Goianira-GO.",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Goianira",
            addressRegion: "GO",
            addressCountry: "BR",
          },
        }),
      },
    ],
  }),
  component: LandingPage,
});

const ICONES: Record<string, LucideIcon> = {
  Droplets,
  Filter,
  Container,
  Beaker,
  ClipboardCheck,
  Wrench,
};

function WhatsAppButton({
  children,
  variant = "brand",
  size = "md",
}: {
  children: React.ReactNode;
  variant?: "brand" | "dark" | "outline";
  size?: "md" | "lg";
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand";
  const variants = {
    brand: "bg-brand text-brand-foreground",
    dark: "bg-graphite text-graphite-foreground",
    outline: "border border-border bg-transparent text-foreground hover:bg-secondary",
  } as const;
  const sizes = {
    md: "px-5 py-3 text-sm",
    lg: "px-7 py-4 text-base",
  } as const;

  return (
    <a
      href={whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${variants[variant]} ${sizes[size]}`}
    >
      <MessageCircle className={size === "lg" ? "size-5" : "size-4"} />
      {children}
    </a>
  );
}

function SectionHeading({
  eyebrow,
  title,
  subtitle,
  invert = false,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  invert?: boolean;
}) {
  return (
    <div className="max-w-2xl">
      {eyebrow ? (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-brand">
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`text-3xl font-extrabold leading-tight sm:text-4xl ${invert ? "text-graphite-foreground" : "text-foreground"}`}
      >
        {title}
      </h2>
      {subtitle ? (
        <p
          className={`mt-4 text-base leading-relaxed ${invert ? "text-graphite-foreground/70" : "text-muted-foreground"}`}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

function LandingPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <Header />
      <FloatingWhatsApp />

      <main className="pt-16 lg:pt-[4.5rem]">
        {/* HERO */}
        <section id="inicio" className="relative bg-graphite text-graphite-foreground">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                "repeating-linear-gradient(90deg, transparent 0 46px, #fff 46px 47px)",
            }}
          />
          <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
              <span className="inline-flex items-center gap-2 rounded-full border border-brand/40 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-brand">
                <Droplets className="size-3.5" />
                Troca de óleo e lubrificantes em Goianira
              </span>
              <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-[3.5rem]">
                Seu carro merece o óleo certo e um serviço bem feito.
              </h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-graphite-foreground/70 sm:text-lg">
                Troca de óleo, filtros e cuidados essenciais para manter seu veículo rodando
                com segurança e bom desempenho.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <WhatsAppButton size="lg">Consultar pelo WhatsApp</WhatsAppButton>
                <a
                  href="#servicos"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 px-7 py-4 text-base font-semibold text-graphite-foreground transition-colors hover:border-brand hover:text-brand"
                >
                  Conhecer os serviços
                  <ArrowRight className="size-4" />
                </a>
              </div>
              <p className="mt-5 flex items-center gap-2 text-sm text-graphite-foreground/60">
                <MapPin className="size-4 text-brand" />
                Atendimento em Goianira-GO
              </p>
            </div>

            <div className="animate-in fade-in duration-1000">
              <PhotoPlaceholder
                label="[FOTO PRINCIPAL REAL DA LUBRIMAX]"
                hint="Espaço reservado para a foto principal real (proporção 4:3)."
                className="aspect-[4/3] w-full border-white/10 bg-white/5 text-graphite-foreground"
              />
            </div>
          </div>
        </section>

        {/* SERVIÇOS */}
        <section id="servicos" className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
          <SectionHeading
            eyebrow="Serviços"
            title="Cuidados essenciais para o seu veículo."
            subtitle="Serviços e produtos para facilitar a manutenção e ajudar você a cuidar melhor do carro."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICOS.map((servico) => {
              const Icone = ICONES[servico.icone] ?? Wrench;
              return (
                <article
                  key={servico.nome}
                  className="group rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand/60"
                >
                  <span className="inline-flex size-11 items-center justify-center rounded-xl bg-secondary text-foreground transition-colors duration-300 group-hover:bg-brand group-hover:text-brand-foreground">
                    <Icone className="size-5" />
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-card-foreground">{servico.nome}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {servico.descricao}
                  </p>
                </article>
              );
            })}
          </div>
        </section>

        {/* CONFIANÇA */}
        <section className="bg-secondary">
          <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
            <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
              <SectionHeading
                eyebrow="Confiança"
                title="Na hora de cuidar do carro, cada detalhe importa."
                subtitle="Escolher corretamente o óleo, os filtros e os itens de manutenção faz parte dos cuidados com o veículo — e é isso que orienta o atendimento da LUBRIMAX."
              />
              <div className="grid gap-4">
                {[
                  {
                    Icone: Handshake,
                    titulo: "Atendimento próximo",
                    texto: "Orientação clara para o cliente entender o serviço necessário.",
                  },
                  {
                    Icone: Timer,
                    titulo: "Praticidade",
                    texto: "Atendimento pensado para tornar a manutenção mais simples.",
                  },
                  {
                    Icone: Navigation,
                    titulo: "Em Goianira",
                    texto:
                      "Uma opção local para quem quer cuidar do veículo sem complicação.",
                  },
                ].map(({ Icone, titulo, texto }) => (
                  <div
                    key={titulo}
                    className="flex gap-4 rounded-2xl border border-border bg-card p-5"
                  >
                    <span className="mt-0.5 inline-flex size-10 shrink-0 items-center justify-center rounded-lg bg-brand/15 text-foreground">
                      <Icone className="size-5" />
                    </span>
                    <div>
                      <h3 className="text-base font-bold text-card-foreground">{titulo}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        {texto}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* COMO FUNCIONA */}
        <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
          <SectionHeading eyebrow="Como funciona" title="Simples para cuidar do seu carro." />
          <ol className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              {
                passo: "01",
                titulo: "Fale com a LUBRIMAX",
                texto: "Entre em contato pelo WhatsApp.",
              },
              {
                passo: "02",
                titulo: "Informe seu veículo",
                texto: "Passe os dados necessários para verificar o atendimento.",
              },
              {
                passo: "03",
                titulo: "Faça o serviço",
                texto: "Receba a orientação e realize o atendimento na LUBRIMAX.",
              },
            ].map((item) => (
              <li
                key={item.passo}
                className="relative rounded-2xl border border-border bg-card p-6"
              >
                <span className="font-display text-4xl font-extrabold text-brand">
                  {item.passo}
                </span>
                <h3 className="mt-3 text-lg font-bold text-card-foreground">{item.titulo}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.texto}
                </p>
              </li>
            ))}
          </ol>
        </section>

        {/* GALERIA */}
        <section id="lubrimax" className="bg-secondary">
          <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
            <SectionHeading
              eyebrow="Galeria"
              title="Conheça a LUBRIMAX."
              subtitle="Espaço reservado para fotos reais: fachada, área de atendimento, troca de óleo em andamento e produtos."
            />
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                "[FOTO REAL LUBRIMAX 01]",
                "[FOTO REAL LUBRIMAX 02]",
                "[FOTO REAL LUBRIMAX 03]",
                "[FOTO REAL LUBRIMAX 04]",
              ].map((label) => (
                <PhotoPlaceholder key={label} label={label} className="aspect-[4/5] bg-card" />
              ))}
            </div>
          </div>
        </section>

        {/* AVALIAÇÕES */}
        <section id="avaliacoes" className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
          <SectionHeading
            eyebrow="Avaliações"
            title="O que os clientes dizem sobre a LUBRIMAX."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {AVALIACOES.map((item) => (
              <figure
                key={item.autor}
                className="rounded-2xl border border-border bg-card p-6"
              >
                <Quote className="size-6 text-brand" />
                <blockquote className="mt-4 text-sm leading-relaxed text-card-foreground">
                  {item.texto}
                </blockquote>
                <figcaption className="mt-5 border-t border-border pt-4 text-sm font-semibold text-muted-foreground">
                  {item.autor}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* CTA INTERMEDIÁRIO */}
        <section className="bg-brand text-brand-foreground">
          <div className="mx-auto flex w-full max-w-6xl flex-col items-start gap-6 px-4 py-12 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:py-14">
            <div>
              <h2 className="text-2xl font-extrabold sm:text-3xl">
                Está na hora de trocar o óleo?
              </h2>
              <p className="mt-2 text-sm text-brand-foreground/80 sm:text-base">
                Fale com a LUBRIMAX e consulte o atendimento para o seu veículo.
              </p>
            </div>
            <WhatsAppButton variant="dark" size="lg">
              Chamar no WhatsApp
            </WhatsAppButton>
          </div>
        </section>

        {/* SOBRE */}
        <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <PhotoPlaceholder
              label="[FOTO DA LUBRIMAX]"
              hint="Foto real da estrutura ou do atendimento."
              className="aspect-[5/4] w-full"
            />
            <div>
              <SectionHeading
                eyebrow="Sobre"
                title="LUBRIMAX: cuidado automotivo perto de você."
                subtitle="A LUBRIMAX atende em Goianira com foco em tornar os cuidados essenciais do veículo mais simples para o motorista. Um atendimento próximo para quem precisa cuidar do carro e seguir a rotina com tranquilidade."
              />
              <div className="mt-8">
                <WhatsAppButton>Falar com a LUBRIMAX</WhatsAppButton>
              </div>
            </div>
          </div>
        </section>

        {/* LOCALIZAÇÃO */}
        <section id="localizacao" className="bg-secondary">
          <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
            <SectionHeading eyebrow="Localização" title="Encontre a LUBRIMAX em Goianira." />
            <div className="mt-10 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
              <ul className="space-y-4">
                {[
                  {
                    Icone: MapPin,
                    titulo: "Endereço",
                    texto: `${CONTATO.endereco} — ${CONTATO.cidade}`,
                  },
                  { Icone: Clock, titulo: "Horário", texto: CONTATO.horario },
                  { Icone: Phone, titulo: "WhatsApp", texto: CONTATO.whatsappExibicao },
                ].map(({ Icone, titulo, texto }) => (
                  <li
                    key={titulo}
                    className="flex gap-4 rounded-2xl border border-border bg-card p-5"
                  >
                    <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-lg bg-brand/15">
                      <Icone className="size-5" />
                    </span>
                    <div>
                      <p className="text-sm font-bold text-card-foreground">{titulo}</p>
                      <p className="mt-1 break-words text-sm text-muted-foreground">{texto}</p>
                    </div>
                  </li>
                ))}
              </ul>

              {/* Mapa embedado: cole a URL real do Google Maps em CONTATO.mapaEmbedUrl */}
              <div className="overflow-hidden rounded-2xl border border-border bg-card">
                {CONTATO.mapaEmbedUrl.startsWith("http") ? (
                  <iframe
                    title="Mapa da localização da LUBRIMAX em Goianira-GO"
                    src={CONTATO.mapaEmbedUrl}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="h-[320px] w-full border-0 sm:h-[420px]"
                  />
                ) : (
                  <div className="flex h-[320px] w-full flex-col items-center justify-center gap-3 px-6 text-center sm:h-[420px]">
                    <MapPin className="size-6 text-brand" />
                    <p className="font-display text-sm font-semibold">
                      [EMBED / URL REAL DO GOOGLE MAPS]
                    </p>
                    <p className="max-w-[34ch] text-xs text-muted-foreground">
                      Insira a URL de incorporação do Google Maps para exibir o mapa aqui.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="duvidas" className="mx-auto w-full max-w-3xl px-4 py-16 sm:px-6 lg:py-24">
          <SectionHeading eyebrow="FAQ" title="Dúvidas frequentes" />
          <Accordion type="single" collapsible className="mt-8 w-full">
            {FAQ.map((item, i) => (
              <AccordionItem key={item.pergunta} value={`item-${i}`}>
                <AccordionTrigger className="text-left text-base font-semibold">
                  {item.pergunta}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {item.resposta}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        {/* CTA FINAL */}
        <section className="bg-graphite text-graphite-foreground">
          <div className="mx-auto w-full max-w-3xl px-4 py-16 text-center sm:px-6 lg:py-24">
            <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl">
              Seu carro está precisando de atenção?
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-base text-graphite-foreground/70">
              Fale com a LUBRIMAX pelo WhatsApp e consulte o atendimento.
            </p>
            <div className="mt-8 flex justify-center">
              <WhatsAppButton size="lg">Falar com a LUBRIMAX</WhatsAppButton>
            </div>
            <p className="mt-5 text-sm text-graphite-foreground/55">
              Atendimento em Goianira-GO
            </p>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-graphite text-graphite-foreground">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3">
          <div>
            <Logo />
            <p className="mt-4 text-sm leading-relaxed text-graphite-foreground/65">
              LUBRIMAX
              <br />
              Goianira-GO
              <br />
              {CONTATO.endereco}
            </p>
          </div>
          <div>
            <p className="font-display text-sm font-bold uppercase tracking-wider text-brand">
              Contato
            </p>
            <ul className="mt-4 space-y-2 text-sm text-graphite-foreground/65">
              <li>{CONTATO.whatsappExibicao}</li>
              <li>{CONTATO.horario}</li>
              <li>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand hover:underline"
                >
                  Chamar no WhatsApp
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-display text-sm font-bold uppercase tracking-wider text-brand">
              Navegação
            </p>
            <ul className="mt-4 grid grid-cols-2 gap-2 text-sm text-graphite-foreground/65">
              {NAV.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="transition-colors hover:text-brand">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-4 py-5 text-xs text-graphite-foreground/40 sm:flex-row sm:items-center sm:justify-between sm:px-6">
            <span>© {new Date().getFullYear()} LUBRIMAX — Goianira-GO</span>
            <span>Site desenvolvido por ZM9 Marketing Digital</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
