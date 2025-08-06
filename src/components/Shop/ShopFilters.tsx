import React from "react";
import { shopCategories } from "../../constants";

interface ShopFiltersProps {
  selectedCategory: string;
  sortBy: string;
  priceRange: [number, number];
  brandFilter: string[];
  availabilityFilter: string[];
  brands: string[];
  onCategoryChange: (category: string) => void;
  onSortChange: (sort: string) => void;
  onPriceRangeChange: (range: [number, number]) => void;
  onBrandToggle: (brand: string) => void;
  onAvailabilityToggle: (availability: string) => void;
  onClearFilters: () => void;
}

export const ShopFilters: React.FC<ShopFiltersProps> = ({
  selectedCategory,
  priceRange,
  brandFilter,
  availabilityFilter,
  brands,
  onCategoryChange,
  onPriceRangeChange,
  onBrandToggle,
  onAvailabilityToggle,
  onClearFilters,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 sticky top-8">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Filters</h3>
        <button
          onClick={onClearFilters}
          className="text-sm text-blue-600 hover:text-blue-800"
        >
          Clear All
        </button>
      </div>

      {/* Categories */}
      <div className="mb-6">
        <h4 className="font-medium text-gray-900 mb-3">Categories</h4>
        <div className="space-y-2">
          {shopCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => onCategoryChange(cat.id)}
              className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                selectedCategory === cat.id
                  ? "bg-blue-100 text-blue-700 font-medium"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              <div className="flex items-center justify-between">
                <span>{cat.name}</span>
                <span className="text-xs text-gray-400">
                  ({cat.productCount})
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div className="mb-6">
        <h4 className="font-medium text-gray-900 mb-3">Price Range</h4>
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span>KWD {priceRange[0]}</span>
            <span>KWD {priceRange[1]}</span>
          </div>
          <input
            type="range"
            min="0"
            max="5000"
            value={priceRange[1]}
            onChange={(e) =>
              onPriceRangeChange([priceRange[0], parseInt(e.target.value)])
            }
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
        </div>
      </div>

      {/* Brands */}
      <div className="mb-6">
        <h4 className="font-medium text-gray-900 mb-3">Brands</h4>
        <div className="space-y-2 max-h-40 overflow-y-auto">
          {brands.map((brand) => (
            <label
              key={brand}
              className="flex items-center space-x-2 cursor-pointer"
            >
              <input
                type="checkbox"
                checked={brandFilter.includes(brand)}
                onChange={() => onBrandToggle(brand)}
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="text-sm text-gray-600">{brand}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Availability */}
      <div className="mb-6">
        <h4 className="font-medium text-gray-900 mb-3">Availability</h4>
        <div className="space-y-2">
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="checkbox"
              checked={availabilityFilter.includes("in-stock")}
              onChange={() => onAvailabilityToggle("in-stock")}
              className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <span className="text-sm text-gray-600">In Stock</span>
          </label>
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="checkbox"
              checked={availabilityFilter.includes("out-of-stock")}
              onChange={() => onAvailabilityToggle("out-of-stock")}
              className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <span className="text-sm text-gray-600">Out of Stock</span>
          </label>
        </div>
      </div>
    </div>
  );
};
