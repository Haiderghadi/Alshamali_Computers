import React from "react";
import { ProductCard } from "./ProductCard";

interface Product {
  id: number;
  name: string;
  brand: string;
  price: string;
  originalPrice?: string;
  rating: number;
  image: string;
  inStock: boolean;
}

interface ProductsGridProps {
  products: Product[];
  onProductClick: (productId: number) => void;
  onClearFilters: () => void;
}

export const ProductsGrid: React.FC<ProductsGridProps> = ({
  products,
  onProductClick,
  onClearFilters,
}) => {
  if (products.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
          <svg
            className="w-8 h-8 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
            />
          </svg>
        </div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">
          No products found
        </h3>
        <p className="text-gray-600 mb-4">
          Try adjusting your filters or check back later for new products.
        </p>
        <button
          onClick={onClearFilters}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Clear Filters
        </button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onClick={onProductClick}
        />
      ))}
    </div>
  );
};
