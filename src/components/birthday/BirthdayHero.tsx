import { Button } from "../ui/Button";

export function BirthdayHero() {
  return (
    <section className="relative flex min-h-[calc(100vh-4rem)] items-center overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute -left-24 -top-24 h-64 w-64 rounded-full bg-[var(--color-beige-light)] opacity-60" />

      <div className="absolute -bottom-32 -right-24 h-80 w-80 rounded-full bg-[var(--color-pink)] opacity-20" />

      <div className="absolute right-[15%] top-[20%] h-4 w-4 rounded-full bg-[var(--color-gold)] animate-float" />

      <div className="absolute -bottom-32 -right-24 h-80 w-80 rounded-full bg-[var(--color-beige)] opacity-20" />

      {/* Hero content */}
      <div className="container relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 animate-fade-up text-sm font-semibold uppercase tracking-[0.3em] text-[var(--color-burgundy)]">
            A special celebration
          </p>

          <h1 className="animate-fade-up font-birthday text-5xl font-bold leading-tight text-[var(--color-brown-dark)] sm:text-6xl md:text-7xl">
            Happy Birthday
            <span className="mt-1 block text-[var(--color-burgundy)]">
              Thonia Hilary
            </span>
          </h1>

          <div className="gold-line animate-fade-in" />

          <p className="mx-auto mt-6 max-w-xl animate-fade-up text-base text-[var(--color-text-secondary)] sm:text-lg">
            Today is all about celebrating you, your beautiful journey,
            and all the wonderful moments still ahead.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Button
              onClick={() => {
                document
                  .getElementById("birthday-countdown")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="animate-fade-up"
            >
              Celebrate With Me 
            </Button>

            <Button
              variant="outline"
              onClick={() => {
                window.location.href = "/send-wish";
              }}
              className="animate-fade-up"
            >
              Send a Birthday Wish 
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}