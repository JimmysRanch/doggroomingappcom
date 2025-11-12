# Planning Guide

A comprehensive one-page comparison platform that helps dog owners find and evaluate the perfect grooming app through expert reviews, interactive filtering, and detailed feature breakdowns.

**Experience Qualities**:
1. **Trustworthy** - Clear expert ratings, verified reviews, and transparent comparisons build confidence in decision-making
2. **Effortless** - Intuitive filtering and sorting allow users to quickly find apps matching their specific needs without overwhelming complexity
3. **Comprehensive** - Rich detail views and side-by-side comparisons provide all necessary information without requiring external research

**Complexity Level**: Light Application (multiple features with basic state)
  - The site includes interactive filtering, sorting, comparison features, and detailed modals while maintaining a single-page experience

## Essential Features

### Interactive App Filtering
- **Functionality**: Filter apps by price type (free/freemium/paid), platform (iOS/Android/Web), and rating threshold
- **Purpose**: Help users quickly narrow down options to apps that match their requirements and constraints
- **Trigger**: User interacts with filter controls in a sticky sidebar or filter panel
- **Progression**: User selects filter criteria → App list updates in real-time → User sees filtered count → User can clear filters to reset
- **Success criteria**: Filtering is instant, results are accurate, and users can combine multiple filters

### Smart Sorting Options
- **Functionality**: Sort apps by rating (highest first), price (low to high, high to low), or popularity (review count)
- **Purpose**: Allow users to prioritize apps based on what matters most to them
- **Trigger**: User selects sort option from dropdown or toggle buttons
- **Progression**: User clicks sort option → List reorders with smooth animation → Selected sort is visually indicated
- **Success criteria**: Sorting is smooth, selection state is clear, and results match expected order

### Detailed App Comparison View
- **Functionality**: View comprehensive details about each app including ratings breakdown, pros/cons, features, and expert verdict
- **Purpose**: Provide all information needed to make an informed decision without leaving the page
- **Trigger**: User clicks "View Details" on any app card
- **Progression**: Click button → Modal slides in with smooth animation → User scrolls through detailed info → User closes modal to return
- **Success criteria**: Modal loads instantly, information is well-organized, and closing returns user to exact scroll position

### Smooth Section Navigation
- **Functionality**: Quick navigation between Hero, Apps, How It Works, Why Choose Us, and FAQ sections
- **Purpose**: Enhance one-page browsing experience with easy section jumping
- **Trigger**: User clicks navigation links or scrolls naturally
- **Progression**: Click nav link → Smooth scroll to section → Active section highlights in nav
- **Success criteria**: Scrolling is smooth, current section is always indicated, and navigation is accessible on mobile

## Edge Case Handling

- **No Results from Filters** - Show friendly empty state with suggestion to adjust filters, display count of filtered-out apps
- **Mobile Filter Visibility** - Filters collapse into slide-out drawer on mobile devices with clear filter indicator badge
- **Long App Descriptions** - Truncate with "..." on cards, full text visible in detail modal
- **Rapid Filter Changes** - Debounce or use immediate state updates to prevent performance issues
- **Modal Scroll Position** - Preserve main page scroll position when opening/closing modals

## Design Direction

The design should feel professional, trustworthy, and calming—like a reliable guide rather than a pushy salesperson. It should project expertise through clean typography and organized information hierarchy while maintaining approachability through soft colors and friendly micro-interactions. The interface should be minimal yet rich with information, avoiding clutter while ensuring every data point is easily discoverable.

## Color Selection

Analogous color scheme (adjacent colors on the color wheel) creating a harmonious, trustworthy feel with blues and purples that evoke professionalism and pet care warmth.

- **Primary Color**: Deep indigo blue (oklch(0.45 0.12 250)) - Communicates trust, professionalism, and reliability
- **Secondary Colors**: Muted slate blue (oklch(0.55 0.02 250)) for supporting elements and hover states
- **Accent Color**: Warm amber (oklch(0.68 0.17 45)) - Draws attention to CTAs and important ratings, adds warmth and approachability
- **Foreground/Background Pairings**:
  - Background (White oklch(1 0 0)): Dark blue-gray text (oklch(0.25 0.02 250)) - Ratio 11.2:1 ✓
  - Card (Soft cream oklch(0.98 0.005 85)): Dark blue-gray text (oklch(0.25 0.02 250)) - Ratio 10.8:1 ✓
  - Primary (Deep indigo oklch(0.45 0.12 250)): White text (oklch(1 0 0)) - Ratio 8.4:1 ✓
  - Secondary (Muted slate oklch(0.55 0.02 250)): White text (oklch(1 0 0)) - Ratio 5.2:1 ✓
  - Accent (Warm amber oklch(0.68 0.17 45)): Dark blue-gray text (oklch(0.2 0.02 250)) - Ratio 7.1:1 ✓
  - Muted (Light gray oklch(0.95 0.005 250)): Muted foreground (oklch(0.45 0.02 250)) - Ratio 6.8:1 ✓

## Font Selection

Inter is chosen for its exceptional legibility at all sizes, professional appearance, and extensive weight range that supports clear typographic hierarchy from headlines to small UI text.

- **Typographic Hierarchy**:
  - H1 (Hero Title): Inter Bold/56px (3.5rem)/Tight letter spacing (-0.02em)
  - H2 (Section Headers): Inter Bold/36px (2.25rem)/Tight letter spacing (-0.01em)
  - H3 (Card Titles): Inter Semibold/20px (1.25rem)/Normal spacing
  - Body (Descriptions): Inter Regular/16px (1rem)/Relaxed line height (1.6)
  - Small (Meta Info): Inter Medium/14px (0.875rem)/Normal line height (1.5)
  - Tiny (Badges): Inter Semibold/12px (0.75rem)/Wide letter spacing (0.02em)

## Animations

Animations should feel purposeful and snappy—subtle enough to not distract but present enough to guide attention and provide satisfying feedback. The overall motion language should be crisp and responsive, reflecting the efficiency users expect from a comparison tool.

- **Purposeful Meaning**: Use subtle slide-up animations on cards to create a sense of content loading naturally; filter changes trigger smooth list reordering to show cause-and-effect; modal transitions use scale + fade to maintain spatial context
- **Hierarchy of Movement**: Hero elements animate on load (200ms delay cascade); app cards animate on scroll into view; filter interactions provide immediate 100ms feedback; modal dialogs are most prominent with 300ms enter/exit transitions

## Component Selection

- **Components**: 
  - Dialog (modal for app details with ScrollArea for long content)
  - Card (app listings with hover states)
  - Button (primary CTAs with accent color, secondary for filters)
  - Badge (featured tags, platform indicators, price type)
  - Select/Dropdown Menu (sort options)
  - Sheet (mobile filter drawer)
  - Separator (visual breaks between sections)
  - Accordion (FAQ section)
  - Tabs (potential alternate view modes)
  
- **Customizations**: 
  - Filter toggle buttons with active state highlighting
  - Star rating display component with partial stars
  - Rating bar component with animated progress fills
  - Platform badge component with iOS/Android/Web icons
  
- **States**: 
  - Buttons: Default, Hover (subtle lift + shadow), Active (pressed down), Disabled (reduced opacity)
  - Cards: Rest, Hover (lift -4px + shadow increase), Featured (border accent + badge)
  - Filters: Inactive (muted), Active (primary color + bold), Hover (background change)
  - Inputs: Empty, Filled, Focused (ring + border color), Error (red accent)
  
- **Icon Selection**: 
  - @phosphor-icons: Star (ratings), Funnel (filters), SortAscending/SortDescending (sort), Check/X (pros/cons), DeviceMobile/Desktop/Globe (platforms), Shield (verified), Users (community), ChevronDown (dropdowns)
  
- **Spacing**: 
  - Container padding: px-6 md:px-12 lg:px-24
  - Section spacing: py-16 md:py-24
  - Card padding: p-6
  - Element gaps: gap-2 (small), gap-4 (medium), gap-6 (large)
  - Grid gaps: gap-6 (cards)
  
- **Mobile**: 
  - Hero text scales from text-4xl to text-6xl
  - Grid changes from 1 column to md:2 lg:3 columns
  - Filters move from sidebar to bottom sheet drawer
  - Navigation condenses to hamburger menu (if nav is added)
  - Stat cards stack vertically on mobile
  - Modal takes full screen on small devices with max-h-[90vh]
