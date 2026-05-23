import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { notFound } from "next/navigation";
import { ArrowLeft, Phone } from "lucide-react";
import { vehicles } from "@/lib/fleet";
import { site } from "@/lib/site";
import { HeroForm } from "@/components/HeroForm";

export function generateStaticParams() {
  return vehicles.map((v) => ({ slug: v.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const v = vehicles.find((x) => x.slug === slug);
  if (!v) return {};
  return {
    title: `${v.make} ${v.model} Rental — Long Island, NY`,
    description: `Rent the ${v.make} ${v.model} from Long Island Exotic Cars. ${v.blurb} Delivered across Nassau, Suffolk, NYC, and the Hamptons.`,
  };
}

export default async function VehiclePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const v = vehicles.find((x) => x.slug === slug);
  if (!v) return notFound();

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `${v.make} ${v.model}`,
    image: v.gallery,
    description: v.blurb,
    brand: { "@type": "Brand", name: v.make },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "USD",
      seller: { "@type": "AutoRental", name: site.name },
    },
  };

  return (
    <article className="border-b border-ink-800">
      <div className="container-x py-10 sm:py-14">
        <Link href="/fleet" className="inline-flex items-center gap-2 text-sm text-ink-300 hover:text-gold-400">
          <ArrowLeft className="h-4 w-4" /> Back to fleet
        </Link>

        <div className="mt-6 grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="relative aspect-[16/10] overflow-hidden rounded bg-ink-900">
              <Image
                src={v.hero}
                alt={`${v.make} ${v.model} for rent at ${site.name}`}
                fill
                sizes="(min-width:1024px) 60vw, 95vw"
                className="object-cover"
                priority
              />
            </div>
            {v.gallery.length > 1 && (
              <div className="mt-3 grid grid-cols-4 gap-3">
                {v.gallery.slice(1, 9).map((g, i) => (
                  <div key={g + i} className="relative aspect-[4/3] overflow-hidden rounded bg-ink-900">
                    <Image
                      src={g}
                      alt={`${v.make} ${v.model} photo ${i + 2}`}
                      fill
                      sizes="20vw"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="lg:col-span-5">
            <p className="eyebrow">{v.make}</p>
            <h1 className="mt-2 font-display text-4xl text-ink-50 sm:text-5xl text-balance">
              {v.model}
            </h1>
            <p className="mt-4 text-base leading-relaxed text-ink-200">{v.blurb}</p>

            <dl className="mt-7 grid grid-cols-2 gap-3">
              {v.specs.map((s) => (
                <div key={s.label} className="rounded border border-ink-700 bg-ink-900 p-4">
                  <dt className="text-[10px] uppercase tracking-widest text-ink-400">{s.label}</dt>
                  <dd className="mt-1 font-display text-lg text-ink-50">{s.value}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-7">
              <p className="eyebrow">Best for</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {v.bestFor.map((b) => (
                  <span key={b} className="rounded border border-ink-700 px-3 py-1 text-xs text-ink-200">
                    {b}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href={site.phoneHref} className="btn-primary">
                <Phone className="h-4 w-4" /> Call to reserve
              </a>
              <Link href="/#book" className="btn-ghost">
                Request a quote
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-10 border-t border-ink-800 pt-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 className="font-display text-2xl text-ink-50">
              Renting the {v.make} {v.model} on Long Island
            </h2>
            <div className="mt-4 space-y-4 text-base leading-relaxed text-ink-300">
              <p>
                The {v.make} {v.model} is one of the most in-demand vehicles in our Westbury showroom.
                We hand-detail every car before delivery, top it off, and walk you through every control
                so the only thing you have to think about is the drive.
              </p>
              <p>
                Long Island Exotic Cars has been the region&apos;s trusted exotic and luxury garage since 2009.
                Whether you need the {v.model} delivered to a Hamptons rental, a Manhattan hotel, or your driveway in
                Garden City — we&apos;ll stage it on time, fully fueled and inspected.
              </p>
              <p>
                Want to pair the {v.model} with another vehicle for a wedding or shoot? We routinely run multi-car
                packages — just call <a className="text-gold-400 hover:underline" href={site.phoneHref}>{site.phone}</a>{" "}
                and we&apos;ll quote it on the spot.
              </p>
            </div>
          </div>
          <div className="lg:col-span-5">
            <HeroForm />
          </div>
        </div>
      </div>
      <Script
        id="ld-product"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
    </article>
  );
}
