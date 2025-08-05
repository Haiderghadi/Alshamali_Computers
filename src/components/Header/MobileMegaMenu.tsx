import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

// Categories and products data (same as desktop)
const categories = [
  {
    id: "laptops",
    name: "Laptops",
    image: "./macbook.jpg",
  },
  {
    id: "gaming-laptops",
    name: "Gaming Laptops",
    image:
      "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400&h=300&fit=crop",
  },
  {
    id: "desktops",
    name: "Desktops",
    image: "./dellcpu.jpeg",
  },
  {
    id: "all-in-one",
    name: "All-in-One Desktops",
    image:
      "https://images.unsplash.com/photo-1580894746908-bd0d63a2c74e?w=400&h=300&fit=crop",
  },
  {
    id: "monitors",
    name: "Monitors",
    image:
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&h=300&fit=crop",
  },
  {
    id: "graphic-cards",
    name: "Graphic Cards",
    image:
      "https://images.unsplash.com/photo-1591488320449-011701bb6704?w=400&h=300&fit=crop",
  },
  {
    id: "processors",
    name: "Processors",
    image:
      "https://images.unsplash.com/photo-1555617778-02518624e14d?w=400&h=300&fit=crop",
  },
  {
    id: "memory",
    name: "Memory",
    image:
      "https://images.unsplash.com/photo-1562976540-1502c2145186?w=400&h=300&fit=crop",
  },
  {
    id: "storage",
    name: "Storage",
    image:
      "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=400&h=300&fit=crop",
  },
  {
    id: "networking",
    name: "Networking",
    image:
      "https://images.unsplash.com/photo-1590642912659-6fc41c94bb5e?w=400&h=300&fit=crop",
  },
  {
    id: "printers",
    name: "Printers & Scanners",
    image:
      "https://images.unsplash.com/photo-1589820296154-d593fed111f1?w=400&h=300&fit=crop",
  },
  {
    id: "software",
    name: "Software",
    image:
      "https://images.unsplash.com/photo-1581092580502-5c1f30c8b043?w=400&h=300&fit=crop",
  },
  {
    id: "accessories",
    name: "Accessories",
    image:
      "https://images.unsplash.com/photo-1512499617640-c2f999098c80?w=400&h=300&fit=crop",
  },
];

const products = [
  {
    id: 1,
    name: "MacBook Pro 16-inch",
    price: "$2,499",
    category: "laptops",
    image: "./macbook.jpg",
    description: "Latest MacBook Pro with M2 Pro chip",
  },
  {
    id: 2,
    name: "Dell XPS 15",
    price: "$1,899",
    category: "laptops",
    image: "./dell.png",
    description: "Premium Windows laptop for professionals",
  },
  {
    id: 3,
    name: "HP Pavilion Gaming",
    price: "$1,299",
    category: "gaming-laptops",
    image: "./hp.png",
    description: "High-performance gaming laptop",
  },
  {
    id: 4,
    name: "Lenovo ThinkPad X1",
    price: "$1,599",
    category: "laptops",
    image: "./lenovo.png",
    description: "Business-class ultrabook",
  },
  {
    id: 5,
    name: "Alienware m15",
    price: "$2,199",
    category: "gaming-laptops",
    image:
      "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400&h=300&fit=crop",
    description: "Premium gaming laptop with RTX graphics",
  },
  {
    id: 6,
    name: "Dell OptiPlex Desktop",
    price: "$899",
    category: "desktops",
    image: "./dellcpu.jpeg",
    description: "Professional desktop workstation",
  },
  {
    id: 7,
    name: "iMac 27-inch",
    price: "$1,799",
    category: "all-in-one",
    image: "./apple.jpg",
    description: "All-in-one desktop with Retina display",
  },
  {
    id: 8,
    name: "Samsung 32-inch Monitor",
    price: "$399",
    category: "monitors",
    image: "./samsung.png",
    description: "4K Ultra HD monitor",
  },
  {
    id: 9,
    name: "NVIDIA RTX 4080",
    price: "$1,199",
    category: "graphic-cards",
    image:
      "https://images.unsplash.com/photo-1591488320449-011701bb6704?w=400&h=300&fit=crop",
    description: "High-end graphics card for gaming",
  },
  {
    id: 10,
    name: "AMD Ryzen 9 7950X",
    price: "$699",
    category: "processors",
    image:
      "https://images.unsplash.com/photo-1555617778-02518624e14d?w=400&h=300&fit=crop",
    description: "High-performance desktop processor",
  },
];

interface MobileMegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMegaMenu = ({ isOpen, onClose }: MobileMegaMenuProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [view, setView] = useState<"categories" | "products">("categories");

  const getProductsByCategory = (categoryId: string) => {
    return products.filter((product) => product.category === categoryId);
  };

  const handleCategoryClick = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setView("products");
  };

  const handleBackToCategories = () => {
    setView("categories");
    setSelectedCategory(null);
  };

  const handleClose = () => {
    setView("categories");
    setSelectedCategory(null);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="w-full bg-white border-t border-gray-200"
        >
          <div className="p-4">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-heading">
                {view === "categories"
                  ? "Categories"
                  : categories.find((c) => c.id === selectedCategory)?.name}
              </h3>
              <button
                onClick={handleClose}
                className="p-2 text-gray-400 hover:text-lightDescription"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Back button for products view */}
            {view === "products" && (
              <button
                onClick={handleBackToCategories}
                className="flex items-center text-blue-600 hover:text-blue-800 mb-4"
              >
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                Back to Categories
              </button>
            )}

            <AnimatePresence mode="wait">
              {view === "categories" ? (
                <motion.div
                  key="categories"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-2 max-h-[60vh] overflow-y-auto"
                >
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => handleCategoryClick(category.id)}
                      className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors text-left"
                    >
                      <img
                        src={category.image}
                        alt={category.name}
                        className="w-10 h-10 rounded object-cover"
                      />
                      <span className="text-sm font-medium text-description">
                        {category.name}
                      </span>
                      <svg
                        className="w-4 h-4 ml-auto text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  key="products"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-3 max-h-[60vh] overflow-y-auto"
                >
                  {getProductsByCategory(selectedCategory!).map((product) => (
                    <a
                      key={product.id}
                      href={`/shop/product/${product.id}`}
                      onClick={handleClose}
                      className="block p-4 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-sm transition-all"
                    >
                      <div className="flex items-center space-x-3">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-12 h-12 rounded object-cover"
                        />
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-medium text-heading truncate">
                            {product.name}
                          </h4>
                          <p className="text-xs text-gray-500 truncate">
                            {product.description}
                          </p>
                          <p className="text-sm font-semibold text-blue-600">
                            {product.price}
                          </p>
                        </div>
                      </div>
                    </a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMegaMenu;
