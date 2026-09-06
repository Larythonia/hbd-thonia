import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../libs/supabase";

export default function AdminLogin() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setError("");
    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      setError("Invalid email or password.");
      return;
    }

    navigate("/admin");
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-[var(--color-cream)] px-6">
      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-[var(--shadow-card)]">
        <div className="mb-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--color-burgundy)]">
            Private Area
          </p>

          <h1 className="mt-3 text-3xl font-bold text-[var(--color-brown-dark)]">
            Admin Login
          </h1>

          <p className="mt-3 text-sm text-[var(--color-text-muted)]">
            Sign in to view your birthday wishes.
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-[var(--color-brown-dark)]"
            >
              Email
            </label>

            <input
              id="email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Enter your email"
              required
              className="w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-cream)] px-4 py-3 outline-none transition focus:border-[var(--color-burgundy)]"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-medium text-[var(--color-brown-dark)]"
            >
              Password
            </label>

            <input
              id="password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Enter your password"
              required
              className="w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-cream)] px-4 py-3 outline-none transition focus:border-[var(--color-burgundy)]"
            />
          </div>

          {error && (
            <p className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-600">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-full bg-[var(--color-burgundy)] px-6 py-3 font-semibold text-white transition hover:-translate-y-1 hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>
      </div>
    </main>
  );
}