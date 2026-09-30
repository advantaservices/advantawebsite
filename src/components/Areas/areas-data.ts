import type { ServiceFaqItem } from "@/components/Electrical/serviceLandingShared";
import { CLIMATE_NAV_LINKS, ELECTRICAL_NAV_LINKS } from "@/components/Navigation/serviceNavLinks";
import { business } from "@/lib/site-config";

export type LocationPageData = {
  slug: string;
  county: string;
  towns: string[];
  heroImage: string;
  heroImageAlt: string;
  heroDescription: string;
  metaTitle: string;
  metaDescription: string;
  intro: string[];
  faqs: ServiceFaqItem[];
};

export const LOCATION_SERVICE_LINKS = [...ELECTRICAL_NAV_LINKS, ...CLIMATE_NAV_LINKS];

const phone = business.phoneDisplay;

function faq(question: string, answer: string, answerMobile: string): ServiceFaqItem {
  return { question, answer, answerMobile };
}

export const locations: LocationPageData[] = [
  {
    slug: "spalding",
    county: "Spalding & Pinchbeck",
    towns: ["Spalding", "Pinchbeck", "Bourne", "Crowland", "Holbeach", "Long Sutton", "Market Deeping", "Gosberton", "Sutton Bridge"],
    heroImage: "/advanta/photos/hero/van.webp",
    heroImageAlt: "Advanta Services van on a local job",
    heroDescription: "Electrical and air conditioning in Spalding, Pinchbeck, Holbeach, Bourne and the Deepings. Call us and we will get the job booked.",
    metaTitle: "Electrical and Air Conditioning in Spalding & Pinchbeck | Advanta",
    metaDescription: "Electrical and air conditioning in Spalding, Pinchbeck, Holbeach, Bourne, Crowland and Market Deeping. Call Advanta for a quote.",
    intro: [
      "Spalding and Pinchbeck are the centre of the work. We cover Holbeach, Crowland, Bourne, Long Sutton, Gosberton, Sutton Bridge and Market Deeping for electrical jobs and air conditioning.",
      `Fuseboards, rewires, lighting, testing and air conditioning are everyday work here. Call ${phone} and you deal with us directly. Straightforward jobs can often be priced from that. Larger work may need a survey.`,
    ],
    faqs: [
      faq(
        "Do you cover Spalding and Pinchbeck?",
        `Yes. Spalding and Pinchbeck are where the work is based. We also cover Holbeach, Bourne, Crowland, Long Sutton, Gosberton, Sutton Bridge and Market Deeping. Call ${phone} and we will book the job.`,
        `Yes. Spalding and Pinchbeck are home ground, along with Holbeach, Bourne and the Deepings. Call ${phone}.`,
      ),
      faq(
        "What electrical work do you do in Spalding?",
        "Rewires, fuseboard upgrades, EICR testing, lighting, extra sockets, EV chargers and fault finding. Houses, shops and light commercial jobs in Spalding and Pinchbeck. The work is tested, and you get a certificate where the job needs one.",
        "Rewires, fuseboards, EICRs, lighting, sockets, EV chargers and fault finding, for houses and light commercial jobs in Spalding.",
      ),
      faq(
        "Can you install air conditioning in Spalding?",
        "Yes. Single splits and multi-split systems for houses and commercial rooms, including Fujitsu, Daikin, Mitsubishi and Haier. Most new systems carry a 5-year warranty. We also service and repair systems already fitted.",
        "Yes. New installs, servicing and repairs, including Fujitsu, Daikin, Mitsubishi and Haier. Most new systems carry a 5-year warranty.",
      ),
      faq(
        "How do I get a quote in Spalding?",
        `Call ${phone} or send photos and the postcode. Straightforward jobs are often priced from that, usually the same working day. Larger installs get a visit so the price is fixed before we book.`,
        `Call ${phone} or send photos and the postcode. We usually come back the same working day.`,
      ),
      faq(
        "Do you cover Holbeach and Long Sutton?",
        "Yes. Holbeach, Long Sutton, Sutton Bridge, Crowland and Gosberton are all covered. If your village is nearby, call and we will book the job.",
        "Yes. Those towns are covered. If your village is nearby, call and we will book the job.",
      ),
    ],
  },
  {
    slug: "peterborough",
    county: "Peterborough",
    towns: ["Peterborough", "Hampton", "Werrington", "Orton", "Eye", "Whittlesey", "Market Deeping"],
    heroImage: "/advanta/photos/electrical/showroom-lighting.webp",
    heroImageAlt: "Commercial lighting work covering the Peterborough area",
    heroDescription: "Electrical and air conditioning in Peterborough, Hampton, Werrington, Whittlesey and the Ortons. Call us for a quote.",
    metaTitle: "Electrical and Air Conditioning in Peterborough | Advanta",
    metaDescription: "Electrical and air conditioning in Peterborough, Hampton, Werrington, the Ortons, Eye and Whittlesey. Call Advanta for a quote.",
    intro: [
      "Peterborough is a regular part of the work. We cover Hampton, Werrington, the Ortons, Eye, Whittlesey and Market Deeping for electrical work and air conditioning.",
      `New-build estates and older houses in the city are both normal jobs. Call ${phone} with the address and what you need. Straightforward jobs can often be priced from photos. Larger installs may need a survey before the price is fixed.`,
    ],
    faqs: [
      faq(
        "Do you cover Peterborough?",
        `Yes. We cover Peterborough, Hampton, Werrington, the Ortons, Eye, Whittlesey and Market Deeping. Call ${phone} and we will take the job on.`,
        `Yes. Peterborough, Hampton, Werrington, the Ortons, Eye and Whittlesey. Call ${phone}.`,
      ),
      faq(
        "What electrical services do you provide in Peterborough?",
        "Rewires, consumer unit upgrades, EICR testing, lighting, EV charging, extra circuits and fault finding. Domestic and commercial. You get the certificate where the work needs one.",
        "Rewires, fuseboards, EICRs, lighting, EV charging and fault finding, for homes and commercial jobs in Peterborough.",
      ),
      faq(
        "Do you install air conditioning in Peterborough?",
        "Yes. Indoor units in houses and flats, and outdoor units on walls and side passages. Fujitsu, Daikin, Mitsubishi and Haier. We also service and replace systems that are already installed.",
        "Yes. New installs, servicing and replacements for houses, flats and commercial rooms in Peterborough.",
      ),
      faq(
        "How quickly can I get a price?",
        `Call ${phone} or send photos through the enquiry form. Most Peterborough quotes go out the same working day. Hours are Monday to Friday, 08:00 to 17:00.`,
        `Call ${phone}. Most quotes go out the same working day, Monday to Friday, 08:00 to 17:00.`,
      ),
      faq(
        "Do you cover Hampton and Whittlesey?",
        "Yes. Hampton, Werrington, the Ortons, Eye and Whittlesey are named because we work there. Market Deeping is on the same run.",
        "Yes. Hampton, Werrington, the Ortons, Eye, Whittlesey and Market Deeping are all covered.",
      ),
    ],
  },
  {
    slug: "wisbech",
    county: "Wisbech",
    towns: ["Wisbech", "March", "Long Sutton", "Sutton Bridge", "Whittlesey"],
    heroImage: "/advanta/photos/climate/fujitsu-patio.webp",
    heroImageAlt: "Residential air-conditioning outdoor unit",
    heroDescription: "Electrical and air conditioning in Wisbech, March, Long Sutton and Sutton Bridge. Call us to book.",
    metaTitle: "Electrical and Air Conditioning in Wisbech | Advanta",
    metaDescription: "Electrical and air conditioning in Wisbech, March, Long Sutton, Sutton Bridge and Whittlesey. Call Advanta for a quote.",
    intro: [
      "Wisbech is a regular town for us. We cover March, Long Sutton, Sutton Bridge and Whittlesey as well, for electrical work and air conditioning.",
      `Air conditioning on fen houses, fuseboard upgrades and lighting in town are typical jobs. Call ${phone} with the postcode and a short note of the work.`,
    ],
    faqs: [
      faq(
        "Do you cover Wisbech?",
        `Yes. Wisbech, March, Long Sutton, Sutton Bridge and Whittlesey are all on this page. Call ${phone} and we will quote the job.`,
        `Yes. Wisbech, March, Long Sutton and Sutton Bridge. Call ${phone}.`,
      ),
      faq(
        "What electrical work do you do around Wisbech?",
        "Fuseboards, rewires, extra sockets, lighting, EICR testing and fault finding. Houses in town and older fen properties. Tested, and certified where the job needs it.",
        "Fuseboards, rewires, lighting, EICRs and fault finding for houses in and around Wisbech.",
      ),
      faq(
        "Can you fit air conditioning in Wisbech?",
        "Yes. New systems for living rooms, bedrooms and commercial rooms, plus servicing and repairs on units already fitted. Most new installs carry a 5-year warranty.",
        "Yes. New installs, servicing and repairs. Most new systems carry a 5-year warranty.",
      ),
      faq(
        "Is March included?",
        "Yes. March is a regular town on the Wisbech side of the work, with Whittlesey, Long Sutton and Sutton Bridge.",
        "Yes. March, Whittlesey, Long Sutton and Sutton Bridge are all covered with Wisbech.",
      ),
      faq(
        "How do I book a Wisbech job?",
        `Call ${phone} or use the enquiry form. Photos of the board, the room or the outdoor wall are enough to start a quote. We reply on working days, usually the same day.`,
        `Call ${phone} or send photos. We reply on working days, usually the same day.`,
      ),
    ],
  },
  {
    slug: "boston",
    county: "Boston",
    towns: ["Boston", "Kirton", "Sutterton", "Heckington", "Sleaford"],
    heroImage: "/advanta/photos/electrical/warehouse-floodlights.webp",
    heroImageAlt: "Commercial exterior lighting at night",
    heroDescription: "Electrical and air conditioning in Boston, Kirton, Sutterton, Heckington and Sleaford. Call us for a quote.",
    metaTitle: "Electrical and Air Conditioning in Boston, Lincolnshire | Advanta",
    metaDescription: "Electrical and air conditioning in Boston, Kirton, Sutterton, Heckington and Sleaford. Call Advanta for a quote.",
    intro: [
      "Boston is one of the towns we cover as a matter of course, with Kirton, Sutterton, Heckington and Sleaford on the same side of Lincolnshire.",
      `Commercial lighting, fuseboards and air conditioning are all part of the work. Call ${phone}. Straightforward jobs can often be priced before we book. Larger work may need a survey. You deal with us directly.`,
    ],
    faqs: [
      faq(
        "Do you cover Boston?",
        `Yes. Boston, Kirton, Sutterton, Heckington and Sleaford are the towns on this page. Call ${phone} and we will take the enquiry.`,
        `Yes. Boston, Kirton, Sutterton, Heckington and Sleaford. Call ${phone}.`,
      ),
      faq(
        "What electrical work do you do in Boston?",
        "Rewires, consumer units, EICR testing, lighting, extra circuits and fault finding. Houses and commercial rooms in Boston and the villages around it.",
        "Rewires, fuseboards, EICRs, lighting and fault finding for homes and commercial rooms in Boston.",
      ),
      faq(
        "Do you install air conditioning in Boston?",
        "Yes. Domestic and commercial systems, plus servicing and repairs. Fujitsu, Daikin, Mitsubishi and Haier. Most new systems carry a 5-year warranty.",
        "Yes. Installs, servicing and repairs. Most new systems carry a 5-year warranty.",
      ),
      faq(
        "Do you cover Sleaford?",
        "Yes. Sleaford is named with Boston, Kirton, Sutterton and Heckington. Call with the postcode and the job.",
        "Yes. Sleaford is covered with Boston, Kirton, Sutterton and Heckington.",
      ),
      faq(
        "How do I get a Boston quote?",
        `Call ${phone}, Monday to Friday, 08:00 to 17:00, or send photos and the address. We aim to reply the same working day.`,
        `Call ${phone} or send photos. We aim to reply the same working day.`,
      ),
    ],
  },
  {
    slug: "stamford",
    county: "Stamford",
    towns: ["Stamford", "Bourne", "The Deepings", "Market Deeping", "Ketton", "Ryhall"],
    heroImage: "/advanta/photos/climate/mitsubishi-outdoor.webp",
    heroImageAlt: "Mitsubishi outdoor condenser on a brick house",
    heroDescription: "Electrical and air conditioning in Stamford, Bourne, the Deepings, Ketton and Ryhall. Call us to book.",
    metaTitle: "Electrical and Air Conditioning in Stamford | Advanta",
    metaDescription: "Electrical and air conditioning in Stamford, Bourne, the Deepings, Ketton and Ryhall. Call Advanta for a quote.",
    intro: [
      "Stamford, Bourne and the Deepings are a regular run, with Ketton and Ryhall on the same side of the patch. We cover them for electrical work and air conditioning.",
      `Stone houses are normal work here. We site outdoor units and pipe runs so the finish stays neat. Call ${phone} and we will talk the job through.`,
    ],
    faqs: [
      faq(
        "Do you cover Stamford?",
        `Yes. Stamford, Bourne, the Deepings, Market Deeping, Ketton and Ryhall. Call ${phone} and we will quote the work.`,
        `Yes. Stamford, Bourne, the Deepings, Ketton and Ryhall. Call ${phone}.`,
      ),
      faq(
        "What electrical services do you provide in Stamford?",
        "Rewires, fuseboards, EICR testing, lighting, extra sockets and fault finding. Houses in Stamford and the villages around Bourne and the Deepings.",
        "Rewires, fuseboards, EICRs, lighting and fault finding in Stamford, Bourne and the Deepings.",
      ),
      faq(
        "Can you install air conditioning on a stone house in Stamford?",
        "Yes. We plan the outdoor position and the pipe run so the install stays tidy on stone and brick. If a listed building needs a particular approach, we talk that through before we quote.",
        "Yes. We plan the outdoor unit and pipe run so the install stays tidy. We talk through listed buildings before we quote.",
      ),
      faq(
        "Do you work in Bourne and the Deepings?",
        "Yes. Bourne, Market Deeping and the Deepings are named with Stamford because they are the same kind of job for us.",
        "Yes. Bourne and the Deepings are covered with Stamford.",
      ),
      faq(
        "How do I book work in Stamford?",
        `Call ${phone} or send photos of the room, the board or the outside wall. We reply on working days. Straightforward jobs can often be priced from the photos. Larger work may need a survey.`,
        `Call ${phone} or send photos. We reply on working days. Larger work may need a survey.`,
      ),
    ],
  },
  {
    slug: "lincolnshire",
    county: "Lincolnshire",
    towns: ["Spalding", "Pinchbeck", "Boston", "Bourne", "Stamford", "Holbeach", "Sleaford", "Long Sutton", "Crowland", "Kirton", "Gosberton", "Market Deeping", "Sutterton", "Heckington", "Sutton Bridge"],
    heroImage: "/advanta/photos/hero/van.webp",
    heroImageAlt: "Advanta Services van on a Lincolnshire job",
    heroDescription: "Electrical and air conditioning across Lincolnshire, from Spalding and Boston to Stamford, Holbeach and Sleaford. Call us to book.",
    metaTitle: "Electrical and Air Conditioning in Lincolnshire | Advanta",
    metaDescription: "Electrical and air conditioning across Lincolnshire, including Spalding, Boston, Stamford, Holbeach, Bourne and Sleaford. Call Advanta for a quote.",
    intro: [
      "Lincolnshire is where we work. Spalding and Pinchbeck are the base, and we cover Boston, Bourne, Stamford, Holbeach, Sleaford, Long Sutton and the towns listed on this page.",
      `Electrical and air conditioning from one company: rewires, fuseboards, testing, lighting and air conditioning installs. Call ${phone}. Spalding, Boston and Stamford also have their own pages if you want the town detail.`,
    ],
    faqs: [
      faq(
        "Do you cover Lincolnshire?",
        `Yes. We cover Lincolnshire for electrical work and air conditioning, including Spalding, Pinchbeck, Boston, Bourne, Stamford, Holbeach, Sleaford and the other towns on this page. Call ${phone}.`,
        `Yes. Spalding, Boston, Stamford, Holbeach, Bourne, Sleaford and the towns on this page. Call ${phone}.`,
      ),
      faq(
        "Which Lincolnshire towns have their own pages?",
        "Spalding, Boston and Stamford each have a town page. This page is the county overview, and it names the wider list, including Holbeach, Bourne, Sleaford, Long Sutton and Crowland.",
        "Spalding, Boston and Stamford have their own pages. This page covers the wider Lincolnshire list.",
      ),
      faq(
        "What electrical work do you do in Lincolnshire?",
        "Rewires, fuseboard upgrades, EICR testing, lighting, EV chargers, extra sockets and fault finding. Houses, commercial rooms and agricultural buildings. Qualified and insured, and certified where the job needs it.",
        "Rewires, fuseboards, EICRs, lighting, EV chargers and fault finding, for homes, commercial rooms and farms.",
      ),
      faq(
        "Do you install air conditioning in Lincolnshire?",
        "Yes. Single and multi-split systems for houses and commercial sites, plus servicing, repairs and replacements. Fujitsu, Daikin, Mitsubishi and Haier. Most new systems carry a 5-year warranty.",
        "Yes. Installs, servicing, repairs and replacements. Most new systems carry a 5-year warranty.",
      ),
      faq(
        "How do I get a quote for a Lincolnshire job?",
        `Call ${phone} or send the postcode and a few photos. We reply on working days, Monday to Friday, 08:00 to 17:00, usually the same day.`,
        `Call ${phone} or send photos and the postcode. We usually reply the same working day.`,
      ),
    ],
  },
  {
    slug: "cambridgeshire",
    county: "Cambridgeshire",
    towns: ["Peterborough", "Wisbech", "March", "Whittlesey", "Ely", "Huntingdon", "St Neots", "St Ives", "Hampton", "Werrington", "Orton", "Eye", "Market Deeping"],
    heroImage: "/advanta/photos/electrical/showroom-lighting.webp",
    heroImageAlt: "Commercial lighting installed for a Cambridgeshire job",
    heroDescription: "Electrical and air conditioning across Cambridgeshire, including Peterborough, Wisbech, March, Ely and Huntingdon. Call us for a quote.",
    metaTitle: "Electrical and Air Conditioning in Cambridgeshire | Advanta",
    metaDescription: "Electrical and air conditioning in Peterborough, Wisbech, March, Whittlesey, Ely, Huntingdon and across Cambridgeshire. Call Advanta for a quote.",
    intro: [
      "We cover Cambridgeshire. Peterborough and Wisbech are the towns we are in most often, with March, Whittlesey, Ely, Huntingdon, St Neots and St Ives on the same list.",
      `Both trades are available: electrical work and air conditioning. Peterborough and Wisbech have their own pages. Call ${phone}. Straightforward jobs can often be priced from that. Larger work may need a survey.`,
    ],
    faqs: [
      faq(
        "Do you cover Cambridgeshire?",
        `Yes. We cover Cambridgeshire for electrical work and air conditioning, including Peterborough, Wisbech, March, Whittlesey, Ely, Huntingdon, St Neots and St Ives. Call ${phone}.`,
        `Yes. Peterborough, Wisbech, March, Ely, Huntingdon and the towns on this page. Call ${phone}.`,
      ),
      faq(
        "Is Peterborough included?",
        "Yes. Peterborough, Hampton, Werrington, the Ortons, Eye and Whittlesey are covered, and Peterborough has its own page for the town detail.",
        "Yes. Peterborough has its own page, and Hampton, Werrington, the Ortons and Whittlesey are covered with it.",
      ),
      faq(
        "What electrical services do you provide in Cambridgeshire?",
        "Rewires, fuseboards, EICR testing, lighting, EV charging, extra circuits and fault finding. Homes and commercial rooms. You get a certificate where the work needs one.",
        "Rewires, fuseboards, EICRs, lighting, EV charging and fault finding for homes and commercial rooms.",
      ),
      faq(
        "Do you install air conditioning in Cambridgeshire?",
        "Yes. New systems, servicing, repairs and replacements, for houses and commercial sites. Most new installs carry a 5-year warranty.",
        "Yes. Installs, servicing, repairs and replacements. Most new systems carry a 5-year warranty.",
      ),
      faq(
        "How do I book work in Cambridgeshire?",
        `Call ${phone} with the town and the job, or send photos through the form. We come back, usually the same working day, and say whether we can price it from the photos or need to see the site.`,
        `Call ${phone} or send photos. We usually reply the same working day.`,
      ),
    ],
  },
  {
    slug: "norfolk",
    county: "Norfolk",
    towns: ["King's Lynn", "Downham Market", "Hunstanton", "Swaffham", "Fakenham", "Dersingham", "Heacham", "Terrington"],
    heroImage: "/advanta/photos/climate/fujitsu-patio.webp",
    heroImageAlt: "Outdoor air-conditioning unit on a residential patio",
    heroDescription: "Electrical and air conditioning across Norfolk, including King's Lynn, Downham Market, Hunstanton and Swaffham. Call us to book.",
    metaTitle: "Electrical and Air Conditioning in Norfolk | Advanta",
    metaDescription: "Electrical and air conditioning in King's Lynn, Downham Market, Hunstanton, Swaffham and across Norfolk. Call Advanta for a quote.",
    intro: [
      "We cover Norfolk. King's Lynn and Downham Market are the towns we name first, with Hunstanton, Swaffham, Fakenham, Dersingham, Heacham and Terrington on the same list.",
      `Electrical work and air conditioning are both available. Call ${phone} with the address. Straightforward jobs can often be priced from that. Larger work may need a survey.`,
    ],
    faqs: [
      faq(
        "Do you cover Norfolk?",
        `Yes. We cover Norfolk for electrical work and air conditioning, including King's Lynn, Downham Market, Hunstanton, Swaffham, Fakenham, Dersingham, Heacham and Terrington. Call ${phone}.`,
        `Yes. King's Lynn, Downham Market, Hunstanton, Swaffham and the towns on this page. Call ${phone}.`,
      ),
      faq(
        "What electrical work do you do in Norfolk?",
        "Rewires, fuseboards, EICR testing, lighting, extra sockets, EV chargers and fault finding. Houses and light commercial jobs. Qualified and insured.",
        "Rewires, fuseboards, EICRs, lighting, EV chargers and fault finding for homes and light commercial jobs.",
      ),
      faq(
        "Can you install air conditioning in King's Lynn?",
        "Yes. New splits for houses and commercial rooms in King's Lynn and the towns around it, plus servicing and repairs. Most new systems carry a 5-year warranty.",
        "Yes. Installs, servicing and repairs in King's Lynn and the towns around it. Most new systems carry a 5-year warranty.",
      ),
      faq(
        "Do you cover Hunstanton and Downham Market?",
        "Yes. Both are named, with Swaffham, Fakenham, Dersingham, Heacham and Terrington. Call with the town and we will take it from there.",
        "Yes. Hunstanton, Downham Market, Swaffham, Fakenham and the coastal villages on this page.",
      ),
      faq(
        "How do I get a Norfolk quote?",
        `Call ${phone}, Monday to Friday, 08:00 to 17:00, or send photos and the postcode. We reply, usually the same working day, and say whether we can price it from the photos or need to see the site.`,
        `Call ${phone} or send photos and the postcode. We usually reply the same working day.`,
      ),
    ],
  },
  {
    slug: "suffolk",
    county: "Suffolk",
    towns: ["Bury St Edmunds", "Newmarket", "Mildenhall", "Haverhill", "Sudbury", "Stowmarket", "Brandon", "Lakenheath"],
    heroImage: "/advanta/photos/climate/mitsubishi-outdoor.webp",
    heroImageAlt: "Mitsubishi outdoor condenser on a brick house",
    heroDescription: "Electrical and air conditioning across Suffolk, including Bury St Edmunds, Newmarket, Mildenhall and Haverhill. Call us for a quote.",
    metaTitle: "Electrical and Air Conditioning in Suffolk | Advanta",
    metaDescription: "Electrical and air conditioning in Bury St Edmunds, Newmarket, Mildenhall, Haverhill, Sudbury and across Suffolk. Call Advanta for a quote.",
    intro: [
      "We cover Suffolk. Bury St Edmunds, Newmarket, Mildenhall, Haverhill, Sudbury, Stowmarket, Brandon and Lakenheath are the towns on this page, for electrical work and air conditioning.",
      `If the job is in Suffolk, call ${phone}. We will talk it through. Straightforward jobs can often be priced from that. Larger work may need a survey. You deal with us directly, and both trades are available.`,
    ],
    faqs: [
      faq(
        "Do you cover Suffolk?",
        `Yes. We cover Suffolk for electrical work and air conditioning. Bury St Edmunds, Newmarket, Mildenhall, Haverhill, Sudbury, Stowmarket, Brandon and Lakenheath are all named here. Call ${phone}.`,
        `Yes. Bury St Edmunds, Newmarket, Mildenhall, Haverhill, Sudbury and the towns on this page. Call ${phone}.`,
      ),
      faq(
        "What electrical services do you provide in Suffolk?",
        "Rewires, fuseboard upgrades, EICR testing, lighting, EV charging, extra sockets and fault finding. Houses and commercial rooms across the towns on this page.",
        "Rewires, fuseboards, EICRs, lighting, EV charging and fault finding across the Suffolk towns on this page.",
      ),
      faq(
        "Do you install air conditioning in Suffolk?",
        "Yes. Single and multi-split systems, servicing, repairs and replacements. Fujitsu, Daikin, Mitsubishi and Haier. Most new systems carry a 5-year warranty.",
        "Yes. Installs, servicing, repairs and replacements. Most new systems carry a 5-year warranty.",
      ),
      faq(
        "Which Suffolk towns do you work in?",
        "Bury St Edmunds, Newmarket, Mildenhall, Haverhill, Sudbury, Stowmarket, Brandon and Lakenheath. If your town is nearby, call and we will take the enquiry.",
        "Bury St Edmunds, Newmarket, Mildenhall, Haverhill, Sudbury, Stowmarket, Brandon and Lakenheath. Call if you are nearby.",
      ),
      faq(
        "How do I book a job in Suffolk?",
        `Call ${phone} or send the postcode and a few photos. Hours are Monday to Friday, 08:00 to 17:00. We usually reply the same working day with a price.`,
        `Call ${phone} or send photos and the postcode. We usually reply the same working day.`,
      ),
    ],
  },
  {
    slug: "essex",
    county: "Essex",
    towns: ["Saffron Walden", "Braintree", "Chelmsford", "Colchester", "Halstead", "Great Dunmow", "Stansted", "Witham"],
    heroImage: "/advanta/photos/climate/daikin-kitchen.webp",
    heroImageAlt: "Daikin indoor air-conditioning unit in a kitchen",
    heroDescription: "Electrical and air conditioning across Essex, including Saffron Walden, Chelmsford, Colchester and Braintree. Call us to book.",
    metaTitle: "Electrical and Air Conditioning in Essex | Advanta",
    metaDescription: "Electrical and air conditioning in Saffron Walden, Chelmsford, Colchester, Braintree, Halstead and across Essex. Call Advanta for a quote.",
    intro: [
      "We cover Essex. Saffron Walden, Braintree, Chelmsford, Colchester, Halstead, Great Dunmow, Stansted and Witham are the towns on this page.",
      `Electrical and air conditioning are both available. Call ${phone} with the town and the job. Straightforward jobs can often be priced from that. Larger work may need a survey.`,
    ],
    faqs: [
      faq(
        "Do you cover Essex?",
        `Yes. We cover Essex for electrical work and air conditioning, including Saffron Walden, Braintree, Chelmsford, Colchester, Halstead, Great Dunmow, Stansted and Witham. Call ${phone}.`,
        `Yes. Saffron Walden, Chelmsford, Colchester, Braintree and the towns on this page. Call ${phone}.`,
      ),
      faq(
        "What electrical work do you do in Essex?",
        "Rewires, consumer unit upgrades, EICR testing, lighting, EV chargers, extra circuits and fault finding. Homes and commercial rooms. Certified where the job needs it.",
        "Rewires, fuseboards, EICRs, lighting, EV chargers and fault finding for homes and commercial rooms in Essex.",
      ),
      faq(
        "Can you install air conditioning in Essex?",
        "Yes. New systems for houses and commercial rooms, plus servicing, repairs and replacements. Most new installs carry a 5-year warranty.",
        "Yes. Installs, servicing, repairs and replacements. Most new systems carry a 5-year warranty.",
      ),
      faq(
        "Do you cover Chelmsford and Colchester?",
        "Yes. Chelmsford and Colchester are named with Saffron Walden, Braintree, Halstead, Stansted, Witham and Great Dunmow. Call and we will take the job on.",
        "Yes. Chelmsford, Colchester, Saffron Walden, Braintree and the other towns on this page.",
      ),
      faq(
        "How do I get an Essex quote?",
        `Call ${phone} or send photos and the postcode. Monday to Friday, 08:00 to 17:00. We aim to reply the same working day.`,
        `Call ${phone} or send photos. We aim to reply the same working day.`,
      ),
    ],
  },
  {
    slug: "hertfordshire",
    county: "Hertfordshire",
    towns: ["Bishop's Stortford", "Royston", "Hitchin", "Stevenage", "Ware", "Baldock", "Buntingford", "Letchworth"],
    heroImage: "/advanta/photos/electrical/landing-handrail.webp",
    heroImageAlt: "LED handrail lighting on a residential landing",
    heroDescription: "Electrical and air conditioning across Hertfordshire, including Royston, Hitchin, Stevenage and Bishop's Stortford. Call us for a quote.",
    metaTitle: "Electrical and Air Conditioning in Hertfordshire | Advanta",
    metaDescription: "Electrical and air conditioning in Royston, Hitchin, Stevenage, Bishop's Stortford, Letchworth and across Hertfordshire. Call Advanta for a quote.",
    intro: [
      "We cover Hertfordshire. Bishop's Stortford, Royston, Hitchin, Stevenage, Ware, Baldock, Buntingford and Letchworth are the towns on this page.",
      `Call ${phone} for electrical work or air conditioning. We will talk the job through. Straightforward jobs can often be priced from that. Larger work may need a survey. Qualified and insured, and you deal with us directly.`,
    ],
    faqs: [
      faq(
        "Do you cover Hertfordshire?",
        `Yes. We cover Hertfordshire for electrical work and air conditioning, including Bishop's Stortford, Royston, Hitchin, Stevenage, Ware, Baldock, Buntingford and Letchworth. Call ${phone}.`,
        `Yes. Royston, Hitchin, Stevenage, Bishop's Stortford, Letchworth and the towns on this page. Call ${phone}.`,
      ),
      faq(
        "What electrical services do you provide in Hertfordshire?",
        "Rewires, fuseboards, EICR testing, lighting, EV charging, extra sockets and fault finding. Houses and commercial rooms across the towns named here.",
        "Rewires, fuseboards, EICRs, lighting, EV charging and fault finding across the Hertfordshire towns on this page.",
      ),
      faq(
        "Do you install air conditioning in Hertfordshire?",
        "Yes. Single and multi-split installs, servicing, repairs and replacements. Fujitsu, Daikin, Mitsubishi and Haier. Most new systems carry a 5-year warranty.",
        "Yes. Installs, servicing, repairs and replacements. Most new systems carry a 5-year warranty.",
      ),
      faq(
        "Do you cover Stevenage and Hitchin?",
        "Yes. Stevenage, Hitchin, Letchworth, Baldock, Royston, Ware, Buntingford and Bishop's Stortford are all listed because we take the work there.",
        "Yes. Stevenage, Hitchin, Letchworth, Royston, Bishop's Stortford and the other towns on this page.",
      ),
      faq(
        "How do I book a Hertfordshire job?",
        `Call ${phone} or send the postcode and photos. Hours are Monday to Friday, 08:00 to 17:00. We usually come back the same working day.`,
        `Call ${phone} or send photos and the postcode. We usually reply the same working day.`,
      ),
    ],
  },
  {
    slug: "northamptonshire",
    county: "Northamptonshire",
    towns: ["Northampton", "Kettering", "Corby", "Wellingborough", "Oundle", "Thrapston", "Rushden", "Raunds"],
    heroImage: "/advanta/photos/electrical/three-phase-board.webp",
    heroImageAlt: "Three-phase consumer unit during an electrical installation",
    heroDescription: "Electrical and air conditioning across Northamptonshire, including Northampton, Kettering, Corby and Oundle. Call us to book.",
    metaTitle: "Electrical and Air Conditioning in Northamptonshire | Advanta",
    metaDescription: "Electrical and air conditioning in Northampton, Kettering, Corby, Wellingborough, Oundle and across Northamptonshire. Call Advanta for a quote.",
    intro: [
      "We cover Northamptonshire. Northampton, Kettering, Corby, Wellingborough, Oundle, Thrapston, Rushden and Raunds are the towns on this page.",
      `Workshops, houses and commercial rooms are all in scope, for electrical work and air conditioning. Call ${phone} and we will get a quote back to you.`,
    ],
    faqs: [
      faq(
        "Do you cover Northamptonshire?",
        `Yes. We cover Northamptonshire for electrical work and air conditioning, including Northampton, Kettering, Corby, Wellingborough, Oundle, Thrapston, Rushden and Raunds. Call ${phone}.`,
        `Yes. Northampton, Kettering, Corby, Oundle and the towns on this page. Call ${phone}.`,
      ),
      faq(
        "What electrical work do you do in Northamptonshire?",
        "Rewires, fuseboards, three-phase supplies, EICR testing, lighting, EV chargers and fault finding. Houses, workshops and commercial buildings.",
        "Rewires, fuseboards, three-phase, EICRs, lighting and fault finding for houses, workshops and commercial buildings.",
      ),
      faq(
        "Do you install air conditioning in Northamptonshire?",
        "Yes. Domestic and commercial systems, including workshops and showrooms, plus servicing and repairs. Most new systems carry a 5-year warranty.",
        "Yes. Domestic and commercial installs, servicing and repairs. Most new systems carry a 5-year warranty.",
      ),
      faq(
        "Do you cover Northampton and Kettering?",
        "Yes. Northampton, Kettering, Corby and Wellingborough are named with Oundle, Thrapston, Rushden and Raunds. Call with the site address and the job.",
        "Yes. Northampton, Kettering, Corby, Wellingborough, Oundle and the other towns on this page.",
      ),
      faq(
        "How do I get a Northamptonshire quote?",
        `Call ${phone} or send photos and the postcode. Monday to Friday, 08:00 to 17:00. We aim to reply the same working day, and say whether the price can come from the photos or the job needs a look first.`,
        `Call ${phone} or send photos. We aim to reply the same working day.`,
      ),
    ],
  },
  {
    slug: "rutland",
    county: "Rutland",
    towns: ["Oakham", "Uppingham", "Cottesmore", "Empingham", "Ketton", "Langham", "Whissendine", "Ryhall"],
    heroImage: "/advanta/photos/climate/haier-dual-residential.webp",
    heroImageAlt: "Haier outdoor air-conditioning units on a house",
    heroDescription: "Electrical and air conditioning across Rutland, including Oakham, Uppingham, Ketton and Cottesmore. Call us for a quote.",
    metaTitle: "Electrical and Air Conditioning in Rutland | Advanta",
    metaDescription: "Electrical and air conditioning in Oakham, Uppingham, Ketton, Cottesmore and across Rutland. Call Advanta for a quote.",
    intro: [
      "We cover Rutland. Oakham and Uppingham are the two towns we name first, with Cottesmore, Empingham, Ketton, Langham, Whissendine and Ryhall alongside them.",
      `The work is electrical and air conditioning. Straightforward jobs are priced before we book. Larger work may need a survey. Call ${phone}. Stone houses are familiar work, and we plan the install so the finish stays neat.`,
    ],
    faqs: [
      faq(
        "Do you cover Rutland?",
        `Yes. We cover Rutland for electrical work and air conditioning, including Oakham, Uppingham, Cottesmore, Empingham, Ketton, Langham, Whissendine and Ryhall. Call ${phone}.`,
        `Yes. Oakham, Uppingham, Ketton, Cottesmore and the villages on this page. Call ${phone}.`,
      ),
      faq(
        "What electrical services do you provide in Rutland?",
        "Rewires, fuseboards, EICR testing, lighting, extra sockets and fault finding. Houses in Oakham, Uppingham and the villages between them.",
        "Rewires, fuseboards, EICRs, lighting and fault finding in Oakham, Uppingham and the villages.",
      ),
      faq(
        "Can you install air conditioning in Oakham?",
        "Yes. New systems for houses in Oakham and Uppingham, with a careful outdoor position on brick and stone. We also service and repair existing units. Most new systems carry a 5-year warranty.",
        "Yes. New installs, servicing and repairs in Oakham and Uppingham. Most new systems carry a 5-year warranty.",
      ),
      faq(
        "Do you cover the villages as well as Oakham?",
        "Yes. Cottesmore, Empingham, Ketton, Langham, Whissendine and Ryhall are listed with Oakham and Uppingham. Call with the village and we will take the job.",
        "Yes. The villages on this page are covered with Oakham and Uppingham.",
      ),
      faq(
        "How do I book work in Rutland?",
        `Call ${phone} or send photos of the room, the board or the outside wall. We reply on working days. Straightforward jobs can often be priced from the photos. Larger work may need a survey.`,
        `Call ${phone} or send photos. We usually reply the same working day.`,
      ),
    ],
  },
];

export function getLocationBySlug(slug: string) {
  return locations.find((location) => location.slug === slug);
}
