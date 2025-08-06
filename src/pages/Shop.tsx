import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useShopFilters } from "../hooks/useShopFilters";
import { ShopFilters } from "../components/Shop/ShopFilters";
import { ShopHeader } from "../components/Shop/ShopHeader";
import { ProductsGrid } from "../components/Shop/ProductsGrid";

const Shop = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState(category || "all");

  const {
    filteredProducts,
    sortBy,
    setSortBy,
    priceRange,
    setPriceRange,
    brandFilter,
    availabilityFilter,
    brands,
    toggleBrandFilter,
    toggleAvailabilityFilter,
    clearFilters,
  } = useShopFilters(selectedCategory);

  useEffect(() => {
    if (category) {
      setSelectedCategory(category);
    } else {
      setSelectedCategory("all");
    }
  }, [category]);

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
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Filters */}
          <div className="lg:col-span-1">
            <ShopFilters
              selectedCategory={selectedCategory}
              sortBy={sortBy}
              priceRange={priceRange}
              brandFilter={brandFilter}
              availabilityFilter={availabilityFilter}
              brands={brands}
              onCategoryChange={handleCategoryClick}
              onSortChange={setSortBy}
              onPriceRangeChange={setPriceRange}
              onBrandToggle={toggleBrandFilter}
              onAvailabilityToggle={toggleAvailabilityFilter}
              onClearFilters={clearFilters}
            />
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <ShopHeader
              selectedCategory={selectedCategory}
              productCount={filteredProducts.length}
              sortBy={sortBy}
              onSortChange={setSortBy}
            />

            <ProductsGrid
              products={filteredProducts}
              onProductClick={handleProductClick}
              onClearFilters={clearFilters}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
