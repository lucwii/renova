import { Label } from './ui/Label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/Select';
import React from 'react'
import { Switch } from './ui/Switch';
import Button from './ui/Button';

interface ProductFiltersProps {
    categories: string[];
    selectedCategory: string;
    onCategoryChange: (category: string) => void;
    showFeaturedOnly: boolean;
    onFeaturedToggle: (featured: boolean) => void;
}

const ProductFilters = ({
  categories,
  selectedCategory,
  onCategoryChange,
  showFeaturedOnly,
  onFeaturedToggle
}: ProductFiltersProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border-gray-200 border-1">
      <h2 className='font-semibold text-lg mb-4'>Filters</h2>

      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
        <div className="flex-1">
          <Label htmlFor='category-select' className='text-sm font-medium mb-2 block'>
            Category
          </Label>
          <Select value={selectedCategory || "all"} onValueChange={(value) => onCategoryChange(value === "all" ? "" : value)}>
            <SelectTrigger id='category-select' className='w-full border-gray-200'>
              <SelectValue placeholder="All categories" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='all'>All categories</SelectItem>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-center space-x-2">
          <Switch
          id='featured-toggle'
          checked={showFeaturedOnly}
          onCheckedChange={onFeaturedToggle}
          />
          <Label htmlFor='featured-toggle' className='text-sm font-medium'>
            Featured Only
          </Label>
        </div>

        {(selectedCategory || showFeaturedOnly) && (
          <Button
          variant="outline"
          onClick={() => {
            onCategoryChange("");
            onFeaturedToggle(false);
          }}
          className="whitespace-nowrap"
          >
            Clear Filters
          </Button>
        )}
      </div>
    </div>
  )
}

export default ProductFilters