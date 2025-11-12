import { SortOption, PriceFilter, PlatformFilter } from '@/lib/types'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select'
import { 
  SortAscending, 
  Funnel, 
  X,
  DeviceMobile,
  Desktop,
  Globe,
  CurrencyDollar,
  Star
} from '@phosphor-icons/react'
import { Card } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

interface FilterControlsProps {
  sortBy: SortOption
  onSortChange: (value: SortOption) => void
  priceFilter: PriceFilter
  onPriceFilterChange: (value: PriceFilter) => void
  platformFilter: PlatformFilter
  onPlatformFilterChange: (value: PlatformFilter) => void
  minRating: number
  onMinRatingChange: (value: number) => void
  resultCount: number
  totalCount: number
  hasActiveFilters: boolean
  onClearFilters: () => void
}

export function FilterControls({
  sortBy,
  onSortChange,
  priceFilter,
  onPriceFilterChange,
  platformFilter,
  onPlatformFilterChange,
  minRating,
  onMinRatingChange,
  resultCount,
  totalCount,
  hasActiveFilters,
  onClearFilters
}: FilterControlsProps) {
  return (
    <Card className="p-6 mb-8">
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-2">
            <Funnel className="w-5 h-5 text-muted-foreground" weight="bold" />
            <h3 className="text-lg font-semibold text-foreground">Filter & Sort</h3>
            {hasActiveFilters && (
              <Badge variant="secondary" className="ml-2">
                {resultCount} of {totalCount}
              </Badge>
            )}
          </div>
          
          {hasActiveFilters && (
            <Button
              variant="ghost"
              size="sm"
              onClick={onClearFilters}
              className="text-muted-foreground hover:text-foreground"
            >
              <X className="w-4 h-4 mr-1" />
              Clear Filters
            </Button>
          )}
        </div>

        <Separator />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-foreground flex items-center gap-2">
              <SortAscending className="w-4 h-4" />
              Sort By
            </label>
            <Select value={sortBy} onValueChange={(value) => onSortChange(value as SortOption)}>
              <SelectTrigger>
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

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-foreground flex items-center gap-2">
              <CurrencyDollar className="w-4 h-4" />
              Price
            </label>
            <Select value={priceFilter} onValueChange={(value) => onPriceFilterChange(value as PriceFilter)}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Prices</SelectItem>
                <SelectItem value="free">Free Only</SelectItem>
                <SelectItem value="freemium">Freemium</SelectItem>
                <SelectItem value="paid">Paid Only</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-foreground flex items-center gap-2">
              <DeviceMobile className="w-4 h-4" />
              Platform
            </label>
            <Select value={platformFilter} onValueChange={(value) => onPlatformFilterChange(value as PlatformFilter)}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Platforms</SelectItem>
                <SelectItem value="ios">
                  <span className="flex items-center gap-2">
                    <DeviceMobile className="w-4 h-4" />
                    iOS
                  </span>
                </SelectItem>
                <SelectItem value="android">
                  <span className="flex items-center gap-2">
                    <Desktop className="w-4 h-4" />
                    Android
                  </span>
                </SelectItem>
                <SelectItem value="web">
                  <span className="flex items-center gap-2">
                    <Globe className="w-4 h-4" />
                    Web
                  </span>
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-foreground flex items-center gap-2">
              <Star className="w-4 h-4" weight="fill" />
              Minimum Rating
            </label>
            <Select value={minRating.toString()} onValueChange={(value) => onMinRatingChange(parseFloat(value))}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="0">Any Rating</SelectItem>
                <SelectItem value="3">3+ Stars</SelectItem>
                <SelectItem value="4">4+ Stars</SelectItem>
                <SelectItem value="4.5">4.5+ Stars</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </Card>
  )
}
