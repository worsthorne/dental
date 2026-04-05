"use client";

import { useState } from "react";
import Link from "next/link";

export function QuickBooking() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setStatus("idle");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: name,
          email: "quickbooking@worsthornedentalclinic.co.uk",
          phone,
          message: "Quick booking request submitted from homepage hero section.",
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to send enquiry");
      }

      setStatus("success");
      setName("");
      setPhone("");
    } catch {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-8 rounded-[1.5rem] border border-white/10 bg-white/10 p-5 backdrop-blur"
    >
      <p className="text-sm font-medium text-white/75">Quick booking</p>

      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="rounded-xl border border-white/10 bg-white/90 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-500 focus:ring-2 focus:ring-emerald-400/70"
          placeholder="Your name"
          required
        />

        <input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="rounded-xl border border-white/10 bg-white/90 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-500 focus:ring-2 focus:ring-emerald-400/70"
          placeholder="Phone number"
          required
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="mt-4 w-full rounded-xl bg-white px-4 py-3 text-sm font-semibold text-slate-900 shadow-lg transition hover:bg-emerald-50 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {loading ? "Sending..." : "Request Appointment"}
      </button>

      <p className="mt-3 text-center text-xs text-white/55">
        Prefer the full form?{" "}
        <Link href="/contact" className="underline underline-offset-4">
          Go to contact page
        </Link>
      </p>

      {status === "success" && (
        <p className="mt-3 text-sm text-emerald-300">
          Request sent. We’ll contact you shortly.
        </p>
      )}

      {status === "error" && (
        <p className="mt-3 text-sm text-red-300">
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  );
}