import Link from "next/link";
import Image from "next/image";
import { Calendar, Wand2, Star, Truck, ShieldCheck, Car } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { vehicles } from "@/lib/fleet";
import { site } from "@/lib/site";

export const metadata = {
  title: "Services — Weddings, Events, Film & Concierge",
  description:
    "Wedding cars, prom drop-offs, music videos, photo shoots, corporate transport and concierge delivery across Long Island, NYC, and the Hamptons.",
};

const services = [
  {
    icon: Calendar,
    title: "Weddings",
    body:
      "Rolls-Royce arrivals, Bentley send-offs, and multi-car bridal party packages. We coordinate timing with your planner and arrive 30 minutes early — every time.",
    bullets: ["Rolls-Royce Cullinan, Ghost & Phantom", "Bentley Continental & Bentayga", "Multi-car packages", "Ribbon & detailing options"],
  },
  {
    icon: Wand2,
    title: "Film & Photography",
    body:
      "Indoor studios in Nassau and western Suffolk. Production-ready vehicles for music videos, fashion editorials, commercials, and brand content.",
    bullets: ["Studio partnerships", "Wraps & detail prep", "Multi-day holds", "Insured for production"],
  },
  {
    icon: Star,
    title: "Birthdays & Anniversaries",
    body:
      "Surprise the car enthusiast in your life. Same-day delivery available, bow optional. Photo and video memento packages on request.",
    bullets: ["Same-day delivery", "Bow & balloons", "Photo/video add-on", "Hourly bookings"],
  },
  {
    icon: Truck,
    title: "Delivery & Concierge",
    body:
      "Door-to-door across Long Island, NYC, the Hamptons, and the tri-state. Pickup at airports (JFK, LGA, ISP), hotels, marinas, or your driveway.",
    bullets: ["JFK, LGA, ISP airport drops", "Hamptons & Montauk", "Manhattan hotels", "24/7 hand-off"],
  },
  {
    icon: ShieldCheck,
    title: "Corporate Programs",
    body:
      "Visiting clients deserve more than a sedan. Multi-day exotic and luxury programs for executives, conferences, and brand activations.",
    bullets: ["Net-30 billing available", "Multi-vehicle accounts", "Branded delivery", "NDA on request"],
  },
  {
    icon: Car,
    title: "Prom & Sweet 16",
    body:
      "Hourly bookings for the entrance of the night. Insured chauffeur option for under-25 drivers.",
    bullets: ["Hourly rates", "Chauffeur for under-25", "Group coordination", "Parent-on-file booking"],
  },
];

export default function ServicesPage() {
  return (
    <div className="border-b border-ink-800">
      <section className="container-x py-14 sm:py-20">
        <SectionHeader
          eyebrow="Services"
          title="What we do, beyond renting cars."
          description="For 15 years we&rsquo;ve been the call that planners, photographers, and grooms make when an ordinary car won&rsquo;t do. Here&rsquo;s how we work."
        />

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, body, bullets }) => (
            <div key={title} className="card flex flex-col p-6">
              <Icon className="h-5 w-5 text-gold-500" />
              <h3 className="mt-4 font-display text-xl text-ink-50">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-300">{body}</p>
              <ul className="mt-4 space-y-1.5 text-sm text-ink-200">
                {bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2">
                    <span className="mt-2 h-1 w-1 rounded-full bg-gold-500" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <div className="relative aspect-[5/4] overflow-hidden rounded">
            <Image
              src={vehicles[6].hero}
              alt="Rolls-Royce Ghost Black Badge for weddings on Long Island"
              fill
              sizes="(min-width:1024px) 50vw, 95vw"
              className="object-cover"
            />
          </div>
          <div>
            <SectionHeader eyebrow="Talk to a specialist" title="Tell us the date — we&rsquo;ll handle the rest." />
            <p className="mt-4 text-ink-300">
              Every event is different. Call <a className="text-gold-400 hover:underline" href={site.phoneHref}>{site.phone}</a>{" "}
              or email <a className="text-gold-400 hover:underline" href={site.emailHref}>{site.email}</a> and a real human will get you a quote within the hour.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/#book" className="btn-primary">Request a quote</Link>
              <Link href="/fleet" className="btn-ghost">Browse the fleet</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
