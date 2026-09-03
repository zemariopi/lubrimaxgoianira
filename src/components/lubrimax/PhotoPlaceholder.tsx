import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface PhotoPlaceholderProps {
  label: string;
  hint?: string;
  className?: string;
}

/**
 * Placeholder elegante para fotos reais da LUBRIMAX.
 * Troque este componente por <img src=... alt=... /> quando as fotos existirem.
 */
export function PhotoPlaceholder({ label, hint, className }: PhotoPlaceholderProps) {
  return (
    <div
      role="img"
      aria-label={`Espaço reservado para ${label}`}
      className={cn(
        "relative flex flex-col items-center justify-center gap-3 overflow-hidden rounded-2xl border border-border bg-muted px-6 py-10 text-center",
        className,
      )}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, transparent 0 14px, color-mix(in oklab, var(--foreground) 6%, transparent) 14px 15px)",
        }}
      />
      <span className="relative flex size-11 items-center justify-center rounded-full bg-accent text-accent-foreground">
        <ImageIcon className="size-5" />
      </span>
      <span className="relative font-display text-sm font-semibold tracking-wide text-current">
        {label}
      </span>
      {hint ? (
        <span className="relative max-w-[24ch] text-xs opacity-70">{hint}</span>
      ) : null}
    </div>
  );
}
