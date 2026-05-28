import React from 'react';
import { ArrowLeft, Sparkles, CheckSquare, ShieldCheck, HeartPulse, Clock, FileText, CalendarRange, MapPin } from 'lucide-react';
import { TranslationDict } from '../types';

interface PackageDetailPageProps {
  packageId: string;
  navigateTo: (page: string, sub?: string | null) => void;
  dict: TranslationDict;
}

export default function PackageDetailPage({ packageId, navigateTo, dict }: PackageDetailPageProps) {
  
  const packagesMap: Record<string, {
    title: string;
    subtitle: string;
    description: string;
    basePrice: string;
    duration: string;
    complimentaryIcon: string;
    suitability: string;
    inclusions: string[];
    schedule: string[];
    editorialDesc: string;
    tips: string[];
  }> = {
    calm: {
      title: "The Calm Signature Package",
      subtitle: "Bespoke Restorative Day Retreat",
      description: "An exceptional intro escape combining our customized deep myofascial massage, continuous access to private herbal steam chambers, and post-session botanical cold-pressed juice flights.",
      basePrice: "₦75,000 / Session",
      duration: "90 Minutes Pure Therapy",
      complimentaryIcon: "lemongrass",
      suitability: "Corporate executives, digital fatigue, and high lower back tension recovery.",
      inclusions: [
        "90-minute customized Swedish or Deep Tissue massage session",
        "Continuous 30-minute access to our aromatic eucalyptus steam cabin",
        "Complimentary selection of aromatherapy oils (Lavender, Lemongrass or Sandalwood)",
        "Premium fluffy cotton robes, custom bath towels, and luxury slippers",
        "Complimentary post-therapy cold-pressed pine-ginger wellness drink flight",
        "Access to private zero-gravity rest cabanas overlooking garden pools"
      ],
      schedule: [
        "09:00 AM — Greeting with moisture-infused tea and somatic consulting.",
        "09:15 AM — Thermal cycle: 15 mins breathing in our lavender steam cabins.",
        "09:30 AM — Signature body therapy: 90 mins muscle fascia relief.",
        "11:00 AM — Refreshments: Native tea tray served in your quiet garden cabana.",
        "11:30 AM — Transition: Gentle recovery time on anatomic rest beds."
      ],
      editorialDesc: "The Calm Signature Package is designed specifically to counteract the rigorous speed of Lagos urban life. This physical relief ritual releases tight connective tissue across the neck, shoulders, and lower lumbar region. Guided by our expert therapists, we customize the somatic pressures and botanical oils to trigger immediate physical rest, stabilizing stress indicators and normalizing sleep hygiene.",
      tips: [
        "We recommend selecting active sandalwood oil to promote deep sleep patterns.",
        "Refrain from heavy direct solid foods for at least 1 hour prior to your session.",
        "Lock your booking online via our concierge calculator below to guarantee calendar space."
      ]
    },
    radiance: {
      title: "The Radiance Botanical Package",
      subtitle: "Full Skin Purification & Cellular Energy Glow",
      description: "Our signature multi-step glow ritual combining a traditional Moroccan Kessa exfoliation scrub with an advanced hydro-peptide facial to clarify, refresh, and deeply hydrate pores.",
      basePrice: "₦110,000 / Session",
      duration: "120 Minutes Complete Care",
      complimentaryIcon: "chamomile",
      suitability: "Skin congestion, tropical humidity stress, and glowing event preps.",
      inclusions: [
        "60-minute traditional heated marble Moroccan Hammam scrubbing session",
        "Genuine black eucalyptus soap coating and mechanical Kessa glove sweep",
        "60-minute advanced hydro-lifting facial with cold peptide infusions",
        "Calming Atlas clay (Ghassoul) face mask to absorb microscopic pollutants",
        "Complimentary cold-pressed citrus mocktails and fresh fruit skewers",
        "Private changing and grooming cabins equipped with Dyson styling units"
      ],
      schedule: [
        "10:00 AM — Consult: Custom skin analysis and floral water greeting.",
        "10:15 AM — Hammam bath: 60 mins steam, black soap, and full exfoliation.",
        "11:15 AM — Advanced facial: 60 mins pore vacuum and peptide lifting.",
        "12:15 PM — Rest: Lounge in private garden alcoves with citrus skewers.",
        "12:45 PM — Grooming: Continuous access to luxury Dyson styling suites."
      ],
      editorialDesc: "The Radiance Botanical Package targets skin fatigue caused by coastal humidity and urban pollutants. By combining intensive body exfoliation with our peptide facial, we clear toxic dead cells, stimulate physical collagen generation, and seal the dermis with certified organic oils. You depart with a glowing, uniform, soft, and completely hydrated complexion that is highly safe and healthy.",
      tips: [
        "Do not apply heavy cosmetic foundation for at least 4 hours after your facial.",
        "Drink generous water to help skin cells retain moisture.",
        "Excellent package right before wedding events or major celebrations."
      ]
    },
    royal: {
      title: "The Royal VIP Hammam Escape",
      subtitle: "The Elite Masterpiece of Rest & Rebirth",
      description: "An unparalleled, immersive high-luxury multi-hour escape in our secure VIP Couples' Pavilion, including synchronized deep-tissue therapy, private rose-petal baths, and custom gourmet platters.",
      basePrice: "₦180,000 / Session (Couple)",
      duration: "180 Minutes Ultra Luxury",
      complimentaryIcon: "rose",
      suitability: "Anniversaries, premium corporate gifts, special celebrations, and high-end couples' wellness.",
      inclusions: [
        "Private access to our soundproofed, premium VIP Treatment Pavilion",
        "Side-by-side synchronized 90-minute hot basalt stone massages",
        "30-minute private heated bubble-massage rose bath therapy",
        "Traditional Moroccan back scrubs with organic eucalyptus soaps",
        "Complimentary luxury bento platters featuring healthy light entrees",
        "Premium bottled mineral water and bubbly mocktails directly to your suite",
        "Private on-site secure valet parking and personal spa concierge"
      ],
      schedule: [
        "02:00 PM — Arrival: Dedicated direct valet and priority private room escort.",
        "02:10 PM — Aroma bar selection and welcome mocktail with rose platters.",
        "02:20 PM — Multi-step synchronized hot basalt stone and Swedish therapy.",
        "03:50 PM — Soaking: Private hot bubble rose bath with deep hydro pressure.",
        "04:20 PM — Nourishing: Custom wellness meal tray served inside the pavilion.",
        "05:00 PM — Exit: Departure gift pack of organic shea body butter."
      ],
      editorialDesc: "This is WISS Spa's absolute masterpiece wellness journey, built for complete seclusion. Reserved for guests who require absolute isolation, the VIP Couple's Pavilion features independent double-thick soundproofing, climate controllers, and separate washrooms. Your therapies are synchronized to the minute by dual somatic therapists, producing total physical recovery and emotional synergy.",
      tips: [
        "Requires at least 24 hours of advance scheduling to custom-tailor menu platters.",
        "Let your butler know of any dietary allergies during confirmation.",
        "We can configure custom floral displays or celebratory signs upon request."
      ]
    }
  };

  const current = packagesMap[packageId];

  if (!current) {
    return (
      <div className="py-24 px-6 text-center max-w-xl mx-auto">
        <ArrowLeft className="w-12 h-12 text-amber-600 mx-auto mb-4" />
        <h2 className="font-serif text-2xl text-[#3C3C3B] mb-2">Package Not Found</h2>
        <p className="text-stone-500 font-light text-sm mb-6">
          The requested luxury package could not be resolved or does not exist at our Lagos desk.
        </p>
        <button
          onClick={() => navigateTo('booking')}
          className="bg-[#5A5A40] text-white px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-widest hover:bg-[#4a4a34] transition-colors"
        >
          Return to Booking Page
        </button>
      </div>
    );
  }

  return (
    <div className="bg-[#F9F7F2] min-h-screen pb-12">
      
      {/* Top Breadcrumb Nav Row */}
      <div className="border-b border-[#E6E2D3]/60 py-10 bg-white/40">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row md:items-center justify-between gap-4 text-left">
          
          <button
            onClick={() => navigateTo('booking')}
            className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#8D7A5D] hover:text-[#5A5A40] transition-colors self-start cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Booking Page</span>
          </button>

          <div className="flex items-center gap-1.5 text-xs text-stone-400 font-mono tracking-wider font-bold">
            <span className="uppercase">WISS SPA</span>
            <span>/</span>
            <span className="text-[#8D7A5D] uppercase">SPA PACKAGES</span>
            <span>/</span>
            <span className="text-[#3C3C3B] uppercase font-bold">{packageId}</span>
          </div>

        </div>
      </div>

      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Block - Pricing, Duration & Booking form - 5 columns */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white p-8 rounded-[32px] border border-[#E6E2D3]/80 shadow-xl text-left space-y-6">
              <span className="bg-[#5A5A40]/10 text-[#5A5A40] font-sans text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full block w-max">
                SECTOR TICKET PREVIEW
              </span>
              <div>
                <h3 className="text-stone-400 text-xs font-semibold uppercase tracking-wider mb-1">Package Treatment Cost</h3>
                <span className="font-serif text-3xl sm:text-4xl text-[#3C3C3B] font-bold block">{current.basePrice}</span>
              </div>
              <div className="border-t border-[#E6E2D3]/40 pt-4 flex justify-between items-center text-xs">
                <span className="text-stone-500 font-semibold uppercase tracking-wide">Duration:</span>
                <span className="font-semibold text-stone-700 font-serif italic">{current.duration}</span>
              </div>
              <div className="border-t border-[#E6E2D3]/40 pt-4 text-xs font-light text-stone-600 leading-relaxed space-y-1">
                <p className="font-semibold text-[#8D7A5D]">Recommended Suitability:</p>
                <p>{current.suitability}</p>
              </div>
              <div className="border-t border-[#E6E2D3]/40 pt-6">
                <button
                  onClick={() => {
                    const el = document.getElementById('tarifs-form-section');
                    if (el) {
                      el.scrollIntoView({ behavior: 'smooth' });
                    } else {
                      navigateTo('booking');
                    }
                  }}
                  className="bg-[#5A5A40] hover:bg-[#4a4a34] text-white w-full py-4 rounded-full text-xs font-bold uppercase tracking-widest transition-colors shadow-md block text-center cursor-pointer"
                >
                  Book This Package Instantly
                </button>
              </div>
            </div>

            {/* Quick Informational Highlights */}
            <div className="bg-stone-800 text-white p-8 rounded-[32px] text-left space-y-5 shadow-lg relative overflow-hidden">
              <div className="absolute right-[-10px] top-[-10px] text-white/5 font-bold text-7xl font-mono">
                WISS
              </div>
              <h4 className="text-lg font-serif italic text-[#D9D2C5]">Our Commitment to Excellence</h4>
              <ul className="space-y-3.5 text-xs text-stone-300 font-light font-sans">
                <li className="flex gap-2.5 items-start">
                  <Clock className="w-4 h-4 text-[#D9D2C5] shrink-0 mt-0.5" />
                  <span>Always prompt. Start strictly on time with zero delay.</span>
                </li>
                <li className="flex gap-2.5 items-start">
                  <ShieldCheck className="w-4 h-4 text-[#D9D2C5] shrink-0 mt-0.5" />
                  <span>Licensed expert physical & cosmetic therapists in Lagos.</span>
                </li>
                <li className="flex gap-2.5 items-start">
                  <FileText className="w-4 h-4 text-[#D9D2C5] shrink-0 mt-0.5" />
                  <span>50% Commitment deposits secure exclusive slot placements.</span>
                </li>
                <li className="flex gap-2.5 items-start">
                  <MapPin className="w-4 h-4 text-[#D9D2C5] shrink-0 mt-0.5" />
                  <span>Valet secured parking with professional armed security.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Block - Package Description & Inclusions - 7 columns */}
          <div className="lg:col-span-7 space-y-10 text-left">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] font-bold text-[#8D7A5D] block mb-2 font-mono">
                WISS SPA • EXQUISITE PACKAGES
              </span>
              <h1 className="font-serif text-3xl sm:text-5xl text-[#3C3C3B] mb-4 tracking-tight leading-tight">
                {current.title}
              </h1>
              <p className="text-stone-500 font-serif italic text-base sm:text-lg mb-6 leading-relaxed">
                {current.subtitle}
              </p>
              
              <div className="w-full h-[1px] bg-[#E6E2D3] my-8" />
              
              <div className="text-stone-700 leading-relaxed font-light text-sm sm:text-base space-y-4">
                <p className="font-medium text-[#3C3C3B]">{current.description}</p>
                <p>{current.editorialDesc}</p>
              </div>
            </div>

            {/* Inclusions List Card */}
            <div className="bg-white rounded-[32px] p-8 md:p-10 border border-[#E6E2D3]/60 shadow-sm space-y-6">
              <h3 className="font-serif text-xl text-[#3C3C3B] border-b border-[#E6E2D3] pb-4">Full Package Inclusions</h3>
              <ul className="space-y-4 text-xs sm:text-sm font-light text-stone-600">
                {current.inclusions.map((inc, idx) => (
                  <li key={idx} className="flex gap-3 items-start text-left">
                    <CheckSquare className="w-4 h-4 text-[#5A5A40] shrink-0 mt-0.5" />
                    <span>{inc}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Timed Session Schedule */}
            <div className="space-y-6">
              <h3 className="font-serif text-xl text-[#3C3C3B] tracking-wide">Suggested Retreat Day Schedule</h3>
              <p className="text-stone-500 font-light text-xs leading-relaxed">
                WISS Spa sessions follow a highly coordinated chronological workflow designed to allow blood tension to drop gradually into deep neurological relief.
              </p>
              
              <div className="pl-4 border-l-2 border-[#8D7A5D]/45 space-y-6 text-xs text-[#3C3C3B]/90 font-light">
                {current.schedule.map((sch, idx) => (
                  <div key={idx} className="flex gap-4 items-start py-1">
                    <span className="bg-[#5A5A40] text-white font-semibold rounded-lg px-2.5 py-1 text-[10px] uppercase font-mono tracking-wider shrink-0">
                      Phase {idx + 1}
                    </span>
                    <p className="leading-relaxed sm:text-sm text-stone-700">{sch}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Expert tips warning checks */}
            <div className="bg-[#FAF8F5] p-6 rounded-2xl border border-[#E2DFD3] text-left space-y-4">
              <div className="flex items-center gap-2 text-[#5A5A40]">
                <CalendarRange className="w-4.5 h-4.5" />
                <h4 className="text-xs font-bold uppercase tracking-wider">Useful Guest Advisories</h4>
              </div>
              <ul className="space-y-2.5 text-[11px] text-stone-600 font-light list-disc pl-4">
                {current.tips.map((tip, idx) => (
                  <li key={idx} className="leading-relaxed">
                    {tip}
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* Suggested Packages menu bottom row */}
      <section className="bg-white/40 border-t border-[#E6E2D3]/60 py-16 px-6 mt-12 text-left">
        <div className="max-w-7xl mx-auto">
          <h3 className="font-serif text-2xl text-[#3C3C3B] mb-10 tracking-tight">Explore Other Curated Packages</h3>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.keys(packagesMap)
              .filter((pkID) => pkID !== packageId)
              .map((pkID) => {
                const pk = packagesMap[pkID];
                return (
                  <div 
                    key={pkID}
                    onClick={() => navigateTo('booking', pkID)}
                    className="bg-white rounded-[24px] p-6 overflow-hidden border border-[#E6E2D3]/40 shadow-xs hover:shadow-md hover:border-[#8D7A5D]/40 transition-all duration-300 cursor-pointer group flex flex-col justify-between"
                  >
                    <div>
                      <span className="bg-[#5A5A40]/10 text-[#5A5A40] text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full mb-4 inline-block">
                        {pkID.toUpperCase()}
                      </span>
                      <h4 className="font-serif text-lg text-[#3C3C3B] mb-2 group-hover:text-[#5A5A40] transition-colors">{pk.title}</h4>
                      <p className="text-xs text-stone-500 font-light line-clamp-2 leading-relaxed mb-4">{pk.description}</p>
                    </div>
                    <div className="flex justify-between items-center text-xs border-t border-stone-100 pt-4 mt-2">
                      <span className="font-semibold text-stone-700 font-mono">{pk.basePrice}</span>
                      <span className="text-[10px] uppercase tracking-widest text-[#8D7A5D] font-bold group-hover:text-[#3C3C3B]">
                        View Details →
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
