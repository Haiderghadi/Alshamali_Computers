import SimpleGrid from "../reusables/SimpleGrid";

const products = [
  {
    id: 1,
    name: "Gaming Laptop",
    price: "$1,299",
    image:
      "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400&h=300&fit=crop",
  },
  {
    id: 2,
    name: "Mechanical Keyboard",
    price: "$149",
    image:
      "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400&h=300&fit=crop",
  },
  {
    id: 3,
    name: "Gaming Mouse",
    price: "$79",
    image:
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=300&fit=crop",
  },
  {
    id: 4,
    name: "4K Monitor",
    price: "$599",
    image:
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&h=300&fit=crop",
  },
  {
    id: 5,
    name: "Graphics Card",
    price: "$899",
    image:
      "https://images.unsplash.com/photo-1591488320449-011701bb6704?w=400&h=300&fit=crop",
  },
  {
    id: 6,
    name: "CPU Processor",
    price: "$449",
    image:
      "https://images.unsplash.com/photo-1555617778-02518624e14d?w=400&h=300&fit=crop",
  },
  {
    id: 7,
    name: "RAM Memory",
    price: "$199",
    image:
      "https://images.unsplash.com/photo-1562976540-1502c2145186?w=400&h=300&fit=crop",
  },
  {
    id: 8,
    name: "SSD Storage",
    price: "$129",
    image:
      "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=400&h=300&fit=crop",
  },
];
const FeaturedItems = () => {
  return (
    <div className=" bg-neutral-200 p-8">
      <SimpleGrid products={products} productGrid />
    </div>
  );
};

export default FeaturedItems;
