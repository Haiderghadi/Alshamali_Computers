import { useState, useEffect } from "react";
import { shopProducts } from "../constants";

interface Product {
  id: number;
  name: string;
  brand: string;
  price: string;
  originalPrice?: string;
  rating: number;
  image: string;
  inStock: boolean;
  category: string;
}

export const useShopFilters = (selectedCategory: string) => {
  const [filteredProducts, setFilteredProducts] =
    useState<Product[]>(shopProducts);
  const [sortBy, setSortBy] = useState("featured");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 5000]);
  const [brandFilter, setBrandFilter] = useState<string[]>([]);
  const [availabilityFilter, setAvailabilityFilter] = useState<string[]>([]);

  const brands = [...new Set(shopProducts.map((product) => product.brand))];

  useEffect(() => {
    let filtered = shopProducts;

    // Filter by category
    if (selectedCategory !== "all") {
      filtered = filtered.filter(
        (product) => product.category === selectedCategory
      );
    }

    // Filter by price range
    filtered = filtered.filter((product) => {
      const price = parseFloat(product.price.replace(/[^\d.]/g, ""));
      return price >= priceRange[0] && price <= priceRange[1];
    });

    // Filter by brand
    if (brandFilter.length > 0) {
      filtered = filtered.filter((product) =>
        brandFilter.includes(product.brand)
      );
    }

    // Filter by availability
    if (availabilityFilter.length > 0) {
      if (availabilityFilter.includes("in-stock")) {
        filtered = filtered.filter((product) => product.inStock);
      }
      if (availabilityFilter.includes("out-of-stock")) {
        filtered = filtered.filter((product) => !product.inStock);
      }
    }

    // Sort products
    switch (sortBy) {
      case "price-low":
        filtered.sort(
          (a, b) =>
            parseFloat(a.price.replace(/[^\d.]/g, "")) -
            parseFloat(b.price.replace(/[^\d.]/g, ""))
        );
        break;
      case "price-high":
        filtered.sort(
          (a, b) =>
            parseFloat(b.price.replace(/[^\d.]/g, "")) -
            parseFloat(a.price.replace(/[^\d.]/g, ""))
        );
        break;
      case "rating":
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case "newest":
        filtered.sort((a, b) => b.id - a.id);
        break;
      default:
        // Featured - keep original order
        break;
    }

    setFilteredProducts(filtered);
  }, [selectedCategory, sortBy, priceRange, brandFilter, availabilityFilter]);

  const toggleBrandFilter = (brand: string) => {
    setBrandFilter((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
  };

  const toggleAvailabilityFilter = (availability: string) => {
    setAvailabilityFilter((prev) =>
      prev.includes(availability)
        ? prev.filter((a) => a !== availability)
        : [...prev, availability]
    );
  };

  const clearFilters = () => {
    setBrandFilter([]);
    setAvailabilityFilter([]);
    setPriceRange([0, 5000]);
    setSortBy("featured");
  };

  return {
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
  };
};
