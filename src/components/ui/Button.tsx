import type { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "outline";
};

export function Button({
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const variants = {
    primary:
      "bg-[var(--color-burgundy)] text-white shadow-[var(--shadow-button)] hover:opacity-90",
    secondary:
      "bg-[var(--color-brown)] text-white hover:bg-[var(--color-brown-dark)]",
   outline:
  "border border-[var(--color-burgundy)] text-[var(--color-burgundy)] hover:bg-[var(--color-beige-light)]",
  };

  return (
    <button
      className={`rounded-lg px-5 py-3 font-medium transition-all duration-200 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

