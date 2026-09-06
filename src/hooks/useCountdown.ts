import { useEffect, useState } from "react";

type Countdown = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

export function useCountdown(targetDate: Date): Countdown {
  const calculateTimeLeft = (): Countdown => {
    const difference = targetDate.getTime() - Date.now();

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [countdown, setCountdown] =
    useState<Countdown>(calculateTimeLeft);

  useEffect(() => {
    // Update immediately
    async function updateCountdown() {
      setCountdown(calculateTimeLeft());
    }

    updateCountdown();

    const timer = setInterval(() => {
      setCountdown(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return countdown;
}