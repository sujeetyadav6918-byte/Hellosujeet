import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  // Reset form when Contact page/component opens
  useEffect(() => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });

    setStatus("");
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setStatus("");

    try {
      const response = await fetch(
        "https://rare-project-production.up.railway.app/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (data.success) {
        setStatus("Message sent successfully! ✅");

        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        setStatus("Failed to send message ❌");
      }
    } catch (error) {
      console.error("Contact Error:", error);
      setStatus("Something went wrong. Please try again. ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className="bg-gray-50 py-16 px-6 md:px-16"
      id="contact"
    >
      {/* Heading */}
      <div className="text-center mb-12" data-aos="fade-up">
        <h4 className="text-lg uppercase tracking-wide text-blue-500 mb-2">
          ....rarepharmasupply contact us.......
        </h4>

        <h1 className="text-4xl font-bold text-gray-700 mb-4">
          Get In Touch!
        </h1>

        <p className="text-gray-600 max-w-2xl mx-auto">
          We help Patients, Hospitals, and Researchers access medicines not
          available in their country.
        </p>
      </div>

      {/* Form + Map */}
      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          data-aos="fade-right"
          autoComplete="off"
          className="bg-white p-8 rounded-xl shadow-lg border border-gray-100"
        >
          <h2 className="text-2xl font-semibold text-blue-700 mb-2">
            Need Support!
          </h2>

          <p className="text-gray-500 mb-6">
            Contact us for quotes, help, or partnership opportunities.
          </p>

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full mb-4 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
            required
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full mb-4 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
            required
          />

          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Your Phone"
            className="w-full mb-4 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
          />

          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Your Subject"
            className="w-full mb-4 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
          />

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            placeholder="Your Message..."
            className="w-full mb-6 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all cursor-pointer disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {status && (
            <p className="text-center mt-4 font-medium">
              {status}
            </p>
          )}
        </form>

        {/* Google Map */}
        <div
          className="relative rounded-xl overflow-hidden shadow-lg"
          data-aos="fade-left"
        >
          <iframe
            title="Rare Pharma Supply Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60257.39030220188!2d72.81722122012383!3d19.27858708362498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b05931cfcaf1%3A0x747d46e84f49bcf1!2sMira%20Bhayandar%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1760251449662!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* Contact Information */}
      <div
        className="grid md:grid-cols-3 gap-8 mt-16"
        data-aos="fade-up"
      >
        {/* Location */}
        <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md">
          <i className="ri-map-pin-fill text-3xl text-blue-600 mb-2"></i>

          <h3 className="font-semibold text-lg text-gray-700 mb-1">
            Location
          </h3>

          <p className="text-gray-500">
            Room No, Goddev Naka, Bhayandar East
          </p>
        </div>

        {/* Email */}
        <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md">
          <i className="ri-mail-open-fill text-3xl text-blue-600 mb-2"></i>

          <h3 className="font-semibold text-lg text-gray-700 mb-1">
            Email
          </h3>

          <p className="text-gray-500">
            rarepharmasupply@gmail.com
          </p>
        </div>

        {/* Phone */}
        <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md">
          <i className="ri-phone-fill text-3xl text-blue-600 mb-2"></i>

          <h3 className="font-semibold text-lg text-gray-700 mb-1">
            Phone
          </h3>

          <p className="text-gray-500">
            +91 9768640067
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;