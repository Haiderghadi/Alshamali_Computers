import { useState, useEffect, useId } from "react";
import CarouselControl from "./CarouselControl";
import Heading from "./Heading";
interface Product {
  id: number;
  name: string;
  image: string;
  price?: string; // Optional for categories
}

interface SimpleGridProps {
  products: Product[];
  catergoryGrid?: boolean;
  productGrid?: boolean;
}
const SimpleGrid: React.FC<SimpleGridProps> = ({
  products,
  catergoryGrid = false,
  productGrid = false,
}) => {
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Responsive items per view
  const [itemsPerView, setItemsPerView] = useState(4);
  const maxSlide = Math.max(0, products.length - itemsPerView);

  // Handle responsive items per view
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setItemsPerView(1); // Mobile
      } else if (width < 768) {
        setItemsPerView(2); // Small tablet
      } else if (width < 1024) {
        setItemsPerView(3); // Tablet
      } else {
        setItemsPerView(4); // Desktop
      }
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-play functionality
  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev >= maxSlide ? 0 : prev + 1));
    }, 4000);

    return () => clearInterval(interval);
  }, [maxSlide, isHovered]);

  // Reset current when itemsPerView changes
  useEffect(() => {
    const newMaxSlide = Math.max(0, products.length - itemsPerView);
    if (current > newMaxSlide) {
      setCurrent(0);
    }
  }, [itemsPerView, current, products.length]);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const handlePreviousClick = () => {
    setCurrent((prev) => (prev <= 0 ? maxSlide : prev - 1));
  };

  const handleNextClick = () => {
    setCurrent((prev) => (prev >= maxSlide ? 0 : prev + 1));
  };

  const id = useId();

  return (
    <div className=" bg-neutral-200 p-4 sm:p-6 md:p-8">
      <div className="max-w-8xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6 sm:mb-8 gap-4 lg:gap-0">
          {/* Header */}
          <div className="w-full lg:w-auto">
            <Heading
              title={
                catergoryGrid
                  ? "Premium Tech Categories"
                  : "Premium Tech Products"
              }
              description={
                catergoryGrid
                  ? "Explore our diverse range of tech categories"
                  : "Discover our latest collection of high-performance hardware"
              }
            />
          </div>

          {/* Carousel Controls */}
          <div className="flex justify-center lg:justify-end items-center space-x-3 sm:space-x-4 w-full lg:w-auto">
            <CarouselControl
              type="previous"
              title="Previous products"
              handleClick={handlePreviousClick}
              disabled={current === 0}
            />

            {/* Slide Indicators */}
            <div className="flex space-x-1 sm:space-x-2">
              {Array.from({ length: maxSlide + 1 }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                    current === index
                      ? "bg-gray-500 scale-125"
                      : "bg-white hover:bg-white/50"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <CarouselControl
              type="next"
              title="Next products"
              handleClick={handleNextClick}
              disabled={current === maxSlide}
            />
          </div>
        </div>

        <div
          className="relative"
          aria-labelledby={`carousel-heading-${id}`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Products Grid */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{
                transform: `translateX(-${current * (100 / itemsPerView)}%)`,
              }}
            >
              {products.map((product) => (
                <div
                  key={product.id}
                  className="flex-shrink-0 px-1 sm:px-2 md:px-3"
                  style={{ width: `${100 / itemsPerView}%` }}
                >
                  <div className="group bg-white/5 overflow-hidden rounded-lg sm:rounded-none">
                    {/* Product Image */}
                    <div className="relative overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-[200px] sm:h-[250px] md:h-[300px] object-fit transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    {/* Product Info */}
                    {catergoryGrid ? (
                      <div className="p-3 sm:p-4 md:p-6">
                        <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-700 mb-2 group-hover:text-gray-900 transition-colors duration-300 line-clamp-2">
                          {product.name}
                        </h3>
                      </div>
                    ) : null}
                    {productGrid ? (
                      <div className="p-3 sm:p-4 md:p-6">
                        <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-700 mb-2 group-hover:text-gray-900 transition-colors duration-300 line-clamp-2">
                          {product.name}
                        </h3>
                        <div className="flex items-center justify-between">
                          <span className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
                            {product.price}
                          </span>
                        </div>
                      </div>
                    ) : null}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimpleGrid;
