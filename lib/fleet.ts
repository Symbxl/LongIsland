export type Vehicle = {
  slug: string;
  make: string;
  model: string;
  year?: number;
  category: "sports" | "luxury" | "suv" | "convertible" | "classic";
  tier: "exotic" | "luxury" | "premium";
  hero: string;
  gallery: string[];
  blurb: string;
  specs: { label: string; value: string }[];
  bestFor: string[];
};

const IMG = "https://longislandexoticcars.com/wp-content/uploads";

export const vehicles: Vehicle[] = [
  {
    slug: "lamborghini-urus",
    make: "Lamborghini",
    model: "Urus",
    category: "suv",
    tier: "exotic",
    hero: `${IMG}/2026/03/Lamborghini-Urus-Black-For-Rent-Long-Island-Exotic-Cars-Main-Side1.jpeg`,
    gallery: [
      `${IMG}/2026/03/Lamborghini-Urus-Black-For-Rent-Long-Island-Exotic-Cars-Main-Side1.jpeg`,
      `${IMG}/2026/03/Lamborghini-Urus-Black-For-Rent-Long-Island-Exotic-Cars-Main-Rear.jpeg`,
      `${IMG}/2026/03/Lamborghini-Urus-Black-For-Rent-Long-Island-Exotic-Cars-Main-Dront.jpeg`,
      `${IMG}/2026/03/Lamborghini-Urus-Black-For-Rent-Long-Island-Exotic-Cars-Interior.jpeg`,
      `${IMG}/2026/03/Lamborghini-Urus-Black-For-Rent-Long-Island-Exotic-Cars-Interior-2.jpeg`,
      `${IMG}/2026/03/Lamborghini-Urus-Black-For-Rent-Long-Island-Exotic-Cars-Center-Console.jpeg`,
      `${IMG}/2026/03/Lamborghini-Urus-Black-For-Rent-Long-Island-Exotic-Steering-Wheel-Main.jpeg`,
      `${IMG}/2026/03/Lamborghini-Urus-Black-For-Rent-Long-Island-Exotic-Cars-BackSeats.jpeg`,
    ],
    blurb:
      "The world's most powerful super SUV. 641 hp twin-turbo V8, four-wheel drive, and Lamborghini DNA — equally at home on the Long Island Expressway or pulling up to a Hamptons gala.",
    specs: [
      { label: "Engine", value: "4.0L Twin-Turbo V8" },
      { label: "Horsepower", value: "641 hp" },
      { label: "0–60 mph", value: "3.1 sec" },
      { label: "Seats", value: "5" },
    ],
    bestFor: ["Weddings", "Group nights out", "Hamptons weekends", "Photo shoots"],
  },
  {
    slug: "lamborghini-huracan-evo-spyder",
    make: "Lamborghini",
    model: "Huracán EVO Spyder",
    category: "convertible",
    tier: "exotic",
    hero: `${IMG}/2026/03/Lamborghini-Evo-Soyder-Verdi-Mathis-For-Rent-Long-Island-Exotic-Cars-Main.jpeg`,
    gallery: [
      `${IMG}/2026/03/Lamborghini-Evo-Soyder-Verdi-Mathis-For-Rent-Long-Island-Exotic-Cars-Main.jpeg`,
      `${IMG}/2026/03/Lamborghini-Evo-Soyder-Verdi-Mathis-For-Rent-Long-Island-Exotic-Cars-Side-Coupe.jpeg`,
      `${IMG}/2026/03/Lamborghini-Hurcan-Evo-Verde-Mathis-for-Rent-Long-Island-exotic-cars-Rear.jpg`,
      `${IMG}/2026/03/Lamborghini-Evo-Soyder-Verdi-Mathis-For-Rent-Long-Island-Exotic-Cars-Interior.jpeg`,
      `${IMG}/2026/03/Lamborghini-Evo-Soyder-Verdi-Mathis-For-Rent-Long-Island-Exotic-Cars-Streeing-Wheel.jpeg`,
      `${IMG}/2026/03/Lamborghini-Evo-Soyder-Verdi-Mathis-For-Rent-Long-Island-Exotic-Cars-Front.jpeg`,
    ],
    blurb:
      "Verde Mantis green, naturally aspirated 5.2L V10, top down. The Huracán EVO Spyder turns every coastal cruise into a headline event.",
    specs: [
      { label: "Engine", value: "5.2L V10" },
      { label: "Horsepower", value: "631 hp" },
      { label: "0–60 mph", value: "3.1 sec" },
      { label: "Top", value: "Soft convertible" },
    ],
    bestFor: ["Bachelor parties", "Weekend cruises", "Music videos", "Birthdays"],
  },
  {
    slug: "ferrari-roma",
    make: "Ferrari",
    model: "Roma",
    category: "sports",
    tier: "exotic",
    hero: `${IMG}/2026/03/Ferrari-Roma-For-Rent-From-Long-Island-Exotic-Cars-Main.jpeg`,
    gallery: [
      `${IMG}/2026/03/Ferrari-Roma-For-Rent-From-Long-Island-Exotic-Cars-Main.jpeg`,
      `${IMG}/2026/03/Ferrari-Roma-For-Rent-Long-Island-Exotic-Cars-Front-1.jpeg`,
      `${IMG}/2026/03/Ferrari-Roma_for_Rent-Long-Island-Exotic-Cars-Front-Side.jpeg`,
      `${IMG}/2026/03/Ferrari-Roma_for_Rent-Long-Island-Exotic-Cars-Interior.jpeg`,
      `${IMG}/2026/03/Ferrari-Roma_for_Rent-Long-Island-Exotic-Cars-Steering-Wheel.jpeg`,
      `${IMG}/2026/03/Ferrari-Roma_for_Rent-Long-Island-Exotic-Cars-Infotainment.jpeg`,
    ],
    blurb:
      "La Nuova Dolce Vita. Ferrari's elegant GT pairs a 612 hp twin-turbo V8 with the most refined Ferrari cabin ever made — sculptural, fast, and surprisingly daily-drivable.",
    specs: [
      { label: "Engine", value: "3.9L Twin-Turbo V8" },
      { label: "Horsepower", value: "612 hp" },
      { label: "0–60 mph", value: "3.4 sec" },
      { label: "Seats", value: "2+2" },
    ],
    bestFor: ["Anniversaries", "Date nights", "Corporate events", "Hamptons trips"],
  },
  {
    slug: "ferrari-488-spider",
    make: "Ferrari",
    model: "488 Spider",
    category: "convertible",
    tier: "exotic",
    hero: `${IMG}/2024/04/Ferrari-488-Spider-For-Rent-Long-Island-Exotic-Cars.webp`,
    gallery: [
      `${IMG}/2024/04/Ferrari-488-Spider-For-Rent-Long-Island-Exotic-Cars.webp`,
      `${IMG}/2024/04/Ferrari-488-Spider-For-Rent-Long-Island-Exotic-Cars1.webp`,
      `${IMG}/2024/04/Ferrari-488-Spider-For-Rent-Long-Island-Exotic-Cars4.webp`,
      `${IMG}/2024/04/Ferrari-488-Spider3-For-Rent-Long-Island-Exotic-Cars.webp`,
      `${IMG}/2024/04/Ferrari-448-Spider-For-Rent-Long-Island-Exotic-Cars2.webp`,
    ],
    blurb:
      "Open-air Maranello. The 488 Spider drops its roof in 14 seconds to reveal a 661 hp twin-turbo V8 — one of the great convertible Ferraris of the modern era.",
    specs: [
      { label: "Engine", value: "3.9L Twin-Turbo V8" },
      { label: "Horsepower", value: "661 hp" },
      { label: "0–60 mph", value: "3.0 sec" },
      { label: "Top", value: "Retractable hardtop" },
    ],
    bestFor: ["Weddings", "Photo & video shoots", "Birthdays"],
  },
  {
    slug: "mclaren-720s",
    make: "McLaren",
    model: "720S",
    category: "sports",
    tier: "exotic",
    hero: `${IMG}/2024/04/White-McLaren-720s-For-Rent-Long-Island-Exotic-Cars.jpg`,
    gallery: [
      `${IMG}/2024/04/White-McLaren-720s-For-Rent-Long-Island-Exotic-Cars.jpg`,
      `${IMG}/2024/04/White-Mclaren-720s-For-Rent-Long-Island-Exotic-Cars2.jpg`,
      `${IMG}/2024/04/White-Mclaren-720s-For-Rent-Long-Island-Exotic-Cars3.jpg`,
      `${IMG}/2024/04/Screenshot-2024-01-30-at-8.21.24 PM.jpg`,
    ],
    blurb:
      "Carbon-fiber monocoque, dihedral doors, and a 710 hp twin-turbo V8. The 720S is what happens when a Formula 1 team builds a road car.",
    specs: [
      { label: "Engine", value: "4.0L Twin-Turbo V8" },
      { label: "Horsepower", value: "710 hp" },
      { label: "0–60 mph", value: "2.8 sec" },
      { label: "Top Speed", value: "212 mph" },
    ],
    bestFor: ["Track days", "Photo shoots", "Statement arrivals"],
  },
  {
    slug: "rolls-royce-cullinan",
    make: "Rolls-Royce",
    model: "Cullinan",
    category: "suv",
    tier: "exotic",
    hero: `${IMG}/2024/04/Rolls-Royce-Cullian-For-Rent-Long-Island-Exotic-Cars-1.png`,
    gallery: [
      `${IMG}/2024/04/Rolls-Royce-Cullian-For-Rent-Long-Island-Exotic-Cars-1.png`,
      `${IMG}/2024/04/Rolls-Royce-Cullian-For-Rent-Long-Island-Exotic-Cars-2.png`,
      `${IMG}/2024/04/Rolls-Royce-Cullian-For-Rent-Long-Island-Exotic-Cars-3.png`,
      `${IMG}/2024/04/Rolls-Royce-Cullian-Interior-For-Rent-Long-Island-Exotic-Cars-1.png`,
    ],
    blurb:
      "The most luxurious SUV on earth. Hand-finished leather, lambswool floor mats, and a 563 hp V12 that whispers. The Cullinan is the only Rolls-Royce built for any road.",
    specs: [
      { label: "Engine", value: "6.75L Twin-Turbo V12" },
      { label: "Horsepower", value: "563 hp" },
      { label: "0–60 mph", value: "5.0 sec" },
      { label: "Seats", value: "5" },
    ],
    bestFor: ["Weddings", "Executive transport", "Hamptons weekends"],
  },
  {
    slug: "rolls-royce-ghost-black-badge",
    make: "Rolls-Royce",
    model: "Ghost Black Badge",
    category: "luxury",
    tier: "exotic",
    hero: `${IMG}/2024/05/Rolls-Royce-Ghost-Black-Badge-Edition-Front-scaled.jpg`,
    gallery: [
      `${IMG}/2024/05/Rolls-Royce-Ghost-Black-Badge-Edition-Front-scaled.jpg`,
      `${IMG}/2024/05/Rolls-Royce-Ghost-Black-Badge-Edition-Side-View-scaled.jpg`,
    ],
    blurb:
      "The darker, faster Ghost. Murdered-out chrome, 591 hp twin-turbo V12, and the magic-carpet ride that only Rolls-Royce delivers.",
    specs: [
      { label: "Engine", value: "6.75L Twin-Turbo V12" },
      { label: "Horsepower", value: "591 hp" },
      { label: "0–60 mph", value: "4.5 sec" },
      { label: "Seats", value: "5" },
    ],
    bestFor: ["Weddings", "Proms", "Music videos", "Executive events"],
  },
  {
    slug: "bentley-continental-gt",
    make: "Bentley",
    model: "Continental GT",
    category: "sports",
    tier: "exotic",
    hero: `${IMG}/2024/04/Bentley-Continental-For-Rent-Long-Island-Exotic-Cars.jpg`,
    gallery: [
      `${IMG}/2024/04/Bentley-Continental-For-Rent-Long-Island-Exotic-Cars.jpg`,
      `${IMG}/2024/04/Bentley-Continental-For-Rent-Long-Island-Exotic-Cars1.jpg`,
      `${IMG}/2024/04/Bentley-Continental-For-Rent-Long-Island-Exotic-Cars2.jpeg`,
      `${IMG}/2024/04/Bentley-Continental-For-Rent-Long-Island-Exotic-Cars3.jpeg`,
    ],
    blurb:
      "Hand-crafted in Crewe, England. Diamond-knurled metalwork, twin-turbo W12 power, and the perfect grand-touring posture for the LIE or the Atlantic Beach Bridge.",
    specs: [
      { label: "Engine", value: "6.0L Twin-Turbo W12" },
      { label: "Horsepower", value: "626 hp" },
      { label: "0–60 mph", value: "3.6 sec" },
      { label: "Seats", value: "4" },
    ],
    bestFor: ["Weddings", "Anniversaries", "Corporate"],
  },
  {
    slug: "aston-martin-db11-volante",
    make: "Aston Martin",
    model: "DB11 Volante",
    category: "convertible",
    tier: "exotic",
    hero: `${IMG}/2024/10/Aston-Martin-DB11-Volante-Black-Main-New-scaled-700x400.jpg`,
    gallery: [
      `${IMG}/2024/10/Aston-Martin-DB11-Volante-Black-Main-New-scaled-700x400.jpg`,
      `${IMG}/2024/10/Aston-Martin-DB11-Volante-Black-Main-1-scaled-700x400.jpg`,
      `${IMG}/2024/10/Aston-Martin-DB11-Volante-Black-Rear-1-scaled-700x400.jpg`,
      `${IMG}/2024/10/Aston-Martin-DB11-Volante-Black-Interior-Main-scaled-700x400.jpg`,
      `${IMG}/2024/10/Aston-Martin-DB11-Volante-Black-Interior-1-scaled-700x400.jpg`,
    ],
    blurb:
      "British grand touring at its most cinematic. The DB11 Volante drops its eight-layer fabric roof for a 503 hp twin-turbo V8 soundtrack along the North Shore.",
    specs: [
      { label: "Engine", value: "4.0L Twin-Turbo V8" },
      { label: "Horsepower", value: "503 hp" },
      { label: "0–60 mph", value: "3.9 sec" },
      { label: "Top", value: "Fabric convertible" },
    ],
    bestFor: ["Date nights", "Cinematic shoots", "Anniversaries"],
  },
  {
    slug: "mercedes-benz-g63",
    make: "Mercedes-Benz",
    model: "G63 AMG",
    category: "suv",
    tier: "luxury",
    hero: `${IMG}/2024/05/mercedes-benz-gwagon-front-driver-side-scaled.jpeg`,
    gallery: [
      `${IMG}/2024/05/mercedes-benz-gwagon-front-driver-side-scaled.jpeg`,
      `${IMG}/2024/05/mercedes-benz-gwagon-driver-side-scaled.jpeg`,
      `${IMG}/2024/05/mercedes-benz-gwagon-driver-side-2-scaled.jpeg`,
      `${IMG}/2024/05/mercedes-benz-gwagon-front-scaled.jpeg`,
    ],
    blurb:
      "The icon. Hand-built in Graz, Austria, the G63 AMG fuses 577 hp military-grade chassis with hand-stitched Nappa leather. Unmistakable on any street.",
    specs: [
      { label: "Engine", value: "4.0L Twin-Turbo V8" },
      { label: "Horsepower", value: "577 hp" },
      { label: "0–60 mph", value: "4.4 sec" },
      { label: "Seats", value: "5" },
    ],
    bestFor: ["Groups", "Airport transport", "Hamptons", "Daily exotic"],
  },
  {
    slug: "porsche-911-carrera-s",
    make: "Porsche",
    model: "911 Carrera 4S Cabriolet",
    category: "convertible",
    tier: "exotic",
    hero: `${IMG}/2025/06/Porsche-911-4s-Cabriolet-For-Rent-Long-Island-Exotic-Cars-Main.jpg`,
    gallery: [
      `${IMG}/2025/06/Porsche-911-4s-Cabriolet-For-Rent-Long-Island-Exotic-Cars-Main.jpg`,
      `${IMG}/2025/06/Porsche-911-4s-Cabriolet-For-Rent-Long-Island-Exotic-Cars-Side-Profile.jpg`,
      `${IMG}/2025/06/Porsche-911-4s-Cabriolet-For-Rent-Long-Island-Exotic-Cars-Frontend.jpg`,
      `${IMG}/2025/06/Porsche-911-4s-Cabriolet-For-Rent-Long-Island-Exotic-Cars-Rear.jpg`,
      `${IMG}/2025/06/Porsche-911-4s-Cabriolet-For-Rent-Long-Island-Exotic-Cars-Interor-1.jpg`,
    ],
    blurb:
      "Six decades of evolution. The 992-generation 911 Carrera 4S Cabriolet pairs all-wheel-drive grip with a 443 hp flat-six — the everyday supercar.",
    specs: [
      { label: "Engine", value: "3.0L Twin-Turbo Flat-6" },
      { label: "Horsepower", value: "443 hp" },
      { label: "0–60 mph", value: "3.2 sec" },
      { label: "Top", value: "Soft convertible" },
    ],
    bestFor: ["Weekend drives", "Coastal cruises", "Anniversaries"],
  },
  {
    slug: "bmw-m5",
    make: "BMW",
    model: "M5 Competition",
    category: "luxury",
    tier: "luxury",
    hero: `${IMG}/2024/05/BMW-M5-For-Rent-Long-Island-Exotic-Cars.jpg`,
    gallery: [
      `${IMG}/2024/05/BMW-M5-For-Rent-Long-Island-Exotic-Cars.jpg`,
      `${IMG}/2024/05/BMW-M5-For-Rent-Long-Island-Exotic-Cars2.jpg`,
      `${IMG}/2024/05/m5-front-For-Rent-Long-Island-Exotic-Cars.jpeg`,
      `${IMG}/2024/05/m5-driver-front-For-Rent-Long-Island-Exotic-Cars.jpeg`,
      `${IMG}/2024/05/m5-interior-For-Rent-Long-Island-Exotic-Cars.jpeg`,
    ],
    blurb:
      "Four-door, 617 hp, all-wheel-drive lightning. The M5 Competition is the executive sedan that out-runs most supercars from the line.",
    specs: [
      { label: "Engine", value: "4.4L Twin-Turbo V8" },
      { label: "Horsepower", value: "617 hp" },
      { label: "0–60 mph", value: "3.0 sec" },
      { label: "Seats", value: "5" },
    ],
    bestFor: ["Corporate", "Groups", "Daily exotic"],
  },
];

export const categories = [
  { id: "sports", label: "Sports" },
  { id: "convertible", label: "Convertibles" },
  { id: "suv", label: "SUVs" },
  { id: "luxury", label: "Luxury Sedans" },
  { id: "classic", label: "Classics" },
] as const;
