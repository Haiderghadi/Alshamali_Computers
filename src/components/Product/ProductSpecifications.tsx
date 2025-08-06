import React from "react";

interface ProductSpecificationsProps {
  specs: Record<string, string>;
  
}

export const ProductSpecifications: React.FC<ProductSpecificationsProps> = ({
  specs,
}) => {
  return (
    <div className="mt-16">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Specifications</h2>
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {Object.entries(specs).map(([key, value]) => (
            <div
              key={key}
              className="flex justify-between py-4 px-6 border-b border-gray-200 last:border-b-0"
            >
              <span className="text-gray-600 capitalize">
                {key.replace(/([A-Z])/g, " $1").trim()}:
              </span>
              <span className="text-gray-900 font-medium">{value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
