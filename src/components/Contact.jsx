import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    phone: "",
    email: "",
    username: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ phone: "", email: "", username: "" }); // Clear form after submit
  };

  return (
    <section
      id="contact"
      className="flex items-center justify-center py-10 px-4 md:px-16 lg:px-32"
    >
      <div className="shadow-lg rounded-lg p-5 w-full max-w-lg lg:max-w-full">
        {/* Increased width and added shadow */}
        <h2 className="text-4xl md:text-4xl font-semibold mb-10 text-center">
          Contact Us
        </h2>

        {/* Map container */}
        <div className="map-container mb-6">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.2989077234506!2d106.8268265117686!3d-6.224262193737779!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3fa80a170f9%3A0xe683d557a443c!2sMultimatics!5e0!3m2!1sid!2sid!4v1727234690326!5m2!1sid!2sid"
            width="100%"
            height="250"
            className="w-full h-48 sm:h-64 lg:h-80"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        {/* Form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="phone" className="block text-green-600 font-medium">
              Phone Number:
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-green-600 font-medium">
              Email Address:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email address"
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-green-600 font-medium"
            >
              Username:
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Enter your username"
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white font-semibold py-2 rounded-md hover:bg-green-500 transition"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
