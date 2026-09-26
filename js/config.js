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
  
  // Contact Information (Ghana format - Unified 0243854314)
  phone: "+233243854314",
  phoneSecondary: "+233243854314",
  phoneDisplay: "0243 854 314",
  phoneSecondaryDisplay: "0243 854 314",
  phoneIntl: "+233243854314",
  
  // WhatsApp Configuration (Digits only with international country code)
  whatsappNumber: "233243854314",
  whatsappDisplay: "0243 854 314",
  defaultWhatsAppMessage: "Hello Intensive Driving Institute, I would like to make an inquiry about your driving courses and available lesson slots. Please provide more details.",
  
  // Email & Physical Location
  email: "admissions@intensivedrivinggh.com",
  infoEmail: "info@intensivedrivinggh.com",
  address: {
    street: "Weija DVLA, SSNIT First Floor",
    landmark: "SSNIT Office Building, 1st Floor (Adjacent to Weija DVLA Office)",
    city: "Accra",
    region: "Greater Accra Region",
    country: "Ghana",
    postalCode: "GS-0145-8821"
  },
  
  // Operating Hours
  hours: {
    weekdays: "Monday – Friday: 6:30 AM – 6:30 PM",
    saturdays: "Saturday: 7:00 AM – 5:00 PM",
    sundays: "Sunday: Special Weekend Practice (By Appointment)",
    theoryClasses: "Wednesdays & Saturdays (Flexible Virtual & Physical sessions)"
  },
  
  // Strategic Training & Pick-Up Locations (Accra)
  pickupLocations: [
    {
      name: "Weija DVLA & SSNIT Hub",
      description: "Direct walk-in and training hub at Weija DVLA, SSNIT First Floor."
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
  
  // Pricing Structure (Editable in GH₵)
  pricing: {
    nonStudents: [
      {
        id: "reg-no-lic",
        name: "Regular Course (Without License)",
        category: "Regular (Non-Student)",
        duration: "6 Weeks",
        sessions: "18 Practical Lessons + Theory",
        price: 2300,
        currency: "GH₵",
        features: [
          "Manual or Automatic vehicle training",
          "Comprehensive Ghana Highway Code theory",
          "Dual-control safety vehicles",
          "Flexible weekday or weekend schedule",
          "Pick-up options from Weija & across Accra",
          "Course completion certificate"
        ],
        popular: false
      },
      {
        id: "reg-std-lic",
        name: "Regular Course + Standard License",
        category: "Regular (Non-Student)",
        duration: "6 Weeks",
        sessions: "18 Practical Lessons + DVLA Process",
        price: 2950,
        currency: "GH₵",
        features: [
          "Full 6-Week driving instruction",
          "DVLA Biometric registration assistance",
          "DVLA Computerized Theory prep & mock tests",
          "In-traffic driving test facilitation",
          "70% Initial Deposit acceptable",
          "DVLA Certified Driving License"
        ],
        popular: true
      },
      {
        id: "reg-prem-lic",
        name: "Regular Course + Premium License",
        category: "Regular (Non-Student)",
        duration: "6 Weeks",
        sessions: "22 Practical Lessons + VIP Express DVLA",
        price: 3200,
        currency: "GH₵",
        features: [
          "Extended highway & nighttime driving practice",
          "Priority one-on-one instructor matching",
          "Expedited DVLA queue facilitation",
          "Dedicated DVLA road test escort",
          "Free refresher test day session",
          "Zero-stress licensing guarantee"
        ],
        popular: false
      },
      {
        id: "exp-no-lic",
        name: "Express Course (Without License)",
        category: "Express (Fast-Track)",
        duration: "3 Weeks",
        sessions: "Daily Intensive Lessons (15 Hours)",
        price: 2700,
        currency: "GH₵",
        features: [
          "Fast-track intensive daily training",
          "Ideal for travelers & busy executives",
          "Comprehensive parking & highway maneuvers",
          "Manual or Automatic transmission",
          "Free theory materials & revision booklet"
        ],
        popular: false
      },
      {
        id: "exp-std-lic",
        name: "Express Course + Standard License",
        category: "Express (Fast-Track)",
        duration: "3 Weeks",
        sessions: "Daily Intensive + DVLA Processing",
        price: 3350,
        currency: "GH₵",
        features: [
          "Full 3-week fast-track practical mastery",
          "DVLA learner permit + official registration",
          "Priority test booking with DVLA examiners",
          "70% flexible deposit to kickstart training",
          "Dedicated driving instructor"
        ],
        popular: false
      },
      {
        id: "exp-prem-lic",
        name: "Express Course + Premium License",
        category: "Express (Fast-Track)",
        duration: "3 Weeks",
        sessions: "VIP Fast-Track + Express License",
        price: 3600,
        currency: "GH₵",
        features: [
          "All-inclusive expedited driving program",
          "Priority car booking & home pickup options",
          "Fast-track DVLA eye & biometric tests",
          "Full in-traffic test mock drills",
          "Official DVLA driver's license included"
        ],
        popular: false
      },
      {
        id: "pol-no-lic",
        name: "Polishing / Refresher (No License)",
        category: "Refresher",
        duration: "2 - 4 Weeks",
        sessions: "10 Dedicated Practical Hours",
        price: 1800,
        currency: "GH₵",
        features: [
          "Targeted confidence-building on Accra roads",
          "Highway driving (N1 & Motorway)",
          "Reverse, parallel and tight space parking",
          "Overcoming driving anxiety after accidents",
          "Flexible custom scheduling"
        ],
        popular: false
      },
      {
        id: "pol-lic",
        name: "Polishing + Standard License",
        category: "Refresher",
        duration: "2 - 4 Weeks",
        sessions: "10 Practical Hours + License",
        price: 2450,
        currency: "GH₵",
        features: [
          "10 Hours customized refresher lessons",
          "Official DVLA licensing facilitation",
          "Full preparation for the DVLA practical test",
          "DVLA test vehicle accompaniment"
        ],
        popular: false
      }
    ],
    students: [
      {
        id: "stu-reg-no-lic",
        name: "Student Regular (Without License)",
        category: "Student / NSS Special",
        duration: "6 Weeks",
        sessions: "18 Practical Lessons (Flexible around lectures)",
        price: 2100,
        currency: "GH₵",
        discountNote: "Save GH₵ 200 with valid Student/NSS ID",
        features: [
          "Free pickup from TF, Pent & Bani Hostels",
          "Flexible hours around lecture schedules",
          "Manual or Automatic vehicle choices",
          "Comprehensive Highway Code theory",
          "Pay 70% deposit (GH₵ 1,470) to begin"
        ],
        popular: false
      },
      {
        id: "stu-reg-std-lic",
        name: "Student Regular + License",
        category: "Student / NSS Special",
        duration: "6 Weeks",
        sessions: "18 Practical Lessons + DVLA License",
        price: 2750,
        currency: "GH₵",
        discountNote: "Most popular for UG Legon, UPSA & ATU Students",
        features: [
          "Full 6-Week student driving course",
          "Campus pickup & drop-off included",
          "DVLA Biometrics & Theory Test prep",
          "Official Ghanaian Driver's License facilitation",
          "Start with 70% (GH₵ 1,925) deposit"
        ],
        popular: true
      },
      {
        id: "stu-exp-std-lic",
        name: "Student Express + License",
        category: "Student / NSS Special",
        duration: "3 Weeks",
        sessions: "Vacation Intensive + Full License",
        price: 3150,
        currency: "GH₵",
        discountNote: "Perfect during semester breaks",
        features: [
          "Finish entire course in 3 weeks",
          "Intensive everyday driving sessions",
          "Full DVLA license registration & test",
          "Campus pickup from University gates"
        ],
        popular: false
      },
      {
        id: "stu-pol-no-lic",
        name: "Student Refresher / Polishing",
        category: "Student / NSS Special",
        duration: "2 - 3 Weeks",
        sessions: "8 Intensive Refresher Hours",
        price: 1600,
        currency: "GH₵",
        discountNote: "Great for students with rusty driving skills",
        features: [
          "Brush up on Accra traffic navigation",
          "Master hill starts & roundabout etiquette",
          "Parallel parking confidence",
          "Flexible timing"
        ],
        popular: false
      }
    ],
    licenseOnly: [
      {
        id: "lic-facilitation-std",
        name: "Standard License Facilitation",
        category: "Licensing Only",
        duration: "DVLA Standard Timeline",
        sessions: "Registration + Eye Test + Driving Test",
        price: 950,
        currency: "GH₵",
        features: [
          "For already competent drivers needing genuine license",
          "DVLA biometric registration & profile creation",
          "Eye test scheduling & medical clearance guide",
          "Computerized theory test booking & practice app",
          "Pre-test briefing on official DVLA test routes"
        ],
        popular: true
      },
      {
        id: "lic-facilitation-vip",
        name: "Express VIP License Facilitation",
        category: "Licensing Only",
        duration: "Expedited Timeline",
        sessions: "Fast-Track DVLA Process + Mock Test",
        price: 1350,
        currency: "GH₵",
        features: [
          "Fast-track processing at DVLA 37 / Weija / Tema",
          "Includes 2 hours complimentary in-traffic mock test",
          "Driving school car provided for your DVLA practical test",
          "Dedicated officer accompaniment",
          "Instant result verification"
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
