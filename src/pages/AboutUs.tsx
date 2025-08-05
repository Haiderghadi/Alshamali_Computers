import { useEffect, useRef, useState } from "react";
import Container from "../components/reusables/Container";
import { FaUsers, FaAward, FaChartLine, FaGlobe } from "react-icons/fa";
import AnimatedNumber from "../components/reusables/AnimatedNumber";
import { stats, team, values } from "../constants/aboutus";

const AboutUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const handleDownloadProfile = () => {
    // Create a temporary link element to trigger download
    const link = document.createElement("a");
    link.href = "/al_shamali_computers_profile.pdf";
    link.download = "Shamali-Company-Profile.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
    <div className="bg-background min-h-screen pt-2 lg:pt-10">
      <Container>
        <div className="relative flex flex-row justify-between items-start">
          {/* Heading */}
          <div className="text-left mb-8">
            <h1 className="text-4xl font-bold text-heading mb-4">
              About Shamali
            </h1>
            <p className="text-description text-lg">
              We are a leading IT solutions provider, dedicated to empowering
              businesses with cutting-edge technology and exceptional service.
            </p>
          </div>

          {/* Download Profile Button */}
          <button
            onClick={handleDownloadProfile}
            className="bg-red-500 text-white px-4 py-2 rounded-sm w-56 shadow-[var(--shadow-custom-card)] "
          >
            <span>Download Profile</span>
          </button>
        </div>

        {/* Company Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-3xl font-bold text-heading mb-6">Our Story</h2>
            <p className="text-lightDescription mb-4 leading-relaxed">
              Founded in 2014, Shamali has grown from a small local IT shop to a
              comprehensive technology solutions provider. Our journey began
              with a simple mission: to make technology accessible and
              beneficial for businesses of all sizes.
            </p>
            <p className="text-lightDescription mb-4 leading-relaxed">
              Over the years, we've expanded our services to include hardware
              solutions, software services, cybersecurity, and digital
              transformation consulting. Our commitment to quality and customer
              satisfaction has remained at the core of everything we do.
            </p>
            <p className="text-lightDescription leading-relaxed">
              Today, we're proud to serve hundreds of businesses across the
              region, helping them leverage technology to achieve their goals
              and drive growth.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-[var(--shadow-custom-card)] p-8">
            <h3 className="text-2xl font-bold text-heading mb-6">
              Our Mission
            </h3>
            <p className="text-lightDescription mb-6 leading-relaxed">
              To empower businesses with innovative technology solutions that
              drive growth, enhance efficiency, and create competitive
              advantages in the digital age.
            </p>
            <h3 className="text-2xl font-bold text-heading mb-6">Our Vision</h3>
            <p className="text-lightDescription leading-relaxed">
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
              className="bg-white rounded-xl shadow-[var(--shadow-custom-card)] p-6 text-center"
            >
              <div className="text-3xl font-bold text-heading mb-2">
                <AnimatedNumber
                  target={stat.number}
                  suffix={stat.suffix}
                  shouldStart={isVisible}
                  className="text-3xl font-bold text-heading"
                />
              </div>
              <div className="text-lightDescription">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Values */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-heading mb-12 text-center">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-[var(--shadow-custom-card)] p-6 text-center hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-gray-100 rounded-lg mx-auto mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-heading mb-4">
                  {value.title}
                </h3>
                <p className="text-lightDescription leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-heading mb-12 text-center">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-[var(--shadow-custom-card)] p-6 text-center hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold text-heading mb-1">
                  {member.name}
                </h3>
                <p className="text-lightDescription text-sm mb-2">
                  {member.position}
                </p>
                <p className="text-description text-sm leading-relaxed">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-white rounded-xl shadow-[var(--shadow-custom-card)] p-12">
          <h2 className="text-3xl font-bold text-heading mb-8 text-center">
            Why Choose Shamali?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <FaChartLine className="text-blue-600 text-xl" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-heading mb-2">
                  Proven Track Record
                </h3>
                <p className="text-lightDescription">
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
                <h3 className="text-lg font-semibold text-heading mb-2">
                  Global Partnerships
                </h3>
                <p className="text-lightDescription">
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
                <h3 className="text-lg font-semibold text-heading mb-2">
                  Expert Team
                </h3>
                <p className="text-lightDescription">
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
                <h3 className="text-lg font-semibold text-heading mb-2">
                  Quality Assurance
                </h3>
                <p className="text-lightDescription">
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
