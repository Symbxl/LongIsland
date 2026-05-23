import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-ink-800 bg-ink-900 text-ink-200">
      <div className="container-x grid grid-cols-1 gap-10 py-14 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Long Island Exotic Cars"
              width={756}
              height={498}
              className="h-10 w-auto"
            />
            <span className="font-semibold text-ink-50">Long Island Exotic Cars</span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-300">
            Long Island&apos;s premier exotic, luxury, and classic car rental service since 2009.
            Delivery available across Nassau, Suffolk, NYC, and the Hamptons.
          </p>
        </div>
        <div>
          <h3 className="font-display text-base text-ink-50">Explore</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {site.nav.map((n) => (
              <li key={n.href}>
                <Link className="hover:text-gold-400" href={n.href}>
                  {n.label}
                </Link>
              </li>
            ))}
            <li>
              <Link className="hover:text-gold-400" href="/fleet">
                Browse the entire fleet
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-display text-base text-ink-50">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 text-gold-500" />
              <span>
                {site.address.street}
                <br />
                {site.address.city}, {site.address.region} {site.address.postal}
              </span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-gold-500" />
              <a href={site.phoneHref} className="hover:text-gold-400">
                {site.phone}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-gold-500" />
              <a href={site.emailHref} className="hover:text-gold-400">
                {site.email}
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-display text-base text-ink-50">Hours</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {site.hours.map((h) => (
              <li key={h.day} className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-gold-500" />
                <span className="text-ink-300">
                  <span className="text-ink-100">{h.day}</span> · {h.time}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-ink-800">
        <div className="container-x flex flex-col items-start justify-between gap-3 py-6 text-xs text-ink-400 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p>{site.address.city}, NY · Serving all of Long Island & NYC</p>
        </div>
      </div>
    </footer>
  );
}
