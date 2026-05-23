import Link from "next/link";
import Image from "next/image";
import { Phone } from "lucide-react";
import { site } from "@/lib/site";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-ink-800/80 bg-ink-950/85 backdrop-blur">
      <div className="container-x flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <Image
            src="/logo.png"
            alt="Long Island Exotic Cars"
            width={756}
            height={498}
            priority
            className="h-16 w-auto"
          />
          <span className="flex flex-col leading-tight">
            <span className="text-sm font-semibold tracking-wide text-ink-50 group-hover:text-gold-400 transition">
              Long Island Exotic Cars
            </span>
            <span className="text-[10px] uppercase tracking-[0.18em] text-gold-500">
              {site.tagline}
            </span>
          </span>
        </Link>
        <nav aria-label="Primary" className="hidden md:flex items-center gap-7">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-ink-200 hover:text-gold-400 transition"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a href={site.phoneHref} className="hidden sm:inline-flex items-center gap-2 text-sm font-medium text-ink-200 hover:text-gold-400">
            <Phone className="h-4 w-4" />
            {site.phone}
          </a>
          <Link href="/#book" className="btn-primary !py-2 !px-4">
            Book Now
          </Link>
        </div>
      </div>
    </header>
  );
}
