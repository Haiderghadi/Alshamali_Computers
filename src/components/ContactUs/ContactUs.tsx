import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    // Reset form or handle submission here
  };

  return (
    <section className="bg-neutral-100 py-12 px-6 md:px-12">
      <div className="max-w-3xl mx-auto text-left">
        <h2 className="text-3xl font-semibold text-neutral-800 mb-4">
          Get in touch!
        </h2>
        <p className="text-neutral-600 mb-8">
          We'd love to hear from you. Fill in the form below to get in touch.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-neutral-300 bg-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-500"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-neutral-300 bg-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-500"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            className="w-full border border-neutral-300 bg-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-500"
            required
          />
          <button
            type="submit"
            className="w-full bg-neutral-800 text-white py-3 rounded-md hover:bg-neutral-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
