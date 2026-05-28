import React, { useState } from 'react';
import { Mail, CheckCircle, Send, Users, Calendar } from 'lucide-react';
import { TranslationDict, BookingInquiry } from '../types';

interface ContactFormProps {
  dict: TranslationDict;
  onAddInquiry: (inquiry: BookingInquiry) => void;
}

export default function ContactForm({ dict, onAddInquiry }: ContactFormProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [arrivalDate, setArrivalDate] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [guestCount, setGuestCount] = useState(2);
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setIsSubmitting(true);

    // emulate sending time
    setTimeout(() => {
      const newInq: BookingInquiry = {
        id: `inq-${Date.now()}`,
        name,
        email,
        startDate: arrivalDate || new Date().toISOString().split('T')[0],
        endDate: departureDate || new Date(Date.now() + 7 * 86400000).toISOString().split('T')[0],
        guests: Number(guestCount),
        message,
        createdAt: new Date().toISOString(),
        status: 'pending',
        calculatedPrice: 0 // generic message, not calc pre-filled
      };

      onAddInquiry(newInq);
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Reset form
      setName('');
      setEmail('');
      setArrivalDate('');
      setDepartureDate('');
      setGuestCount(2);
      setMessage('');
      
      // Clean success message after 5 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);

    }, 1200);
  };

  return (
    <section id="contact" className="max-w-7xl mx-auto px-6 py-24 scroll-mt-20">
      <div className="bg-[#3C3C3B] rounded-[32px] p-8 md:p-14 shadow-xl relative overflow-hidden">
        
        {/* Background ambient light */}
        <div className="absolute top-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none" />

        <div className="text-center mb-12 relative z-10">
          <span className="text-[#D9D2C5] font-semibold text-xs tracking-[0.3em] uppercase mb-3 block">
            {dict.contactForm.badge}
          </span>
          <h2 className="text-3xl md:text-5xl font-serif tracking-tight text-white animate-fade-in">
            {dict.contactForm.title}
          </h2>
          <div className="w-16 h-[1.5px] bg-[#D9D2C5]/40 mx-auto mt-4 rounded-full mb-6" />
          <p className="text-xs sm:text-sm text-stone-300 max-w-2xl mx-auto leading-relaxed font-light">
            {dict.contactForm.desc}
          </p>
        </div>

        {isSuccess ? (
          <div className="max-w-xl mx-auto bg-white/10 border border-white/15 rounded-3xl p-8 text-center text-white flex flex-col items-center gap-4 animate-scale-up z-10 relative">
            <div className="bg-[#5A5A40] p-4 rounded-full text-white shadow-lg">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-serif italic">Message Envoyé !</h4>
            <p className="text-xs sm:text-sm text-stone-200 leading-relaxed font-light">
              {dict.contactForm.success}
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-3xl mx-auto grid gap-5 relative z-10 text-left">
            
            {/* Row 1 - Name & Email */}
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="block text-[11px] font-semibold text-[#D9D2C5] uppercase tracking-wider mb-2">
                  {dict.contactForm.nameLabel}
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Sophie Poisson"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-white/5 border border-white/15 text-white rounded-xl py-3.5 px-4 focus:outline-none focus:border-[#D9D2C5] text-xs font-light placeholder:text-stone-300/40 transition-colors"
                />
              </div>
              <div>
                <label className="block text-[11px] font-semibold text-[#D9D2C5] uppercase tracking-wider mb-2">
                  {dict.contactForm.emailLabel}
                </label>
                <input
                  type="email"
                  required
                  placeholder="Ex: sophie@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white/5 border border-white/15 text-white rounded-xl py-3.5 px-4 focus:outline-none focus:border-[#D9D2C5] text-xs font-light placeholder:text-stone-300/40 transition-colors"
                />
              </div>
            </div>

            {/* Row 2 - Dates & Guests */}
            <div className="grid md:grid-cols-3 gap-5">
              <div>
                <label className="block text-[11px] font-semibold text-[#D9D2C5] uppercase tracking-wider mb-2 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-[#D9D2C5]" />
                  <span>{dict.contactForm.arrivalLabel}</span>
                </label>
                <input
                  type="date"
                  value={arrivalDate}
                  onChange={(e) => setArrivalDate(e.target.value)}
                  className="w-full bg-white/5 border border-white/15 text-white rounded-xl py-3.5 px-4 focus:outline-none focus:border-[#D9D2C5] text-xs font-light transition-colors [color-scheme:dark]"
                />
              </div>
              <div>
                <label className="block text-[11px] font-semibold text-[#D9D2C5] uppercase tracking-wider mb-2 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-[#D9D2C5]" />
                  <span>{dict.contactForm.departureLabel}</span>
                </label>
                <input
                  type="date"
                  value={departureDate}
                  onChange={(e) => setDepartureDate(e.target.value)}
                  className="w-full bg-white/5 border border-white/15 text-white rounded-xl py-3.5 px-4 focus:outline-none focus:border-[#D9D2C5] text-xs font-light transition-colors [color-scheme:dark]"
                />
              </div>
              <div>
                <label className="block text-[11px] font-semibold text-[#D9D2C5] uppercase tracking-wider mb-2 flex items-center gap-1">
                  <Users className="w-3.5 h-3.5 text-[#D9D2C5]" />
                  <span>{dict.contactForm.guestsLabel}</span>
                </label>
                <select
                  value={guestCount}
                  onChange={(e) => setGuestCount(Number(e.target.value))}
                  className="w-full bg-stone-700/80 border border-[#E6E2D3]/25 text-white rounded-xl py-3.5 px-4 focus:outline-none focus:border-[#D9D2C5] text-xs font-light transition-colors uppercase tracking-widest block"
                >
                  {[...Array(14)].map((_, i) => (
                    <option key={i+1} value={i+1} className="bg-[#3C3C3B] text-white">
                      {i+1} Personne{i > 0 ? 's' : ''}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Row 3 - Message */}
            <div>
              <label className="block text-[11px] font-semibold text-[#D9D2C5] uppercase tracking-wider mb-2">
                {dict.contactForm.messageLabel}
              </label>
              <textarea
                required
                rows={5}
                placeholder="Décrivez votre projet de vacances, questions sur l'accès ou formules réservables..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full bg-white/5 border border-white/15 text-white rounded-xl py-3 px-4 focus:outline-none focus:border-[#D9D2C5] text-xs font-light placeholder:text-stone-300/40 transition-colors"
              />
            </div>

            {/* Submit btn */}
            <div className="text-center mt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex items-center justify-center gap-2 bg-[#5A5A40] hover:bg-[#4a4a34] text-white px-10 py-4 rounded-full text-xs font-semibold uppercase tracking-widest transition-all w-full sm:w-auto mx-auto transform hover:-translate-y-0.5 shadow-md cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
                    <span>{dict.contactForm.sending}</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 text-white" />
                    <span>{dict.contactForm.submit}</span>
                  </>
                )}
              </button>
            </div>

          </form>
        )}

      </div>
    </section>
  );
}
