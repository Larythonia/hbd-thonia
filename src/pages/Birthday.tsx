import { useNavigate } from "react-router-dom";

import { BirthdayHero } from "../components/birthday/BirthdayHero";
import { BirthdayCountdown } from "../components/birthday/BirthdayCountdown";
import { BirthdayCelebration } from "../components/birthday/BirthdayCelebration";
import { Confetti } from "../components/birthday/Confetti";
import { useBirthday } from "../hooks/useBirthday";

function isBirthdayToday() {
  const today = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Africa/Lagos",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date());

  return today === "2026-09-06";
}

export default function Birthday() {
  const navigate = useNavigate();

  const { birthdayDate, name } = useBirthday();

  const isBirthday = isBirthdayToday();

  return (
    <main className="min-h-screen">
      <BirthdayHero />

      {isBirthday ? (
        <>
          <Confetti />

          <BirthdayCelebration
            name={name}
            onSendWish={() => navigate("/wish")}
          />
        </>
      ) : (
        <BirthdayCountdown targetDate={birthdayDate} />
      )}
    </main>
  );
}