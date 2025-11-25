import React, { useState } from "react";

// EXAMPLE DATA (add your entire medicines dataset below)
const MEDICINE_CATEGORIES = [
  {
    title: "ONCOLOGY",
    color: "text-pink-800",
    medicines: [
      { name: "Lunsumio (Mosunetuzumab-axgb)", link: "#" },
      { name: "Krazati (adagrasib)", link: "#" },
      { name: "Rolvedon (Eflapegrastim-xnst)", link: "#" },
      // ...add more oncology drugs
    ]
  },
  {
    title: "HEMATOLOGY",
    color: "text-red-800",
    medicines: [
      { name: "Rezlidhia (Olutasidenib)", link: "#" },
      { name: "Jaypirca (pirtobrutinib)", link: "#" },
      { name: "Jesduvroq (Daprodustat)", link: "#" },
      // ...more
    ]
  },
  {
    title: "NEUROLOGY",
    color: "text-indigo-900",
    medicines: [
      { name: "Radicut (Edaravone)", link: "#" },
      { name: "Rilutek (Riluzole)", link: "#" },
      // ...more
    ]
  },
  {
    title: "NEPHAROLOGY",
    color: "text-green-800",
    medicines: [
      { name: "Korsuva (Difelikefalin)", link: "#" },
      { name: "Kerendia (Finerenone)", link: "#" },
      // ...more
    ]
  },
  {
    title: "RARE DISEASES",
    color: "text-teal-900",
    medicines: [
      { name: "Uplizna (Inebilizumab-cdon)", link: "#" },
      { name: "Strensiq (Asfotase alfa)", link: "#" },
      // ...more
    ]
  },
  {
    title: "MISC",
    color: "text-yellow-800",
    medicines: [
      { name: "Daybue (Trofinetide)", link: "#" },
      { name: "Sotyktu (Deucravacitinib)", link: "#" },
      // ...more
    ]
  }
];

function highlight(text, term) {
  if (!term) return text;
  const regex = new RegExp(`(${term})`, "gi");
  return text.split(regex).map((part, i) =>
    part.toLowerCase() === term.toLowerCase()
      ? <span key={i} className="bg-yellow-200 rounded">{part}</span>
      : part
  );
}

export default function MedicinesDirectory() {
  const [search, setSearch] = useState("");

  const filteredCategories = MEDICINE_CATEGORIES.map(cat => ({
    ...cat,
    medicines: cat.medicines.filter(
      med =>
        med.name.toLowerCase().includes(search.toLowerCase()) ||
        cat.title.toLowerCase().includes(search.toLowerCase())
    )
  })).filter(cat => cat.medicines.length > 0);

  const noResults = filteredCategories.length === 0;

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-white py-14 shadow">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-2">Global Medicines Directory</h1>
          <p className="text-lg md:text-xl mt-4 max-w-3xl mx-auto text-gray-600">
            An illustrative guide to internationally approved medicines that we can help you source and import into India through legal, compliant channels.
          </p>
        </div>
      </section>

      {/* Search and Disclaimer Section */}
      <section className="bg-blue-50 py-10 sticky top-0 z-40 shadow-sm">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <input
              type="text"
              className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
              placeholder="Search for a medicine by name or category..."
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>
          <div className="text-xs text-gray-400 mt-3 ml-2">Note: Only legal and permitted imports to India.</div>
        </div>
      </section>

      {/* Medicines List Section */}
      <section className="py-16 md:py-24">
        <div id="medicine-directory" className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {noResults ? (
            <div className="col-span-full text-center text-xl text-gray-400 py-24">
              No medicines found for your search.
            </div>
          ) : (
            filteredCategories.map((category, idx) => (
              <div className="medicine-card bg-white p-6 rounded-xl shadow space-y-4" key={category.title}>
                <h3 className={`uppercase font-bold text-2xl mb-3 ${category.color}`}>{category.title}</h3>
                <ul className="text-gray-700 space-y-2 text-[1.15rem]">
                  {category.medicines.map((med, i) => (
                    <li key={i}>
                      <a
                        className="dropdownlink hover:text-blue-700 transition font-semibold medicine-item"
                        href={med.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {highlight(med.name, search)}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))
          )}
        </div>
      </section>
    </main>
  );
}
