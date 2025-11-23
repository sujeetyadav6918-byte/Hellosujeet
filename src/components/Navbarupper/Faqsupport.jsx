import React, { useState } from 'react';

const FAQ_SECTIONS = [
  {
    title: 'Legal',
    faqs: [
      {
        q: 'Is it legal to import medicines from another country?',
        a: 'Yes, many countries allow patients to import medicines if they are not available locally. This is called the Named Patient Program. You must have a prescription, and some countries may need extra approval. Contact us to learn about the rules in your country.',
      },
      {
        q: 'Is my personal information confidential?',
        a: 'Yes, we keep all your personal and medical information private. We do not share it with anyone unless you allow us to or if the law requires it. Your privacy and safety are very important to us, and we follow strict rules to protect your information.',
      },
      {
        q: 'Is Indian Pharma Network 100% safe and secure?',
        a: 'Yes, rarepharmasupply is a registered and trusted company. We follow all legal rules in your country and only send medicines when you have a valid doctor’s prescription. We make sure everything is done safely and legally so you can trust us to provide genuine medicines.',
      },
      {
        q: 'What documents do I need to import medicine?',
        a: 'You always need a doctor’s prescription from your country. Some countries may also ask for an import license from the health department. If you are not sure what documents you need, contact us. We will guide you through the process and provide the right information.',
      },
    ],
  },
  {
    title: 'Finances',
    faqs: [
      {
        q: 'Medicines are expensive. Who sets the price of these medicines?',
        a: 'Medicine prices are determined by manufacturers, suppliers, import duties, and government regulations. Factors like availability, research costs, and demand also affect pricing. Some medicines have special pricing programs or discounts, so it’s best to check with us for the latest cost and assistance options.',
      },
      {
        q: 'Why do I need to pay before receiving the medicine?',
        a: 'We arrange medicines only when a patient needs them. We do not keep extra stock because the law does not allow us to. We must pay the supplier before getting the medicine, so we can only process your order after receiving your payment.',
      },
      {
        q: 'How can I be sure that I will receive the medicine?',
        a: 'We are a trusted and licensed company. We have safely delivered over 15,000 medicines to 150+ countries. You can check our reviews on Google, call us, or even visit our office. Once your order is shipped, we will send you a tracking number to follow your package.',
      },
      {
        q: 'Are there any hidden charges when buying the medicine?',
        a: 'No, we always give you a clear price before you make a payment. However, in some cases, your country may charge extra customs fees or taxes when the medicine arrives. We will guide you on possible costs so you are fully informed before ordering.',
      },
    ],
  },
  {
    title: 'About us',
    faqs: [
      {
        q: 'What is the best way to contact you?',
        a: (
          <span>
            <b>There are a few ways you can reach us:</b>
            <ul className="list-disc ml-6 mt-1">
              <li>Fill out the enquiry form on our Contact Us page.</li>
              <li>
                Send us an email at{' '}
                <a
                  className="text-blue-600"
                  href="mailto:rarepharmasupply@gmail.com"
                >
                  rarepharmasupply@gmail.com
                </a>
              </li>
              <li>Call us at +91-9768640067</li>
              <li>
                WhatsApp: Add +91 9768640067 to your contacts and send us a
                message.
              </li>
              <li>Let us know how we can help.</li>
            </ul>
          </span>
        ),
      },
      {
        q: 'Who is the Indian Pharma Network team?',
        a: 'Our team includes legal experts, logistics specialists, and patient support professionals. We help you get the latest approved medicines in a safe and legal way.',
      },
      {
        q: 'Where are you located, and when can I contact you?',
        a: 'We are based in Maharashtra, India. Our office is open from 09:00 AM to 06:00 PM IST, Monday to Friday. You can contact us during these hours for any help or questions.',
      },
      {
        q: 'What types of medicines do you provide?',
        a: 'At the moment, our main focus is on ONCOLOGY (cancer medicines), NEUROLOGY (brain and nerve-related medicines), and rare diseases. We also provide medicines for NEPHAROLOGY, metabolic disorders, and other critical health conditions. If you need a medicine that we do not currently offer, please contact us. We will do our best to help you find it.',
      },
      {
        q: 'Where do you get the medicines from?',
        a: 'We source the best quality medicines from trusted suppliers in Europe and the USA. These medicines are approved by top health authorities like the FDA, EMA, and more.',
      },
    ],
  },
  {
    title: 'Price',
    faqs: [
      {
        q: 'How can I check the price of a medicine?',
        a: 'You can ask us for the price of any medicine. Just contact us, and we will provide a quote. The quote includes all costs, such as the price of the medicine, shipping, and any other fees. We will send you the final price for your approval.',
      },
      {
        q: 'Why do some medicines cost so much?',
        a: 'The manufacturer sets the price of medicines. New and innovative medicines usually have higher prices. Over time, prices may change as production increases. However, most patients cannot wait. That’s why we offer these medicines as soon as possible at the lowest price we can negotiate for you.',
      },
      {
        q: 'Can I check medicine prices online?',
        a: 'Every medicine has different costs based on availability and location. Please contact us to get an exact quote. If you have any questions about the medicine’s strength, dosage, or our service, feel free to ask us anytime.',
      },
      {
        q: 'How is the price of a medicine decided?',
        a: 'The cost of a medicine is set by the manufacturer. Other factors like import fees, shipping, and demand may also affect the final price. We always try to provide the best possible price for our patients while ensuring safe and legal access to the medicine.',
      },
    ],
  },
  {
    title: 'Ordering and shipping',
    faqs: [
      {
        q: 'How do I request medicine?',
        a: 'To request medicine, you need a valid prescription from your doctor. Then, contact a trusted supplier who can legally provide the required medicine. The supplier will guide you through the process, including documentation, pricing, and shipping details. They will ensure a safe and legal purchase.',
      },
      {
        q: 'Why do I need a prescription?',
        a: 'Your doctor’s prescription confirms that the treatment is necessary and safe for you. It is required by law for customs clearance and pharmacy collection. Our protocols may require contacting your doctor for verification. Sending your prescription allows us to ensure compliance and provide secure access to medicine.',
      },
      {
        q: 'Where can you ship the medicines to?',
        a: 'We legally ship to multiple countries, depending on local regulations. Some hard-to-access medicines require special permissions before import. Our team ensures compliance with your country’s laws and helps with documentation. Contact us to confirm if we can deliver the required medicine to your location.',
      },
      {
        q: 'How long does it take to receive medicine?',
        a: 'Shipping times vary based on location, medicine type, and customs clearance. Generally, delivery takes 1-2 weeks. Once shipped, we provide a tracking number and updates. For an exact timeline, contact our Patient Support Team, and we’ll guide you through the estimated delivery process for your order.',
      },
      {
        q: 'How does your shipping process work?',
        a: 'Once we have sourced your required medicines, we can directly ship them to you. During the shipping process, your medicine is exported from its original country and imported into your country. We include all important documents needed for shipping. Since different countries have different rules for importing medicines, we make sure to include the correct paperwork. We use our experience, global connections, and knowledge to safely import and deliver prescription medicines to you.',
      },
    ],
  },
  {
    title: 'Updates',
    faqs: [
      {
        q: 'How can I stay updated on new medicines approved by the FDA?',
        a: 'We regularly post news blogs when the FDA, EMA, and other global health agencies approve new medicines. To stay updated, visit our website often. In the future, we will also send updates by email. Let us know if you’d like to be added.',
      },
    ],
  },
];

export default function AboutFaqPage() {
  const [openIdx, setOpenIdx] = useState({});

  const handleToggle = (section, idx) =>
    setOpenIdx((prev) => ({
      ...prev,
      [section]: prev[section] === idx ? null : idx,
    }));

  return (
    <div className="w-full bg-gradient-to-br from-[#f8fbfd] to-[#eef3fb] pb-24 min-h-screen">
      {/* Hero Banner */}
      <div className="hero-banner relative w-full h-[340px] flex items-center justify-center overflow-hidden mb-[-55px]">
        <img
          src="src/assets/website.imge/image6.jpg"
          alt="About Us Hero Banner"
          className="absolute w-full h-full object-cover min-h-[220px] brightness-75"
        />
        <div className="hero-text absolute w-full h-full flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold bg-black/20 rounded-xl px-8 py-4 shadow-lg text-center">
            Frequently asked questions
          </h1>
        </div>
      </div>
      {/* About Section */}
      <div className="about-content max-w-2xl mx-auto bg-white rounded-2xl shadow-lg px-8 py-10 mt-[36px] mb-10">
        <h2 className="text-blue-700 text-3xl font-bold mb-5">Our Mission</h2>
        <p>
          We strive to deliver the safest, fastest, and most trusted pharma
          supply – connecting patients, physicians, and global healthcare
          partners. Our network ensures access to essential medicines,
          compliance with international standards, and dedicated support from
          consultation through delivery.
        </p>
        <div className="about-card mb-5 bg-blue-50 rounded-md shadow p-4">
          <b>What makes us different?</b>
          <br />
          Our team brings decades of healthcare experience. We offer customized
          solutions for rare and urgent medicine needs, professional advice for
          import/export regulations, and complete confidentiality for every
          customer.
        </div>
        <h2 className="mt-10 text-blue-700 text-2xl font-bold mb-3">
          Why Choose Us?
        </h2>
        <ul className="list-disc ml-6 text-base leading-7">
          <li>Trusted and verified international suppliers</li>
          <li>Expert compliance with government rules</li>
          <li>Transparent communication & documentation</li>
          <li>Support for hospitals and individuals</li>
          <li>100% safe and secure supply chain</li>
        </ul>
      </div>
      {/* FAQ Sections */}
      <div className="max-w-3xl mx-auto px-2">
        {FAQ_SECTIONS.map((section, sIdx) => (
          <div className="container1 mb-10" key={section.title}>
            <h1 className="text-blue-900 text-3xl font-extrabold mb-5 mt-12">
              {section.title}
            </h1>
            {section.faqs.map((faq, idx) => (
              <div
                key={idx}
                className="faq-item mb-7 bg-blue-50 rounded shadow"
              >
                <div
                  role="button"
                  tabIndex={0}
                  aria-expanded={openIdx[section.title] === idx}
                  className={`faq-question flex items-center text-lg font-semibold px-7 py-6 cursor-pointer border-b border-blue-100 select-none ${
                    openIdx[section.title] === idx
                      ? 'bg-blue-100'
                      : 'bg-blue-50'
                  }`}
                  onClick={() => handleToggle(section.title, idx)}
                  onKeyDown={(e) =>
                    (e.key === 'Enter' || e.key === ' ') &&
                    handleToggle(section.title, idx)
                  }
                >
                  <span className="faq-icon mr-4 w-7 text-xl font-bold">
                    {openIdx[section.title] === idx ? '−' : '+'}
                  </span>
                  {faq.q}
                </div>
                <div
                  className={`faq-answer text-base px-7  pt-0 bg-blue-50 overflow-hidden transition-all duration-300 ${
                    openIdx[section.title] === idx
                      ? 'max-h-[350px] py-6 bg-blue-100'
                      : 'max-h-0'
                  }`}
                  aria-hidden={openIdx[section.title] !== idx}
                >
                  {faq.a}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
