import React, { useState, useEffect } from 'react';
import { Calculator, Calendar, Coffee, Sparkles, HelpCircle, FileText, CheckCircle2, UserCheck, Trash2, ShieldCheck, Ticket } from 'lucide-react';
import { TranslationDict, BookingInquiry } from '../types';

interface BookingCalculatorProps {
  dict: TranslationDict;
  onAddInquiry: (inquiry: BookingInquiry) => void;
  navigateTo?: (page: string, sub?: string | null) => void;
}

export default function BookingCalculator({ dict, onAddInquiry, navigateTo }: BookingCalculatorProps) {
  const [selectedPackage, setSelectedPackage] = useState<'calm' | 'radiance' | 'royal'>('calm');
  const [bookingDate, setBookingDate] = useState('');
  const [bookingTime, setBookingTime] = useState('10:00');
  const [guestCount, setGuestCount] = useState(1);
  
  // Custom addon options
  const [extraFootMassage, setExtraFootMassage] = useState(false);
  const [lavenderOil, setLavenderOil] = useState(false);
  const [gourmetPlatter, setGourmetPlatter] = useState(false);
  const [soundBath, setSoundBath] = useState(false);

  const [guestName, setGuestName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [guestMessage, setGuestMessage] = useState('');

  const [calcTotal, setCalcTotal] = useState<number>(0);
  const [errorMessage, setErrorMessage] = useState('');
  const [successSent, setSuccessSent] = useState(false);

  // Prices Setup in Naira (₦)
  const basePrices = {
    calm: 75000,
    radiance: 110000,
    royal: 180000
  };

  const addOnPrices = {
    footMassage: 15000,
    lavenderOil: 10000,
    gourmetPlatter: 12000,
    soundBath: 20000
  };

  const resetForm = () => {
    setBookingDate('');
    setBookingTime('10:00');
    setGuestCount(1);
    setExtraFootMassage(false);
    setLavenderOil(false);
    setGourmetPlatter(false);
    setSoundBath(false);
    setGuestName('');
    setEmailAddress('');
    setPhoneNumber('');
    setGuestMessage('');
    setErrorMessage('');
  };

  const calculateEstimate = () => {
    let packageBase = basePrices[selectedPackage];
    let addonsTotal = 0;

    if (extraFootMassage) addonsTotal += addOnPrices.footMassage;
    if (lavenderOil) addonsTotal += addOnPrices.lavenderOil;
    if (gourmetPlatter) addonsTotal += addOnPrices.gourmetPlatter;
    if (soundBath) addonsTotal += addOnPrices.soundBath;

    const total = (packageBase + addonsTotal) * guestCount;
    setCalcTotal(total);
  };

  useEffect(() => {
    calculateEstimate();
  }, [selectedPackage, guestCount, extraFootMassage, lavenderOil, gourmetPlatter, soundBath]);

  const handleSubmitInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    if (!guestName || !emailAddress || !phoneNumber) {
      setErrorMessage("Please fill in your name, email address, and phone number to complete the booking proposal.");
      return;
    }

    if (!bookingDate) {
      setErrorMessage("Please select a valid booking date.");
      return;
    }

    const packageNames = {
      calm: "The Calm Signature Package",
      radiance: "The Radiance Botanical Package",
      royal: "The Royal VIP Hammam Escape"
    };

    let detailsMessage = `Spa Reservation Proposal: ${packageNames[selectedPackage]} for ${guestCount} guest(s). Selected addons: `;
    const selectedAddonsList: string[] = [];
    if (extraFootMassage) selectedAddonsList.push("Extra 30m Foot Massage");
    if (lavenderOil) selectedAddonsList.push("Premium Lavender Aromatherapy Oil");
    if (gourmetPlatter) selectedAddonsList.push("Gourmet Fresh Fruit Platter");
    if (soundBath) selectedAddonsList.push("Vibrational Sound Bath Rest");

    detailsMessage += selectedAddonsList.length > 0 ? selectedAddonsList.join(', ') : 'None';
    if (guestMessage) {
      detailsMessage += `. Guest Message: "${guestMessage}"`;
    }

    const newInquiry: BookingInquiry = {
      id: `spainq-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`,
      name: guestName,
      email: emailAddress,
      startDate: bookingDate,
      endDate: bookingDate, // same-day treatments
      guests: guestCount,
      message: `${detailsMessage} [Preferred Time: ${bookingTime}, Location: Victoria Island Lounge, Contact: ${phoneNumber}]`,
      createdAt: new Date().toISOString(),
      status: 'pending',
      calculatedPrice: calcTotal,
    };

    onAddInquiry(newInquiry);
    setSuccessSent(true);
    resetForm();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="tarifs" className="py-16 px-6 max-w-7xl mx-auto scroll-mt-20">
      
      {/* Title */}
      <div className="text-center mb-16">
        <span className="text-[#8D7A5D] font-semibold text-xs tracking-[0.3em] uppercase mb-3 block">
          WISS SPA RATES & SELECTION
        </span>
        <h2 className="text-3xl md:text-5xl font-serif tracking-tight text-[#3C3C3B]">
          Exquisite Treatment Packages
        </h2>
        <div className="w-16 h-[1.5px] bg-[#8D7A5D]/50 mx-auto mt-4 rounded-full" />
      </div>

      {/* Grid of standard seasonal costs adapted to spa packages in Lagos */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        
        {/* Calm Package */}
        <div className="bg-white/70 rounded-[32px] p-8 border border-[#E6E2D3]/60 hover:shadow-lg transition-all text-left flex flex-col justify-between h-full group">
          <div>
            <span className="text-[#8D7A5D] text-[10px] font-bold tracking-widest uppercase mb-2 block font-mono">
              SIGNATURE BODY REST
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif text-[#3C3C3B] mb-2">
              ₦75,000
              <span className="text-xs font-light text-stone-500 font-sans"> / guest</span>
            </h3>
            <p className="text-xs text-[#5A5A40] mb-4 font-semibold uppercase tracking-wider font-mono">
              90 Minutes Complete Therapy
            </p>
            <p className="text-stone-500 font-light text-xs sm:text-sm leading-relaxed mb-6">
              Expert myofascial massage matching your choice of botanical oils, paired with aromatic spruce steam inhalation therapy.
            </p>
            <ul className="text-xs text-stone-600 space-y-3 font-light border-y border-[#E6E2D3]/30 py-6 mb-6">
              <li className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#8D7A5D]" />
                <span>Custom somatic body pressures</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#8D7A5D]" />
                <span>30-min premium steam cabin access</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#8D7A5D]" />
                <span>Post-session wellness cold drink flight</span>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-3">
            <button
              onClick={() => setSelectedPackage('calm')}
              className={`w-full py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all cursor-pointer text-center ${
                selectedPackage === 'calm'
                  ? 'bg-[#3C3C3B] text-white border border-transparent'
                  : 'bg-white hover:bg-stone-50 border border-[#E6E2D3] text-[#3C3C3B]'
              }`}
            >
              Select Package
            </button>
            <button
              onClick={() => navigateTo?.('booking', 'calm')}
              className="text-center text-[10px] text-[#8D7A5D] hover:text-[#5A5A40] transition-colors font-semibold uppercase tracking-widest block py-1 cursor-pointer"
            >
              View In-Depth Details →
            </button>
          </div>
        </div>

        {/* Radiance Package */}
        <div className="bg-[#5A5A40] rounded-[32px] p-8 shadow-xl text-white text-left relative overflow-hidden flex flex-col justify-between h-full group">
          <div className="absolute top-6 right-6 bg-[#D9D2C5] text-[#3C3C3B] text-[9px] font-semibold uppercase tracking-widest px-3 py-1 rounded-full shadow-xs font-mono">
            MOST POPULAR PREP
          </div>
          <div>
            <span className="text-[#D9D2C5] text-[10px] font-bold tracking-widest uppercase mb-2 block font-mono">
              DERMAL REFRESH & GLOW
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif text-white mb-2">
              ₦110,000
              <span className="text-xs font-light text-stone-200/90 font-sans"> / guest</span>
            </h3>
            <p className="text-xs text-[#D9D2C5] mb-4 font-semibold uppercase tracking-wider font-mono">
              120 Minutes Complete Care
            </p>
            <p className="text-stone-200/90 font-light text-xs sm:text-sm leading-relaxed mb-6">
              Ancient Moroccan Hammam eucalyptus black soap scrubs combined with non-invasive hydro-peptide skin facial hydration.
            </p>
            <ul className="text-xs text-stone-100/90 space-y-3 font-light border-y border-white/10 py-6 mb-6">
              <li className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D9D2C5]" />
                <span>60-min heated marble Hammam scrubs</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D9D2C5]" />
                <span>60-min collagen-peptide facial care</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D9D2C5]" />
                <span>Fresh organic citrus skewers served in lounge</span>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-3">
            <button
              onClick={() => setSelectedPackage('radiance')}
              className={`w-full py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all cursor-pointer text-center ${
                selectedPackage === 'radiance'
                  ? 'bg-white text-[#3C3C3B]'
                  : 'bg-white/10 hover:bg-white/15 text-white border border-white/20'
              }`}
            >
              Select Package
            </button>
            <button
              onClick={() => navigateTo?.('booking', 'radiance')}
              className="text-center text-[10px] text-[#D9D2C5] hover:text-white transition-colors font-semibold uppercase tracking-widest block py-1 cursor-pointer"
            >
              View In-Depth Details →
            </button>
          </div>
        </div>

        {/* Royal VIP Package */}
        <div className="bg-white/70 rounded-[32px] p-8 border border-[#E6E2D3]/60 hover:shadow-lg transition-all text-left flex flex-col justify-between h-full group">
          <div>
            <span className="text-[#8D7A5D] text-[10px] font-bold tracking-widest uppercase mb-2 block font-mono">
              ELITE VIP SANCTUARY
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif text-[#3C3C3B] mb-2">
              ₦180,000
              <span className="text-xs font-light text-stone-500 font-sans"> / couple</span>
            </h3>
            <p className="text-xs text-[#5A5A40] mb-4 font-semibold uppercase tracking-wider font-mono">
              180 Minutes Extreme Seclusion
            </p>
            <p className="text-stone-500 font-light text-xs sm:text-sm leading-relaxed mb-6">
              Exclusive VIP Couples' suite. Coordinated basalt hot stone rituals, private hot rose gardens hydro basins, and gourmet bento platters.
            </p>
            <ul className="text-xs text-stone-600 space-y-3 font-light border-y border-[#E6E2D3]/30 py-6 mb-6">
              <li className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#8D7A5D]" />
                <span>Synchronized volcanic stone massages</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#8D7A5D]" />
                <span>30-min rose water soaking marble tub</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#8D7A5D]" />
                <span>Concierge gourmet fruit & snacks platter</span>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-3">
            <button
              onClick={() => setSelectedPackage('royal')}
              className={`w-full py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all cursor-pointer text-center ${
                selectedPackage === 'royal'
                  ? 'bg-[#3C3C3B] text-white border border-transparent'
                  : 'bg-white hover:bg-stone-50 border border-[#E6E2D3] text-[#3C3C3B]'
              }`}
            >
              Select Package
            </button>
            <button
              onClick={() => navigateTo?.('booking', 'royal')}
              className="text-center text-[10px] text-[#8D7A5D] hover:text-[#5A5A40] transition-colors font-semibold uppercase tracking-widest block py-1 cursor-pointer"
            >
              View In-Depth Details →
            </button>
          </div>
        </div>

      </div>

      {/* Spa policies highlights horizontal lists */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
        <div className="bg-[#E6E2D3]/20 rounded-2xl p-6 text-center border border-[#E6E2D3]/40">
          <Calendar className="w-5 h-5 text-[#5A5A40] mx-auto mb-3" />
          <h4 className="font-serif text-[#3C3C3B] mb-1 text-sm font-medium">Lagos Oasis</h4>
          <p className="text-xs text-stone-500 font-light font-mono leading-none">Open Multi-Days: 9AM - 9PM</p>
        </div>
        <div className="bg-[#E6E2D3]/20 rounded-2xl p-6 text-center border border-[#E6E2D3]/40">
          <Sparkles className="w-5 h-5 text-[#5A5A40] mx-auto mb-3" />
          <h4 className="font-serif text-[#3C3C3B] mb-1 text-sm font-medium">Grooming Suite</h4>
          <p className="text-xs text-stone-500 font-light leading-none">Complimentary Access</p>
        </div>
        <div className="bg-[#E6E2D3]/20 rounded-2xl p-6 text-center border border-[#E6E2D3]/40">
          <Coffee className="w-5 h-5 text-[#5A5A40] mx-auto mb-3" />
          <h4 className="font-serif text-[#3C3C3B] mb-1 text-sm font-medium">Bespoke Inclusions</h4>
          <p className="text-xs text-stone-500 font-light leading-none">Fresh Botanical Teas</p>
        </div>
        <div className="bg-[#E6E2D3]/20 rounded-2xl p-6 text-center border border-[#E6E2D3]/40">
          <FileText className="w-5 h-5 text-[#5A5A40] mx-auto mb-3" />
          <h4 className="font-serif text-[#3C3C3B] mb-1 text-sm font-medium">Commitment Fee</h4>
          <p className="text-xs text-stone-500 font-light leading-none">50% to Lock Slot</p>
        </div>
      </div>

      {/* Interactive Spa Calendar Configurator & Invoice preview */}
      <div className="bg-[#3C3C3B] rounded-[32px] p-8 md:p-12 border border-[#E6E2D3]/10 shadow-xl relative overflow-hidden">
        
        {/* Layout containing form inputs + live Naira quote statement */}
        <div className="grid lg:grid-cols-12 gap-12 items-start text-left text-white">
          
          {/* Form area */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3">
              <Calculator className="w-6 h-6 text-[#D9D2C5] shrink-0" />
              <h3 className="text-xl sm:text-2xl font-serif text-white">
                Spa Quote Configurator
              </h3>
            </div>
            
            {errorMessage && (
              <div className="bg-red-500/10 border border-red-500/20 text-red-200 p-4 rounded-xl text-xs font-semibold">
                {errorMessage}
              </div>
            )}

            {successSent && (
              <div className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-200 p-4 rounded-xl text-xs font-semibold flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Spa Booking request dispatched to WISS concierge. We will confirm via SMS/email within 1 hour.</span>
              </div>
            )}

            <form onSubmit={handleSubmitInquiry} className="grid sm:grid-cols-2 gap-5">
              
              {/* Preferred Date */}
              <div>
                <label className="block text-[11px] font-semibold text-[#D9D2C5] uppercase tracking-wider mb-2 font-mono">
                  Preferred Date*
                </label>
                <input
                  type="date"
                  required
                  value={bookingDate}
                  onChange={(e) => setBookingDate(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 text-white rounded-xl py-3 px-4 focus:outline-none focus:border-[#D9D2C5] font-light text-xs [color-scheme:dark]"
                />
              </div>

              {/* Preferred Time block */}
              <div>
                <label className="block text-[11px] font-semibold text-[#D9D2C5] uppercase tracking-wider mb-2 font-mono">
                  Preferred Session Time
                </label>
                <select
                  value={bookingTime}
                  onChange={(e) => setBookingTime(e.target.value)}
                  className="w-full bg-stone-700/80 border border-white/10 text-white rounded-xl py-3 px-4 focus:outline-none focus:border-[#D9D2C5] font-light text-xs"
                >
                  <option value="09:00">09:00 AM (Morning Stillness)</option>
                  <option value="10:30">10:30 AM</option>
                  <option value="12:00">12:00 PM (Midday Rest)</option>
                  <option value="14:00">02:00 PM</option>
                  <option value="16:00">04:00 PM (Sunset Serenity)</option>
                  <option value="18:30">06:30 PM (Evening Recovery)</option>
                </select>
              </div>

              {/* Package Dropdown Sync */}
              <div>
                <label className="block text-[11px] font-semibold text-[#D9D2C5] uppercase tracking-wider mb-2 font-mono">
                  Selected Spa Package
                </label>
                <select
                  value={selectedPackage}
                  onChange={(e) => setSelectedPackage(e.target.value as any)}
                  className="w-full bg-stone-700/80 border border-white/10 text-white rounded-xl py-3 px-4 focus:outline-none focus:border-[#D9D2C5] font-light text-xs"
                >
                  <option value="calm">The Calm Signature Package (₦75,000)</option>
                  <option value="radiance">The Radiance Botanical Package (₦110,000)</option>
                  <option value="royal">The Royal VIP Hammam Escape (₦180,000)</option>
                </select>
              </div>

              {/* Guests booking count */}
              <div>
                <label className="block text-[11px] font-semibold text-[#D9D2C5] uppercase tracking-wider mb-2 font-mono">
                  Number of Attendees
                </label>
                <select
                  value={guestCount}
                  onChange={(e) => setGuestCount(Number(e.target.value))}
                  className="w-full bg-stone-700/80 border border-white/10 text-white rounded-xl py-3 px-4 focus:outline-none focus:border-[#D9D2C5] font-light text-xs"
                >
                  <option value={1}>1 Guest (Single Rest)</option>
                  <option value={2}>2 Guests (Couples/Companion)</option>
                  <option value={3}>3 Guests (Small Group)</option>
                  <option value={4}>4 Guests (Executive Retreat)</option>
                </select>
              </div>

              {/* Custom Addons checklists */}
              <div className="col-span-2 space-y-4 pt-4 border-t border-white/5 mt-2 text-left">
                <span className="block text-[11px] font-semibold uppercase tracking-wider text-[#D9D2C5] font-mono">
                  Customize with Organic Elements
                </span>
                
                <div className="grid sm:grid-cols-2 gap-4">
                  {/* Lavender essential oils */}
                  <label className="flex items-start gap-3 bg-white/5 p-4 rounded-2xl border border-white/5 hover:border-white/10 transition-colors cursor-pointer">
                    <input
                      type="checkbox"
                      checked={lavenderOil}
                      onChange={(e) => setLavenderOil(e.target.checked)}
                      className="mt-1 accent-[#5A5A40] h-4 w-4 shrink-0"
                    />
                    <div className="text-xs">
                      <span className="block font-semibold text-white">Lavender Aromatherapy Oil (+₦10,000)</span>
                      <span className="block text-[10px] text-stone-300 font-light mt-0.5">Custom therapeutic essential selection.</span>
                    </div>
                  </label>

                  {/* Extra massage */}
                  <label className="flex items-start gap-3 bg-white/5 p-4 rounded-2xl border border-white/5 hover:border-white/10 transition-colors cursor-pointer">
                    <input
                      type="checkbox"
                      checked={extraFootMassage}
                      onChange={(e) => setExtraFootMassage(e.target.checked)}
                      className="mt-1 accent-[#5A5A40] h-4 w-4 shrink-0"
                    />
                    <div className="text-xs">
                      <span className="block font-semibold text-white">Extra 30m Foot Massage (+₦15,000)</span>
                      <span className="block text-[10px] text-stone-300 font-light mt-0.5">Intense lower limb plantar reflexology check.</span>
                    </div>
                  </label>

                  {/* Sound Bath resting */}
                  <label className="flex items-start gap-3 bg-white/5 p-4 rounded-2xl border border-white/5 hover:border-white/10 transition-colors cursor-pointer">
                    <input
                      type="checkbox"
                      checked={soundBath}
                      onChange={(e) => setSoundBath(e.target.checked)}
                      className="mt-1 accent-[#5A5A40] h-4 w-4 shrink-0"
                    />
                    <div className="text-xs">
                      <span className="block font-semibold text-white">Vibrational Sound Bath (+₦20,000)</span>
                      <span className="block text-[10px] text-stone-300 font-light mt-0.5">Tibetan brass bowl acoustic neural therapy.</span>
                    </div>
                  </label>

                  {/* Gourmet snack plate */}
                  <label className="flex items-start gap-3 bg-white/5 p-4 rounded-2xl border border-white/5 hover:border-white/10 transition-colors cursor-pointer">
                    <input
                      type="checkbox"
                      checked={gourmetPlatter}
                      onChange={(e) => setGourmetPlatter(e.target.checked)}
                      className="mt-1 accent-[#5A5A40] h-4 w-4 shrink-0"
                    />
                    <div className="text-xs">
                      <span className="block font-semibold text-white">Gourmet Fruit & Tea Platter (+₦12,000)</span>
                      <span className="block text-[10px] text-stone-300 font-light mt-0.5">Pineapple, nuts, custom local dry leaf herbal teas.</span>
                    </div>
                  </label>
                </div>

              </div>

              {/* Guest coordinates input */}
              <div className="col-span-2 space-y-3 pt-4 border-t border-white/5">
                <span className="block text-[11px] font-semibold uppercase tracking-wider text-[#D9D2C5] font-mono">
                  Personal Details & Contact
                </span>
                <div className="grid sm:grid-cols-3 gap-4">
                  <input
                    type="text"
                    required
                    placeholder="Full Name*"
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 text-white rounded-xl py-3 px-4 focus:outline-none focus:border-[#D9D2C5] text-xs font-light placeholder:text-stone-300/40"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Email Address*"
                    value={emailAddress}
                    onChange={(e) => setEmailAddress(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 text-white rounded-xl py-3 px-4 focus:outline-none focus:border-[#D9D2C5] text-xs font-light placeholder:text-stone-300/40"
                  />
                  <input
                    type="tel"
                    required
                    placeholder="Phone Number (WhatsApp)*"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 text-white rounded-xl py-3 px-4 focus:outline-none focus:border-[#D9D2C5] text-xs font-light placeholder:text-stone-300/40"
                  />
                </div>
                <textarea
                  rows={2}
                  placeholder="Special physical requests, somatic pressure preferences, skin allergies, etc. (Optional)"
                  value={guestMessage}
                  onChange={(e) => setGuestMessage(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 text-white rounded-xl py-3 px-4 focus:outline-none focus:border-[#D9D2C5] text-xs font-light placeholder:text-stone-300/40"
                />
              </div>

              {/* Submit CTA */}
              <div className="col-span-2 pt-2">
                <button
                  type="submit"
                  className="w-full py-4 rounded-full text-xs font-bold uppercase tracking-widest bg-[#5A5A40] hover:bg-[#4a4a34] text-white shadow-md cursor-pointer transform hover:-translate-y-0.5 transition-all text-center"
                >
                  Submit Spa Reservation Proposal
                </button>
              </div>

            </form>
          </div>

          {/* live Naira quote statement */}
          <div className="lg:col-span-5 bg-white text-[#3C3C3B] rounded-[24px] p-6 sm:p-8 shadow-xl flex flex-col justify-between h-full border border-[#E6E2D3]/60 relative self-stretch">
            
            <div className="absolute right-6 top-6 opacity-[0.03] pointer-events-none text-[#3C3C3B]">
              <Calculator className="w-24 h-24" />
            </div>

            <div>
              <div className="flex justify-between items-start border-b border-[#E6E2D3]/40 pb-5 mb-5">
                <div>
                  <h4 className="text-xs font-serif text-[#3C3C3B] uppercase tracking-wider font-bold">WISS SPA SLATE STATEMENT</h4>
                  <span className="text-[10px] text-stone-400 font-semibold uppercase tracking-widest font-mono">Lagos Oasis Hub</span>
                </div>
                <div>
                  <span className="bg-[#5A5A40]/10 text-[#5A5A40] border border-[#5A5A40]/10 text-[9px] font-bold uppercase px-2.5 py-1 rounded-full font-mono">
                    ONLINE ESTIMATE
                  </span>
                </div>
              </div>

              {/* Inclusions & Prices calculations */}
              <div className="space-y-4">
                
                {/* Package Base rate */}
                <div className="flex justify-between text-xs">
                  <span className="text-stone-500 font-semibold uppercase tracking-wider font-mono">Selected Package :</span>
                  <span className="font-serif text-[#3C3C3B] font-semibold">
                    ₦{(basePrices[selectedPackage] * guestCount).toLocaleString()}
                  </span>
                </div>
                
                <div className="pl-3 border-l-2 border-[#E6E2D3] text-[10px] text-stone-500 space-y-1 font-light">
                  <div className="flex justify-between">
                    <span>Base package rate:</span>
                    <span>₦{(basePrices[selectedPackage]).toLocaleString()} / guest</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Attendees:</span>
                    <span>{guestCount} guest(s)</span>
                  </div>
                </div>

                {/* Addons detailed prices */}
                {(lavenderOil || extraFootMassage || soundBath || gourmetPlatter) && (
                  <div className="border-t border-[#E6E2D3]/30 pt-3 space-y-2">
                    <span className="text-[10px] uppercase tracking-wider text-stone-400 font-bold block font-mono">Selected Addons:</span>
                    
                    {lavenderOil && (
                      <div className="flex justify-between text-xs font-light">
                        <span className="text-stone-500">• Lavender aromatherapy oil:</span>
                        <span className="font-serif text-[#3C3C3B]">₦{(addOnPrices.lavenderOil * guestCount).toLocaleString()}</span>
                      </div>
                    )}

                    {extraFootMassage && (
                      <div className="flex justify-between text-xs font-light">
                        <span className="text-stone-500">• Extra 30m Foot Massage:</span>
                        <span className="font-serif text-[#3C3C3B]">₦{(addOnPrices.footMassage * guestCount).toLocaleString()}</span>
                      </div>
                    )}

                    {soundBath && (
                      <div className="flex justify-between text-xs font-light">
                        <span className="text-stone-500">• Vibrational Sound Bath:</span>
                        <span className="font-serif text-[#3C3C3B]">₦{(addOnPrices.soundBath * guestCount).toLocaleString()}</span>
                      </div>
                    )}

                    {gourmetPlatter && (
                      <div className="flex justify-between text-xs font-light">
                        <span className="text-stone-500">• Gourmet Fresh Fruit & Tea:</span>
                        <span className="font-serif text-[#3C3C3B]">₦{(addOnPrices.gourmetPlatter * guestCount).toLocaleString()}</span>
                      </div>
                    )}
                  </div>
                )}

                {/* Gross Total row */}
                <div className="border-t border-[#E6E2D3] pt-5 mt-5 flex justify-between items-end">
                  <div>
                    <span className="block text-[10px] text-[#8D7A5D] font-bold uppercase tracking-widest font-mono">TOTAL BILLING QUOTE</span>
                    <span className="text-[9.5px] text-stone-400 italic font-light">Includes free grooming & steam access</span>
                  </div>
                  <span className="text-2xl font-serif text-[#3C3C3B] whitespace-nowrap font-bold">
                    ₦{calcTotal.toLocaleString()}
                  </span>
                </div>

                {/* Deposit breakdown indicator */}
                <div className="bg-[#5A5A40]/10 border border-[#5A5A40]/20 rounded-xl p-4 mt-4 text-[11px] text-[#3C3C3B] font-semibold text-left">
                  <div className="flex justify-between mb-1.5 text-[#5A5A40]">
                    <span>Commitment Deposit (50%) :</span>
                    <span className="text-sm font-serif font-bold">₦{(calcTotal / 2).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between font-light text-stone-500 text-[10px] leading-tight">
                    <span>Balance upon session completion:</span>
                    <span>₦{(calcTotal / 2).toLocaleString()}</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Bottom help guide info */}
            <div className="border-t border-stone-100 pt-5 mt-6 flex gap-3 text-left">
              <ShieldCheck className="w-5 h-5 text-[#8D7A5D] shrink-0 mt-0.5" />
              <p className="text-[10px] text-stone-500 font-light leading-relaxed">
                Reservations require a 50% commitment payment to authorize slot allocation. Full refund if cancelled at least 24 hours prior to appointment slot. Secure parking available in Victoria Island, Lagos.
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
