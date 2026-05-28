import React, { useState } from 'react';
import { Snowflake, Footprints, Wind, Bike, Music, Map, X, CheckSquare } from 'lucide-react';
import { TranslationDict, ActivityDetail } from '../types';
import { allActivitiesData } from '../locales';

interface ActivitiesProps {
  dict: TranslationDict;
  navigateTo?: (page: string, sub?: string | null) => void;
}

// Icon helper linking string lookup to Lucide React elements
const IconMap: Record<string, React.ComponentType<any>> = {
  snowflake: Snowflake,
  footprints: Footprints,
  plane: Wind,
  bike: Bike,
  music: Music,
  dog: Map, // Friendly fallback representation for general mountain activities
};

export default function Activities({ dict, navigateTo }: ActivitiesProps) {
  const [activeModalItem, setActiveModalItem] = useState<ActivityDetail | null>(null);

  return (
    <section id="activites" className="bg-[#F9F7F2] py-24 px-6 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-[#8D7A5D] font-semibold text-xs tracking-[0.3em] uppercase mb-3 block">
            {dict.activitiesSec.badge}
          </span>
          <h2 className="text-3xl md:text-5xl font-serif tracking-tight text-[#3C3C3B]">
            {dict.activitiesSec.title}
          </h2>
          <div className="w-16 h-[1.5px] bg-[#8D7A5D]/50 mx-auto mt-4 rounded-full" />
        </div>

        {/* Dynamic Activity Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allActivitiesData.map((activity) => {
            const IconComponent = IconMap[activity.iconName] || Map;
            
            return (
              <div
                key={activity.id}
                className="bg-white/70 rounded-[32px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-[#E6E2D3]/60 flex flex-col justify-between group"
              >
                <div>
                  {/* Photo area */}
                  <div className="h-60 overflow-hidden relative">
                    <img
                      src={activity.image}
                      alt={activity.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    
                    {/* Floating category badge */}
                    <span className="absolute top-4 right-4 bg-black/50 backdrop-blur-md text-slate-100 text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                      {activity.category}
                    </span>

                    {/* Floating circular icon container */}
                    <div className="absolute -bottom-6 left-6 bg-white w-14 h-14 rounded-2xl flex items-center justify-center text-[#5A5A40] shadow-sm border border-[#E6E2D3]/40 z-10 transition-transform duration-300 group-hover:scale-110">
                      <IconComponent className="w-6 h-6 text-[#5A5A40]" />
                    </div>
                  </div>

                  {/* Text card details */}
                  <div className="p-8 pt-10">
                    <h3 className="text-xl font-serif text-[#3C3C3B] mb-3 tracking-wide">
                      {activity.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#3C3C3B]/80 leading-relaxed font-light">
                      {activity.shortDesc}
                    </p>
                  </div>
                </div>

                {/* Card CTA foot */}
                <div className="p-8 pt-0 mt-auto">
                  <button
                    onClick={() => {
                      if (navigateTo) {
                        navigateTo('experiences', activity.id);
                      } else {
                        setActiveModalItem(activity);
                      }
                    }}
                    className="w-full py-2.5 rounded-full bg-[#E6E2D3]/40 text-[#3C3C3B] hover:bg-[#5A5A40] hover:text-white text-xs font-semibold uppercase tracking-widest transition-all cursor-pointer"
                  >
                    {dict.activitiesSec.modalBtn}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Activity Immersive Detail Modal */}
      {activeModalItem && (
        <div className="fixed inset-0 z-50 bg-[#3C3C3B]/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-white rounded-[32px] max-w-2xl w-full overflow-hidden shadow-2xl animate-scale-up border border-[#E6E2D3] max-h-[90vh] flex flex-col justify-between">
            
            {/* Modal image cover */}
            <div className="h-56 relative shrink-0">
              <img 
                src={activeModalItem.image} 
                alt={activeModalItem.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <button 
                onClick={() => setActiveModalItem(null)}
                className="absolute top-4 right-4 bg-black/60 hover:bg-[#5A5A40] text-white rounded-full p-2 transition-colors"
                aria-label="Fermer"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="absolute bottom-6 left-8 text-white">
                <span className="text-[10px] font-semibold uppercase tracking-widest text-[#D9D2C5] mb-1 block">
                  {activeModalItem.category}
                </span>
                <h3 className="text-2xl font-serif italic tracking-wide">
                  {activeModalItem.title}
                </h3>
              </div>
            </div>

            {/* Scrollable description & expert tips section */}
            <div className="p-8 overflow-y-auto text-left space-y-6">
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-widest text-[#8D7A5D] mb-2">Description complète</h4>
                <p className="text-xs sm:text-sm text-[#3C3C3B]/85 font-light leading-relaxed">
                  {activeModalItem.fullDesc}
                </p>
              </div>

              {activeModalItem.tips && activeModalItem.tips.length > 0 && (
                <div className="bg-[#5A5A40]/5 rounded-2xl p-5 border border-[#5A5A40]/10">
                  <h4 className="text-xs font-semibold uppercase tracking-widest text-[#5A5A40] mb-3 block">
                    Conseils d'experts du Chalet
                  </h4>
                  <ul className="space-y-2.5">
                    {activeModalItem.tips.map((tip, idx) => (
                      <li key={idx} className="flex gap-2.5 items-start text-xs text-[#3C3C3B]/90 font-light">
                        <CheckSquare className="w-4 h-4 text-[#5A5A40] shrink-0 mt-0.5" />
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Modal Close Footer anchor */}
            <div className="p-6 border-t border-[#E6E2D3]/40 shrink-0 flex justify-end">
              <button
                onClick={() => setActiveModalItem(null)}
                className="bg-[#5A5A40] hover:bg-[#4a4a34] text-white px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-widest transition-colors"
              >
                Fermer l'aperçu
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
