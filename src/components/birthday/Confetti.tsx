import { useEffect, useState } from "react";

type ConfettiPiece = {
  id: number;
  left: number;
  delay: number;
  duration: number;
  rotation: number;
  color: string;
};

const colors = [
  "var(--color-burgundy)",
  "var(--color-gold)",
  "var(--color-brown)",
  "var(--color-beige)",
];

export function Confetti() {
  const [pieces, setPieces] = useState<ConfettiPiece[]>([]);

  useEffect(() => {
    const generatedPieces = Array.from({ length: 60 }, (_, index) => ({
      id: index,
      left: Math.random() * 100,
      delay: Math.random() * 3,
      duration: 3 + Math.random() * 3,
      rotation: Math.random() * 360,
      color: colors[index % colors.length],
    }));

   async function initializeConfetti() {
      setPieces(generatedPieces);
    }

    initializeConfetti();
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[100] overflow-hidden"
      aria-hidden="true"
    >
      {pieces.map((piece) => (
        <span
          key={piece.id}
          className="absolute top-[-20px] h-3 w-2 animate-confetti"
          style={{
            left: `${piece.left}%`,
            animationDelay: `${piece.delay}s`,
            animationDuration: `${piece.duration}s`,
            backgroundColor: piece.color,
            transform: `rotate(${piece.rotation}deg)`,
          }}
        />
      ))}
    </div>
  );
}