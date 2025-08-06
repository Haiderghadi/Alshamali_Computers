import React from "react";
import { StarRating } from "../reusables/StarRating";

interface Product {
  id: number;
  name: string;
  brand: string;
  price: string;
  rating: number;
  image: string;
  inStock: boolean;
}

interface RelatedProductsProps {
  products: Product[];
  onProductClick: (productId: number) => void;
}

export const RelatedProducts: React.FC<RelatedProductsProps> = ({
  products,
  onProductClick,
}) => {
  if (products.length === 0) return null;

  return (
    <div className="mt-16">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Related Products
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            onClick={() => onProductClick(product.id)}
            className="group bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden border border-gray-200"
          >
            <div className="relative aspect-square overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              {!product.inStock && (
                <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-medium">
                  Out of Stock
                </div>
              )}
            </div>

            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-gray-500 uppercase tracking-wide">
                  {product.brand}
                </span>
                <StarRating
                  rating={product.rating}
                  showCount={false}
                  size="sm"
                />
              </div>

              <h3 className="text-sm font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                {product.name}
              </h3>

              <div className="flex items-center justify-between">
                <span className="text-lg font-bold text-gray-900">
                  {product.price}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
