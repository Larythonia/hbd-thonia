import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/Button";
import { Heart } from "lucide-react";

export default function Wishes() {
  const navigate = useNavigate();

  return (
    <main className="flex min-h-screen items-center justify-center bg-[var(--color-cream)] px-6 py-16">
      <section className="w-full max-w-2xl text-center">
        {/* Decorative Icon */}
        <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-[var(--color-beige-light)] text-4xl shadow-[var(--shadow-soft)]">
          <Heart className="text-[var(--color-burgundy)]" />
        </div>

        {/* Small Heading */}
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[var(--color-burgundy)]">
          From The Heart
        </p>

        {/* Main Heading */}
        <h1 className="text-4xl font-bold leading-tight text-[var(--color-brown-dark)] sm:text-5xl">
          Thank You
        </h1>

        {/* Message Card */}
        <div className="mx-auto mt-8 rounded-3xl border border-[var(--color-border)] bg-[var(--color-beige-light)] px-7 py-9 shadow-[var(--shadow-card)] sm:px-12">
          <p className="text-lg leading-8 text-[var(--color-text-secondary)] sm:text-xl">
            Your beautiful birthday wish has been received.
          </p>

          <p className="mt-5 leading-8 text-[var(--color-text-muted)]">
            Thank you for taking a moment to celebrate this special day with
            me. Your words mean more than you know, and I truly appreciate
            having you be a part of my birthday.
          </p>

          <div className="mx-auto mt-7 h-px w-16 bg-[var(--color-burgundy)] opacity-40" />

          <p className="mt-6 font-serif text-xl italic text-[var(--color-burgundy)]">
            With love and gratitude 
          </p>
        </div>

        {/* Actions */}
        <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            type="button"
            onClick={() => navigate("/wish")}
          >
            Send Another Wish
          </Button>

          <button
            type="button"
            onClick={() => navigate("/")}
            className="rounded-full border border-[var(--color-border)] bg-white px-7 py-3 font-semibold text-[var(--color-brown-dark)] shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-card)]"
          >
            Back Home
          </button>
        </div>

        {/* Bottom Decoration */}
        <div className="mt-12 flex items-center justify-center gap-3 text-[var(--color-burgundy)]">
          <span>✦</span>
          <span className="text-sm tracking-[0.2em]">WITH GRATITUDE</span>
          <span>✦</span>
        </div>
      </section>
    </main>
  );
}