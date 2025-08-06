import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { shopCategories, shopProducts } from "../constants";
import { ProductNotFound } from "../components/Product/ProductNotFound";
import { ProductBreadcrumb } from "../components/Product/ProductBreadCrumb";
import { ProductImageGallery } from "../components/Product/ProductImageGallery";
import { ProductInfo } from "../components/Product/ProductInfo";
import { AddToCartSection } from "../components/Product/AddToCartSection";
import { ProductSpecifications } from "../components/Product/ProductSpecifications";
import { ProductReviews } from "../components/Product/ProductReviews";
import { RelatedProducts } from "../components/Product/RelatedProducts";
import { FaShare } from "react-icons/fa6";

const ProductDetail = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const product = shopProducts.find((p) => p.id === parseInt(productId || "0"));
  const category = shopCategories.find((c) => c.id === product?.category);
  const relatedProducts = shopProducts
    .filter((p) => p.category === product?.category && p.id !== product?.id)
    .slice(0, 4);

  if (!product) {
    return <ProductNotFound onBackToShop={() => navigate("/shop")} />;
  }

  // Generate multiple images for gallery (placeholder logic)
  const productImages = Array(4).fill(product.image);

  const breadcrumbItems = [
    { label: "Shop", onClick: () => navigate("/shop") },
    {
      label: category?.name || "Category",
      onClick: () => navigate(`/shop/category/${product.category}`),
    },
  ];

  const handleAddToCart = () => {
    console.log(`Added ${quantity} x ${product.name} to cart`);
    // Add your cart logic here
  };

  const handleAddToWishlist = () => {
    console.log(`Added ${product.name} to wishlist`);
    // Add your wishlist logic here
  };

  const handleWriteReview = () => {
    console.log("Write review clicked");
    // Add your review logic here
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: product.name,
        text: product.description,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <ProductBreadcrumb items={breadcrumbItems} currentPage={product.name} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <ProductImageGallery
            images={productImages}
            productName={product.name}
            selectedImage={selectedImage}
            onImageSelect={setSelectedImage}
          />

          {/* Product Info */}
          <div className="space-y-6">
            <ProductInfo product={product} />

            <AddToCartSection
              quantity={quantity}
              onQuantityChange={setQuantity}
              inStock={product.inStock}
              onAddToCart={handleAddToCart}
              onAddToWishlist={handleAddToWishlist}
            />

            {/* Quick Actions */}
            <div className="flex space-x-4">
              <button
                onClick={handleShare}
                className="flex-1 flex items-center justify-center space-x-2 py-2 px-4 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
              >
                <FaShare />
                <span>Share</span>
              </button>
            </div>
          </div>
        </div>

        {product?.specs && (
          <ProductSpecifications
            specs={
              Object.fromEntries(
                Object.entries(product.specs).filter(
                  ([, value]) =>
                    typeof value === "string" && value !== undefined
                )
              ) as Record<string, string>
            }
          />
        )}

        <ProductReviews
          rating={product.rating}
          reviewCount={product.reviewCount}
          onWriteReview={handleWriteReview}
        />

        <RelatedProducts
          products={relatedProducts}
          onProductClick={(id) => navigate(`/shop/product/${id}`)}
        />
      </div>
    </div>
  );
};

export default ProductDetail;
