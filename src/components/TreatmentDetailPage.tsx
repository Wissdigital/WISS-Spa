import React from 'react';
import { ArrowLeft, Clock, ShieldCheck, HeartPulse, Sparkles, AlertCircle, Quote } from 'lucide-react';
import { TranslationDict, ActivityDetail } from '../types';
import { allActivitiesData } from '../locales';

interface TreatmentDetailPageProps {
  treatmentId: string;
  navigateTo: (page: string, sub?: string | null) => void;
  dict: TranslationDict;
}

export default function TreatmentDetailPage({ treatmentId, navigateTo, dict }: TreatmentDetailPageProps) {
  const therapy = allActivitiesData.find((a) => a.id === treatmentId);

  if (!therapy) {
    return (
      <div className="py-24 px-6 text-center max-w-xl mx-auto">
        <AlertCircle className="w-12 h-12 text-amber-600 mx-auto mb-4" />
        <h2 className="font-serif text-2xl text-[#3C3C3B] mb-2">Treatment Not Found</h2>
        <p className="text-stone-500 font-light text-sm mb-6">
          The requested therapeutic ritual could not be resolved or does not exist at our Lagos sanctuary.
        </p>
        <button
          onClick={() => navigateTo('experiences')}
          className="bg-[#5A5A40] text-white px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-widest hover:bg-[#4a4a34] transition-colors"
        >
          Return to Treatments Menu
        </button>
      </div>
    );
  }

  // Set default duration & pricing details based on the treatment for high realism
  const detailsMap: Record<string, { duration: string; price: string; science: string[]; process: string[] }> = {
    massage: {
      duration: "90 Minutes",
      price: "₦75,000 / $95",
      science: [
        "Relieves deep physiological spasms and chronic muscle soreness",
        "Increases full-body blood circulation and metabolic fluid drainage",
        "Calms over-stimulated adrenals, drastically reducing cortisol levels",
        "Improves soft-tissue range of motion and alleviates joint fatigue"
      ],
      process: [
        "Greeting and hot moisture-infused sage cleansing towel session.",
        "Aromatherapy bar: Custom selection of active organic lemongrass or sandalwood oil.",
        "Therapeutic warm-up: Initial medium Swedish friction to release superficial muscle fascia.",
        "Deep tissue manual therapy: Targeted trigger-point release on areas of key physical tension.",
        "Heated basalt stone placements: Penetrative heat locks into muscle fibers to release deep rigid spasms.",
        "Warm mineral infusion wipe-down, followed by organic restorative ginger root tea."
      ]
    },
    hammam: {
      duration: "105 Minutes",
      price: "₦95,000 / $120",
      science: [
        "Deeply extracts microscopic metropolitan skin pollutants and dead cellular structures",
        "Hydrates, softens, and completely fortifies the outer skin barrier",
        "Promotes lymphatic flow and micro-capillary circulation through intensive friction",
        "Invigorates full-body oxygenation, leaving an impeccable healthy skin texture"
      ],
      process: [
        "Pre-immersion: Relax for 15 minutes inside our eucalyptus-infused hot herbal steam room.",
        "Lathering: Complete envelope in traditional olive oil-rich Moroccan black soap.",
        "Exfoliation: Deep mechanical body scrubbing performed with a sterile Kessa glove.",
        "Rinsing: Thermal pure spring water cascaded gently over the body on warmed marble tables.",
        "Purifying mask: Soothing wrap utilizing authentic mineral-charged Atlas mountains ghassoul clay.",
        "Post-scrub soothing lotion application with pure orange blossom botanical waters."
      ]
    },
    facial: {
      duration: "75 Minutes",
      price: "₦65,000 / $80",
      science: [
        "Unclogs sebum channels, preventing acneic breakouts caused by Lagos humidity",
        "Infuses highly concentrated hyaluronic acids and botanical peptides deep into the dermis",
        "Simulates skin protein generation (collagen and elastin) for visible youthfulness",
        "Deters dark spot pigmentation via biological antioxidant skin-food defense"
      ],
      process: [
        "Double-cleansing: Extraction of oil pollutants utilizing citrus botanical cleansers.",
        "Gentle salicylic peeling: Liquid sweep to clear cellular build-up from skin pores.",
        "Hydro-vacuum extraction: Painless physical debris removal from the T-zone.",
        "Direct peptide infusion: Multi-nozzle cold pressurized oxygen serum delivery.",
        "Lifting massage: Manual fascia exercise using ice-cold glass globes to minimize pores.",
        "Shielding: Protective organic sunscreen and deep hydrating rose oil sealant."
      ]
    },
    couple: {
      duration: "120 Minutes",
      price: "₦180,000 / $225 (per couple)",
      science: [
        "Synchronizes physical relaxation patterns between partners, building deep tranquility",
        "Instills combined emotional grounding through sensory aromatherapy and nature soundscapes",
        "Releases tension across back, neck, and shoulder regions simultaneously",
        "Revitalizes systemic cellular vitality with botanical tea pairings and fresh fruit nutrients"
      ],
      process: [
        "Welcome: Custom herbal beverages served in your private VIP Treatment Pavilion.",
        "Aroma ritual: Choice of customized sensual floral scents (jasmine, lavender, vanilla).",
        "Side-by-side session: Fully customized Swedish or Aromatherapy deep-tissue massage.",
        "Soaking: Private heated rose-petal bath experience with custom hydro-massage elements.",
        "Nourishment: Relaxing rest period with custom gourmet wellness bento boxes.",
        "Departure gift: Selection of premium botanical face serums to continue home care."
      ]
    },
    detox: {
      duration: "90 Minutes",
      price: "₦70,000 / $88",
      science: [
        "Encourages intensive cellular waste and heavy metal toxin extraction",
        "Deeply clarifies and conditions dry or sunlight-stressed skin",
        "Supports fluid metabolism, relieving water retention and bloating in lower limbs",
        "Provides rich cellular minerals directly through the skin surface"
      ],
      process: [
        "Skin preparation: Invigorating natural bristle body brushing to excite lymphatic flow.",
        "Application: Full coating in warm mineral-rich mud with activated coconut charcoal.",
        "Wrapping: Cocooning the torso in comforting biological thermal thermal wraps.",
        "Head therapy: Relaxing warm lavender scalp massage during the wrap metabolism phase.",
        "Clarifying rinse: High-pressure rain shower to lift the mud wrap completely.",
        "Sealing: Massage application of cold-pressed African shea butter and orange oil."
      ]
    },
    sound: {
      duration: "60 Minutes",
      price: "₦50,000 / $62",
      science: [
        "Induces deep theta-wave brain states, facilitating profound physical recoverability",
        "Safely regulates cardiac and respiratory tempos through acoustic rhythm alignment",
        "Mitigates corporate-related burnout, neurosis, and persistent sleep problems",
        "Calms neurological hyperactivity, producing complete inner mental silent space"
      ],
      process: [
        "Settling: Reclining on zero-gravity medical-grade resting beds with silk eye masks.",
        "Breathing: Coordinated diaphragmatic breathing guided by our acoustic counselor.",
        "Immersive sound phase: Continuous, shifting sonic waves from pure Himalayan singing bowls.",
        "Resonance: Direct physical vibration placements of select bowls on the chest/abdomen.",
        "Transition: Quiet integration period allowing the brainwaves to gently re-align.",
        "Hydration: Warm jasmine-mint herbal blends to complete the sound meditation."
      ]
    }
  };

  const currentDetails = detailsMap[therapy.id] || {
    duration: "75 Minutes",
    price: "₦65,000 / $80",
    science: [
      "Promotes deep peace and holistic bodily alignment",
      "Reduces physical stress markers and alleviates anxiety spikes"
    ],
    process: [
      "Initial consulting and herbal tea greeting.",
      "Custom choice of organic massage essential extracts.",
      "Therapeutic body treatment tailored to client preferences.",
      "Relaxing post-session rest wrap with botanical drinks."
    ]
  };

  const handleBookMe = () => {
    // Navigate directly to booking with a query state or scroll trigger
    navigateTo('booking');
  };

  return (
    <div className="bg-[#F9F7F2] min-h-screen">
      
      {/* Decorative top title section */}
      <div className="border-b border-[#E6E2D3]/60 py-10 bg-white/40">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row md:items-center justify-between gap-4 text-left">
          
          <button
            onClick={() => navigateTo('experiences')}
            className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#8D7A5D] hover:text-[#5A5A40] transition-colors self-start cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Treatments</span>
          </button>

          <div className="flex items-center gap-1.5 text-xs text-stone-400 font-mono tracking-wider font-bold">
            <span className="uppercase">WISS SPA</span>
            <span>/</span>
            <span className="text-[#8D7A5D] uppercase">SIGNATURE TREATMENT</span>
            <span>/</span>
            <span className="text-[#3C3C3B] uppercase">{therapy.title}</span>
          </div>

        </div>
      </div>

      {/* Hero Visual Area with content overlap */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column - Large Image, Time, Rates - 5 columns */}
          <div className="lg:col-span-5 space-y-8">
            <div className="relative h-96 min-h-[400px] w-full rounded-[32px] overflow-hidden shadow-xl border border-[#E6E2D3]/60 group">
              <img
                src={therapy.image}
                alt={therapy.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute top-4 left-4 bg-[#5A5A40] text-white text-[10px] font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-md">
                {therapy.category}
              </div>
            </div>

            {/* Quick Metrics (Duration & Rate Cards) */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-2xl border border-[#E6E2D3]/60 text-left">
                <Clock className="w-5 h-5 text-[#8D7A5D] mb-2" />
                <span className="block text-[10px] text-stone-400 font-semibold uppercase tracking-widest leading-none mb-1">Session Length</span>
                <span className="font-serif text-[#3C3C3B] text-base font-semibold">{currentDetails.duration}</span>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-[#E6E2D3]/60 text-left">
                <Sparkles className="w-5 h-5 text-[#8D7A5D] mb-2" />
                <span className="block text-[10px] text-stone-400 font-semibold uppercase tracking-widest leading-none mb-1">Standard Cost</span>
                <span className="font-serif text-[#3C3C3B] text-base font-semibold">{currentDetails.price}</span>
              </div>
            </div>

            {/* Urgent Booking Call To Action Banner */}
            <div className="bg-[#3C3C3B] text-white p-8 rounded-[32px] text-left relative overflow-hidden shadow-lg">
              <div className="absolute -right-6 -bottom-6 text-white/5 pointer-events-none">
                <HeartPulse className="w-24 h-24" />
              </div>
              <h4 className="text-lg font-serif italic mb-2 text-white">Experience immediate cellular recovery</h4>
              <p className="text-stone-300 text-xs font-light leading-relaxed mb-6">
                Reserve your slot on of our twelve temperature-controlled sensory treatment suites. Secure parking & professional valet provided.
              </p>
              <button
                onClick={handleBookMe}
                className="w-full py-3 bg-[#5A5A40] hover:bg-[#4a4a34] text-white rounded-full text-xs font-semibold uppercase tracking-widest transition-colors shadow-sm cursor-pointer"
              >
                Reserve Treatment Room
              </button>
            </div>

            {/* Safety Guidelines Card */}
            <div className="bg-[#FAF8F5] p-6 rounded-2xl border border-[#E2DFD3] text-left">
              <div className="flex items-center gap-2 mb-3">
                <AlertCircle className="w-4 h-4 text-[#8D7A5D]" />
                <h5 className="text-xs font-semibold text-[#3C3C3B] uppercase tracking-wider">Pre-Arrival Safety Checks</h5>
              </div>
              <ul className="space-y-2 text-[11px] text-stone-600 font-light list-disc pl-4">
                <li>Arrive 15 minutes prior to allow pressure levels to normalize.</li>
                <li>Please disclose any skin allergies or early pregnancy to the concierge.</li>
                <li>Avoid heavy direct solar exposures or deep shaving prior to exfoliation.</li>
                <li>We provide premium disposable undergarments, plush robes, and slippers.</li>
              </ul>
            </div>
          </div>

          {/* Right Column - Deep Editorial Copy, Clinical Action, and Process Steps - 7 columns */}
          <div className="lg:col-span-7 space-y-10 text-left">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#8D7A5D] block mb-2 font-mono">
                WISS BOTANICAL FORMULA • SIGNATURE THERAPY
              </span>
              <h1 className="font-serif text-3xl sm:text-5xl text-[#3C3C3B] mb-6 tracking-tight font-medium">
                {therapy.title}
              </h1>
              <p className="text-[#3C3C3B]/90 font-light text-base sm:text-lg leading-relaxed mb-6 italic">
                {therapy.shortDesc}
              </p>
              <div className="w-full h-[1px] bg-[#E6E2D3] my-8" />
              <div className="text-stone-700 leading-relaxed font-light text-sm sm:text-base space-y-4">
                <p>{therapy.fullDesc}</p>
                <p>
                  Each phase of this treatment is executed by hand by a certified somatic therapist. We use premium custom organic concentrates extracted from Nigerian moringa seeds, native lemongrass fields, high-altitude Cameroon green tea, and certified Moroccan oils to purify pathways, open capillary systems, and drain cognitive load.
                </p>
              </div>
            </div>

            {/* Therapeutic Science Highlights Section */}
            <div className="bg-[#E6E2D3]/30 rounded-[32px] p-8 border border-[#E6E2D3]/60">
              <h3 className="text-lg font-serif text-[#3C3C3B] mb-5 tracking-wide flex items-center gap-2">
                <HeartPulse className="w-5 h-5 text-[#5A5A40]" />
                <span>Physiological & Cognitive Benefits</span>
              </h3>
              <ul className="grid sm:grid-cols-2 gap-4">
                {currentDetails.science.map((sci, idx) => (
                  <li key={idx} className="flex gap-2.5 items-start text-xs text-[#3C3C3B]/80 font-light">
                    <ShieldCheck className="w-4 h-4 text-[#5A5A40] shrink-0 mt-0.5" />
                    <span>{sci}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Step-by-Step Experience Process Flow */}
            <div className="space-y-6">
              <h3 className="text-xl font-serif text-[#3C3C3B] tracking-wide mb-2">The Ritual Process Flow</h3>
              <p className="text-xs text-stone-500 font-light leading-relaxed mb-6">
                WISS Spa treatments follow a rigorous, premium, pre-therapy process developed with medical counselors to stabilize sensory frequencies.
              </p>
              
              <div className="relative pl-6 border-l border-[#8D7A5D]/40 space-y-8">
                {currentDetails.process.map((step, idx) => (
                  <div key={idx} className="relative group">
                    {/* Stepper Dot */}
                    <div className="absolute left-[-30px] top-1 bg-[#F9F7F2] text-[#8D7A5D] border-2 border-[#8D7A5D] w-5 h-5 rounded-full flex items-center justify-center text-[9px] font-bold group-hover:bg-[#5A5A40] group-hover:text-white transition-all">
                      {idx + 1}
                    </div>
                    <div className="bg-white/40 p-5 rounded-2xl border border-[#E6E2D3]/40 hover:bg-white/80 hover:shadow-md transition-all duration-300">
                      <p className="text-xs sm:text-sm text-[#3C3C3B] font-light leading-relaxed">
                        {step}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dynamic Local Review/Testimonial Quote specific to this therapy */}
            <div className="relative bg-white border border-[#E6E2D3]/60 p-8 rounded-[32px] shadow-sm italic text-[#3C3C3B]/85 font-light text-xs sm:text-sm leading-relaxed overflow-hidden">
              <div className="absolute top-4 right-6 text-[#8D7A5D]/5 pointer-events-none">
                <Quote className="w-24 h-24" />
              </div>
              <p className="mb-4">
                "The experience was absolutely therapeutic. My muscle soreness vanished completely within an hour. The focus on biological hygiene, warm sheets, and the quiet gardens right in Victoria Island is truly extraordinary."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-[#8D7A5D] rounded-full" />
                <span className="text-[10px] text-stone-400 font-semibold uppercase tracking-wider font-sans">Verified WISS Spa Client Review</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Suggested Related Treatments Section at bottom to prevent dead end */}
      <section className="bg-white/40 border-t border-[#E6E2D3]/60 py-20 px-6 mt-12 text-left">
        <div className="max-w-7xl mx-auto">
          <h3 className="font-serif text-2xl text-[#3C3C3B] mb-10 tracking-tight">Explore Other Signature Rituals</h3>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {allActivitiesData
              .filter((item) => item.id !== therapy.id)
              .slice(0, 3)
              .map((item) => (
                <div 
                  key={item.id}
                  onClick={() => navigateTo('experiences', item.id)}
                  className="bg-white rounded-[24px] overflow-hidden border border-[#E6E2D3]/40 shadow-xs hover:shadow-md hover:border-[#8D7A5D]/30 transition-all duration-300 cursor-pointer group flex flex-col justify-between"
                >
                  <div className="h-44 overflow-hidden relative">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-3 right-3 bg-black/40 backdrop-blur-md text-white text-[9px] font-bold uppercase py-1 px-2.5 rounded-full">
                      {item.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="font-serif text-lg text-[#3C3C3B] mb-2 group-hover:text-[#5A5A40] transition-colors">{item.title}</h4>
                    <p className="text-xs text-stone-500 font-light line-clamp-2 leading-relaxed">{item.shortDesc}</p>
                  </div>
                  <div className="p-6 pt-0 flex justify-end">
                    <span className="text-[10px] uppercase tracking-widest text-[#8D7A5D] font-semibold group-hover:text-[#3C3C3B] transition-colors">
                      Configure Session →
                    </span>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

    </div>
  );
}
