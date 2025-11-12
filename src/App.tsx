import { useState, useMemo } from 'react'
import { groomingApps } from '@/lib/data'
import { GroomingApp, SortOption, PriceFilter, PlatformFilter } from '@/lib/types'
import { Hero } from '@/components/Hero'
import { AppCard } from '@/components/AppCard'
import { AppDetailModal } from '@/components/AppDetailModal'
import { FilterControls } from '@/components/FilterControls'
import { Stats } from '@/components/Stats'
import { HowItWorks } from '@/components/HowItWorks'
import { WhyChooseUs } from '@/components/WhyChooseUs'
import { FAQ } from '@/components/FAQ'
import { Footer } from '@/components/Footer'
import { BackToTop } from '@/components/BackToTop'
import { Toaster } from '@/components/ui/sonner'
import { motion } from 'framer-motion'

function App() {
  const [selectedApp, setSelectedApp] = useState<GroomingApp | null>(null)
  const [modalOpen, setModalOpen] = useState(false)
  const [sortBy, setSortBy] = useState<SortOption>('rating')
  const [priceFilter, setPriceFilter] = useState<PriceFilter>('all')
  const [platformFilter, setPlatformFilter] = useState<PlatformFilter>('all')
  const [minRating, setMinRating] = useState<number>(0)

  const filteredAndSortedApps = useMemo(() => {
    let filtered = [...groomingApps]

    if (priceFilter !== 'all') {
      filtered = filtered.filter(app => app.priceType === priceFilter)
    }

    if (platformFilter !== 'all') {
      filtered = filtered.filter(app => app.platforms.includes(platformFilter))
    }

    if (minRating > 0) {
      filtered = filtered.filter(app => app.rating >= minRating)
    }

    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'rating':
          return b.rating - a.rating
        case 'popular':
          return b.reviewCount - a.reviewCount
        case 'price-low':
          return getPriceValue(a.price) - getPriceValue(b.price)
        case 'price-high':
          return getPriceValue(b.price) - getPriceValue(a.price)
        default:
          return 0
      }
    })

    return filtered
  }, [sortBy, priceFilter, platformFilter, minRating])

  const getPriceValue = (price: string): number => {
    if (price.toLowerCase() === 'free') return 0
    const match = price.match(/\d+\.?\d*/)
    return match ? parseFloat(match[0]) : 0
  }

  const handleViewDetails = (app: GroomingApp) => {
    setSelectedApp(app)
    setModalOpen(true)
  }

  const handleCloseModal = () => {
    setModalOpen(false)
    setTimeout(() => setSelectedApp(null), 200)
  }

  const handleClearFilters = () => {
    setSortBy('rating')
    setPriceFilter('all')
    setPlatformFilter('all')
    setMinRating(0)
  }

  const hasActiveFilters = priceFilter !== 'all' || platformFilter !== 'all' || minRating > 0

  return (
    <div className="min-h-screen bg-background">
      <Hero />

      <main className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-16" id="apps">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Top-Rated Dog Grooming Apps
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our expert team has tested and reviewed the best dog grooming apps to help you make an informed decision.
          </p>
        </div>

        <FilterControls
          sortBy={sortBy}
          onSortChange={setSortBy}
          priceFilter={priceFilter}
          onPriceFilterChange={setPriceFilter}
          platformFilter={platformFilter}
          onPlatformFilterChange={setPlatformFilter}
          minRating={minRating}
          onMinRatingChange={setMinRating}
          resultCount={filteredAndSortedApps.length}
          totalCount={groomingApps.length}
          hasActiveFilters={hasActiveFilters}
          onClearFilters={handleClearFilters}
        />

        {filteredAndSortedApps.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-16"
          >
            <p className="text-2xl font-semibold text-foreground mb-2">No apps match your filters</p>
            <p className="text-muted-foreground mb-6">Try adjusting your filter criteria to see more results</p>
          </motion.div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
            {filteredAndSortedApps.map((app, index) => (
              <motion.div
                key={app.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
              >
                <AppCard 
                  app={app} 
                  onViewDetails={handleViewDetails}
                />
              </motion.div>
            ))}
          </div>
        )}

        <Stats />

        <div id="how-it-works">
          <HowItWorks />
        </div>
        
        <div id="why-choose-us">
          <WhyChooseUs />
        </div>
        
        <div id="faq">
          <FAQ />
        </div>
      </main>

      <Footer />

      <AppDetailModal 
        app={selectedApp}
        open={modalOpen}
        onClose={handleCloseModal}
      />

      <BackToTop />

      <Toaster />
    </div>
  )
}

export default App