import React, { useState } from "react";

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

 const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const res = await fetch('http://localhost:5000/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
    const data = await res.json();
    if (data.success) {
      alert('Message sent and stored!');
      setFormData({ name: '', email: '', message: '' });
    } else {
      alert('Error storing message');
    }
  } catch (err) {
    console.error(err);
    alert('Server not reachable');
  }
};


  return (
    <section
      id="Contact"
      className="min-h-screen bg-gray-900 text-white flex flex-col justify-center items-center py-12 px-4"
    >
      {/* Heading */}
      <div className="mb-10 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Contact <span className="text-yellow-400">Me</span>
        </h2>
        
      </div>

      {/* Contact Form */}
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xl bg-gray-800 p-8 rounded-xl shadow-md space-y-6 border-2 border-transparent hover:border-yellow-400 transition duration-300"
      >
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
          className="w-full p-3 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
          className="w-full p-3 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          required
          className="w-full p-3 rounded bg-gray-700 text-white placeholder-gray-400 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
        <button
          type="submit"
          className="w-full bg-yellow-400 text-gray-900 font-semibold py-3 rounded hover:bg-yellow-500 transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
