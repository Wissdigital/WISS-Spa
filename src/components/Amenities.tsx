import React, { useState } from 'react';
import { Search, ShieldCheck, Utensils, Tv, CheckCircle2 } from 'lucide-react';
import { TranslationDict } from '../types';
import { allAmenitiesList } from '../locales';

interface AmenitiesProps {
  dict: TranslationDict;
}

export default function Amenities({ dict }: AmenitiesProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<'all' | 'essentials' | 'kitchen' | 'leisure'>('all');

  const categories = [
    { id: 'all', label: 'Tout' },
    { id: 'essentials', label: dict.amenities.categories.essentials, icon: ShieldCheck },
    { id: 'kitchen', label: dict.amenities.categories.kitchen, icon: Utensils },
    { id: 'leisure', label: dict.amenities.categories.leisure, icon: Tv },
  ];

  const filteredAmenities = allAmenitiesList.filter((amenity) => {
    const matchesCategory = activeCategory === 'all' || amenity.category === activeCategory;
    const matchesSearch = amenity.text.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="equipements" className="bg-[#E6E2D3]/35 border border-[#E6E2D3]/60 py-24 px-6 rounded-[32px] my-12 relative overflow-hidden scroll-mt-24">
      {/* Absolute background accent */}
      <div className="absolute right-0 top-0 w-96 h-96 bg-[#8D7A5D]/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Caption */}
        <div className="text-center mb-12">
          <span className="text-[#8D7A5D] font-semibold text-xs tracking-[0.3em] uppercase mb-3 block">
            {dict.amenities.badge}
          </span>
          <h2 className="text-3xl md:text-5xl font-serif tracking-tight text-[#3C3C3B]">
            {dict.amenities.title}
          </h2>
          <div className="w-16 h-[1.5px] bg-[#8D7A5D]/50 mx-auto mt-4 rounded-full" />
        </div>

        {/* Real-time search & Category selectors */}
        <div className="max-w-3xl mx-auto mb-16 flex flex-col gap-6 items-center">
          
          {/* Search box with organic focus styling */}
          <div className="relative w-full">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#8D7A5D] w-5 h-5" />
            <input
              type="text"
              placeholder={dict.amenities.searchPlaceholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white text-[#3C3C3B] border border-[#E6E2D3] placeholder-stone-400 pl-12 pr-4 py-3.5 rounded-2xl focus:outline-none focus:border-[#5A5A40] focus:ring-2 focus:ring-[#5A5A40]/15 text-sm font-light transition-all shadow-xs"
            />
          </div>

          {/* Category badges */}
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isSelected = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id as any)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-widest transition-all border ${
                    isSelected
                      ? 'bg-[#5A5A40] text-white border-[#5A5A40]'
                      : 'bg-white text-[#3C3C3B]/85 border-[#E6E2D3] hover:bg-stone-50'
                  }`}
                >
                  {Icon && <Icon className="w-3.5 h-3.5" />}
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>

        </div>

        {/* Dynamic Items Cards matching the categories */}
        {filteredAmenities.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Essentials List block */}
            {(activeCategory === 'all' || activeCategory === 'essentials') && (
              <div className="bg-white/80 rounded-[32px] p-8 border border-[#E6E2D3]/50 shadow-sm flex flex-col h-full hover:border-[#5A5A40]/20 transition-all">
                <div className="bg-[#5A5A40]/10 w-12 h-12 rounded-xl flex items-center justify-center mb-6 text-[#5A5A40] border border-[#E6E2D3]/15">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-serif text-[#3C3C3B] mb-6 tracking-wide border-b border-[#E6E2D3]/30 pb-2">
                  {dict.amenities.categories.essentials}
                </h3>
                <ul className="text-xs sm:text-sm text-[#3C3C3B]/80 space-y-4 font-light">
                  {filteredAmenities
                    .filter((a) => a.category === 'essentials')
                    .map((item, idx) => (
                      <li key={idx} className="flex gap-2.5 items-start text-left">
                        <CheckCircle2 className="w-4 h-4 text-[#5A5A40] shrink-0 mt-0.5" />
                        <span>{item.text}</span>
                      </li>
                    ))}
                </ul>
              </div>
            )}

            {/* Kitchen List block */}
            {(activeCategory === 'all' || activeCategory === 'kitchen') && (
              <div className="bg-white/80 rounded-[32px] p-8 border border-[#E6E2D3]/50 shadow-sm flex flex-col h-full hover:border-[#5A5A40]/20 transition-all">
                <div className="bg-[#5A5A40]/10 w-12 h-12 rounded-xl flex items-center justify-center mb-6 text-[#5A5A40] border border-[#E6E2D3]/15">
                  <Utensils className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-serif text-[#3C3C3B] mb-6 tracking-wide border-b border-[#E6E2D3]/30 pb-2">
                  {dict.amenities.categories.kitchen}
                </h3>
                <ul className="text-xs sm:text-sm text-[#3C3C3B]/80 space-y-4 font-light">
                  {filteredAmenities
                    .filter((a) => a.category === 'kitchen')
                    .map((item, idx) => (
                      <li key={idx} className="flex gap-2.5 items-start text-left">
                        <CheckCircle2 className="w-4 h-4 text-[#5A5A40] shrink-0 mt-0.5" />
                        <span>{item.text}</span>
                      </li>
                    ))}
                </ul>
              </div>
            )}

            {/* Leisure List block */}
            {(activeCategory === 'all' || activeCategory === 'leisure') && (
              <div className="bg-white/80 rounded-[32px] p-8 border border-[#E6E2D3]/50 shadow-sm flex flex-col h-full hover:border-[#5A5A40]/20 transition-all">
                <div className="bg-[#5A5A40]/10 w-12 h-12 rounded-xl flex items-center justify-center mb-6 text-[#5A5A40] border border-[#E6E2D3]/15">
                  <Tv className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-serif text-[#3C3C3B] mb-6 tracking-wide border-b border-[#E6E2D3]/30 pb-2">
                  {dict.amenities.categories.leisure}
                </h3>
                <ul className="text-xs sm:text-sm text-[#3C3C3B]/80 space-y-4 font-light">
                  {filteredAmenities
                    .filter((a) => a.category === 'leisure')
                    .map((item, idx) => (
                      <li key={idx} className="flex gap-2.5 items-start text-left">
                        <CheckCircle2 className="w-4 h-4 text-[#5A5A40] shrink-0 mt-0.5" />
                        <span>{item.text}</span>
                      </li>
                    ))}
                </ul>
              </div>
            )}

          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-[#3C3C3B]/60 font-medium mb-2">Aucun équipement ne correspond à votre recherche.</p>
            <button 
              onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
              className="text-[#5A5A40] hover:text-[#8D7A5D] font-bold uppercase tracking-widest text-xs"
            >
              Réinitialiser les filtres
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
