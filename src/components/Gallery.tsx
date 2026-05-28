import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { TranslationDict } from '../types';

interface GalleryProps {
  dict: TranslationDict;
}

interface GalleryImage {
  src: string;
  alt: string;
}

export default function Gallery({ dict }: GalleryProps) {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  const images: GalleryImage[] = [
    {
      src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1000&q=80",
      alt: "The botanical central pool and palm shadow sanctuary"
    },
    {
      src: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=800&q=80",
      alt: "Warm stone thermo-therapy and muscle restoration suite"
    },
    {
      src: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=800&q=80",
      alt: "Artisanal floral teas served post-treatment in our tea-lounge"
    },
    {
      src: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=800&q=80",
      alt: "Private treatment cabinet with aromatherapy and direct garden views"
    },
    {
      src: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80",
      alt: "Premium cedarwood eucalyptus Swedish sauna"
    },
    {
      src: "https://images.unsplash.com/photo-1596178060671-7a80dc8059ea?w=800&q=80",
      alt: "Purified fresh botanicals and micro-bubble floral hydrotherapy pool"
    },
    {
      src: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=800&q=80",
      alt: "WISS Spa main entrance and welcome check-in sanctuary"
    },
    {
      src: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=800&q=80",
      alt: "Essential wellness oils and custom botanical extracts"
    }
  ];

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIdx === null) return;
      if (e.key === 'ArrowRight') {
        setSelectedIdx((prev) => (prev !== null ? (prev + 1) % images.length : 0));
      } else if (e.key === 'ArrowLeft') {
        setSelectedIdx((prev) => (prev !== null ? (prev - 1 + images.length) % images.length : 0));
      } else if (e.key === 'Escape') {
        setSelectedIdx(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIdx, images.length]);

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto bg-white/60 rounded-[32px] border border-[#E6E2D3]/60 my-10">
      
      {/* Title */}
      <div className="text-center mb-16">
        <span className="text-[#8D7A5D] font-semibold text-xs tracking-[0.3em] uppercase mb-3 block">
          {dict.gallery.badge}
        </span>
        <h2 className="text-3xl md:text-5xl font-serif tracking-tight text-[#3C3C3B]">
          {dict.gallery.title}
        </h2>
        <div className="w-16 h-[1.5px] bg-[#8D7A5D]/50 mx-auto mt-4 rounded-full" />
      </div>

      {/* Grid structure following original asymmetric premium aesthetic */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        
        {/* Large outstanding showcase photo */}
        <div 
          onClick={() => setSelectedIdx(0)}
          className="col-span-2 row-span-2 rounded-[32px] overflow-hidden h-[420px] md:h-[536px] relative cursor-pointer group shadow-sm"
        >
          <img
            src={images[0].src}
            alt={images[0].alt}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
            <div className="flex justify-between items-center w-full">
              <span className="text-white text-sm font-light tracking-wide">{images[0].alt}</span>
              <Maximize2 className="w-5 h-5 text-[#D9D2C5] shrink-0" />
            </div>
          </div>
        </div>

        {/* Small photos mapping */}
        {images.slice(1).map((image, index) => {
          const actualIdx = index + 1;
          return (
            <div 
              key={actualIdx}
              onClick={() => setSelectedIdx(actualIdx)}
              className="rounded-[24px] overflow-hidden h-48 md:h-64 relative cursor-pointer group shadow-xs border border-[#E6E2D3]/50"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <div className="flex justify-between items-center w-full">
                  <span className="text-white text-xs font-light truncate pr-2">{image.alt}</span>
                  <Maximize2 className="w-4 h-4 text-[#D9D2C5] shrink-0" />
                </div>
              </div>
            </div>
          );
        })}

      </div>

      {/* Complete digital album link outside */}
      <p className="text-center text-sm font-semibold mt-10">
        <a
          href="https://photos.app.goo.gl/kj4KWyuXgrpMvijq9"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-[#5A5A40] hover:text-[#8D7A5D] hover:underline transition-all font-serif italic"
        >
          {dict.gallery.albumLink}
        </a>
      </p>

      {/* Fullscreen Lightbox Modal */}
      {selectedIdx !== null && (
        <div className="fixed inset-0 z-50 bg-[#3C3C3B]/98 backdrop-blur-md flex flex-col justify-between p-6">
          
          {/* Header row in modal */}
          <div className="flex justify-between items-center text-white max-w-7xl mx-auto w-full">
            <span className="text-xs font-serif tracking-widest text-[#D9D2C5]/80 uppercase">
              WISS SPA — PHOTO {selectedIdx + 1} / {images.length}
            </span>
            <button 
              onClick={() => setSelectedIdx(null)}
              className="bg-white/10 hover:bg-white/20 text-white rounded-full p-2.5 transition-colors"
              aria-label="Cerrar galería"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Central slides content with navigation arrows */}
          <div className="flex items-center justify-between max-w-6xl mx-auto w-full my-auto gap-4">
            
            {/* Left Button */}
            <button 
              onClick={() => setSelectedIdx((prev) => (prev !== null ? (prev - 1 + images.length) % images.length : 0))}
              className="bg-white/10 hover:bg-[#5A5A40] hover:text-white text-white rounded-full p-4 transition-all shrink-0"
              aria-label="Photo précédente"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Selected Image Screen */}
            <div className="relative max-h-[70vh] max-w-4xl mx-auto overflow-hidden rounded-3xl border border-white/5 shadow-2xl bg-black flex items-center justify-center">
              <img 
                src={images[selectedIdx].src} 
                alt={images[selectedIdx].alt}
                className="max-h-[70vh] max-w-full object-contain mx-auto"
              />
            </div>

            {/* Right Button */}
            <button 
              onClick={() => setSelectedIdx((prev) => (prev !== null ? (prev + 1) % images.length : 0))}
              className="bg-white/10 hover:bg-[#5A5A40] hover:text-white text-white rounded-full p-4 transition-all shrink-0"
              aria-label="Photo suivante"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

          </div>

          {/* Bottom text caption */}
          <div className="text-center text-[#D9D2C5] max-w-2xl mx-auto pb-4">
            <p className="text-base font-serif italic font-light">{images[selectedIdx].alt}</p>
          </div>

        </div>
      )}

    </section>
  );
}
