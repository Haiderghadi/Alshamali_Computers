import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "../../lib/utils";
import { shopCategories, shopProducts } from "../../constants";
import { useNavigate } from "react-router-dom";

interface MegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MegaMenu = ({ isOpen, onClose }: MegaMenuProps) => {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const navigate = useNavigate();

  const getProductsByCategory = (categoryId: string) => {
    return shopProducts.filter((product) => product.category === categoryId);
  };

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            className={`w-3 h-3 ${
              star <= rating ? "text-yellow-400" : "text-gray-300"
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  const handleProductClick = (productId: number) => {
    navigate(`/shop/product/${productId}`);
    onClose();
  };

  const handleCategoryClick = (categoryId: string) => {
    navigate(`/shop/category/${categoryId}`);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          onMouseLeave={onClose}
          className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50 bg-white shadow-2xl border border-gray-100 rounded-lg overflow-hidden w-[900px]"
        >
          <div className="w-full">
            <div className="grid grid-cols-12 min-h-[500px]">
              {/* Categories Column */}
              <div className="col-span-4 bg-gray-50 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Categories
                </h3>
                <div className="space-y-2 max-h-[450px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                  {shopCategories
                    .filter((cat) => cat.id !== "all")
                    .map((category) => (
                      <div
                        key={category.id}
                        onMouseEnter={() => setHoveredCategory(category.id)}
                        className={cn(
                          "flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-colors",
                          hoveredCategory === category.id
                            ? "bg-white shadow-sm border border-gray-200"
                            : "hover:bg-gray-100"
                        )}
                      >
                        <img
                          src={category.image}
                          alt={category.name}
                          className="w-8 h-8 rounded object-cover"
                        />
                        <div className="flex-1">
                          <span className="text-sm font-medium text-gray-900">
                            {category.name}
                          </span>
                          <div className="text-xs text-gray-500">
                            {category.productCount} products
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>

              {/* Products Column */}
              <div className="col-span-8 p-6">
                <AnimatePresence mode="wait">
                  {hoveredCategory ? (
                    <motion.div
                      key={hoveredCategory}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-4"
                    >
                      <div className="flex items-center justify-between">
                        <h3 className="text-xl font-semibold text-gray-900">
                          {
                            shopCategories.find((c) => c.id === hoveredCategory)
                              ?.name
                          }
                        </h3>
                        <button
                          onClick={() => handleCategoryClick(hoveredCategory)}
                          className="text-sm text-blue-600 hover:text-blue-800 font-medium"
                        >
                          View All →
                        </button>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        {getProductsByCategory(hoveredCategory)
                          .slice(0, 6)
                          .map((product) => (
                            <div
                              key={product.id}
                              onClick={() => handleProductClick(product.id)}
                              className="group block p-4 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all cursor-pointer"
                            >
                              <div className="flex items-center space-x-3">
                                <div className="relative">
                                  <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-12 h-12 rounded object-cover"
                                  />
                                  {!product.inStock && (
                                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
                                  )}
                                </div>
                                <div className="flex-1 min-w-0">
                                  <h4 className="text-sm font-medium text-gray-900 group-hover:text-blue-600 truncate">
                                    {product.name}
                                  </h4>
                                  <p className="text-xs text-gray-500 truncate">
                                    {product.description}
                                  </p>
                                  <div className="flex items-center justify-between mt-1">
                                    <p className="text-sm font-semibold text-blue-600">
                                      {product.price}
                                    </p>
                                    {renderStars(product.rating)}
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex items-center justify-center h-full"
                    >
                      <div className="text-center">
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
                          Browse Categories
                        </h3>
                        <p className="text-sm text-gray-500">
                          Hover over a category to see products
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MegaMenu;
