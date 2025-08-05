import Container from "../components/reusables/Container";
import Heading from "../components/reusables/Heading";
import { partners } from "../constants/partners";

const Partners = () => {
  // Separate partners into hardware and software categories
  const hardwarePartners = partners.filter(
    (partner) =>
      partner.category === "Hardware" || partner.category === "Electronics"
  );

  const softwarePartners = partners.filter(
    (partner) =>
      partner.category === "Software" || partner.category === "Security"
  );

  return (
    <div className="bg-background min-h-screen pt-2 lg:pt-20">
      <Container>
        <Heading
          title="Our Partners"
          description="We collaborate with world-leading technology companies to provide you with the best solutions and support."
        />

        {/* Partnership Categories */}
        <div className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] p-8 text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl">💻</span>
            </div>
            <h3 className="text-2xl font-bold text-heading mb-4">
              Hardware Partners
            </h3>
            <p className="text-lightDescription">
              Leading manufacturers of computers, devices, and electronic
              solutions for businesses and consumers
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl">⚡</span>
            </div>
            <h3 className="text-2xl font-bold text-heading mb-4">
              Software Partners
            </h3>
            <p className="text-lightDescription">
              Premier software developers and cybersecurity providers delivering
              cutting-edge solutions and protection
            </p>
          </div>
        </div>

        {/* Hardware Partners Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-heading mb-8 text-center">
            Hardware Partners
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hardwarePartners.map((partner, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] p-6 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center justify-center h-24 mb-4">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-h-16 max-w-full object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold text-heading mb-2">
                  {partner.name}
                </h3>
                <p className="text-lightDescription mb-4 text-sm">
                  {partner.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                    {partner.category}
                  </span>
                  <span className="text-xs font-semibold text-description">
                    {partner.partnership}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Software Partners Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-heading mb-8 text-center">
            Software Partners
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {softwarePartners.map((partner, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] p-6 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center justify-center h-24 mb-4">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-h-16 max-w-full object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold text-heading mb-2">
                  {partner.name}
                </h3>
                <p className="text-lightDescription mb-4 text-sm">
                  {partner.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                    {partner.category}
                  </span>
                  <span className="text-xs font-semibold text-description">
                    {partner.partnership}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Partnership Benefits */}
        <div className="mt-20 bg-white rounded-xl shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] p-12">
          <h2 className="text-3xl font-bold text-heading mb-8 text-center">
            Why Partner With Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-lg font-semibold text-heading mb-2">
                Expert Support
              </h3>
              <p className="text-lightDescription text-sm">
                Dedicated technical support and training for your team
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💼</span>
              </div>
              <h3 className="text-lg font-semibold text-heading mb-2">
                Business Growth
              </h3>
              <p className="text-lightDescription text-sm">
                Access to exclusive deals and business development opportunities
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔧</span>
              </div>
              <h3 className="text-lg font-semibold text-heading mb-2">
                Technical Resources
              </h3>
              <p className="text-lightDescription text-sm">
                Comprehensive technical documentation and resources
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-lg font-semibold text-heading mb-2">
                Market Access
              </h3>
              <p className="text-lightDescription text-sm">
                Access to new markets and customer segments
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Partners;
