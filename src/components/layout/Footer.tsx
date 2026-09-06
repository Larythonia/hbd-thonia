export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-beige-light)]">
      <div className="mx-auto flex w-[min(1120px,calc(100%-2rem))] flex-col items-center justify-between gap-3 py-6 text-center sm:flex-row sm:text-left">
        <p className="text-sm text-[var(--color-text-muted)]">
          Thank you for celebrating with me
        </p>

        <p className="text-sm text-[var(--color-text-muted)]">
          © {new Date().getFullYear()} Birthday Celebration
        </p>
      </div>
    </footer>
  );
}