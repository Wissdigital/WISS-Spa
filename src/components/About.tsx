import React from 'react';
import { Sparkles, Droplets, Sun, Coffee } from 'lucide-react';
import { TranslationDict } from '../types';

interface AboutProps {
  dict: TranslationDict;
  navigateTo?: (page: string) => void;
}

export default function About({ dict, navigateTo }: AboutProps) {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Left side text column */}
        <div className="flex flex-col">
          <span className="text-[#8D7A5D] font-semibold text-xs tracking-[0.3em] uppercase mb-4 block">
            {dict.about.badge}
          </span>
          <h2 className="text-3xl md:text-5xl font-serif text-[#3C3C3B] mb-6 tracking-tight leading-tight">
            {dict.about.title}
          </h2>
          
          <p className="text-[#3C3C3B]/80 mb-6 leading-relaxed font-light text-sm sm:text-base">
            {dict.about.desc1}
          </p>
          <p className="text-[#3C3C3B]/80 mb-8 leading-relaxed font-light text-sm sm:text-base">
            {dict.about.desc2}
          </p>
          
          {navigateTo ? (
            <button
              onClick={() => navigateTo('chalet')}
              className="inline-flex self-start items-center justify-center bg-[#5A5A40]/10 hover:bg-[#5A5A40]/25 text-[#5A5A40] border border-[#5A5A40]/20 px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-widest transition-colors mb-12 cursor-pointer"
            >
              {dict.about.cta}
            </button>
          ) : (
            <a
              href="#equipements"
              className="inline-flex self-start items-center justify-center bg-[#5A5A40]/10 hover:bg-[#5A5A40]/25 text-[#5A5A40] border border-[#5A5A40]/20 px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-widest transition-colors mb-12"
            >
              {dict.about.cta}
            </a>
          )}

          {/* Quick Metrics */}
          <div className="grid grid-cols-3 gap-6 border-t border-[#E6E2D3] pt-8 mt-auto">
            <div className="text-left">
              <h4 className="text-2xl sm:text-3xl font-serif font-light text-[#5A5A40] mb-1">
                800m²
              </h4>
              <p className="text-[10px] text-[#8D7A5D] font-semibold uppercase tracking-widest">
                {dict.about.surfaceLabel}
              </p>
            </div>
            <div className="text-left">
              <h4 className="text-2xl sm:text-3xl font-serif font-light text-[#5A5A40] mb-1">
                12+
              </h4>
              <p className="text-[10px] text-[#8D7A5D] font-semibold uppercase tracking-widest">
                {dict.about.guestsLabel}
              </p>
            </div>
            <div className="text-left">
              <h4 className="text-2xl sm:text-3xl font-serif font-light text-[#5A5A40] mb-1">
                20+
              </h4>
              <p className="text-[10px] text-[#8D7A5D] font-semibold uppercase tracking-widest">
                {dict.about.slopesLabel}
              </p>
            </div>
          </div>
        </div>

        {/* Right side specifications details */}
        <div className="grid gap-8 bg-white/60 rounded-[32px] p-8 md:p-10 border border-[#E6E2D3]/60">
          
          {/* Panoramic View */}
          <div className="flex gap-5 items-start">
            <div className="bg-white p-4 rounded-2xl shadow-sm text-[#5A5A40] shrink-0 border border-[#E6E2D3]/40">
              <Sparkles className="w-6 h-6 text-[#5A5A40]" />
            </div>
            <div>
              <h3 className="text-lg font-serif text-[#3C3C3B] mb-1.5 tracking-wide">
                {dict.about.viewTitle}
              </h3>
              <p className="text-xs sm:text-sm text-[#3C3C3B]/80 font-light leading-relaxed">
                {dict.about.viewDesc}
              </p>
            </div>
          </div>

          {/* Ski-in Ski-out */}
          <div className="flex gap-5 items-start">
            <div className="bg-white p-4 rounded-2xl shadow-sm text-[#5A5A40] shrink-0 border border-[#E6E2D3]/40">
              <Droplets className="w-6 h-6 text-[#5A5A40]" />
            </div>
            <div>
              <h3 className="text-lg font-serif text-[#3C3C3B] mb-1.5 tracking-wide">
                {dict.about.onSlopesTitle}
              </h3>
              <p className="text-xs sm:text-sm text-[#3C3C3B]/80 font-light leading-relaxed">
                {dict.about.onSlopesDesc}
              </p>
            </div>
          </div>

          {/* Sunshine hours */}
          <div className="flex gap-5 items-start">
            <div className="bg-white p-4 rounded-2xl shadow-sm text-[#5A5A40] shrink-0 border border-[#E6E2D3]/40">
              <Sun className="w-6 h-6 text-[#5A5A40]" />
            </div>
            <div>
              <h3 className="text-lg font-serif text-[#3C3C3B] mb-1.5 tracking-wide">
                {dict.about.sunnyTitle}
              </h3>
              <p className="text-xs sm:text-sm text-[#3C3C3B]/80 font-light leading-relaxed">
                {dict.about.sunnyDesc}
              </p>
            </div>
          </div>

          {/* Close shops */}
          <div className="flex gap-5 items-start">
            <div className="bg-white p-4 rounded-2xl shadow-sm text-[#5A5A40] shrink-0 border border-[#E6E2D3]/40">
              <Coffee className="w-6 h-6 text-[#5A5A40]" />
            </div>
            <div>
              <h3 className="text-lg font-serif text-[#3C3C3B] mb-1.5 tracking-wide">
                {dict.about.shopsTitle}
              </h3>
              <p className="text-xs sm:text-sm text-[#3C3C3B]/80 font-light leading-relaxed">
                {dict.about.shopsDesc}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
