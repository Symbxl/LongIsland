import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { Calendar, Car, MapPin, ShieldCheck, Star, Truck, Wand2, ChevronRight, CheckCircle2 } from "lucide-react";
import { HeroForm } from "@/components/HeroForm";
import { VehicleCard } from "@/components/VehicleCard";
import { SectionHeader } from "@/components/SectionHeader";
import { vehicles } from "@/lib/fleet";
import { site } from "@/lib/site";

export const metadata = {
  title: `${site.name} — Exotic, Luxury & Classic Car Rentals on Long Island`,
  description: site.description,
};

const faqs = [
  {
    q: "What's required to rent an exotic car on Long Island?",
    a: "A valid U.S. driver's license, age 25+, a major credit card, and proof of full-coverage auto insurance. International drivers welcome with an IDP — call us for specifics.",
  },
  {
    q: "Do you deliver the car?",
    a: "Yes. Complimentary local delivery within Nassau County, and flat-rate delivery to Manhattan, Brooklyn, Queens, Suffolk, the Hamptons, and Westchester. We can also stage the car at a venue for weddings and shoots.",
  },
  {
    q: "What's the minimum rental period?",
    a: "Most exotic and luxury rentals are 24-hour minimum. Event-only bookings (weddings, photo shoots, prom drop-offs) are available by the hour — ask for our Event Day rate.",
  },
  {
    q: "Can I rent for a wedding, prom, or photo shoot?",
    a: "Absolutely — these are a specialty. We've supplied vehicles for hundreds of Long Island weddings, music videos, fashion shoots, prom arrivals, and corporate events. Bundled multi-car packages available.",
  },
  {
    q: "What areas do you serve?",
    a: "Nassau and Suffolk Counties, all five NYC boroughs, the Hamptons, Westchester, and the tri-state area. Long-distance and out-of-state rentals are case-by-case.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function HomePage() {
  const featured = vehicles.slice(0, 6);
  const hero = vehicles[0];

  return (
    <>
      {/* HERO */}
      <section className="relative flex min-h-screen items-center overflow-hidden border-b border-ink-800">
        <div className="absolute inset-0 -z-10">
          <Image
            src={hero.hero}
            alt="Lamborghini Urus at Long Island Exotic Cars"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/80 to-ink-950/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-transparent to-transparent" />
        </div>
        <div className="container-x grid w-full grid-cols-1 items-center gap-10 py-14 lg:grid-cols-12 lg:py-24">
          <div className="lg:col-span-7">
            <p className="eyebrow">Long Island · Since 2009</p>
            <h1 className="mt-4 font-display text-4xl leading-[1.05] text-ink-50 sm:text-5xl lg:text-6xl xl:text-7xl text-balance">
              Drive your <span className="text-gold-400 italic">dream</span> — without the dealership.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-200">
              Lamborghini, Ferrari, Rolls-Royce, Bentley, McLaren and 40+ more. Hand-detailed, fully insured,
              delivered to your door from our Westbury showroom — across Nassau, Suffolk, NYC, and the Hamptons.
            </p>
            <ul className="mt-6 grid max-w-xl grid-cols-1 gap-2 text-sm text-ink-200 sm:grid-cols-2">
              {[
                "40+ exotic, luxury & classic vehicles",
                "Door-to-door delivery available",
                "Wedding, prom & photo-shoot specialists",
                "Insurance included on every rental",
              ].map((b) => (
                <li key={b} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-gold-400" />
                  {b}
                </li>
              ))}
            </ul>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Link href="#book" className="btn-primary">
                Get Instant Quote
              </Link>
              <Link href="/fleet" className="btn-ghost">
                Browse the Fleet
              </Link>
              <a href={site.phoneHref} className="text-sm font-medium text-ink-200 hover:text-gold-400">
                or call {site.phone}
              </a>
            </div>
          </div>
          <div className="lg:col-span-5">
            <HeroForm />
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="border-b border-ink-800 bg-ink-900">
        <div className="container-x grid grid-cols-2 gap-6 py-8 sm:grid-cols-4">
          {[
            { icon: ShieldCheck, label: "Fully insured" },
            { icon: Truck, label: "Free local delivery" },
            { icon: Star, label: "5-star concierge" },
            { icon: Car, label: "40+ vehicles" },
          ].map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-3">
              <Icon className="h-5 w-5 text-gold-500" />
              <span className="text-sm font-medium text-ink-100">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED FLEET */}
      <section className="border-b border-ink-800 py-16 sm:py-20">
        <div className="container-x">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeader
              eyebrow="Featured Fleet"
              title="Hand-picked from our showroom"
              description="A curated selection from over 40 exotic, luxury, and classic vehicles in our Westbury showroom. Every car is meticulously detailed and mechanically inspected before each rental."
            />
            <Link href="/fleet" className="btn-ghost shrink-0">
              View all vehicles
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((v, i) => (
              <VehicleCard key={v.slug} vehicle={v} priority={i < 3} />
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="border-b border-ink-800 py-16 sm:py-20" id="services">
        <div className="container-x">
          <SectionHeader
            eyebrow="What we do"
            title="More than a rental — a production"
            description="From the perfect wedding arrival to a magazine-grade photo shoot, we&rsquo;ve done it for over a decade. Tell us the occasion; we&rsquo;ll handle the rest."
          />
          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Calendar,
                title: "Weddings & Events",
                body: "Rolls-Royce arrivals, Bentley send-offs, multi-car bridal parties. White-glove timing — we coordinate with your planner so it&rsquo;s seamless.",
              },
              {
                icon: Wand2,
                title: "Photography & Film",
                body: "Indoor studios in Nassau and western Suffolk. Music videos, fashion editorials, commercials, social content — we&rsquo;ve done it all.",
              },
              {
                icon: Star,
                title: "Birthdays & Anniversaries",
                body: "Surprise the car enthusiast in your life. Same-day delivery available, bow optional. Photo & video memento packages on request.",
              },
              {
                icon: Truck,
                title: "Delivery & Concierge",
                body: "Door-to-door across Long Island, NYC, the Hamptons, and the tri-state. Pickup at airports, hotels, marinas, or your driveway.",
              },
              {
                icon: ShieldCheck,
                title: "Corporate & Executive",
                body: "Visiting clients deserve more than a sedan. Multi-day exotic and luxury programs for executives, conferences, and brand activations.",
              },
              {
                icon: Car,
                title: "Prom & Sweet 16",
                body: "Hourly bookings for the entrance of the night. Insured chauffeur option for under-25 drivers.",
              },
            ].map(({ icon: Icon, title, body }) => (
              <div key={title} className="card p-6">
                <Icon className="h-5 w-5 text-gold-500" />
                <h3 className="mt-4 font-display text-xl text-ink-50">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-300" dangerouslySetInnerHTML={{ __html: body }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="border-b border-ink-800 bg-ink-900 py-16 sm:py-20">
        <div className="container-x grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="relative aspect-[5/4] overflow-hidden rounded">
            <Image
              src={vehicles[5].hero}
              alt="Rolls-Royce Cullinan for rent at Long Island Exotic Cars"
              fill
              sizes="(min-width:1024px) 50vw, 95vw"
              className="object-cover"
            />
          </div>
          <div>
            <SectionHeader
              eyebrow="Why LIEC"
              title="Long Island&rsquo;s most trusted exotic garage."
              description="We&rsquo;ve been turning automotive dreams into reality since 2009. The difference isn&rsquo;t just the badges in our lineup — it&rsquo;s the obsessive prep, the local knowledge, and a team that actually picks up the phone."
            />
            <dl className="mt-8 grid grid-cols-2 gap-6">
              {[
                { k: "15+", v: "years in business" },
                { k: "40+", v: "vehicles in fleet" },
                { k: "100%", v: "insured rentals" },
                { k: "Tri-state", v: "delivery coverage" },
              ].map((s) => (
                <div key={s.v} className="rounded border border-ink-700 bg-ink-950 p-5">
                  <dt className="font-display text-3xl text-gold-400">{s.k}</dt>
                  <dd className="mt-1 text-sm text-ink-300">{s.v}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/about" className="btn-ghost">
                About our garage
              </Link>
              <Link href="#book" className="btn-primary">
                Reserve now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE AREAS */}
      <section className="border-b border-ink-800 py-16 sm:py-20">
        <div className="container-x">
          <SectionHeader
            eyebrow="Service area"
            title="Delivered across Long Island, NYC & the Hamptons"
            description="Our home is Westbury, Nassau County — and our drivers know every shortcut from there to wherever you need the car staged."
          />
          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {site.serviceAreas.map((a) => (
              <div key={a} className="rounded border border-ink-700 bg-ink-900 px-4 py-3 text-sm">
                <MapPin className="mr-2 inline h-4 w-4 text-gold-500" />
                {a}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-b border-ink-800 bg-ink-900 py-16 sm:py-20">
        <div className="container-x grid grid-cols-1 gap-10 lg:grid-cols-3">
          <div>
            <SectionHeader
              eyebrow="FAQ"
              title="Common questions"
              description="Quick answers — the rest, we&rsquo;ll happily walk you through on the phone."
            />
            <Link href="/contact" className="btn-ghost mt-6 inline-flex">
              Ask us anything
            </Link>
          </div>
          <div className="lg:col-span-2 space-y-3">
            {faqs.map((f) => (
              <details key={f.q} className="group rounded border border-ink-700 bg-ink-950 p-5 open:border-gold-600/60">
                <summary className="cursor-pointer list-none font-display text-lg text-ink-50 marker:hidden flex items-center justify-between gap-4">
                  {f.q}
                  <span className="rounded border border-ink-600 px-1.5 text-ink-400 group-open:rotate-45 transition">+</span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-ink-300">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20">
        <div className="container-x">
          <div className="rounded border border-gold-600/40 bg-gradient-to-br from-ink-900 to-ink-950 p-8 sm:p-12">
            <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
              <div>
                <p className="eyebrow">Ready when you are</p>
                <h2 className="mt-3 font-display text-3xl text-ink-50 sm:text-4xl text-balance">
                  Let&rsquo;s put the right key in your hand.
                </h2>
                <p className="mt-3 max-w-2xl text-ink-300">
                  Call, text, or send the form — a specialist responds in under an hour during business hours.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <a href={site.phoneHref} className="btn-primary">
                  Call {site.phone}
                </a>
                <Link href="#book" className="btn-ghost">
                  Send a request
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Script
        id="ld-faq"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
