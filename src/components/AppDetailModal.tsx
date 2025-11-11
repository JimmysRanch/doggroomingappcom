import { GroomingApp } from '@/lib/types'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import { StarRating, RatingBar, PlatformBadge, PriceBadge } from './RatingComponents'
import { CheckCircle, XCircle } from '@phosphor-icons/react'

interface AppDetailModalProps {
  app: GroomingApp | null
  open: boolean
  onClose: () => void
}

export function AppDetailModal({ app, open, onClose }: AppDetailModalProps) {
  if (!app) return null

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh]">
        <DialogHeader>
          <div className="flex items-start gap-4">
            <div className="text-6xl">{app.logo}</div>
            <div className="flex-1">
              <DialogTitle className="text-3xl font-bold text-foreground mb-2">{app.name}</DialogTitle>
              <p className="text-muted-foreground text-base">{app.tagline}</p>
            </div>
          </div>
        </DialogHeader>

        <ScrollArea className="max-h-[60vh] pr-4">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <StarRating rating={app.rating} size="lg" />
              <span className="text-sm text-muted-foreground">
                Based on {app.reviewCount.toLocaleString()} reviews
              </span>
            </div>

            <div className="flex items-center gap-4">
              <PriceBadge price={app.price} priceType={app.priceType} />
              <PlatformBadge platforms={app.platforms} />
            </div>

            <Separator />

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Overview</h3>
              <p className="text-foreground/80 leading-relaxed">{app.description}</p>
            </div>

            <Separator />

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Rating Breakdown</h3>
              <div className="space-y-3">
                <RatingBar label="Features" value={app.ratings.features} />
                <RatingBar label="Ease of Use" value={app.ratings.easeOfUse} />
                <RatingBar label="Value" value={app.ratings.value} />
                <RatingBar label="Support" value={app.ratings.customerSupport} />
              </div>
            </div>

            <Separator />

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Key Features</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {app.keyFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-foreground/80">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" weight="fill" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Separator />

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
                  <CheckCircle className="w-6 h-6 text-green-600" weight="fill" />
                  Pros
                </h3>
                <ul className="space-y-2">
                  {app.pros.map((pro, index) => (
                    <li key={index} className="text-sm text-foreground/80 pl-4 border-l-2 border-green-600">
                      {pro}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
                  <XCircle className="w-6 h-6 text-red-600" weight="fill" />
                  Cons
                </h3>
                <ul className="space-y-2">
                  {app.cons.map((con, index) => (
                    <li key={index} className="text-sm text-foreground/80 pl-4 border-l-2 border-red-600">
                      {con}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <Separator />

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Expert Verdict</h3>
              <div className="bg-muted/50 p-4 rounded-lg border-l-4 border-primary">
                <p className="text-foreground/90 leading-relaxed italic">{app.expertVerdict}</p>
              </div>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}
