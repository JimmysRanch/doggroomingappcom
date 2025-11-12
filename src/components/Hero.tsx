import { motion } from 'framer-motion'
import { Shield, Users, Star, CaretDown } from '@phosphor-icons/react'

export function Hero() {
  const scrollToApps = () => {
    const element = document.getElementById('apps')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-foreground">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
      
      <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            Find the Perfect Dog Grooming App
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 max-w-3xl mx-auto">
            Expert reviews, detailed comparisons, and honest ratings to help you choose the best grooming solution for your furry friend.
          </p>

          <div className="flex flex-wrap justify-center gap-8 md:gap-12 mt-12">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="flex flex-col items-center gap-2"
            >
              <div className="w-16 h-16 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                <Shield className="w-8 h-8" weight="bold" />
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">Expert Verified</div>
                <div className="text-sm text-primary-foreground/80">Trusted Reviews</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="flex flex-col items-center gap-2"
            >
              <div className="w-16 h-16 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                <Star className="w-8 h-8" weight="fill" />
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">20,000+</div>
                <div className="text-sm text-primary-foreground/80">User Reviews</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex flex-col items-center gap-2"
            >
              <div className="w-16 h-16 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                <Users className="w-8 h-8" weight="bold" />
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">Updated Weekly</div>
                <div className="text-sm text-primary-foreground/80">Fresh Rankings</div>
              </div>
            </motion.div>
          </div>

          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            onClick={scrollToApps}
            className="mt-12 flex items-center justify-center gap-2 mx-auto text-primary-foreground/90 hover:text-primary-foreground transition-colors group"
          >
            <span className="text-sm font-medium">Browse Apps</span>
            <CaretDown className="w-5 h-5 animate-bounce group-hover:animate-none" weight="bold" />
          </motion.button>
        </motion.div>
      </div>
    </div>
  )
}
