"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { vehicles } from "@/lib/fleet";

export function HeroForm() {
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded border border-gold-600/40 bg-ink-900/80 p-7 shadow-2xl backdrop-blur-md">
        <CheckCircle2 className="h-7 w-7 text-gold-400" />
        <h3 className="mt-3 font-display text-xl text-ink-50">Request received</h3>
        <p className="mt-1.5 text-sm text-ink-300">
          A specialist will text or email you within 1 business hour with availability and a quote.
          For instant booking, call <a className="text-gold-400 hover:underline" href="tel:+15163767930">516-376-7930</a>.
        </p>
      </div>
    );
  }

  return (
    <form
      id="book"
      onSubmit={onSubmit}
      className="rounded border border-ink-700 bg-ink-900/85 p-6 shadow-2xl backdrop-blur-md sm:p-7"
      aria-labelledby="quote-heading"
    >
      <div className="flex items-center justify-between">
        <h2 id="quote-heading" className="font-display text-xl text-ink-50">
          Reserve your dream
        </h2>
        <span className="rounded bg-gold-500/15 px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-gold-400">
          Instant Quote
        </span>
      </div>
      <p className="mt-1 text-xs text-ink-300">
        Response within 1 business hour · Delivery available
      </p>

      <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
        <div>
          <label className="label" htmlFor="name">Full name</label>
          <input id="name" name="name" required className="field" placeholder="Jane Doe" />
        </div>
        <div>
          <label className="label" htmlFor="phone">Phone</label>
          <input id="phone" name="phone" type="tel" required className="field" placeholder="(516) 555-0199" />
        </div>
        <div className="sm:col-span-2">
          <label className="label" htmlFor="email">Email</label>
          <input id="email" name="email" type="email" required className="field" placeholder="jane@example.com" />
        </div>
        <div>
          <label className="label" htmlFor="pickup">Pickup date</label>
          <input id="pickup" name="pickup" type="date" required className="field" />
        </div>
        <div>
          <label className="label" htmlFor="return">Return date</label>
          <input id="return" name="return" type="date" required className="field" />
        </div>
        <div className="sm:col-span-2">
          <label className="label" htmlFor="vehicle">Vehicle of interest</label>
          <select id="vehicle" name="vehicle" className="field" defaultValue="">
            <option value="" disabled>Choose a vehicle (optional)</option>
            <option value="open">I&apos;m open to recommendations</option>
            {vehicles.map((v) => (
              <option key={v.slug} value={v.slug}>
                {v.make} {v.model}
              </option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label className="label" htmlFor="event">Occasion</label>
          <select id="event" name="event" className="field" defaultValue="">
            <option value="" disabled>What&apos;s the occasion?</option>
            <option>Wedding</option>
            <option>Prom</option>
            <option>Birthday</option>
            <option>Anniversary</option>
            <option>Corporate event</option>
            <option>Photo / video shoot</option>
            <option>Weekend drive</option>
            <option>Other</option>
          </select>
        </div>
      </div>

      <button type="submit" className="btn-primary mt-5 w-full">
        Check availability →
      </button>
      <p className="mt-3 text-center text-[11px] text-ink-400">
        No charge until your booking is confirmed. Valid 25+ driver&apos;s license & insurance required.
      </p>
    </form>
  );
}
