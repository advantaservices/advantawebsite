export type ServiceNavItem = {
  label: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
  blurb: string;
  navBlurb?: string;
  points: readonly string[];
};

export const ELECTRICAL_NAV_LINKS = [
  {
    label: "Rewires",
    href: "/electrical/rewires",
    imageSrc: "/advanta/photos/electrical/rewire-trunking.webp",
    imageAlt: "Trunking and first-fix cabling during a rewire",
    blurb:
      "Full and partial rewires for houses and renovations around Spalding and Peterborough. First fix, a new consumer unit where it is part of the job, and a certificate at the end.",
    navBlurb: "Full and partial rewires, tested and certified.",
    points: ["Whole-house and partial rewires", "Consumer unit included where needed", "Tested and certified", "Occupied houses planned around access"],
  },
  {
    label: "Fuseboards",
    href: "/electrical/fuseboards",
    imageSrc: "/advanta/photos/electrical/fuseboard-hager.webp",
    imageAlt: "Hager consumer unit second fix",
    blurb:
      "Replacing tired fuseboards with a modern RCBO consumer unit. Circuits labelled, the board tested, and a certificate when the changeover is done.",
    navBlurb: "A modern RCBO board, labelled and certified.",
    points: ["RCBO consumer units, including Hager", "Rewireable fuses replaced", "Power-off time agreed first", "Certificate with the finished board"],
  },
  {
    label: "EICR testing",
    href: "/electrical/eicr",
    imageSrc: "/advanta/photos/electrical/eicr-old-board.webp",
    imageAlt: "Older consumer unit opened during an EICR",
    blurb:
      "EICR testing for homeowners and landlords. A written report with C1, C2, C3 and FI codes, explained in plain language, plus a quote for anything that needs putting right.",
    navBlurb: "A written report for homes, rentals and sales.",
    points: ["Homes, rentals and sales", "Fixed wiring, not portable appliances", "Coded observations you can pass on", "Remedial work quoted separately"],
  },
  {
    label: "Lighting",
    href: "/electrical/lighting",
    imageSrc: "/advanta/photos/electrical/showroom-lighting.webp",
    imageAlt: "Commercial showroom lighting installation",
    blurb:
      "Indoor and outdoor lighting for houses and commercial rooms. Pendants, LED handrails, media walls, patio lights, showroom track and warehouse floods.",
    navBlurb: "Indoor and outdoor lighting for homes and sites.",
    points: ["Homes and commercial fit-outs", "Indoor and outdoor", "Positions agreed before second fix", "Extra lights without a full rewire where the circuit allows"],
  },
  {
    label: "EV charging",
    href: "/electrical/ev-charging",
    imageSrc: "/advanta/photos/electrical/ev-rolec.webp",
    imageAlt: "Rolec home EV charger on a brick cottage",
    blurb:
      "Home EV charger installation, including Rolec, on its own circuit from the consumer unit. We look at the supply and the parking spot before we give a price.",
    navBlurb: "A home charger on its own circuit from the board.",
    points: ["Dedicated circuit and outdoor isolation", "Rolec and other common domestic chargers", "Photos of the board and the wall to start", "Load advice if the supply is tight"],
  },
  {
    label: "Installations",
    href: "/electrical/installations",
    imageSrc: "/advanta/photos/electrical/plant-room.webp",
    imageAlt: "Commercial plant room panel and cable tray during an installation",
    blurb: "New circuits and alterations for houses, commercial rooms and agricultural buildings.",
    points: ["Domestic, commercial and agricultural", "New circuits and alterations", "Planned around the existing board", "Certified where the work needs it"],
  },
  {
    label: "Sockets",
    href: "/electrical/sockets",
    imageSrc: "/advanta/photos/electrical/workshop-sockets.webp",
    imageAlt: "Double sockets and a surface socket in a workshop",
    blurb: "Additional sockets for kitchens, workshops and rooms that have run out of places to plug in.",
    points: ["Single extra sockets", "Kitchens and workshops", "New circuit when the existing one cannot take it", "Tested before we leave"],
  },
  {
    label: "Three-phase",
    href: "/electrical/three-phase",
    imageSrc: "/advanta/photos/electrical/three-phase-board.webp",
    imageAlt: "Three-phase consumer unit wiring",
    blurb: "Three-phase boards and supplies for workshops, farms and commercial buildings.",
    points: ["Workshops and farms", "Machinery supplies", "Checked against the incoming supply", "Tested and certified"],
  },
  {
    label: "Fault finding",
    href: "/electrical/fault-finding",
    imageSrc: "/advanta/photos/electrical/eicr-burnt-socket.webp",
    imageAlt: "Burnt socket found during fault finding",
    blurb: "Tripping circuits, dead sockets and faults found on an EICR. We find the cause, then repair it.",
    points: ["Tripping circuits", "Failed sockets and lights", "Cause found before parts are changed", "A price before the repair"],
  },
  {
    label: "Outbuildings",
    href: "/electrical/outbuildings",
    imageSrc: "/advanta/photos/electrical/outdoor-patio.webp",
    imageAlt: "Outside of a house at night",
    blurb: "Power supplies for garages, workshops and outbuildings, from the consumer unit.",
    points: ["Garages and workshops", "Agricultural outbuildings", "Armoured cable outside", "Sockets and lighting in the building"],
  },
  {
    label: "PAT testing",
    href: "/electrical/pat-testing",
    imageSrc: "/advanta/photos/electrical/pat-testing.webp",
    imageAlt: "PAT tester and labelled extension lead during portable appliance testing",
    blurb: "PAT testing of portable appliances, with a written record of what passed and what failed.",
    points: ["Portable appliances and leads", "Workshops and commercial rooms", "Pass and fail recorded", "Separate from an EICR"],
  },
  {
    label: "Intruder alarms",
    href: "/electrical/alarms",
    imageSrc: "/advanta/photos/electrical/fuseboard-hager.webp",
    imageAlt: "Consumer unit supplying electrical circuits",
    blurb: "Intruder alarms for houses and commercial rooms, new systems and repairs.",
    points: ["Houses and commercial rooms", "New systems", "Repairs to existing alarms", "Supply included"],
  },
  {
    label: "CCTV",
    href: "/electrical/cctv",
    imageSrc: "/advanta/photos/electrical/outdoor-patio.webp",
    imageAlt: "Outside of a house at night",
    blurb: "CCTV for homes and commercial sites, aimed where the picture is actually useful.",
    points: ["Houses and commercial sites", "Positions agreed first", "Cabling and power included", "Separate from intruder alarms"],
  },
] as const satisfies readonly ServiceNavItem[];

export const ELECTRICAL_DROPDOWN_LINKS = ELECTRICAL_NAV_LINKS.slice(0, 5);

export const CLIMATE_NAV_LINKS = [
  {
    label: "Installation",
    href: "/air-conditioning/installations",
    imageSrc: "/advanta/photos/climate/fujitsu-living-room.webp",
    imageAlt: "Fujitsu indoor air-conditioning unit in a living room",
    blurb:
      "Domestic and commercial air conditioning. Single and multi-split systems. Most new systems carry a 5-year warranty.",
    navBlurb: "Single and multi-split, with a 5-year warranty.",
    points: ["Domestic and commercial", "Single and multi-split", "Electrics included", "5-year warranty on most systems"],
  },
  {
    label: "Servicing",
    href: "/air-conditioning/servicing",
    imageSrc: "/advanta/photos/climate/service-charging.webp",
    imageAlt: "Outdoor air-conditioning unit being serviced",
    blurb: "Servicing and maintenance for systems we installed and for plant already on the wall.",
    navBlurb: "A service for new installs and existing systems.",
    points: ["Filters, coils and refrigerant checks", "Planned visits for commercial sites", "Systems we did not install", "A note of anything close to failing"],
  },
  {
    label: "Repairs",
    href: "/air-conditioning/repairs",
    imageSrc: "/advanta/photos/climate/repair-outdoor-board.webp",
    imageAlt: "Outdoor air-conditioning unit opened for a repair",
    blurb: "Fault finding and repairs when a system has stopped cooling, is leaking, or is noisy.",
    navBlurb: "Repairs when a system stops cooling or leaks.",
    points: ["No cooling or heating", "Leaks and noisy units", "Diagnose before parts are ordered", "We say if replacement is the better job"],
  },
  {
    label: "Replacements",
    href: "/air-conditioning/replacements",
    imageSrc: "/advanta/photos/climate/replacement-indoor-unit.webp",
    imageAlt: "Indoor air-conditioning unit in a commercial room",
    blurb: "Replacement and upgrade of existing air conditioning, domestic and commercial.",
    navBlurb: "Replacing an old or failed air-con system.",
    points: ["Old or failed systems", "Like-for-like or an upgrade", "Old plant removed", "5-year warranty on most new systems"],
  },
] as const satisfies readonly ServiceNavItem[];

export const PRIMARY_NAV_LINKS = [
  { label: "Gallery", href: "/gallery" },
  { label: "About", href: "/about" },
  { label: "Areas", href: "/areas" },
  { label: "Contact", href: "/contact" },
] as const;
