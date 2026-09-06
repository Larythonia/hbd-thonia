import { WishCard } from "./WishCard";

type Wish = {
  id: string;
  name: string;
  message: string;
  created_at?: string;
};

type WishesGridProps = {
  wishes: Wish[];
};

export function WishesGrid({ wishes }: WishesGridProps) {
  if (wishes.length === 0) {
    return (
      <div className="py-12 text-center">
        <div className="mb-4 text-5xl">💌</div>

        <h3 className="text-xl font-semibold text-[var(--color-brown-dark)]">
          No wishes yet
        </h3>

        <p className="mt-2 text-[var(--color-text-muted)]">
          Be the first person to leave a birthday wish.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {wishes.map((wish) => (
        <WishCard key={wish.id} wish={wish} />
      ))}
    </div>
  );
}