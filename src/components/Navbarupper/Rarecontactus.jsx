import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Rarecontact= () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="bg-gray-50 py-16 px-6 md:px-16" id="contact">
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

      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* Contact Form */}
        <form
          data-aos="fade-right"
          action="https://api.web3forms.com/submit"
          method="POST"
          className="bg-white p-8 rounded-xl shadow-lg border border-gray-100"
        >
          <input
            type="hidden"
            name="access_key"
            value="ac1c1616-2950-4457-af8d-87de15bfb428"
          />

          <h2 className="text-2xl font-semibold text-blue-700 mb-2">
            Need Support!
          </h2>
          <p className="text-gray-500 mb-6">
            Contact us for quotes, help, or partnership opportunities.
          </p>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full mb-4 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full mb-4 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Your Subject"
            className="w-full mb-4 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message..."
            className="w-full mb-6 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all"
          >
            Send Message
          </button>
        </form>

        {/* Map */}
        <div className="relative rounded-xl overflow-hidden shadow-lg" data-aos="fade-left">
          <iframe
            title="Rare Pharma Supply Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60257.39030220188!2d72.81722122012383!3d19.27858708362498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b05931cfcaf1%3A0x747d46e84f49bcf1!2sMira%20Bhayandar%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1760251449662!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* Contact Info */}
      <div className="grid md:grid-cols-3 gap-8 mt-16" data-aos="fade-up">
        <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md">
          <i className="ri-map-pin-fill text-3xl text-blue-600 mb-2"></i>
          <h3 className="font-semibold text-lg text-gray-700 mb-1">Location</h3>
          <p className="text-gray-500">Room No, Goddev Naka, Bhayandar East</p>
        </div>

        <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md">
          <i className="ri-mail-open-fill text-3xl text-blue-600 mb-2"></i>
          <h3 className="font-semibold text-lg text-gray-700 mb-1">Email</h3>
          <p className="text-gray-500">rarepharmasupply@gmail.com</p>
        </div>

        <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md">
          <i className="ri-phone-fill text-3xl text-blue-600 mb-2"></i>
          <h3 className="font-semibold text-lg text-gray-700 mb-1">Phone</h3>
          <p className="text-gray-500">+91 9768640067</p>
        </div>
      </div>
    </section>
  );
};

export default Rarecontact;
