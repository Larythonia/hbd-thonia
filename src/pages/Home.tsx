
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen bg-[var(--color-cream)] text-[var(--color-text-primary)]">
      {/* Hero */}
     {/* Hero */}
<section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden px-6 py-20">
  {/* Background Image */}
  <img
    src="/images/hero-ti.png"
    alt=""
    className="absolute inset-0 h-full w-full object-contain opacity-50"
  />

  {/* Soft Overlay */}
  <div className="absolute inset-0 bg-[var(--color-brown-dark)]/45" />

  {/* Hero Content */}
  <div className="relative z-10 mx-auto max-w-4xl text-center">
    <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-white/90">
      A Special Day
    </p>

    <h1 className="text-5xl font-bold leading-tight text-white sm:text-6xl md:text-7xl">
      Celebrating{" "}
      <span className="text-[var(--color-gold)]">
        Me
      </span>
    </h1>

    <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/90">
      Today is my birthday. It is a celebration of my
      life, my journey, my growth, and all the beautiful moments
      still waiting for me.
    </p>

    <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
      <button
        type="button"
        onClick={() => navigate("/wish")}
        className="rounded-full bg-[var(--color-burgundy)] px-7 py-3 font-semibold text-white shadow-[var(--shadow-button)] transition-all duration-300 hover:-translate-y-1 hover:opacity-90 hover:shadow-xl"
      >
        Send Me a Birthday Wish 
      </button>

      <button
        type="button"
        onClick={() => {
          document
            .getElementById("memories")
            ?.scrollIntoView({ behavior: "smooth" });
        }}
        className="rounded-full border border-white/80 bg-white/10 px-7 py-3 font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-[var(--color-burgundy)]"
      >
        Explore My Memories
      </button>
    </div>
  </div>
</section>

      {/* Birthday Message */}
      <section className="bg-[var(--color-beige-light)] px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[var(--color-burgundy)]">
            A Little Something
          </p>

          <h2 className="text-3xl font-bold text-[var(--color-brown-dark)] sm:text-4xl">
            Today, we celebrate me.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[var(--color-text-muted)]">
            May this new chapter bring me closer to my dreams, surround me
            with genuine happiness, and give me countless reasons to smile.
            I deserve beautiful things, beautiful people, and beautiful
            moments.
          </p>
        </div>
      </section>

      {/* Memories */}
      <section
        id="memories"
        className="bg-[var(--color-cream)] px-6 py-24"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[var(--color-burgundy)]">
              Moments
            </p>

            <h2 className="text-3xl font-bold text-[var(--color-brown-dark)] sm:text-4xl">
              Beautiful Memories
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-[var(--color-text-muted)]">
              Every moment tells a story. Here are a few moments worth
              remembering.
            </p>
          </div>

        <div className="overflow-hidden">
  <div className="flex w-max animate-scroll-left gap-6">
    {[
      {
        title: "Another Special Day",
        description:
          "On my birthday 2022.",
        image: "/images/ti-2.png",
      },
      {
        title: "A Beautiful Moment",
        description:
          "At Ibom Icon.",
        image: "/images/ti-3.png",
      },
      {
        title: "More Memories",
        description:
          "On a beautiful sunday morning.",
        image: "/images/ti-4.png",
      },
      {
        title: "Another Beautiful Moment",
        description:
          "Na this girl dey chop my money",
        image: "/images/ti-te.png",
      },
      {
        title: "NYSC Memories",
        description:
          "Pretty me at Iseyin camp.",
        image: "/images/nysc-1.png",
      },
      {
        title: "NYSC Memories",
        description:
          "Meet your pretty Tenor section leader (Band CDS).",
        image: "/images/nysc-2.png",
      },
      {
        title: "A Beautiful Moment",
        description:
          "Meet my beautiful siblings during my sister's marriage.",
        image: "/images/fam.png",
      },
      {
        title: "On this Day",
        description:
          "With my Godfather.",
        image: "/images/fr.png",
      },
       {
        title: "Web3 Memory Event",
        description:
          "Me at Solana summit.",
        image: "/images/solana.png",
      }
    ].map((memory, index) => (
      <div
  key={`${memory.title}-${index}`}
  className="
    group
    w-[280px]
    shrink-0
    overflow-hidden
    rounded-3xl
    border
    border-[var(--color-border)]
    bg-white
    shadow-[0_10px_30px_rgba(59,36,24,0.12)]
    transition-all
    duration-500
    hover:-translate-y-3
    hover:shadow-[0_20px_45px_rgba(59,36,24,0.20)]
    sm:w-[320px]
  "
>
  <div className="aspect-square overflow-hidden bg-[var(--color-beige-light)]">
    <img
      src={memory.image}
      alt={memory.title}
      className="
        h-full
        w-full
        object-cover
        transition-transform
        duration-1000
        group-hover:scale-110
      "
    />
  </div>

  <div className="p-5">
    <h3 className="font-semibold text-[var(--color-brown-dark)]">
      {memory.title}
    </h3>

    <p className="mt-2 text-sm leading-6 text-[var(--color-text-muted)]">
      {memory.description}
    </p>
  </div>
</div>
    ))}
  </div>
</div>
        </div>
      </section>

      {/* Wish CTA */}
      <section className="bg-[var(--color-beige-light)] px-6 py-24">
        <div className="mx-auto max-w-4xl rounded-3xl bg-[var(--color-burgundy)] px-8 py-16 text-center shadow-[var(--shadow-card)]">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Have something to say?
          </h2>

          <p className="mx-auto mt-4 max-w-xl leading-7 text-white/80">
            Leave a heartfelt birthday message and make this special day even
            more memorable.
          </p>

          <button
            type="button"
            onClick={() => navigate("/wish")}
            className="mt-8 rounded-full bg-[var(--color-cream)] px-7 py-3 font-semibold text-[var(--color-burgundy)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            Write a Birthday Wish
          </button>
        </div>
      </section>
    </main>
  );
}

