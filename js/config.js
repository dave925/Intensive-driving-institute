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
  
  // Contact Information (Official Flyer: 0243854314 / 0555652433)
  phone: "+233243854314",
  phoneDisplay: "0243854314",
  phoneSecondary: "+233555652433",
  phoneSecondaryDisplay: "0555652433",
  contactLines: "0243854314 / 0555652433",
  
  // WhatsApp Configuration (Official WhatsApp: +233243854314)
  whatsappNumber: "233243854314",
  whatsappDisplay: "+233243854314",
  defaultWhatsAppMessage: "Hello Intensive Driving Institute, I would like to enquire about your driving courses and available lesson slots.",
  
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
  
  // Working Hours (Official Flyer)
  hours: {
    weekdays: "Monday – Friday: 8:00 AM – 5:00 PM",
    saturdays: "Saturday: 8:00 AM – 5:00 PM",
    theoryClasses: "9:00 AM – 10:00 AM / 1:00 PM – 2:00 PM"
  },

  // Requirements for Registration (Official Flyer)
  registrationRequirements: {
    passportPhotos: "1 Passport size picture",
    nationalId: "National ID (Ghana Card) ONLY",
    educationLevel: "Level of Education: M.S.L.C, J.H.S, S.H.S (If necessary)",
    registrationAndPamphletFee: 100
  },

  // Official Policies (Official Flyer)
  policies: {
    nonRefundable: "FEES PAID ARE NOT REFUNDABLE",
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
    youtube: "https://youtube.com/@intensivedrivinggh"
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
        currency: "GHc",
        payableAt: "DVLA",
        description: "Students are required to pay at DVLA."
      },
      {
        id: "dvla-premium",
        name: "Premium License & Eye Test",
        duration: "3 Weeks",
        fee: 1055,
        currency: "GHc",
        payableAt: "DVLA",
        description: "Students are required to pay at DVLA."
      }
    ],

    courses: [
      {
        id: "regular-course",
        name: "Regular Course",
        duration: "1 Month 3 Weeks",
        theoryTime: "9am - 10am / 1pm - 2pm",
        practical: "Practical Lesson included",
        amountStandard: 1720,
        amountComfort: 2220,
        currency: "GHC",
        standardLabel: "Standard",
        comfortLabel: "Comfort / AC"
      },
      {
        id: "intensive-course",
        name: "Intensive Course for 3 Weeks",
        duration: "3 Weeks",
        theoryTime: "9am - 10am / 1pm - 2pm",
        practical: "Practical Lesson included",
        amountStandard: 2100,
        amountComfort: 2600,
        currency: "GHC",
        standardLabel: "Standard",
        comfortLabel: "Comfort / AC"
      },
      {
        id: "refresher-course",
        name: "Brush-Up / Refresher Course",
        duration: "1 - 2 Weeks",
        theoryTime: "9am - 10am / 1pm - 2pm",
        practical: "Practical Lesson included",
        price1Week: 850,
        price2Weeks: 1300,
        assessmentFee: 100,
        currency: "GHC",
        licenseNote: "You must provide your valid license. (If necessary)"
      },
      {
        id: "weekend-course",
        name: "Weekend Course Saturdays 16Wks",
        duration: "Saturdays 16 Weeks",
        theoryTime: "Theory Lesson",
        practical: "Practical Lesson",
        amountStandard: 1720,
        amountComfort: 2220,
        sundayOptional: 20,
        currency: "GHC",
        standardLabel: "Standard",
        comfortLabel: "Comfort / AC",
        sundayNote: "Sundays GHC 20.00 (Optional)"
      }
    ]
  }
};

// Export for modern ES modules or attach to global window
if (typeof module !== 'undefined' && module.exports) {
  module.exports = SCHOOL_CONFIG;
} else if (typeof window !== 'undefined') {
  window.SCHOOL_CONFIG = SCHOOL_CONFIG;
}
