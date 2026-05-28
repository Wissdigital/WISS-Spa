export type Language = 'fr' | 'en';

export interface TranslationDict {
  topBar: {
    location: string;
    email: string;
  };
  nav: {
    specs: string;
    activities: string;
    rates: string;
    contact: string;
    cta: string;
  };
  hero: {
    subtitle: string;
    title: string;
    desc: string;
    ctaContact: string;
    ctaDiscover: string;
  };
  features: {
    title: string;
    subtitle: string;
    chaletTitle: string;
    chaletDesc: string;
    capacityTitle: string;
    capacityDesc: string;
    exteriorTitle: string;
    exteriorDesc: string;
  };
  about: {
    badge: string;
    title: string;
    desc1: string;
    desc2: string;
    cta: string;
    surfaceLabel: string;
    guestsLabel: string;
    slopesLabel: string;
    viewTitle: string;
    viewDesc: string;
    onSlopesTitle: string;
    onSlopesDesc: string;
    sunnyTitle: string;
    sunnyDesc: string;
    shopsTitle: string;
    shopsDesc: string;
  };
  gallery: {
    badge: string;
    title: string;
    albumLink: string;
  };
  amenities: {
    badge: string;
    title: string;
    searchPlaceholder: string;
    categories: {
      essentials: string;
      kitchen: string;
      leisure: string;
    };
  };
  wellness: {
    badge: string;
    title: string;
    desc1: string;
    desc2: string;
    tempLabel: string;
    openLabel: string;
  };
  activitiesSec: {
    badge: string;
    title: string;
    skiTitle: string;
    skiDesc: string;
    hikeTitle: string;
    hikeDesc: string;
    paraTitle: string;
    paraDesc: string;
    bikeTitle: string;
    bikeDesc: string;
    nightTitle: string;
    nightDesc: string;
    familyTitle: string;
    familyDesc: string;
    modalBtn: string;
  };
  pricing: {
    badge: string;
    title: string;
    lowSeason: string;
    midSeason: string;
    highSeason: string;
    perWeek: string;
    perDayMin: string;
    months: string;
    arrivalLabel: string;
    departureLabel: string;
    cleanLabel: string;
    cleanDesc: string;
    breakfastLabel: string;
    breakfastDesc: string;
    acompteLabel: string;
    acompteDesc: string;
    calculatorTitle: string;
    calculateBtn: string;
    resultTitle: string;
    nightCount: string;
    basePrice: string;
    totalPrice: string;
    optionalServices: string;
    cleaningFee: string;
    guestCount: string;
    inquirySuccess: string;
    guestbookTitle: string;
    guestbookBadge: string;
    guestbookSubmit: string;
  };
  contactForm: {
    badge: string;
    title: string;
    desc: string;
    nameLabel: string;
    emailLabel: string;
    arrivalLabel: string;
    departureLabel: string;
    guestsLabel: string;
    messageLabel: string;
    submit: string;
    sending: string;
    success: string;
  };
}

export interface ActivityDetail {
  id: string;
  title: string;
  category: string;
  shortDesc: string;
  fullDesc: string;
  tips: string[];
  image: string;
  iconName: string;
}

export interface BookingInquiry {
  id: string;
  name: string;
  email: string;
  startDate: string;
  endDate: string;
  guests: number;
  message: string;
  createdAt: string;
  status: 'pending' | 'approved' | 'rejected';
  calculatedPrice: number;
}

export interface GuestReview {
  id: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
  lang: 'fr' | 'en';
}
