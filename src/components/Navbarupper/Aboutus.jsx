import React from "react";
import { motion } from "framer-motion";

const VALUES = [
  {
    title: "Trust",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 20.417l5.5-5.5m3.118-5.524a1.06 1.06 0 011.5 0l2.828 2.828a1.06 1.06 0 010 1.5L9 20.417l-5.5 2.75a.5.5 0 01-.65-.65l2.75-5.5L11.618 5.476z"
        />
      </svg>
    ),
    text:
      "We are your dedicated partner. Every action we take is guided by the highest ethical standards to ensure your well-being and peace of mind.",
  },
  {
    title: "Transparency",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    ),
    text:
      "We demystify the process. You receive clear, honest communication and detailed cost breakdowns. There are no hidden fees, ever."
  },
  {
    title: "Compassion",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    ),
    text:
      "We understand the human side of medicine. Your dedicated case manager is here to listen, support, and guide you with empathy."
  }
];

export default function AboutPage() {
  return (
    <main className="bg-cover bg-no-repeat bg-center min-h-screen"
  style={{ backgroundImage: "url('website.imge/image6.jpg')" }}>
     
      <motion.section
  className="py-16 md:py-24 bg-cover bg-no-repeat bg-center"
  style={{ backgroundImage: "url('/website.imge/aboutbg.avif')" }}
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.5 }}
  transition={{ duration: 0.8, delay: 0.1 }}
>
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Left: Story */}
            <motion.div
              className="md:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Our Story: A Mission Born from Necessity
              </h2>
              <p className="text-gray-600 text-lg mb-4 leading-relaxed">
                Rare Pharma Supply was founded by Himanshu Tiwari, a specialist with over 8 years of dedicated experience in Named Patient Programs and rare disease medicine. Over his career, he witnessed a recurring, heartbreaking problem: patients in India, diagnosed with rare and life-threatening diseases, were unable to access the very medicines that could save them. The path was blocked by bureaucratic hurdles, opaque pricing, and a lack of reliable information.
              </p>
              <p className="text-gray-600 text-lg mb-4 leading-relaxed">
                {/* He saw families exhaust their savings navigating a confusing system, often with no guarantee of success. The emotional and financial toll was immense. It was from this experience that a simple, powerful idea was born: to create a service that would act as a patient's trusted advocate. */}
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                {/* In 2020, he launched Rare Pharma Supply not just as a business, but as a mission-driven organization dedicated to building a bridge between patients and the global supply of life-saving medicines. We are that bridge, built on a foundation of unwavering trust, absolute transparency, and profound compassion. */}
              </p>
            </motion.div>
            {/* Right: Image */}
            <motion.div
              className="md:w-1/2 flex-shrink-0"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <img
                src="website.imge/image7.avif"
                alt="A diverse team collaborating"
                className="rounded-lg shadow-xl w-full h-auto max-h-[430px] object-cover"
                onError={e => { e.target.src = "https://placehold.co/600x400/E2E8F0/4A5568?text=Our+Team"; }}
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Our Values Section */}
      <motion.section
        className="bg-accent py-16 md:py-24"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12">
            The Pillars of Our Promise
          </h2>
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {VALUES.map((v, idx) => (
              <motion.div
                key={v.title}
                className="bg-white p-8 rounded-lg shadow-lg transition-transform duration-300 hover:-translate-y-2 flex flex-col items-center"
                initial={{ opacity: 0, y: 70 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 + idx * 0.1 }}
              >
                <div>
                  {v.icon}
                </div>
                <h3 className="text-2xl font-bold text-primary mb-3">{v.title}</h3>
                <p className="text-gray-600">{v.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </main>
  );
}
