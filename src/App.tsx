import { useState, useEffect } from 'react'
import { groomingApps } from '@/lib/data'
import { GroomingApp } from '@/lib/types'
import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { AppCard } from '@/components/AppCard'
import { AppDetailModal } from '@/components/AppDetailModal'
import { Stats } from '@/components/Stats'
import { HowItWorks } from '@/components/HowItWorks'
import { WhyChooseUs } from '@/components/WhyChooseUs'
import { FAQ } from '@/components/FAQ'
import { Footer } from '@/components/Footer'
import { BackToTop } from '@/components/BackToTop'
import { Toaster } from '@/components/ui/sonner'
import { toast } from 'sonner'
import { motion } from 'framer-motion'

function App() {
  const [selectedApp, setSelectedApp] = useState<GroomingApp | null>(null)
  const [modalOpen, setModalOpen] = useState(false)

  useEffect(() => {
    toast('Welcome to DogGroomingApp.com!', {
      description: 'Find the perfect grooming app for your furry friend.',
      duration: 4000,
    })
  }, [])

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
      <Navbar />
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {groomingApps.map((app, index) => (
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