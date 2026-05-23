import { VehicleCard } from "@/components/VehicleCard";
import { SectionHeader } from "@/components/SectionHeader";
import { vehicles, categories } from "@/lib/fleet";

export const metadata = {
  title: "Fleet — Exotic, Luxury & Classic Cars for Rent",
  description:
    "Browse the complete Long Island Exotic Cars fleet — Lamborghini, Ferrari, Rolls-Royce, Bentley, McLaren, Mercedes-Maybach, BMW, Porsche, Aston Martin and more. Hand-detailed and fully insured.",
};

export default function FleetPage() {
  return (
    <div className="border-b border-ink-800">
      <section className="container-x py-14 sm:py-20">
        <SectionHeader
          eyebrow="The Fleet"
          title="Every dream car, ready when you are."
          description="Filter by class to find the right car for the moment — bachelor weekends in a Huracán, weddings in a Rolls-Royce, weekends in the Hamptons in a Bentley GT."
        />

        {categories.map((c) => {
          const list = vehicles.filter((v) => v.category === c.id);
          if (!list.length) return null;
          return (
            <div key={c.id} className="mt-14">
              <div className="flex items-center justify-between border-b border-ink-800 pb-3">
                <h2 className="font-display text-2xl text-ink-50">{c.label}</h2>
                <span className="text-xs uppercase tracking-widest text-ink-400">{list.length} vehicles</span>
              </div>
              <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {list.map((v) => (
                  <VehicleCard key={v.slug} vehicle={v} />
                ))}
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}
