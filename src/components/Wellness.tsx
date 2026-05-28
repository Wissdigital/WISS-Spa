import React from 'react';
import { ShieldAlert, Sun, Snowflake } from 'lucide-react';
import { TranslationDict } from '../types';

interface WellnessProps {
  dict: TranslationDict;
}

export default function Wellness({ dict }: WellnessProps) {
  return (
    <section className="py-24 max-w-7xl mx-auto px-6">
      <div className="flex flex-col lg:flex-row gap-0 rounded-[32px] overflow-hidden bg-[#5A5A40] shadow-xl relative">
        
        {/* Decorative background overlay */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none" />

        {/* Left column Photo section with hover zoom */}
        <div className="lg:w-1/2 h-96 lg:h-auto relative overflow-hidden group">
          <img
            src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1431719d-2f9b-4652-bc3f-2dcad128b08c_1600w.jpg"
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
            alt="Bain nordique en bois brut sur la terrasse enneigée à Villard-Reculas"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#3C3C3B]/30 to-transparent mix-blend-multiply" />
        </div>

        {/* Right column text content */}
        <div className="lg:w-1/2 p-10 md:p-16 flex flex-col justify-center relative z-10 text-left text-white">
          <span className="text-[#D9D2C5] font-semibold text-xs tracking-[0.3em] uppercase mb-4 block">
            {dict.wellness.badge}
          </span>
          <h2 className="text-3xl md:text-5xl font-serif text-white mb-6 leading-tight tracking-tight">
            {dict.wellness.title}
          </h2>
          
          <p className="text-stone-100/95 mb-6 leading-relaxed font-light text-sm sm:text-base">
            {dict.wellness.desc1}
          </p>
          <p className="text-stone-100/95 mb-10 leading-relaxed font-light text-sm sm:text-base">
            {dict.wellness.desc2}
          </p>

          <div className="flex gap-12 border-t border-white/10 pt-8 mt-auto">
            <div>
              <div className="text-4xl sm:text-5xl font-serif font-light text-white mb-1.5">
                38<span className="text-[#D9D2C5] font-sans font-light">°C</span>
              </div>
              <div className="text-xs sm:text-sm font-semibold text-stone-200/80 uppercase tracking-widest">
                {dict.wellness.tempLabel}
              </div>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-serif font-light text-white mb-1.5">
                365<span className="text-[#D9D2C5] font-sans font-light">j</span>
              </div>
              <div className="text-xs sm:text-sm font-semibold text-stone-200/80 uppercase tracking-widest">
                {dict.wellness.openLabel}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
