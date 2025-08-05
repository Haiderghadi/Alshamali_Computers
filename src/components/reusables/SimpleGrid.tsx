import { useState, useEffect, useId, useRef, useCallback } from "react";
import CarouselControl from "./CarouselControl";
import Heading from "./Heading";

interface Product {
  id: number;
  name: string;
  image: string;
  price?: string;
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
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [dragOffset, setDragOffset] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);

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

  // Auto-play functionality (disabled when dragging)
  useEffect(() => {
    if (isHovered || isDragging) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev >= maxSlide ? 0 : prev + 1));
    }, 100000);

    return () => clearInterval(interval);
  }, [maxSlide, isHovered, isDragging]);

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

  // Drag functionality
  const handleDragStart = useCallback((clientX: number, clientY: number) => {
    setIsDragging(true);
    setDragStart({ x: clientX, y: clientY });
    setDragOffset(0);
  }, []);

  const handleDragMove = useCallback(
    (clientX: number) => {
      if (!isDragging || !containerRef.current) return;

      const containerWidth = containerRef.current.offsetWidth;
      const deltaX = clientX - dragStart.x;
      const slideWidth = containerWidth / itemsPerView;
      const offset = deltaX / slideWidth;

      setDragOffset(offset);
    },
    [isDragging, dragStart.x, itemsPerView]
  );

  const handleDragEnd = useCallback(() => {
    if (!isDragging) return;

    setIsDragging(false);

    // Determine if we should slide to next/previous based on drag distance
    const threshold = 0.3; // 30% of slide width

    if (Math.abs(dragOffset) > threshold) {
      if (dragOffset > 0 && current > 0) {
        // Dragged right, go to previous
        setCurrent(current - 1);
      } else if (dragOffset < 0 && current < maxSlide) {
        // Dragged left, go to next
        setCurrent(current + 1);
      }
    }

    setDragOffset(0);
  }, [isDragging, dragOffset, current, maxSlide]);

  // Mouse events
  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    handleDragStart(e.clientX, e.clientY);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    handleDragMove(e.clientX);
  };

  const handleMouseUp = () => {
    handleDragEnd();
  };

  // Touch events
  const handleTouchStart = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    handleDragStart(touch.clientX, touch.clientY);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    handleDragMove(touch.clientX);
  };

  const handleTouchEnd = () => {
    handleDragEnd();
  };

  // Global mouse events for dragging outside container
  useEffect(() => {
    if (!isDragging) return;

    const handleGlobalMouseMove = (e: MouseEvent) => {
      handleDragMove(e.clientX);
    };

    const handleGlobalMouseUp = () => {
      handleDragEnd();
    };

    document.addEventListener("mousemove", handleGlobalMouseMove);
    document.addEventListener("mouseup", handleGlobalMouseUp);

    return () => {
      document.removeEventListener("mousemove", handleGlobalMouseMove);
      document.removeEventListener("mouseup", handleGlobalMouseUp);
    };
  }, [isDragging, handleDragMove, handleDragEnd]);

  const id = useId();

  // Calculate transform with drag offset
  const getTransform = () => {
    const baseTransform = current * (100 / itemsPerView);
    const dragTransform = isDragging ? dragOffset * (100 / itemsPerView) : 0;
    return baseTransform - dragTransform;
  };

  return (
    <div className="bg-background p-4 sm:p-6 md:p-8">
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
          ref={containerRef}
          className="relative"
          aria-labelledby={`carousel-heading-${id}`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Products Grid */}
          <div className="overflow-hidden">
            <div
              className={`flex transition-transform duration-700 ease-out  ${
                isDragging ? "duration-0" : ""
              }`}
              style={{
                transform: `translateX(-${getTransform()}%)`,
              }}
              onMouseDown={handleMouseDown}
              onMouseMove={isDragging ? handleMouseMove : undefined}
              onMouseUp={handleMouseUp}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              draggable={false}
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
                        className="w-full h-[200px] sm:h-[250px] md:h-[300px] object-contain transition-transform duration-500 group-hover:scale-[101.5%] select-none"
                        draggable={false}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    {/* Product Info */}
                    {catergoryGrid ? (
                      <div className="py-3 sm:py-4 md:py-4">
                        <h3 className="text-base sm:text-lg md:text-xl font-semibold text-description mb-2 group-hover:text-heading transition-colors duration-300 line-clamp-2 select-none">
                          {product.name}
                        </h3>
                      </div>
                    ) : null}
                    {productGrid ? (
                      <div className="py-3 sm:py-4 md:py-2">
                        <h3 className="text-base sm:text-sm md:text-md font-normal text-description mb-2 group-hover:text-heading transition-colors duration-300 line-clamp-2 select-none">
                          {product.name}
                        </h3>
                        <div className="flex items-center justify-between">
                          <span className="text-md sm:text-lg md:text-xl font-bold text-gray-800 select-none">
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
