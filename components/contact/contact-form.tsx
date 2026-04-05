"use client";

import { useState } from "react";

export function ContactForm() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: "idle" | "success" | "error";
    message: string;
  }>({
    type: "idle",
    message: "",
  });

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "idle", message: "" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName,
          email,
          phone,
          message,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setStatus({
        type: "success",
        message: "Thank you. Your enquiry has been sent successfully.",
      });

      setFullName("");
      setEmail("");
      setPhone("");
      setMessage("");
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Something went wrong. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6 grid gap-4">
      <input
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
        className="rounded-2xl border border-slate-200 bg-white px-4 py-4 text-sm outline-none"
        placeholder="Full name"
        required
      />

      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="rounded-2xl border border-slate-200 bg-white px-4 py-4 text-sm outline-none"
        placeholder="Email address"
        required
      />

      <input
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className="rounded-2xl border border-slate-200 bg-white px-4 py-4 text-sm outline-none"
        placeholder="Phone number"
      />

      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="min-h-[160px] rounded-2xl border border-slate-200 bg-white px-4 py-4 text-sm outline-none"
        placeholder="Tell us how we can help"
        required
      />

      <button
        type="submit"
        disabled={loading}
        className="rounded-2xl bg-emerald-700 px-5 py-4 text-sm font-semibold text-white transition hover:bg-emerald-800 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {loading ? "Sending..." : "Send Enquiry"}
      </button>

      {status.type !== "idle" && (
        <p
          className={`text-sm ${
            status.type === "success" ? "text-emerald-700" : "text-red-600"
          }`}
        >
          {status.message}
        </p>
      )}
    </form>
  );
}