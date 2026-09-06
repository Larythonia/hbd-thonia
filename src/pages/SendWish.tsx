
import { useState, type FormEvent } from "react";
import { supabase } from "../libs/supabase";
import { useNavigate } from "react-router-dom";

export default function SendWish() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

 const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
  event.preventDefault();

  if (!name.trim() || !message.trim()) return;

  setIsSubmitting(true);

  const { error } = await supabase.from("wishes").insert([
    {
      name: name.trim(),
      message: message.trim(),
    },
  ]);

  setIsSubmitting(false);

  if (error) {
    console.error("Error sending wish:", error);
    alert("Something went wrong. Please try again.");
    return;
  }

  navigate("/wishes");
};

  return (
    <main className="min-h-screen bg-[var(--color-cream)] px-6 py-16 text-[var(--color-text-primary)]">
      <div className="mx-auto max-w-2xl">
        {/* Header */}
        <div className="mb-10 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[var(--color-burgundy)]">
            Make It Special
          </p>

          <h1 className="text-4xl font-bold text-[var(--color-brown-dark)] sm:text-5xl">
            Send a Birthday Wish
          </h1>

          <p className="mx-auto mt-4 max-w-lg leading-7 text-[var(--color-text-muted)]">
            Leave a heartfelt message and make this birthday even more
            memorable.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="rounded-3xl border border-[var(--color-border)] bg-white p-6 shadow-[var(--shadow-soft)] sm:p-8"
        >
          <div className="space-y-6">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-semibold text-[var(--color-brown-dark)]"
              >
                Your Name
              </label>

              <input
                id="name"
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Enter your name"
                className="w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-cream)] px-4 py-3 text-[var(--color-text-primary)] outline-none transition-all duration-200 placeholder:text-[var(--color-text-muted)] focus:border-[var(--color-burgundy)] focus:ring-2 focus:ring-[var(--color-burgundy)]/20"
                required
              />
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-semibold text-[var(--color-brown-dark)]"
              >
                Your Message
              </label>

              <textarea
                id="message"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                placeholder="Write your birthday message..."
                rows={7}
                className="w-full resize-none rounded-xl border border-[var(--color-border)] bg-[var(--color-cream)] px-4 py-3 text-[var(--color-text-primary)] outline-none transition-all duration-200 placeholder:text-[var(--color-text-muted)] focus:border-[var(--color-burgundy)] focus:ring-2 focus:ring-[var(--color-burgundy)]/20"
                required
              />
            </div>

            {/* Buttons */}
            <div className="flex flex-col gap-3 pt-2 sm:flex-row">
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 rounded-full bg-[var(--color-burgundy)] px-6 py-3 font-semibold text-white shadow-[var(--shadow-button)] transition-all duration-300 hover:-translate-y-0.5 hover:opacity-90 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? "Sending..." : "Send Wish "}
              </button>

              <button
                type="button"
                onClick={() => navigate("/wishes")}
                className="rounded-full border border-[var(--color-burgundy)] px-6 py-3 font-semibold text-[var(--color-burgundy)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--color-burgundy)] hover:text-white"
              >
                View Wishes
              </button>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
}

