import { GroomingApp } from './types'

export const groomingApps: GroomingApp[] = [
  {
    id: '1',
    name: 'PawPerfect Pro',
    tagline: 'Professional grooming appointments made simple',
    description: 'PawPerfect Pro connects you with certified groomers in your area, offering real-time booking, grooming history tracking, and personalized care recommendations for your dog.',
    rating: 4.8,
    reviewCount: 12847,
    price: '$12.99/mo',
    priceType: 'paid',
    platforms: ['ios', 'android'],
    logo: '🐕',
    featured: true,
    ratings: {
      features: 4.9,
      easeOfUse: 4.7,
      value: 4.6,
      customerSupport: 5.0
    },
    pros: [
      'Excellent groomer verification system',
      'Real-time appointment tracking',
      'Comprehensive grooming history',
      'Outstanding customer support'
    ],
    cons: [
      'Premium pricing may not suit all budgets',
      'Limited availability in rural areas'
    ],
    keyFeatures: [
      'Certified groomer network',
      'Real-time booking & tracking',
      'Photo timeline of grooming sessions',
      'Breed-specific care tips',
      'Vaccination reminder system',
      '24/7 customer support'
    ],
    expertVerdict: 'PawPerfect Pro sets the gold standard for dog grooming apps with its robust verification system and exceptional user experience. While the premium price point may deter budget-conscious users, the quality of service and peace of mind it provides make it our top recommendation for serious pet owners.'
  },
  {
    id: '2',
    name: 'GroomBuddy',
    tagline: 'Your friendly neighborhood grooming assistant',
    description: 'GroomBuddy makes finding local groomers easy with community reviews, competitive pricing, and a simple booking interface perfect for busy pet owners.',
    rating: 4.5,
    reviewCount: 8234,
    price: 'Free',
    priceType: 'freemium',
    platforms: ['ios', 'android', 'web'],
    logo: '✂️',
    featured: false,
    ratings: {
      features: 4.4,
      easeOfUse: 4.8,
      value: 4.9,
      customerSupport: 4.0
    },
    pros: [
      'Completely free basic version',
      'Intuitive user interface',
      'Strong community reviews',
      'Works across all platforms'
    ],
    cons: [
      'Premium features locked behind paywall',
      'Smaller groomer network than competitors',
      'Customer support can be slow'
    ],
    keyFeatures: [
      'Community-driven reviews',
      'Price comparison tool',
      'Basic booking system',
      'Grooming reminders',
      'Photo sharing',
      'Mobile & web access'
    ],
    expertVerdict: 'GroomBuddy offers exceptional value with its free tier, making it ideal for casual pet owners or those new to grooming services. The interface is wonderfully simple, though power users may find the feature set limiting compared to premium alternatives.'
  },
  {
    id: '3',
    name: 'K9 Concierge',
    tagline: 'Luxury grooming at your fingertips',
    description: 'K9 Concierge caters to discerning pet owners seeking premium grooming experiences with high-end salons, spa services, and white-glove customer care.',
    rating: 4.7,
    reviewCount: 5621,
    price: '$24.99/mo',
    priceType: 'paid',
    platforms: ['ios'],
    logo: '👑',
    featured: true,
    ratings: {
      features: 4.8,
      easeOfUse: 4.5,
      value: 4.3,
      customerSupport: 5.0
    },
    pros: [
      'Access to premium grooming salons',
      'Luxury spa services included',
      'Concierge-level customer service',
      'Beautiful, polished interface'
    ],
    cons: [
      'Very expensive monthly subscription',
      'iOS only - no Android support',
      'Limited to major metropolitan areas'
    ],
    keyFeatures: [
      'Premium salon network',
      'Spa & wellness services',
      'Pickup & delivery options',
      'Grooming concierge service',
      'Breed show preparation',
      'Priority booking'
    ],
    expertVerdict: 'K9 Concierge is unapologetically premium, targeting pet owners who demand the absolute best for their companions. If you live in a major city and budget is not a constraint, this app provides an unparalleled grooming experience. For everyone else, the price and limited availability make it hard to recommend.'
  },
  {
    id: '4',
    name: 'WagWash',
    tagline: 'Mobile grooming that comes to you',
    description: 'WagWash specializes in connecting pet owners with mobile grooming services, bringing professional care right to your driveway with fully-equipped vans.',
    rating: 4.6,
    reviewCount: 9456,
    price: '$8.99/mo',
    priceType: 'paid',
    platforms: ['ios', 'android'],
    logo: '🚐',
    featured: false,
    ratings: {
      features: 4.5,
      easeOfUse: 4.7,
      value: 4.7,
      customerSupport: 4.5
    },
    pros: [
      'Mobile grooming convenience',
      'Competitive pricing',
      'Real-time GPS tracking',
      'Excellent for anxious dogs'
    ],
    cons: [
      'Service availability varies by region',
      'Scheduling can be less flexible',
      'Premium mobile services cost extra'
    ],
    keyFeatures: [
      'Mobile groomer network',
      'GPS van tracking',
      'Home service scheduling',
      'Anxiety-friendly options',
      'Package discounts',
      'Service history tracking'
    ],
    expertVerdict: 'WagWash fills a crucial niche for mobile grooming services with impressive execution. The convenience of at-home grooming combined with reasonable pricing makes it an excellent choice for busy professionals or owners of anxious pets. Availability can be spotty outside major markets.'
  },
  {
    id: '5',
    name: 'FurFresh',
    tagline: 'DIY grooming made easy',
    description: 'FurFresh empowers dog owners to groom at home with step-by-step video tutorials, product recommendations, and a supportive community of DIY groomers.',
    rating: 4.3,
    reviewCount: 6789,
    price: 'Free',
    priceType: 'free',
    platforms: ['ios', 'android', 'web'],
    logo: '🎥',
    featured: false,
    ratings: {
      features: 4.2,
      easeOfUse: 4.6,
      value: 5.0,
      customerSupport: 3.8
    },
    pros: [
      'Completely free forever',
      'Extensive video tutorial library',
      'Active community support',
      'Great product recommendations'
    ],
    cons: [
      'Not suitable for complex grooming needs',
      'Requires time and effort to learn',
      'Limited professional guidance'
    ],
    keyFeatures: [
      'HD video tutorials',
      'Breed-specific guides',
      'Product recommendations',
      'Community forums',
      'Progress tracking',
      'Tool & supply guides'
    ],
    expertVerdict: 'FurFresh is perfect for hands-on pet owners who enjoy the bonding experience of grooming their own dogs. The completely free model and comprehensive tutorials make it unbeatable for basic maintenance grooming. However, complex breeds or show preparation will still require professional services.'
  },
  {
    id: '6',
    name: 'GroomNow',
    tagline: 'Last-minute grooming appointments',
    description: 'GroomNow specializes in same-day and emergency grooming bookings, connecting you with available groomers who have open slots right now.',
    rating: 4.4,
    reviewCount: 4532,
    price: 'Free',
    priceType: 'freemium',
    platforms: ['ios', 'android'],
    logo: '⚡',
    featured: false,
    ratings: {
      features: 4.3,
      easeOfUse: 4.7,
      value: 4.5,
      customerSupport: 4.2
    },
    pros: [
      'Excellent for last-minute needs',
      'Often discounted same-day rates',
      'Quick booking process',
      'Growing groomer network'
    ],
    cons: [
      'Limited advance booking options',
      'Quality can vary with urgent bookings',
      'Fewer premium groomers available'
    ],
    keyFeatures: [
      'Same-day booking',
      'Real-time availability',
      'Instant notifications',
      'Emergency grooming SOS',
      'Discount deals',
      'Quick-service filters'
    ],
    expertVerdict: 'GroomNow excels in its specific niche of urgent and last-minute grooming needs. If you find yourself in a pinch before an event or trip, this app can be a lifesaver. For regular grooming maintenance, other apps with better advance planning features may be more suitable.'
  }
]
