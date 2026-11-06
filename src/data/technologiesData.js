export const technologiesData = [
  {
    id: "hmfasttrack",
    name: "HM FASTTRACK",
    badge: "ENERGY AND PETROLEUM TECH",
    tagline: "Match Reservoir Models In One Run",
    description:
      "HM FastTrack is an AI-powered, physics-guided history matching and reservoir simulation optimization platform engineered by DexterPro Technology. It automatically calibrates reservoir models against real field production, bottom-hole pressure, and fractional water cuts, turning months of simulation runs into automated, audit-ready subsurface forecasts.",
    websiteUrl: "https://hmfasttrack.com",
    logo: "/images/technologies/hmfasttrack/logo.svg",
    mockup: "/images/technologies/hmfasttrack/pressure-match-mockup.svg",
    stats: [
      {
        value: "11",
        label: "DoE Algorithms",
        sub: "Taguchi and Latin Hypercube",
      },
      {
        value: "CatBoost",
        label: "AI PV Recommender",
        sub: "Automated Pressure Tuning",
      },
      {
        value: "< 4 hrs",
        label: "Convergence Time",
        sub: "10x Faster Realizations",
      },
      {
        value: "P10 / P90",
        label: "Monte Carlo",
        sub: "Probabilistic Uncertainty",
      },
    ],
    features: [
      "Automated dual-file time harmonization across observation and production wells",
      "Fractional water cut (FWCT) and total water (FWPT) matching via XGBoost surrogates",
      "Tornado sensitivity ranking to isolate high-impact geological levers",
      "Physics-consistent multipliers ensuring static geological integrity remains intact",
    ],
  },
];
