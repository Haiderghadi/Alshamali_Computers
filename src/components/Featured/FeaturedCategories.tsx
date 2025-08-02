import SimpleGrid from "../reusables/SimpleGrid";

const products = [
  {
    id: 1,
    name: "Laptops",
    image: "./macbook.jpg",
  },
  {
    id: 2,
    name: "Gaming Laptops",
    image:
      "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400&h=300&fit=crop",
  },
  {
    id: 3,
    name: "Desktops",
    image: "./dellcpu.jpeg",
  },
  {
    id: 4,
    name: "All-in-One Desktops",
    image:
      "https://images.unsplash.com/photo-1580894746908-bd0d63a2c74e?w=400&h=300&fit=crop",
  },
  {
    id: 5,
    name: "Monitors",
    image:
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&h=300&fit=crop",
  },
  {
    id: 6,
    name: "Graphic Cards",
    image:
      "https://images.unsplash.com/photo-1591488320449-011701bb6704?w=400&h=300&fit=crop",
  },
  {
    id: 7,
    name: "Servers",
    image:
      "https://images.unsplash.com/photo-1610440042657-658c4f4ce14b?w=400&h=300&fit=crop",
  },
  {
    id: 8,
    name: "Server Accessories",
    image:
      "https://images.unsplash.com/photo-1614064641938-58b4e519bd5f?w=400&h=300&fit=crop",
  },
  {
    id: 9,
    name: "Printers & Scanners",
    image:
      "https://images.unsplash.com/photo-1589820296154-d593fed111f1?w=400&h=300&fit=crop",
  },
  {
    id: 10,
    name: "Networking & Security",
    image:
      "https://images.unsplash.com/photo-1590642912659-6fc41c94bb5e?w=400&h=300&fit=crop",
  },
  {
    id: 11,
    name: "Software",
    image:
      "https://images.unsplash.com/photo-1581092580502-5c1f30c8b043?w=400&h=300&fit=crop",
  },
  {
    id: 12,
    name: "Apple Products",
    image:
      "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=400&h=300&fit=crop",
  },
  {
    id: 13,
    name: "Accessories",
    image:
      "https://images.unsplash.com/photo-1512499617640-c2f999098c80?w=400&h=300&fit=crop",
  },
];

const FeaturedCategories = () => {
  return (
    <div className=" bg-neutral-200 p-8">
      <SimpleGrid products={products} catergoryGrid />
    </div>
  );
};

export default FeaturedCategories;
