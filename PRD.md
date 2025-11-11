# Planning Guide

A professional, authoritative comparison platform that helps dog owners discover and evaluate the best dog grooming apps through expert ratings, detailed reviews, and side-by-side feature comparisons.

**Experience Qualities**:
1. **Trustworthy** - The platform should feel like an established authority with credible ratings and transparent methodology
2. **Clarity** - Information should be presented in a scannable, organized format that makes comparison effortless
3. **Professional** - Design conveys expertise and polish through refined typography, balanced layouts, and sophisticated color choices

**Complexity Level**: Light Application (multiple features with basic state)
  - The site features app listings, filtering, detailed comparison views, and rating displays with persistent state for user preferences

## Essential Features

### App Listings Grid
- **Functionality**: Display top dog grooming apps with ratings, key features, and pricing
- **Purpose**: Provide quick overview of available options for immediate comparison
- **Trigger**: Page loads with default view of all apps
- **Progression**: Page loads → Grid displays apps with thumbnail, name, rating, price → User scans options → Clicks for details
- **Success criteria**: All apps display correctly with accurate ratings, clear hierarchy, and responsive grid layout

### Detailed App Reviews
- **Functionality**: Expandable/modal view showing comprehensive app analysis with pros, cons, features, and expert verdict
- **Trigger**: User clicks on an app card or "View Details" button
- **Progression**: User clicks app → Modal/detail view opens → User reads review sections → Sees feature breakdown → Views rating criteria → Closes to return to grid
- **Success criteria**: Detailed information is comprehensive, well-organized, and easy to navigate

### Filter & Sort System
- **Functionality**: Filter apps by platform (iOS/Android), price range, features, and sort by rating or price
- **Trigger**: User interacts with filter controls in sidebar or top bar
- **Progression**: User selects filter criteria → Grid updates instantly → Results show filtered apps → User can clear filters → Grid resets
- **Success criteria**: Filters work accurately, provide instant feedback, and maintain state

### Rating Comparison
- **Functionality**: Display detailed rating breakdown across multiple criteria (features, ease of use, value, customer support)
- **Purpose**: Provide transparent insight into how ratings are calculated
- **Trigger**: Visible in app cards and detailed views
- **Progression**: User views rating → Sees overall score → Expands to view category breakdown → Understands rating methodology
- **Success criteria**: Rating system is clear, visually appealing, and builds trust

## Edge Case Handling
- **No Results Found**: Display helpful message with suggestions to adjust filters when no apps match criteria
- **Loading States**: Show skeleton loaders for app cards while data initializes
- **Missing Data**: Gracefully handle apps with incomplete information (no pricing, partial ratings)
- **Mobile View**: Ensure filters collapse to drawer/dropdown on mobile devices
- **Empty State**: If no apps exist yet, show placeholder encouraging content addition

## Design Direction
The design should feel professional, trustworthy, and established—evoking the credibility of Consumer Reports or Wirecutter with a modern, clean interface that prioritizes readability and decision-making efficiency over flashy elements.

## Color Selection
Complementary color scheme that balances professional blue tones (trust, authority) with warm accent colors (approachability, friendliness)

- **Primary Color**: Deep Professional Blue (oklch(0.45 0.12 250)) - Communicates trust, authority, and expertise; used for headers, primary CTAs, and key interactive elements
- **Secondary Colors**: Soft Slate Gray (oklch(0.55 0.02 250)) for supporting text and subtle backgrounds; Warm White (oklch(0.98 0.005 85)) for card backgrounds
- **Accent Color**: Vibrant Orange (oklch(0.68 0.17 45)) - Draws attention to ratings, featured badges, and important CTAs
- **Foreground/Background Pairings**:
  - Background (White oklch(1 0 0)): Slate text (oklch(0.25 0.02 250)) - Ratio 11.8:1 ✓
  - Card (Warm White oklch(0.98 0.005 85)): Slate text (oklch(0.25 0.02 250)) - Ratio 11.2:1 ✓
  - Primary (Deep Blue oklch(0.45 0.12 250)): White text (oklch(1 0 0)) - Ratio 7.8:1 ✓
  - Secondary (Soft Slate oklch(0.55 0.02 250)): White text (oklch(1 0 0)) - Ratio 5.2:1 ✓
  - Accent (Vibrant Orange oklch(0.68 0.17 45)): Dark Slate text (oklch(0.2 0.02 250)) - Ratio 8.5:1 ✓
  - Muted (Light Gray oklch(0.95 0.005 250)): Medium Slate text (oklch(0.45 0.02 250)) - Ratio 6.8:1 ✓

## Font Selection
Typography should convey professionalism and authority while maintaining excellent readability for extended content consumption; Inter for its modern, neutral professionalism paired with clarity at all sizes.

- **Typographic Hierarchy**:
  - H1 (Page Title): Inter Bold/48px/tight letter spacing/-0.02em
  - H2 (Section Headers): Inter SemiBold/32px/tight/-0.01em
  - H3 (App Names): Inter SemiBold/24px/normal/0em
  - Body (Descriptions): Inter Regular/16px/relaxed/line-height 1.6
  - Small (Metadata): Inter Medium/14px/normal/line-height 1.4
  - Rating Numbers: Inter Bold/20px/tight

## Animations
Animations should be subtle and purposeful, enhancing usability through smooth state transitions and gentle micro-interactions that feel polished without drawing excessive attention.

- **Purposeful Meaning**: Smooth card hover elevations suggest interactivity; rating number count-ups on load create engagement; filter updates transition smoothly to indicate live results
- **Hierarchy of Movement**: Primary focus on card interactions (hover, click), secondary on filter toggles and modal transitions, minimal decorative motion

## Component Selection

- **Components**:
  - Card (shadcn) - App listing containers with custom hover states and shadow depth
  - Badge (shadcn) - Platform indicators, featured tags, price labels
  - Dialog (shadcn) - Detailed app review modal with scroll area
  - Select (shadcn) - Sort dropdown with custom styling
  - Checkbox (shadcn) - Filter options for features and platforms
  - Separator (shadcn) - Visual dividers between sections
  - Progress (shadcn) - Rating category bars, modified with accent colors
  - Button (shadcn) - CTAs with primary/secondary variants
  - ScrollArea (shadcn) - Smooth scrolling in modal content
  - Accordion (shadcn) - FAQ or expandable feature lists
  
- **Customizations**:
  - Hero section component with gradient background and trust indicators
  - Rating display component showing star visualization with numerical score
  - Comparison table component for side-by-side feature breakdown
  - Filter sidebar component with collapsible categories
  - App card component with hover state showing quick features preview

- **States**:
  - Cards: Subtle shadow on default, elevated shadow + border accent on hover, slight scale on active
  - Buttons: Solid primary color default, darker on hover, pressed state with scale
  - Filters: Clear visual distinction between selected/unselected with checkmarks
  - Modal: Smooth fade-in background overlay, slide-up content animation

- **Icon Selection**:
  - Star (filled/outline) for ratings
  - FunnelSimple for filters
  - SortAscending/SortDescending for sort controls
  - CheckCircle for pros, XCircle for cons
  - DeviceMobile, Globe for platform indicators
  - CurrencyDollar for pricing
  - Users for user count/popularity
  - Shield for trust/security features

- **Spacing**:
  - Page padding: px-6 md:px-12 lg:px-24
  - Section gaps: gap-16 md:gap-24
  - Card grid gaps: gap-6
  - Card internal padding: p-6
  - Element spacing within cards: gap-4

- **Mobile**:
  - Hero title scales from 32px mobile to 48px desktop
  - Filter sidebar becomes bottom sheet drawer on mobile
  - App grid: 1 column mobile, 2 columns tablet (md), 3 columns desktop (lg)
  - Detailed view switches from modal to full-screen sheet on mobile
  - Sort controls move to sticky header on mobile scroll
