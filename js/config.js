/**
 * Intensive Driving Institute - Central Configuration File
 * All business details, contact information, pricing packages, 
 * and program definitions are maintained here for easy updates.
 */

const SCHOOL_CONFIG = {
  // Brand & Business Details
  name: "Intensive Driving Institute",
  shortName: "Intensive Driving",
  slogan: "Drive With Confidence, Master Safety",
  tagline: "Ghana's Premier DVLA-Accredited Professional Driving Academy",
  foundedYear: 2019,
  dvlaAccreditation: "DVLA Certified Driving School #DVLA/TR/ACC-0482",
  
  // Contact Information (Ghana format - 0243854314 / 0555652433)
  phone: "+233243854314",
  phoneSecondary: "+233555652433",
  phoneDisplay: "0243 854 314",
  phoneSecondaryDisplay: "0555 652 433",
  phoneIntl: "+233243854314",
  contactLines: "0243854314 / 0555652433",
  
  // WhatsApp Configuration (Digits only with international country code)
  whatsappNumber: "233243854314",
  whatsappDisplay: "0243 854 314",
  defaultWhatsAppMessage: "Hello Intensive Driving Institute, I would like to make an inquiry about your driving courses and available lesson slots. Please provide more details.",
  
  // Email & Physical Location (Official flyer: INSIDE GICEL Estates BLK A/17 UP STAIRS, New Weija, Off Mallam-Kasoa Road, Accra)
  email: "admissions@intensivedrivinggh.com",
  infoEmail: "info@intensivedrivinggh.com",
  website: "www.intensivedrivinginstitute.com",
  address: {
    street: "INSIDE GICEL Estates BLK A/17 UP STAIRS, New Weija",
    landmark: "Off Mallam-Kasoa Road, Accra",
    full: "INSIDE GICEL Estates BLK A/17 UP STAIRS, New Weija, Off Mallam-Kasoa Road, Accra",
    city: "Accra",
    region: "Greater Accra Region",
    country: "Ghana"
  },
  
  // Official Working Hours
  hours: {
    weekdays: "Monday – Friday: 8:00 AM – 5:00 PM",
    saturdays: "Saturday: 8:00 AM – 5:00 PM",
    sundays: "Sunday: Practical sessions by appointment (Sunday Course GH₵ 20.00 Optional)",
    theoryClasses: "9:00 AM – 10:00 AM / 1:00 PM – 2:00 PM"
  },

  // Official Requirements for Registration
  registrationRequirements: {
    passportPhotos: "1 Passport size picture",
    nationalId: "National ID (Ghana Card) ONLY",
    educationLevel: "Level of Education: M.S.L.C, J.H.S, S.H.S (If necessary)",
    registrationAndPamphletFee: 100
  },

  // Official Policies
  policies: {
    nonRefundable: "Fees paid are not refundable",
    fuelIncrementNotice: "The above prices are subject to change should there is any government increment of fuel"
  },
  
  // Strategic Training & Pick-Up Locations (Accra)
  pickupLocations: [
    {
      name: "GICEL Estates & Weija Hub",
      description: "Direct walk-in and training hub at INSIDE GICEL Estates BLK A/17 UP STAIRS, New Weija."
    },
    {
      name: "Mallam Junction & McCarthy Hill",
      description: "Convenient roadside pickup point along the Mallam-Kasoa corridor."
    },
    {
      name: "Kasoa Barrier & Toll Gate",
      description: "Designated pickup spot for learners coming from Kasoa, Amanfrom, and surrounding areas."
    },
    {
      name: "Dansoman & Odorkor",
      description: "Strategic pickup hubs for Western Accra learners."
    }
  ],
  
  // Social Media Links
  socials: {
    facebook: "https://facebook.com/intensivedrivinggh",
    instagram: "https://instagram.com/intensivedrivinggh",
    tiktok: "https://tiktok.com/@intensivedrivinggh",
    youtube: "https://youtube.com/@intensivedrivinggh",
    twitter: "https://twitter.com/intensivedriving"
  },
  
  // Official Pricing Structure Matching Official Enquiry Form
  pricing: {
    registrationAndPamphlet: 100,

    dvlaDirectFees: [
      {
        id: "dvla-standard",
        name: "Standard License & Eye Test",
        duration: "3 Months",
        fee: 795,
        payableAt: "DVLA",
        description: "Standard processing timeline for genuine DVLA driver's license and mandatory optical evaluation."
      },
      {
        id: "dvla-premium",
        name: "Premium License & Eye Test",
        duration: "3 Weeks",
        fee: 1055,
        payableAt: "DVLA",
        description: "Expedited processing timeline for accelerated license issuance and eye test."
      }
    ],

    courses: [
      {
        id: "regular-course",
        name: "Regular Course",
        duration: "1 Month 3 Weeks",
        theoryTime: "9:00 AM – 10:00 AM or 1:00 PM – 2:00 PM",
        practical: "Practical Driving Lessons included",
        amountStandard: 1720,
        amountComfort: 2220,
        currency: "GH₵",
        features: [
          "Manual transmission (Standard: GH₵ 1,720) or Automatic/AC (Comfort: GH₵ 2,220)",
          "Theory Lessons: 9:00am - 10:00am or 1:00pm - 2:00pm",
          "Comprehensive practical behind-the-wheel instruction",
          "Start with 70% down payment, balance before DVLA test",
          "Dual-pedal safety vehicles with certified instructors"
        ],
        popular: true
      },
      {
        id: "intensive-course",
        name: "Intensive Course",
        duration: "3 Weeks",
        theoryTime: "9:00 AM – 10:00 AM or 1:00 PM – 2:00 PM",
        practical: "Daily Intensive Practical Lessons",
        amountStandard: 2100,
        amountComfort: 2600,
        currency: "GH₵",
        features: [
          "Fast-track everyday intensive driving instruction",
          "Standard: GH₵ 2,100 | Comfort: GH₵ 2,600",
          "Theory Lessons: 9:00am - 10:00am or 1:00pm - 2:00pm",
          "Ideal for busy professionals, travelers, and vacationers",
          "70% deposit acceptable to commence immediately"
        ],
        popular: false
      },
      {
        id: "refresher-course",
        name: "Brush-Up / Refresher Course",
        duration: "1 - 2 Weeks",
        theoryTime: "9:00 AM – 10:00 AM or 1:00 PM – 2:00 PM",
        practical: "Targeted Confidence & Parking Drills",
        price1Week: 850,
        price2Weeks: 1300,
        assessmentFee: 100,
        currency: "GH₵",
        features: [
          "1 Week option: GH₵ 850.00",
          "2 Weeks option: GH₵ 1,300.00",
          "Driving Skills Assessment: GH₵ 100.00",
          "You must provide your valid license (if necessary)",
          "Targeted roundabout navigation, highway speed, and tight parking"
        ],
        popular: false
      },
      {
        id: "weekend-course",
        name: "Weekend Course",
        duration: "Saturdays 16 Weeks",
        theoryTime: "Flexible Saturday Sessions",
        practical: "Saturday Practical Lessons (Sundays GH₵ 20.00 Optional)",
        amountStandard: 1720,
        amountComfort: 2220,
        sundayOptional: 20,
        currency: "GH₵",
        features: [
          "Designed specifically for working individuals and students",
          "Standard: GH₵ 1,720 | Comfort: GH₵ 2,220",
          "Comprehensive Saturday practical + theory training across 16 weeks",
          "Sunday practice sessions available at GH₵ 20.00 (Optional)",
          "Start with 70% deposit"
        ],
        popular: false
      }
    ]
  },
  
  // Instructors Roster
  instructors: [
    {
      id: "inst-1",
      name: "Kwame Mensah",
      role: "Chief Driving Instructor & Safety Director",
      experience: "14+ Years Experience",
      badge: "DVLA Master Instructor #0194",
      specialization: "Defensive Driving, Manual Transmission & DVLA Route Mastery",
      bio: "Former DVLA driving examiner consultant with over 14 years of mentoring beginner and nervous drivers. Kwame has a 98.4% first-time test pass record.",
      rating: 4.9,
      studentsCount: "1,450+"
    },
    {
      id: "inst-2",
      name: "Eunice Osei-Bonsu",
      role: "Senior Automatic & Defensive Driving Coach",
      experience: "9 Years Experience",
      badge: "DVLA Certified Grade 'A' #0381",
      specialization: "Anxiety Management, Automatic Cars & Precision Parking",
      bio: "Patient and encouraging, Eunice specializes in helping timid first-time learners build unshakeable confidence in Accra's busy roundabouts and highways.",
      rating: 5.0,
      studentsCount: "980+"
    },
    {
      id: "inst-3",
      name: "Emmanuel Addo (Kofi)",
      role: "Highway & Heavy Vehicle Specialist",
      experience: "11 Years Experience",
      badge: "DVLA Certified Professional #0275",
      specialization: "Motorway Driving, Night Lessons & Hazard Perception",
      bio: "Emmanuel is passionate about defensive maneuvers, weather-adaptive braking, and navigating high-speed traffic routes including the N1 Highway.",
      rating: 4.9,
      studentsCount: "1,120+"
    },
    {
      id: "inst-4",
      name: "Akua Frimpong",
      role: "Theory & Student Program Coordinator",
      experience: "7 Years Experience",
      badge: "Certified Road Safety Educator",
      specialization: "Ghana Highway Code, Road Signs & Computerized Test Prep",
      bio: "Akua ensures students breeze through the DVLA touchscreen computer test with comprehensive interactive quizzes and road sign decoding sessions.",
      rating: 4.8,
      studentsCount: "850+"
    }
  ],
  
  // Real Statistics / Trust Counters
  stats: [
    { value: "4,800+", label: "Licensed Graduates" },
    { value: "98.6%", label: "First-Time DVLA Pass Rate" },
    { value: "14+", label: "Dual-Control Modern Cars" },
    { value: "70%", label: "Flexible Down Payment Plan" }
  ]
};

// Export for modern ES modules or attach to global window
if (typeof module !== 'undefined' && module.exports) {
  module.exports = SCHOOL_CONFIG;
} else if (typeof window !== 'undefined') {
  window.SCHOOL_CONFIG = SCHOOL_CONFIG;
}
