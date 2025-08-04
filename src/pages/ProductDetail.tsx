import { useParams, useNavigate } from "react-router-dom";

// Product data (in a real app, this would come from an API or context)
const products = [
  {
    id: 1,
    name: "MacBook Pro 16-inch",
    price: "$2,499",
    category: "laptops",
    image: "./macbook.jpg",
    description: "Latest MacBook Pro with M2 Pro chip",
    specs: {
      processor: "M2 Pro chip",
      memory: "16GB unified memory",
      storage: "512GB SSD",
      display: "16-inch Liquid Retina XDR display",
      graphics: "Integrated graphics",
    },
  },
  {
    id: 2,
    name: "Dell XPS 15",
    price: "$1,899",
    category: "laptops",
    image: "./dell.png",
    description: "Premium Windows laptop for professionals",
    specs: {
      processor: "Intel Core i7-12700H",
      memory: "16GB DDR5",
      storage: "512GB NVMe SSD",
      display: "15.6-inch 4K OLED",
      graphics: "NVIDIA RTX 3050 Ti",
    },
  },
  // Add more products as needed
];

const ProductDetail = () => {
  const { productId } = useParams();
  const navigate = useNavigate();

  const product = products.find((p) => p.id === parseInt(productId || "0"));

  if (!product) {
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Product Not Found
          </h2>
          <p className="text-gray-600 mb-6">
            The product you're looking for doesn't exist.
          </p>
          <button
            onClick={() => navigate("/shop")}
            className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Back to Shop
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Product Image */}
          <div className="space-y-4">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 lg:h-96 object-cover rounded-lg"
            />
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                {product.name}
              </h1>
              <p className="text-2xl font-bold text-blue-600 mb-4">
                {product.price}
              </p>
              <p className="text-gray-600">{product.description}</p>
            </div>

            {/* Specifications */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Specifications
              </h3>
              <div className="space-y-2">
                {Object.entries(product.specs).map(([key, value]) => (
                  <div
                    key={key}
                    className="flex justify-between py-2 border-b border-gray-200"
                  >
                    <span className="text-gray-600 capitalize">
                      {key.replace(/([A-Z])/g, " $1").trim()}:
                    </span>
                    <span className="text-gray-900 font-medium">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 pt-4">
              <button className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                Add to Cart
              </button>
              <button className="flex-1 bg-gray-100 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors font-medium">
                Add to Wishlist
              </button>
            </div>

            {/* Navigation */}
            <div className="flex gap-3 pt-4 border-t border-gray-200">
              <button
                onClick={() => navigate(-1)}
                className="flex-1 bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors"
              >
                Go Back
              </button>
              <button
                onClick={() => navigate("/shop")}
                className="flex-1 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors"
              >
                View All Products
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
