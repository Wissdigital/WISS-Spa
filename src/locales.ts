import { TranslationDict, GuestReview, ActivityDetail } from './types';

// Curated English content for WISS Spa, Lagos
const englishSpaDict: TranslationDict = {
  topBar: {
    location: "Victoria Island, Lagos, Nigeria",
    email: "booking@wissspa.com",
  },
  nav: {
    specs: "Facilities",
    activities: "Signature Treatments",
    rates: "Booking & Prices",
    contact: "Get in Touch",
    cta: "Book a Session",
  },
  hero: {
    subtitle: "LAGOS' BENCHMARK WELLNESS SANCTUARY",
    title: "Rejuvenate Your Mind, Body & Soul",
    desc: "Escape the vibrant energy of Lagos into WISS Spa: an elite, purpose-built 800m² oasis of absolute silence, botanical healing, and restorative water rituals in Victoria Island.",
    ctaContact: "Reserve A Session",
    ctaDiscover: "Explore Spa Oasis",
  },
  features: {
    title: "Our Signature Highlights",
    subtitle: "A Quick Glance Inside",
    chaletTitle: "Metropolitan Eden",
    chaletDesc: "800m² of customized Zen-inspired architecture and post-therapy relaxation cabanas.",
    capacityTitle: "Treatment Suites",
    capacityDesc: "12 individual temperature-controlled treatment rooms and premium VIP couples' sanctuaries.",
    exteriorTitle: "Hydrotherapy Gardens",
    exteriorDesc: "Lush tropical palm courtyard featuring standard heated outdoor pools and herbal steam cabins.",
  },
  about: {
    badge: "About WISS Spa",
    title: "A Contemporary Refuge",
    desc1: "WISS Spa is a premium, purpose-built wellness harbor in the upscale heart of Victoria Island, Lagos. Built to serve as an escape from the metropolis's speed, we offer an elegant blend of global therapeutic traditions and West African botanical wisdom.",
    desc2: "Our sleek facility is designed using minimalist materials, soft lighting, and calming water features. Led by highly-certified international spa practitioners, we elevate sensory renewal to a fine art—restoring cellular energy, purifying the skin, and instilling complete peace.",
    cta: "View Our Facilities",
    surfaceLabel: "SFT Pure Wellness",
    guestsLabel: "Treatment Cabins",
    slopesLabel: "Expert Therapists",
    viewTitle: "Tropical Zen Garden",
    viewDesc: "Lush, healing green landscaping and botanical backdrops designed to ease visual over-stimulation and support quiet introspection.",
    onSlopesTitle: "Thermal Suite Experience",
    onSlopesDesc: "Eucalyptus-infused steam suites, dry Finnish-style cedar sauna, and traditional Moroccan black soap marble tables.",
    sunnyTitle: "Bespoke Massages",
    sunnyDesc: "Customized pressure techniques combining massage practices from Bali, Thailand, and Sweden to target high physical tension.",
    shopsTitle: "Detox Blend Lounge",
    shopsDesc: "Complimentary cold-pressed pine-ginger elixirs, native herbal teas, and fresh tropical fruit skewers served in private rest alcoves.",
  },
  gallery: {
    badge: "Bespoke Tour",
    title: "Step Into Our Relaxation Sanctuaries",
    albumLink: "View Our Signature Treatment Lookbook →",
  },
  amenities: {
    badge: "Spa Amenities",
    title: "Everything Custom-Tailored for Absolute Comfort",
    searchPlaceholder: "Search amenities & therapies (massage, hammam, sauna, tea, scrubs, facials)...",
    categories: {
      essentials: "World-Class Facilities",
      kitchen: "Premium Treatment Equipment",
      leisure: "Exclusive Luxuries & Lounges",
    },
  },
  wellness: {
    badge: "Hydrotherapy Spa",
    title: "Eucalyptus Steam & Heated Pool",
    desc1: "Every spa experience is centered around restorative thermal cycles. Open your pores with a restorative steam in our aromatherapy eucalyptus room, followed by a clarifying exfoliation session on our hand-carved warm granite hammam beds.",
    desc2: "Enjoy quiet moments beside our heated garden plunge pool, wrapped in plush cotton robes with organic teas. WISS Spa is open seven days a week, offering a seamless sanctuary for corporate, individual, or shared family wind-downs.",
    tempLabel: "Heated Botanical Water",
    openLabel: "Open Daily: 9 AM - 9 PM",
  },
  activitiesSec: {
    badge: "Bespoke Rituals",
    title: "Ancient Wisdom, Contemporary Execution",
    skiTitle: "Bespoke Massages",
    skiDesc: "Decompress muscle fibers and relieve Lagos tension with heated volcanic stone, sports, or holistic massage.",
    hikeTitle: "Moroccan Hammam Scrub",
    hikeDesc: "An intensive purifying journey utilizing authentic black eucalyptus soap, exfoliating Kessa gloves, and ghassoul clay.",
    paraTitle: "Advanced Facials",
    paraDesc: "Nourishing, clarifying skin-food facials utilizing vacuum extraction and cold oxygen therapy for a tropical glow.",
    bikeTitle: "Citrus Body Polish",
    bikeDesc: "Revitalizing marine salt scrubs and skin hydration with cold-pressed African shea butter and orange flower oils.",
    nightTitle: "VIP Couple's Pavilion",
    nightDesc: "Celebrate connections in our private couple's retreat with dual massage, rose-petal bath, and refreshment platters.",
    familyTitle: "Sound Meditation",
    familyDesc: "Harness physical sonic frequencies from Himalayan singing bowls to soothe anxiety and restore deep sleep cycles.",
    modalBtn: "View Ritual Details",
  },
  pricing: {
    badge: "Rates & Packages",
    title: "Select Your Path to Wellness",
    lowSeason: "Calm Package",
    midSeason: "Radiance Package",
    highSeason: "Royal VIP Hammam",
    perWeek: " / session",
    perDayMin: "- 90 mins duration",
    months: "Includes complimentary detox refreshments",
    arrivalLabel: "Preferred Booking Date",
    departureLabel: "Alternative Date/Time",
    cleanLabel: "Custom Essential Oils",
    cleanDesc: "Eucalyptus, Lavender, lemongrass, or sandalwood active botanicals included.",
    breakfastLabel: "Gourmet Nourish Box",
    breakfastDesc: "Optional: Post-treatment organic light meal with cold-pressed juice and fruit platters.",
    acompteLabel: "Session Deposit",
    acompteDesc: "Advance commitment to confirm calendar space, balance settled at spa reception.",
    calculatorTitle: "Bespoke Treatment Price Calculator",
    calculateBtn: "Calculate Session Estimate",
    resultTitle: "Your Reservation Estimate",
    nightCount: "Number of guests/sessions",
    basePrice: "Therapeutic session cost",
    totalPrice: "Total Booking Estimate",
    optionalServices: "Premium Additions",
    cleaningFee: "Spa facility access charge",
    guestCount: "Total spa guest size",
    inquirySuccess: "Reservation request logged! Check status in the Spa Backoffice Messaging portal below.",
    guestbookTitle: "Lover of Serenity",
    guestbookBadge: "Client Journal",
    guestbookSubmit: "Share Your Experience",
  },
  contactForm: {
    badge: "Concierge Booking",
    title: "Bespoke Session Request",
    desc: "Submit your preferred date, therapy, and details. Our booking concierge will connect with you via WhatsApp or call within 30 minutes to finalize.",
    nameLabel: "Your Name*",
    emailLabel: "Email Address*",
    arrivalLabel: "Preferred Therapy Date",
    departureLabel: "Alternative Date / Time Slot",
    guestsLabel: "Number of Spa Guests",
    messageLabel: "Tell us about any specific preferences (Allergies, area of body tension, massage pressure level...)*",
    submit: "Send Booking Request",
    sending: "Reaching Booking Desk...",
    success: "Your request has been routed to our concierge desk. We will confirm your session shortly!",
  },
};

export const locales = {
  fr: englishSpaDict,  // Pointed to English copy to guarantee no broken layout
  en: englishSpaDict,
};

export const defaultReviews: GuestReview[] = [
  {
    id: 'rev-1',
    name: "Funmi Alao",
    rating: 5,
    comment: "An absolute oasis of peace in Lagos! WISS Spa took away all of my commute stress from the Third Mainland Bridge. The therapist was extraordinarily skilled and attentive, and the lemony lounge tea was divine. This sanctuary is easily on par with the premium wellness centers in London or Dubai.",
    date: "2026-05-15",
    lang: 'en'
  },
  {
    id: 'rev-2',
    name: "Chidi Okafor",
    rating: 5,
    comment: "Astonishingly tranquil. Victoria Island really needed a world-class refuge like this. The deep tissue massage was masterfully done, and the tropical heated pool is spectacular. Friendly managers and impeccable hygiene.",
    date: "2026-05-20",
    lang: 'en'
  },
  {
    id: 'rev-3',
    name: "Tariq Ibrahim",
    rating: 5,
    comment: "Outstanding level of luxury detail. Visited for the Royal Moroccan Hammam scrub with my spouse. Clean spaces, high-end organic oils, and very professional security and staff. Best spa journey in Lagos without a doubt!",
    date: "2026-05-27",
    lang: 'en'
  }
];

export const allAmenitiesList = [
  { text: "Private Hammam Turkish Steam Suite", category: "essentials", translationKey: "nordic_bath" },
  { text: "High-speed complimentary Guest Wi-Fi", category: "essentials", translationKey: "wifi" },
  { text: "Premium cotton slippers, plush robes & towels", category: "essentials", translationKey: "bed_linen" },
  { text: "Heated botanical hydrotherapy outdoor pool", category: "essentials", translationKey: "towels" },
  { text: "Ambient air filtration & aromatherapy diffusion", category: "essentials", translationKey: "heating" },
  { text: "Luxury Dyson professional hair stations", category: "essentials", translationKey: "hair_dryer" },
  { text: "Secured private lockers for valuables", category: "essentials", translationKey: "ski_room" },
  { text: "12 individual climate-controlled treatment cabins", category: "essentials", translationKey: "bedrooms" },
  { text: "Ensuite pristine granite rain showers", category: "essentials", translationKey: "bathrooms" },
  { text: "Guarded 24/7 on-site valet parking", category: "essentials", translationKey: "parking" },

  { text: "Infrared thermal sauna detox unit", category: "kitchen", translationKey: "oven" },
  { text: "Eucalyptus-infused herbal steam suites", category: "kitchen", translationKey: "microwave" },
  { text: "Bespoke Couple's Treatment Suites", category: "kitchen", translationKey: "fridge" },
  { text: "Ultra-comfortable anatomic hydraulic massage tables", category: "kitchen", translationKey: "dishwasher" },
  { text: "Deep exfoliating loofahs and Kessa mitts", category: "kitchen", translationKey: "cooktop" },
  { text: "Organic, cold-pressed seed oils & clays", category: "kitchen", translationKey: "toaster" },
  { text: "State-of-the-art oxygen therapy facial machines", category: "kitchen", translationKey: "coffee" },
  { text: "Vaporizing body scrub equipment", category: "kitchen", translationKey: "ice_maker" },
  { text: "Aromatherapy steam inhalation masks", category: "kitchen", translationKey: "raclette" },
  { text: "Lined zero-gravity resting beds", category: "kitchen", translationKey: "kid_dishes" },

  { text: "Soothing water cascading zen fountains", category: "leisure", translationKey: "tv" },
  { text: "Ambient nature-sound meditation playlists", category: "leisure", translationKey: "streaming" },
  { text: "Sonos premium acoustic audio systems", category: "leisure", translationKey: "sonos" },
  { text: "Premium botanical skincare retail bar", category: "leisure", translationKey: "games" },
  { text: "Herbal & cold-pressed ginger juice station", category: "leisure", translationKey: "library" },
  { text: "Lush tropical wrap-around palm gardens", category: "leisure", translationKey: "fireplace" },
  { text: "Private rest cabanas with pool views", category: "leisure", translationKey: "sledges" },
  { text: "Post-massage healthy light lunch lounge", category: "leisure", translationKey: "terrace" }
];

export const allActivitiesData: ActivityDetail[] = [
  {
    id: "massage",
    title: "Deep Tissue & Stone Massages",
    category: "Therapies",
    shortDesc: "Release chronic physical patterns and high stress with heated volcanic rocks and elite oils.",
    fullDesc: "Our deep tissue treatment targets chronic tension in muscle fibers. Specially designed to counteract metropolitan stress, long commutes, and laptop strain. Utilizing organic, ethically-sourced hot basalt stones from West Africa alongside premium essential oils, this therapy penetrates deep layers of tissue to restore complete nervous system balance and athletic agility.",
    tips: [
      "Let your therapist know your preferred pressure from light to intensive.",
      "Stay hydrated with cold ginger elixirs in our lounge immediately after.",
      "Book the couple package for a fully synchronized massage suite experience."
    ],
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1000&q=80",
    iconName: "snowflake"
  },
  {
    id: "hammam",
    title: "Moroccan Hammam & Exfoliation",
    category: "Signature Scrub",
    shortDesc: "Traditional Moroccan skin purification using eucalyptus black soap and steam.",
    fullDesc: "Step into our custom marble Hammam room, where gentle eucalyptus steam opens skin pores. Our expert practitioners wrap you in genuine Moroccan olive-rich black soap, then execute an intensive exfoliating massage with a traditional Kessa glove, extracting dead cells. A nourishing floral clay mask completes this glorious skin-refreshing journey.",
    tips: [
      "Perfect treatment before a holiday or outdoor beach trip for an even, glowing tan.",
      "We supply individual custom exfoliating Mitts to every client.",
      "Avoid eating heavy food for at least 1 hour prior to your Hammam."
    ],
    image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=1000&q=80",
    iconName: "footprints"
  },
  {
    id: "facial",
    title: "Advanced Hydrafacial & Skin Lifting",
    category: "Skincare",
    shortDesc: "Nourish and fortify your dermis with deep suction, hyaluronic acids, and biological skin food.",
    fullDesc: "Combat urban humidity and air pollutants with WISS Spa's custom advanced facial. Incorporating deep skin vacuum suction to clear congested pores, we infuse liquid peptides, vitamins, and antioxidants. Finished with an ice-globe massage and facial lymph drainage to clarify, lift, and give your face a magnificent tropical glow.",
    tips: [
      "Contains completely organic components matching sensitive skin.",
      "Avoid wearing make-up for immediate hours after for proper pore breathing.",
      "Regular monthly facial rituals help build long-term skin health."
    ],
    image: "https://images.unsplash.com/photo-1590439471364-192aa70c0b53?w=1000&q=80",
    iconName: "plane"
  },
  {
    id: "couple",
    title: "The Royal Couple's Sanctuary",
    category: "VIP Experience",
    shortDesc: "An intimate shared cocoon of sensory peace, massage, and fresh champagne mocktails.",
    fullDesc: "Celebrate birthdays, anniversaries, or simply pure togetherness in our premier VIP Couple's Lounge. Enjoy private side-by-side Swedish massages, custom aromatherapies, and private bath suites. Wind down afterwards in exclusive luxury cabanas with customized spa snacks, fresh pine-ginger elixirs, or bubbly flutes.",
    tips: [
      "Our VIP suite must be booked at least 48 hours for bespoke preparations.",
      "Includes private steam cabin and bath access.",
      "Add a floral rose bath enhancement to your booking itinerary."
    ],
    image: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=1000&q=80",
    iconName: "bike"
  },
  {
    id: "detox",
    title: "Charcoal Wraps & Body Polish",
    category: "Purification",
    shortDesc: "Draw out deep heavy toxins with mineralized coconut charcoal wraps and salt glows.",
    fullDesc: "This clinical-grade body armor uses activated coconut charcoal and volcanic mud clay to pull cellular metabolic waste from the dermis. Following a gentle citrus skin brush and wash, your body is cocooned in comforting warm linen wraps, and finished with a moisturizing massage utilizing cold-pressed African shea butter.",
    tips: [
      "Highly recommended for absolute physical fatigue and muscle aches.",
      "We recommend pairing with a preceding 15-minute steam room session.",
      "Perfect for glowing, nourished skin right before a major event."
    ],
    image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=1000&q=80",
    iconName: "music"
  },
  {
    id: "sound",
    title: "Himalayan Sound Bath Meditation",
    category: "Mindfulness",
    shortDesc: "Sound waves, frequency vibrations, and deep guiding breathwork for total clarity.",
    fullDesc: "Settle your thoughts into a meditative state. Our acoustics specialist utilizes genuine Tibetan quartz singing bowls, gongs, and chime frequencies. The ambient vibrations reset mental patterns, reducing anxiety, elevating cognitive clarity, and regulating sleep schedules. Pure peace for busy corporate minds.",
    tips: [
      "Wear extremely loose, comfortable lounge apparel (cotton robes supplied).",
      "Arrive 10 minutes prior to let your heartbeat settle physically.",
      "Perfect early morning or late evening therapy."
    ],
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1000&q=80",
    iconName: "dog"
  }
];
