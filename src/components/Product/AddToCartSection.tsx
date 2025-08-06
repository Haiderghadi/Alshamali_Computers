import React from "react";
import { QuantitySelector } from "./QuantitySelector";

interface AddToCartSectionProps {
  quantity: number;
  onQuantityChange: (quantity: number) => void;
  inStock: boolean;
  onAddToCart: () => void;
  onAddToWishlist: () => void;
}

export const AddToCartSection: React.FC<AddToCartSectionProps> = ({
  quantity,
  onQuantityChange,
  inStock,
  onAddToCart,
  onAddToWishlist,
}) => {
  return (
    <div className="bg-gray-50 rounded-lg p-6">
      <div className="mb-4">
        <QuantitySelector
          quantity={quantity}
          onQuantityChange={onQuantityChange}
        />
      </div>

      <div className="space-y-3">
        <button
          disabled={!inStock}
          onClick={onAddToCart}
          className={`w-full py-3 px-6 rounded-lg font-medium transition-colors ${
            inStock
              ? "bg-blue-600 text-white hover:bg-blue-700"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
        >
          {inStock ? "Add to Cart" : "Out of Stock"}
        </button>

        <button
          onClick={onAddToWishlist}
          className="w-full py-3 px-6 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
        >
          Add to Wishlist
        </button>
      </div>
    </div>
  );
};
