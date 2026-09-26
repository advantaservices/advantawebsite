"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  SECTION_SHELL,
  SECTION_SHELL_MAJOR_SEAM,
} from "@/components/Layout/Section";
import { RevealBlock } from "@/components/Layout/useRevealInView";

type CoverageArea = {
  id: string;
  county: string;
  towns: string[];
  svgIds: string[];
};

type AreaRegionGroup = {
  id: string;
  label: string;
  keywords: string[];
};

const AUTO_ROTATE_INTERVAL_MS = 3000;
const RESUME_AFTER_INTERACTION_MS = 2000;

const nonEnglandAreaNameFragments = [
  // Northern Ireland (legacy + current council names)
  "ards",
  "antrim",
  "armagh",
  "ballymena",
  "ballymoney",
  "banbridge",
  "belfast",
  "carrickfergus",
  "castlereagh",
  "coleraine",
  "cookstown",
  "craigavon",
  "causeway coast and glens",
  "derry",
  "down",
  "dungannon",
  "fermanagh",
  "larne",
  "limavady",
  "lisburn",
  "magherafelt",
  "mid and east antrim",
  "mid ulster",
  "moyle",
  "newry",
  "newtownabbey",
  "north down",
  "omagh",
  "strabane",
  // Wales
  "anglesey",
  "isle of anglesey",
  "blaenau gwent",
  "bridgend",
  "caerphilly",
  "cardiff",
  "carmarthenshire",
  "ceredigion",
  "conwy",
  "denbighshire",
  "flintshire",
  "gwynedd",
  "merthyr tydfil",
  "monmouthshire",
  "neath port talbot",
  "newport",
  "pembrokeshire",
  "powys",
  "rhondda, cynon, taff",
  "swansea",
  "torfaen",
  "vale of glamorgan",
  "wrexham",
  // Scotland
  "aberdeen",
  "aberdeenshire",
  "angus",
  "argyll and bute",
  "clackmannanshire",
  "dumfries and galloway",
  "dundee",
  "east ayrshire",
  "east dunbartonshire",
  "east lothian",
  "east renfrewshire",
  "edinburgh",
  "eilean siar",
  "falkirk",
  "fife",
  "glasgow",
  "highland",
  "inverclyde",
  "midlothian",
  "moray",
  "north ayshire",
  "north ayrshire",
  "north lanarkshire",
  "orkney",
  "perthshire and kinross",
  "renfrewshire",
  "scottish borders",
  "shetland islands",
  "south ayrshire",
  "south lanarkshire",
  "stirling",
  "west dunbartonshire",
  "west lothian",
];

const nonEnglandAreaNames = new Set(
  [
    ...nonEnglandAreaNameFragments,
  ].map((name) => name.toLowerCase()),
);

const greaterLondonSvgIds = [
  "GBBNE", // Barnet
  "GBBDG", // Barking and Dagenham
  "GBBEN", // Brent
  "GBBEX", // Bexley
  "GBBRY", // Bromley
  "GBCMD", // Camden
  "GBCRY", // Croydon
  "GBEAL", // Ealing
  "GBENF", // Enfield
  "GBGRE", // Greenwich
  "GBHCK", // Hackney
  "GBHAV", // Havering
  "GBHMF", // Hammersmith and Fulham
  "GBHIL", // Hillingdon
  "GBHNS", // Hounslow
  "GBHRW", // Harrow
  "GBHRY", // Haringey
  "GBISL", // Islington
  "GBKEC", // Kensington and Chelsea
  "GBKTT", // Kingston upon Thames
  "GBLBH", // Lambeth
  "GBLEW", // Lewisham
  "GBMRT", // Merton
  "GBNWM", // Newham
  "GBRDB", // Redbridge
  "GBRIC", // Richmond upon Thames
  "GBSTN", // Sutton
  "GBSWK", // Southwark
  "GBTWH", // Tower Hamlets
  "GBWFT", // Waltham Forest
  "GBWND", // Wandsworth
  "GBWSM", // Westminster
  "GBLND", // City of London
];

const londonCentralSvgIds = [
  "GBLND", // City of London
  "GBWSM", // Westminster
  "GBCMD", // Camden
  "GBISL", // Islington
  "GBKEC", // Kensington and Chelsea
  "GBHCK", // Hackney
  "GBTWH", // Tower Hamlets
  "GBSWK", // Southwark
  "GBLBH", // Lambeth
].filter((id) => greaterLondonSvgIds.includes(id));

const greaterLondonOuterSvgIds = greaterLondonSvgIds.filter(
  (id) => !londonCentralSvgIds.includes(id),
);

const coverageAreas: CoverageArea[] = [
  {
    id: "essex",
    county: "Essex",
    towns: [
      "Harlow",
      "Chelmsford",
      "Brentwood",
      "Basildon",
      "Colchester",
      "Epping",
      "Southend-on-Sea",
      "Braintree",
    ],
    svgIds: ["GBESS"],
  },
  {
    id: "hertfordshire",
    county: "Hertfordshire",
    towns: ["Bishop's Stortford", "Hertford", "Watford", "St Albans", "Stevenage", "Hemel Hempstead"],
    svgIds: ["GBHRT"],
  },
  {
    id: "london",
    county: "London",
    towns: ["Westminster", "Camden", "Islington", "Southwark", "Lambeth", "Hackney", "City of London"],
    svgIds: londonCentralSvgIds,
  },
  {
    id: "surrey",
    county: "Surrey",
    towns: ["Guildford", "Woking", "Epsom", "Redhill", "Reigate", "Camberley", "Farnham", "Leatherhead"],
    svgIds: ["GBSRY"],
  },
  {
    id: "greater-london",
    county: "Greater London",
    towns: ["Barnet", "Enfield", "Croydon", "Harrow", "Hillingdon", "Bromley", "Newham", "Ealing"],
    svgIds: greaterLondonOuterSvgIds,
  },
  {
    id: "kent",
    county: "Kent",
    towns: [
      "Dartford",
      "Gravesend",
      "Maidstone",
      "Sevenoaks",
      "Tunbridge Wells",
      "Medway",
      "Ashford",
      "Canterbury",
    ],
    svgIds: ["GBKEN", "GBMDW", "GBTHR", "GBSOS"],
  },
  {
    id: "cambridgeshire",
    county: "Cambridgeshire",
    towns: ["Cambridge", "Huntingdon", "St Neots", "Peterborough", "Ely", "Wisbech"],
    svgIds: ["GBCAM"],
  },
  {
    id: "bedfordshire",
    county: "Bedfordshire",
    towns: ["Bedford", "Luton", "Leighton Buzzard", "Central Bedfordshire", "Dunstable", "Biggleswade"],
    svgIds: ["GBBDF", "GBLUT", "GBCBF"],
  },
  {
    id: "buckinghamshire",
    county: "Buckinghamshire",
    towns: ["Milton Keynes", "Aylesbury", "High Wycombe", "Marlow", "Beaconsfield", "Amersham"],
    svgIds: ["GBBKM", "GBMIK"],
  },
  {
    id: "suffolk",
    county: "Suffolk",
    towns: ["Ipswich", "Bury St Edmunds", "Felixstowe", "Lowestoft", "Sudbury", "Stowmarket", "Newmarket"],
    svgIds: ["GBSFK"],
  },
];

/** Counties on the map, with the towns named under each button. */
export const electricsCoverageAreas: CoverageArea[] = [
  {
    id: "lincolnshire",
    county: "Lincolnshire",
    towns: ["Spalding", "Pinchbeck", "Boston", "Bourne", "Stamford", "Holbeach", "Sleaford", "Long Sutton", "Crowland", "Kirton"],
    svgIds: ["GBLIN", "GBNLN", "GBNEL"],
  },
  {
    id: "cambridgeshire",
    county: "Cambridgeshire",
    towns: ["Peterborough", "Wisbech", "March", "Whittlesey", "Ely", "Huntingdon", "St Neots", "St Ives"],
    svgIds: ["GBCAM", "GBPTE"],
  },
  {
    id: "norfolk",
    county: "Norfolk",
    towns: ["King's Lynn", "Downham Market", "Hunstanton", "Swaffham", "Fakenham", "Dersingham", "Heacham", "Terrington"],
    svgIds: ["GBNFK"],
  },
  {
    id: "suffolk",
    county: "Suffolk",
    towns: ["Bury St Edmunds", "Newmarket", "Mildenhall", "Haverhill", "Sudbury", "Stowmarket", "Brandon", "Lakenheath"],
    svgIds: ["GBSFK"],
  },
  {
    id: "essex",
    county: "Essex",
    towns: ["Saffron Walden", "Braintree", "Chelmsford", "Colchester", "Halstead", "Great Dunmow", "Stansted", "Witham"],
    svgIds: ["GBESS"],
  },
  {
    id: "hertfordshire",
    county: "Hertfordshire",
    towns: ["Bishop's Stortford", "Royston", "Hitchin", "Stevenage", "Ware", "Baldock", "Buntingford", "Letchworth"],
    svgIds: ["GBHRT"],
  },
  {
    id: "northamptonshire",
    county: "Northamptonshire",
    towns: ["Northampton", "Kettering", "Corby", "Wellingborough", "Oundle", "Thrapston", "Rushden", "Raunds"],
    svgIds: ["GBNTH"],
  },
  {
    id: "rutland",
    county: "Rutland",
    towns: ["Oakham", "Uppingham", "Cottesmore", "Empingham", "Ketton", "Langham", "Whissendine", "Ryhall"],
    svgIds: ["GBRUT"],
  },
];

export type HomeLocationsHeading = {
  kicker?: string;
  title?: string;
  lead?: string;
};

export type HomeLocationsProps = {
  variant?: "default" | "electrics";
  sectionId?: string;
  heading?: HomeLocationsHeading;
  /** When false, skips the larger bottom padding used before the footer. Default true for electrics. */
  majorSeam?: boolean;
  /** When set, shows a link from the active county to `${detailBasePath}/${area.id}`. */
  detailBasePath?: string;
  /** Optional centred CTA under the map (e.g. homepage → /areas). */
  viewAllHref?: string;
  viewAllLabel?: string;
};

const areaRegionGroups: AreaRegionGroup[] = [
  {
    id: "london",
    label: "London",
    keywords: [
      "london",
      "westminster",
      "camden",
      "islington",
      "hackney",
      "barking and dagenham",
      "southwark",
      "lambeth",
      "newham",
      "croydon",
      "hillingdon",
      "greenwich",
      "haringey",
      "hounslow",
      "ealing",
      "enfield",
      "wandsworth",
      "tower hamlets",
      "bromley",
      "barnet",
      "bexley",
      "waltham forest",
      "havering",
      "redbridge",
      "brent",
      "harrow",
      "merton",
      "sutton",
      "lewisham",
      "richmond upon thames",
      "kingston upon thames",
      "kensington and chelsea",
      "hammersmith and fulham",
      "city",
    ],
  },
  {
    id: "south-east",
    label: "South East",
    keywords: [
      "kent",
      "surrey",
      "sussex",
      "hampshire",
      "berkshire",
      "slough",
      "wokingham",
      "bracknell",
      "reading",
      "medway",
      "portsmouth",
      "southampton",
      "isle of wight",
      "milton keynes",
      "buckinghamshire",
      "brighton and hove",
      "oxfordshire",
      "royal borough of windsor and maidenhead",
      "windsor and maidenhead",
    ],
  },
  {
    id: "south-west",
    label: "South West",
    keywords: [
      "cornwall",
      "devon",
      "dorset",
      "somerset",
      "bristol",
      "gloucestershire",
      "wiltshire",
      "wiltshire council",
      "isles of scilly",
      "plymouth",
      "torbay",
      "bournemouth",
      "poole",
      "bath",
      "north somerset",
      "south gloucestershire",
      "swindon",
    ],
  },
  {
    id: "east-of-england",
    label: "East of England",
    keywords: [
      "essex",
      "hertfordshire",
      "cambridgeshire",
      "norfolk",
      "suffolk",
      "dacorum",
      "bedfordshire",
      "bedford",
      "luton",
      "peterborough",
      "southend",
      "thurrock",
    ],
  },
  {
    id: "midlands",
    label: "Midlands",
    keywords: [
      "northamptonshire",
      "leicestershire",
      "lincolnshire",
      "derby",
      "nottinghamshire",
      "nottingham",
      "leicester",
      "rutland",
      "derbyshire",
      "warwickshire",
      "worcestershire",
      "staffordshire",
      "shropshire",
      "herefordshire",
      "birmingham",
      "coventry",
      "wolverhampton",
      "dudley",
      "walsall",
      "sandwell",
      "telford and wrekin",
      "stoke-on-trent",
      "west midlands",
      "east midlands",
    ],
  },
  {
    id: "north",
    label: "North",
    keywords: [
      "yorkshire",
      "lancashire",
      "cheshire",
      "cumbria",
      "greater manchester",
      "merseyside",
      "tyne",
      "durham",
      "darlington",
      "gateshead",
      "hartlepool",
      "middlesbrough",
      "stockton-on-tees",
      "redcar and cleveland",
      "northumberland",
      "newcastle",
      "sunderland",
      "liverpool",
      "manchester",
      "bolton",
      "bury",
      "blackburn with darwen",
      "warrington",
      "wigan",
      "stockport",
      "tameside",
      "trafford",
      "salford",
      "oldham",
      "rochdale",
      "leeds",
      "bradford",
      "barnsley",
      "doncaster",
      "york",
      "city of york",
      "rotherham",
      "sheffield",
      "wakefield",
      "calderdale",
      "kirklees",
      "hull",
      "blackpool",
      "halton",
      "knowsley",
      "sefton",
      "north lincolnshire",
      "north east lincolnshire",
    ],
  },
];

export function HomeLocations({
  variant = "electrics",
  sectionId,
  heading,
  majorSeam,
  detailBasePath,
  viewAllHref,
  viewAllLabel = "View all areas",
}: HomeLocationsProps = {}) {
  const renderAreaLabel = (county: string) =>
    county === "Greater London" ? (
      <>
        <span className="sm:hidden">G. London</span>
        <span className="hidden sm:inline">Greater London</span>
      </>
    ) : (
      county
    );

  const pathname = usePathname();
  const initialAreas = variant === "electrics" ? electricsCoverageAreas : coverageAreas;
  const [displayAreas, setDisplayAreas] = useState<CoverageArea[]>(initialAreas);
  const [activeAreaId, setActiveAreaId] = useState<string>(initialAreas[0]?.id ?? "lincolnshire");
  const [activeRegionId, setActiveRegionId] = useState<string>(() =>
    variant === "electrics" ? "all" : "london",
  );
  const [isRotationPaused, setIsRotationPaused] = useState(false);

  const kicker = heading?.kicker ?? "Coverage";
  const title = heading?.title ?? "Areas we cover";
  const defaultLead =
    "Based around Spalding and Peterborough. We cover Lincolnshire, Cambridgeshire, Norfolk, Suffolk, Essex, Hertfordshire, Northamptonshire and Rutland. Call us with the town and the job.";
  const lead = heading?.lead ?? defaultLead;
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [mapReady, setMapReady] = useState<{ desktop: boolean; mobile: boolean }>({
    desktop: false,
    mobile: false,
  });
  const desktopMapObjectRef = useRef<HTMLObjectElement | null>(null);
  const mobileMapObjectRef = useRef<HTMLObjectElement | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);
  const electricsLeftColumnRef = useRef<HTMLDivElement | null>(null);
  const [electricsDesktopSyncHeight, setElectricsDesktopSyncHeight] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const regionChipScrollerRef = useRef<HTMLDivElement | null>(null);
  const regionChipRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const regionSwitchTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const regionSwitchLockUntilRef = useRef(0);
  const manualRegionLockUntilRef = useRef(0);
  const resumeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const markInteraction = useCallback(() => {
    setIsRotationPaused(true);
    if (resumeTimeoutRef.current) {
      clearTimeout(resumeTimeoutRef.current);
    }
    resumeTimeoutRef.current = setTimeout(() => {
      setIsRotationPaused(false);
      resumeTimeoutRef.current = null;
    }, RESUME_AFTER_INTERACTION_MS);
  }, []);
  const svgIdToAreaId = useMemo(() => {
    const map = new Map<string, string>();

    displayAreas.forEach((area) => {
      area.svgIds.forEach((svgId) => {
        // Keep the first mapping to prioritise specific areas (for example London over Greater London).
        if (!map.has(svgId)) {
          map.set(svgId, area.id);
        }
      });
    });

    return map;
  }, [displayAreas]);

  const activeArea = useMemo(
    () => displayAreas.find((area) => area.id === activeAreaId) ?? displayAreas[0],
    [activeAreaId, displayAreas],
  );
  const mapSrc = useMemo(
    () => `/maps/gb-admin1.svg?v=patch-r4-${encodeURIComponent(pathname ?? "base")}`,
    [pathname],
  );
  const groupedAreas = useMemo(() => {
    if (variant === "electrics") {
      return [
        {
          id: "all",
          label: "Coverage",
          areas: [...displayAreas].sort((a, b) => a.county.localeCompare(b.county, "en-GB")),
        },
      ];
    }

    const grouped = new Map<string, CoverageArea[]>();
    areaRegionGroups.forEach((group) => grouped.set(group.id, []));
    grouped.set("other", []);

    displayAreas.forEach((area) => {
      const areaName = area.county.toLowerCase();
      const matchedGroup = areaRegionGroups.find((group) =>
        group.keywords.some((keyword) => areaName.includes(keyword)),
      );
      const bucketId = matchedGroup?.id ?? "other";
      grouped.get(bucketId)?.push(area);
    });

    const ordered = areaRegionGroups
      .map((group) => ({
        id: group.id,
        label: group.label,
        areas: (grouped.get(group.id) ?? []).sort((a, b) => a.county.localeCompare(b.county, "en-GB")),
      }))
      .filter((group) => group.areas.length > 0);

    const otherAreas = (grouped.get("other") ?? []).sort((a, b) => a.county.localeCompare(b.county, "en-GB"));
    if (otherAreas.length > 0) {
      ordered.push({ id: "other", label: "Other England", areas: otherAreas });
    }

    return ordered;
  }, [displayAreas, variant]);
  const activeRegion = useMemo(
    () => groupedAreas.find((group) => group.id === activeRegionId) ?? groupedAreas[0],
    [groupedAreas, activeRegionId],
  );
  const autoRotateAreas = useMemo(() => {
    if (variant !== "electrics") return displayAreas;
    const visibleAreas = activeRegion?.areas ?? [];
    return visibleAreas.length > 0 ? visibleAreas : displayAreas;
  }, [variant, activeRegion, displayAreas]);
  const areaToRegionId = useMemo(() => {
    const regionMap = new Map<string, string>();
    groupedAreas.forEach((group) => {
      group.areas.forEach((area) => regionMap.set(area.id, group.id));
    });
    return regionMap;
  }, [groupedAreas]);

  useEffect(() => {
    if (typeof document === "undefined") return;
    const root = document.documentElement;
    const syncTheme = () => setIsDarkTheme(root.classList.contains("dark"));

    const frame = window.requestAnimationFrame(syncTheme);
    const observer = new MutationObserver(syncTheme);
    observer.observe(root, { attributes: true, attributeFilter: ["class"] });
    return () => {
      window.cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    return () => {
      if (resumeTimeoutRef.current) {
        clearTimeout(resumeTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (displayAreas.length === 0) return;
    if (!displayAreas.some((area) => area.id === activeAreaId)) {
      const timer = window.setTimeout(() => setActiveAreaId(displayAreas[0].id), 0);
      return () => window.clearTimeout(timer);
    }
  }, [displayAreas, activeAreaId]);

  useEffect(() => {
    if (groupedAreas.length === 0) return;
    if (!groupedAreas.some((group) => group.id === activeRegionId)) {
      const timer = window.setTimeout(() => setActiveRegionId(groupedAreas[0].id), 0);
      return () => window.clearTimeout(timer);
    }
  }, [groupedAreas, activeRegionId]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!window.matchMedia("(max-width: 767px)").matches) return;

    const scroller = regionChipScrollerRef.current;
    const chipEl = regionChipRefs.current[activeRegionId];
    if (!scroller || !chipEl) return;

    const targetLeft =
      chipEl.offsetLeft - scroller.clientWidth / 2 + chipEl.clientWidth / 2;

    scroller.scrollTo({
      left: Math.max(0, targetLeft),
      behavior: "smooth",
    });
  }, [activeRegionId, groupedAreas.length]);

  useEffect(() => {
    if (!activeArea) return;
    if (Date.now() < manualRegionLockUntilRef.current) return;

    const targetRegionId = areaToRegionId.get(activeArea.id);
    if (!targetRegionId || targetRegionId === activeRegionId) return;

    if (regionSwitchTimeoutRef.current) {
      clearTimeout(regionSwitchTimeoutRef.current);
    }

    const now = Date.now();
    const switchCadenceMs = 220;
    const baseDelayMs = 120;
    const lockRemaining = Math.max(0, regionSwitchLockUntilRef.current - now);
    const delay = Math.max(baseDelayMs, lockRemaining);

    regionSwitchTimeoutRef.current = setTimeout(() => {
      setActiveRegionId(targetRegionId);
      regionSwitchLockUntilRef.current = Date.now() + switchCadenceMs;
      regionSwitchTimeoutRef.current = null;
    }, delay);

    return () => {
      if (regionSwitchTimeoutRef.current) {
        clearTimeout(regionSwitchTimeoutRef.current);
        regionSwitchTimeoutRef.current = null;
      }
    };
  }, [activeArea, activeRegionId, areaToRegionId]);

  useEffect(() => {
    if (autoRotateAreas.length <= 1 || isRotationPaused) return;

    const intervalId = window.setInterval(() => {
      setActiveAreaId((current) => {
        const currentIndex = autoRotateAreas.findIndex((area) => area.id === current);
        const nextIndex = (currentIndex + 1) % autoRotateAreas.length;
        return autoRotateAreas[nextIndex]?.id ?? autoRotateAreas[0]?.id ?? current;
      });
    }, AUTO_ROTATE_INTERVAL_MS);

    return () => window.clearInterval(intervalId);
  }, [autoRotateAreas, isRotationPaused]);

  useEffect(() => {
    if (typeof document === "undefined") return;

    const handleVisibilityChange = () => {
      if (document.hidden) {
        setIsRotationPaused(true);
      } else if (!resumeTimeoutRef.current) {
        setIsRotationPaused(false);
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia("(max-width: 1023px)");
    const updateIsMobile = () => setIsMobile(mediaQuery.matches);
    const frame = window.requestAnimationFrame(updateIsMobile);
    mediaQuery.addEventListener("change", updateIsMobile);
    return () => {
      window.cancelAnimationFrame(frame);
      mediaQuery.removeEventListener("change", updateIsMobile);
    };
  }, []);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      const frame = window.requestAnimationFrame(() => setIsVisible(true));
      return () => window.cancelAnimationFrame(frame);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -10% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  /** Desktop electrics: map card height tracks left column so bottoms align. */
  useEffect(() => {
    if (variant !== "electrics") {
      const frame = window.requestAnimationFrame(() => setElectricsDesktopSyncHeight(null));
      return () => window.cancelAnimationFrame(frame);
    }

    const el = electricsLeftColumnRef.current;
    if (!el) return;

    const updateHeight = () => {
      if (typeof window === "undefined") return;
      if (!window.matchMedia("(min-width: 1024px)").matches) {
        setElectricsDesktopSyncHeight(null);
        return;
      }
      const h = el.getBoundingClientRect().height;
      if (h > 0) setElectricsDesktopSyncHeight(Math.round(h * 100) / 100);
    };

    const ro = new ResizeObserver(() => {
      requestAnimationFrame(updateHeight);
    });
    ro.observe(el);
    window.addEventListener("resize", updateHeight);
    const frame = window.requestAnimationFrame(updateHeight);

    return () => {
      window.cancelAnimationFrame(frame);
      ro.disconnect();
      window.removeEventListener("resize", updateHeight);
    };
  }, [variant, activeAreaId, lead]);

  useEffect(() => {
    const objectEls = [desktopMapObjectRef.current, mobileMapObjectRef.current].filter(
      Boolean,
    ) as HTMLObjectElement[];
    if (objectEls.length === 0) return;

    const eventCleanups: Array<() => void> = [];
    const loadCleanups: Array<() => void> = [];
    const retryTimeouts: Array<ReturnType<typeof setTimeout>> = [];

    const styleMap = (objectEl: HTMLObjectElement, interactive: boolean): boolean => {
      const svgDoc = objectEl.contentDocument;
      if (!svgDoc) return false;

      const svgEl = svgDoc.documentElement as unknown as SVGSVGElement;
      const rootStyles = getComputedStyle(document.documentElement);
      const mapBackground = rootStyles.getPropertyValue("--map-canvas").trim() || "#ffffff";
      const mapEmpty = rootStyles.getPropertyValue("--map-empty").trim() || "#c5d4de";
      const mapStroke = rootStyles.getPropertyValue("--map-stroke").trim() || "#ffffff";
      const markerStroke = rootStyles.getPropertyValue("--map-marker-stroke").trim() || "#0c141a";
      svgEl.style.backgroundColor = mapBackground;

      // Normalise any hard-coded white SVG background rectangles to theme-aware colour.
      const bgRects = Array.from(svgDoc.querySelectorAll<SVGRectElement>("rect")).filter((rect) => {
        const fill = (rect.getAttribute("fill") ?? "").trim().toLowerCase();
        return fill === "#fff" || fill === "#ffffff" || fill === "white";
      });
      bgRects.forEach((rect) => rect.setAttribute("fill", mapBackground));

      const featuresGroup = svgDoc.getElementById("features") as SVGGElement | null;
      const featurePaths = Array.from(svgDoc.querySelectorAll<SVGPathElement>("#features path"));
      const probeIds =
        variant === "electrics"
          ? electricsCoverageAreas.flatMap((a) => a.svgIds).slice(0, 12)
          : ["GBESS", "GBHRT", "GBSRY"];
      const hasRequiredIds = probeIds.some((id) => Boolean(svgDoc.getElementById(id)));
      if (!featuresGroup || featurePaths.length === 0 || !hasRequiredIds) {
        return false;
      }
      const derivedAreas = featurePaths
        .map((path) => {
          const name = (path.getAttribute("name") ?? "").trim();
          return { name, svgId: path.id };
        })
        .filter(({ name, svgId }) => Boolean(name) && Boolean(svgId))
        .filter(({ name }) => {
          const normalisedName = name.toLowerCase();
          if (nonEnglandAreaNames.has(normalisedName)) return false;
          return !nonEnglandAreaNameFragments.some((fragment) => normalisedName.includes(fragment));
        })
        .map(({ name, svgId }) => ({
          id: svgId.toLowerCase(),
          county: name,
          towns: [] as string[],
          svgIds: [svgId],
        }))
        .sort((a, b) => a.county.localeCompare(b.county, "en-GB"));

      if (variant !== "electrics" && derivedAreas.length > 0) {
        setDisplayAreas((prevAreas) => {
          const isSameLength = prevAreas.length === derivedAreas.length;
          const isSameOrder =
            isSameLength &&
            prevAreas.every(
              (area, index) =>
                area.id === derivedAreas[index].id &&
                area.svgIds[0] === derivedAreas[index].svgIds[0] &&
                area.county === derivedAreas[index].county,
            );
          return isSameOrder ? prevAreas : derivedAreas;
        });
      }

      const serviceSvgIds = new Set(displayAreas.flatMap((area) => area.svgIds));
      const coverageIds = new Set(featurePaths.map((path) => path.id).filter((id) => serviceSvgIds.has(id)));

      const fillCoverage = rootStyles.getPropertyValue("--map-fill").trim() || "#00AEEF";
      const fillActive = rootStyles.getPropertyValue("--map-active").trim() || "#0078A8";
      const boxes = featurePaths
        .map((path) => {
          try {
            return path.getBBox();
          } catch {
            return null;
          }
        })
        .filter((bbox): bbox is DOMRect => Boolean(bbox && bbox.width > 0 && bbox.height > 0));
      const coverageBoxes = featurePaths
        .filter((path) => coverageIds.has(path.id))
        .map((path) => {
          try {
            return path.getBBox();
          } catch {
            return null;
          }
        })
        .filter((bbox): bbox is DOMRect => Boolean(bbox && bbox.width > 0 && bbox.height > 0));

      if (boxes.length === 0) {
        return false;
      }

      const minX = Math.min(...boxes.map((bbox) => bbox.x));
      const minY = Math.min(...boxes.map((bbox) => bbox.y));
      const maxX = Math.max(...boxes.map((bbox) => bbox.x + bbox.width));
      const maxY = Math.max(...boxes.map((bbox) => bbox.y + bbox.height));

      const weighted = boxes.reduce(
        (acc, bbox) => {
          const area = bbox.width * bbox.height;
          const cx = bbox.x + bbox.width / 2;
          const cy = bbox.y + bbox.height / 2;

          acc.area += area;
          acc.x += cx * area;
          acc.y += cy * area;
          return acc;
        },
        { area: 0, x: 0, y: 0 },
      );

      const coverageWeighted = coverageBoxes.reduce(
        (acc, bbox) => {
          const area = bbox.width * bbox.height;
          const cx = bbox.x + bbox.width / 2;
          const cy = bbox.y + bbox.height / 2;

          acc.area += area;
          acc.x += cx * area;
          acc.y += cy * area;
          return acc;
        },
        { area: 0, x: 0, y: 0 },
      );

      const defaultCenterX = weighted.area > 0 ? weighted.x / weighted.area : (minX + maxX) / 2;
      const defaultCenterY = weighted.area > 0 ? weighted.y / weighted.area : (minY + maxY) / 2;
      const coverageCenterX =
        coverageWeighted.area > 0 ? coverageWeighted.x / coverageWeighted.area : defaultCenterX;
      const coverageCenterY =
        coverageWeighted.area > 0 ? coverageWeighted.y / coverageWeighted.area : defaultCenterY;

      let centerX: number;
      let centerY: number;
      let finalHalfWidth: number;
      let finalHalfHeight: number;

      if (variant === "electrics" && coverageBoxes.length > 0) {
        // Frame on the covered counties, then match the tile so the patch fills the card.
        const cMinX = Math.min(...coverageBoxes.map((bbox) => bbox.x));
        const cMinY = Math.min(...coverageBoxes.map((bbox) => bbox.y));
        const cMaxX = Math.max(...coverageBoxes.map((bbox) => bbox.x + bbox.width));
        const cMaxY = Math.max(...coverageBoxes.map((bbox) => bbox.y + bbox.height));
        const pad = 0.4;
        centerX = (cMinX + cMaxX) / 2;
        centerY = (cMinY + cMaxY) / 2;
        let halfW = ((cMaxX - cMinX) / 2) * (1 + pad);
        let halfH = ((cMaxY - cMinY) / 2) * (1 + pad);

        const tileW = objectEl.clientWidth;
        const tileH = objectEl.clientHeight;
        if (tileW > 40 && tileH > 40 && halfH > 0) {
          const tileAspect = tileW / tileH;
          const patchAspect = halfW / halfH;
          if (patchAspect < tileAspect) {
            halfW = halfH * tileAspect;
          } else {
            halfH = halfW / tileAspect;
          }
        }

        centerX -= halfW * 0.3;

        // Keep the same zoom, but don't leave empty sea inside the tile.
        // The land runs off the top and left; pull the window so the right and bottom meet it too.
        const edge = 8;
        let vbX = centerX - halfW;
        let vbY = centerY - halfH;
        if (vbX + halfW * 2 > maxX + edge) vbX = maxX + edge - halfW * 2;
        if (vbY + halfH * 2 > maxY + edge) vbY = maxY + edge - halfH * 2;
        centerX = vbX + halfW;
        centerY = vbY + halfH;

        finalHalfWidth = halfW;
        finalHalfHeight = halfH;
      } else {
        const focusStrength = 0.16;
        centerX = defaultCenterX + (coverageCenterX - defaultCenterX) * focusStrength;
        centerY = defaultCenterY + (coverageCenterY - defaultCenterY) * focusStrength;

        const halfWidth = Math.max(centerX - minX, maxX - centerX);
        const halfHeight = Math.max(centerY - minY, maxY - centerY);
        const padding = 0.09;
        const zoomFactor = 0.62;
        finalHalfWidth = halfWidth * (1 + padding) * zoomFactor;
        finalHalfHeight = halfHeight * (1 + padding) * zoomFactor;
      }

      // Frame once, after the tile has a size, so hover only changes the highlight.
      const tileReady = objectEl.clientWidth > 40 && objectEl.clientHeight > 40;
      if (svgEl.getAttribute("data-advanta-framed") !== "1") {
        svgEl.setAttribute(
          "viewBox",
          `${centerX - finalHalfWidth} ${centerY - finalHalfHeight} ${finalHalfWidth * 2} ${finalHalfHeight * 2}`,
        );
        svgEl.setAttribute("width", "100%");
        svgEl.setAttribute("height", "100%");
        svgEl.setAttribute("preserveAspectRatio", "xMidYMid slice");
        if (tileReady) svgEl.setAttribute("data-advanta-framed", "1");
      }

      featurePaths.forEach((path) => {
        const pathId = path.id;
        path.style.fill = coverageIds.has(pathId) ? fillCoverage : mapEmpty;
        path.style.opacity = "0.9";
        path.style.stroke = mapStroke;
        path.style.strokeWidth = "0.7";
      });

      const circles = svgDoc.querySelectorAll<SVGCircleElement>("circle");
      circles.forEach((circle) => {
        const circleId = circle.id;
        if (coverageIds.has(circleId)) {
          circle.style.opacity = "1";
          circle.style.fill = fillCoverage;
          circle.style.stroke = markerStroke;
          circle.style.strokeWidth = "1";
        } else {
          circle.style.opacity = "0";
        }
      });

      activeArea.svgIds.forEach((svgId) => {
        const activePath = svgDoc.getElementById(svgId) as SVGPathElement | null;
        if (activePath) {
          activePath.style.fill = fillActive;
          activePath.style.opacity = "0.96";
        }

        const activeCircle = svgDoc.querySelector<SVGCircleElement>(`circle#${svgId}`);
        if (activeCircle) {
          activeCircle.style.opacity = "1";
          activeCircle.style.fill = fillActive;
          activeCircle.style.stroke = markerStroke;
          activeCircle.style.strokeWidth = "1";
        }
      });

      if (!interactive) return true;

      const interactiveElements = Array.from(
        svgDoc.querySelectorAll<SVGPathElement | SVGCircleElement>("#features path, circle"),
      ).filter((el) => coverageIds.has(el.id));

      interactiveElements.forEach((el) => {
        const areaId = svgIdToAreaId.get(el.id);
        if (!areaId) return;

        const handleActivate = () => {
          setActiveAreaId(areaId);
          markInteraction();
        };
        el.style.cursor = "pointer";
        el.addEventListener("mouseenter", handleActivate);
        el.addEventListener("click", handleActivate);
        el.addEventListener("pointerdown", handleActivate);
        eventCleanups.push(() => {
          el.removeEventListener("mouseenter", handleActivate);
          el.removeEventListener("click", handleActivate);
          el.removeEventListener("pointerdown", handleActivate);
        });
      });

      return true;
    };

    objectEls.forEach((objectEl, index) => {
      const mapKey = index === 0 ? "desktop" : "mobile";
      const isInteractive = true;
      const applyStyles = () => {
        const didStyle = styleMap(objectEl, isInteractive);
        if (didStyle) {
          setMapReady((prev) => (prev[mapKey] ? prev : { ...prev, [mapKey]: true }));
        }
        return didStyle;
      };
      const runWithRetry = (attempt = 0) => {
        if (applyStyles()) return;
        if (attempt >= 24) return;

        const timeout = setTimeout(() => runWithRetry(attempt + 1), 90);
        retryTimeouts.push(timeout);
      };

      // Always attempt immediately in case the object loaded before listeners were attached.
      runWithRetry();

      const readyState = objectEl.contentDocument?.readyState;
      if (readyState !== "complete") {
        const handleLoad = () => runWithRetry();
        objectEl.addEventListener("load", handleLoad);
        loadCleanups.push(() => objectEl.removeEventListener("load", handleLoad));
      }
    });

    return () => {
      retryTimeouts.forEach((timeout) => clearTimeout(timeout));
      loadCleanups.forEach((cleanup) => cleanup());
      eventCleanups.forEach((cleanup) => cleanup());
    };
  }, [activeArea, pathname, svgIdToAreaId, isDarkTheme, displayAreas, variant, markInteraction]);

  const regionChipActiveClass = "border-button bg-button text-button-ink";
  const regionChipInactiveClass =
    "border-[var(--border)] bg-[var(--surface-nav-panel)] text-[var(--text-muted)] hover:border-[var(--brand)] hover:text-foreground";
  const areaBtnActiveClass = "border-button bg-button text-button-ink";
  const areaBtnInactiveClass =
    "border-[var(--border)] bg-[var(--surface-nav-panel)] text-[var(--text-muted)] hover:border-[var(--brand)] hover:bg-[color-mix(in_srgb,var(--brand)_10%,var(--surface))] hover:text-foreground dark:hover:bg-[color-mix(in_srgb,var(--brand)_24%,var(--surface))]";
  const checkMuted = "text-[var(--brand)]";

  /** Shorter than the left column so the map feels lighter; bottom edge stays aligned via `lg:self-end`. */
  const ELECTRICS_DESKTOP_MAP_HEIGHT_TRIM_PX = 36;

  /** Short window, map pinned to the bottom so Lincolnshire and Cambridgeshire stay in frame. */
  const electricsMapCropOuterClass =
    "relative h-[300px] w-full overflow-hidden rounded-lg p-2 sm:h-[360px] lg:h-[420px]";
  const electricsMapCropPositionClass = "absolute inset-0 h-full w-full";
  const defaultMapFrameClass = "relative aspect-square rounded-lg p-2";
  const visibleClass = isVisible ? "is-visible" : "";
  const textRevealClass = isMobile ? "reveal-fade-up" : "reveal-slide-left";
  const mapRevealClass = isMobile ? "reveal-fade-up" : "reveal-slide-right";

  const electricsUsesMajorSeam = majorSeam ?? true;

  return (
    <section
      ref={sectionRef}
      id={sectionId}
      className={
        variant === "electrics"
          ? electricsUsesMajorSeam
            ? SECTION_SHELL_MAJOR_SEAM
            : SECTION_SHELL
          : "pt-10 pb-10 md:pt-12 md:pb-12"
      }
    >
      <div
        className={`mx-auto grid w-full max-w-7xl gap-6 px-6 lg:grid-cols-[1fr_1fr] lg:gap-10 ${variant === "electrics" ? "lg:items-stretch" : "lg:items-center"}`}
      >
        <div
          ref={electricsLeftColumnRef}
          className={`min-w-0 space-y-6 ${variant === "electrics" ? "lg:self-start" : ""} ${textRevealClass} ${visibleClass}`}
        >
          <div className={variant === "electrics" ? "text-center lg:text-left" : undefined}>
            <p
              className={
                variant === "electrics"
                  ? "text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--brand-strong)] md:text-xs"
                  : "text-muted text-xs font-medium uppercase tracking-[0.16em]"
              }
            >
              {kicker}
            </p>
            <h2 className="text-foreground mt-2 text-2xl font-semibold tracking-tight md:text-3xl">{title}</h2>
            {variant === "electrics" ? (
              <p className="text-muted mt-3 text-sm leading-relaxed md:text-base">{lead}</p>
            ) : null}
          </div>

          {variant !== "electrics" ? (
            <p className="text-base leading-8 text-[var(--text-muted)]">{lead}</p>
          ) : null}

          <div
            className="w-full max-w-[360px] rounded-xl border bg-[var(--surface)] p-3 shadow-[0_18px_32px_-26px_rgba(15,23,42,0.28)] lg:hidden"
            style={{
              borderColor: isDarkTheme ? "transparent" : "var(--border)",
              backgroundColor: "var(--map-canvas)",
              boxShadow: isDarkTheme ? "none" : "0 18px 32px -26px rgba(15,23,42,0.28)",
            }}
          >
            {variant === "electrics" ? (
              <div
                className={electricsMapCropOuterClass}
                style={{ backgroundColor: "var(--map-canvas-muted)" }}
              >
                <div className={`${electricsMapCropPositionClass} max-w-full`}>
                  <div className="relative h-full w-full">
                    <object
                      ref={mobileMapObjectRef}
                      type="image/svg+xml"
                      data={mapSrc}
                      aria-label="Interactive UK coverage map"
                      className={`absolute inset-0 h-full w-full transition-opacity duration-150 ${
                        mapReady.mobile ? "opacity-100" : "opacity-0"
                      }`}
                      style={{ border: 0, outline: "none" }}
                    />
                  </div>
                </div>
                {!mapReady.mobile && (
                  <div className="absolute inset-0 z-10 flex items-center justify-center rounded-lg bg-[var(--surface-muted)]">
                    <span className="animate-pulse text-xs font-semibold uppercase tracking-[0.12em] text-[var(--text-muted)]">
                      Loading coverage map...
                    </span>
                  </div>
                )}
              </div>
            ) : (
              <div
                className={defaultMapFrameClass}
                style={{ backgroundColor: "var(--map-canvas-muted)" }}
              >
                <object
                  ref={mobileMapObjectRef}
                  type="image/svg+xml"
                  data={mapSrc}
                  aria-label="Interactive UK coverage map"
                  className={`h-full w-full transition-opacity duration-150 ${
                    mapReady.mobile ? "opacity-100" : "opacity-0"
                  }`}
                  style={{ border: 0, outline: "none" }}
                />
                {!mapReady.mobile && (
                  <div className="absolute inset-0 z-10 flex items-center justify-center rounded-lg bg-[var(--surface-muted)]">
                    <span className="animate-pulse text-xs font-semibold uppercase tracking-[0.12em] text-[var(--text-muted)]">
                      Loading coverage map...
                    </span>
                  </div>
                )}
              </div>
            )}
          </div>

          {variant !== "electrics" ? (
            <>
              <div className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--text-muted)]">
                  Browse by region
                </p>
                <div className="min-w-0 w-full max-w-full overflow-hidden">
                  <div
                    ref={regionChipScrollerRef}
                    className="flex w-full max-w-full gap-2 overflow-x-auto overflow-y-hidden pb-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden md:flex-nowrap md:gap-1.5 md:overflow-visible md:pb-0"
                  >
                    {groupedAreas.map((group) => (
                      <button
                        key={group.id}
                        ref={(el) => {
                          regionChipRefs.current[group.id] = el;
                        }}
                        type="button"
                        onClick={() => {
                          manualRegionLockUntilRef.current = Date.now() + 1200;
                          setActiveRegionId(group.id);
                          markInteraction();
                        }}
                        className={`shrink-0 rounded-full border px-3 py-1.5 text-xs font-semibold transition whitespace-nowrap md:min-w-0 md:flex-1 md:px-2 md:text-[11px] ${
                          activeRegion?.id === group.id ? regionChipActiveClass : regionChipInactiveClass
                        }`}
                      >
                        <span className="md:block md:truncate">
                          {group.label === "East of England" ? "East" : group.label}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid h-[226px] grid-cols-2 content-start gap-2 overflow-y-auto pr-1">
                {(activeRegion?.areas ?? []).map((area) => (
                  <button
                    key={area.id}
                    type="button"
                    onMouseEnter={() => {
                      setActiveAreaId(area.id);
                      markInteraction();
                    }}
                    onFocus={() => {
                      setActiveAreaId(area.id);
                      markInteraction();
                    }}
                    onClick={() => {
                      setActiveAreaId(area.id);
                      markInteraction();
                    }}
                    className={`flex items-center gap-2 rounded-md border px-3 py-2 text-left text-sm font-semibold transition ${
                      activeAreaId === area.id ? areaBtnActiveClass : areaBtnInactiveClass
                    }`}
                  >
                    <span
                      className={`transition ${
                        activeAreaId === area.id ? "text-button-ink" : checkMuted
                      }`}
                    >
                      ✓
                    </span>
                    <span>{renderAreaLabel(area.county)}</span>
                  </button>
                ))}
              </div>

              <p className="max-w-[58ch] text-base leading-8 text-[var(--text-muted)]">
                <span className="font-semibold text-foreground">{activeArea?.county ?? "Area"} coverage:</span>{" "}
                {activeArea && activeArea.towns.length > 0
                  ? activeArea.towns.join(", ")
                  : "County-wide coverage available."}
              </p>
            </>
          ) : (
            <div
              className="rounded-xl border p-4 shadow-[0_18px_32px_-26px_rgba(15,23,42,0.28)]"
              style={{
                borderColor: isDarkTheme ? "transparent" : "var(--border)",
                backgroundColor: "var(--map-canvas)",
                boxShadow: isDarkTheme ? "none" : "0 18px 32px -26px rgba(15,23,42,0.28)",
              }}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--text-muted)]">
                Tap a county
              </p>
              <div className="mt-3 grid grid-cols-2 content-start gap-2">
                {(activeRegion?.areas ?? []).map((area) => (
                  <button
                    key={area.id}
                    type="button"
                    onMouseEnter={() => {
                      setActiveAreaId(area.id);
                      markInteraction();
                    }}
                    onFocus={() => {
                      setActiveAreaId(area.id);
                      markInteraction();
                    }}
                    onClick={() => {
                      setActiveAreaId(area.id);
                      markInteraction();
                    }}
                    className={`flex min-w-0 items-center gap-2 whitespace-nowrap rounded-md border px-3 py-2 text-left text-sm font-semibold transition max-lg:gap-1.5 max-lg:pr-1.5 max-lg:pl-2 max-lg:tracking-tight ${
                      activeAreaId === area.id ? areaBtnActiveClass : areaBtnInactiveClass
                    }`}
                  >
                    <span
                      className={`shrink-0 transition ${
                        activeAreaId === area.id ? "text-button-ink" : checkMuted
                      }`}
                    >
                      ✓
                    </span>
                    <span className="min-w-0">{renderAreaLabel(area.county)}</span>
                  </button>
                ))}
              </div>
              <div className="mt-3 border-t border-[var(--brand)]/30 pt-3">
                <p className="line-clamp-2 h-12 text-sm leading-6 text-[var(--text-muted)]">
                  <span className="font-semibold text-foreground">{activeArea?.county ?? "Area"} coverage:</span>{" "}
                  {activeArea && activeArea.towns.length > 0
                    ? activeArea.towns.join(", ")
                    : "County-wide coverage available."}
                </p>
                {detailBasePath && activeArea ? (
                  <Link
                    href={`${detailBasePath}/${activeArea.id}`}
                    className="mt-2 inline-flex text-sm font-semibold text-[var(--brand-strong)] transition-colors hover:text-[var(--brand)]"
                  >
                    View full {activeArea.county} coverage
                  </Link>
                ) : null}
              </div>
            </div>
          )}

        </div>

        <div
          className={`hidden w-full max-w-[540px] justify-self-center rounded-xl border bg-[var(--surface)] p-3 shadow-[0_18px_32px_-26px_rgba(15,23,42,0.28)] lg:block lg:justify-self-end ${mapRevealClass} ${visibleClass} ${
            variant === "electrics" && electricsDesktopSyncHeight != null
              ? "lg:flex lg:min-h-0 lg:flex-col lg:self-end"
              : ""
          }`}
          style={{
            borderColor: isDarkTheme ? "transparent" : "var(--border)",
            backgroundColor: "var(--map-canvas)",
            boxShadow: isDarkTheme ? "none" : "0 18px 32px -26px rgba(15,23,42,0.28)",
            ...(variant === "electrics" && electricsDesktopSyncHeight != null
              ? {
                  height: Math.max(
                    260,
                    electricsDesktopSyncHeight - ELECTRICS_DESKTOP_MAP_HEIGHT_TRIM_PX,
                  ),
                }
              : {}),
          }}
        >
          {variant === "electrics" ? (
            <div
              className={
                electricsDesktopSyncHeight != null
                  ? "relative flex min-h-0 w-full flex-1 flex-col overflow-hidden rounded-lg p-2"
                  : electricsMapCropOuterClass
              }
              style={{ backgroundColor: "var(--map-canvas-muted)" }}
            >
              <div className={electricsMapCropPositionClass}>
                <div className="relative h-full w-full">
                  <object
                    ref={desktopMapObjectRef}
                    type="image/svg+xml"
                    data={mapSrc}
                    aria-label="Interactive UK coverage map"
                    className={`absolute inset-0 h-full w-full transition-opacity duration-150 ${
                      mapReady.desktop ? "opacity-100" : "opacity-0"
                    }`}
                    style={{ border: 0, outline: "none" }}
                  />
                </div>
              </div>
              {!mapReady.desktop && (
                <div className="absolute inset-0 z-10 flex items-center justify-center rounded-lg bg-[var(--surface-muted)]">
                  <span className="animate-pulse text-xs font-semibold uppercase tracking-[0.12em] text-[var(--text-muted)]">
                    Loading coverage map...
                  </span>
                </div>
              )}
            </div>
          ) : (
            <div
              className={defaultMapFrameClass}
              style={{ backgroundColor: "var(--map-canvas-muted)" }}
            >
              <object
                ref={desktopMapObjectRef}
                type="image/svg+xml"
                data={mapSrc}
                aria-label="Interactive UK coverage map"
                className={`h-full w-full transition-opacity duration-150 ${
                  mapReady.desktop ? "opacity-100" : "opacity-0"
                }`}
                style={{ border: 0, outline: "none" }}
              />
              {!mapReady.desktop && (
                <div className="absolute inset-0 z-10 flex items-center justify-center rounded-lg bg-[var(--surface-muted)]">
                  <span className="animate-pulse text-xs font-semibold uppercase tracking-[0.12em] text-[var(--text-muted)]">
                    Loading coverage map...
                  </span>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {viewAllHref ? (
        <div className="mt-10 flex justify-center px-6 md:mt-12">
          <RevealBlock variant="rise">
            <Link
              href={viewAllHref}
              className="inline-flex items-center justify-center rounded-md bg-button px-6 py-3 text-sm font-semibold text-button-ink transition hover:opacity-90 motion-safe:hover:-translate-y-1 motion-safe:active:translate-y-0"
            >
              {viewAllLabel}
            </Link>
          </RevealBlock>
        </div>
      ) : null}
    </section>
  );
}
