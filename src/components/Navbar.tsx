import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { List, X } from '@phosphor-icons/react'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setMobileMenuOpen(false)
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-background/95 backdrop-blur-md shadow-md border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🐕</span>
            <span className="text-lg font-bold text-foreground">DogGroomingApp.com</span>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollToSection('apps')}
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              Browse Apps
            </button>
            <button
              onClick={() => scrollToSection('how-it-works')}
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection('why-choose-us')}
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              Why Choose Us
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              FAQ
            </button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="px-6 py-4 space-y-3">
            <button
              onClick={() => scrollToSection('apps')}
              className="block w-full text-left text-sm font-medium text-foreground/80 hover:text-foreground py-2"
            >
              Browse Apps
            </button>
            <button
              onClick={() => scrollToSection('how-it-works')}
              className="block w-full text-left text-sm font-medium text-foreground/80 hover:text-foreground py-2"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection('why-choose-us')}
              className="block w-full text-left text-sm font-medium text-foreground/80 hover:text-foreground py-2"
            >
              Why Choose Us
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="block w-full text-left text-sm font-medium text-foreground/80 hover:text-foreground py-2"
            >
              FAQ
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}
