import { useState, useMemo } from 'react'
import { useKV } from '@github/spark/hooks'
import { groomingApps } from '@/lib/data'
import { GroomingApp, SortOption, PriceFilter, PlatformFilter } from '@/lib/types'
import { Hero } from '@/components/Hero'
import { FilterSidebar } from '@/components/FilterSidebar'
import { AppCard } from '@/components/AppCard'
import { AppDetailModal } from '@/components/AppDetailModal'
import { Toaster } from '@/components/ui/sonner'

function App() {
  const [selectedApp, setSelectedApp] = useState<GroomingApp | null>(null)
  const [modalOpen, setModalOpen] = useState(false)
  
  const [sortBy, setSortBy] = useKV<SortOption>('sort-by', 'rating')
  const [priceFilter, setPriceFilter] = useKV<PriceFilter>('price-filter', 'all')
  const [platformFilter, setPlatformFilter] = useKV<PlatformFilter>('platform-filter', 'all')
  const [showFeaturedOnly, setShowFeaturedOnly] = useKV<boolean>('show-featured-only', false)

  const currentSortBy = sortBy ?? 'rating'
  const currentPriceFilter = priceFilter ?? 'all'
  const currentPlatformFilter = platformFilter ?? 'all'
  const currentShowFeaturedOnly = showFeaturedOnly ?? false

  const filteredAndSortedApps = useMemo(() => {
    let filtered = [...groomingApps]

    if (currentPriceFilter !== 'all') {
      filtered = filtered.filter(app => app.priceType === currentPriceFilter)
    }

    if (currentPlatformFilter !== 'all') {
      filtered = filtered.filter(app => app.platforms.includes(currentPlatformFilter as 'ios' | 'android' | 'web'))
    }

    if (currentShowFeaturedOnly) {
      filtered = filtered.filter(app => app.featured)
    }

    filtered.sort((a, b) => {
      switch (currentSortBy) {
        case 'rating':
          return b.rating - a.rating
        case 'popular':
          return b.reviewCount - a.reviewCount
        case 'price-low':
          const priceA = parseFloat(a.price.replace(/[^0-9.]/g, '')) || 0
          const priceB = parseFloat(b.price.replace(/[^0-9.]/g, '')) || 0
          return priceA - priceB
        case 'price-high':
          const priceAHigh = parseFloat(a.price.replace(/[^0-9.]/g, '')) || 0
          const priceBHigh = parseFloat(b.price.replace(/[^0-9.]/g, '')) || 0
          return priceBHigh - priceAHigh
        default:
          return 0
      }
    })

    return filtered
  }, [currentSortBy, currentPriceFilter, currentPlatformFilter, currentShowFeaturedOnly])

  const handleViewDetails = (app: GroomingApp) => {
    setSelectedApp(app)
    setModalOpen(true)
  }

  const handleCloseModal = () => {
    setModalOpen(false)
    setTimeout(() => setSelectedApp(null), 200)
  }

  return (
    <div className="min-h-screen bg-background">
      <Hero />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-12">
        <div className="grid lg:grid-cols-[280px_1fr] gap-8">
          <aside className="hidden lg:block">
            <FilterSidebar
              sortBy={currentSortBy}
              onSortChange={setSortBy}
              priceFilter={currentPriceFilter}
              onPriceFilterChange={setPriceFilter}
              platformFilter={currentPlatformFilter}
              onPlatformFilterChange={setPlatformFilter}
              showFeaturedOnly={currentShowFeaturedOnly}
              onShowFeaturedOnlyChange={setShowFeaturedOnly}
            />
          </aside>

          <main>
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-2">
                Top Dog Grooming Apps
              </h2>
              <p className="text-muted-foreground">
                {filteredAndSortedApps.length} {filteredAndSortedApps.length === 1 ? 'app' : 'apps'} found
              </p>
            </div>

            {filteredAndSortedApps.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-xl text-muted-foreground mb-4">No apps match your filters</p>
                <p className="text-sm text-muted-foreground">Try adjusting your filter criteria</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredAndSortedApps.map((app) => (
                  <AppCard 
                    key={app.id} 
                    app={app} 
                    onViewDetails={handleViewDetails}
                  />
                ))}
              </div>
            )}
          </main>
        </div>
      </div>

      <AppDetailModal 
        app={selectedApp}
        open={modalOpen}
        onClose={handleCloseModal}
      />

      <Toaster />
    </div>
  )
}

export default App