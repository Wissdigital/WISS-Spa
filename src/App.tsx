import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Language, BookingInquiry, GuestReview } from './types';
import { locales, defaultReviews } from './locales';

// Import newly created custom components
import Header from './components/Header';
import Hero from './components/Hero';
import Specifications from './components/Specifications';
import About from './components/About';
import Gallery from './components/Gallery';
import Amenities from './components/Amenities';
import Wellness from './components/Wellness';
import Activities from './components/Activities';
import BookingCalculator from './components/BookingCalculator';
import Reviews from './components/Reviews';
import ContactForm from './components/ContactForm';
import AdminInbox from './components/AdminInbox';
import Footer from './components/Footer';

// Standalone Deep-Product Landing Pages for superior SEO
import TreatmentDetailPage from './components/TreatmentDetailPage';
import FacilityDetailPage from './components/FacilityDetailPage';
import PackageDetailPage from './components/PackageDetailPage';

export default function App() {
  const [lang, setLang] = useState<Language>('en');

  // Multi-page routing state synchronized with URL hash (SEO standalone subpaths)
  const [currentPage, setCurrentPage] = useState<string>(() => {
    const hash = window.location.hash.toLowerCase().replace('#', '');
    const parts = hash.split('/');
    const mainPage = parts[0] || 'home';
    const validPages = ['home', 'chalet', 'experiences', 'booking', 'admin'];
    return validPages.includes(mainPage) ? mainPage : 'home';
  });

  const [subPage, setSubPage] = useState<string | null>(() => {
    const hash = window.location.hash.toLowerCase().replace('#', '');
    const parts = hash.split('/');
    return parts.length > 1 ? parts[1] : null;
  });

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.toLowerCase().replace('#', '');
      const parts = hash.split('/');
      const mainPage = parts[0] || 'home';
      const sPage = parts.length > 1 ? parts[1] : null;

      const validPages = ['home', 'chalet', 'experiences', 'booking', 'admin'];
      if (validPages.includes(mainPage)) {
        setCurrentPage(mainPage);
        setSubPage(sPage);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (!hash) {
        setCurrentPage('home');
        setSubPage(null);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page: string, sub: string | null = null) => {
    const targetHash = sub ? `${page}/${sub}` : page;
    window.location.hash = targetHash === 'home' ? '' : targetHash;
    setCurrentPage(page);
    setSubPage(sub);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // States for Inquiries
  const [inquiries, setInquiries] = useState<BookingInquiry[]>(() => {
    const saved = localStorage.getItem('yeti_inquiries');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        // fallback
      }
    }
    // Pre-hydrate beautiful examples so the Spa Admin Portal is active on first load!
    return [
      {
        id: 'inq-preg-1',
        name: 'Chinedu Okafor',
        email: 'chinedu.okafor@gmail.com',
        startDate: '2026-12-20',
        endDate: '2026-12-20',
        guests: 2,
        message: 'Hello, I would like to book the Revitalizing Day package for my wife and me. Do we need to bring our own organic skincare oils or is everything provided? We plan to arrive around 11:30 AM.',
        createdAt: new Date(Date.now() - 36 * 3600 * 1000).toISOString(),
        status: 'pending',
        calculatedPrice: 350,
      },
      {
        id: 'inq-preg-2',
        name: 'Sarah Alabi',
        email: 'sarah.alabi@yahoo.com',
        startDate: '2026-07-11',
        endDate: '2026-07-11',
        guests: 4,
        message: 'Hi! Our group of four is planning a bridal shower escape on Saturday afternoon. Could you confirm if the thermal eucalyptus steam room holds up to 6 people comfortably? Also interested in the post-treatment herbal tea pairing.',
        createdAt: new Date(Date.now() - 12 * 3600 * 1000).toISOString(),
        status: 'approved',
        calculatedPrice: 620,
      }
    ];
  });

  // States for reviews
  const [reviews, setReviews] = useState<GuestReview[]>(() => {
    const saved = localStorage.getItem('yeti_reviews');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {}
    }
    return defaultReviews;
  });

  // Persistent storage synchronizations
  useEffect(() => {
    localStorage.setItem('yeti_inquiries', JSON.stringify(inquiries));
  }, [inquiries]);

  useEffect(() => {
    localStorage.setItem('yeti_reviews', JSON.stringify(reviews));
  }, [reviews]);

  // Dictionary lookup shortcut
  const dict = locales[lang];

  // Actions for inquiries management
  const handleAddInquiry = (newInq: BookingInquiry) => {
    setInquiries((prev) => [newInq, ...prev]);
  };

  const handleApproveInquiry = (id: string) => {
    setInquiries((prev) =>
      prev.map((i) => (i.id === id ? { ...i, status: 'approved' } : i))
    );
  };

  const handleRejectInquiry = (id: string) => {
    setInquiries((prev) =>
      prev.map((i) => (i.id === id ? { ...i, status: 'rejected' } : i))
    );
  };

  const handleDeleteInquiry = (id: string) => {
    setInquiries((prev) => prev.filter((i) => i.id !== id));
  };

  const handleSendReply = (id: string, reply: string) => {
    // Reply simulate log state handled inside AdminInbox component
    console.log(`Reply sent for inquiry ${id}: ${reply}`);
  };

  const handleAddReview = (newReview: GuestReview) => {
    setReviews((prev) => [newReview, ...prev]);
  };

  // Pending count for top badges notifications
  const pendingInquiriesCount = inquiries.filter((i) => i.status === 'pending').length;

  return (
    <div className="text-[#3C3C3B] bg-[#F9F7F2] antialiased selection:bg-[#5A5A40] selection:text-white min-h-screen flex flex-col justify-between font-sans">
      
      {/* Universal transparent scroll header navigation */}
      <Header 
        lang={lang} 
        setLang={setLang} 
        dict={dict} 
        currentPage={currentPage} 
        navigateTo={navigateTo}
        inquiryCount={pendingInquiriesCount}
      />

      {/* Main interactive layouts switches */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            {currentPage === 'home' && (
              <div className="animate-fade-in animate-none">
                {/* Hero Cover */}
                <Hero dict={dict} navigateTo={navigateTo} />

                {/* Main Key highlights */}
                <Specifications dict={dict} navigateTo={navigateTo} />

                {/* About Chalet details */}
                <About dict={dict} navigateTo={navigateTo} />

                {/* Highlight reviews carousel at the bottom of the home as prestige social proof */}
                <div className="bg-white/40 border-y border-[#E6E2D3]/60 py-16">
                  <div className="max-w-7xl mx-auto px-6 text-center">
                    <span className="text-xs uppercase tracking-[0.3em] text-[#8D7A5D] font-bold block mb-3">JOURNAL OF SERENITY</span>
                    <h3 className="font-serif text-3xl md:text-4xl text-[#3C3C3B] mb-12 tracking-tight font-medium">Stories from Our Guests</h3>
                    
                    <Reviews dict={dict} reviews={reviews.slice(0, 3)} onAddReview={handleAddReview} />
                    
                    <div className="mt-12">
                      <button 
                        onClick={() => navigateTo('booking')}
                        className="bg-[#5A5A40] text-white hover:bg-[#4a4a34] px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest transition-colors shadow-sm cursor-pointer"
                      >
                        Explore all reviews & Rates
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {currentPage === 'chalet' && (
              subPage ? (
                <FacilityDetailPage facilityId={subPage} navigateTo={navigateTo} dict={dict} />
              ) : (
                <div className="py-12 animate-fade-in animate-none">
                  <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
                    <span className="text-xs uppercase tracking-[0.3em] text-[#8D7A5D] font-bold block mb-3">OUR OASIS & SANCTUARY</span>
                    <h1 className="font-serif text-4xl sm:text-5xl text-[#3C3C3B] mb-6 tracking-tight leading-tight">A Botanical Sanctuary</h1>
                    <p className="text-stone-600 max-w-2xl mx-auto leading-relaxed font-light text-sm sm:text-base">
                      Step inside our beautifully curated spaces designed to cocoon you in absolute stillness and comfort right here in Lagos.
                    </p>
                  </div>

                  {/* Photogallery and custom lightbox slider */}
                  <Gallery dict={dict} />

                  {/* Expandable and filterable Specifications board */}
                  <div className="mt-16">
                    <Amenities dict={dict} />
                  </div>

                  {/* Sub CTA layout box */}
                  <div className="max-w-4xl mx-auto text-center mt-20 px-8 py-12 bg-[#3C3C3B] rounded-[32px] text-[#F9F7F2] shadow-xl relative overflow-hidden">
                    <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10 animate-none" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1600&q=80")` }} />
                    <div className="relative z-10 space-y-4">
                      <h3 className="text-2xl sm:text-3xl font-serif italic">Ready to experience true restoration?</h3>
                      <p className="text-stone-300 font-light text-xs sm:text-sm max-w-lg mx-auto leading-relaxed">
                        Plan your day of recovery by estimating rates instantly or speaking to our concierge desk.
                      </p>
                      <button 
                        onClick={() => navigateTo('booking')}
                        className="inline-block mt-4 bg-[#5A5A40] hover:bg-[#4a4a34] text-white font-semibold py-3 px-8 rounded-full text-xs uppercase tracking-widest cursor-pointer shadow-md transition-colors"
                      >
                        Book Your Session
                      </button>
                    </div>
                  </div>
                </div>
              )
            )}

            {currentPage === 'experiences' && (
              subPage ? (
                <TreatmentDetailPage treatmentId={subPage} navigateTo={navigateTo} dict={dict} />
              ) : (
                <div className="py-12 animate-fade-in animate-none">
                  <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
                    <span className="text-xs uppercase tracking-[0.3em] text-[#8D7A5D] font-bold block mb-3">TREATMENTS & MEDITATION</span>
                    <h1 className="font-serif text-4xl sm:text-5xl text-[#3C3C3B] mb-6 tracking-tight leading-tight">Curated Wellness Rituals</h1>
                    <p className="text-stone-600 max-w-2xl mx-auto leading-relaxed font-light text-sm sm:text-base">
                      Indulge in our exquisite hot stone therapies, custom-tailored massages, and state-of-the-art steam chambers built for premium restoration.
                    </p>
                  </div>

                  {/* Outdoor Hot Tub Spa */}
                  <Wellness dict={dict} />

                  {/* Interactive Sports activities list & detail modals */}
                  <div className="mt-16">
                    <Activities dict={dict} navigateTo={navigateTo} />
                  </div>
                </div>
              )
            )}

            {currentPage === 'booking' && (
              subPage ? (
                <PackageDetailPage packageId={subPage} navigateTo={navigateTo} dict={dict} />
              ) : (
                <div className="py-12 animate-fade-in animate-none">
                  <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
                    <span className="text-xs uppercase tracking-[0.3em] text-[#8D7A5D] font-bold block mb-3">CONCIERGE DESK</span>
                    <h1 className="font-serif text-4xl sm:text-5xl text-[#3C3C3B] mb-6 tracking-tight leading-tight">Book Your Escape</h1>
                    <p className="text-stone-600 max-w-2xl mx-auto leading-relaxed font-light text-sm">
                      Select your desired treatment dates and guest counts to calculate an instant seasonal quote.
                    </p>
                  </div>

                  {/* Prices charts and dynamic reservation quote simulator */}
                  <BookingCalculator dict={dict} onAddInquiry={handleAddInquiry} />

                  {/* Pre-sanitized customized project inquiries contact form */}
                  <div id="tarifs-form-section" className="mt-16">
                    <ContactForm dict={dict} onAddInquiry={handleAddInquiry} />
                  </div>

                  {/* Detailed comments list & reviews manager */}
                  <div className="mt-20">
                    <Reviews dict={dict} reviews={reviews} onAddReview={handleAddReview} />
                  </div>
                </div>
              )
            )}

            {currentPage === 'admin' && (
              /* Host simulation playground board */
              <div className="bg-[#F9F7F2] py-10 animate-fade-in animate-none">
                <AdminInbox 
                  inquiries={inquiries}
                  onApprove={handleApproveInquiry}
                  onReject={handleRejectInquiry}
                  onDelete={handleDeleteInquiry}
                  onSendReply={handleSendReply}
                />
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Structured Dark Forest footer brand layout */}
      <Footer 
        dict={dict} 
        currentPage={currentPage} 
        navigateTo={navigateTo}
      />

    </div>
  );
}
