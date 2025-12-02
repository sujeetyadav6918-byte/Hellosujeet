

import React from "react";
import { Link } from "react-router-dom";

const drugs = [
  {
    name: "Atriance (Nelarabine) Injection",
    image: "website.imge/atriance-nelarabine-300x300.webp",
    id: "lunsumio",
  },
  {
    name: "Venclexta (Venetoclax) Tablets",
    image: "website.imge/venclexta-venetoclax-tablets-300x300.jpeg",
    link: "service-hematology.html",
  },
  {
    name: "Ojjaara (Momelotinib) Tablets",
    image: "website.imge/OJJAARA-300x300.jpg",
    link: "service-neurology.html",
  },
  {
    name: "Zegfrovy (Sunvozertinib)",
    image: "website.imge/sunvozertinib-01-1000x1000.jpg.webp",
    link: "service-neurology.html",
  },
  {
    name: "Sephience (Sepiapterin)",
    image: "website.imge/Sephience8.webp",
    link: "service-oncology.html",
  },
  {
    name: "Mulpleta (Lusutrombopag)",
    image: "website.imge/Mulpleta-Lusutrombopag-3-MG-Tablets.webp",
    link: "service-hematology.html",
  },
  {
    name: "Lunsumio (Mosunetuzumab-axgb)",
    image: "website.imge/Lunsumio-Mosunetuzumab-axgb-250-rc8hcaxqskkikzy0niv38t82mgzzhrm5znh0r2kz0k.webp",
    link: "service-oncology.html",
  },
  {
    name: "Krazati (Adagrasib)",
    image: "website.imge/Krazati-adagrasib-250-rc8hcaxqskkikzy0niv38t82mgzzhrm5znh0r2kz0k.webp",
    link: "service-hematology.html",
  },
  // ...rest of your drugs
];

export default function ImportantDrugs() {
  return (
    <section className="container mx-auto px-4 py-16">
      {/* Heading */}
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-black-700">
          Important Drugs
        </h2>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
          We can source a vast range of specialty medicines. Here are the key areas we focus on.
        </p>
      </div>

      {/* Drug Grid */}
      {/* grid-cols-2 for small screens, grid-cols-4 at md (desktop) */}
      <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
  {drugs.map((drug, index) => (
    <Link
      key={index}
      to={drug.id ? `/product/${drug.id}` : "#"}
      className="group block bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 hover:border-blue-400 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
      tabIndex="0"
    >
      <div className="w-full aspect-[4/3] bg-gray-50 flex items-center justify-center overflow-hidden">
        <img
          src={drug.image}
          alt={drug.name}
          className="h-full w-full object-contain transition duration-300 group-hover:scale-105 group-hover:brightness-110"
          loading="lazy"
        />
      </div>
      <div className="p-4">
        <h3 className="text-700 font-semibold text-base md:text-lg leading-snug text-center">
          {drug.name}
        </h3>
      </div>
    </Link>
  ))}
</div>

 
    </section>
  );
}
