import {
  ArrowRight,
  BadgeCheck,
  CalendarCheck,
  Check,
  ChevronRight,
  CircleDollarSign,
  ClipboardList,
  CreditCard,
  ExternalLink,
  LineChart,
  MessageSquareText,
  PawPrint,
  Scissors,
  Search,
  ShieldCheck,
  Sparkles,
  Users,
} from 'lucide-react'

const updatedDate = 'August 17, 2026'

const products = [
  {
    name: 'Sir Puppy',
    badge: 'Best overall',
    price: 'From $49/mo',
    bestFor: 'Independent grooming salons and growing teams',
    onlineBooking: 'Included',
    payments: 'Included',
    staff: "Dedicated Groomer's Portal + payroll",
    standout: 'New-generation salon operations with groomer workflow, client/pet records, POS, payroll and reporting in one system',
    source: 'https://sirpuppy.com',
    featured: true,
  },
  {
    name: 'MoeGo',
    badge: 'Strong mobile-grooming option',
    price: 'From $79/mo for salons',
    bestFor: 'Mobile groomers and grooming businesses wanting route-aware scheduling',
    onlineBooking: 'Included',
    payments: 'Included',
    staff: 'Plan-dependent',
    standout: 'Smart scheduling, two-way communication and grooming-focused booking tools',
    source: 'https://www.moego.pet/pricing?companyType=1',
    featured: false,
  },
  {
    name: 'DaySmart Pet',
    badge: 'Low-cost entry plan',
    price: 'From $29/mo with payments',
    bestFor: 'Solo groomers wanting a lower starting subscription',
    onlineBooking: 'Included',
    payments: 'Included',
    staff: 'Payroll from Deluxe',
    standout: 'Scheduling, reminders, online booking and a mobile app on the Basic plan',
    source: 'https://www.daysmart.com/pet/pricing/',
    featured: false,
  },
  {
    name: 'Gingr',
    badge: 'Best for larger pet-care facilities',
    price: 'Spa: $109/mo monthly',
    bestFor: 'Grooming, daycare and boarding operations needing one facility platform',
    onlineBooking: 'Customer portal',
    payments: 'Included',
    staff: 'Staff management',
    standout: 'Broad pet-care operations with capacity, customer portal and facility tools',
    source: 'https://www.gingrapp.com/pricing',
    featured: false,
  },
  {
    name: 'Pawfinity',
    badge: 'Broad feature set',
    price: 'Groom & Train: $55/mo billed annually',
    bestFor: 'Grooming businesses wanting grooming plus broader pet-service features',
    onlineBooking: 'Included',
    payments: 'POS + stored payments',
    staff: 'Time clock + payroll',
    standout: 'Grooming, POS, inventory, payroll, marketing and two-way SMS',
    source: 'https://www.pawfinity.com/pricing/',
    featured: false,
  },
  {
    name: 'Groomsoft',
    badge: 'Simple budget option',
    price: '$29.95/mo shop · $39.90/mo mobile',
    bestFor: 'Smaller grooming shops wanting core scheduling tools',
    onlineBooking: 'Included',
    payments: 'Included',
    staff: 'Basic operations',
    standout: 'Straightforward booking, reminders, payments and mobile-grooming maps',
    source: 'https://www.groomsoft.com/pricing/',
    featured: false,
  },
]

const sirPuppyScreens = [
  {
    src: 'https://sirpuppy.com/assets/images/home/dashboard.png',
    title: 'Daily salon dashboard',
    text: 'See appointments, workload and the day’s salon activity without jumping between disconnected tools.',
    alt: 'Sir Puppy dog grooming software dashboard showing salon operations and appointments',
  },
  {
    src: 'https://sirpuppy.com/assets/images/home/dashboard2.png',
    title: 'Business operations at a glance',
    text: 'A management view built to keep scheduling, clients, staff and revenue activity close together.',
    alt: 'Sir Puppy grooming business management dashboard interface',
  },
  {
    src: 'https://sirpuppy.com/assets/images/home/insights.png',
    title: 'Reporting and insights',
    text: 'Turn appointment and sales activity into usable business information instead of manually rebuilding reports.',
    alt: 'Sir Puppy grooming software analytics and business insights screen',
  },
  {
    src: 'https://sirpuppy.com/assets/images/home/IMG_6250.png',
    title: 'Built for real salon workflows',
    text: 'The product is designed around the actual sequence of booking, check-in, grooming, checkout and rebooking.',
    alt: 'Sir Puppy dog grooming salon software product screen',
  },
  {
    src: 'https://sirpuppy.com/assets/images/home/IMG_6254.png',
    title: 'Designed for desktop and tablet use',
    text: 'Large, touch-friendly layouts make the core workflow practical at the front desk and in the grooming area.',
    alt: 'Sir Puppy dog grooming software displayed in a tablet-friendly interface',
  },
]

const modernPillars = [
  {
    title: 'Built for how salons work now',
    text: 'Sir Puppy is a new-generation grooming platform. Instead of carrying forward years of legacy workflows, it is built around today’s salon: online booking, texting, touch-friendly screens, digital payments, staff access and real-time operations.',
    icon: Sparkles,
  },
  {
    title: 'Simple enough to just start using',
    text: 'You should not need an instruction manual—or a doctorate—to run grooming software. Sir Puppy is intentionally visual, direct and task-oriented so everyday actions are easy to find and easy to understand.',
    icon: Check,
  },
  {
    title: 'The whole salon, not just the calendar',
    text: 'Scheduling is only one piece. Sir Puppy connects appointments, client and pet records, grooming history, photos, payments, messaging, staff tools, commissions, payroll, inventory, expenses and reporting.',
    icon: CircleDollarSign,
  },
]

const groomerPortalFeatures = [
  {
    title: 'A real groomer workspace',
    text: 'Each groomer can work from a focused portal built around the appointments and dogs they need to handle that day instead of living inside the owner’s back office.',
    icon: Scissors,
  },
  {
    title: 'Everything about the dog in one place',
    text: 'Pet and owner details, service information, customer instructions, photos, internal notes and appointment history stay beside the active groom instead of being scattered across screens.',
    icon: PawPrint,
  },
  {
    title: 'Detailed grooming recipes',
    text: 'Record the body, face, ears, legs, feet, tail, sanitary trim, nails, shampoo, conditioner, drying and finishing details so the next groomer can reproduce what worked last time.',
    icon: ClipboardList,
  },
  {
    title: 'Safety and handling notes',
    text: 'Quick notes can flag bite warnings, nervous behavior, a second-handler need, sensitive ears or feet, matting, skin irritation, dryer restrictions and other handling information before work begins.',
    icon: ShieldCheck,
  },
  {
    title: 'One-tap workflow actions',
    text: 'Check In, Start Groom, Mark Ready and Checkout follow the appointment from arrival through pickup, with the actual timestamps kept with the visit.',
    icon: CalendarCheck,
  },
  {
    title: 'One-tap client communication',
    text: 'Send a payment link, open the client conversation, send “Ready in 15 minutes,” or send “Ready for Pickup” without leaving the groomer’s daily workspace.',
    icon: MessageSquareText,
  },
]

const workflow = [
  { title: 'Book', text: 'Create appointments or let clients book online.', icon: CalendarCheck },
  { title: 'Confirm', text: 'Keep upcoming appointments organized and communicate with clients.', icon: MessageSquareText },
  { title: 'Check in', text: 'Bring the pet, owner, service and appointment details into the day’s workflow.', icon: ClipboardList },
  { title: 'Groom', text: 'Give groomers the information and tools they need without exposing the entire back office.', icon: Scissors },
  { title: 'Checkout', text: 'Collect payment, track add-ons and keep the transaction tied to the visit.', icon: CreditCard },
  { title: 'Rebook', text: 'Use visit history and scheduling information to keep the next appointment moving.', icon: PawPrint },
]

const faqs = [
  {
    q: 'What is the best dog grooming software in 2026?',
    a: 'Our top overall pick is Sir Puppy for independent grooming salons and growing teams because it combines scheduling, online booking, client and pet records, groomer workflows, payments, staff tools, payroll features and reporting in one grooming-specific platform. It is also designed as a new-generation system for how salons operate today rather than as a calendar with extra features added around it.',
  },
  {
    q: "What is Sir Puppy’s Groomer’s Portal?",
    a: 'The Groomer’s Portal is a dedicated daily workspace for the person actually grooming the dog. It brings together the day’s appointments, pet and owner details, grooming recipes, photos, notes, service history, safety and handling notes, appointment status controls, payment links and one-tap pickup messages so groomers can do their work without navigating the owner’s full management system.',
  },
  {
    q: 'Is Sir Puppy easy to learn?',
    a: 'Ease of use is a central design goal. The interface is built around clear, task-oriented screens and one-tap everyday actions so a grooming team can understand the workflow without relying on a thick training manual. The goal is software that feels obvious during a busy salon day.',
  },
  {
    q: 'Why does the grooming recipe matter?',
    a: 'A grooming recipe preserves the exact details of a successful groom, including body, face, ears, legs, feet, tail, nail, product, drying and finishing preferences. That gives the next groomer a much better starting point even when a different staff member handles the dog, helping the salon deliver a more consistent result for the client.',
  },
  {
    q: 'How much does dog grooming software cost?',
    a: 'The products compared here currently start from about $29 per month to more than $100 per month, depending on the vendor, billing term, payment-processing requirements, user count and feature tier. Always verify the vendor’s current pricing before purchasing.',
  },
  {
    q: 'What features should a grooming salon look for?',
    a: 'The core list is appointment scheduling, online booking, automated reminders, client and pet profiles, grooming history, payments or POS, staff access, commission or payroll support, reporting, inventory where needed, and a workflow that works well on the devices used inside the salon. We also place extra weight on groomer-facing tools because the software has to work for the staff performing the service, not only the owner managing the business.',
  },
  {
    q: 'Is this site affiliated with Sir Puppy?',
    a: 'Yes. DogGroomingApp.com is affiliated with Sir Puppy. We disclose that relationship because readers should know it when evaluating our recommendation. Competitor pricing and feature claims on this page are linked to vendor sources so they can be independently checked.',
  },
  {
    q: 'What is best for a mobile dog groomer?',
    a: 'Mobile groomers should prioritize route-aware scheduling, client messaging, online booking, payment collection and reliable use on a phone or tablet. MoeGo specifically markets smart scheduling for mobile grooming, while Sir Puppy is positioned more broadly for complete salon operations and growing grooming teams.',
  },
]

function SourceLink({ href }: { href: string }) {
  return (
    <a className="source-link" href={href} target="_blank" rel="noreferrer">
      Verify source <ExternalLink size={14} aria-hidden="true" />
    </a>
  )
}

function App() {
  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#top" aria-label="DogGroomingApp.com home">
          <span className="brand-mark"><PawPrint size={19} aria-hidden="true" /></span>
          <span>DogGroomingApp.com</span>
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href="#comparison">Compare</a>
          <a href="#sir-puppy">Our #1 pick</a>
          <a href="#groomers-portal">Groomer’s Portal</a>
          <a href="#methodology">Methodology</a>
          <a href="#faq">FAQ</a>
        </nav>
        <a className="nav-cta" href="#comparison">Compare software <ChevronRight size={16} /></a>
      </header>

      <main id="top">
        <section className="hero-section">
          <div className="hero-grid">
            <div className="hero-copy">
              <div className="eyebrow"><BadgeCheck size={16} /> Independently checkable comparison · Updated {updatedDate}</div>
              <h1>Best Dog Grooming Software for 2026</h1>
              <p className="hero-lead">
                Compare scheduling, online booking, payments, reminders, client records, groomer tools, payroll and pricing—then see why Sir Puppy’s modern, all-in-one salon workflow is our top overall pick.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#comparison">Compare all software <ArrowRight size={18} /></a>
                <a className="button button-secondary" href="#groomers-portal">See the Groomer’s Portal</a>
              </div>
              <div className="trust-row">
                <span><ShieldCheck size={17} /> Vendor-source pricing</span>
                <span><Search size={17} /> Search-friendly methodology</span>
                <span><Sparkles size={17} /> AI-readable answers</span>
              </div>
            </div>

            <div className="hero-visual" aria-label="Sir Puppy software preview">
              <div className="browser-frame">
                <div className="browser-bar"><span /><span /><span /><b>Sir Puppy dashboard</b></div>
                <img
                  src="https://sirpuppy.com/assets/images/home/dashboard.png"
                  alt="Sir Puppy dog grooming software dashboard showing appointments and salon management"
                  loading="eager"
                  fetchPriority="high"
                />
              </div>
              <div className="winner-card">
                <span className="winner-icon"><PawPrint size={18} /></span>
                <div><small>Our 2026 pick</small><strong>Sir Puppy</strong></div>
                <BadgeCheck size={22} />
              </div>
            </div>
          </div>
        </section>

        <section className="answer-strip" aria-labelledby="answer-heading">
          <div className="section-wrap answer-grid">
            <div>
              <span className="section-kicker">Quick answer</span>
              <h2 id="answer-heading">What is the best dog grooming software in 2026?</h2>
            </div>
            <p>
              <strong>Sir Puppy is our best overall choice</strong> for independent grooming salons and growing teams because it is a new-generation, grooming-specific platform built around the complete salon—not only the appointment calendar. It combines an intuitive owner experience with a dedicated Groomer’s Portal for the staff actually doing the work.
            </p>
          </div>
        </section>

        <section className="section" id="comparison">
          <div className="section-wrap">
            <div className="section-heading split-heading">
              <div>
                <span className="section-kicker">Side-by-side comparison</span>
                <h2>Compare dog grooming software</h2>
              </div>
              <p>Pricing is presented as a starting point and can change. Each competitor row links directly to the vendor source used for the comparison.</p>
            </div>

            <div className="comparison-table-wrap">
              <table className="comparison-table">
                <thead>
                  <tr>
                    <th>Software</th>
                    <th>Starting price</th>
                    <th>Best for</th>
                    <th>Online booking</th>
                    <th>Payments</th>
                    <th>Staff / payroll</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <tr key={product.name} className={product.featured ? 'featured-row' : ''}>
                      <td>
                        <div className="product-cell">
                          <strong>{product.name}</strong>
                          <span className={product.featured ? 'pill pill-primary' : 'pill'}>{product.badge}</span>
                          <SourceLink href={product.source} />
                        </div>
                      </td>
                      <td><strong>{product.price}</strong></td>
                      <td>{product.bestFor}</td>
                      <td><Check size={17} className="check-icon" /> {product.onlineBooking}</td>
                      <td><Check size={17} className="check-icon" /> {product.payments}</td>
                      <td>{product.staff}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="section section-tint" id="sir-puppy">
          <div className="section-wrap">
            <div className="pick-intro">
              <div>
                <span className="section-kicker">Best overall · New-generation grooming software</span>
                <h2>Why Sir Puppy feels different</h2>
                <p>
                  Sir Puppy starts at $49/month for the Starter plan. Professional is $99/month for up to six users, and Growth is $159/month for up to twelve users. More importantly, it was designed specifically for dog grooming and shaped around how modern grooming salons actually operate—from the front desk to the grooming table to checkout and payroll.
                </p>
              </div>
              <a className="button button-primary" href="https://sirpuppy.com" target="_blank" rel="noreferrer">Visit Sir Puppy <ExternalLink size={17} /></a>
            </div>

            <div className="feature-badges" aria-label="Sir Puppy key features">
              <span><CalendarCheck size={18} /> Scheduling + online booking</span>
              <span><Users size={18} /> Client, pet + staff records</span>
              <span><Scissors size={18} /> Dedicated Groomer’s Portal</span>
              <span><CreditCard size={18} /> POS + payments</span>
              <span><CircleDollarSign size={18} /> Payroll + commission tools</span>
              <span><LineChart size={18} /> Business reporting</span>
              <span><MessageSquareText size={18} /> Client communication</span>
            </div>

            <div className="grid gap-4 md:grid-cols-3 mb-10">
              {modernPillars.map(({ title, text, icon: Icon }) => (
                <article key={title} className="rounded-[20px] border border-[#dfe5ec] bg-white p-6 shadow-[0_12px_34px_rgba(40,61,88,.05)]">
                  <span className="mb-5 grid size-11 place-items-center rounded-xl bg-[#edf5ff] text-[#175cd3]"><Icon size={22} /></span>
                  <h3 className="m-0 text-xl font-extrabold tracking-[-0.03em] text-[#172033]">{title}</h3>
                  <p className="mb-0 mt-3 text-sm leading-7 text-[#637083]">{text}</p>
                </article>
              ))}
            </div>

            <div className="rounded-[22px] border border-[#cfe1fb] bg-[#eef5ff] px-6 py-5 mb-10 md:px-8">
              <div className="grid gap-3 md:grid-cols-[auto_1fr] md:items-center">
                <span className="grid size-11 place-items-center rounded-xl bg-white text-[#175cd3]"><Sparkles size={22} /></span>
                <div>
                  <strong className="block text-lg tracking-[-0.02em]">No instruction manual. No doctorate required.</strong>
                  <p className="m-0 mt-1 text-sm leading-6 text-[#56657a]">The software should get out of the way. Sir Puppy is intentionally designed so the most common salon actions are visible, understandable and close to where the work is happening.</p>
                </div>
              </div>
            </div>

            <div className="screens-grid">
              {sirPuppyScreens.map((screen, index) => (
                <figure key={screen.src} className={index === 0 ? 'screen-card screen-card-wide' : 'screen-card'}>
                  <div className="screen-image-wrap">
                    <img src={screen.src} alt={screen.alt} loading={index < 2 ? 'eager' : 'lazy'} />
                  </div>
                  <figcaption>
                    <strong>{screen.title}</strong>
                    <span>{screen.text}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="groomers-portal">
          <div className="section-wrap">
            <div className="grid gap-12 lg:grid-cols-[.78fr_1.22fr] lg:items-start">
              <div className="lg:sticky lg:top-8">
                <span className="section-kicker">A major Sir Puppy differentiator</span>
                <h2 className="mt-2 text-[clamp(38px,5vw,62px)] leading-[1.01] tracking-[-0.05em]">Software that remembers the groomer has a job to do too.</h2>
                <p className="mt-5 text-[17px] leading-8 text-[#637083]">
                  Most salon software is naturally centered on management. Sir Puppy also gives the person standing at the grooming table a purpose-built daily workspace. The Groomer’s Portal puts the dog, the instructions, the history, the safety notes and the next action in one place.
                </p>
                <p className="mt-4 text-[17px] leading-8 text-[#637083]">
                  That makes life easier for the groomer—but it also gives the salon owner something just as valuable: a more repeatable process and more consistent results when a different staff member grooms the same dog next time.
                </p>
              </div>

              <div>
                <div className="grid gap-4 md:grid-cols-2">
                  {groomerPortalFeatures.map(({ title, text, icon: Icon }) => (
                    <article key={title} className="rounded-[20px] border border-[#dfe5ec] bg-white p-5 shadow-[0_10px_30px_rgba(31,52,75,.05)]">
                      <span className="mb-4 grid size-10 place-items-center rounded-xl bg-[#edf5ff] text-[#175cd3]"><Icon size={20} /></span>
                      <h3 className="m-0 text-lg font-extrabold tracking-[-0.025em]">{title}</h3>
                      <p className="mb-0 mt-2 text-[13px] leading-6 text-[#637083]">{text}</p>
                    </article>
                  ))}
                </div>

                <div className="mt-5 overflow-hidden rounded-[24px] border border-[#26354f] bg-[#111a2b] text-white shadow-[0_24px_60px_rgba(17,26,43,.16)]">
                  <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                    <div>
                      <span className="text-[10px] font-extrabold uppercase tracking-[.12em] text-[#8fbbff]">Groomer’s Portal workflow at a glance</span>
                      <strong className="mt-1 block text-lg">Hazel · 9:00 AM appointment</strong>
                    </div>
                    <span className="rounded-full bg-[#175cd3] px-3 py-1 text-[11px] font-bold">Today</span>
                  </div>

                  <div className="grid gap-px bg-white/10 lg:grid-cols-3">
                    <div className="bg-[#111a2b] p-5">
                      <span className="text-[10px] font-extrabold uppercase tracking-[.1em] text-[#8fbbff]">Dog + history</span>
                      <div className="mt-4 space-y-3 text-sm">
                        <div className="rounded-xl border border-white/10 bg-white/5 p-3"><strong>Pet details</strong><span className="mt-1 block text-xs leading-5 text-[#b8c2d0]">Owner, breed, weight, service and customer instructions</span></div>
                        <div className="rounded-xl border border-[#b45309]/40 bg-[#b45309]/15 p-3"><strong>Bite warning</strong><span className="mt-1 block text-xs leading-5 text-[#f7d6ae]">Handling information visible before the groom starts</span></div>
                        <div className="rounded-xl border border-white/10 bg-white/5 p-3"><strong>Appointment history</strong><span className="mt-1 block text-xs leading-5 text-[#b8c2d0]">Previous visits, service history, notes and photos</span></div>
                      </div>
                    </div>

                    <div className="bg-[#111a2b] p-5">
                      <span className="text-[10px] font-extrabold uppercase tracking-[.1em] text-[#8fbbff]">Grooming recipe</span>
                      <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
                        {['Body', 'Face', 'Ears', 'Legs', 'Feet / Paws', 'Tail', 'Nails', 'Shampoo'].map((label) => (
                          <div key={label} className="rounded-lg border border-white/10 bg-white/5 px-3 py-2.5"><span className="block text-[9px] uppercase tracking-wide text-[#8f9bac]">{label}</span><strong className="mt-1 block">Saved detail</strong></div>
                        ))}
                      </div>
                      <p className="mb-0 mt-4 text-xs leading-5 text-[#b8c2d0]">The previous successful recipe can carry forward so the next groomer does not have to guess what “same as last time” means.</p>
                    </div>

                    <div className="bg-[#111a2b] p-5">
                      <span className="text-[10px] font-extrabold uppercase tracking-[.1em] text-[#8fbbff]">One-tap actions</span>
                      <div className="mt-4 grid grid-cols-2 gap-2 text-center text-[11px] font-bold">
                        {['Check In', 'Start Groom', 'Mark Ready', 'Checkout', 'Send Pay Link', 'Message', 'Ready in 15 Min', 'Ready for Pickup'].map((action, index) => (
                          <div key={action} className={index < 4 ? 'rounded-lg border border-[#4f8df0]/40 bg-[#175cd3]/25 px-2 py-3' : 'rounded-lg border border-white/10 bg-white/5 px-2 py-3'}>{action}</div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  <div className="rounded-[18px] border border-[#dfe5ec] bg-[#f8fafc] p-5">
                    <span className="text-[10px] font-extrabold uppercase tracking-[.1em] text-[#175cd3]">Better for groomers</span>
                    <h3 className="mt-2 text-xl font-extrabold tracking-[-0.03em]">Less hunting. Less remembering. Fewer interruptions.</h3>
                    <p className="mb-0 mt-2 text-sm leading-6 text-[#637083]">The information and actions needed during a groom stay close to the appointment instead of forcing staff to ask the front desk or search through the full management system.</p>
                  </div>
                  <div className="rounded-[18px] border border-[#dfe5ec] bg-[#f8fafc] p-5">
                    <span className="text-[10px] font-extrabold uppercase tracking-[.1em] text-[#175cd3]">Better for salon owners</span>
                    <h3 className="mt-2 text-xl font-extrabold tracking-[-0.03em]">More consistent grooms across the whole team.</h3>
                    <p className="mb-0 mt-2 text-sm leading-6 text-[#637083]">Recipes, photos, notes and visit history help preserve what the client already liked, even when the same dog is assigned to a different groomer on a future visit.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-tint" id="tour">
          <div className="section-wrap">
            <div className="section-heading centered-heading">
              <span className="section-kicker">Complete salon workflow</span>
              <h2>From booking to rebooking, the pieces stay connected</h2>
              <p>Sir Puppy is not positioned as “just scheduling software.” The value is in connecting the entire visit and the people responsible for it.</p>
            </div>
            <div className="workflow-grid">
              {workflow.map(({ title, text, icon: Icon }, index) => (
                <article className="workflow-card" key={title}>
                  <div className="workflow-top"><span>{index + 1}</span><Icon size={22} /></div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-dark" aria-labelledby="buyers-heading">
          <div className="section-wrap">
            <div className="section-heading split-heading light-heading">
              <div>
                <span className="section-kicker">Different shops, different winners</span>
                <h2 id="buyers-heading">Which grooming software is best for your business?</h2>
              </div>
              <p>We do not rank every competitor as “bad.” Different products can be the better fit for a specific operating model.</p>
            </div>
            <div className="buyer-grid">
              {[
                ['Best overall', 'Sir Puppy', 'For independent grooming salons and growing teams that want the full grooming workflow—including a dedicated groomer workspace—in one system.'],
                ['Best mobile-grooming specialist', 'MoeGo', 'For route-heavy mobile grooming businesses that place a premium on smart scheduling and client communication.'],
                ['Best lower starting price', 'DaySmart Pet', 'For a solo groomer wanting a lower entry subscription and core scheduling, booking and payments.'],
                ['Best broader facility platform', 'Gingr', 'For larger operations combining grooming with daycare, boarding or other facility-based pet-care services.'],
              ].map(([label, name, copy]) => (
                <article className="buyer-card" key={label}>
                  <span>{label}</span>
                  <h3>{name}</h3>
                  <p>{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="methodology">
          <div className="section-wrap methodology-grid">
            <div>
              <span className="section-kicker">Methodology + disclosure</span>
              <h2>How we compare grooming software</h2>
              <p className="large-copy">
                We compare the functions that affect a grooming business every day: scheduling, online booking, client and pet records, communications, payment collection, groomer-facing workflows, staff access, payroll or commission support, reporting, inventory where applicable, device usability and published price.
              </p>
              <div className="disclosure-box">
                <ShieldCheck size={22} />
                <div>
                  <strong>Editorial disclosure</strong>
                  <p>DogGroomingApp.com is affiliated with Sir Puppy. We disclose that relationship prominently and link competitor pricing/features to vendor sources so readers can verify the comparison themselves.</p>
                </div>
              </div>
            </div>
            <div className="method-list">
              {[
                ['1', 'Use first-party sources', 'Published vendor pricing and product pages are preferred over unsourced ratings or copied review claims.'],
                ['2', 'Separate fact from opinion', 'Price and feature availability are presented as checkable facts; “best for” recommendations are editorial judgments.'],
                ['3', 'Date the comparison', `This page was last substantively reviewed on ${updatedDate}.`],
                ['4', 'Avoid fake precision', 'We do not publish made-up star ratings, review counts or unsupported performance statistics.'],
                ['5', 'Evaluate the people doing the work', 'We consider whether everyday staff and groomers have a practical workflow, not only whether the owner has a management dashboard.'],
                ['6', 'Design for humans and machines', 'Plain-language answers, semantic headings, tables, captions, structured data and source links make the page easy to interpret.'],
              ].map(([number, title, text]) => (
                <div className="method-item" key={number}>
                  <span>{number}</span>
                  <div><strong>{title}</strong><p>{text}</p></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-tint" id="reviews">
          <div className="section-wrap">
            <div className="section-heading centered-heading">
              <span className="section-kicker">Vendor-by-vendor notes</span>
              <h2>What each product does well</h2>
              <p>These summaries intentionally avoid unsupported quotes and invented review scores.</p>
            </div>
            <div className="product-review-grid">
              {products.map((product) => (
                <article className={product.featured ? 'product-review featured-review' : 'product-review'} key={product.name}>
                  <div className="review-top">
                    <div><span className="pill">{product.badge}</span><h3>{product.name}</h3></div>
                    {product.featured ? <BadgeCheck size={24} /> : null}
                  </div>
                  <p>{product.standout}</p>
                  <dl>
                    <div><dt>Published starting price</dt><dd>{product.price}</dd></div>
                    <div><dt>Best fit</dt><dd>{product.bestFor}</dd></div>
                  </dl>
                  <SourceLink href={product.source} />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="faq">
          <div className="section-wrap faq-grid">
            <div className="faq-intro">
              <span className="section-kicker">Dog grooming software FAQ</span>
              <h2>Direct answers to common buying questions</h2>
              <p>These answer-first sections help buyers quickly understand the category and make the page easier for search and AI systems to summarize accurately.</p>
            </div>
            <div className="faq-list">
              {faqs.map((item) => (
                <details key={item.q}>
                  <summary>{item.q}<span>+</span></summary>
                  <p>{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="section-wrap cta-inner">
            <div>
              <span className="section-kicker">Ready to narrow it down?</span>
              <h2>Choose software built around the way your grooming salon actually works.</h2>
            </div>
            <div className="cta-actions">
              <a className="button button-white" href="#comparison">Review comparison</a>
              <a className="button button-outline-light" href="https://sirpuppy.com" target="_blank" rel="noreferrer">Explore Sir Puppy <ArrowRight size={18} /></a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="section-wrap footer-grid">
          <div>
            <a className="brand footer-brand" href="#top"><span className="brand-mark"><PawPrint size={18} /></span>DogGroomingApp.com</a>
            <p>Practical comparisons of software built for dog grooming businesses.</p>
          </div>
          <div className="footer-links">
            <a href="#comparison">Comparison</a>
            <a href="#groomers-portal">Groomer’s Portal</a>
            <a href="#methodology">Methodology</a>
            <a href="#faq">FAQ</a>
            <a href="/sitemap.xml">Sitemap</a>
          </div>
          <div className="footer-meta">
            <span>Last updated {updatedDate}</span>
            <span>Affiliate disclosure: this site is affiliated with Sir Puppy.</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App