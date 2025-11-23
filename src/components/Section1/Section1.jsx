import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

// Replace these with your actual images if local
const imageMain = 'website.imge/image5.jpg';
const imageOverlay = 'src/assets/website.imge/Oncology-1030x579.jpg ';

export default function Section1() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="w-full min-h-screen flex flex-col bg-white">
      {/* Top Centered Heading */}
      <div className="w-full text-center pt-12 pb-8 px-4" data-aos="fade-down">
        <h2 className="text-3xl md:text-4xl font-serif font-medium mb-5">
          {' '}
          We are renowned traders suppliers and exporters of specialty
          medicines.
        </h2>
      </div>

      {/* Bottom Split Section */}
      <div className="flex flex-col lg:flex-row w-full max-w-6xl mx-auto px-4 lg:mt-24 mt-10 mb-12">
        {/* Text Block */}
        <div
          className="flex flex-col justify-center lg:w-1/2 w-full mb-10 lg:mb-0"
          data-aos="fade-right"
        >
          <div>
            <p className="uppercase tracking-widest text-gray-700 text-sm mb-3">
              HIMANSHU TIWARI
            </p>
            <h2 className="text-3xl md:text-4xl font-serif font-medium mb-5">
              {' '}
              Pharmaceutical Care For <br />
              You and Your Family
            </h2>
            <p className="text-gray-800 mb-6">
              We provide expert guidance for importing medicines legally and
              ethically for individual patient use.{' '}
            </p>
            <a
              to="/Aboutus2"
              className="bg-black text-white px-6 py-3 rounded shadow hover:bg-gray-900 font-serif transition  cursor-pointer"
            >
              {' '}
              ABOUT US{' '}
            </a>
          </div>
        </div>

        {/* Overlapping Images Block */}
        <div
          className="relative flex-1 flex justify-center items-center lg:justify-end"
          data-aos="fade-left"
        >
          <div className="relative w-64 h-80">
            {/* Background Main Image */}
            <img
              src={imageMain}
              alt="Background"
              className="rounded-lg shadow-lg object-cover w-64 h-80"
            />
            {/* Overlay Small Image */}
            <img
              src={imageOverlay}
              alt="Overlay"
              className="rounded shadow-lg object-cover absolute left-16 -bottom-14 w-48 h-32 border-4 border-white"
              style={{ zIndex: 2 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
