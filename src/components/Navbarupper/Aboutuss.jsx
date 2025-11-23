import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AboutContactPage() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [faqOpen, setFaqOpen] = useState(null);

  // FAQ toggle for accessibility
  const handleFaqToggle = (idx) => setFaqOpen(idx === faqOpen ? null : idx);

  return (
    <div className="bg-gradient-to-br from-[#f8fbfd] via-[#eef3fb] to-[#f8fbfd] min-h-screen pb-12">
      {/* Banner */}
      <div className="relative w-full min-h-[350px] flex items-center about-banner justify-center overflow-hidden z-10" data-aos="fade-down">
        <img src="/website.imge/image4.jpg" alt="About Us Banner"
             className="w-full max-h-[350px] object-cover brightness-75 blur-[1px] opacity-90"/>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-extrabold bg-[rgba(25,33,60,0.23)] rounded-xl px-12 py-4 shadow-lg tracking-widest">ABOUT US</h1>
        </div>
      </div>

      {/* Main content */}
      <main className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg mt-[-80px] relative pb-6 px-6 pt-16" data-aos="fade-up">
        <h2 className="about-title text-3xl text-blue-900 font-bold mt-9 mb-2">Named Patient Program | Managed Access Program</h2>
        <div className="about-subtitle text-lg text-blue-700 font-medium mt-1">Rare Pharma Supply is a group of highly qualified professionals of pharmaceutical industry.</div>
        <p className="about-text text-base leading-relaxed mt-5">
          Rare Pharma Supply was founded by Himanshu Tiwari, a specialist with over 8 years of dedicated experience in Named Patient Programs and rare disease medicine...
        </p>
        <div className="about-section mt-12 mb-7" data-aos="fade-left">
          <b className="font-extrabold">Benefits of the Named Patient Program (NPP):</b>
          <ul className="list-disc list-inside mt-3 mb-5 pl-6">
            <li className="mb-2">
              <b>Access to Unapproved Treatments:</b> Patients with serious conditions can access potentially life-saving medicines not yet approved in their country.
            </li>
            <li className="mb-2">
              <b>Flexibility in Treatment Options:</b> NPPs allow healthcare providers to explore additional treatment options for patients who have exhausted all other approved therapies.
            </li>
            <li>
              <b>Faster Treatment:</b> Patients can begin treatment sooner than if they had to wait for formal approval or local availability.
            </li>
          </ul>
          <b className="mt-5 block mb-1">Managed Access Program:</b>
          <span>Managed Access Programs in Bulgaria, EU countries allow access to critical medications that are not yet commercially available. This enables tailored patient access and timely treatments globally.</span>
          <ul className="list-disc list-inside mt-3 mb-5 pl-6">
            <li className="mb-2"><b>Managed Access Program in Bulgaria:</b> We offer a comprehensive Managed Access Program in Bulgaria...</li>
            <li className="mb-2"><b>Early Access Program in Europe:</b> Our Early Access Program enables patients in Europe to receive treatments before they are widely available...</li>
            <li><b>Global Drug Supply from Europe:</b> We supply a wide range of pharmaceutical products from Europe to other parts of the world...</li>
          </ul>
        </div>

        {/* Scroll button */}
        <button className="scroll-btn block mx-auto my-9 py-3 px-12 bg-gradient-to-r from-blue-600 to-orange-400 text-white font-bold rounded-lg shadow hover:scale-105 transition-all"
                onClick={() => document.getElementById('faq').scrollIntoView({behavior:'smooth'})}>
          Go to FAQ
        </button>

        {/* FAQ Section */}
        <div className="faq-group mt-10 mb-8" id="faq" data-aos="fade-up">
          <h3 className="text-2xl mb-6 font-bold text-blue-800">Frequently Asked Questions</h3>
          {[
              {
                q: "What is the Early Access Program in Europe?",
                a: "EAP programs enable early access for patients to treatments ahead of commercial launch."
              },
              {
                q: "What are the criteria for early access program?",
                a: "There should be a legitimate expectation of worthwhile benefit from the investigational drug even though there is an absence of definite clinical trial data..."
              },
              {
                q: "What are the benefits of early access programs?",
                a: "EAPs allow patients to receive potentially life-changing or life-saving medicines before their national medical authorities have approved the products."
              },
              {
                q: "What is the named patient program in the EU?",
                a: "Named-patient basis access is the supply of unauthorised medicines for individual patients in response to requests by doctors..."
              }
          ].map((faq, idx) => (
            <div className={`faq-item mb-3 rounded shadow transition-all ${faqOpen===idx&&'expanded'}`} key={faq.q} >
              <div className={`faq-question cursor-pointer px-6 py-3 font-semibold bg-blue-50 rounded`}
                   onClick={() => handleFaqToggle(idx)} tabIndex={0}>
                {faq.q}
              </div>
              <div className={`faq-answer overflow-hidden px-6 bg-blue-100 ${faqOpen===idx?'max-h-[300px] py-4':'max-h-0 py-0'} transition-all`}>
                {faq.a}
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Contact Section */}
      <section className="contact-form max-w-4xl mx-auto mt-20 bg-white rounded-xl shadow p-7" data-aos="fade-up">
        <h2 className="text-2xl font-bold text-blue-900">Get In Touch!</h2>
        <form action="https://api.web3forms.com/submit" method="POST" className="grid gap-5 mt-8">
          <input type="hidden" name="access_key" value="ac1c1616-2950-4457-af8d-87de15bfb428" />
          <input name="name" className="border rounded px-4 py-3" placeholder="Your name" required />
          <input name="email" className="border rounded px-4 py-3" placeholder="Your email" required />
          <input name="subject" className="border rounded px-4 py-3" placeholder="Your subject" />
          <textarea name="message" className="border rounded px-4 py-3" placeholder="Your message..." rows={5} />
          <button type="submit" className="bg-blue-700 text-white py-3 px-8 rounded font-bold hover:bg-blue-800 transition">Send Message</button>
        </form>
        <div className="map-container my-8" data-aos="fade-left">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60257.39030220188!2d72.81722122012383!3d19.27858708362498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b05931cfcaf1%3A0x747d46e84f49bcf1!2sMira%20Bhayandar%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1760251449662!5m2!1sen!2sin"
            width="100%" height="250" style={{ border: 0 }} allowFullScreen loading="lazy"></iframe>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-7 mt-7" data-aos="fade-up">
          <div>
            <h4 className="font-bold text-lg text-blue-800 mb-2 flex items-center gap-2">
              <span><i className="ri-map-pin-fill"></i></span> Location
            </h4>
            <p className="text-gray-700 font-medium">room no goddev naka Bhayandar east</p>
          </div>
          <div>
            <h4 className="font-bold text-lg text-blue-800 mb-2 flex items-center gap-2">
              <span><i className="ri-mail-open-fill"></i></span> Email
            </h4>
            <p className="text-gray-700 font-medium">rarepharmasupply@gmail.com</p>
          </div>
          <div>
            <h4 className="font-bold text-lg text-blue-800 mb-2 flex items-center gap-2">
              <span><i className="ri-phone-fill"></i></span> Phone No
            </h4>
            <p className="text-gray-700 font-medium">9768640067</p>
          </div>
        </div>
      </section>
    </div>
  );
}
