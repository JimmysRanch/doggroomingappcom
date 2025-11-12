import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export function FAQ() {
  const faqs = [
    {
      question: 'How do you test and rate dog grooming apps?',
      answer: 'Our team of pet care professionals thoroughly tests each app across multiple criteria including features, ease of use, value for money, and customer support. We also analyze thousands of user reviews and conduct hands-on testing with real grooming appointments to ensure our ratings are accurate and helpful.'
    },
    {
      question: 'Are these reviews sponsored or biased?',
      answer: 'Absolutely not. We maintain complete editorial independence and do not accept payment from app developers for reviews or rankings. Our ratings are based solely on merit and real-world performance. While we may earn affiliate commissions from some apps, this never influences our honest assessments.'
    },
    {
      question: 'How often are the rankings updated?',
      answer: 'We update our rankings and reviews weekly to reflect new features, pricing changes, and user feedback. Major updates or new apps are reviewed within 48 hours of release to ensure you always have the most current information.'
    },
    {
      question: 'What if my area is not covered by these apps?',
      answer: 'App availability varies by location. We indicate coverage areas in our detailed reviews when possible. If none of our top-rated apps serve your area, check the "Other Options" section in each review for regional alternatives, or contact us for personalized recommendations.'
    },
    {
      question: 'Can I trust the user review counts shown?',
      answer: 'Yes. All review counts and ratings are pulled directly from official app store data and verified sources. We regularly audit these numbers to ensure accuracy and remove any suspicious or fraudulent reviews from our calculations.'
    },
    {
      question: 'Do you review mobile grooming services?',
      answer: 'Yes! Several apps in our rankings like WagWash specialize in connecting you with mobile groomers who come to your home. We clearly indicate which apps offer mobile services in both the app cards and detailed reviews.'
    }
  ]

  return (
    <section className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Everything you need to know about finding the perfect grooming app
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-lg font-semibold">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
