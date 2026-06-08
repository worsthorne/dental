"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export function EntryGate() {
  const [showEntry, setShowEntry] = useState(true);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const hasSeenEntry = sessionStorage.getItem("worsthorne-entry-seen");

    if (hasSeenEntry) {
      setShowEntry(false);
    }

    setReady(true);
  }, []);

  function handleEnter() {
    sessionStorage.setItem("worsthorne-entry-seen", "true");
    setShowEntry(false);
  }

  if (!ready && !showEntry) return null;

  return (
    <AnimatePresence>
      {showEntry && (
        <motion.section
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="fixed inset-0 z-[9999] overflow-hidden bg-slate-950"
        >
          {/* Background video */}
          <div className="absolute inset-0">
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              poster="/clinical-entry-poster.jpg"
              className="h-full w-full object-cover"
            >
              <source src="/videos/clinical-entry.mp4" type="video/mp4" />
            </video>
          </div>

          {/* Cinematic overlays */}
          <div className="absolute inset-0 bg-slate-950/45" />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-950/55 to-emerald-950/30" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_38%)]" />
          <div className="absolute left-1/2 top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-300/10 blur-3xl" />

          {/* Content */}
          <div className="relative flex min-h-screen items-center justify-center px-5 py-10">
            <div className="mx-auto w-full max-w-5xl text-center text-white">
             <motion.div
  initial={{ opacity: 0, y: -12, scale: 0.92 }}
  animate={{ opacity: 1, y: 0, scale: 1 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full border border-white/30 bg-white shadow-2xl sm:h-28 sm:w-28"
>
  <motion.div
    animate={{ y: [0, -4, 0] }}
    transition={{
      duration: 3.5,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="flex h-full w-full items-center justify-center rounded-full bg-white"
  >
    <Image
      src="/logo2.jpeg"
      alt="Worsthorne Dental Practice"
      width={78}
      height={78}
      className="h-20 w-20 object-contain sm:h-24 sm:w-24"
      priority
    />
  </motion.div>
</motion.div>
              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="text-xs font-semibold uppercase tracking-[0.38em] text-white/70 sm:text-sm"
              >
                Worsthorne Dental Practice
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.85, delay: 0.25 }}
                className="mx-auto mt-5 max-w-4xl text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
              >
                Premium Dental Care
                <span className="block text-white/75">
                  in a Calm Clinical Setting
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.4 }}
                className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/75 sm:text-base"
              >
                A refined and reassuring dental experience built around comfort,
                trust and clinical excellence.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.55 }}
                className="mt-10 flex items-center justify-center"
              >
                <button
                  type="button"
                  onClick={handleEnter}
                  className="inline-flex min-w-[220px] items-center justify-center rounded-full bg-white px-10 py-4 text-sm font-semibold text-slate-950 shadow-2xl transition hover:-translate-y-0.5 hover:bg-stone-100"
                >
                  Enter Site
                </button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.9, delay: 0.75 }}
                className="mx-auto mt-10 flex max-w-xl flex-wrap items-center justify-center gap-x-3 gap-y-2 text-[11px] uppercase tracking-[0.28em] text-white/45"
              >
                <span>Trusted Care</span>
                <span>•</span>
                <span>Modern Dentistry</span>
                <span>•</span>
                <span>Lancashire</span>
              </motion.div>
            </div>
          </div>
        </motion.section>
      )}
    </AnimatePresence>
  );
}