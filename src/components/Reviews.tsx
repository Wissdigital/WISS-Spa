import React, { useState } from 'react';
import { Star, MessageSquarePlus, User, CheckCircle2 } from 'lucide-react';
import { TranslationDict, GuestReview } from '../types';

interface ReviewsProps {
  dict: TranslationDict;
  reviews: GuestReview[];
  onAddReview: (review: GuestReview) => void;
}

export default function Reviews({ dict, reviews, onAddReview }: ReviewsProps) {
  const [newComment, setNewComment] = useState('');
  const [newName, setNewName] = useState('');
  const [newRating, setNewRating] = useState(5);
  const [showSubmitReview, setShowSubmitReview] = useState(false);
  const [reviewPosted, setReviewPosted] = useState(false);

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName || !newComment) return;

    const addedRev: GuestReview = {
      id: `rev-${Date.now()}`,
      name: newName,
      rating: newRating,
      comment: newComment,
      date: new Date().toISOString().split('T')[0],
      lang: 'fr' // fallback defaults
    };

    onAddReview(addedRev);
    setNewName('');
    setNewComment('');
    setNewRating(5);
    setShowSubmitReview(false);
    setReviewPosted(true);

    // clear banner after 4 seconds
    setTimeout(() => {
      setReviewPosted(false);
    }, 4500);
  };

  return (
    <section className="py-24 bg-[#E6E2D3]/35 relative overflow-hidden rounded-[32px] mx-6 mb-12 scroll-mt-20 border border-[#E6E2D3]/60 shadow-xs">
      {/* Dynamic background dot grid effect */}
      <div 
        className="absolute inset-0 opacity-[0.05] pointer-events-none" 
        style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, black 1px, transparent 0)', backgroundSize: '32px 32px' }} 
      />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-[#8D7A5D] font-semibold text-xs tracking-[0.3em] uppercase mb-3 block">
            {dict.pricing.guestbookBadge}
          </span>
          <h2 className="text-3xl md:text-5xl font-serif text-[#3C3C3B] leading-tight">
            {dict.pricing.guestbookTitle}
          </h2>
          <div className="w-16 h-[1.5px] bg-[#8D7A5D]/50 mx-auto mt-4 rounded-full" />
        </div>

        {/* Action Toggle to provide review */}
        <div className="flex justify-center mb-8">
          <button
            onClick={() => setShowSubmitReview(!showSubmitReview)}
            className="flex items-center gap-2 bg-[#5A5A40] hover:bg-[#4a4a34] text-white px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-widest transition-all shadow-md"
          >
            <MessageSquarePlus className="w-4 h-4 text-[#D9D2C5]" />
            <span>{dict.pricing.guestbookSubmit}</span>
          </button>
        </div>

        {/* Submit Review Form */}
        {showSubmitReview && (
          <form 
            onSubmit={handleSubmitReview}
            className="bg-white/95 rounded-[24px] p-6 sm:p-8 border border-[#E6E2D3] max-w-lg mx-auto mb-10 text-left space-y-4 animate-scale-up"
          >
            <h4 className="text-sm font-serif text-[#3C3C3B] uppercase tracking-wider mb-2">Laisser un mot dans notre Livre d'Or</h4>
            
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] font-semibold text-[#8D7A5D] uppercase tracking-wider mb-1.5">Mon Nom</label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Jean Dupont"
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  className="w-full bg-white border border-[#E6E2D3] text-[#3C3C3B] rounded-xl py-2.5 px-3.5 focus:outline-none focus:border-[#5A5A40] font-light text-xs placeholder:text-stone-400"
                />
              </div>
              
              <div>
                <label className="block text-[10px] font-semibold text-[#8D7A5D] uppercase tracking-wider mb-1.5">Note (sur 5 étoiles)</label>
                <select
                  value={newRating}
                  onChange={(e) => setNewRating(Number(e.target.value))}
                  className="w-full bg-white border border-[#E6E2D3] text-[#3C3C3B] rounded-xl py-2.5 px-3.5 focus:outline-none focus:border-[#5A5A40] font-semibold text-xs text-left"
                >
                  <option value={5}>⭐⭐⭐⭐⭐ (5/5)</option>
                  <option value={4}>⭐⭐⭐⭐ (4/5)</option>
                  <option value={3}>⭐⭐⭐ (3/5)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-[10px] font-semibold text-[#8D7A5D] uppercase tracking-wider mb-1.5">Mon Commentaire / Avis</label>
              <textarea
                required
                rows={3}
                placeholder="Partagez vos impressions sur votre séjour..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                className="w-full bg-white border border-[#E6E2D3] text-[#3C3C3B] rounded-xl py-2.5 px-3.5 focus:outline-none focus:border-[#5A5A40] font-light text-xs placeholder:text-stone-400"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#5A5A40] hover:bg-[#4a4a34] text-white font-semibold py-2.5 rounded-xl text-xs uppercase tracking-widest transition-colors"
            >
              Publier mon avis
            </button>
          </form>
        )}

        {reviewPosted && (
          <div className="bg-emerald-50 text-emerald-900 border border-emerald-300/30 p-4 rounded-2xl max-w-md mx-auto mb-10 text-xs font-light flex items-center gap-2.5 shadow-xs text-left">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
            <span>Votre avis a été ajouté avec succès au livre d'or. Merci pour votre témoignage !</span>
          </div>
        )}

        {/* Grid Reviews Feed representing actual testimonials */}
        <div className="grid md:grid-cols-2 gap-8 text-left">
          {reviews.map((rev) => (
            <div key={rev.id} className="bg-white/70 rounded-[32px] p-8 shadow-xs hover:shadow-md transition-all border border-[#E6E2D3]/50 flex flex-col justify-between h-full relative">
              <div>
                
                {/* Score badge stars */}
                <div className="flex gap-1 text-[#8D7A5D] mb-4">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-solid fill-current" strokeWidth={1} />
                  ))}
                  {[...Array(5 - rev.rating)].map((_, i) => (
                    <Star key={i + 1} className="w-4 h-4 text-[#D9D2C5]" strokeWidth={1} />
                  ))}
                </div>

                {/* Comment quotes */}
                <p className="text-[#3C3C3B] text-sm italic leading-relaxed mb-6 font-serif font-light">
                  "{rev.comment}"
                </p>
              </div>

              {/* Author footer */}
              <div className="flex justify-between items-center border-t border-[#E6E2D3]/40 pt-4 mt-auto">
                <div className="flex items-center gap-3">
                  <div className="bg-[#5A5A40]/10 w-10 h-10 rounded-full flex items-center justify-center text-[#5A5A40] shrink-0 font-bold text-sm border border-[#5A5A40]/15">
                    <User className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-serif text-[#3C3C3B]">
                      {rev.name}
                    </h4>
                    <span className="text-[10px] text-[#8D7A5D] font-light font-sans tracking-wide">
                      A séjourné le {rev.date}
                    </span>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
