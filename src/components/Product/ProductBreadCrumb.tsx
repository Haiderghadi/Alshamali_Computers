import React from "react";

interface BreadcrumbItem {
  label: string;
  onClick: () => void;
}

interface ProductBreadcrumbProps {
  items: BreadcrumbItem[];
  currentPage: string;
}

export const ProductBreadcrumb: React.FC<ProductBreadcrumbProps> = ({
  items,
  currentPage,
}) => {
  return (
    <div className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="flex items-center space-x-2 text-sm text-gray-500">
          {items.map((item, index) => (
            <React.Fragment key={index}>
              <button
                onClick={item.onClick}
                className="hover:text-blue-600 transition-colors"
              >
                {item.label}
              </button>
              <span>/</span>
            </React.Fragment>
          ))}
          <span className="text-gray-900">{currentPage}</span>
        </nav>
      </div>
    </div>
  );
};
