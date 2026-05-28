import React from 'react';
import { ArrowLeft, Flower2, Thermometer, Sparkles, AlertCircle, ShieldAlert, CheckCircle, Waves, HeartHandshake } from 'lucide-react';
import { TranslationDict } from '../types';

interface FacilityDetailPageProps {
  facilityId: string;
  navigateTo: (page: string, sub?: string | null) => void;
  dict: TranslationDict;
}

export default function FacilityDetailPage({ facilityId, navigateTo, dict }: FacilityDetailPageProps) {
  
  const facilitiesMap: Record<string, {
    title: string;
    subtitle: string;
    description: string;
    heroImage: string;
    metrics: { label: string; value: string }[];
    sections: { heading: string; body: string; bulletImg?: string }[];
    amenities: string[];
    safetyNotes: string[];
  }> = {
    eden: {
      title: "Metropolitan Eden Architecture",
      subtitle: "800m² of Purified Architectural Stillness",
      description: "Designed by premium award-winning ecological architects, WISS Spa is created purely from native materials, polished warm sandstone, and quiet waters to counteract urban noise. It functions as a temple of quiet introspection in Victoria Island, Lagos.",
      heroImage: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1200&q=80",
      metrics: [
        { label: "Total Space", value: "800 m²" },
        { label: "Quiet Areas", value: "4 Distinct Zones" },
        { label: "Acoustic Silence", value: "Decibel Controlled < 20dB" }
      ],
      sections: [
        {
          heading: "The Design Concept: Organic Harmony",
          body: "The core layout of WISS Spa incorporates the Fibonacci sequence to establish sensory comfort from first entry. Softly curved architectural corridors block heavy sound frequencies from the outdoors, creating complete silence. Integrated indoor vegetation clarifies air pollutants, generating high oxygen ratios that support lung efficiency."
        },
        {
          heading: "Private Rest Pods & Deep Meditation",
          body: "Following therapeutic procedures, standard recovery states require deep neurological stabilization. Our Metropolitan Eden features dedicated semi-private relaxation alcoves equipped with anatomic zero-gravity beds, sound-suppressed acoustic padding, and dim lighting to help clients transition from therapies into normal life safely."
        }
      ],
      amenities: [
        "Architectural curving sound barriers",
        "Deep meditation private cabanas",
        "Botanical air purification systems",
        "Cascading sandstone zen waterfalls",
        "Dimmable eyes-safe natural fiber lighting",
        "Premium organic elixirs and native teas bar"
      ],
      safetyNotes: [
        "Please whisper inside all relaxation and eden zones to honor other guests' silence.",
        "Mobile phones must be switched to strictly silent mode upon entry.",
        "Acoustic areas are restricted to guests aged 14 and over."
      ]
    },
    suites: {
      title: "VIP Individual & Couple Treatment Suites",
      subtitle: "Climate-Controlled Personal Sanctuaries",
      description: "Our sanctuary features twelve isolated individual treatment suites and premier couples' sanctuaries equipped with separate washrooms, adjustable acoustic systems, and anatomic hydraulic tables.",
      heroImage: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=1200&q=80",
      metrics: [
        { label: "Suite Total", value: "12 Private Rooms" },
        { label: "Acoustic Separation", value: "Double Wall Insulated" },
        { label: "Heated Tables", value: "Hydraulic Custom Soft" }
      ],
      sections: [
        {
          heading: "Complete Personal Seclusion",
          body: "Every individual suite is designed with its own climate parameters and isolated air extraction vents. This guarantees perfect privacy, hygiene, and safe micro-climates. You can customize the temperature, select native oil aromas, and coordinate pressure intensities with your somatic therapist."
        },
        {
          heading: "The Royal Couple's Sanctuary",
          body: "Our signature couple spaces feature side-by-side massage setups, private in-suite cedarwood steam chambers, and hot marble hydrotherapy bath basins. It is the premier upscale option in Lagos to celebrate special relationships, birthdays, or share premium stress relief in absolute solitude."
        }
      ],
      amenities: [
        "Ensuite granite hydro-massage rain showers",
        "Individual secure lockers and wardrobes",
        "Dyson professional hair & face grooming bars",
        "Anatomic temperature-adjustable tables",
        "Dedicated VIP Couple's hot marble tubs",
        "Bespoke iPad acoustic sound selections"
      ],
      safetyNotes: [
        "All suites are thoroughly disinfected and steam-sanitized between bookings.",
        "Individual lockers utilize encrypted electronic digital lock systems.",
        "Couples' packages must be requested 48 hours in advance."
      ]
    },
    hydrotherapy: {
      title: "Tropical Hydrotherapy Gardens",
      subtitle: "Therapeutic Heated Pools & Herbal Steam Cabins",
      description: "Step into our lush outdoor palm courtyard featuring heated mineral-rich plunge pools, eucalyptus aromatherapy steam cabins, and a traditional dry cedarwood wellness sauna. Perfect for complete pore opening and muscle decompression.",
      heroImage: "https://images.unsplash.com/photo-1596178060671-7a80dc8059ea?w=1200&q=80",
      metrics: [
        { label: "Pool Temp", value: "32°C - 38°C" },
        { label: "Sauna Wood", value: "Premium Nord Cedar" },
        { label: "Steam Capacity", value: "Eucalyptus Aromas" }
      ],
      sections: [
        {
          heading: "The Science of contrast Hydrotherapy",
          body: "Transitioning between high thermal humidity and cool soothing pools is an ancient therapeutic cycle. The intense steam opens pores and flushes toxic cells from the lymph system, while the heated botanical pool relaxes tight muscle fascia. It triggers quick neurological revitalization and reduces physical stress markers."
        },
        {
          heading: "Deep Pine-Eucalyptus Steam Inhalations",
          body: "Our custom steam chambers utilize active vaporizers loaded with organic lemongrass and pine tree oils. Breathing this high-humidity vapor clears deep sinus blockages, filters respiratory pathways, and oxygenates tissues. It is highly recommended to counteract urban dust or physical fatigue."
        }
      ],
      amenities: [
        "38°C heated outdoor hydrotherapy plunge pool",
        "Traditional dry Swedish cedar wood sauna",
        "Steam aromatherapy vaporizer pods",
        "Traditional Moroccan black soap scrubbing slabs",
        "Plush dry towels and cotton robes towel warmers",
        "Fresh botanically infused mint waters and juices"
      ],
      safetyNotes: [
        "Shower with warm water before entering thermal cabins to maintain high hygiene.",
        "Do not spend more than 15 continuous minutes in the dry or steam sauna.",
        "Pregnant guests must consult medical professionals before using steam suites."
      ]
    }
  };

  const current = facilitiesMap[facilityId];

  if (!current) {
    return (
      <div className="py-24 px-6 text-center max-w-xl mx-auto">
        <AlertCircle className="w-12 h-12 text-amber-600 mx-auto mb-4" />
        <h2 className="font-serif text-2xl text-[#3C3C3B] mb-2">Facility Not Found</h2>
        <p className="text-stone-500 font-light text-sm mb-6">
          The requested wellness facility could not be resolved or does not exist at our Lagos oasis.
        </p>
        <button
          onClick={() => navigateTo('chalet')}
          className="bg-[#5A5A40] text-white px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-widest hover:bg-[#4a4a34] transition-colors"
        >
          Return to Facilities Menu
        </button>
      </div>
    );
  }

  return (
    <div className="bg-[#F9F7F2] min-h-screen">
      
      {/* Top Breadcrumb Nav Row */}
      <div className="border-b border-[#E6E2D3]/60 py-10 bg-white/40">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row md:items-center justify-between gap-4 text-left">
          
          <button
            onClick={() => navigateTo('chalet')}
            className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#8D7A5D] hover:text-[#5A5A40] transition-colors self-start cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Our Oasis</span>
          </button>

          <div className="flex items-center gap-1.5 text-xs text-stone-400 font-mono tracking-wider font-bold">
            <span className="uppercase">WISS SPA</span>
            <span>/</span>
            <span className="text-[#8D7A5D] uppercase">OASIS SPACES</span>
            <span>/</span>
            <span className="text-[#3C3C3B] uppercase">{current.title}</span>
          </div>

        </div>
      </div>

      {/* Hero Header Section */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Block - Image & Metrics - 6 columns */}
          <div className="lg:col-span-6 space-y-8">
            <div className="relative h-[450px] w-full rounded-[40px] overflow-hidden shadow-2xl border border-[#E6E2D3] group">
              <img
                src={current.heroImage}
                alt={current.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>

            {/* Quick specifications display boxes */}
            <div className="grid sm:grid-cols-3 gap-4">
              {current.metrics.map((met, idx) => (
                <div key={idx} className="bg-white p-6 rounded-[24px] border border-[#E6E2D3]/60 text-left shadow-xs">
                  <span className="block text-[9px] text-stone-400 font-bold uppercase tracking-[0.15em] mb-1 font-mono">{met.label}</span>
                  <span className="font-serif text-[#3C3C3B] text-base font-semibold block leading-tight">{met.value}</span>
                </div>
              ))}
            </div>

            {/* Support Call To Action */}
            <div className="bg-[#5A5A40]/10 p-8 rounded-[32px] text-left border border-[#5A5A40]/30 space-y-4">
              <h4 className="text-xl font-serif text-[#5A5A40] italic">Experience world-class healing</h4>
              <p className="text-[#3C3C3B]/80 text-xs font-light leading-relaxed">
                Enjoy complimentary access to our Metropolitan Eden and private tea alcoves with any treatment reservation. Booking deposits secure your calendar schedule instantly.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => navigateTo('booking')}
                  className="bg-[#5A5A40] hover:bg-[#4a4a34] text-white px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest cursor-pointer shadow-md transition-all"
                >
                  Configure Rates & Dates
                </button>
              </div>
            </div>
          </div>

          {/* Right Block - Deep Content copy and lists - 6 columns */}
          <div className="lg:col-span-6 space-y-10 text-left">
            <div>
              <span className="text-xs uppercase tracking-[0.2.5em] font-bold text-[#8D7A5D] block mb-2 font-mono">
                WISS BOTANICAL EDEN • OASIS SPACES
              </span>
              <h1 className="font-serif text-3xl sm:text-5xl text-[#3C3C3B] mb-4 tracking-tight leading-tight">
                {current.title}
              </h1>
              <p className="text-stone-500 font-serif italic text-base sm:text-lg mb-6 leading-relaxed">
                {current.subtitle}
              </p>
              
              <div className="w-full h-[1px] bg-[#E6E2D3] my-8" />
              
              <p className="text-stone-700 leading-relaxed font-light text-sm sm:text-base mb-8">
                {current.description}
              </p>
            </div>

            {/* Detail Articles */}
            <div className="space-y-8">
              {current.sections.map((sect, idx) => (
                <div key={idx} className="space-y-3 bg-white/40 p-6 rounded-3xl border border-[#E6E2D3]/45 hover:bg-white/80 transition-all shadow-xs">
                  <h3 className="text-lg font-serif text-[#3C3C3B] font-medium tracking-wide flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#5A5A40] rounded-full" />
                    <span>{sect.heading}</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed">
                    {sect.body}
                  </p>
                </div>
              ))}
            </div>

            {/* Layout Equipment & Amenities */}
            <div className="bg-[#3C3C3B] text-white rounded-[32px] p-8 space-y-6 shadow-xl relative overflow-hidden">
              <div className="absolute right-[-20px] top-[-20px] text-white/5 pointer-events-none">
                <Flower2 className="w-28 h-28" />
              </div>
              <h3 className="text-lg font-serif text-[#D9D2C5] tracking-wide">Included Space Luxuries</h3>
              
              <ul className="grid sm:grid-cols-2 gap-4 text-xs font-light text-stone-200">
                {current.amenities.map((amen, idx) => (
                  <li key={idx} className="flex gap-2 text-left items-start">
                    <CheckCircle className="w-4 h-4 text-[#D9D2C5] shrink-0 mt-0.5" />
                    <span>{amen}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Operational Regulations & Wellness Rules */}
            <div className="bg-[#FAF8F5] p-6 rounded-2xl border border-[#E2DFD3] text-left space-y-4">
              <div className="flex items-center gap-2 text-amber-800">
                <ShieldAlert className="w-4.5 h-4.5" />
                <h4 className="text-xs font-bold uppercase tracking-wider">Sanctuary Code of Conduct</h4>
              </div>
              <ul className="space-y-2.5 text-[11px] text-stone-600 font-light list-disc pl-4">
                {current.safetyNotes.map((note, idx) => (
                  <li key={idx} className="leading-relaxed">
                    {note}
                  </li>
                ))}
              </ul>
              <div className="pt-2 border-t border-[#E6E2D3] flex items-center gap-2 text-[10px] text-stone-400 font-semibold uppercase font-mono">
                <HeartHandshake className="w-4 h-4 text-[#8D7A5D]" />
                <span>Honoring physical & neurological boundaries</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Carousel navigation suggestion */}
      <section className="bg-white/40 border-t border-[#E6E2D3]/60 py-16 px-6 mt-12 text-left">
        <div className="max-w-7xl mx-auto">
          <h3 className="font-serif text-2xl text-[#3C3C3B] mb-10 tracking-tight">Step into Other Oasis Spaces</h3>
          <div className="grid sm:grid-cols-3 gap-8">
            {Object.keys(facilitiesMap)
              .filter((fKey) => fKey !== facilityId)
              .map((fKey) => {
                const fac = facilitiesMap[fKey];
                return (
                  <div
                    key={fKey}
                    onClick={() => navigateTo('chalet', fKey)}
                    className="bg-white rounded-[24px] overflow-hidden border border-[#E6E2D3]/40 hover:shadow-md hover:border-[#8D7A5D]/40 transition-all duration-300 cursor-pointer group flex flex-col justify-between"
                  >
                    <div className="h-44 overflow-hidden relative">
                      <img 
                        src={fac.heroImage} 
                        alt={fac.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    <div className="p-6">
                      <h4 className="font-serif text-lg text-[#3C3C3B] mb-2 group-hover:text-[#5A5A40] transition-colors">{fac.title}</h4>
                      <p className="text-xs text-stone-500 font-light line-clamp-2 leading-relaxed">{fac.subtitle}</p>
                    </div>
                    <div className="p-6 pt-0 flex justify-end">
                      <span className="text-[10px] uppercase tracking-widest text-[#8D7A5D] font-bold group-hover:text-[#3C3C3B]">
                        Explore Space →
                      </span>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </section>

    </div>
  );
}
