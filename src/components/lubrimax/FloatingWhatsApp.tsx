import { MessageCircle } from "lucide-react";
import { whatsappHref } from "@/lib/lubrimax";

export function FloatingWhatsApp() {
  return (
    <a
      href={whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a LUBRIMAX no WhatsApp"
      className="fixed bottom-5 right-4 z-40 inline-flex items-center justify-center rounded-full bg-graphite text-brand shadow-lg ring-1 ring-brand/40 transition-transform duration-200 hover:-translate-y-0.5 sm:bottom-6 sm:right-6"
      style={{ width: "3.25rem", height: "3.25rem" }}
    >
      <MessageCircle className="size-6" />
    </a>
  );
}
