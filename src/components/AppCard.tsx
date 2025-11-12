import { GroomingApp } from '@/lib/types'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { StarRating, PlatformBadge, PriceBadge } from './RatingComponents'
import { motion } from 'framer-motion'

interface AppCardProps {
  app: GroomingApp
  onViewDetails: (app: GroomingApp) => void
}

export function AppCard({ app, onViewDetails }: AppCardProps) {
  return (
    <Card className="h-full flex flex-col p-6 hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20 relative overflow-hidden group">
      {app.featured && (
        <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground font-semibold">
          Featured
        </Badge>
      )}
      
      <div className="flex items-start gap-4 mb-4">
        <div className="text-5xl group-hover:scale-110 transition-transform duration-300">{app.logo}</div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-foreground mb-1">{app.name}</h3>
          <p className="text-sm text-muted-foreground">{app.tagline}</p>
        </div>
      </div>

      <div className="flex items-center gap-3 mb-4">
        <StarRating rating={app.rating} size="sm" />
        <span className="text-xs text-muted-foreground">({app.reviewCount.toLocaleString()} reviews)</span>
      </div>

      <p className="text-sm text-foreground/80 mb-4 flex-1 line-clamp-3">
        {app.description}
      </p>

      <div className="flex items-center justify-between mb-4 pt-4 border-t border-border">
        <PriceBadge price={app.price} priceType={app.priceType} />
        <PlatformBadge platforms={app.platforms} />
      </div>

      <Button 
        onClick={() => onViewDetails(app)}
        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
      >
        View Details
      </Button>
    </Card>
  )
}
