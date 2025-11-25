
import React from "react";

// Update these with your own image paths or import statements if needed!
const therapeuticAreas = [
  {
    name: "Oncology",
    image: " website.imge/oncology.jpeg",
    link: "/Oncology ",
  },
  {
    name: "Hematology",
    image: "website.imge/hematology.jpeg",
    link: "/Hematology",
  },
  {
    name: "Neurology",
    image: "website.imge/neurology.jpeg",
    link: "/Neurology",
  },
  {
    name: "Rare Disease",
    image: "website.imge/rare.jpeg",
    link: "/Raredisease",
  },
];

export default function TherapeuticAreas() {
  return (
    <section className="container mx-auto px-4 py-16">
      {/* Section Title */}
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-black-200">
          Our Therapeutic Areas
        </h2>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
          We can source a vast range of specialty medicines. Here are the key
          areas we focus on.
        </p>
      </div>

      {/* Grid Section */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {therapeuticAreas.map((area, index) => (
          <Link
            key={index}
            to={area.link}
            className="group block rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl bg-white"
          >
            <div className="relative w-full h-60">
              <img
                src={area.image}
                alt={area.name}
                className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105 group-hover:brightness-110"
              />
              <div className="absolute inset-0  bg-opacity-0 group-hover:bg-opacity-10 transition"></div>
            </div>
            <h3 className="mt-4 mb-4 text-center font-semibold text-blue-700 text-lg tracking-wide">
              {area.name.toUpperCase()}
            </h3>
          </Link>
        ))}
      </div>

      {/* Button */}
      <div className="text-center mt-12">
        <Link
          to="/medicines-directory"
          className="inline-block bg-blue-100 hover:bg-blue-200 text-black font-semibold text-lg px-8 py-3 rounded-xl shadow transition cursor-pointer"
        >
          Full Medicines Directory
        </Link>
      </div>
    </section>
  );
}




