import { useState } from "react";
import type { FormEvent } from "react";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";
import { Textarea } from "../ui/Textarea";

type WishFormProps = {
  onSubmit?: (name: string, message: string) => void;
};

export function WishForm({ onSubmit }: WishFormProps) {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!name.trim() || !message.trim()) {
      return;
    }

    onSubmit?.(name.trim(), message.trim());

    setName("");
    setMessage("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto w-full max-w-2xl space-y-5"
    >
      <div>
        <label
          htmlFor="name"
          className="mb-2 block text-sm font-medium text-[var(--color-brown-dark)]"
        >
          Your Name
        </label>

        <Input
          id="name"
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-2 block text-sm font-medium text-[var(--color-brown-dark)]"
        >
          Your Birthday Wish
        </label>

        <Textarea
          id="message"
          placeholder="Write a beautiful birthday message..."
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          required
        />
      </div>

      <Button type="submit" className="w-full sm:w-auto">
        Send Birthday Wish
      </Button>
    </form>
  );
}