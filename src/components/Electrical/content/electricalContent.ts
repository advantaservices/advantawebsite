import type { ServiceLandingContent } from "@/components/Electrical/serviceLandingShared";

export const electricalContent: Record<string, ServiceLandingContent> = {
  rewires: {
    slug: "rewires",
    path: "/electrical/rewires",
    meta: {
      title: "House Rewires in Spalding & Peterborough | Advanta",
      description:
        "Full and partial rewires for homes and renovations around Spalding and Peterborough. Clear pricing and certified work.",
    },
    hero: {
      eyebrow: "Electrical",
      title: "Full and partial rewires",
      lead: "Renovation first-fix, consumer unit upgrades as part of a rewire, and making older houses safe to live in. The photos are real jobs.",
      imageSrc: "/advanta/photos/electrical/rewire-trunking.webp",
      imageAlt: "Trunking and first-fix cabling during a rewire",
      primaryCtaLabel: "Get a rewire quote",
    },
    features: {
      title: "Rewires we take on",
      lead: "Full-house rewires, and partial jobs where only some circuits need replacing. Lived-in houses and first-fix renovations around Spalding, Pinchbeck and Peterborough.",
      imageSrc: "/advanta/photos/electrical/rewire-exposed.webp",
      imageAlt: "Exposed first-fix cables during a house rewire",
      blocks: [
        {
          title: "Full rewires",
          intro: "The installation is replaced through the house, including a new consumer unit where that is part of the job.",
          items: ["First fix and second fix", "A new consumer unit, labelled and tested", "A certificate when the work is complete"],
        },
        {
          title: "Partial rewires",
          intro: "Kitchens, extensions and individual circuits, without turning the rest of the house into a building site.",
          items: ["Kitchen and extension circuits", "Lighting or socket circuits that are past it", "Circuits an EICR has already failed"],
        },
      ],
    },
    process: {
      title: "From the existing board to a certified rewire",
      intro:
        "A rewire is planned around the house and how it is lived in. We look at the consumer unit, the circuits that need replacing, and whether you are in the property while the work is done. You get a fixed price before we book, and a certificate when the testing is finished.",
      steps: [
        {
          title: "Tell us about the house",
          body: "Photos of the consumer unit and a note of the rooms involved are usually enough to start. If the house is occupied, or it is a first-fix renovation, we will say when a visit is needed before the price is fixed.",
        },
        {
          title: "Agree the scope",
          body: "Full rewire, or a partial job such as a kitchen, an extension, or the circuits an EICR has already failed. The quote includes a new consumer unit where that is part of the work, and a plan for access so you are not left without power longer than agreed.",
        },
        {
          title: "First fix, second fix, certificate",
          body: "Cables in, accessories on, then test and certify. Where notification is required, we handle it. The board is labelled and the job is left tidy.",
        },
      ],
    },
    faqs: [
      {
        question: "Can you rewire a house we are still living in?",
        answer: "Yes. We agree access, and which circuits stay on, before the job is booked. Larger rewires are often staged, so the house is not left without lighting or sockets for longer than we have agreed.",
        answerMobile: "Yes. We agree access and which circuits stay live. Larger jobs are staged, so you are not left without lights or sockets for longer than agreed.",
      },
      {
        question: "Will the rewire come with a certificate?",
        answer: "Yes. The new wiring is tested and you get the certificate when that is finished. If the work has to be notified, we deal with that as part of the job rather than leaving it with you.",
        answerMobile: "Yes. The rewire is tested and you get the certificate at the end. If the job has to be notified, we handle that rather than leaving it with you.",
      },
      {
        question: "Do you take on partial rewires?",
        answer: "Yes. Kitchens, extensions and circuits an EICR has already failed are normal work. If a full rewire is the more sensible job, we will say so before the smaller one is booked.",
        answerMobile: "Yes. Kitchens, extensions and circuits that have failed an EICR are normal work. We will say if a full rewire makes more sense.",
      },
      {
        question: "How is a rewire priced?",
        answer: "Photos of the consumer unit, and a note of the rooms involved, are usually enough for a first figure. Older houses and first-fix renovations often need a visit before that price is fixed.",
        answerMobile: "Photos of the consumer unit and the rooms are usually enough for a first figure. Older houses often need a visit before the price is fixed.",
      },
      {
        question: "How long is the power off for?",
        answer: "It depends on the house and whether you are living in it during the work. We agree the stages before we start, so you know which days the power is off and when it comes back.",
        answerMobile: "We agree the stages before we start, so you know which days the power is off and when it comes back. Lived-in houses are planned around that.",
      },
    ],
    closing: {
      title: "A rewire priced from the house you have",
      lead: "Photos of the consumer unit and a short note of the rooms are usually enough to start. We will come back with a figure, and say if a visit is needed before that price is fixed.",
      primaryLabel: "Get a quote",
    },
  },
  fuseboards: {
    slug: "fuseboards",
    path: "/electrical/fuseboards",
    meta: {
      title: "Fuseboard Upgrades in Spalding | Advanta",
      description: "Consumer unit upgrades around Spalding and Peterborough. Hager and similar boards, labelled, tested and certified.",
    },
    hero: {
      eyebrow: "Electrical",
      title: "Fuseboard upgrades",
      lead: "Replacing tired consumer units with modern RCBO boards, labelled circuits and a clean second fix.",
      imageSrc: "/advanta/photos/electrical/fuseboard-hager.webp",
      imageAlt: "Hager consumer unit second fix",
      primaryCtaLabel: "Get a fuseboard quote",
    },
    features: {
      title: "Boards we fit",
      lead: "Replacement of a tired consumer unit with a modern board, sized to the circuits already in the property. Domestic and light commercial, including Hager.",
      imageSrc: "/advanta/photos/electrical/fuseboard-bg.webp",
      imageAlt: "BG consumer unit second fix",
      blocks: [
        {
          title: "The upgrade",
          intro: "Each circuit is identified before the old board comes off, so the new one is the right size and readable.",
          items: ["RCBO consumer units", "Metal boards and dual-RCD replacements where they suit the install", "Every way labelled"],
        },
        {
          title: "What is included",
          intro: "Testing and the certificate are part of the job, not an extra once the cover is on.",
          items: ["Tested and certified", "A record of the finished board", "A straight answer if the rest of the wiring needs work"],
        },
      ],
    },
    process: {
      title: "From the old board to a labelled upgrade",
      intro:
        "A fuseboard upgrade replaces a tired consumer unit with a modern RCBO board. We look at the existing circuits first, so the new board is the right size and every way is labelled. Testing and certification are part of the job.",
      steps: [
        {
          title: "Send the existing board",
          body: "A clear photo of the consumer unit, open if you can do that safely, plus the postcode. We will say if other wiring needs attention before a straight swap is the right job.",
        },
        {
          title: "A fixed price before we book",
          body: "The quote covers the new board, the changeover and the certificate. If a circuit is unlikely to test cleanly, we tell you before the day starts rather than halfway through it.",
        },
        {
          title: "Changeover, test and label",
          body: "The new board goes on, every circuit is labelled, and the installation is tested before we leave. You get the certificate and a record of the finished board.",
        },
      ],
    },
    faqs: [
      {
        question: "When does a fuseboard need replacing?",
        answer: "Often after an EICR, when there are no spare ways left, or the board still uses rewireable fuses. If an upgrade is not the right job yet, we will say that plainly before anything is booked.",
        answerMobile: "Often after an EICR, if there are no spare ways, or the board still has rewireable fuses. If an upgrade is not needed yet, we will say so.",
      },
      {
        question: "Which consumer units do you fit?",
        answer: "We fit modern RCBO consumer units, including Hager, on houses and light commercial jobs. Each circuit is labelled, the board is tested, and you have the certificate before we leave.",
        answerMobile: "We fit modern RCBO consumer units, including Hager. Every circuit is labelled, the board is tested, and the certificate is ready before we leave.",
      },
      {
        question: "Will the house be without power?",
        answer: "Yes, for the changeover itself. A straightforward house is often done in a day. We agree the start with you, so you know when the power goes off and when it is back.",
        answerMobile: "Yes, for the changeover. A straightforward domestic board is often done in a day. We agree the timing so you know when the power is off.",
      },
      {
        question: "Is the new board certified?",
        answer: "Yes. The upgrade is tested and the certificate comes with it. If the rest of the wiring needs attention, we tell you, rather than covering it with a new board and saying nothing.",
        answerMobile: "Yes. The new board is tested and certified. If the rest of the wiring needs work, we tell you rather than hiding it behind a new cover.",
      },
      {
        question: "Can you add ways to the board I already have?",
        answer: "Sometimes, if the board is modern and still has spare capacity. If it is full, or it is an old fuse board, a replacement is usually the cleaner job, and we will say which applies.",
        answerMobile: "Sometimes, if the board is modern and has room. If it is full, or it is an old fuse board, a replacement is usually the better job.",
      },
    ],
    closing: {
      title: "An upgrade priced from the board you have",
      lead: "A clear photo of the consumer unit, open if you can do that safely, plus the postcode. We will say if a straight swap is the right job, and what the new board will cost.",
      primaryLabel: "Get a quote",
    },
  },
  eicr: {
    slug: "eicr",
    path: "/electrical/eicr",
    meta: {
      title: "EICR Testing in Peterborough & Spalding | Advanta",
      description: "Electrical Installation Condition Reports for homes and landlords around Spalding, Peterborough and Wisbech.",
    },
    hero: {
      eyebrow: "Electrical",
      title: "EICR testing",
      lead: "Condition reports that tell you what is actually wrong. Including the burnt sockets and tired boards we photograph on real jobs.",
      imageSrc: "/advanta/photos/electrical/eicr-old-board.webp",
      imageAlt: "Older consumer unit opened during an EICR",
      primaryCtaLabel: "Book an EICR",
    },
    features: {
      title: "What an EICR covers",
      lead: "Inspection and testing of the fixed wiring, written so a landlord, agent or homeowner can act on it. Portable appliances are a PAT test, booked separately.",
      imageSrc: "/advanta/photos/electrical/eicr-distribution-board.webp",
      imageAlt: "Distribution board labelled during an EICR",
      blocks: [
        {
          title: "The inspection",
          intro: "The same visit whether the report is for you, a letting agent or an insurer.",
          items: ["Periodic inspection of the fixed wiring", "Observations coded C1, C2, C3 or FI", "A written report you can pass on"],
        },
        {
          title: "If something fails",
          intro: "The report stands on its own. Putting the faults right is a separate quote, and you do not have to use us for it.",
          items: ["A price for what the report finds", "Fuseboard upgrades after a fail", "Socket and circuit repairs"],
        },
      ],
    },
    process: {
      title: "From the visit to a report you can use",
      intro:
        "An EICR is an inspection of the fixed wiring, written so a landlord, agent or homeowner can act on it. We test the installation, code what we find, and hand you the report. Remedial work is quoted separately if you want it done.",
      steps: [
        {
          title: "Tell us the property",
          body: "House, flat or commercial room, and the postcode. Landlord and homeowner inspections are priced the same way: a clear figure before the visit is booked.",
        },
        {
          title: "Inspect and test",
          body: "We work through the fixed wiring, the consumer unit and the accessories. Observations are coded C1, C2, C3 or FI, so you can see what is dangerous, what should be improved, and what needs further investigation.",
        },
        {
          title: "The report, then remedials if you want them",
          body: "You get a written report you can pass on. If we find a failed board, a burnt accessory or a circuit that should be repaired, we can quote that work. You are not obliged to use us for it.",
        },
      ],
    },
    faqs: [
      {
        question: "How long does the inspection take?",
        answer: "A typical house is a few hours, depending on its size and how easily we can reach the board and the accessories. The power is off in stages, and we agree that timing with you first.",
        answerMobile: "A typical house is a few hours, depending on size and access. The power comes off in stages, and we agree that timing with you first.",
      },
      {
        question: "Who usually books an EICR?",
        answer: "Landlords, homeowners, and anyone selling or letting a property. You receive a written report with coded observations, which you can pass to an agent, a buyer or an insurer.",
        answerMobile: "Landlords, homeowners and people selling or letting. You get a written report, with coded observations, that you can pass to an agent or insurer.",
      },
      {
        question: "What do C1, C2, C3 and FI mean?",
        answer: "C1 is danger present, C2 is potentially dangerous, and C3 is an improvement. FI means further investigation. We explain whichever of those apply to your property, in plain language.",
        answerMobile: "C1 is danger present, C2 is potentially dangerous, C3 is an improvement, and FI means further investigation. We explain the ones that apply.",
      },
      {
        question: "Can you put right what the report finds?",
        answer: "Yes. A burnt socket, a tired consumer unit or a failed circuit can be quoted once the report is written. You can take that remedial work to us, or elsewhere. There is no obligation.",
        answerMobile: "Yes. Burnt sockets, a tired board and failed circuits can be quoted as follow-up work. You are not obliged to book those repairs with us.",
      },
      {
        question: "Does someone need to be at the property?",
        answer: "Someone needs to let us in, and to be available while the power is switched off in stages. A landlord can arrange that with a tenant or an agent. We agree it before the day is booked.",
        answerMobile: "Someone needs to let us in and be available while the power is off in stages. A landlord can arrange that with a tenant or an agent beforehand.",
      },
    ],
    closing: {
      title: "An inspection with a price before we book",
      lead: "Tell us the property and the postcode. Landlord or homeowner, you get a figure before the visit is booked, and a written report you can pass on.",
      primaryLabel: "Get a quote",
    },
  },
  lighting: {
    slug: "lighting",
    path: "/electrical/lighting",
    meta: {
      title: "Lighting Installation, Lincolnshire | Advanta",
      description: "Indoor and outdoor lighting for homes and commercial spaces around Spalding, Peterborough and Boston.",
    },
    hero: {
      eyebrow: "Electrical",
      title: "Indoor and outdoor lighting",
      lead: "Showrooms, landings, media walls, patio lights and commercial track. Finished work we have actually installed.",
      imageSrc: "/advanta/photos/electrical/showroom-lighting.webp",
      imageAlt: "Commercial showroom lighting installation",
      primaryCtaLabel: "Get a lighting quote",
    },
    features: {
      title: "Lighting we install",
      lead: "Indoor and outdoor lighting for houses and commercial rooms, planned around the space. Showrooms, landings, media walls, patios and warehouse floods are all normal work.",
      imageSrc: "/advanta/photos/electrical/outdoor-patio.webp",
      imageAlt: "Outdoor wall lights on a patio at night",
      blocks: [
        {
          title: "Homes",
          intro: "Light where the room needs it, on the existing circuit when that is safe, or on a new one when it is not.",
          items: ["Landing and handrail LEDs", "Media-wall lighting", "Pendants and outdoor wall lights"],
        },
        {
          title: "Commercial",
          intro: "Finished schemes for rooms people see, and practical light for warehouses and yards.",
          items: ["Showroom pendants", "Track and containment", "Warehouse and flood lighting"],
        },
      ],
    },
    process: {
      title: "From the room to a finished lighting scheme",
      intro:
        "Lighting is planned around the space, not a fitting from a catalogue. We look at where the light needs to fall, how the cables can run, and whether the existing circuit can take the extra load. Homes and commercial rooms are both normal work.",
      steps: [
        {
          title: "Show us the space",
          body: "Photos of the room or the outside elevation, and a note of what you want lit. A simple sketch is enough. On a larger commercial room we talk through positions before second fix.",
        },
        {
          title: "Positions and a clear price",
          body: "Pendants, track, handrail LEDs, a media wall, patio lights or warehouse floods. The quote says what is being fitted and whether it needs a new circuit. If the existing wiring cannot take it, we say so before we start.",
        },
        {
          title: "Fit, test and leave it working",
          body: "First fix where the ceilings are open, second fix once the room is ready. Outdoor lights are cabled neatly and aimed so they light the space without glaring into the neighbours.",
        },
      ],
    },
    faqs: [
      {
        question: "Can you plan the lighting as well as fit it?",
        answer: "We work from your layout, or from a simple sketch of the room. On a larger commercial space we talk through the positions on site before anything is fixed in the ceiling.",
        answerMobile: "Yes. We work from your layout or a simple sketch. On a larger commercial room, we agree the positions on site before second fix.",
      },
      {
        question: "Do you install outdoor lighting?",
        answer: "Yes. Patio wall lights, floodlights and warehouse exteriors are normal jobs. We will talk about glare, and about a cable route that stays tidy on the outside of the building.",
        answerMobile: "Yes. Patio wall lights, floodlights and warehouse exteriors are normal work. We look at glare, and at a tidy route for the cables.",
      },
      {
        question: "Can lights be added without a full rewire?",
        answer: "Often yes. Extra pendants, a media wall, or LED lighting along a landing, can be added on their own. If the existing circuit cannot take them, we say so before any work starts.",
        answerMobile: "Often yes: extra pendants, a media wall, or lighting on a landing. If the circuit cannot take the extra load, we say so before we start.",
      },
      {
        question: "Do you supply the light fittings?",
        answer: "We can fit lights you have already bought, or supply them as part of the quote. The price says which it is, and we will say if a fitting is unsuitable for the room or the circuit.",
        answerMobile: "We can fit lights you already have, or supply them in the quote. We will say if a fitting is unsuitable for the room or the circuit.",
      },
      {
        question: "Is a commercial room different from a house?",
        answer: "The principle is the same: where the light needs to fall, and whether the circuit can take it. Showrooms, track and warehouse floods are agreed on site, then priced as one clear job.",
        answerMobile: "The same rules apply: where the light falls, and whether the circuit can take it. Larger rooms are talked through on site before we price the work.",
      },
    ],
    closing: {
      title: "Lighting priced around the room",
      lead: "Photos of the space, and a note of what you want lit, are enough to start. We will come back with the fittings, whether a new circuit is needed, and a clear price.",
      primaryLabel: "Get a quote",
    },
  },
  "ev-charging": {
    slug: "ev-charging",
    path: "/electrical/ev-charging",
    meta: {
      title: "EV Charger Installation, Spalding | Advanta",
      description: "Home EV charger installation around Spalding and Peterborough, including Rolec. One real install photo.",
    },
    hero: {
      eyebrow: "Electrical",
      title: "Home EV charger installation",
      lead: "We install home chargers, including Rolec. We have one finished photo of this work so far, and we will not invent a gallery around it.",
      imageSrc: "/advanta/photos/electrical/ev-rolec.webp",
      imageAlt: "Rolec home EV charger on a brick cottage",
      primaryCtaLabel: "Get an EV quote",
    },
    features: {
      title: "What the install includes",
      lead: "A home charger on its own circuit, with the route to the parking bay agreed first. We fit common domestic chargers, including Rolec.",
      imageSrc: "/advanta/photos/electrical/ev-rolec.webp",
      imageAlt: "Rolec charger on brickwork",
      blocks: [
        {
          title: "The charger",
          intro: "Taken from the consumer unit on a dedicated circuit, not shared with the rest of the house.",
          items: ["Home chargers, including Rolec", "A dedicated circuit from the board", "Outdoor-rated isolation where the run needs it"],
        },
        {
          title: "The supply",
          intro: "We check whether the incoming supply can take the extra load. We will not promise a grant we cannot confirm.",
          items: ["The board and the bay looked at before the price is fixed", "Advice if the supply is tight", "A fixed price for the circuit and the install"],
        },
      ],
    },
    process: {
      title: "From the drive to a dedicated charger",
      intro:
        "A home charger goes on its own circuit from the consumer unit, with a tidy route to the parking bay. We look at the supply, the wall or post, and whether the board has room before anything is ordered.",
      steps: [
        {
          title: "Photos of the board and the bay",
          body: "The consumer unit, and the wall or post where the charger will sit, plus the postcode. Tell us the model if you already have one in mind. We fit common domestic chargers, including Rolec.",
        },
        {
          title: "Check the supply, then price it",
          body: "If the incoming supply looks tight for the extra load, we say so before we book. The quote covers the dedicated circuit, outdoor isolation where that is needed, and the install itself.",
        },
        {
          title: "Install and test",
          body: "The charger is fitted, connected and tested. You get a straightforward explanation of how to use it, and certification for the new circuit.",
        },
      ],
    },
    faqs: [
      {
        question: "Will you install a charger I have already chosen?",
        answer: "We fit common domestic chargers, Rolec included. Tell us the model and we will confirm we can install it, on its own circuit, before anything is ordered or a date is booked.",
        answerMobile: "We fit the usual domestic chargers, Rolec among them. Send the model and we will confirm it can be installed before anything is booked.",
      },
      {
        question: "What should I send for a price?",
        answer: "Photos of the consumer unit and of the wall or post where the charger will sit, plus the postcode. If the incoming supply looks tight for the extra load, we say so before we book.",
        answerMobile: "Photos of the consumer unit and the wall or post, plus the postcode. If the supply looks tight for the extra load, we say so before we book.",
      },
      {
        question: "Does the charger need its own circuit?",
        answer: "Yes. A home charger goes on its own circuit from the consumer unit to the bay. Outdoor-rated isolation is included where the run needs it, and that sits inside the quoted install.",
        answerMobile: "Yes. It is a dedicated circuit from the board to the bay. Where the cable is outside, the isolation is outdoor-rated, and that is part of the job.",
      },
      {
        question: "Can it go on a drive away from the house?",
        answer: "Yes, where there is a sensible cable route from the consumer unit to the bay. A long run, or a route under a drive, is priced into the job once we have seen the photos or the site.",
        answerMobile: "Yes, if there is a sensible route from the board to the bay. A long run, or one under the drive, is included in the price once we have seen it.",
      },
      {
        question: "Do you build grants into the quote?",
        answer: "We price the installation itself. If a grant or a tariff depends on a scheme we cannot confirm for your property, we will say so, rather than guess it into the figure.",
        answerMobile: "We price the installation. If a grant depends on a scheme we cannot confirm for your house, we say so rather than guessing it into the quote.",
      },
    ],
    closing: {
      title: "A charger priced from the drive and the board",
      lead: "Photos of the consumer unit and the wall or post, plus the postcode. Tell us the model if you have one in mind. If the supply looks tight, we say so before we book.",
      primaryLabel: "Get a quote",
    },
  },
  installations: {
    slug: "installations",
    path: "/electrical/installations",
    meta: {
      title: "Electrical Installations, Spalding | Advanta",
      description: "New electrical installations and alterations for houses, commercial rooms and farms around Spalding and Peterborough.",
    },
    hero: {
      eyebrow: "Electrical",
      title: "New installations and alterations",
      lead: "New circuits and alterations for houses, commercial rooms and agricultural buildings. Extra sockets, lighting and three-phase each have their own page.",
      imageSrc: "/advanta/photos/electrical/plant-room.webp",
      imageAlt: "Commercial plant room panel and cable tray during an installation",
      primaryCtaLabel: "Get an install quote",
    },
    features: {
      title: "Installations we take on",
      lead: "New circuits and alterations for houses, commercial rooms and agricultural buildings. A single extra socket, a lighting job or three-phase each have their own page when that is the whole job.",
      imageSrc: "/advanta/photos/electrical/cable-tray.webp",
      imageAlt: "Cable tray and containment on a steel beam during a fit-out",
      blocks: [
        {
          title: "New circuits",
          intro: "Planned around the board that is already there, and around what the building is for.",
          items: ["New circuits and alterations", "Houses, commercial rooms and farms", "An upgrade of the board first, if it has no room"],
        },
        {
          title: "The wider job",
          intro: "This page is for work that is more than one circuit type. The pieces below are often part of it.",
          items: ["Extra sockets", "Three-phase supplies", "Power to a garage, workshop or outbuilding"],
        },
      ],
    },
    process: {
      title: "From the brief to a tested installation",
      intro:
        "New circuits and alterations for houses, commercial rooms and agricultural buildings. We plan the work around the existing board and what the building is for, then test and certify what we have added.",
      steps: [
        {
          title: "Tell us the building",
          body: "House, commercial room, workshop or farm, and what needs to run. A photo of the consumer unit and the postcode are enough to start. A single extra socket, a lighting job or three-phase each have their own page if that is all you need.",
        },
        {
          title: "Scope and a fixed price",
          body: "We agree the circuits, the route, and whether the board needs space or an upgrade first. Agricultural and commercial loads are priced from what you will actually run.",
        },
        {
          title: "Install, test and certify",
          body: "Containment, cable and accessories fitted to suit the building. The new work is tested, certificates are issued where the job requires them, and the site is left tidy.",
        },
      ],
    },
    faqs: [
      {
        question: "Where do PAT testing, alarms and CCTV sit?",
        answer: "Each has its own page, so the scope of this one stays clear. Tell us the site and what you need, and we will say whether it belongs here or on one of those pages.",
        answerMobile: "PAT testing, alarms and CCTV each have their own page. Tell us the site and we will point you to the right one, or price it from here.",
      },
      {
        question: "Do you work on farms and workshops?",
        answer: "Yes. Farms, workshops and commercial rooms are regular work. That includes three-phase, and a new supply out to a garage or outbuilding, when that is what the building needs.",
        answerMobile: "Yes. We work on farms, in workshops and in commercial rooms, including three-phase and a supply out to a garage or outbuilding.",
      },
      {
        question: "Can you add one socket or one light on its own?",
        answer: "Yes. One extra socket, a light, or a supply to a garage is priced the same way as a larger install. We will say if the board needs space before that circuit can go on.",
        answerMobile: "Yes. A single socket, a light, or a small new circuit is priced the same way as a bigger install. It does not need to become a larger job.",
      },
      {
        question: "Do you install in commercial buildings?",
        answer: "Yes. Shops, plant rooms, workshops and similar spaces are part of this work. New circuits are planned around the existing board, then tested and certified for what we have added.",
        answerMobile: "Yes. Shops, workshops and plant rooms are normal work. We plan the new circuits around the board you have, then test what we have added.",
      },
      {
        question: "Will the new circuits be certified?",
        answer: "Yes, where the job requires it. New circuits are tested before we leave, and the certificate covers the work we have installed, not older wiring we have not touched.",
        answerMobile: "Yes, on work that requires one. The new circuits are tested before we leave, and the certificate covers the installation we have added.",
      },
    ],
    closing: {
      title: "New circuits priced around the building",
      lead: "Tell us the building and what needs to run, with a photo of the consumer unit and the postcode. Houses, commercial rooms and agricultural sites are priced the same clear way.",
      primaryLabel: "Get a quote",
    },
  },
  sockets: {
    slug: "sockets",
    path: "/electrical/sockets",
    meta: {
      title: "Extra Sockets in Spalding & Peterborough | Advanta",
      description: "Additional sockets for homes, workshops and commercial rooms around Spalding and Peterborough.",
    },
    hero: {
      eyebrow: "Electrical",
      title: "Additional sockets",
      lead: "Extra sockets where you actually need them, on a new circuit or from an existing one when that is safe.",
      imageSrc: "/advanta/photos/electrical/workshop-sockets.webp",
      imageAlt: "Double sockets and a surface socket in a workshop",
      primaryCtaLabel: "Get a socket quote",
    },
    features: {
      title: "Sockets we add",
      lead: "Extra sockets where you actually use them: kitchens, workshops, commercial rooms, and ordinary walls in a house.",
      imageSrc: "/advanta/photos/electrical/osb-sockets.webp",
      imageAlt: "Double sockets beside a small consumer unit on an OSB board",
      blocks: [
        {
          title: "On the wall",
          intro: "One socket or several, specified for what will be plugged in rather than a standard double everywhere.",
          items: ["Single and double sockets", "Kitchen and workshop positions", "USB and outdoor sockets where they suit the spot"],
        },
        {
          title: "On the circuit",
          intro: "Added to an existing circuit only when that circuit can take it. Otherwise it is a new circuit.",
          items: ["A new circuit, or a safe addition", "Chased in, or surface conduit where that is tidier", "Tested before we leave"],
        },
      ],
    },
    process: {
      title: "From the wall you need to a tested socket",
      intro:
        "An extra socket is a small job done properly: the right circuit, a safe route, and a test before we leave. We add them in houses, kitchens, workshops and commercial rooms.",
      steps: [
        {
          title: "Show us the wall",
          body: "A photo of where you want the socket, a photo of the consumer unit, and the postcode. Tell us what will be plugged in, particularly in a kitchen or a workshop.",
        },
        {
          title: "New circuit, or a safe addition",
          body: "If the existing circuit can take the extra point, we say so. If it cannot, the quote is for a new circuit rather than an overloaded spur. Chased in, or in surface conduit, whichever finish is the tidier one.",
        },
        {
          title: "Fit and test",
          body: "The socket is fitted and the circuit is tested before we leave. On a straightforward job you can use it the same day.",
        },
      ],
    },
    faqs: [
      {
        question: "Can you add a single socket?",
        answer: "Yes. One extra socket is a normal job. If the circuit already there cannot take it safely, we will say so, and the quote will be for a new circuit instead of an overloaded spur.",
        answerMobile: "Yes. A single extra socket is a normal job. If the existing circuit cannot take it safely, the quote is for a new circuit rather than a spur.",
      },
      {
        question: "Do you add sockets in kitchens and workshops?",
        answer: "Yes. Kitchens and workshops are both regular jobs. Tell us what will be plugged in, so the circuit is sized for the appliances or the tools rather than guessed from the room.",
        answerMobile: "Yes, in kitchens and workshops. Tell us what will be plugged in, so we size the circuit for the appliances or tools rather than guessing.",
      },
      {
        question: "Do you have to chase the plaster?",
        answer: "Not every time. The wall is chased where a flush socket suits the room, and surface conduit is used where that is the tidier finish, including on exposed brick.",
        answerMobile: "Not always. We chase where a flush socket suits the room, and use surface conduit where that is tidier, including on exposed brick.",
      },
      {
        question: "Can a socket go outside?",
        answer: "Yes, with an outdoor-rated socket in the right place. We look at the circuit it will come from, and at a route that keeps the cable protected, before the price is fixed.",
        answerMobile: "Yes. An outdoor-rated socket is normal work. We check which circuit it can come from, and how the cable stays protected, before we price it.",
      },
      {
        question: "How soon can the new socket be used?",
        answer: "Usually the same day. The socket is fitted, the circuit is tested, and you can use it once we have finished, without a return visit for a simple addition.",
        answerMobile: "Usually the same day. The socket is fitted and the circuit is tested before we leave, so a simple job does not need a second visit.",
      },
    ],
    closing: {
      title: "Extra sockets priced from the wall",
      lead: "A photo of where you want them, a photo of the consumer unit, and a note of what will be plugged in. We will say if the existing circuit can take it, and what the job will cost.",
      primaryLabel: "Get a quote",
    },
  },
  "three-phase": {
    slug: "three-phase",
    path: "/electrical/three-phase",
    meta: {
      title: "Three-Phase Installations, Spalding | Advanta",
      description: "Three-phase electrical installations for workshops, farms and commercial sites around Spalding and Peterborough.",
    },
    hero: {
      eyebrow: "Electrical",
      title: "Three-phase installations",
      lead: "Three-phase boards and supplies for workshops, farms and commercial buildings, where the incoming supply allows it.",
      imageSrc: "/advanta/photos/electrical/three-phase-board.webp",
      imageAlt: "Three-phase consumer unit wiring during an installation",
      primaryCtaLabel: "Get a three-phase quote",
    },
    features: {
      title: "Three-phase work",
      lead: "Boards and supplies for workshops, farms and commercial buildings, and larger domestic supplies. Only where three-phase is already available, or can be.",
      imageSrc: "/advanta/photos/electrical/fuseboard-hager.webp",
      imageAlt: "Finished consumer unit after electrical installation work",
      blocks: [
        {
          title: "What we install",
          intro: "The board, the supplies for machinery, and feeds out to other buildings.",
          items: ["Three-phase consumer units", "Machinery and workshop supplies", "Distribution to outbuildings"],
        },
        {
          title: "What has to be true first",
          intro: "Not every property has a three-phase incoming supply. That is checked before a board is priced.",
          items: ["The incoming supply confirmed", "The load agreed before the board is specified", "Certification included in the price"],
        },
      ],
    },
    process: {
      title: "From the incoming supply to a three-phase board",
      intro:
        "Three-phase work starts with what is already coming into the building. Where the supply allows it, we fit the board and the circuits for workshops, farms and larger commercial loads, then test and certify the new work.",
      steps: [
        {
          title: "Tell us the load",
          body: "What you need to run, the type of building, and a photo of the existing board. Not every property has a three-phase incoming supply, and we check that before pricing a board that cannot be connected.",
        },
        {
          title: "Agree the distribution",
          body: "A three-phase consumer unit, supplies for machinery, or a feed out to another building. The price is fixed once the supply and the load are known, and it includes certification.",
        },
        {
          title: "Install and certify",
          body: "The board and circuits are fitted, labelled and tested. You get the certificate for the new work, and a clear note of what each way is feeding.",
        },
      ],
    },
    faqs: [
      {
        question: "Can any building have three-phase?",
        answer: "Not always. It depends on what is already coming into the building. We check the incoming supply before we price a board the property cannot actually take.",
        answerMobile: "Not always. It depends on the supply coming into the building. We check that before we price a board that cannot be connected.",
      },
      {
        question: "Do farms and workshops count?",
        answer: "Yes. Farm and workshop three-phase is regular work, whether that is machinery in one building or a board feeding other buildings on the same site.",
        answerMobile: "Yes. Farms and workshops are normal three-phase work, including supplies for machinery and feeds out to other buildings on the site.",
      },
      {
        question: "Is the new three-phase work certified?",
        answer: "Yes. The new board and circuits are tested, labelled and certified. The certificate covers the work we have installed, and each way is noted so you can see what it feeds.",
        answerMobile: "Yes. What we install is tested and certified. The board is labelled, so you can see what each new way is feeding once we have finished.",
      },
      {
        question: "What do you need to know about the load?",
        answer: "What the building has to run: machinery, welders, a compressor, or a feed to another building. A photo of the existing board and that list show us whether the supply can take it.",
        answerMobile: "A list of what the building must run, and a photo of the board. Machinery, welders or a feed to another building are what we size the supply around.",
      },
      {
        question: "Can three-phase be added to a house?",
        answer: "Only where the incoming supply is already three-phase, or where it can be provided. We will say which of those applies before any board is priced or ordered.",
        answerMobile: "Only where the house already has a three-phase supply, or one can be provided. We tell you which it is before any board is priced.",
      },
    ],
    closing: {
      title: "Three-phase priced from the incoming supply",
      lead: "Tell us the building and what you need to run, and send a photo of the existing board. We check the incoming supply before the price is fixed.",
      primaryLabel: "Get a quote",
    },
  },
  "fault-finding": {
    slug: "fault-finding",
    path: "/electrical/fault-finding",
    meta: {
      title: "Electrical Fault Finding, Spalding | Advanta",
      description: "Electrical fault finding and repairs for homes and commercial sites around Spalding and Peterborough.",
    },
    hero: {
      eyebrow: "Electrical",
      title: "Fault finding and repairs",
      lead: "Tripping circuits, dead sockets, burnt accessories and faults found on an EICR. We find the cause, then repair it.",
      imageSrc: "/advanta/photos/electrical/eicr-burnt-socket.webp",
      imageAlt: "Burnt socket found during electrical fault finding",
      primaryCtaLabel: "Report a fault",
    },
    features: {
      title: "Faults we trace",
      lead: "Tripping circuits, dead sockets and damage already written up on an EICR. Domestic, commercial and agricultural. The cause is found before anything is replaced.",
      imageSrc: "/advanta/photos/electrical/eicr-rcbo.webp",
      imageAlt: "RCBO consumer unit opened for fault finding",
      blocks: [
        {
          title: "Typical calls",
          intro: "Something has stopped working, or a report has already named the fault.",
          items: ["Circuits that trip", "Sockets and lights that have failed", "Damage recorded on an EICR"],
        },
        {
          title: "The repair",
          intro: "One failed circuit does not have to become a rewire. You see the price before the repair is booked.",
          items: ["The cause found before parts are changed", "A price before the work goes ahead", "The circuit tested once it is put right"],
        },
      ],
    },
    process: {
      title: "From the symptom to a repair that holds",
      intro:
        "Fault finding is about the cause, not a reset. Tripping circuits, dead sockets and damage already written up on an EICR are traced, priced and repaired so the same fault does not come straight back.",
      steps: [
        {
          title: "Describe what it is doing",
          body: "What trips, what has gone dead, and when it started. A photo of the consumer unit helps. If you already have an EICR, send the observations that need putting right.",
        },
        {
          title: "Find the cause, then quote the repair",
          body: "We test until we know why it failed. You get a price before parts are changed or a return visit is booked. One failed circuit does not have to turn into a full rewire.",
        },
        {
          title: "Repair and test",
          body: "The fault is put right and the circuit is tested before we leave. You get a short note of what we found, so the next person who opens the board is not starting from scratch.",
        },
      ],
    },
    faqs: [
      {
        question: "Do you reset the breaker and leave?",
        answer: "No. A reset without a cause is how the same trip comes back. We test until we know why it failed, and you get a price for the repair before parts are changed.",
        answerMobile: "No. We find out why it tripped before anything is reset and left. Putting the breaker back on, without a cause, is how the same fault returns.",
      },
      {
        question: "Can one circuit be repaired on its own?",
        answer: "Yes. A failed socket, a damaged cable, or a single circuit on an EICR does not have to become a full rewire. We quote the repair that puts that fault right.",
        answerMobile: "Yes. A failed socket, a damaged cable or one circuit on an EICR can be repaired on its own. It does not have to become a full rewire.",
      },
      {
        question: "How is a fault-finding visit priced?",
        answer: "Tell us what is happening, and send a photo of the consumer unit. From that we will say whether the visit can be priced straight away, or whether we need a little more detail first.",
        answerMobile: "Describe what it is doing and send a photo of the board. We will say if the visit can be priced from that, or if we need a little more.",
      },
      {
        question: "What if the fault only happens sometimes?",
        answer: "Intermittent trips are still worth a proper look. Tell us when it happens and what was in use, and send a photo of the board. We test for the cause rather than waiting for it to fail in front of us.",
        answerMobile: "Tell us when it happens and what was in use, with a photo of the board. We test for the cause rather than waiting for it to fail on the day.",
      },
      {
        question: "Will parts be changed before I agree a price?",
        answer: "No. Once the cause is found, you get a price before parts are changed or a return visit is booked. A small repair stays a small repair unless the test shows otherwise.",
        answerMobile: "No. Nothing is changed until you have a price. We find the cause, tell you what the repair is, and only then order parts or book the return.",
      },
    ],
    closing: {
      title: "The fault looked at before anything is changed",
      lead: "Tell us what trips or what has gone dead, and send a photo of the consumer unit. If you already have an EICR, include the observations. We will say what we can price from that.",
      primaryLabel: "Get a quote",
    },
  },
  outbuildings: {
    slug: "outbuildings",
    path: "/electrical/outbuildings",
    meta: {
      title: "Garage and Workshop Electrics, Spalding | Advanta",
      description: "Power supplies for garages, workshops and outbuildings around Spalding and Peterborough.",
    },
    hero: {
      eyebrow: "Electrical",
      title: "Garages, workshops and outbuildings",
      lead: "A proper supply to a garage, workshop or outbuilding, from the consumer unit, with sockets and lighting where you need them.",
      imageSrc: "/advanta/photos/electrical/outdoor-patio.webp",
      imageAlt: "Outside of a house at night, where an outbuilding supply leaves the property",
      primaryCtaLabel: "Get an outbuilding quote",
    },
    features: {
      title: "Supplies we run",
      lead: "A supply from the house consumer unit to a garage, workshop or farm building, isolated at the far end and sized for what you will actually use.",
      imageSrc: "/advanta/photos/electrical/consumer-unit-labelled.webp",
      imageAlt: "Labelled consumer unit supplying new circuits",
      blocks: [
        {
          title: "From the house",
          intro: "A new circuit, in armoured cable where the run leaves the building.",
          items: ["A new way from the house board", "Armoured cable on external runs", "Isolation at the outbuilding"],
        },
        {
          title: "Inside the building",
          intro: "Sockets and lighting once the supply is there, including three-phase where the incoming supply allows it.",
          items: ["Sockets and lighting", "The load agreed before the cable is sized", "Three-phase where the supply allows it"],
        },
      ],
    },
    process: {
      title: "From the house board to power in the building",
      intro:
        "A garage, workshop or farm outbuilding needs its own supply from the consumer unit, isolated at the far end, with sockets and lighting sized for what you will actually use.",
      steps: [
        {
          title: "Tell us what the building is for",
          body: "Storage, a workshop or agricultural use, and a photo of the house consumer unit. If there is machinery, list it so the supply is sized for that load rather than guessed.",
        },
        {
          title: "Route and a fixed price",
          body: "Armoured cable where the run is outside, isolation at the outbuilding, and the sockets and lights inside. Three-phase is quoted where the incoming supply allows it. The price is fixed before we book.",
        },
        {
          title: "Run the supply and test it",
          body: "Cable in, isolator or small board on, accessories fitted. The new circuits are tested, and the house consumer unit is labelled for the new way.",
        },
      ],
    },
    faqs: [
      {
        question: "Can a garage be fed from the house?",
        answer: "Yes. We run a new circuit from the house consumer unit and isolate it at the garage. The cable is armoured where the run is outside, and the house board is labelled for the new way.",
        answerMobile: "Yes. Power comes from the house consumer unit on a new circuit, isolated at the garage, with armoured cable where the run is outside.",
      },
      {
        question: "What if the workshop has machinery?",
        answer: "Tell us what you will run. The supply is sized for that load, including three-phase where the incoming supply at the house allows it, rather than guessed from the size of the shed.",
        answerMobile: "Tell us what the workshop will run. We size the cable and the board for that load, and quote three-phase if the house supply can take it.",
      },
      {
        question: "Are farm buildings included?",
        answer: "Yes. Agricultural outbuildings are part of this work. Tell us what the building is for, and what it has to run, so the supply is sized for that use rather than for a domestic garage.",
        answerMobile: "Yes. Agricultural buildings are included. Say what the building is for, and what equipment it has to run, so the supply matches that use.",
      },
      {
        question: "What if the cable needs a trench?",
        answer: "We agree the cable route before the price is fixed. If a trench or a longer outdoor run is needed, that is written into the quote, rather than added once the job has started.",
        answerMobile: "The cable route is agreed up front. A trench, or a longer run outdoors, is included in the price rather than added once we arrive.",
      },
      {
        question: "Will the house board show the new circuit?",
        answer: "Yes. The new way on the house consumer unit is labelled, and the outbuilding has its own isolation, so the next person at either board can see what that circuit is feeding.",
        answerMobile: "Yes. The new circuit is labelled at the house board, with isolation at the far end, so anyone opening either board can see what it feeds.",
      },
    ],
    closing: {
      title: "A supply priced for how the building is used",
      lead: "Tell us whether it is a garage, a workshop or a farm building, and send a photo of the house consumer unit. If there is machinery, list it so the supply is sized for that load.",
      primaryLabel: "Get a quote",
    },
  },
  "pat-testing": {
    slug: "pat-testing",
    path: "/electrical/pat-testing",
    meta: {
      title: "PAT Testing in Spalding & Peterborough | Advanta",
      description: "PAT testing of portable appliances for workshops, commercial rooms and landlords around Spalding and Peterborough.",
    },
    hero: {
      eyebrow: "Electrical",
      title: "PAT testing",
      lead: "In-service inspection and testing of portable appliances. A written record of what passed and what needs taking out of use.",
      imageSrc: "/advanta/photos/electrical/pat-testing.webp",
      imageAlt: "PAT tester and labelled extension lead during portable appliance testing",
      primaryCtaLabel: "Book PAT testing",
    },
    features: {
      title: "What we test",
      lead: "Portable appliances, not the fixed wiring. Workshops, commercial rooms, rentals and home offices. You leave with a written record of what passed and what should come out of use.",
      imageSrc: "/advanta/photos/electrical/eicr-rcbo.webp",
      imageAlt: "Consumer unit in a property attended for electrical testing",
      blocks: [
        {
          title: "Appliances",
          intro: "The kit that plugs in, including leads. The fixed wiring is an EICR and is booked as its own job.",
          items: ["Handheld and portable equipment", "Extension leads", "Anything you need a record for"],
        },
        {
          title: "The record",
          intro: "Each item is a pass or a fail. Nothing that failed gets a pass mark.",
          items: ["Pass and fail written down", "Failed items identified", "The fixed wiring left to an EICR"],
        },
      ],
    },
    process: {
      title: "From a list of kit to a written record",
      intro:
        "PAT testing covers portable appliances, not the fixed wiring. We inspect and test what is on site, mark what failed, and leave a record you can show a client, a landlord or an insurer.",
      steps: [
        {
          title: "Tell us the volume",
          body: "Roughly how many items, the type of site, and the postcode. A small home office and a workshop full of leads are both straightforward to price.",
        },
        {
          title: "Inspect and test on site",
          body: "Handheld equipment, portable kit and extension leads. Each item is recorded as a pass or a fail. We do not put a pass mark on something that has failed.",
        },
        {
          title: "The record, and the failures",
          body: "You get a written record of what was tested. Failed items are identified so they can come out of use. If the fixed wiring also needs inspecting, that is an EICR and we book it as its own job.",
        },
      ],
    },
    faqs: [
      {
        question: "Is PAT testing the same thing as an EICR?",
        answer: "No. PAT is the portable kit: tools, leads and appliances you can unplug. An EICR is the fixed wiring. We carry out both, and they are booked as two separate jobs.",
        answerMobile: "They are different jobs. PAT is portable appliances and leads. An EICR is the fixed wiring, and we book and report them separately.",
      },
      {
        question: "Is a small number of items worth testing?",
        answer: "Yes. A home office with a handful of items, and a workshop full of leads, are both straightforward to price. Tell us roughly how many, the type of site, and the postcode.",
        answerMobile: "Yes. Even a small set of appliances is worth a proper record. Tell us roughly how many items, the kind of site, and the postcode.",
      },
      {
        question: "What happens when an item fails?",
        answer: "We mark it, record it as a fail, and tell you. A pass sticker is not put on an item that has not passed. You then decide whether it is repaired or taken out of use.",
        answerMobile: "We identify it, mark it as a fail, and leave it off the pass record. You then choose whether it is repaired or taken out of use.",
      },
      {
        question: "Are extension leads included?",
        answer: "Yes. Extension leads, and any other portable kit you want a record for, can go on the list. Tell us what is actually on site, in the workshop or the commercial room.",
        answerMobile: "Extension leads are included, along with other portable kit you want recorded. A list of what is on site is enough for us to price the visit.",
      },
      {
        question: "How often should the appliances be tested?",
        answer: "It depends on the equipment and how hard it is used. We will say what looks sensible for your site once we have seen the kit, rather than quoting one interval for every item.",
        answerMobile: "It depends on the kit and how it is used. Once we have seen what is on site, we will say what looks like a sensible gap before the next test.",
      },
    ],
    closing: {
      title: "Testing priced from the kit on site",
      lead: "A rough count of the items, the type of site, and the postcode are enough to start. You get a written record of what passed, and a clear note of anything that failed.",
      primaryLabel: "Get a quote",
    },
  },
  alarms: {
    slug: "alarms",
    path: "/electrical/alarms",
    meta: {
      title: "Intruder Alarms in Spalding | Advanta",
      description: "Intruder alarm installation and repairs for homes and commercial rooms around Spalding and Peterborough.",
    },
    hero: {
      eyebrow: "Electrical",
      title: "Intruder alarms",
      lead: "Alarm systems for houses and commercial rooms, wired from a proper supply and left working.",
      imageSrc: "/advanta/photos/electrical/fuseboard-hager.webp",
      imageAlt: "Consumer unit that supplies alarm and other electrical circuits",
      primaryCtaLabel: "Get an alarm quote",
    },
    features: {
      title: "Alarm work",
      lead: "Intruder alarms for houses and commercial rooms. New systems, and repairs to alarms already fitted. CCTV is a separate job if you want cameras as well.",
      imageSrc: "/advanta/photos/electrical/consumer-unit-labelled.webp",
      imageAlt: "Labelled consumer unit after electrical work",
      blocks: [
        {
          title: "New systems",
          intro: "Panel, sounder and detectors planned around the rooms that need covering, fed from a proper supply.",
          items: ["Panel, sounder and detectors", "Supply from the consumer unit", "A walk-through of how to set and unset it"],
        },
        {
          title: "Repairs",
          intro: "Faults on a system you already have. Parts are not ordered until you have a price, and we will say if replacement is the better job.",
          items: ["Faults on an existing system", "A price before parts are ordered", "Replacement recommended when another repair is not worth it"],
        },
      ],
    },
    process: {
      title: "From the building to an alarm you can set",
      intro:
        "An intruder alarm is planned around the rooms that need covering, wired from a proper supply, and left so you know how to set it. New systems and repairs to existing ones are both normal work.",
      steps: [
        {
          title: "New system, or a fault",
          body: "Tell us the building and whether you need a new alarm or a repair. For a repair, the make and what it is doing are enough to start. Cameras are a separate job if you want CCTV as well.",
        },
        {
          title: "Positions and a clear price",
          body: "Panel, sounder and detectors are agreed before anything is fitted. The quote includes the supply from the consumer unit. On a repair, you get a price before parts are ordered, and we will say if replacement is the better job.",
        },
        {
          title: "Install or repair, then walk it through",
          body: "The system is left working. On a new install we show you how to set and unset it. On a repair we note what failed and what was replaced.",
        },
      ],
    },
    faqs: [
      {
        question: "Do you fit alarms in houses and in shops?",
        answer: "Yes. Houses and commercial rooms are both normal intruder-alarm work. The panel, sounder and detectors are agreed before anything is fitted, and the supply comes from the consumer unit.",
        answerMobile: "Yes. We fit intruder alarms in houses and in commercial rooms, and agree the panel, sounder and detectors before the install starts.",
      },
      {
        question: "Can an alarm we already have be repaired?",
        answer: "Often yes. The make, and a note of what it is doing, are enough to start. Parts are not ordered until you have a price, and we will say if replacing the system is the better spend.",
        answerMobile: "Often, yes. Send the make and what the alarm is doing. You get a price before parts are ordered, and we say if a new system is the better job.",
      },
      {
        question: "Is an alarm the same job as CCTV?",
        answer: "No. Cameras have their own page. An alarm and CCTV can still be done together, on one visit, if you want both. The quote shows them as separate parts of the work.",
        answerMobile: "No. Cameras are quoted separately. If you want an alarm and CCTV together, we can do both on one job and show them apart on the quote.",
      },
      {
        question: "Will you show us how to set the alarm?",
        answer: "Yes, on a new install. Before we leave we walk through setting and unsetting the system. A repair includes a short note of what failed and what was replaced.",
        answerMobile: "Yes. On a new system we show you how to set and unset it before we leave. A repair comes with a note of what failed and what was replaced.",
      },
      {
        question: "Does the alarm need a supply from the board?",
        answer: "Yes. The panel is fed from the consumer unit, and that supply is included in the quote. We agree it with the detector positions before the system is fitted.",
        answerMobile: "The panel takes a proper supply from the consumer unit. That connection is included in the quote and agreed before we fit the system.",
      },
    ],
    closing: {
      title: "A new alarm, or a repair to the one you have",
      lead: "Tell us the building and whether it is a new system or a fault. For a repair, the make and what it is doing are enough. We will come back with a price before anything is ordered.",
      primaryLabel: "Get a quote",
    },
  },
  cctv: {
    slug: "cctv",
    path: "/electrical/cctv",
    meta: {
      title: "CCTV Installation, Spalding & Peterborough | Advanta",
      description: "CCTV installation for homes and commercial sites around Spalding and Peterborough.",
    },
    hero: {
      eyebrow: "Electrical",
      title: "CCTV",
      lead: "Cameras for houses and commercial sites, supplied properly and aimed where you can actually use the picture.",
      imageSrc: "/advanta/photos/electrical/outdoor-patio.webp",
      imageAlt: "Outside of a house at night, the kind of elevation where a camera is fitted",
      primaryCtaLabel: "Get a CCTV quote",
    },
    features: {
      title: "Camera work",
      lead: "Cameras for houses and commercial sites, aimed where the picture is actually useful. The electrical supply is part of the install.",
      imageSrc: "/advanta/photos/electrical/consumer-unit-labelled.webp",
      imageAlt: "Labelled consumer unit supplying electrical circuits",
      blocks: [
        {
          title: "The install",
          intro: "Positions agreed first, then cabled from a proper supply. Phone access is confirmed on the quote when the system supports it.",
          items: ["Camera positions agreed before anything is fitted", "Cabling and a supply from the board", "Recorder or app access explained"],
        },
        {
          title: "The building",
          intro: "Houses and commercial sites, including elevations and yards. A position that cannot see what you want is said so before it is drilled.",
          items: ["Houses and commercial sites", "Outside elevations and yards", "Positions refused when the view will not do the job"],
        },
      ],
    },
    process: {
      title: "From the elevations to a picture you can use",
      intro:
        "Cameras are only useful if they see the right place. We agree the positions on the house or commercial site first, cable them from a proper supply, and show you how to view what they record.",
      steps: [
        {
          title: "Show us the building",
          body: "Photos of the elevations, yard or rooms you want covered, and the postcode. We will say if a position cannot see what you expect it to.",
        },
        {
          title: "Positions, supply and a fixed price",
          body: "Camera locations, the cable route, and whether you need a recorder or access on a phone. The electrical supply is included. If the system can be viewed on a phone, that is confirmed on the quote.",
        },
        {
          title: "Fit, aim and explain",
          body: "Cameras installed, aimed, and checked against the picture. You get a walk-through of playback or the app, and the supply is labelled at the board.",
        },
      ],
    },
    faqs: [
      {
        question: "Do you fit cameras on houses?",
        answer: "Yes, and on commercial sites, yards and outside elevations. We agree the positions first, and we will say if a camera cannot see what you expect from that spot.",
        answerMobile: "Yes. Houses and commercial sites are both normal work. We agree where each camera goes, and say if that spot cannot see what you need.",
      },
      {
        question: "Can the pictures be viewed on a phone?",
        answer: "On systems that support it, yes. We confirm that on the quote, rather than assuming every recorder has a useful app. You also get a walk-through of playback before we leave.",
        answerMobile: "Yes, when the system supports it. That is confirmed on the quote, and we walk you through playback or the app before we leave the site.",
      },
      {
        question: "Is the power supply included?",
        answer: "Yes. Cabling and a proper electrical supply are part of the install, and that circuit is labelled at the consumer unit so it is obvious which way feeds the cameras.",
        answerMobile: "Yes. Cabling and the electrical supply are included in the install, and the circuit is labelled at the board so it is clear what it feeds.",
      },
      {
        question: "How do you decide how many cameras?",
        answer: "A photo of each elevation, yard or room you want covered is enough to start, with the postcode. We suggest a number from what those views can actually see, rather than from a standard pack.",
        answerMobile: "Photos of the elevations or rooms, and the postcode, are enough. We suggest how many cameras those views actually need, rather than a standard pack.",
      },
      {
        question: "Can cameras and an alarm go in together?",
        answer: "Yes. They stay separate systems, but they can be installed on the same visit. The quote shows the cameras and the alarm as their own parts of the work, including each supply.",
        answerMobile: "Yes, together on one visit if that suits. They remain separate systems, and the quote lists the cameras and the alarm on their own.",
      },
    ],
    closing: {
      title: "Cameras priced from the elevations",
      lead: "Photos of the house, yard or rooms you want covered, and the postcode. We will say if a position cannot see what you expect, and what the install will cost.",
      primaryLabel: "Get a quote",
    },
  },
};

export const electricalSlugs = Object.keys(electricalContent);
