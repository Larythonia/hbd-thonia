import { useCountdown } from "../../hooks/useCountdown";
import { Card } from "../ui/Card";

type BirthdayCountdownProps = {
  targetDate: Date;
};

export function BirthdayCountdown({
  targetDate,
}: BirthdayCountdownProps) {
  const { days, hours, minutes, seconds } = useCountdown(targetDate);

  const timeUnits = [
    { label: "Days", value: days },
    { label: "Hours", value: hours },
    { label: "Minutes", value: minutes },
    { label: "Seconds", value: seconds },
  ];

  return (
    <section
      id="birthday-countdown"
      className="section bg-[var(--color-beige-light)]"
    >
      <div className="container">
        <div className="section-header flex flex-col items-center text-center py-8">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[var(--color-burgundy)]">
            The big moment
          </p>

          <h2 className="section-title">
            Counting Down to Your Day 
          </h2>

          <p className="section-description">
            Every second brings us closer to another beautiful year of
            your amazing journey.
          </p>
        </div>

        <div className="mx-auto grid max-w-3xl grid-cols-2 gap-4 md:grid-cols-4 pb-6">
          {timeUnits.map((unit) => (
            <Card
              key={unit.label}
              className="animate-fade-up p-5 text-center sm:p-6"
            >
              <div className="text-3xl font-bold text-[var(--color-burgundy)] sm:text-4xl">
                {String(unit.value).padStart(2, "0")}
              </div>

              <div className="mt-2 text-sm font-medium uppercase tracking-wider text-[var(--color-text-muted)]">
                {unit.label}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}