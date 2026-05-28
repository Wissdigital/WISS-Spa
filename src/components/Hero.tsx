import React from 'react';
import { Star, ChevronDown, ArrowRight } from 'lucide-react';
import { TranslationDict } from '../types';

interface HeroProps {
  dict: TranslationDict;
  navigateTo: (page: string) => void;
}

export default function Hero({ dict, navigateTo }: HeroProps) {
  return (
    <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with optimized layout */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-100 group-hover:scale-105"
        style={{ 
          backgroundImage: `url("https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1600&q=80")` 
        }}
      />
      {/* Premium warm tones overlay for text contrast and premium organic feel */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#3C3C3B]/85 via-[#3C3C3B]/65 to-[#F9F7F2]" />

      {/* Elegant fade into cream background */}
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-[#F9F7F2] to-transparent pointer-events-none" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-16 flex flex-col items-center">
        
        {/* Rating Stars with high contrast */}
        <div className="flex justify-center gap-1 text-[#E6E2D3] mb-6 drop-shadow-[0_0_8px_rgba(217,210,197,0.3)]">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-current" strokeWidth={1} />
          ))}
        </div>

        {/* Subtitle Badge */}
        <span className="inline-block bg-[#5A5A40]/40 text-[#F9F7F2] text-[10px] uppercase tracking-[0.3em] font-semibold px-4 py-1.5 rounded-full border border-[#D9D2C5]/30 mb-6">
          {dict.hero.subtitle}
        </span>

        {/* Display Heading - Serif with italic modern sanctuary vibe */}
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-serif text-white leading-[1.05] tracking-tight mb-6">
          {dict.hero.title}
        </h1>

        {/* Description Text */}
        <p className="text-base sm:text-lg text-[#F9F7F2]/90 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
          {dict.hero.desc}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-md">
          <button
            onClick={() => navigateTo('booking')}
            className="flex items-center justify-center gap-2 bg-[#5A5A40] text-white hover:brightness-110 px-8 py-4 rounded-full text-xs font-semibold uppercase tracking-widest transition-all w-full sm:w-auto transform hover:-translate-y-0.5 shadow-md cursor-pointer"
          >
            <span>{dict.hero.ctaContact}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <button
            onClick={() => navigateTo('chalet')}
            className="flex items-center justify-center bg-white/10 hover:bg-white/15 text-white border border-[#D9D2C5] px-8 py-4 rounded-full text-xs font-semibold uppercase tracking-widest transition-all w-full sm:w-auto transform hover:-translate-y-0.5 cursor-pointer"
          >
            {dict.hero.ctaDiscover}
          </button>
        </div>

        {/* Bottom scroll hint */}
        <button 
          onClick={() => navigateTo('chalet')} 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-1.5 text-[#3C3C3B]/70 hover:text-[#5A5A40] transition-colors animate-bounce cursor-pointer bg-transparent border-0"
        >
          <span className="text-[9px] uppercase tracking-[0.2em] font-bold">Scroll</span>
          <ChevronDown className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
