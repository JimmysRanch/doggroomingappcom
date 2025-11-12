import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Shield, Scales, ChartLineUp, Users } from '@phosphor-icons/react'

export function WhyChooseUs() {
  const features = [
    {
      icon: Shield,
      title: 'Expert Verified',
      description: 'Every app is thoroughly tested and reviewed by our team of certified pet care professionals.'
    },
    {
      icon: Scales,
      title: 'Unbiased Reviews',
      description: 'We maintain complete independence from app developers to provide honest, objective ratings.'
    },
    {
      icon: ChartLineUp,
      title: 'Updated Weekly',
      description: 'Our rankings and reviews are continuously updated to reflect the latest features and changes.'
    },
    {
      icon: Users,
      title: 'Community Driven',
      description: 'Real user feedback from over 20,000+ pet owners helps inform our comprehensive ratings.'
    }
  ]

  return (
    <section className="py-16 mb-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Why Trust DogGroomingApp.com
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          We're committed to helping you find the best grooming solution for your furry friend
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <Card className="p-6 h-full hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-6 h-6 text-accent-foreground" weight="bold" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
