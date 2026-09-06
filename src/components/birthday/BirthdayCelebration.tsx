import { Button } from "../ui/Button";
import { Card } from "../ui/Card";

type BirthdayCelebrationProps = {
  name: string;
  onSendWish?: () => void;
};

export function BirthdayCelebration({
  onSendWish,
}: BirthdayCelebrationProps) {
  return (
    <section className="section relative overflow-hidden">
      <div className="container">
        <Card className="relative overflow-hidden border-[var(--color-gold)]/20 bg-white p-6 shadow-[var(--shadow-card)] sm:p-8">
          <div className="grid items-center gap-10 md:grid-cols-2">

            {/* Image */}
            <div className="relative mx-auto w-full max-w-md">
              {/* Outer burgundy frame */}
              <div className="absolute -inset-4 rounded-[2.5rem] border border-[var(--color-burgundy)]/15" />

              {/* Gold frame */}
              <div className="absolute -inset-2 rounded-[2rem] border-2 border-[var(--color-gold)]/50" />

              {/* Photo */}
              <div className="relative overflow-hidden rounded-[2rem] bg-[var(--color-beige-light)] p-2 shadow-[0_20px_50px_rgba(59,36,24,0.18)]">
                <img
                  src="/images/ti-1.png"
                  alt="Birthday memory"
                  className="aspect-[4/5] w-full rounded-[1.5rem] object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>

            {/* Content */}
            <div className="text-center md:text-left">

              {/* Cake */}
              <div className="mb-5 animate-float">
                <img
                  src="/images/cake.png"
                  alt="Birthday cake"
                  className="mx-auto h-12 w-12 md:mx-0"
                />
              </div>

              {/* Heading */}
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[var(--color-burgundy)]">
                A Sweet Girl Was Born Today
              </p>

              <div className="gold-line md:mx-0" />

              {/* Gratitude */}
              <div
                className="
                  mt-6
                  border-[var(--color-gold)]/10
                  bg-[var(--color-cream)]
                  p-6
                  text-left
                  shadow-[var(--shadow-soft)]
                  animate-fade-up
                  transition-all
                  duration-500
                  hover:-translate-y-1
                  hover:shadow-[var(--shadow-card)]
                "
              >
                <p className="leading-7 text-[var(--color-text-secondary)]">
                  I'm grateful to God for His love, grace, and for bringing me
                  this far. Looking back, I’m proud of how much I’ve grown and
                  of the person I’m becoming.

                  <br />
                  <br />

                  I’m especially grateful for the amazing people God has placed
                  in my life, those who have loved me, supported me, encouraged
                  me, and made my journey more beautiful.

                  <br />
                  <br />

                  Here’s to another year of growth, answered prayers, beautiful
                  memories, and becoming all that I’m meant to be.
                </p>
              </div>

              {/* Button */}
              <div className="mt-10">
                <Button onClick={onSendWish}>
                  Send a Birthday Wish 
                </Button>
              </div>

            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}