import React, { useState, useEffect } from 'react';
import { Sparkles, Menu, X, Mail, MapPin, Facebook, Instagram, ShieldCheck } from 'lucide-react';
import { Language, TranslationDict } from '../types';

interface HeaderProps {
  lang: Language;
  setLang: (lang: Language) => void;
  dict: TranslationDict;
  currentPage: string;
  navigateTo: (page: string) => void;
  inquiryCount: number;
}

export default function Header({ lang, setLang, dict, currentPage, navigateTo, inquiryCount }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Top Bar - Beautiful high-contrast ambient natural tones */}
      <div className="bg-[#3C3C3B] text-stone-200 py-2.5 border-b border-[#E6E2D3]/15 relative z-50 transition-all">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-xs font-semibold tracking-wide">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2 hover:text-white transition-colors">
              <MapPin className="w-3.5 h-3.5 text-[#D9D2C5]" strokeWidth={2} />
              {dict.topBar.location}
            </span>
            <a href="mailto:booking@wissspa.com" className="flex items-center gap-2 hover:text-white transition-colors">
              <Mail className="w-3.5 h-3.5 text-[#D9D2C5]" strokeWidth={2} />
              {dict.topBar.email}
            </a>
          </div>
          <div className="flex items-center gap-5">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#D9D2C5] transition-colors">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#D9D2C5] transition-colors">
              <Instagram className="w-4 h-4" />
            </a>

            {/* Quick Host Portal Switch */}
            <button 
              onClick={() => navigateTo(currentPage === 'admin' ? 'home' : 'admin')}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider transition-all shadow-sm cursor-pointer ${
                currentPage === 'admin' 
                  ? 'bg-amber-500 text-[#3C3C3B] scale-105' 
                  : 'bg-white/10 text-stone-200 hover:bg-white/15'
              }`}
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Spa Desk Admin</span>
              {inquiryCount > 0 && (
                <span className="bg-red-500 text-white w-4 h-4 rounded-full flex items-center justify-center text-[9px] animate-pulse font-sans">
                  {inquiryCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation with backdrop blur */}
      <header className={`sticky top-0 z-40 transition-all duration-300 border-b ${
        isScrolled 
          ? 'bg-[#F9F7F2]/95 backdrop-blur-md py-3 shadow-md border-[#E6E2D3]/60' 
          : 'bg-[#F9F7F2]/80 backdrop-blur-sm py-4 border-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-[#3C3C3B]">
          
          {/* Brand Logo & Name */}
          <button 
            type="button"
            className="flex items-center gap-3 group text-left cursor-pointer" 
            onClick={() => navigateTo('home')}
          >
            <div className="bg-[#5A5A40]/10 p-2.5 rounded-xl text-[#5A5A40] border border-[#5A5A40]/35 group-hover:bg-[#5A5A40]/20 group-hover:scale-105 transition-all">
              <Sparkles className="w-6 h-6" strokeWidth={1.8} />
            </div>
            <div className="flex flex-col">
              <span className="text-xl tracking-tight font-serif italic text-[#5A5A40] leading-none mb-0.5 font-bold">WISS Spa</span>
              <span className="text-[9px] text-[#8D7A5D] tracking-[0.2em] font-mono uppercase font-bold">BOTANICAL SANCTUARY</span>
            </div>
          </button>

          {/* Inline Navigation Menu */}
          <nav className="hidden lg:flex items-center gap-9 text-xs font-bold uppercase tracking-widest text-[#3C3C3B]/80">
            <button 
              onClick={() => navigateTo('home')} 
              className={`hover:text-[#5A5A40] transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:bg-[#5A5A40] after:transition-all cursor-pointer ${
                currentPage === 'home' ? 'text-[#5A5A40] after:w-full font-extrabold' : 'text-[#3C3C3B]/80 after:w-0 hover:after:w-full'
              }`}
            >
              Home
            </button>
            <button 
              onClick={() => navigateTo('chalet')} 
              className={`hover:text-[#5A5A40] transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:bg-[#5A5A40] after:transition-all cursor-pointer ${
                currentPage === 'chalet' ? 'text-[#5A5A40] after:w-full font-extrabold' : 'text-[#3C3C3B]/80 after:w-0 hover:after:w-full'
              }`}
            >
              Our Oasis
            </button>
            <button 
              onClick={() => navigateTo('experiences')} 
              className={`hover:text-[#5A5A40] transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:bg-[#5A5A40] after:transition-all cursor-pointer ${
                currentPage === 'experiences' ? 'text-[#5A5A40] after:w-full font-extrabold' : 'text-[#3C3C3B]/80 after:w-0 hover:after:w-full'
              }`}
            >
              Treatments
            </button>
            <button 
              onClick={() => navigateTo('booking')} 
              className={`hover:text-[#5A5A40] transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:bg-[#5A5A40] after:transition-all cursor-pointer ${
                currentPage === 'booking' ? 'text-[#5A5A40] after:w-full font-extrabold' : 'text-[#3C3C3B]/80 after:w-0 hover:after:w-full'
              }`}
            >
              Booking & Rates
            </button>
          </nav>

          {/* Right Action buttons */}
          <div className="flex items-center gap-4">

            {/* CTAs */}
            <button
              onClick={() => navigateTo('booking')}
              className="bg-[#5A5A40] hover:bg-[#4a4a34] text-white px-5 py-2 sm:px-6 sm:py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-colors shadow-sm cursor-pointer"
            >
              {dict.nav.cta}
            </button>

            {/* Mobile Menu Trigger */}
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="lg:hidden text-[#3C3C3B] hover:text-[#5A5A40] p-1 cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer (Overlay Menus) */}
      {isOpen && (
        <div className="fixed inset-0 z-30 bg-[#F9F7F2]/98 flex flex-col justify-center items-center gap-8 text-center animate-fade-in">
          <button 
            onClick={() => setIsOpen(false)} 
            className="absolute top-24 right-6 text-[#3C3C3B] hover:text-[#5A5A40] cursor-pointer"
          >
            <X className="w-8 h-8" />
          </button>

          <nav className="flex flex-col gap-6 text-xl font-bold uppercase tracking-widest text-[#3C3C3B]">
            <button 
              onClick={() => { navigateTo('home'); handleLinkClick(); }} 
              className={`hover:text-[#5A5A40] transition-colors cursor-pointer ${currentPage === 'home' ? 'text-[#5A5A40] font-extrabold' : 'text-[#3C3C3B]/60'}`}
            >
              Home
            </button>
            <button 
              onClick={() => { navigateTo('chalet'); handleLinkClick(); }} 
              className={`hover:text-[#5A5A40] transition-colors cursor-pointer ${currentPage === 'chalet' ? 'text-[#5A5A40] font-extrabold' : 'text-[#3C3C3B]/60'}`}
            >
              Our Oasis
            </button>
            <button 
              onClick={() => { navigateTo('experiences'); handleLinkClick(); }} 
              className={`hover:text-[#5A5A40] transition-colors cursor-pointer ${currentPage === 'experiences' ? 'text-[#5A5A40] font-extrabold' : 'text-[#3C3C3B]/60'}`}
            >
              Treatments & Pools
            </button>
            <button 
              onClick={() => { navigateTo('booking'); handleLinkClick(); }} 
              className={`hover:text-[#5A5A40] transition-colors cursor-pointer ${currentPage === 'booking' ? 'text-[#5A5A40] font-extrabold' : 'text-[#3C3C3B]/60'}`}
            >
              Rates & Booking
            </button>
            <button 
              onClick={() => {
                navigateTo(currentPage === 'admin' ? 'home' : 'admin');
                setIsOpen(false);
              }}
              className="mt-4 flex items-center justify-center gap-2 bg-[#5A5A40] text-white px-6 py-2.5 rounded-full text-sm font-bold tracking-wider cursor-pointer"
            >
              <ShieldCheck className="w-4 h-4" />
              <span>{currentPage === 'admin' ? "Exit Spa Portal" : "Spa Admin Portal"}</span>
            </button>
          </nav>

          <div className="mt-8 border-t border-[#E6E2D3] pt-8 w-2/3 flex flex-col gap-3 text-[#3C3C3B]/75 text-sm">
            <p className="flex items-center justify-center gap-2">
              <MapPin className="w-4 h-4 text-[#8D7A5D]" />
              Victoria Island, Lagos, Nigeria
            </p>
            <p className="flex items-center justify-center gap-2">
              <Mail className="w-4 h-4 text-[#8D7A5D]" />
              booking@wissspa.com
            </p>
          </div>
        </div>
      )}
    </>
  );
}
