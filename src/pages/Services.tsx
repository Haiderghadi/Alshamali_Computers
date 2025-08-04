import Container from "../components/reusables/Container";
import Heading from "../components/reusables/Heading";
import {
  FaLaptop,
  FaServer,
  FaShieldAlt,
  FaTools,
  FaHeadset,
  FaRocket,
} from "react-icons/fa";

const Services = () => {
  const services = [
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

  return (
    <div className="bg-neutral-200 min-h-screen pt-2 lg:pt-10">
      <Container>
        <Heading
          title="Our Services"
          description="Comprehensive IT solutions tailored to meet your business needs. From hardware to software, we've got you covered."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] p-8 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-gray-100 rounded-lg mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center text-sm text-gray-600"
                  >
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Call to Action Section */}
        <div className="mt-20 bg-white rounded-xl shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] p-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Let us help you find the perfect solution for your business. Our
            team of experts is ready to assist you with any IT needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-black text-white rounded-lg font-semibold hover:-translate-y-0.5 transition-all duration-200 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]">
              Contact Us
            </button>
            <button className="px-8 py-3 bg-white text-black rounded-lg font-semibold hover:-translate-y-0.5 transition-all duration-200 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] border border-gray-200">
              Get a Quote
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Services;
