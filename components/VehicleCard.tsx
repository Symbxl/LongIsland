import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Vehicle } from "@/lib/fleet";

export function VehicleCard({ vehicle, priority = false }: { vehicle: Vehicle; priority?: boolean }) {
  return (
    <Link
      href={`/fleet/${vehicle.slug}`}
      className="card group block overflow-hidden"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-ink-800">
        <Image
          src={vehicle.hero}
          alt={`${vehicle.make} ${vehicle.model} available for rent at Long Island Exotic Cars`}
          fill
          sizes="(min-width:1280px) 25vw, (min-width:768px) 33vw, 90vw"
          className="object-cover transition duration-700 group-hover:scale-[1.04]"
          priority={priority}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-ink-950/0 to-transparent" />
        <span className="absolute left-3 top-3 rounded bg-ink-950/85 px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-gold-400">
          {vehicle.tier}
        </span>
      </div>
      <div className="flex items-start justify-between gap-3 p-4">
        <div>
          <p className="text-[11px] uppercase tracking-widest text-ink-400">{vehicle.make}</p>
          <h3 className="mt-0.5 font-display text-lg leading-tight text-ink-50">{vehicle.model}</h3>
          <p className="mt-1 line-clamp-2 text-xs text-ink-300">{vehicle.blurb}</p>
        </div>
        <span className="rounded border border-ink-700 p-1.5 text-ink-300 transition group-hover:border-gold-500 group-hover:text-gold-400">
          <ArrowUpRight className="h-4 w-4" />
        </span>
      </div>
    </Link>
  );
}
