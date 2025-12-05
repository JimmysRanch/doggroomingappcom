import { GroomingApp } from '@/lib/types'
import { useComparison } from '@/lib/ComparisonContext'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { StarRating, PlatformBadge, PriceBadge } from './RatingComponents'
import { Scales } from '@phosphor-icons/react'
import { toast } from 'sonner'

interface AppCardProps {
  app: GroomingApp
  onViewDetails: (app: GroomingApp) => void
}

export function AppCard({ app, onViewDetails }: AppCardProps) {
  const { addToComparison, isInComparison, canAddMore } = useComparison()

  const handleAddToCompare = () => {
    if (isInComparison(app.id)) {
      toast.info('Already in comparison', {
        description: `${app.name} is already selected for comparison.`
      })
      return
    }

    const added = addToComparison(app)
    if (added) {
      toast.success('Added to comparison', {
        description: `${app.name} added. Scroll down to see the comparison.`
      })
      setTimeout(() => {
        document.getElementById('compare')?.scrollIntoView({ behavior: 'smooth' })
      }, 500)
    } else {
      toast.error('Comparison full', {
        description: 'You can only compare up to 3 apps at once.'
      })
    }
  }

  const inComparison = isInComparison(app.id)

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

      <div className="grid grid-cols-2 gap-2">
        <Button 
          onClick={handleAddToCompare}
          variant={inComparison ? "secondary" : "outline"}
          disabled={inComparison || !canAddMore}
          className="flex items-center gap-2"
        >
          <Scales className="w-4 h-4" />
          {inComparison ? 'Added' : 'Compare'}
        </Button>
        <Button 
          onClick={() => onViewDetails(app)}
          className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
        >
          View Details
        </Button>
      </div>
    </Card>
  )
}
