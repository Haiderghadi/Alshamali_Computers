import React from "react";

interface QuantitySelectorProps {
  quantity: number;
  onQuantityChange: (quantity: number) => void;
  min?: number;
  max?: number;
}

export const QuantitySelector: React.FC<QuantitySelectorProps> = ({
  quantity,
  onQuantityChange,
  min = 1,
  max = 99,
}) => {
  const handleDecrease = () => {
    if (quantity > min) {
      onQuantityChange(quantity - 1);
    }
  };

  const handleIncrease = () => {
    if (quantity < max) {
      onQuantityChange(quantity + 1);
    }
  };

  return (
    <div className="flex items-center space-x-4">
      <label className="text-sm font-medium text-gray-700">Quantity:</label>
      <div className="flex items-center border border-gray-300 rounded-lg">
        <button
          onClick={handleDecrease}
          disabled={quantity <= min}
          className="px-3 py-1 text-gray-600 hover:text-gray-800 disabled:opacity-50"
        >
          -
        </button>
        <span className="px-3 py-1 text-gray-900 font-medium">{quantity}</span>
        <button
          onClick={handleIncrease}
          disabled={quantity >= max}
          className="px-3 py-1 text-gray-600 hover:text-gray-800 disabled:opacity-50"
        >
          +
        </button>
      </div>
    </div>
  );
};
