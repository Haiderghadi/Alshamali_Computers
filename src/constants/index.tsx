import { Highlight } from "../components/AboutUs/Testimonials";

//HEADER
export const navItems = [
  {
    name: "Shop",
    link: "",
  },
  {
    name: "Services",
    link: "/services",
  },
  {
    name: "Partners",
    link: "/partners",
  },
  {
    name: "About Us",
    link: "/about",
  },
  {
    name: "Contact",
    link: "/contact",
  },
];

//HERO SECTION

export const slideData = [
  {
    title: "Dell",
    button: "Shop Now",
    src: "./laptop.avif",
  },
  {
    title: "macbook pro",
    button: "Shop Now",
    src: "./laptop.avif",
  },
  {
    title: "macbook air",
    button: "Learn More",
    src: "./laptop.avif",
  },
  {
    title: "Dell XPS",
    button: "Discover",
    src: "./laptop.avif",
  },
];
export const words = ["Business", "Office", "Project", "Workspace"];

export const HeroHeadline = "Reliable IT Solutions for Every";
export const HeroDescription =
  "Since 1995, delivering cutting-edge IT solutions, hardware, software, and unmatched support to empower your business.";

//HERO STATS SECTION
export const stats = [
  {
    number: 25,
    suffix: "+",
    label: "premium partners",
  },
  {
    number: 900,
    suffix: "+",
    label: "projects completed",
  },
  {
    number: 1500,
    suffix: "+",
    label: "satisfied customers",
  },
];

//Featured Categories
export const featuredCategories = [
  {
    id: 1,
    name: "Laptops",
    image: "./laptop.avif",
  },
  {
    id: 2,
    name: "Gaming Laptops",
    image: "./laptop2.avif",
  },
  {
    id: 3,
    name: "Desktops",
    image: "./dellcpu.jpeg",
  },
  {
    id: 4,
    name: "All-in-One Desktops",
    image: "./laptop2.avif",
  },
  {
    id: 5,
    name: "Monitors",
    image: "./laptop.avif",
  },
  {
    id: 6,
    name: "Graphic Cards",
    image: "./laptop2.avif",
  },
  {
    id: 7,
    name: "Servers",
    image: "./laptop.avif",
  },
  {
    id: 8,
    name: "Server Accessories",
    image: "./laptop2.avif",
  },
  {
    id: 9,
    name: "Printers & Scanners",
    image: "./laptop.avif",
  },
  {
    id: 10,
    name: "Networking & Security",
    image: "./laptop2.avif",
  },
  {
    id: 11,
    name: "Software",
    image: "./laptop.avif",
  },
  {
    id: 12,
    name: "Apple Products",
    image: "./laptop2.avif",
  },
  {
    id: 13,
    name: "Accessories",
    image: "./laptop.avif",
  },
];

//Featured Products
export const featuredProducts = [
  {
    id: 1,
    name: "Gaming Laptop",
    price: "$1,299",
    image: "./laptop.avif",
  },
  {
    id: 2,
    name: "Mechanical Keyboard",
    price: "$149",
    image: "./laptop2.avif",
  },
  {
    id: 3,
    name: "Gaming Mouse",
    price: "$79",
    image: "./laptop.avif",
  },
  {
    id: 4,
    name: "4K Monitor",
    price: "$599",
    image: "./laptop2.avif",
  },
  {
    id: 5,
    name: "Graphics Card",
    price: "$899",
    image: "./laptop.avif",
  },
  {
    id: 6,
    name: "CPU Processor",
    price: "$449",
    image: "./laptop2.avif",
  },
  {
    id: 7,
    name: "RAM Memory",
    price: "$199",
    image: "./laptop.avif",
  },
  {
    id: 8,
    name: "SSD Storage",
    price: "$129",
    image: "./laptop2.avif",
  },
];

//HERO PARTNERS SECTION
export const logoImages = [
  "/brandlogo/apple.svg",
  "/brandlogo/lenovo.png",
  "/brandlogo/dell.png",
  "/brandlogo/fortinet.png",
  "/brandlogo/windows.png",
  "/brandlogo/samsung.png",
  "/brandlogo/acer.png",
  "/brandlogo/hp.png",
  "/brandlogo/kaspersky.png",
  "/brandlogo/apple.svg",
  "/brandlogo/windows.png",
  "/brandlogo/dell.png",
  "/brandlogo/fortinet.png",
  "/brandlogo/samsung.png",
  "/brandlogo/acer.png",
  "/brandlogo/hp.png",
  "/brandlogo/kaspersky.png",
];
export const partnerHeading = "Trusted by Leading";
export const partnerHighlightedHeading = "Brands";
export const partnerDescription =
  "At Al Shamali Computers, we partner with leading brands to bring you top-quality IT products and solutions. Our carefully selected brands ensure you receive the best in technology and performance. HP, Dell, Lenovo, Kaspersky, Microsoft Office, Windows, Fortinet, and many more.Discover our range of products from these trusted brands and experience technology like never before.";

// HERO ABOUT SECTION
export const heroAboutitems = [
  {
    title: "Enterprise Hardware Solutions",
    header: "/image4.jpg",
    description:
      "Power your business with high-performance PCs, laptops, and servers tailored for scalability.",
    className: "md:col-span-2",
  },
  {
    title: "Advanced Networking & Security",
    header: "/image2.jpg",
    description:
      "Stay connected and secure with reliable networking hardware and enterprise-grade security systems.",
    className: "md:col-span-1",
  },
  {
    title: "Cloud & Licensing Services",
    header: "/image3.webp",
    description:
      "Streamline your operations with cloud integration and licensed software solutions built for business.",
    className: "md:col-span-1",
  },
  {
    title: "24/7 IT Support & Maintenance",
    header: "/image1.webp",
    description:
      "Get consistent, expert-backed support through annual maintenance contracts and responsive service.",
    className: "md:col-span-2",
  },
];

//HERO TESTIMONIALS SECTION
export const testimonialCards = [
  {
    id: 0,
    name: "Mohammad Al-Kandari",
    designation: "IT Director, Kuwait Oil Company",
    content: (
      <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
        Al Shamali has been our tech partner for over a decade. Their{" "}
        <Highlight>hardware reliability</Highlight> and{" "}
        <Highlight>response time</Highlight> make them our first choice for all
        infrastructure upgrades.
      </p>
    ),
  },
  {
    id: 1,
    name: "Fatima Hussain",
    designation: "Procurement Lead, National Bank of Kuwait",
    content: (
      <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
        Whether it's laptops, networking, or cloud services,{" "}
        <Highlight>Al Shamali always delivers</Highlight> with professionalism
        and precision. <Highlight>Highly recommended</Highlight> for corporate
        IT needs.
      </p>
    ),
  },
  {
    id: 2,
    name: "Ahmed Al-Rashid",
    designation: "CTO, Gulf Telecom",
    content: (
      <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
        Their end-to-end service — from product sourcing to annual maintenance —
        is <Highlight>exceptionally dependable</Highlight>.{" "}
        <Highlight>We trust them</Highlight> with our entire IT backbone.
      </p>
    ),
  },
];
