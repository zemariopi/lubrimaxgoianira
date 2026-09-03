import { useEffect, useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { NAV, whatsappHref } from "@/lib/lubrimax";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  // [LOGO LUBRIMAX] — substitua por <img src="/logo.svg" alt="LUBRIMAX" /> quando disponível.
  return (
    <a href="#inicio" className={cn("group flex items-center gap-2.5", className)}>
      <span className="flex h-9 w-9 items-center justify-center rounded-md bg-brand font-display text-lg font-900 font-extrabold text-brand-foreground">
        L
      </span>
      <span className="font-display text-xl font-extrabold tracking-tight">
        LUBRI<span className="text-brand">MAX</span>
      </span>
    </a>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
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
        "fixed inset-x-0 top-0 z-50 bg-graphite text-graphite-foreground transition-shadow duration-300",
        scrolled && "shadow-[0_1px_0_0_color-mix(in_oklab,var(--brand)_35%,transparent)]",
      )}
    >
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6 lg:h-[4.5rem]">
        <Logo />

        <nav aria-label="Navegação principal" className="hidden lg:block">
          <ul className="flex items-center gap-7 text-sm font-medium">
            {NAV.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-graphite-foreground/75 transition-colors hover:text-brand"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-lg bg-brand px-4 py-2.5 text-sm font-semibold text-brand-foreground transition-transform duration-200 hover:-translate-y-0.5 sm:inline-flex"
          >
            <MessageCircle className="size-4" />
            Chamar no WhatsApp
          </a>
          <button
            type="button"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex size-10 items-center justify-center rounded-lg border border-white/15 lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-white/10 bg-graphite lg:hidden">
          <nav aria-label="Navegação mobile" className="mx-auto max-w-6xl px-4 py-4 sm:px-6">
            <ul className="flex flex-col">
              {NAV.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block border-b border-white/5 py-3.5 text-base font-medium text-graphite-foreground/85"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-5 flex w-full items-center justify-center gap-2 rounded-lg bg-brand px-4 py-3.5 text-base font-semibold text-brand-foreground"
            >
              <MessageCircle className="size-5" />
              Chamar no WhatsApp
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
