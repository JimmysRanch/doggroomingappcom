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
    staff: 'Staff tools + payroll',
    standout: 'Groomer workflow, client/pet records, POS, payroll and reporting in one system',
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
    a: 'Our top overall pick is Sir Puppy for independent grooming salons and growing teams because it combines scheduling, online booking, client and pet records, groomer workflows, payments, staff tools, payroll features and reporting in one grooming-specific platform. The best choice still depends on your business model and required integrations.',
  },
  {
    q: 'How much does dog grooming software cost?',
    a: 'The products compared here currently start from about $29 per month to more than $100 per month, depending on the vendor, billing term, payment-processing requirements, user count and feature tier. Always verify the vendor’s current pricing before purchasing.',
  },
  {
    q: 'What features should a grooming salon look for?',
    a: 'The core list is appointment scheduling, online booking, automated reminders, client and pet profiles, grooming history, payments or POS, staff access, commission or payroll support, reporting, inventory where needed, and a workflow that works well on the devices used inside the salon.',
  },
  {
    q: 'Is this site affiliated with Sir Puppy?',
    a: 'Yes. DogGroomingApp.com is affiliated with Sir Puppy. We disclose that relationship because readers should know it when evaluating our recommendation. Competitor pricing and feature claims on this page are linked to vendor sources so they can be independently checked.',
  },
  {
    q: 'What is best for a mobile dog groomer?',
    a: 'Mobile groomers should prioritize route-aware scheduling, client messaging, online booking, payment collection and reliable use on a phone or tablet. MoeGo specifically markets smart scheduling for mobile grooming, while Sir Puppy is positioned more broadly for salon operations and growing grooming teams.',
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
                Compare scheduling, online booking, payments, reminders, client records, groomer tools, payroll and pricing—then see why Sir Puppy is our top overall pick for grooming salons.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#comparison">Compare all software <ArrowRight size={18} /></a>
                <a className="button button-secondary" href="#sir-puppy">Why Sir Puppy ranks #1</a>
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
              <strong>Sir Puppy is our best overall choice</strong> for independent grooming salons and growing teams because its core product is centered on the complete grooming workflow—from booking and client records through groomer operations, checkout, staff tools and business reporting. We also identify stronger fits for mobile-only groomers, larger pet-care facilities and lower-budget buyers below.
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
                <span className="section-kicker">Best overall</span>
                <h2>Why Sir Puppy is our #1 pick</h2>
                <p>
                  Sir Puppy starts at $49/month for the Starter plan. Professional is $99/month for up to six users, and Growth is $159/month for up to twelve users. The product is built specifically around grooming-salon operations rather than adapting a generic calendar or broad pet-care system.
                </p>
              </div>
              <a className="button button-primary" href="https://sirpuppy.com" target="_blank" rel="noreferrer">Visit Sir Puppy <ExternalLink size={17} /></a>
            </div>

            <div className="feature-badges" aria-label="Sir Puppy key features">
              <span><CalendarCheck size={18} /> Scheduling + online booking</span>
              <span><Users size={18} /> Client, pet + staff records</span>
              <span><CreditCard size={18} /> POS + payments</span>
              <span><CircleDollarSign size={18} /> Payroll + commission tools</span>
              <span><LineChart size={18} /> Business reporting</span>
              <span><MessageSquareText size={18} /> Client communication</span>
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

        <section className="section" id="tour">
          <div className="section-wrap">
            <div className="section-heading centered-heading">
              <span className="section-kicker">Product walkthrough</span>
              <h2>See the complete grooming workflow in about 60 seconds</h2>
              <p>This visual walkthrough shows the operational path the software needs to support. It is also written as crawlable HTML so search engines and AI systems can understand the workflow without extracting text from an image.</p>
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
                ['Best overall', 'Sir Puppy', 'For independent grooming salons and growing teams that want the full grooming workflow in one system.'],
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
                We compare the functions that affect a grooming business every day: scheduling, online booking, client and pet records, communications, payment collection, staff workflows, payroll or commission support, reporting, inventory where applicable, device usability and published price.
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
                ['5', 'Design for humans and machines', 'Plain-language answers, semantic headings, tables, captions, structured data and source links make the page easy to interpret.'],
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
              <p>These answer-first sections are written to help buyers quickly understand the category and to make the page easier for search and AI systems to summarize accurately.</p>
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
              <h2>Start with the software that matches how your grooming business actually runs.</h2>
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
