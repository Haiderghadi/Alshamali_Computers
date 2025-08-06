import React from "react";
import { shopCategories } from "../../constants";

interface ShopHeaderProps {
  selectedCategory: string;
  productCount: number;
  sortBy: string;
  onSortChange: (sort: string) => void;
}

export const ShopHeader: React.FC<ShopHeaderProps> = ({
  selectedCategory,
  productCount,
  sortBy,
  onSortChange,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">
            {selectedCategory === "all"
              ? "All Products"
              : shopCategories.find((c) => c.id === selectedCategory)?.name}
          </h2>
          <p className="text-gray-600 mt-1">
            {productCount} product{productCount !== 1 ? "s" : ""} found
          </p>
        </div>

        <div className="flex items-center space-x-4">
          <select
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Highest Rated</option>
            <option value="newest">Newest</option>
          </select>
        </div>
      </div>
    </div>
  );
};
