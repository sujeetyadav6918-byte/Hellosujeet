import { useParams } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom"; 
import products from "./productData";

const contactInfo = (
  <div>
    <h2 className="text-lg font-bold mb-3">Contact Patient Support</h2>
    <div className="flex flex-col space-y-2 text-sm">
      <div>
        <div className="font-semibold text-gray-600">📧 Email</div>
        <a href="mailto:sujeetyadav6918@gmail.com" className="text-blue-700">
          sujeetyadav6918@gmail.com
        </a>
      </div>
      <div>
        <div className="font-semibold text-gray-600">📞 Call</div>
        <a href="tel:8928638767" className="text-blue-700">
          +91-9768640067
        </a>
      </div>
      <div>
        <div className="font-semibold text-gray-600">💬 Whatsapp</div>
        <a
          href="https://wa.me/919768640067"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700"
        >
          +91-8928638767
        </a>
      </div>
    </div>
  </div>
);

export default function ProductPage() {
  const { productId } = useParams();
  const product = products.find((p) => p.id === productId);
  const [activeTab, setActiveTab] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const scrollRef = useRef(null);

  // jab product change ho, tab reset
  useEffect(() => {
    setActiveTab(0);
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [productId]);

  if (!product) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-10">
        <p className="text-red-600 font-semibold">
          Product data nahi mila (invalid URL).
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen px-4 py-8">
      <div className="max-w-3xl mx-auto">
        {/* Top Section */}
        <div className="md:flex md:items-start mb-8">
          <img
            src={product.image}
            alt={product.name}
            className="w-40 h-52 object-contain rounded shadow mx-auto md:mx-0 md:mr-6"
          />
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-red-700 mb-4">
              {product.name}
            </h1>
            <ul className="bg-gray-50 border rounded p-4 mb-2 text-sm">
              {product.meta.map((m) => (
                <li key={m.label}>
                  <b>{m.label}:</b> {m.value}
                </li>
              ))}
            </ul>
            <button
              className="bg-gray-600 text-white px-5 py-2 rounded mt-2 shadow hover:bg-gray-700 cursor-pointer"
              onClick={() => setShowPopup(true)}
            >
              Submit an Enquiry
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="border-b mb-6">
          <nav className="hidden sm:flex space-x-6 text-sm font-semibold">
            {product.tabs.map((tab, idx) => (
              <button
                key={tab.label}
                className={`pb-1 text-sm font-semibold cursor-pointer transition-colors ${
                  activeTab === idx
                    ? "text-red-700 border-b-2 border-red-700"
                    : "text-gray-700"
                }`}
                onClick={() => setActiveTab(idx)}
              >
                {tab.label}
              </button>
            ))}
          </nav>

          <nav className="flex flex-col sm:hidden">
            {product.tabs.map((tab, idx) => (
              <button
                key={tab.label}
                className={`text-left py-2 px-2 border-b text-sm font-semibold  ${
                  activeTab === idx
                    ? "text-red-700 border-red-700 bg-red-50 font-bold"
                    : "text-gray-700"
                }`}
                onClick={() => setActiveTab(idx)}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Tab Content */}
        <div
          className="prose prose-sm max-w-none text-gray-700"
          dangerouslySetInnerHTML={{ __html: product.tabs[activeTab].html }}
        />

        {/* Contact box */}
        <div className="border rounded mt-10 p-5 bg-gray-50">{contactInfo}</div>

        {/* Related products */}
      {/* Related products */}
{product.related?.length > 0 && (
  <div className="mt-14">
    <h3 className="text-xl mb-6 font-bold text-blue-700">
      Related Products
    </h3>
    <div
      ref={scrollRef}
      className="flex overflow-x-auto space-x-6 pb-2"
    >
      {product.related.map((rp) => (
        <Link
          key={rp.id}
          to={`/product/${rp.id}`}
          className="min-w-[210px] max-w-[220px] bg-white shadow rounded-lg border p-3 flex-shrink-0 text-center"
        >
          <img
            src={rp.image}
            alt={rp.name}
            className="h-24 mx-auto mb-2 object-contain"
          />
          <div className="font-bold text-gray-700">{rp.name}</div>
        </Link>
      ))}
    </div>
  </div>
)}

        
      </div>

      {/* Popup */}
      {showPopup && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black/50 z-40"
          onClick={() => setShowPopup(false)}
        >
          <div
            className="bg-white rounded-lg p-8 max-w-md mx-auto shadow-lg relative z-50"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-3 text-gray-400 text-xl font-bold"
              onClick={() => setShowPopup(false)}
            >
              &times;
            </button>
            <h2 className="text-xl font-bold mb-4 text-blue-700">
              Contact Support
            </h2>
            <div className="mb-2">
              For all enquiries, please use the details below:
            </div>
            {contactInfo}
            <div className="mt-3 text-xs text-gray-600">
              We reply within 24 hours (Mon–Fri 9:00–18:00 IST)
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
