import React from "react";
import { StarRating } from "../reusables/StarRating";

interface Review {
  id: string;
  author: string;
  rating: number;
  content: string;
  date: string;
}

interface ProductReviewsProps {
  rating: number;
  reviewCount: number;
  reviews?: Review[];
  onWriteReview: () => void;
}

export const ProductReviews: React.FC<ProductReviewsProps> = ({
  rating,
  reviewCount,
  reviews = [],
  onWriteReview,
}) => {
  const sampleReview: Review = {
    id: "1",
    author: "John D.",
    rating: 5,
    content:
      "Excellent product! Fast delivery and great quality. Highly recommended for professional use.",
    date: "2024-01-15",
  };

  const displayReviews = reviews.length > 0 ? reviews : [sampleReview];

  return (
    <div className="mt-16">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Customer Reviews</h2>
        <button
          onClick={onWriteReview}
          className="text-blue-600 hover:text-blue-800 font-medium"
        >
          Write a Review
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center space-x-4 mb-4">
          <StarRating rating={rating} showCount={false} />
          <span className="text-gray-600">Based on {reviewCount} reviews</span>
        </div>

        <div className="space-y-4">
          {displayReviews.map((review) => (
            <div
              key={review.id}
              className="border-b border-gray-200 pb-4 last:border-b-0"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                  <span className="font-medium text-gray-900">
                    {review.author}
                  </span>
                </div>
                <StarRating
                  rating={review.rating}
                  showCount={false}
                  size="sm"
                />
              </div>
              <p className="text-gray-600">{review.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
