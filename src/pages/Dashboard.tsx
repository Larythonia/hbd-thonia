
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../libs/supabase";

type Wish = {
  id: string;
  name: string;
  message: string;
  created_at: string;
};

export default function Dashboard() {
  const navigate = useNavigate();

  const [wishes, setWishes] = useState<Wish[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchWishes() {
      const {
        data: { user },
        error: authError,
      } = await supabase.auth.getUser();

      console.log("Logged in user:", user);
      console.log("Auth error:", authError);

      if (!user) {
        navigate("/admin-login");
        return;
      }

      const { data, error } = await supabase
        .from("wishes")
        .select("id, name, message, created_at")
        .order("created_at", { ascending: false });

      console.log("Wishes returned:", data);
      console.log("Wishes error:", error);

      if (error) {
        console.error("Error fetching wishes:", error);
        alert(`Could not load wishes: ${error.message}`);
        setIsLoading(false);
        return;
      }

      setWishes(data ?? []);
      setIsLoading(false);
    }

    fetchWishes();
  }, [navigate]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/admin-login");
  };

  return (
    <main className="min-h-screen bg-[var(--color-cream)] px-6 py-10 text-[var(--color-text-primary)]">
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-[var(--color-burgundy)]">
              Private Dashboard
            </p>

            <h1 className="text-3xl font-bold text-[var(--color-brown-dark)] sm:text-4xl">
              Birthday Wishes
            </h1>

            <p className="mt-2 text-[var(--color-text-muted)]">
              See all the beautiful messages people have sent you.
            </p>
          </div>

          <button
            type="button"
            onClick={handleLogout}
            className="rounded-full border border-[var(--color-border)] bg-white px-6 py-3 font-semibold text-[var(--color-brown-dark)] shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-card)]"
          >
            Logout
          </button>
        </div>

        {/* Stats */}
        <div className="mb-8 rounded-2xl border border-[var(--color-border)] bg-[var(--color-beige-light)] p-6 shadow-[var(--shadow-soft)]">
          <p className="text-sm text-[var(--color-text-muted)]">
            Total Birthday Wishes
          </p>

          <p className="mt-1 text-4xl font-bold text-[var(--color-burgundy)]">
            {wishes.length}
          </p>
        </div>

        {/* Wishes */}
        {isLoading ? (
          <div className="py-20 text-center">
            <p className="text-[var(--color-text-muted)]">
              Loading wishes...
            </p>
          </div>
        ) : wishes.length === 0 ? (
          <div className="rounded-2xl bg-white p-12 text-center shadow-[var(--shadow-soft)]">
            <div className="mb-4 text-4xl">💌</div>

            <h2 className="text-xl font-semibold text-[var(--color-brown-dark)]">
              No wishes yet
            </h2>

            <p className="mt-2 text-[var(--color-text-muted)]">
              Birthday wishes will appear here when people send them.
            </p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2">
            {wishes.map((wish) => (
              <article
                key={wish.id}
                className="rounded-2xl border border-[var(--color-border)] bg-white p-6 shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-card)]"
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-[var(--color-beige-light)] text-xl">
                  💌
                </div>

                <p className="leading-8 text-[var(--color-text-secondary)]">
                  "{wish.message}"
                </p>

                <div className="mt-6 border-t border-[var(--color-border)] pt-4">
                  <p className="font-semibold text-[var(--color-brown-dark)]">
                    — {wish.name}
                  </p>

                  <p className="mt-1 text-xs text-[var(--color-text-muted)]">
                    {new Date(wish.created_at).toLocaleString()}
                  </p>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
