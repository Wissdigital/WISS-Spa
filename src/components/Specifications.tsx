import React from 'react';
import { Sparkles, Users, Droplets, Info } from 'lucide-react';
import { TranslationDict } from '../types';

interface SpecificationsProps {
  dict: TranslationDict;
  navigateTo?: (page: string, sub?: string | null) => void;
}

export default function Specifications({ dict, navigateTo }: SpecificationsProps) {
  return (
    <section id="caracteristiques" className="py-24 px-6 bg-[#F9F7F2] relative scroll-mt-10">
      {/* Decorative top-wave container or borders */}
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#8D7A5D] font-semibold text-xs tracking-[0.3em] uppercase mb-3 block">
            {dict.features.subtitle}
          </span>
          <h2 className="text-3xl md:text-5xl font-serif tracking-tight text-[#3C3C3B] leading-tight">
            {dict.features.title}
          </h2>
          <div className="w-16 h-[1.5px] bg-[#8D7A5D]/50 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Main Chalet card */}
          <div 
            onClick={() => navigateTo?.('chalet', 'eden')}
            className="bg-white/70 p-8 rounded-[32px] border border-[#E6E2D3]/60 hover:shadow-xl hover:shadow-stone-200/40 cursor-pointer transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between h-full group"
          >
            <div>
              <div className="bg-[#5A5A40]/10 text-[#5A5A40] w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#5A5A40] group-hover:text-white transition-all">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif text-[#3C3C3B] mb-3 tracking-wide">
                {dict.features.chaletTitle}
              </h3>
              <p className="text-sm text-[#3C3C3B]/80 leading-relaxed font-light">
                {dict.features.chaletDesc}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#E6E2D3]/30 flex items-center justify-between text-[10px] text-[#8D7A5D] font-semibold uppercase tracking-widest">
              <div className="flex items-center gap-2">
                <Info className="w-3.5 h-3.5" />
                <span>Bespoke Design & Silence</span>
              </div>
              <span className="group-hover:text-[#5A5A40] transition-colors">Explore →</span>
            </div>
          </div>

          {/* Core capacity Highlight card - Sage Green Theme from Natural Tones design */}
          <div 
            onClick={() => navigateTo?.('chalet', 'suites')}
            className="bg-[#5A5A40] text-white rounded-[32px] p-8 shadow-xl shadow-[#5A5A40]/15 transform md:-translate-y-4 hover:-translate-y-5 cursor-pointer transition-all duration-300 flex flex-col justify-between h-full group relative overflow-hidden"
          >
            <div className="absolute right-[-20px] top-[-20px] text-white/5 pointer-events-none">
              <Users className="w-32 h-32" />
            </div>
            <div>
              <div className="bg-white/10 text-[#D9D2C5] w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-white group-hover:text-[#5A5A40] transition-all">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif text-white mb-3 tracking-wide">
                {dict.features.capacityTitle}
              </h3>
              <p className="text-sm text-stone-100/90 leading-relaxed font-light">
                {dict.features.capacityDesc}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-[10px] text-[#D9D2C5] font-semibold uppercase tracking-widest">
              <span>VIP Couples Suites Available</span>
              <span className="group-hover:text-white transition-colors">Explore →</span>
            </div>
          </div>

          {/* Exterior Detail card */}
          <div 
            onClick={() => navigateTo?.('chalet', 'hydrotherapy')}
            className="bg-white/70 p-8 rounded-[32px] border border-[#E6E2D3]/60 hover:shadow-xl hover:shadow-stone-200/40 cursor-pointer transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between h-full group"
          >
            <div>
              <div className="bg-[#5A5A40]/10 text-[#5A5A40] w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#5A5A40] group-hover:text-white transition-all">
                <Droplets className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif text-[#3C3C3B] mb-3 tracking-wide">
                {dict.features.exteriorTitle}
              </h3>
              <p className="text-sm text-[#3C3C3B]/80 leading-relaxed font-light">
                {dict.features.exteriorDesc}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#E6E2D3]/30 flex items-center justify-between text-[10px] text-[#8D7A5D] font-semibold uppercase tracking-widest">
              <div className="flex items-center gap-2">
                <Info className="w-3.5 h-3.5" />
                <span>Eucalyptus Steam Infusions</span>
              </div>
              <span className="group-hover:text-[#5A5A40] transition-colors">Explore →</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
