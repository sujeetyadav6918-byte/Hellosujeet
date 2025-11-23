import React from "react";

// Team members data
const leaders = [
  {
    name: "Himanshu Tiwari",
    title: "Founder & CEO",
    description:
      "Himanshu's vision and specialized experience are the driving force behind our patient-first approach.",
    img: "/website.imge/himanshu.jpg",
    fallback: "https://placehold.co/200x200/E2E8F0/4A5568?text=Founder",
  },
  {
    name: "Dr. Priya Desai",
    title: "Chief Medical Officer",
    description:
      "Dr. Desai ensures that all our services meet the highest standards of medical ethics and patient safety.",
    img: "https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=2071&auto=format&fit=crop",
    fallback: "https://placehold.co/200x200/E2E8F0/4A5568?text=CMO",
  },
  {
    name: "Rohan Mehta",
    title: "Head of Operations & Logistics",
    description:
      "Rohan masterfully navigates the complexities of global supply chains to ensure timely and secure delivery.",
    img: "https://images.unsplash.com/photo-1581092916322-3c1a36a28196?q=80&w=1887&auto=format&fit=crop",
    fallback: "https://placehold.co/200x200/E2E8F0/4A5568?text=COO",
  },
];

const LeadershipSection = () => (
  <div className="container mx-auto px-6">
    <h2
      className="text-3xl md:text-4xl font-bold text-blue-700 text-center mb-12"
      style={{ padding: 50 }}
    >
      Meet Our Leadership
    </h2>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
      {leaders.map((leader, idx) => (
        <div key={idx} className="text-center">
          <img
            src={leader.img}
            alt={leader.name}
            className="rounded-full shadow-lg mx-auto w-48 h-48 object-cover mb-4"
            onError={e => {
              e.target.onerror = null;
              e.target.src = leader.fallback;
            }}
            loading="lazy"
          />
          <h3 className="text-xl font-bold text-blue-700">{leader.name}</h3>
          <p className="text-gray-500 font-semibold">{leader.title}</p>
          <p className="text-gray-600 mt-2">{leader.description}</p>
        </div>
      ))}
    </div>
  </div>
);

export default LeadershipSection;
