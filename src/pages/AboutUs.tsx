import { useEffect, useRef, useState } from "react";
import Container from "../components/reusables/Container";
import Heading from "../components/reusables/Heading";
import {
  FaUsers,
  FaAward,
  FaHandshake,
  FaLightbulb,
  FaChartLine,
  FaGlobe,
} from "react-icons/fa";
import AnimatedNumber from "../components/reusables/AnimatedNumber";

const values = [
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

const team = [
  {
    name: "Ahmed Al Shamali",
    position: "Founder & CEO",
    image: "/shamali_logo.png",
    description:
      "Leading the company with over 15 years of experience in IT solutions and business development.",
  },
  {
    name: "Sarah Johnson",
    position: "Technical Director",
    image: "/image1.webp",
    description:
      "Expert in enterprise solutions with a passion for innovative technology implementation.",
  },
  {
    name: "Mohammed Hassan",
    position: "Sales Manager",
    image: "/image2.jpg",
    description:
      "Dedicated to building strong client relationships and delivering exceptional customer service.",
  },
  {
    name: "Lisa Chen",
    position: "Support Team Lead",
    image: "/image3.webp",
    description:
      "Ensuring our clients receive the best technical support and maintenance services.",
  },
];

const stats = [
  { number: 1500, suffix: "+", label: "Happy Clients" },
  { number: 900, suffix: "+", label: "Projects Completed" },
  { number: 10, suffix: "+", label: "Team Members" },
  { number: 10, suffix: "+", label: "Years Experience" },
];

const AboutUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once animation starts
        }
      },
      {
        threshold: 0.3, // Trigger when 30% of the section is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-neutral-200 min-h-screen pt-2 lg:pt-10">
      <Container>
        <Heading
          title="About Shamali"
          description="We are a leading IT solutions provider, dedicated to empowering businesses with cutting-edge technology and exceptional service."
        />

        {/* Company Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Founded in 2014, Shamali has grown from a small local IT shop to a
              comprehensive technology solutions provider. Our journey began
              with a simple mission: to make technology accessible and
              beneficial for businesses of all sizes.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Over the years, we've expanded our services to include hardware
              solutions, software services, cybersecurity, and digital
              transformation consulting. Our commitment to quality and customer
              satisfaction has remained at the core of everything we do.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Today, we're proud to serve hundreds of businesses across the
              region, helping them leverage technology to achieve their goals
              and drive growth.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Our Mission
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              To empower businesses with innovative technology solutions that
              drive growth, enhance efficiency, and create competitive
              advantages in the digital age.
            </p>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Our Vision
            </h3>
            <p className="text-gray-600 leading-relaxed">
              To be the trusted technology partner of choice for businesses
              seeking reliable, innovative, and cost-effective IT solutions that
              enable their success.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div
          ref={sectionRef as React.RefObject<HTMLDivElement>}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] p-6 text-center"
            >
              <div className="text-3xl font-bold text-gray-900 mb-2">
                <AnimatedNumber
                  target={stat.number}
                  suffix={stat.suffix}
                  shouldStart={isVisible}
                  className="text-3xl font-bold text-gray-900"
                />
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Values */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] p-6 text-center hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-gray-100 rounded-lg mx-auto mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] p-6 text-center hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-semibold mb-3">
                  {member.position}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-white rounded-xl shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Why Choose Shamali?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <FaChartLine className="text-blue-600 text-xl" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Proven Track Record
                </h3>
                <p className="text-gray-600">
                  Over a decade of successful projects and satisfied clients
                  across various industries.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <FaGlobe className="text-green-600 text-xl" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Global Partnerships
                </h3>
                <p className="text-gray-600">
                  Strategic partnerships with leading technology brands to
                  provide the best solutions.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <FaUsers className="text-purple-600 text-xl" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Expert Team
                </h3>
                <p className="text-gray-600">
                  Certified professionals with deep expertise in various
                  technology domains.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <FaAward className="text-orange-600 text-xl" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Quality Assurance
                </h3>
                <p className="text-gray-600">
                  Rigorous quality control processes to ensure reliable and
                  durable solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutUs;
