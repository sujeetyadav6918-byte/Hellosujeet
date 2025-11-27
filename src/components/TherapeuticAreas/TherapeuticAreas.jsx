import React from "react";
import { Link } from "react-router-dom"; // Don't forget this import!

const therapeuticAreas = [
  {
    name: "Oncology",
    image: "/website.imge/oncology.jpeg",
    link: "/Oncology",
  },
  {
    name: "Hematology",
    image: "/website.imge/hematology.jpeg",
    link: "/Hematology",
  },
  {
    name: "Neurology",
    image: "/website.imge/neurology.jpeg",
    link: "/Neurology",
  },
  {
    name: "Rare Disease",
    image: "/website.imge/rare.jpeg",
    link: "/Raredisease",
  },
];

export default function TherapeuticAreas() {
  return (
    <section className="container mx-auto px-4 py-16">
      {/* Section Title */}
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-700">
          Our Therapeutic Areas
        </h2>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
          We can source a vast range of specialty medicines. Here are the key
          areas we focus on.
        </p>
      </div>

      {/* <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 justify-items-center"> */}


      {/* Grid Section */}
      {/* Grid / Slider Section */}
{/* Mobile: horizontal slider, Desktop: grid */}
<div className="mt-10">
  {/* Mobile slider */}
  <div className="flex gap-4 overflow-x-auto pb-4 md:hidden snap-x snap-mandatory">
    {therapeuticAreas.map((area, index) => (
      <Link
        key={index}
        to={area.link}
        className="group min-w-[70%] max-w-[80%] rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl bg-white snap-center"
      >
        <div className="relative w-full h-52">
          <img
            src={area.image}
            alt={area.name}
            className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105 group-hover:brightness-110"
          />
        </div>
        <h3 className="mt-3 mb-4 text-center font-semibold text-gray-700 text-base tracking-wide">
          {area.name.toUpperCase()}
        </h3>
      </Link>
    ))}
  </div>

  {/* Desktop / tablet grid */}
  <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
    {therapeuticAreas.map((area, index) => (
      <Link
        key={index}
        to={area.link}
        className="group block rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl bg-white w-full"
      >
        <div className="relative w-full h-60">
          <img
            src={area.image}
            alt={area.name}
            className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105 group-hover:brightness-110"
          />
        </div>
        <h3 className="mt-4 mb-4 text-center font-semibold text-gray-700 text-lg tracking-wide">
          {area.name.toUpperCase()}
        </h3>
      </Link>
    ))}
  </div>
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
