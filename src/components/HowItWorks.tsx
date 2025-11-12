import { motion } from 'framer-motion'
import { MagnifyingGlass, ChartBar, CheckCircle } from '@phosphor-icons/react'

export function HowItWorks() {
  const steps = [
    {
      icon: MagnifyingGlass,
      title: 'Browse & Compare',
      description: 'Explore our curated selection of top-rated dog grooming apps with detailed comparisons and expert insights.'
    },
    {
      icon: ChartBar,
      title: 'Read Expert Reviews',
      description: 'Get in-depth analysis of features, pricing, and performance from our team of pet care professionals.'
    },
    {
      icon: CheckCircle,
      title: 'Make Your Choice',
      description: 'Select the perfect grooming app for your needs with confidence, backed by real data and verified reviews.'
    }
  ]

  return (
    <section className="py-16 mb-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          How It Works
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Finding the right grooming app for your dog has never been easier
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="text-center"
          >
            <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center">
              <step.icon className="w-10 h-10 text-primary" weight="bold" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">
              {step.title}
            </h3>
            <p className="text-muted-foreground">
              {step.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
