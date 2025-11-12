import { useState } from 'react'
import { groomingApps } from '@/lib/data'
import { GroomingApp } from '@/lib/types'
import { Hero } from '@/components/Hero'
import { AppCard } from '@/components/AppCard'
import { AppDetailModal } from '@/components/AppDetailModal'
import { HowItWorks } from '@/components/HowItWorks'
import { WhyChooseUs } from '@/components/WhyChooseUs'
import { FAQ } from '@/components/FAQ'
import { Footer } from '@/components/Footer'
import { Toaster } from '@/components/ui/sonner'

function App() {
  const [selectedApp, setSelectedApp] = useState<GroomingApp | null>(null)
  const [modalOpen, setModalOpen] = useState(false)

  const sortedApps = [...groomingApps].sort((a, b) => b.rating - a.rating)

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

      <main className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-16">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Top-Rated Dog Grooming Apps
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our expert team has tested and reviewed the best dog grooming apps to help you make an informed decision.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {sortedApps.map((app) => (
            <AppCard 
              key={app.id} 
              app={app} 
              onViewDetails={handleViewDetails}
            />
          ))}
        </div>

        <HowItWorks />
        <WhyChooseUs />
        <FAQ />
      </main>

      <Footer />

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