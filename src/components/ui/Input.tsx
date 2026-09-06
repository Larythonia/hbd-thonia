import type { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export function Input({ className = "", ...props }: InputProps) {
  return (
    <input
      className={`w-full rounded-lg border border-[var(--color-border)] bg-white px-4 py-3 text-[var(--color-text-primary)] outline-none transition focus:border-[var(--color-burgundy)] focus:ring-2 focus:ring-[var(--color-burgundy)]/10 placeholder:text-[var(--color-text-muted)] ${className}`}
      {...props}
    />
  );
}