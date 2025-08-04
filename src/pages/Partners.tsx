import Container from "../components/reusables/Container";
import Heading from "../components/reusables/Heading";

const Partners = () => {
  const partners = [
    {
      name: "Microsoft",
      logo: "/windows.png",
      category: "Software",
      description: "Leading software solutions and cloud services provider.",
      partnership: "Gold Partner",
    },
    {
      name: "Apple",
      logo: "/apple.jpg",
      category: "Hardware",
      description: "Premium computing devices and ecosystem solutions.",
      partnership: "Authorized Reseller",
    },
    {
      name: "Dell",
      logo: "/dell.png",
      category: "Hardware",
      description: "Enterprise computing solutions and professional services.",
      partnership: "Platinum Partner",
    },
    {
      name: "HP",
      logo: "/hp.png",
      category: "Hardware",
      description:
        "Innovative technology solutions for businesses and consumers.",
      partnership: "Gold Partner",
    },
    {
      name: "Lenovo",
      logo: "/lenovo.png",
      category: "Hardware",
      description: "Global technology leader in PCs and smart devices.",
      partnership: "Authorized Reseller",
    },
    {
      name: "Acer",
      logo: "/acer.png",
      category: "Hardware",
      description: "Affordable computing solutions for every need.",
      partnership: "Silver Partner",
    },
    {
      name: "Samsung",
      logo: "/samsung.png",
      category: "Electronics",
      description: "Innovative technology and smart device solutions.",
      partnership: "Authorized Reseller",
    },
    {
      name: "Fortinet",
      logo: "/fortinet.png",
      category: "Security",
      description: "Advanced cybersecurity solutions and network security.",
      partnership: "Gold Partner",
    },
    {
      name: "Kaspersky",
      logo: "/kaspersky.png",
      category: "Security",
      description: "Comprehensive cybersecurity and antivirus solutions.",
      partnership: "Silver Partner",
    },
  ];

  const categories = ["All", "Hardware", "Software", "Security", "Electronics"];

  return (
    <div className="bg-neutral-200 min-h-screen pt-2 lg:pt-20">
      <Container>
        <Heading
          title="Our Partners"
          description="We collaborate with world-leading technology companies to provide you with the best solutions and support."
        />

        {/* Partnership Levels */}
        <div className="mb-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] p-6 text-center">
            <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🥇</span>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              Platinum Partner
            </h3>
            <p className="text-gray-600 text-sm">
              Highest level partnership with exclusive benefits and priority
              support
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] p-6 text-center">
            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🥈</span>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              Gold Partner
            </h3>
            <p className="text-gray-600 text-sm">
              Premium partnership with enhanced support and training resources
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] p-6 text-center">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🥉</span>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              Silver Partner
            </h3>
            <p className="text-gray-600 text-sm">
              Standard partnership with reliable support and product access
            </p>
          </div>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {partners.map((partner, index) => (
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
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {partner.name}
              </h3>
              <p className="text-gray-600 mb-4 text-sm">
                {partner.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                  {partner.category}
                </span>
                <span className="text-xs font-semibold text-gray-700">
                  {partner.partnership}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Partnership Benefits */}
        <div className="mt-20 bg-white rounded-xl shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Why Partner With Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Expert Support
              </h3>
              <p className="text-gray-600 text-sm">
                Dedicated technical support and training for your team
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💼</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Business Growth
              </h3>
              <p className="text-gray-600 text-sm">
                Access to exclusive deals and business development opportunities
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔧</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Technical Resources
              </h3>
              <p className="text-gray-600 text-sm">
                Comprehensive technical documentation and resources
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Market Access
              </h3>
              <p className="text-gray-600 text-sm">
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
