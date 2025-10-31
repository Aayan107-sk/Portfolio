import React, { useState } from "react";
import CustomCursor from "./components/CustomCursor";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const phoneNumber = "919004208319"; // apna WhatsApp number daal

    const message = `
*New Portfolio Contact*

*Name:* ${formData.name}
*Email:* ${formData.email}

*Message:*
${formData.message}
    `.trim();

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");

    setFormData({ name: "", email: "", message: "" });
    alert("Opening WhatsApp...");
  };

  return (
    <section
    id="contact"
    className="min-h-screen bg-gray-900 text-white flex flex-col justify-center items-center py-16 px-5 sm:px-8 md:px-12 lg:px-20 cursor-none"
    >
    <CustomCursor />
      {/* Heading */}
      <div className="mb-10 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
          Contact <span className="text-yellow-400">Me</span>
        </h2>
        <p className="text-gray-400 mt-2 text-sm sm:text-base">
          Feel free to reach out for collaboration or inquiries!
        </p>
      </div>

      {/* Contact Form */}
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md sm:max-w-lg md:max-w-xl bg-gray-800 p-6 sm:p-8 rounded-2xl shadow-lg space-y-6 border-2 border-transparent hover:border-yellow-400 transition duration-300"
      >
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
          className="w-full p-3 sm:p-4 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
          className="w-full p-3 sm:p-4 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />

        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          required
          className="w-full p-3 sm:p-4 rounded bg-gray-700 text-white placeholder-gray-400 h-28 sm:h-32 resize-none focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />

        <button
          type="submit"
          className="w-full bg-yellow-400 text-gray-900 font-semibold py-3 sm:py-4 rounded hover:bg-yellow-500 transition"
        >
          Send via WhatsApp
        </button>
      </form>
    </section>
  );
};

export default Contact;
