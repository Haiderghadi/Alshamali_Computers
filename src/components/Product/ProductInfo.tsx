import React from "react";
import { StarRating } from "../reusables/StarRating";

interface Product {
  id: number;
  name: string;
  brand: string;
  price: string;
  originalPrice?: string;
  rating: number;
  description: string;
  inStock: boolean;
}

interface ProductInfoProps {
  product: Product;
}

export const ProductInfo: React.FC<ProductInfoProps> = ({ product }) => {
  const calculateSavings = () => {
    if (!product.originalPrice) return 0;
    const original = parseFloat(product.originalPrice.replace(/[^\d.]/g, ""));
    const current = parseFloat(product.price.replace(/[^\d.]/g, ""));
    return original - current;
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm text-gray-500 uppercase tracking-wide">
          {product.brand}
        </span>
        <StarRating rating={product.rating} />
      </div>

      <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>

      <p className="text-gray-600 mb-4">{product.description}</p>

      <div className="flex items-center space-x-4 mb-6">
        <div className="flex items-center space-x-2">
          <span className="text-3xl font-bold text-gray-900">
            {product.price}
          </span>
          {product.originalPrice && (
            <span className="text-lg text-gray-500 line-through">
              {product.originalPrice}
            </span>
          )}
        </div>

        {product.originalPrice && (
          <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-medium">
            Save {calculateSavings().toFixed(2)} KWD
          </span>
        )}
      </div>

      {/* Stock Status */}
      <div className="flex items-center space-x-2 mb-6">
        <div
          className={`w-3 h-3 rounded-full ${
            product.inStock ? "bg-green-500" : "bg-red-500"
          }`}
        ></div>
        <span
          className={`text-sm font-medium ${
            product.inStock ? "text-green-600" : "text-red-600"
          }`}
        >
          {product.inStock ? "In Stock" : "Out of Stock"}
        </span>
      </div>
    </div>
  );
};
