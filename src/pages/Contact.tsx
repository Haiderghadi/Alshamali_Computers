import Container from "../components/reusables/Container";
import Heading from "../components/reusables/Heading";
import { useState, type ChangeEvent, type FormEvent } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaClock,
  FaUser,
  FaComments,
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    comment: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    // Reset form or handle submission here
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      comment: "",
    });
  };

  const contactInfo = [
    {
      icon: <FaEnvelope className="text-2xl text-blue-600" />,
      title: "Email",
      value: "support@shamaliq8.com",
      link: "mailto:support@shamaliq8.com",
    },
    {
      icon: <FaPhone className="text-2xl text-green-600" />,
      title: "Phone",
      value: "+965 2221 2988",
      link: "tel:+96522212988",
    },
    {
      icon: <FaMapMarkerAlt className="text-2xl text-red-600" />,
      title: "Address",
      value: "Sharq, Kuwait City",
      link: "#",
    },
  ];

  const businessHours = [
    { day: "Sunday to Thursday", hours: "08:00 AM to 08:00 PM" },
    { day: "Friday", hours: "Closed" },
    { day: "Saturday", hours: "10:00 AM to 07:00 PM" },
  ];

  const branches = [
    {
      name: "Branch 1",
      address: "Sharq, Kuwait City",
    },
    {
      name: "Branch 2",
      address: "Ibn Khaldun Street, Hawally",
    },
  ];

  return (
    <div className="bg-background min-h-screen pt-2 lg:pt-5">
      <Container>
        <Heading
          title="Contact"
          description="We're here to assist you with all your IT needs. Whether you have questions, need support, or are interested in our services, feel free to reach out to us."
        />

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] p-6 text-center hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex justify-center mb-4">{info.icon}</div>
              <h3 className="text-lg font-semibold text-heading mb-2">
                {info.title}
              </h3>
              <a
                href={info.link}
                className="text-blue-600 hover:text-blue-800 transition-colors"
              >
                {info.value}
              </a>
            </div>
          ))}
        </div>

        {/* Branches */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-heading mb-6">Our Branches</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {branches.map((branch, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] p-6"
              >
                <h3 className="text-lightDescription">{branch.name}</h3>
                <p className=" text-lg font-semibold text-heading mb-2">
                  {branch.address}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Business Hours */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-heading mb-6">
            Customer Support Hours
          </h2>
          <div className="bg-white rounded-xl shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] p-6">
            <div className="flex items-center mb-4">
              <FaClock className="text-2xl text-orange-600 mr-3" />
              <h3 className="text-lg font-semibold text-heading">
                Operating Hours
              </h3>
            </div>
            <div className="space-y-3">
              {businessHours.map((schedule, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0"
                >
                  <span className="font-medium text-heading">
                    {schedule.day}
                  </span>
                  <span className="text-lightDescription">
                    {schedule.hours}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="mb-12">
          <div className="bg-white rounded-xl shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] p-8">
            <div className="flex items-center mb-6">
              <FaComments className="text-2xl text-blue-600 mr-3" />
              <h2 className="text-2xl font-bold text-heading">
                Send us a Message
              </h2>
            </div>
            <p className="text-lightDescription mb-6">
              You can also fill out the contact form below, and one of our
              representatives will get back to you as soon as possible.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-description mb-2">
                    Name
                  </label>
                  <div className="relative">
                    <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-description mb-2">
                    Email
                  </label>
                  <div className="relative">
                    <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-description mb-2">
                  Phone Number
                </label>
                <div className="relative">
                  <FaPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your Phone Number"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-description mb-2">
                  Comment
                </label>
                <textarea
                  name="comment"
                  value={formData.comment}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Tell us about your inquiry..."
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gray-900 text-white py-3 px-6 rounded-md hover:bg-gray-800 transition-colors duration-300 font-medium"
              >
                Send
              </button>
            </form>
          </div>
        </div>

        {/* Additional Information */}
        <div className="bg-blue-50 rounded-xl p-8">
          <h3 className="text-xl font-bold text-heading mb-4">
            Need Immediate Assistance?
          </h3>
          <p className="text-lightDescription mb-4">
            For urgent technical support or immediate assistance, please call us
            directly at{" "}
            <a
              href="tel:+96522212988"
              className="text-blue-600 hover:text-blue-800 font-semibold"
            >
              +965 2221 2988
            </a>
            . Our support team is available during business hours to help you
            with any technical issues or questions.
          </p>
          <p className="text-lightDescription">
            For general inquiries or to schedule a consultation, you can also
            email us at{" "}
            <a
              href="mailto:support@shamaliq8.com"
              className="text-blue-600 hover:text-blue-800 font-semibold"
            >
              support@shamaliq8.com
            </a>
            .
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
