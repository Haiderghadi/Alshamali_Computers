import React from "react";

interface ProductImageGalleryProps {
  images: string[];
  productName: string;
  selectedImage: number;
  onImageSelect: (index: number) => void;
}

export const ProductImageGallery: React.FC<ProductImageGalleryProps> = ({
  images,
  productName,
  selectedImage,
  onImageSelect,
}) => {
  return (
    <div className="space-y-4">
      <div className="aspect-square bg-white rounded-lg shadow-sm overflow-hidden">
        <img
          src={images[selectedImage] || images[0]}
          alt={productName}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="grid grid-cols-4 gap-2">
        {images.map((image, index) => (
          <div
            key={index}
            className={`aspect-square bg-white rounded-lg shadow-sm overflow-hidden cursor-pointer border-2 ${
              selectedImage === index ? "border-blue-500" : "border-transparent"
            }`}
            onClick={() => onImageSelect(index)}
          >
            <img
              src={image}
              alt={`${productName} ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
