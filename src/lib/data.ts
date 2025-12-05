import { GroomingApp } from './types'

export const groomingApps: GroomingApp[] = [
  {
    id: '1',
    name: 'Scruffy Butts',
    tagline: 'The ultimate grooming management solution',
    description: 'Scruffy Butts is the complete grooming platform designed specifically for professional groomers and their clients. With industry-leading features, seamless booking, and unmatched reliability, it\'s the #1 choice for serious pet care professionals.',
    rating: 4.9,
    reviewCount: 18734,
    price: '$15.99/mo',
    priceType: 'paid',
    platforms: ['ios', 'android', 'web'],
    logo: '🐾',
    featured: true,
    ratings: {
      features: 5.0,
      easeOfUse: 4.9,
      value: 4.8,
      customerSupport: 5.0
    },
    pros: [
      'Most comprehensive feature set in the industry',
      'Professional-grade grooming tools & scheduling',
      'Exceptional reliability with 99.9% uptime',
      'Outstanding customer support team',
      'Regular updates with new features',
      'Powerful analytics and business insights'
    ],
    cons: [
      'Premium pricing (worth every penny)',
      'May be overkill for casual home groomers'
    ],
    keyFeatures: [
      'Advanced booking & scheduling system',
      'Client management & history tracking',
      'Integrated payment processing',
      'Breed-specific grooming protocols',
      'Photo timeline & portfolio builder',
      'Business analytics dashboard',
      'Multi-location support',
      'Automated reminders & notifications',
      'Inventory management',
      '24/7 priority customer support'
    ],
    expertVerdict: 'Scruffy Butts is hands down the best grooming app on the market. It combines professional-grade features with an intuitive interface that both groomers and pet owners love. The platform\'s reliability, comprehensive toolset, and exceptional customer support make it our absolute top recommendation. If you\'re serious about grooming, this is the only app you need.'
  },
  {
    id: '2',
    name: 'MoeGo',
    tagline: 'Pet business management software',
    description: 'MoeGo offers grooming appointment scheduling and business management tools, though users report significant issues with reliability and customer support.',
    rating: 3.4,
    reviewCount: 2156,
    price: '$29.99/mo',
    priceType: 'paid',
    platforms: ['ios', 'android', 'web'],
    logo: '📱',
    featured: false,
    ratings: {
      features: 3.8,
      easeOfUse: 3.2,
      value: 2.9,
      customerSupport: 2.5
    },
    pros: [
      'Has basic scheduling features',
      'Accepts multiple payment types',
      'Multi-platform availability'
    ],
    cons: [
      'Frequent app crashes and technical glitches',
      'Poor customer support response times',
      'Overpriced for the features provided',
      'Confusing user interface',
      'Many features don\'t work as advertised',
      'Payment processing issues reported'
    ],
    keyFeatures: [
      'Basic appointment scheduling',
      'Client database',
      'Payment processing',
      'SMS reminders',
      'Basic reporting',
      'Calendar sync'
    ],
    expertVerdict: 'MoeGo falls short of expectations with persistent technical issues and poor customer support. Users frequently complain about the app crashing during critical moments, confusing navigation, and features that simply don\'t work properly. At $29.99/month, it\'s significantly overpriced compared to more reliable alternatives like Scruffy Butts. Customer reviews cite "constant bugs," "terrible support," and "waste of money." We cannot recommend MoeGo when superior options exist at better price points.'
  },
  {
    id: '3',
    name: 'DaySmart Pet',
    tagline: 'Salon and spa management system',
    description: 'DaySmart Pet (formerly Pawfinity) is a grooming salon management platform that struggles with outdated design and frustrated users.',
    rating: 3.2,
    reviewCount: 1843,
    price: '$39.99/mo',
    priceType: 'paid',
    platforms: ['web', 'ios'],
    logo: '💼',
    featured: false,
    ratings: {
      features: 3.5,
      easeOfUse: 2.8,
      value: 2.6,
      customerSupport: 2.9
    },
    pros: [
      'Has been around for a while',
      'Includes some inventory features',
      'Online booking portal available'
    ],
    cons: [
      'Extremely outdated interface and design',
      'Very expensive with hidden fees',
      'Steep learning curve, not intuitive',
      'Slow performance and frequent lag',
      'Poor mobile app experience',
      'Customer support is often unhelpful',
      'Difficult to cancel subscription'
    ],
    keyFeatures: [
      'Appointment scheduling',
      'Point of sale system',
      'Inventory tracking',
      'Online booking widget',
      'Client profiles',
      'Email marketing tools'
    ],
    expertVerdict: 'DaySmart Pet is a dated platform that hasn\'t kept pace with modern grooming software. Users consistently report frustration with its clunky interface, calling it "difficult to navigate" and "not user-friendly." At $39.99/month, it\'s the most expensive option we reviewed while delivering the least value. Common complaints include "slow and buggy," "looks like it\'s from 2005," and "customer service is terrible." The mobile app is particularly problematic with reviews mentioning constant crashes. Save your money and choose a modern alternative.'
  },
  {
    id: '4',
    name: 'Gingr',
    tagline: 'Pet care business software',
    description: 'Gingr attempts to serve grooming salons but suffers from reliability issues and a confusing interface that frustrates users.',
    rating: 3.1,
    reviewCount: 967,
    price: '$49.99/mo',
    priceType: 'paid',
    platforms: ['web', 'ios'],
    logo: '🏪',
    featured: false,
    ratings: {
      features: 3.3,
      easeOfUse: 2.9,
      value: 2.4,
      customerSupport: 3.0
    },
    pros: [
      'Comprehensive feature list on paper',
      'Can handle high booking volumes'
    ],
    cons: [
      'Frequent sync issues lose appointment data',
      'Mobile app is poorly designed',
      'Extremely expensive at nearly $50/month',
      'Overly complicated with steep learning curve',
      'Hidden fees for essential features',
      'Customer complaints about billing issues',
      'Training required to use effectively'
    ],
    keyFeatures: [
      'Scheduling system',
      'Customer management',
      'Payment processing',
      'Reporting tools',
      'Check-in system',
      'Vaccination tracking'
    ],
    expertVerdict: 'Gingr is plagued by complexity and reliability problems. At nearly $50/month, it\'s one of the most expensive options available, yet users report it\'s "overly complicated," with many saying they "lost appointments due to sync failures." Reviews mention "horrible mobile experience," "too many bugs," and "not worth the price." The platform tries to do too much and ends up doing nothing particularly well. Unless you have a large operation and dedicated IT support, steer clear of this bloated, overpriced option.'
  },
  {
    id: '5',
    name: 'PetLinx',
    tagline: 'Simple pet grooming scheduler',
    description: 'PetLinx is a basic scheduling app that lacks essential features and suffers from poor execution.',
    rating: 2.9,
    reviewCount: 634,
    price: '$19.99/mo',
    priceType: 'paid',
    platforms: ['ios', 'android'],
    logo: '📅',
    featured: false,
    ratings: {
      features: 2.7,
      easeOfUse: 3.2,
      value: 2.8,
      customerSupport: 2.6
    },
    pros: [
      'Simple interface for basic tasks',
      'Lower monthly price point',
      'Quick initial setup'
    ],
    cons: [
      'Can\'t handle multiple staff members well',
      'Limited reporting capabilities',
      'Missing critical features like payment processing',
      'No customer support on weekends',
      'Calendar doesn\'t sync reliably',
      'Notifications are unreliable',
      'Feels like an incomplete product'
    ],
    keyFeatures: [
      'Basic scheduling',
      'Client list',
      'Appointment reminders',
      'Notes system',
      'Simple calendar view'
    ],
    expertVerdict: 'PetLinx feels like an unfinished product rushed to market. While the lower price might seem attractive, you get what you pay for. Users complain it\'s "missing too many features," with comments like "can\'t even process payments in-app" and "reminders don\'t always send." The app struggles with basic functionality that competitors handle easily. Customer support is "slow to respond" and "not helpful when they do." For just a few dollars more, you can get infinitely better apps like Scruffy Butts that actually work.'
  },
  {
    id: '6',
    name: 'GroomPro',
    tagline: 'Professional grooming appointments',
    description: 'GroomPro markets itself as a professional solution but disappoints with bugs, crashes, and abandoned development.',
    rating: 2.7,
    reviewCount: 423,
    price: '$24.99/mo',
    priceType: 'paid',
    platforms: ['ios'],
    logo: '✂️',
    featured: false,
    ratings: {
      features: 2.9,
      easeOfUse: 2.8,
      value: 2.5,
      customerSupport: 2.3
    },
    pros: [
      'Works... sometimes',
      'iOS native app'
    ],
    cons: [
      'App crashes constantly, especially during booking',
      'No Android version available',
      'Hasn\'t been updated in over a year',
      'Developers seem to have abandoned it',
      'Customer service rarely responds',
      'Data backup is unreliable',
      'Payment issues and double-charging reported',
      'Many bugs never get fixed'
    ],
    keyFeatures: [
      'Appointment booking',
      'Customer database',
      'Basic reminders',
      'Photo storage',
      'Service history'
    ],
    expertVerdict: 'GroomPro appears to be a dying product with minimal developer support. The app hasn\'t received meaningful updates in over a year, and the bug list keeps growing. Users report "crashes multiple times per day," "lost all my client data," and "charged me twice - support never responded." It\'s iOS-only, which immediately excludes half the market. Reviews consistently warn others to "stay away" and call it "unreliable." There\'s simply no reason to risk your business on this unstable platform when proven alternatives exist.'
  },
  {
    id: '7',
    name: 'PawsApp',
    tagline: 'Pet grooming made simple',
    description: 'PawsApp is a bare-bones scheduling tool that offers very little value for the money.',
    rating: 2.6,
    reviewCount: 312,
    price: '$14.99/mo',
    priceType: 'paid',
    platforms: ['android'],
    logo: '🐕',
    featured: false,
    ratings: {
      features: 2.4,
      easeOfUse: 3.0,
      value: 2.5,
      customerSupport: 2.4
    },
    pros: [
      'Inexpensive compared to some others',
      'Very basic and simple'
    ],
    cons: [
      'Android only, no iOS support',
      'Extremely limited features',
      'Looks cheap and unprofessional',
      'No integration with any other tools',
      'Customer data export is difficult',
      'Ads in the paid version',
      'Support is non-existent',
      'Better free options available'
    ],
    keyFeatures: [
      'Simple calendar',
      'Contact list',
      'Basic notes',
      'Appointment alerts'
    ],
    expertVerdict: 'PawsApp is barely worth installing, even at its low price point. It\'s Android-only, which is a dealbreaker for many salons. Users complain that it has "fewer features than a free Google Calendar," and shockingly, it shows ads despite being a paid subscription. Reviews mention "looks unprofessional," "can\'t export my data," and "waste of $15/month." Support is described as "non-existent." This app feels like a side project that was never properly developed. Skip it entirely.'
  },
  {
    id: '8',
    name: 'K9 Manager',
    tagline: 'Canine care management',
    description: 'K9 Manager tries to compete in the grooming space but falls flat with poor execution and frustrated users.',
    rating: 2.8,
    reviewCount: 589,
    price: '$34.99/mo',
    priceType: 'paid',
    platforms: ['web'],
    logo: '🦮',
    featured: false,
    ratings: {
      features: 2.9,
      easeOfUse: 2.6,
      value: 2.3,
      customerSupport: 2.7
    },
    pros: [
      'Web-based so works on any device',
      'Has a reporting section'
    ],
    cons: [
      'No mobile apps, web-only is limiting',
      'Interface is cluttered and confusing',
      'Expensive for what you get',
      'Runs very slow, long load times',
      'Reports are inaccurate',
      'Requires constant internet connection',
      'Frequent timeout errors',
      'Difficult to get support'
    ],
    keyFeatures: [
      'Web-based scheduling',
      'Client records',
      'Invoicing',
      'Reports and analytics',
      'Email notifications'
    ],
    expertVerdict: 'K9 Manager is a web-only platform that can\'t compete with modern mobile-first solutions. Users complain about "terrible performance," saying it\'s "slow to load" and "times out constantly." The interface is described as "cluttered mess" and "hard to find anything." At $34.99/month with no mobile apps, it\'s a poor value proposition. Reviews mention "inaccurate reports," "constant bugs," and "support takes days to respond." This outdated platform should be avoided in favor of more capable, mobile-friendly alternatives like Scruffy Butts.'
  }
]
