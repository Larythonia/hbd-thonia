
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

  const copyAccountNumber = async () => {
    try {
      await navigator.clipboard.writeText("8062396823");
      alert("Account number copied!");
    } catch (error) {
      console.error("Failed to copy account number:", error);
    }
  };

  return (
    <main className="min-h-screen bg-[var(--color-cream)] px-6 py-16 text-[var(--color-text-primary)]">
      <div className="mx-auto max-w-6xl">

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

        {/* Wish Form + Gift Card */}
        <div className="grid gap-8 lg:grid-cols-2">

          {/* Wish Form */}
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
                  {isSubmitting ? "Sending..." : "Send Wish"}
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

          {/* Send a Gift */}
          <section className="rounded-3xl border border-[var(--color-border)] bg-[#f3e8dc] p-6 shadow-[var(--shadow-soft)] sm:p-8">

            <div className="text-center">
              <div className="mb-3 text-3xl">
                
              </div>

              <h2 className="text-2xl font-bold text-[var(--color-brown-dark)]">
                Send a Gift
              </h2>

              <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-[var(--color-text-muted)]">
                Your beautiful wishes mean so much to me. If you would also
                love to send a little birthday gift, you can do so here. 
              </p>
            </div>

            {/* Account Details */}
            <div className="mt-6 rounded-2xl bg-white p-5">
              <div className="space-y-4">

                {/* Bank */}
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[var(--color-text-muted)]">
                    Bank
                  </p>

                  <p className="mt-1 font-semibold text-[var(--color-brown-dark)]">
                    Your Bank Name
                  </p>
                </div>

                {/* Account Name */}
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[var(--color-text-muted)]">
                    Anthonia Hilary
                  </p>

                  <p className="mt-1 font-semibold text-[var(--color-brown-dark)]">
                    Opay
                  </p>
                </div>

                {/* Account Number */}
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[var(--color-text-muted)]">
                    Account Number
                  </p>

                  <div className="mt-1 flex items-center justify-between gap-3">
                    <p className="font-semibold tracking-wide text-[var(--color-brown-dark)]">
                      8062396823
                    </p>

                    <button
                      type="button"
                      onClick={copyAccountNumber}
                      className="shrink-0 rounded-full bg-[var(--color-burgundy)] px-4 py-2 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:opacity-90"
                    >
                      Copy
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <p className="mt-5 text-center text-xs italic text-[var(--color-text-muted)]">
              Thank you for making my birthday extra special. 
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
