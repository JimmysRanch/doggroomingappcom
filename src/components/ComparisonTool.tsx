import { GroomingApp } from '@/lib/types'
import { groomingApps } from '@/lib/data'
import { useComparison } from '@/lib/ComparisonContext'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { StarRating, PlatformBadge, PriceBadge } from './RatingComponents'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { X, Check, CheckCircle, XCircle } from '@phosphor-icons/react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'

export function ComparisonTool() {
  const { selectedApps, setAppAtIndex, removeFromComparison } = useComparison()

  const handleSelectApp = (index: number, appId: string) => {
    const app = groomingApps.find(a => a.id === appId) || null
    setAppAtIndex(index, app)
  }

  const handleRemoveApp = (index: number) => {
    removeFromComparison(index)
  }

  const availableAppsForSlot = (currentIndex: number) => {
    const selectedIds = selectedApps
      .map((app, idx) => idx !== currentIndex ? app?.id : null)
      .filter(Boolean)
    return groomingApps.filter(app => !selectedIds.includes(app.id))
  }

  const allFeatures = Array.from(
    new Set(
      selectedApps
        .filter((app): app is GroomingApp => app !== null)
        .flatMap(app => app.keyFeatures)
    )
  )

  const hasFeature = (app: GroomingApp | null, feature: string) => {
    return app?.keyFeatures.includes(feature) || false
  }

  const selectedCount = selectedApps.filter(app => app !== null).length

  return (
    <div className="w-full py-16 bg-gradient-to-br from-muted/30 to-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Compare Apps Side-by-Side
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Select up to 3 apps to compare their features, pricing, and ratings in detail
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className={cn(
                "p-6 border-2 transition-all duration-300",
                selectedApps[index] ? "border-primary/40" : "border-border"
              )}>
                {selectedApps[index] ? (
                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="text-4xl">{selectedApps[index]!.logo}</div>
                        <div>
                          <h3 className="font-semibold text-lg">{selectedApps[index]!.name}</h3>
                          <p className="text-xs text-muted-foreground">{selectedApps[index]!.tagline}</p>
                        </div>
                      </div>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => handleRemoveApp(index)}
                        className="h-8 w-8 p-0"
                      >
                        <X className="w-4 h-4" />
                      </Button>
                    </div>
                    
                    {selectedApps[index]!.featured && (
                      <Badge className="bg-accent text-accent-foreground">
                        Our Top Pick
                      </Badge>
                    )}
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="text-center py-8">
                      <p className="text-muted-foreground mb-4">Select an app to compare</p>
                      <Select onValueChange={(value) => handleSelectApp(index, value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Choose app..." />
                        </SelectTrigger>
                        <SelectContent>
                          {availableAppsForSlot(index).map(app => (
                            <SelectItem key={app.id} value={app.id}>
                              <div className="flex items-center gap-2">
                                <span>{app.logo}</span>
                                <span>{app.name}</span>
                              </div>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                )}
              </Card>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedCount >= 2 && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border bg-muted/50">
                        <th className="text-left p-4 font-semibold text-foreground sticky left-0 bg-muted/50 z-10">
                          Comparison
                        </th>
                        {selectedApps.map((app, index) => (
                          app && (
                            <th key={index} className="p-4 text-center min-w-[250px]">
                              <div className="flex flex-col items-center gap-2">
                                <div className="text-3xl">{app.logo}</div>
                                <div className="font-bold text-foreground">{app.name}</div>
                              </div>
                            </th>
                          )
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-border hover:bg-muted/20 transition-colors">
                        <td className="p-4 font-medium sticky left-0 bg-background z-10">Overall Rating</td>
                        {selectedApps.map((app, index) => (
                          app && (
                            <td key={index} className="p-4 text-center">
                              <div className="flex flex-col items-center gap-1">
                                <StarRating rating={app.rating} size="sm" />
                                <span className="text-sm text-muted-foreground">
                                  {app.rating}/5.0 ({app.reviewCount.toLocaleString()} reviews)
                                </span>
                              </div>
                            </td>
                          )
                        ))}
                      </tr>

                      <tr className="border-b border-border hover:bg-muted/20 transition-colors">
                        <td className="p-4 font-medium sticky left-0 bg-background z-10">Price</td>
                        {selectedApps.map((app, index) => (
                          app && (
                            <td key={index} className="p-4 text-center">
                              <div className="flex justify-center">
                                <PriceBadge price={app.price} priceType={app.priceType} />
                              </div>
                            </td>
                          )
                        ))}
                      </tr>

                      <tr className="border-b border-border hover:bg-muted/20 transition-colors">
                        <td className="p-4 font-medium sticky left-0 bg-background z-10">Platforms</td>
                        {selectedApps.map((app, index) => (
                          app && (
                            <td key={index} className="p-4 text-center">
                              <div className="flex justify-center">
                                <PlatformBadge platforms={app.platforms} />
                              </div>
                            </td>
                          )
                        ))}
                      </tr>

                      <tr className="border-b border-border hover:bg-muted/20 transition-colors">
                        <td className="p-4 font-medium sticky left-0 bg-background z-10">Features Score</td>
                        {selectedApps.map((app, index) => (
                          app && (
                            <td key={index} className="p-4 text-center">
                              <div className="flex flex-col items-center gap-1">
                                <span className="text-2xl font-bold text-foreground">{app.ratings.features}</span>
                                <span className="text-xs text-muted-foreground">out of 5</span>
                              </div>
                            </td>
                          )
                        ))}
                      </tr>

                      <tr className="border-b border-border hover:bg-muted/20 transition-colors">
                        <td className="p-4 font-medium sticky left-0 bg-background z-10">Ease of Use</td>
                        {selectedApps.map((app, index) => (
                          app && (
                            <td key={index} className="p-4 text-center">
                              <div className="flex flex-col items-center gap-1">
                                <span className="text-2xl font-bold text-foreground">{app.ratings.easeOfUse}</span>
                                <span className="text-xs text-muted-foreground">out of 5</span>
                              </div>
                            </td>
                          )
                        ))}
                      </tr>

                      <tr className="border-b border-border hover:bg-muted/20 transition-colors">
                        <td className="p-4 font-medium sticky left-0 bg-background z-10">Value for Money</td>
                        {selectedApps.map((app, index) => (
                          app && (
                            <td key={index} className="p-4 text-center">
                              <div className="flex flex-col items-center gap-1">
                                <span className="text-2xl font-bold text-foreground">{app.ratings.value}</span>
                                <span className="text-xs text-muted-foreground">out of 5</span>
                              </div>
                            </td>
                          )
                        ))}
                      </tr>

                      <tr className="border-b border-border hover:bg-muted/20 transition-colors">
                        <td className="p-4 font-medium sticky left-0 bg-background z-10">Customer Support</td>
                        {selectedApps.map((app, index) => (
                          app && (
                            <td key={index} className="p-4 text-center">
                              <div className="flex flex-col items-center gap-1">
                                <span className="text-2xl font-bold text-foreground">{app.ratings.customerSupport}</span>
                                <span className="text-xs text-muted-foreground">out of 5</span>
                              </div>
                            </td>
                          )
                        ))}
                      </tr>

                      {allFeatures.length > 0 && (
                        <>
                          <tr className="bg-muted/30">
                            <td colSpan={selectedCount + 1} className="p-4 font-bold text-foreground sticky left-0 z-10">
                              Features Comparison
                            </td>
                          </tr>
                          {allFeatures.map((feature, featureIndex) => (
                            <tr key={featureIndex} className="border-b border-border hover:bg-muted/20 transition-colors">
                              <td className="p-4 text-sm sticky left-0 bg-background z-10">{feature}</td>
                              {selectedApps.map((app, appIndex) => (
                                app && (
                                  <td key={appIndex} className="p-4 text-center">
                                    {hasFeature(app, feature) ? (
                                      <CheckCircle className="w-6 h-6 text-green-600 mx-auto" weight="fill" />
                                    ) : (
                                      <XCircle className="w-6 h-6 text-muted-foreground/30 mx-auto" weight="fill" />
                                    )}
                                  </td>
                                )
                              ))}
                            </tr>
                          ))}
                        </>
                      )}

                      <tr className="bg-muted/30">
                        <td colSpan={selectedCount + 1} className="p-4 font-bold text-foreground sticky left-0 z-10">
                          Pros & Cons
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="p-4 font-medium sticky left-0 bg-background z-10">Pros</td>
                        {selectedApps.map((app, index) => (
                          app && (
                            <td key={index} className="p-4 align-top">
                              <ul className="space-y-2 text-sm">
                                {app.pros.slice(0, 3).map((pro, proIndex) => (
                                  <li key={proIndex} className="flex items-start gap-2">
                                    <Check className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" weight="bold" />
                                    <span>{pro}</span>
                                  </li>
                                ))}
                              </ul>
                            </td>
                          )
                        ))}
                      </tr>
                      <tr className="border-b border-border">
                        <td className="p-4 font-medium sticky left-0 bg-background z-10">Cons</td>
                        {selectedApps.map((app, index) => (
                          app && (
                            <td key={index} className="p-4 align-top">
                              <ul className="space-y-2 text-sm">
                                {app.cons.slice(0, 3).map((con, conIndex) => (
                                  <li key={conIndex} className="flex items-start gap-2">
                                    <X className="w-4 h-4 text-destructive flex-shrink-0 mt-0.5" weight="bold" />
                                    <span>{con}</span>
                                  </li>
                                ))}
                              </ul>
                            </td>
                          )
                        ))}
                      </tr>

                      <tr className="bg-muted/30">
                        <td colSpan={selectedCount + 1} className="p-4 font-bold text-foreground sticky left-0 z-10">
                          Expert Verdict
                        </td>
                      </tr>
                      <tr>
                        <td className="p-4 font-medium sticky left-0 bg-background z-10">Our Recommendation</td>
                        {selectedApps.map((app, index) => (
                          app && (
                            <td key={index} className="p-4 align-top">
                              <p className="text-sm text-foreground/80 leading-relaxed">
                                {app.expertVerdict}
                              </p>
                            </td>
                          )
                        ))}
                      </tr>
                    </tbody>
                  </table>
                </div>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>

        {selectedCount < 2 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              Select at least 2 apps to view the comparison table
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
