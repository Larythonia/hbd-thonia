import { Card } from "../ui/Card";

type Wish = {
  id: string;
  name: string;
  message: string;
  created_at?: string;
};

type WishCardProps = {
  wish: Wish;
};

export function WishCard({ wish }: WishCardProps) {
  return (
    <Card className="p-6 transition-transform duration-200 hover:-translate-y-1">
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-beige-light)] text-lg">
          💌
        </div>

        <div>
          <h3 className="font-semibold text-[var(--color-brown-dark)]">
            {wish.name}
          </h3>

          {wish.created_at && (
            <p className="text-xs text-[var(--color-text-muted)]">
              {new Date(wish.created_at).toLocaleDateString()}
            </p>
          )}
        </div>
      </div>

      <p className="text-[var(--color-text-secondary)]">
        {wish.message}
      </p>
    </Card>
  );
}