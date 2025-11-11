import { Card } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Separator } from '@/components/ui/separator'
import { SortOption, PriceFilter, PlatformFilter } from '@/lib/types'
import { FunnelSimple, SortAscending } from '@phosphor-icons/react'

interface FilterSidebarProps {
  sortBy: SortOption
  onSortChange: (value: SortOption) => void
  priceFilter: PriceFilter
  onPriceFilterChange: (value: PriceFilter) => void
  platformFilter: PlatformFilter
  onPlatformFilterChange: (value: PlatformFilter) => void
  showFeaturedOnly: boolean
  onShowFeaturedOnlyChange: (value: boolean) => void
}

export function FilterSidebar({
  sortBy,
  onSortChange,
  priceFilter,
  onPriceFilterChange,
  platformFilter,
  onPlatformFilterChange,
  showFeaturedOnly,
  onShowFeaturedOnlyChange
}: FilterSidebarProps) {
  return (
    <Card className="p-6 sticky top-6">
      <div className="space-y-6">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <SortAscending className="w-5 h-5 text-primary" weight="bold" />
            <h3 className="font-semibold text-lg text-foreground">Sort By</h3>
          </div>
          <Select value={sortBy} onValueChange={onSortChange}>
            <SelectTrigger className="w-full">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="rating">Highest Rated</SelectItem>
              <SelectItem value="popular">Most Popular</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Separator />

        <div>
          <div className="flex items-center gap-2 mb-4">
            <FunnelSimple className="w-5 h-5 text-primary" weight="bold" />
            <h3 className="font-semibold text-lg text-foreground">Filters</h3>
          </div>

          <div className="space-y-4">
            <div>
              <Label className="text-sm font-semibold text-foreground mb-3 block">Price Type</Label>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="price-all" 
                    checked={priceFilter === 'all'}
                    onCheckedChange={() => onPriceFilterChange('all')}
                  />
                  <label htmlFor="price-all" className="text-sm text-foreground cursor-pointer">
                    All Apps
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="price-free" 
                    checked={priceFilter === 'free'}
                    onCheckedChange={() => onPriceFilterChange('free')}
                  />
                  <label htmlFor="price-free" className="text-sm text-foreground cursor-pointer">
                    Free Only
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="price-freemium" 
                    checked={priceFilter === 'freemium'}
                    onCheckedChange={() => onPriceFilterChange('freemium')}
                  />
                  <label htmlFor="price-freemium" className="text-sm text-foreground cursor-pointer">
                    Freemium
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="price-paid" 
                    checked={priceFilter === 'paid'}
                    onCheckedChange={() => onPriceFilterChange('paid')}
                  />
                  <label htmlFor="price-paid" className="text-sm text-foreground cursor-pointer">
                    Paid Only
                  </label>
                </div>
              </div>
            </div>

            <Separator />

            <div>
              <Label className="text-sm font-semibold text-foreground mb-3 block">Platform</Label>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="platform-all" 
                    checked={platformFilter === 'all'}
                    onCheckedChange={() => onPlatformFilterChange('all')}
                  />
                  <label htmlFor="platform-all" className="text-sm text-foreground cursor-pointer">
                    All Platforms
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="platform-ios" 
                    checked={platformFilter === 'ios'}
                    onCheckedChange={() => onPlatformFilterChange('ios')}
                  />
                  <label htmlFor="platform-ios" className="text-sm text-foreground cursor-pointer">
                    iOS 📱
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="platform-android" 
                    checked={platformFilter === 'android'}
                    onCheckedChange={() => onPlatformFilterChange('android')}
                  />
                  <label htmlFor="platform-android" className="text-sm text-foreground cursor-pointer">
                    Android 🤖
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="platform-web" 
                    checked={platformFilter === 'web'}
                    onCheckedChange={() => onPlatformFilterChange('web')}
                  />
                  <label htmlFor="platform-web" className="text-sm text-foreground cursor-pointer">
                    Web 🌐
                  </label>
                </div>
              </div>
            </div>

            <Separator />

            <div className="flex items-center space-x-2">
              <Checkbox 
                id="featured-only" 
                checked={showFeaturedOnly}
                onCheckedChange={onShowFeaturedOnlyChange}
              />
              <label htmlFor="featured-only" className="text-sm font-semibold text-foreground cursor-pointer">
                Featured Apps Only
              </label>
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}
