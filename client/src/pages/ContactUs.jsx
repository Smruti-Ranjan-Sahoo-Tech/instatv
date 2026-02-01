import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // later you can connect backend / email service
    console.log("Contact Form Data:", formData);
    alert("Thank you for contacting us!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 min-h-[90vh] text-gray-900 dark:text-white rounded">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
          Contact Us
        </h1>
        <p className="mt-3 text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
          Have questions, feedback, or suggestions? We’d love to hear from you.
        </p>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Contact Info */}
        <div className="space-y-5">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
            Get in Touch
          </h2>
          <p className="text-gray-700 dark:text-gray-300">
            Reach out to us anytime. We usually respond within 24 hours.
          </p>

          <div className="space-y-3 text-gray-700 dark:text-gray-300">
            <p>📧 Email: support@iodia.com</p>
            <p>📞 Phone: +91 98765 43210</p>
            <p>📍 Location: Odisha, India</p>
          </div>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-base-100 dark:bg-gray-800 rounded-2xl p-6 shadow-sm space-y-4"
        >
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 w-full rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-400 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-400 dark:border-gray-600 dark:bg-gray-900 dark:text-white"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 w-full rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-400 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-400 dark:border-gray-600 dark:bg-gray-900 dark:text-white"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              required
              className="mt-1 w-full rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-400 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-400 dark:border-gray-600 dark:bg-gray-900 dark:text-white"
              placeholder="Write your message..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2 rounded-lg transition"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Footer Note */}
      <div className="mt-14 text-center text-sm text-gray-600 dark:text-gray-400">
        We respect your privacy. Your information is safe with us.
      </div>
    </div>
  );
};

export default ContactUs;
