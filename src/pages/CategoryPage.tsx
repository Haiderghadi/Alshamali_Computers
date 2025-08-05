import { useParams, useNavigate } from "react-router-dom";

// This component will be rendered when /shop/category/:category is accessed
const CategoryPage = () => {
  const { category } = useParams();
  const navigate = useNavigate();

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4">
        <h2 className="text-2xl font-bold text-heading mb-4">
          Category: {category}
        </h2>
        <p className="text-lightDescription mb-6">
          This is a placeholder for the category page. In a real application,
          this would show detailed category information.
        </p>
        <div className="flex gap-3">
          <button
            onClick={() => navigate(-1)}
            className="flex-1 bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors"
          >
            Go Back
          </button>
          <button
            onClick={() => navigate("/shop")}
            className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            View All Products
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
