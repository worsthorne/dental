"use client";

import { useState } from "react";

export function QuickBooking() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      fullName: String(formData.get("fullName") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      phone: String(formData.get("phone") || "").trim(),
      message: String(formData.get("message") || "").trim(),
    };

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      setStatus("error");
      return;
    }

    form.reset();
    setStatus("success");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-6 rounded-[2rem] border border-white/15 bg-white/5 p-5 shadow-2xl backdrop-blur"
    >
      <p className="text-sm font-semibold text-white">Quick booking</p>

      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <input
          name="fullName"
          type="text"
          required
          placeholder="Your name"
          className="h-12 rounded-2xl border border-white/15 bg-white px-4 text-sm text-slate-950 outline-none placeholder:text-slate-500"
        />

        <input
          name="phone"
          type="tel"
          placeholder="Phone number"
          className="h-12 rounded-2xl border border-white/15 bg-white px-4 text-sm text-slate-950 outline-none placeholder:text-slate-500"
        />

        <input
          name="email"
          type="email"
          required
          placeholder="Email address"
          className="h-12 rounded-2xl border border-white/15 bg-white px-4 text-sm text-slate-950 outline-none placeholder:text-slate-500 sm:col-span-2"
        />

        <textarea
          name="message"
          required
          rows={3}
          placeholder="How can we help?"
          className="rounded-2xl border border-white/15 bg-white px-4 py-3 text-sm text-slate-950 outline-none placeholder:text-slate-500 sm:col-span-2"
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-4 h-12 w-full rounded-full bg-white text-sm font-semibold text-slate-950 shadow-lg transition hover:bg-slate-100 disabled:opacity-70"
      >
        {status === "sending" ? "Sending..." : "Request Appointment"}
      </button>

      {status === "success" && (
        <p className="mt-3 text-sm text-white/80">
          Thank you. Your enquiry has been sent.
        </p>
      )}

      {status === "error" && (
        <p className="mt-3 text-sm text-red-200">
          Something went wrong. Please try again.
        </p>
      )}

      <p className="mt-3 text-center text-xs text-white/60">
        Prefer the full form?{" "}
        <a href="/contact" className="font-medium text-white underline underline-offset-4">
          Go to contact page
        </a>
      </p>
    </form>
  );
}