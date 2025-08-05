import { FaAward, FaHandshake, FaLightbulb, FaUsers } from "react-icons/fa6";

export const values = [
  {
    icon: <FaHandshake className="text-4xl text-blue-600" />,
    title: "Trust & Reliability",
    description:
      "Building lasting relationships through honest, transparent, and reliable service delivery.",
  },
  {
    icon: <FaLightbulb className="text-4xl text-green-600" />,
    title: "Innovation",
    description:
      "Embracing cutting-edge technology to provide forward-thinking solutions for our clients.",
  },
  {
    icon: <FaUsers className="text-4xl text-purple-600" />,
    title: "Customer Focus",
    description:
      "Putting our customers first with personalized solutions and exceptional support.",
  },
  {
    icon: <FaAward className="text-4xl text-orange-600" />,
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
