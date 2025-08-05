import { useState, useEffect } from "react";
import { useParams, useNavigate, Outlet } from "react-router-dom";

// Product data with categories
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
    description: "16-core desktop processor",
  },
  {
    id: 11,
    name: "Corsair 32GB RAM",
    price: "$199",
    category: "memory",
    image:
      "https://images.unsplash.com/photo-1562976540-1502c2145186?w=400&h=300&fit=crop",
    description: "High-speed DDR5 memory",
  },
  {
    id: 12,
    name: "Samsung 2TB SSD",
    price: "$179",
    category: "storage",
    image:
      "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=400&h=300&fit=crop",
    description: "NVMe SSD with high read/write speeds",
  },
  {
    id: 13,
    name: "Cisco Switch 24-Port",
    price: "$299",
    category: "networking",
    image:
      "https://images.unsplash.com/photo-1590642912659-6fc41c94bb5e?w=400&h=300&fit=crop",
    description: "Managed network switch",
  },
  {
    id: 14,
    name: "HP LaserJet Pro",
    price: "$249",
    category: "printers",
    image:
      "https://images.unsplash.com/photo-1589820296154-d593fed111f1?w=400&h=300&fit=crop",
    description: "Professional laser printer",
  },
  {
    id: 15,
    name: "Kaspersky Total Security",
    price: "$59",
    category: "software",
    image: "./kaspersky.png",
    description: "Complete security suite",
  },
  {
    id: 16,
    name: "Apple AirPods Pro",
    price: "$249",
    category: "accessories",
    image: "./apple.svg",
    description: "Wireless noise-cancelling earbuds",
  },
];

// Categories data
const categories = [
  {
    id: "all",
    name: "All Products",
    image:
      "https://images.unsplash.com/photo-1512499617640-c2f999098c80?w=400&h=300&fit=crop",
  },
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

const Shop = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState(category || "all");
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    if (category) {
      setSelectedCategory(category);
    }
  }, [category]);

  useEffect(() => {
    if (selectedCategory === "all") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(
        (product) => product.category === selectedCategory
      );
      setFilteredProducts(filtered);
    }
  }, [selectedCategory]);

  const handleCategoryClick = (categoryId: string) => {
    setSelectedCategory(categoryId);
    if (categoryId === "all") {
      navigate("/shop");
    } else {
      navigate(`/shop/category/${categoryId}`);
    }
  };

  const handleProductClick = (productId: number) => {
    navigate(`/shop/product/${productId}`);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Category Selection */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h2 className="text-2xl font-bold text-heading mb-6">
            Shop by Category
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-4">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleCategoryClick(cat.id)}
                className={`group relative overflow-hidden rounded-lg transition-all duration-300 ${
                  selectedCategory === cat.id
                    ? "ring-2 ring-blue-500 ring-offset-2"
                    : "hover:scale-105"
                }`}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white font-medium text-sm px-2 text-center">
                    {cat.name}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-heading">
              {selectedCategory === "all"
                ? "All Products"
                : categories.find((c) => c.id === selectedCategory)?.name}
            </h1>
            <p className="text-lightDescription mt-2">
              {filteredProducts.length} product
              {filteredProducts.length !== 1 ? "s" : ""} found
            </p>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              onClick={() => handleProductClick(product.id)}
              className="group bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-heading mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {product.name}
                </h3>
                <p className="text-sm text-lightDescription mb-3 line-clamp-2">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-heading">
                    {product.price}
                  </span>
                  <span className="text-xs text-gray-500 uppercase tracking-wide">
                    {categories.find((c) => c.id === product.category)?.name}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-lg font-medium text-heading mb-2">
              No products found
            </h3>
            <p className="text-lightDescription">
              Try selecting a different category or check back later.
            </p>
          </div>
        )}
      </div>

      {/* Nested Routes */}
      <Outlet />
    </div>
  );
};

export default Shop;
