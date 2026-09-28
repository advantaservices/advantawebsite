import type { ServiceLandingContent } from "@/components/Electrical/serviceLandingShared";

export const climateContent: Record<string, ServiceLandingContent> = {
  installations: {
    slug: "installations",
    path: "/air-conditioning/installations",
    meta: {
      title: "Air Conditioning Installation, Lincolnshire | Advanta",
      description:
        "Single and multi-split air conditioning for homes and commercial sites around Spalding and Peterborough. Fujitsu, Daikin, Mitsubishi and Haier.",
    },
    hero: {
      eyebrow: "Air conditioning",
      title: "Single and multi-split installation",
      lead: "Domestic and commercial air conditioning. Single-split for one room, multi-split where you need more. The electrical supply is part of the install. Fujitsu, Daikin, Mitsubishi and Haier. Most systems: 5-year warranty.",
      imageSrc: "/advanta/photos/climate/fujitsu-living-room.webp",
      imageAlt: "Fujitsu indoor air-conditioning unit in a living room",
      primaryCtaLabel: "Get an air-con quote",
    },
    features: {
      title: "Systems we install",
      lead: "Single-split for one room, and multi-split where you need more, in homes and on commercial sites. Fujitsu, Daikin, Mitsubishi and Haier. The electrical supply, from the consumer unit to the equipment, is part of the job.",
      imageSrc: "/advanta/photos/climate/fujitsu-commercial-four.webp",
      imageAlt: "Four Fujitsu outdoor units on a commercial install",
      blocks: [
        {
          title: "Homes",
          intro: "Sized to the room, with the outdoor unit sited so the pipe run is sensible.",
          items: ["Single-split and multi-split", "Living rooms, bedrooms and kitchens", "Outdoor units on patios, walls and side passages"],
        },
        {
          title: "Commercial",
          intro: "Workshops, showrooms, and replacement of plant that is already on site.",
          items: ["Single-split and multi-split", "Workshop and showroom cooling", "The electrical supply included"],
        },
      ],
    },
    process: {
      title: "From the room to a commissioned system",
      intro:
        "An install is sized to the rooms and the outdoor space. Single splits and multi-split, for homes and commercial sites, with the electrics included. You get a clear price before anything is ordered.",
      steps: [
        {
          title: "Look at the rooms and the outside",
          body: "Photos of the indoor wall and where an outdoor unit can sit, plus the postcode. We check the pipe run, the electrical supply, and whether one room or several need cooling. Fujitsu, Daikin, Mitsubishi and Haier are the brands we fit.",
        },
        {
          title: "A fixed price before we order",
          body: "The quote covers the indoor and outdoor units, pipework, the electrical supply and commissioning. Most new systems carry a 5-year warranty, and the cover is confirmed on the quote.",
        },
        {
          title: "Install and commission",
          body: "Units fitted, pipework and electrics completed, and the system commissioned. The site is left tidy, and you can reach us afterwards if something needs looking at.",
        },
      ],
    },
    faqs: [
      {
        question: "Which brands do you fit?",
        answer: "We install Fujitsu, Daikin, Mitsubishi and Haier, and other systems when they suit the building. The recommendation follows the rooms and the outdoor space, rather than a brand we prefer to sell.",
        answerMobile: "We fit Fujitsu, Daikin, Mitsubishi and Haier, among others. The choice follows the rooms and the outdoor space, rather than a brand we are pushing.",
      },
      {
        question: "What warranty comes with a new system?",
        answer: "Most systems we install carry a 5-year warranty. The exact cover is written on the quote before anything is ordered, so you can see what applies to your job.",
        answerMobile: "A 5-year warranty applies to most new systems we fit. We write the actual cover on the quote, so you can see it before you go ahead.",
      },
      {
        question: "Can one install cover more than a single room?",
        answer: "One room is a single-split. Several rooms, in a house or on a commercial site, is a multi-split. We price the arrangement that actually fits the building, and the electrical supply is included.",
        answerMobile: "A single-split covers one room. For several rooms, at home or on a commercial site, we use a multi-split. The electrical supply is part of that price.",
      },
      {
        question: "Where can the outdoor unit sit?",
        answer: "On a patio, a side passage or a wall, with a pipe run that stays neat. We look at that outdoor space, and at the electrical supply, before any equipment is ordered.",
        answerMobile: "A patio, a side passage or a wall, provided the pipe run can stay tidy. We check that outdoor space before the equipment is ordered.",
      },
      {
        question: "Do I need a separate electrician?",
        answer: "No. Power to the new system is part of our install, from the consumer unit to the equipment. You do not need to arrange a second electrician for that supply.",
        answerMobile: "No. The supply from the consumer unit is part of this install. You do not need a second electrician for the indoor unit or the outdoor one.",
      },
    ],
    closing: {
      title: "A system priced for the rooms",
      lead: "Photos of the indoor wall and where an outdoor unit can sit, plus the postcode. We will come back with a system that fits the space, and a price before anything is ordered.",
      primaryLabel: "Get a quote",
    },
    schemaType: "HVACBusiness",
  },
  servicing: {
    slug: "servicing",
    path: "/air-conditioning/servicing",
    meta: {
      title: "Air Conditioning Servicing, Spalding | Advanta",
      description: "Air conditioning servicing and maintenance around Spalding, Peterborough and Wisbech.",
    },
    hero: {
      eyebrow: "Air conditioning",
      title: "Servicing and maintenance",
      lead: "Planned servicing to keep a system running. Fault finding, repairs and replacements each have their own page.",
      imageSrc: "/advanta/photos/climate/service-charging.webp",
      imageAlt: "Outdoor air-conditioning unit being serviced and charged",
      primaryCtaLabel: "Book a service",
    },
    features: {
      title: "What a service covers",
      lead: "Planned maintenance on systems we installed and on systems already on the wall. Filters, coils and a refrigerant check, plus a note of anything close to failing.",
      imageSrc: "/advanta/photos/climate/haier-dual-residential.webp",
      imageAlt: "Haier outdoor dual units on a house",
      blocks: [
        {
          title: "The check",
          intro: "A service visit is the maintenance. It is not a repair with parts swapped in quietly.",
          items: ["Filters and coils", "A refrigerant check", "The system run before we leave"],
        },
        {
          title: "What you are told",
          intro: "You get a short record of the visit. If it has stopped being a service job, we say so.",
          items: ["A note of anything close to failing", "Planned visits for commercial sites", "A repair or replacement recommended when that is the better spend"],
        },
      ],
    },
    process: {
      title: "From a booking to a system that has been checked",
      intro:
        "Servicing is planned maintenance: filters, coils and a refrigerant check, with a note of anything close to failing. We service systems we installed and systems that were already on the wall.",
      steps: [
        {
          title: "Tell us the system",
          body: "Make and model if you have them, photos of the indoor and outdoor units, and the postcode. If it has stopped cooling altogether, say so. That may be a repair rather than a service, and we will tell you which it is.",
        },
        {
          title: "The service visit",
          body: "Filters and coils are attended to, the refrigerant is checked, and the system is run. Commercial sites can be put on a planned visit. Parts are not replaced on a service without a price first.",
        },
        {
          title: "A note of what we found",
          body: "You get a short record of the visit and anything that should be watched or repaired. If replacement is the better spend, we say that before another service is booked.",
        },
      ],
    },
    faqs: [
      {
        question: "Will you service a system you did not install?",
        answer: "Yes. Systems we did not fit are still serviced, where we can work on them. Send the make and model if you have them, and we will say if it is something we should leave.",
        answerMobile: "Yes. We service systems already on the wall, not only ones we fitted. The make and model, if you have them, tell us whether we can take it on.",
      },
      {
        question: "What does a service visit include?",
        answer: "Filters and coils are attended to, the refrigerant is checked, and the system is run. You get a short note of anything close to failing. Parts are not replaced without a price.",
        answerMobile: "Filters, coils and a refrigerant check, then the system is run. You get a note of anything close to failing. Parts are not changed without a price.",
      },
      {
        question: "The unit has stopped cooling. Is that still a service?",
        answer: "Send photos of both units, the make if you can see it, and say what it is doing. We will tell you whether that sounds like a service, a repair, or a system ready to replace.",
        answerMobile: "Send photos of the indoor and outdoor units and describe the fault. We will tell you if it is a service, a repair, or time to replace it.",
      },
      {
        question: "When is another repair the wrong spend?",
        answer: "When the plant is old, parts are hard to find, or the same fault has already come back. We say that before another repair is booked, so you can choose with the figures in front of you.",
        answerMobile: "When the unit is old, parts are hard to get, or the same fault has come back. We will say that before another repair is booked in.",
      },
      {
        question: "Can a commercial site go on a regular visit?",
        answer: "Yes. Offices, workshops and other commercial plant can go on a planned service, at an interval that suits how the system is used. The first enquiry still starts with photos and the postcode.",
        answerMobile: "Yes. Workshops, offices and other commercial plant can be booked as a planned service, at an interval that matches how hard the system works.",
      },
    ],
    closing: {
      title: "A service booked around the system you have",
      lead: "Photos of the indoor and outdoor units, the make if you have it, and the postcode. If it has stopped cooling, say so. We will tell you whether it is a service or a repair.",
      primaryLabel: "Get a quote",
    },
    schemaType: "HVACBusiness",
  },
  repairs: {
    slug: "repairs",
    path: "/air-conditioning/repairs",
    meta: {
      title: "Air Conditioning Repairs, Spalding | Advanta",
      description: "Air conditioning fault finding and repairs for homes and commercial sites around Spalding and Peterborough.",
    },
    hero: {
      eyebrow: "Air conditioning",
      title: "Fault finding and repairs",
      lead: "A system that has stopped cooling, is leaking, or is making a noise. We find the fault before we order parts.",
      imageSrc: "/advanta/photos/climate/repair-outdoor-board.webp",
      imageAlt: "Outdoor air-conditioning unit opened for a repair",
      primaryCtaLabel: "Report a fault",
    },
    features: {
      title: "Repairs we take on",
      lead: "Systems that have stopped cooling or heating, are leaking, are noisy, or trip the supply. Homes and commercial plant, including systems we did not install, where parts are available.",
      imageSrc: "/advanta/photos/climate/engineer-airstage.webp",
      imageAlt: "Engineer working on a Fujitsu air-conditioning system",
      blocks: [
        {
          title: "Typical faults",
          intro: "The calls that are a repair, rather than a routine service.",
          items: ["No cooling or heating", "Leaks and noisy units", "Units that trip the supply"],
        },
        {
          title: "On the visit",
          intro: "The cause is found before parts are ordered. If the system is not worth repairing, that is said before money is spent on it.",
          items: ["Diagnosis before parts are ordered", "A price before the repair goes ahead", "Replacement recommended when that is the better spend"],
        },
      ],
    },
    process: {
      title: "From the fault to a tested repair",
      intro:
        "A repair starts with the fault, not a guessed part. No cooling, a leak, a noise, or a unit that trips the supply: we find the cause, price the work, and only continue when you are happy with it.",
      steps: [
        {
          title: "Tell us what it is doing",
          body: "Photos of the indoor and outdoor units, the make if you can see it, and a description of the fault. We work on systems we installed and on plant already on site, where parts are available.",
        },
        {
          title: "Diagnose, then quote",
          body: "The cause is found before parts are ordered. You get a price for the repair. If the system is old, parts are scarce, or the same fault has come back, we will say that replacement is the better spend.",
        },
        {
          title: "Repair and test",
          body: "The fault is put right and the system is run before we leave. You get a note of what failed and what was replaced.",
        },
      ],
    },
    faqs: [
      {
        question: "Do you repair systems installed by someone else?",
        answer: "Yes, where we can get the parts and it is a system we work on. Photos of both units, and the make if you can see it, are enough for us to say whether we can take the fault on.",
        answerMobile: "Yes, if we can get parts and it is a type we work on. Photos of the indoor and outdoor units tell us whether we can take the fault.",
      },
      {
        question: "Are parts fitted before I have agreed a price?",
        answer: "No. The fault is diagnosed first. You get a price for the repair, and the work only goes ahead once you are happy with that figure. Parts are not ordered on a guess.",
        answerMobile: "No. You get a price after the fault is found, and before parts are ordered. The repair only goes ahead once you are happy with it.",
      },
      {
        question: "What if the repair is not worth doing?",
        answer: "We say so. If the system is old, parts are scarce, or the same fault has come back, replacement is often the better spend. That work has its own page, and we will point you to it.",
        answerMobile: "We say so before more money is spent. An old system, scarce parts, or a fault that has come back usually means replacement is the better job.",
      },
      {
        question: "What sort of fault is this page for?",
        answer: "No cooling or heating, water where it should not be, a unit that is noisy, or one that keeps tripping the supply. Describe what it is doing, and send photos of both units.",
        answerMobile: "A system with no cooling or heating, a leak, a noise, or one that trips the supply. Photos of both units and a short note are enough to start.",
      },
      {
        question: "How long does a repair usually take?",
        answer: "It depends on the fault and whether the part is to hand. Straightforward repairs are often finished on the visit. If a part has to be ordered, we say that when we quote.",
        answerMobile: "Straightforward faults are often finished on the day. If a part has to be ordered, we tell you that in the quote rather than after we have left.",
      },
    ],
    closing: {
      title: "The fault found before parts are ordered",
      lead: "Photos of both units, the make if you can see it, and a short description of what it is doing. You get a price for the repair, and we will say if replacement is the better spend.",
      primaryLabel: "Get a quote",
    },
    schemaType: "HVACBusiness",
  },
  replacements: {
    slug: "replacements",
    path: "/air-conditioning/replacements",
    meta: {
      title: "Air Conditioning Replacement, Lincolnshire | Advanta",
      description: "Replacement and upgrade of existing air conditioning around Spalding and Peterborough. Most new systems: 5-year warranty.",
    },
    hero: {
      eyebrow: "Air conditioning",
      title: "Replacement and upgrade",
      lead: "Swap an old or failed system for a new one. Domestic and commercial. Most new systems carry a 5-year warranty.",
      imageSrc: "/advanta/photos/climate/replacement-indoor-unit.webp",
      imageAlt: "Indoor air-conditioning unit in a commercial room",
      primaryCtaLabel: "Get a replacement quote",
    },
    features: {
      title: "What we replace",
      lead: "An indoor unit, an outdoor unit, or the whole system, when another repair is no longer the sensible spend. Domestic and commercial. Most new systems carry a 5-year warranty.",
      imageSrc: "/advanta/photos/climate/daikin-kitchen.webp",
      imageAlt: "Daikin indoor unit in a kitchen",
      blocks: [
        {
          title: "Homes",
          intro: "Like-for-like, or a step up to a quieter or larger unit.",
          items: ["Like-for-like replacement", "A quieter or larger unit", "Single and multi-split"],
        },
        {
          title: "Commercial",
          intro: "Failed plant taken out and a new system commissioned, with the electrics included.",
          items: ["Removal of the failed plant", "The new system commissioned", "A 5-year warranty on most new systems"],
        },
      ],
    },
    process: {
      title: "From the old plant to a new system",
      intro:
        "Replacement is for a system that has failed, or is no longer worth repairing. We remove the old plant, fit a new one sized to the space, and commission it, with the electrics included. Most new systems carry a 5-year warranty.",
      steps: [
        {
          title: "Show us what is there",
          body: "Photos of the existing indoor and outdoor units, and the postcode. We will say if one outdoor unit can be swapped, or if the rest of the system should change at the same time.",
        },
        {
          title: "Quote the new system",
          body: "A fixed price for removal, the new equipment, pipework and the electrical supply. Like-for-like, or an upgrade to a quieter or larger unit, at home or on a commercial site. The warranty cover is written on the quote.",
        },
        {
          title: "Remove, install and commission",
          body: "The old plant comes out. The new system is fitted, commissioned and left tidy, and the controls are explained before we leave.",
        },
      ],
    },
    faqs: [
      {
        question: "Can you change just the outdoor unit?",
        answer: "Often, yes. We will say if the indoor unit, or the rest of a multi-split, ought to change at the same time. Photos of what is there now are enough for that.",
        answerMobile: "Yes, in many cases. We will tell you if the indoor units should be replaced too. A photo of each existing unit is enough for that.",
      },
      {
        question: "Do replacement systems include a warranty?",
        answer: "Most new systems we install carry a 5-year warranty. The cover for your system is confirmed on the quote, along with the price for removal and the new equipment.",
        answerMobile: "Most replacements include a 5-year warranty. We confirm the cover on the quote, together with removal of the old plant and the new equipment.",
      },
      {
        question: "Is the old equipment taken away?",
        answer: "Yes. Removal of the old indoor and outdoor plant is part of the replacement, not a separate arrangement. The new system is commissioned before we leave, and the site is left tidy.",
        answerMobile: "Yes. The old plant is removed as part of the job, the new system is commissioned, and the area is left tidy when we finish.",
      },
      {
        question: "Can the new unit be quieter or larger?",
        answer: "Yes. Like-for-like is one option. We can also quote a quieter indoor unit, or a larger one, if the room needs it. That difference is written on the quote before anything is ordered.",
        answerMobile: "Yes. Like-for-like, or a quieter or larger unit if that suits the room better. You see the difference on the quote before we order anything.",
      },
      {
        question: "Does a replacement include the electrics?",
        answer: "Yes. The electrical supply is part of the new installation, as it is on a first-time fit. You are not arranging a second firm to reconnect power after the old plant comes out.",
        answerMobile: "The electrics are included. The new system is supplied from the board as part of the job, so you are not booking that connection separately.",
      },
    ],
    closing: {
      title: "A new system priced from the one you have",
      lead: "Photos of the existing indoor and outdoor units, and the postcode. We will say if one unit can be swapped or the whole system should change, and what that will cost.",
      primaryLabel: "Get a quote",
    },
    schemaType: "HVACBusiness",
  },
};

export const climateSlugs = Object.keys(climateContent);
