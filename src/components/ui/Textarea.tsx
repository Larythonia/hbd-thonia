import type { TextareaHTMLAttributes } from "react";

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

export function Textarea({ className = "", ...props }: TextareaProps) {
  return (
    <textarea
      className={`min-h-32 w-full resize-y rounded-lg border border-[var(--color-border)] bg-white px-4 py-3 text-[var(--color-text-primary)] outline-none transition focus:border-[var(--color-burgundy)] focus:ring-2 focus:ring-[var(--color-burgundy)]/10 placeholder:text-[var(--color-text-muted)] ${className}`}
      {...props}
    />
  );
}