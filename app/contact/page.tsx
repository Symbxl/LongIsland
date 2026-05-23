import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { HeroForm } from "@/components/HeroForm";
import { site } from "@/lib/site";

export const metadata = {
  title: "Contact — Westbury, Long Island Showroom",
  description: `Call ${site.phone}, email ${site.email}, or visit our Westbury showroom. Open 7 days a week.`,
};

export default function ContactPage() {
  return (
    <div className="border-b border-ink-800">
      <section className="container-x py-14 sm:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <SectionHeader
              eyebrow="Contact"
              title="Talk to a real person."
              description="Call or text the showroom directly. We respond to web requests within one business hour, every day we&rsquo;re open."
            />

            <ul className="mt-8 space-y-5 text-base">
              <li className="flex items-start gap-4">
                <span className="grid h-10 w-10 place-items-center rounded border border-ink-700 bg-ink-900">
                  <Phone className="h-4 w-4 text-gold-500" />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-widest text-ink-400">Phone</p>
                  <a href={site.phoneHref} className="text-lg text-ink-50 hover:text-gold-400">
                    {site.phone}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="grid h-10 w-10 place-items-center rounded border border-ink-700 bg-ink-900">
                  <Mail className="h-4 w-4 text-gold-500" />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-widest text-ink-400">Email</p>
                  <a href={site.emailHref} className="text-lg text-ink-50 hover:text-gold-400">
                    {site.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="grid h-10 w-10 place-items-center rounded border border-ink-700 bg-ink-900">
                  <MapPin className="h-4 w-4 text-gold-500" />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-widest text-ink-400">Showroom</p>
                  <p className="text-lg text-ink-50">
                    {site.address.street}
                    <br />
                    {site.address.city}, {site.address.region} {site.address.postal}
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="grid h-10 w-10 place-items-center rounded border border-ink-700 bg-ink-900">
                  <Clock className="h-4 w-4 text-gold-500" />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-widest text-ink-400">Hours</p>
                  <ul className="text-sm text-ink-200">
                    {site.hours.map((h) => (
                      <li key={h.day}>
                        <span className="text-ink-50">{h.day}</span> · {h.time}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <HeroForm />
          </div>
        </div>

        <div className="mt-14 overflow-hidden rounded border border-ink-700">
          <iframe
            title="Long Island Exotic Cars location"
            src="https://www.google.com/maps?q=1025+Old+Country+Road,+Westbury,+NY+11590&output=embed"
            width="100%"
            height="420"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="block bg-ink-900"
          />
        </div>
      </section>
    </div>
  );
}
