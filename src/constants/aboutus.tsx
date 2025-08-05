import { FaShieldAlt, FaRocket, FaBullseye, FaStar } from "react-icons/fa";
// Alternative option 1: More corporate feel
// import { FaBuilding, FaCogs, FaUserTie, FaTrophy } from "react-icons/fa";

// Alternative option 2: Modern business icons
// import { FaCheckCircle, FaChartLine, FaUserFriends, FaMedal } from "react-icons/fa";

export const values = [
  {
    icon: <FaShieldAlt className="text-4xl text-heading" />,
    title: "Trust & Reliability",
    description:
      "Building lasting relationships through honest, transparent, and reliable service delivery.",
  },
  {
    icon: <FaRocket className="text-4xl text-heading" />,
    title: "Innovation",
    description:
      "Embracing cutting-edge technology to provide forward-thinking solutions for our clients.",
  },
  {
    icon: <FaBullseye className="text-4xl text-heading" />,
    title: "Customer Focus",
    description:
      "Putting our customers first with personalized solutions and exceptional support.",
  },
  {
    icon: <FaStar className="text-4xl text-heading" />,
    title: "Excellence",
    description:
      "Maintaining the highest standards of quality in every product and service we offer.",
  },
];

export const team = [
  {
    name: "Ahmed Al Shamali",
    position: "Founder & CEO",
    image: "/people/man1.jpg",
    description:
      "Leading the company with over 15 years of experience in IT solutions and business development.",
  },
  {
    name: "Sarah Johnson",
    position: "Technical Director",
    image: "/people/woman3.jpg",
    description:
      "Expert in enterprise solutions with a passion for innovative technology implementation.",
  },
  {
    name: "Mohammed Hassan",
    position: "Sales Manager",
    image: "/people/man3.jpg",
    description:
      "Dedicated to building strong client relationships and delivering exceptional customer service.",
  },
  {
    name: "Lisa Chen",
    position: "Support Team Lead",
    image: "/people/woman4.jpg",
    description:
      "Ensuring our clients receive the best technical support and maintenance services.",
  },
];

export const stats = [
  { number: 1500, suffix: "+", label: "Happy Clients" },
  { number: 900, suffix: "+", label: "Projects Completed" },
  { number: 25, suffix: "+", label: "Team Members" },
  { number: 25, suffix: "+", label: "Years Experience" },
];
