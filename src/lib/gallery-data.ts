export type GalleryKind =
  | "commercial-lighting"
  | "domestic-lighting"
  | "outdoor-lighting"
  | "fuseboard"
  | "eicr"
  | "ev-charging"
  | "air-con-house"
  | "air-con-commercial"
  | "air-con-service";

const galleryNotes: Record<GalleryKind, string> = {
  "commercial-lighting":
    "Lighting for a showroom, gym or commercial floor. We set the fittings, wire the circuits and leave the work labelled and tested.",
  "domestic-lighting":
    "Lighting in a house, from a media wall to a landing handrail. The circuits are finished so the room can be used, then tested and left tidy.",
  "outdoor-lighting":
    "Wall lights on the outside of a house. The fittings are fixed, wired back to the property and left working.",
  fuseboard:
    "A consumer unit, second fix or a board change. Circuits are labelled and tested, and a certificate is issued where the work needs one.",
  eicr: "An existing board opened for inspection and testing. We record what we find and say clearly what needs doing.",
  "ev-charging":
    "A home charger on its own circuit. We check the supply can take it, then fit and test the unit.",
  "air-con-house":
    "Air conditioning on a house, indoors or on the outside wall. Pipework is run, the system is commissioned, and most new installs carry a 5-year warranty.",
  "air-con-commercial":
    "Commercial air conditioning, often several outdoor units or a larger system. We install, commission and leave the plant labelled.",
  "air-con-service":
    "A service visit on an existing unit. We check the system, record the readings and say if anything needs attention.",
};

export type GalleryItem = {
  src: string;
  alt: string;
  label: string;
  trade: "electrical" | "air-con";
  finish: "commercial" | "domestic";
  kind: GalleryKind;
};

export function galleryNote(kind: GalleryKind) {
  return galleryNotes[kind];
}

export const galleryItems: GalleryItem[] = [
  { src: "/advanta/photos/electrical/showroom-lighting.webp", alt: "Commercial showroom lighting installation", label: "Commercial showroom lighting installation", trade: "electrical", finish: "commercial", kind: "commercial-lighting" },
  { src: "/advanta/photos/electrical/media-wall-lighting.webp", alt: "Residential media-wall pendant lighting", label: "House media wall pendant lights", trade: "electrical", finish: "domestic", kind: "domestic-lighting" },
  { src: "/advanta/photos/electrical/landing-handrail.webp", alt: "LED handrail lighting on a landing", label: "LED handrail lighting on a landing", trade: "electrical", finish: "domestic", kind: "domestic-lighting" },
  { src: "/advanta/photos/electrical/outdoor-patio.webp", alt: "Outdoor patio wall lights at night", label: "Outdoor patio wall lights at night", trade: "electrical", finish: "domestic", kind: "outdoor-lighting" },
  { src: "/advanta/photos/electrical/track-lighting.webp", alt: "Commercial track lighting and containment", label: "Commercial track lighting install", trade: "electrical", finish: "commercial", kind: "commercial-lighting" },
  { src: "/advanta/photos/electrical/fuseboard-hager.webp", alt: "Hager fuseboard second fix", label: "Finished Hager fuseboard install", trade: "electrical", finish: "domestic", kind: "fuseboard" },
  { src: "/advanta/photos/electrical/eicr-rcbo.webp", alt: "RCBO consumer unit", label: "RCBO board opened for testing", trade: "electrical", finish: "domestic", kind: "eicr" },
  { src: "/advanta/photos/electrical/ev-rolec.webp", alt: "Rolec home EV charger", label: "Home Rolec EV charger install", trade: "electrical", finish: "domestic", kind: "ev-charging" },
  { src: "/advanta/photos/electrical/warehouse-floodlights.webp", alt: "Warehouse floodlights at night", label: "Warehouse floodlights at night", trade: "electrical", finish: "commercial", kind: "commercial-lighting" },
  { src: "/advanta/photos/hero/gym-led-ceiling.webp", alt: "Gym LED ceiling lighting", label: "Fitted LED ceiling lights in a gym", trade: "electrical", finish: "commercial", kind: "commercial-lighting" },
  { src: "/advanta/photos/hero/pool-house-night.webp", alt: "Pool house lighting at night", label: "Pool house lighting at night", trade: "electrical", finish: "domestic", kind: "domestic-lighting" },
  { src: "/advanta/photos/hero/ford-focus-desktop.webp", alt: "Commercial showroom lighting installation", label: "Commercial showroom lighting installation", trade: "electrical", finish: "commercial", kind: "commercial-lighting" },
  { src: "/advanta/photos/climate/fujitsu-living-room.webp", alt: "Fujitsu indoor unit in a living room", label: "Living room Fujitsu air con unit", trade: "air-con", finish: "domestic", kind: "air-con-house" },
  { src: "/advanta/photos/climate/daikin-kitchen.webp", alt: "Daikin indoor unit in a kitchen", label: "Daikin air con unit in the kitchen", trade: "air-con", finish: "domestic", kind: "air-con-house" },
  { src: "/advanta/photos/climate/fujitsu-bedroom.webp", alt: "Fujitsu indoor unit in a bedroom", label: "Fujitsu air con unit in a bedroom", trade: "air-con", finish: "domestic", kind: "air-con-house" },
  { src: "/advanta/photos/climate/fujitsu-commercial-four.webp", alt: "Four Fujitsu outdoor units on a commercial site", label: "Four commercial Fujitsu units", trade: "air-con", finish: "commercial", kind: "air-con-commercial" },
  { src: "/advanta/photos/climate/haier-dual-residential.webp", alt: "Haier dual outdoor units on a house", label: "Dual Haier units on a house", trade: "air-con", finish: "domestic", kind: "air-con-house" },
  { src: "/advanta/photos/climate/engineer-airstage.webp", alt: "Engineer installing a Fujitsu air-conditioning system", label: "Fujitsu system install", trade: "air-con", finish: "commercial", kind: "air-con-commercial" },
  { src: "/advanta/photos/climate/service-charging.webp", alt: "Outdoor unit being serviced", label: "Outdoor air con service visit", trade: "air-con", finish: "commercial", kind: "air-con-service" },
  { src: "/advanta/photos/climate/mitsubishi-outdoor.webp", alt: "Mitsubishi outdoor condenser on a brick house", label: "Mitsubishi outdoor unit on a house", trade: "air-con", finish: "domestic", kind: "air-con-house" },
  { src: "/advanta/photos/about/van.webp", alt: "Residential air con install", label: "Residential outdoor air con install", trade: "air-con", finish: "domestic", kind: "air-con-house" },
];
