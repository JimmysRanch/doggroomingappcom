import { GroomingApp } from '@/lib/types'

interface RatingBarProps {
  label: string
  value: number
  maxValue?: number
}

export function RatingBar({ label, value, maxValue = 5 }: RatingBarProps) {
  const percentage = (value / maxValue) * 100

  return (
    <div className="flex items-center gap-3">
      <span className="text-sm font-medium text-muted-foreground w-32">{label}</span>
      <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
        <div 
          className="h-full bg-accent rounded-full transition-all duration-500"
          style={{ width: `${percentage}%` }}
        />
      </div>
      <span className="text-sm font-bold text-foreground w-8 text-right">{value.toFixed(1)}</span>
    </div>
  )
}

interface StarRatingProps {
  rating: number
  maxRating?: number
  size?: 'sm' | 'md' | 'lg'
  showNumber?: boolean
}

export function StarRating({ rating, maxRating = 5, size = 'md', showNumber = true }: StarRatingProps) {
  const sizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-xl'
  }

  const stars = Array.from({ length: maxRating }, (_, i) => {
    const starValue = i + 1
    const filled = rating >= starValue
    const partial = rating > i && rating < starValue
    
    return (
      <span key={i} className="relative">
        {partial ? (
          <>
            <span className="text-muted-foreground">★</span>
            <span 
              className="absolute inset-0 overflow-hidden text-accent"
              style={{ width: `${(rating - i) * 100}%` }}
            >
              ★
            </span>
          </>
        ) : (
          <span className={filled ? 'text-accent' : 'text-muted-foreground'}>★</span>
        )}
      </span>
    )
  })

  return (
    <div className="flex items-center gap-2">
      <div className={`flex ${sizeClasses[size]}`}>
        {stars}
      </div>
      {showNumber && (
        <span className="text-sm font-bold text-foreground">{rating.toFixed(1)}</span>
      )}
    </div>
  )
}

interface PlatformBadgeProps {
  platforms: ('ios' | 'android' | 'web')[]
}

export function PlatformBadge({ platforms }: PlatformBadgeProps) {
  const icons = {
    ios: '📱',
    android: '🤖',
    web: '🌐'
  }

  return (
    <div className="flex gap-1">
      {platforms.map((platform) => (
        <span key={platform} className="text-sm" title={platform.toUpperCase()}>
          {icons[platform]}
        </span>
      ))}
    </div>
  )
}

interface PriceBadgeProps {
  price: string
  priceType: 'free' | 'freemium' | 'paid'
}

export function PriceBadge({ price, priceType }: PriceBadgeProps) {
  const colors = {
    free: 'bg-green-100 text-green-800 border-green-200',
    freemium: 'bg-blue-100 text-blue-800 border-blue-200',
    paid: 'bg-purple-100 text-purple-800 border-purple-200'
  }

  return (
    <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${colors[priceType]}`}>
      {price}
    </span>
  )
}
