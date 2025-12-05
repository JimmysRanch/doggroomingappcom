import { Button } from '@/components/ui/button'
import { Dog } from '@phosphor-icons/react'

export function Navbar() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Dog className="w-8 h-8 text-primary" weight="fill" />
            <span className="text-xl font-bold text-foreground">DogGroomingApp.com</span>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('apps')}
            >
              Apps
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('how-it-works')}
            >
              How It Works
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('why-choose-us')}
            >
              Why Us
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('faq')}
            >
              FAQ
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
