import Image from "next/image";
import Link from "next/link";
import { SectionHeader } from "@/components/SectionHeader";
import { vehicles } from "@/lib/fleet";

export const metadata = {
  title: "About — Long Island's Trusted Exotic Garage",
  description:
    "Since 2009, Long Island Exotic Cars has been turning automotive dreams into reality. Family-owned, Westbury-based, and trusted by Long Island for weddings, events, and unforgettable weekends.",
};

export default function AboutPage() {
  return (
    <div className="border-b border-ink-800">
      <section className="container-x py-14 sm:py-20">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
          <div>
            <SectionHeader
              eyebrow="Our Story"
              title="The garage Long Island calls when ordinary won&rsquo;t do."
            />
            <div className="mt-6 space-y-5 text-base leading-relaxed text-ink-300">
              <p>
                Long Island Exotic Cars opened its doors in Westbury in 2009 with a simple idea: people
                should be able to actually <em className="text-gold-400 not-italic">drive</em> the cars they dream about — not just look at them at auto shows.
              </p>
              <p>
                Fifteen years later, we&rsquo;ve grown into one of the East Coast&rsquo;s most respected exotic
                garages. Our fleet rotates constantly, but the standard never moves: every car is hand-detailed,
                mechanically inspected, fully insured, and delivered on time.
              </p>
              <p>
                We&rsquo;ve handled hundreds of Long Island weddings, music-video shoots for major labels,
                fashion editorials, Sweet 16 entrances that made the local paper, and weekend escapes to the
                Hamptons that turned into stories families still tell.
              </p>
              <p>
                What hasn&rsquo;t changed: we&rsquo;re still family-owned, still answering the phone ourselves,
                still building the garage one obsessive detail at a time.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/fleet" className="btn-primary">See the fleet</Link>
              <Link href="/contact" className="btn-ghost">Visit the showroom</Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {[vehicles[0], vehicles[5], vehicles[6], vehicles[8]].map((v, i) => (
              <div key={v.slug} className={`relative overflow-hidden rounded ${i % 2 === 0 ? "aspect-[4/5]" : "aspect-[4/5] mt-6"}`}>
                <Image
                  src={v.hero}
                  alt={`${v.make} ${v.model} at Long Island Exotic Cars showroom`}
                  fill
                  sizes="40vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        <dl className="mt-20 grid grid-cols-2 gap-6 border-t border-ink-800 pt-12 sm:grid-cols-4">
          {[
            { k: "2009", v: "founded in Westbury" },
            { k: "40+", v: "vehicles in fleet" },
            { k: "15+", v: "years of service" },
            { k: "Tri-state", v: "delivery coverage" },
          ].map((s) => (
            <div key={s.v}>
              <dt className="font-display text-4xl text-gold-400">{s.k}</dt>
              <dd className="mt-2 text-sm text-ink-300">{s.v}</dd>
            </div>
          ))}
        </dl>
      </section>
    </div>
  );
}
