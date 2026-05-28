import React from 'react';
import { Sparkles, Facebook, Instagram, MapPin, Mail, ShieldCheck } from 'lucide-react';
import { TranslationDict } from '../types';

interface FooterProps {
  dict: TranslationDict;
  currentPage: string;
  navigateTo: (page: string) => void;
}

export default function Footer({ dict, currentPage, navigateTo }: FooterProps) {
  return (
    <footer className="bg-[#3C3C3B] text-stone-300 pt-20 pb-12 rounded-t-[32px] relative z-10 border-t border-white/5">
      
      {/* Decorative center grid container */}
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-12 border-b border-white/10 pb-10">
        
        {/* Left Column Brand */}
        <div className="space-y-6 text-left">
          <div className="flex items-center gap-2.5 text-white">
            <Sparkles className="w-8 h-8 text-[#D9D2C5]" />
            <span className="text-xl tracking-wider font-serif uppercase font-bold">
              WISS SPA
            </span>
          </div>
          <p className="text-xs sm:text-sm text-stone-300 leading-relaxed max-w-sm font-light">
            Lagos' premier luxury botanical wellness sanctuary. A bespoke, meticulous blend of world-class massage therapies, thermal steam rooms, and tropical garden relaxation in Victoria Island.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#5A5A40] hover:text-white transition-colors border border-white/10"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#5A5A40] hover:text-white transition-colors border border-white/10"
            >
              <Instagram className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Middle Column Navigation */}
        <div className="text-left space-y-6">
          <h4 className="text-sm font-serif tracking-wider uppercase text-white border-b border-white/10 pb-2">
            Main Menu
          </h4>
          <ul className="space-y-4 text-xs sm:text-sm font-light text-stone-300">
            <li>
              <button onClick={() => navigateTo('home')} className="hover:text-[#D9D2C5] transition-colors cursor-pointer text-left block">
                Home
              </button>
            </li>
            <li>
              <button onClick={() => navigateTo('chalet')} className="hover:text-[#D9D2C5] transition-colors cursor-pointer text-left block">
                Our Oasis
              </button>
            </li>
            <li>
              <button onClick={() => navigateTo('experiences')} className="hover:text-[#D9D2C5] transition-colors cursor-pointer text-left block">
                Treatments
              </button>
            </li>
            <li>
              <button onClick={() => navigateTo('booking')} className="hover:text-[#D9D2C5] transition-colors cursor-pointer text-left block">
                Booking & Rates
              </button>
            </li>
            <li>
              <button 
                onClick={() => navigateTo(currentPage === 'admin' ? 'home' : 'admin')} 
                className="hover:text-white transition-colors flex items-center gap-1.5 text-left uppercase text-xs font-semibold tracking-wider text-[#D9D2C5] cursor-pointer"
              >
                <ShieldCheck className="w-4 h-4" />
                <span>{currentPage === 'admin' ? "Exit Spa Portal" : "Spa Admin Portal"}</span>
              </button>
            </li>
          </ul>
        </div>

        {/* Right Column Contact info */}
        <div className="text-left space-y-6">
          <h4 className="text-sm font-serif tracking-wider uppercase text-white border-b border-white/10 pb-2">
            Contact Us
          </h4>
          <ul className="space-y-4 text-xs sm:text-sm font-light text-stone-300">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-[#D9D2C5] shrink-0 mt-0.5" />
              <span>
                WISS Spa Botanical Sanctuary
                <br />
                Victoria Island, Lagos, Nigeria
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-[#D9D2C5] shrink-0" />
              <a href="mailto:booking@wissspa.com" className="hover:text-[#D9D2C5] transition-colors">
                booking@wissspa.com
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* Copy row */}
      <div className="max-w-7xl mx-auto px-6 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] sm:text-xs font-light text-stone-500 uppercase tracking-widest">
        <p>© {new Date().getFullYear()} WISS Spa. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-[#D9D2C5] transition-colors">
            Terms of Service
          </a>
          <a href="#" className="hover:text-[#D9D2C5] transition-colors">
            Privacy Policy
          </a>
        </div>
      </div>

    </footer>
  );
}
