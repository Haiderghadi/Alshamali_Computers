import {
  FaLaptop,
  FaServer,
  FaShieldAlt,
  FaTools,
  FaHeadset,
  FaRocket,
} from "react-icons/fa";

export const services = [
  {
    icon: <FaLaptop className="text-4xl text-blue-600" />,
    title: "Hardware Solutions",
    description:
      "Comprehensive hardware solutions including desktops, laptops, servers, and networking equipment from top brands.",
    features: [
      "Custom PC Builds",
      "Server Configuration",
      "Network Infrastructure",
      "Hardware Maintenance",
    ],
  },
  {
    icon: <FaServer className="text-4xl text-green-600" />,
    title: "Software Services",
    description:
      "Complete software solutions for businesses and individuals, from operating systems to specialized applications.",
    features: [
      "Operating Systems",
      "Business Software",
      "Security Software",
      "Cloud Solutions",
    ],
  },
  {
    icon: <FaShieldAlt className="text-4xl text-purple-600" />,
    title: "IT Security",
    description:
      "Advanced cybersecurity solutions to protect your business from threats and ensure data integrity.",
    features: [
      "Antivirus Solutions",
      "Firewall Setup",
      "Data Encryption",
      "Security Audits",
    ],
  },
  {
    icon: <FaTools className="text-4xl text-orange-600" />,
    title: "Technical Support",
    description:
      "24/7 technical support and maintenance services to keep your systems running smoothly.",
    features: [
      "Remote Support",
      "On-site Service",
      "Preventive Maintenance",
      "Emergency Response",
    ],
  },
  {
    icon: <FaHeadset className="text-4xl text-red-600" />,
    title: "Consulting Services",
    description:
      "Expert IT consulting to help you make informed decisions about your technology investments.",
    features: [
      "Technology Assessment",
      "Migration Planning",
      "Cost Optimization",
      "Future Planning",
    ],
  },
  {
    icon: <FaRocket className="text-4xl text-indigo-600" />,
    title: "Digital Transformation",
    description:
      "End-to-end digital transformation services to modernize your business operations.",
    features: [
      "Cloud Migration",
      "Process Automation",
      "Digital Workflows",
      "Legacy Modernization",
    ],
  },
];
