import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const megaMenu = [
  {
    title: 'ONCOLOGY',
    color: 'blue',
    items: [
      { name: 'Lunsumio (Mosunetuzumab-axgb)', link: '#' },
      { name: 'Krazati (adagrasib)', link: '#' },
      { name: 'Rolvedon (Eflapegrastim-xnst)', link: '#' },
      { name: 'Orserdu (Elacestrant)', link: '#' },
      { name: 'Ocaliva (Obeticholic Acid)', link: '#' },
      { name: 'Portrazza (Necitumumab)', link: '#' },
      { name: 'Cytalux (Pofalacanine)', link: '#' },
      { name: 'Pylarify (Piflufolastat F18)', link: '#' },
    ],
  },
  {
    title: 'HEMATOLOGY',
    color: 'emerald',
    items: [
      { name: 'Rezlidhia (Olutasidenib)', link: '#' },
      { name: 'Jaypirca (pirtobrutinib)', link: '#' },
      { name: 'Jesduvroq (Daprodustat)', link: '#' },
      { name: 'Columvi (Glofitamab-gxbm)', link: '#' },
    ],
  },
  {
    title: 'NEUROLOGY',
    color: 'purple',
    items: [
      { name: 'Radicut (Edaravone)', link: '#' },
      { name: 'Rilutek (Riluzole)', link: '#' },
      { name: 'Ajovy (Fremanezumab-vfrm)', link: '#' },
      { name: 'Emgality (Galcanezumab)', link: '#' },
    ],
  },
  {
    title: 'NEPHROLOGY',
    color: 'amber',
    items: [
      { name: 'Korsuva (Difelikefalin)', link: '#' },
      { name: 'Kerendia (Finerenone)', link: '#' },
      { name: 'Ultomiris (Ravulizumab)', link: '#' },
    ],
  },
];

const colorClasses = {
  blue: {
    bg: 'bg-blue-50',
    border: 'border-l-4 border-blue-500',
    title: 'text-blue-800',
  },
  emerald: {
    bg: 'bg-emerald-50',
    border: 'border-l-4 border-emerald-500',
    title: 'text-emerald-800',
  },
  purple: {
    bg: 'bg-slate-50',
    border: 'border-l-4 border-slate-600',
    title: 'text-slate-800',
  },
  amber: {
    bg: 'bg-amber-50',
    border: 'border-l-4 border-amber-500',
    title: 'text-amber-800',
  },
};

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [mega, setMega] = useState(false);
  const [expandedCategory, setExpandedCategory] = useState(null);

  return (
    <div className="relative w-full bg-white border-b border-gray-100 shadow-sm z-30">
      {/* Announcement bar */}
      <div className="bg-black text-xs md:text-base text-white text-center py-2 px-4 font-medium">
        RAREPHARMASUPPLY = 9768640067
      </div>

      <nav className="max-w-[1250px] mx-auto flex items-center justify-between px-4 md:px-8 py-3">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 flex-shrink-0">
          <svg className="w-9 h-9 md:w-10 md:h-10" viewBox="0 0 100 100">
            <path d="M50 95 C 20 75, 20 35, 50 55" fill="#003366" />
            <path d="M50 95 C 80 75, 80 35, 50 55" fill="#003366" />
            <path
              d="M50 95 C 30 85, 35 55, 50 70"
              fill="#003366"
              opacity=".7"
            />
            <path
              d="M50 95 C 70 85, 65 55, 50 70"
              fill="#003366"
              opacity=".7"
            />
            <path
              d="M50 70 C 40 50, 40 20, 50 10 C 60 20, 60 50, 50 70 Z"
              fill="#E8795F"
            />
          </svg>
          <span className="text-lg md:text-xl font-bold text-blue-900">
            Rare Pharma Supply
          </span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-6 lg:gap-8 text-sm lg:text-base font-semibold">
          <li>
            <a
              href="/Home"
              className="text-gray-800 hover:text-blue-600 transition"
            >
              HOME
            </a>
          </li>
          <li>
            <Link
              to="/Aboutuss"
              className="text-gray-800 hover:text-blue-600 transition cursor-pointer"
            >
              ABOUT US
            </Link>
          </li>
          <li
            className="relative"
            onMouseEnter={() => setMega(true)}
            onMouseLeave={() => setMega(false)}
          >
            <button className="flex items-center gap-1.5 text-gray-800 hover:text-blue-700 transition focus:outline-none cursor-pointer">
              PRODUCT LIST
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-300 ${
                  mega ? 'rotate-180' : ''
                }`}
              />
            </button>
            {mega && (
              <div className="absolute left-1/2 top-full -translate-x-1/2 bg-white shadow-2xl rounded-xl p-6 md:p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-screen md:w-[95vw] max-w-5xl text-sm z-50 mt-1">
                {megaMenu.map((col) => {
                  const colors = colorClasses[col.color];
                  return (
                    <div
                      key={col.title}
                      className={`${colors.bg} ${colors.border} p-4 rounded-lg transition-all hover:shadow-lg`}
                    >
                      <h3
                        className={`mb-4 font-bold ${colors.title} text-base lg:text-lg uppercase tracking-wide`}
                      >
                        {col.title}
                      </h3>
                      <ul className="space-y-2.5">
                        {col.items.map((item, idx) => (
                          <li key={idx}>
                            <a
                              href={item.link}
                              className="text-gray-700 hover:text-blue-700 hover:pl-1 transition-all text-xs md:text-sm font-medium block"
                            >
                              {item.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            )}
          </li>
          <li>
            <Link
              to="/Blog"
              className="text-gray-800 hover:text-blue-600 transition"
            >
              BLOG
            </Link>
          </li>
          <li>
            <Link
              to="/Faqsupport"
              className="text-gray-800 hover:text-blue-600 transition"
            >
              FAQ & SUPPORT
            </Link>
          </li>
          <li>
            <Link
              to="/Rarecontact"
              className="text-gray-800 hover:text-blue-600 transition"
            >
              CONTACT US
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden cursor-pointer text-gray-800"
          onClick={() => setOpen((o) => !o)}
        >
          {!open ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Drawer */}
      {open && (
        <div className="md:hidden absolute left-0 top-full w-full bg-white border-t border-gray-100 flex flex-col gap-0 shadow-xl z-40 max-h-[80vh] overflow-y-auto">
          <a
            href="#"
            className="px-6 py-3 font-semibold text-gray-800 border-b border-gray-100 hover:bg-gray-50 transition"
          >
            HOME
          </a>
          <a
            href="/Aboutuss"
            className="px-6 py-3 font-semibold text-gray-800 border-b border-gray-100 hover:bg-gray-50 transition "
          >
            ABOUT US
          </a>
          {/* Mega menu collapse */}
          <div className="border-b border-gray-100">
            <button
              onClick={() =>
                setExpandedCategory(
                  expandedCategory === 'products' ? null : 'products'
                )
              }
              className="w-full px-6 py-3 font-semibold text-gray-800 flex items-center justify-between hover:bg-gray-50 transition"
            >
              PRODUCT LIST
              <ChevronDown
                className={`w-5 h-5 transition-transform duration-300 ${
                  expandedCategory === 'products' ? 'rotate-180' : ''
                }`}
              />
            </button>
            {expandedCategory === 'products' && (
              <div className="bg-gray-50 px-6 py-4 space-y-4 border-t border-gray-100">
                {megaMenu.map((cat) => {
                  const colors = colorClasses[cat.color];
                  return (
                    <div
                      key={cat.title}
                      className={`${colors.bg} ${colors.border} p-3 rounded-lg`}
                    >
                      <h4
                        className={`font-bold ${colors.title} text-sm uppercase tracking-wide mb-3`}
                      >
                        {cat.title}
                      </h4>
                      <ul className="space-y-2">
                        {cat.items.map((item, idx) => (
                          <li key={idx}>
                            <a
                              href={item.link}
                              className="text-gray-700 hover:text-blue-700 text-xs font-medium block"
                            >
                              {item.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
          <a
            href="/Blog"
            className="px-6 py-3 font-semibold text-gray-800 border-b border-gray-100 hover:bg-gray-50 transition"
          >
            BLOG
          </a>
          <a
            href="/Faqsupport"
            className="px-6 py-3 font-semibold text-gray-800 border-b border-gray-100 hover:bg-gray-50 transition"
          >
            FAQ & SUPPORT
          </a>
          <a
            href="/Rarecontact"
            className="px-6 py-3 font-semibold text-gray-800 hover:bg-gray-50 transition"
          >
            CONTACT US
          </a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
