export interface GroomingApp {
  id: string
  name: string
  tagline: string
  description: string
  rating: number
  reviewCount: number
  price: string
  priceType: 'free' | 'freemium' | 'paid'
  platforms: ('ios' | 'android' | 'web')[]
  logo: string
  featured: boolean
  ratings: {
    features: number
    easeOfUse: number
    value: number
    customerSupport: number
  }
  pros: string[]
  cons: string[]
  keyFeatures: string[]
  expertVerdict: string
}

export type SortOption = 'rating' | 'price-low' | 'price-high' | 'popular'
export type PriceFilter = 'all' | 'free' | 'freemium' | 'paid'
export type PlatformFilter = 'all' | 'ios' | 'android' | 'web'
