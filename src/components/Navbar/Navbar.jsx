import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const megaMenu = [
  {
    title: "ONCOLOGY",
    color: "blue",
    items: [
      { name: "Lunsumio (Mosunetuzumab-axgb)", id: "lunsumio" },
      { name: "Krazati (adagrasib)", id: "Krazati" },
      { name: "Rolvedon (Eflapegrastim-xnst)", id: "Rolvedon" },
      { name: "Orserdu (Elacestrant)", id: "Orserdu" },
      { name: "Ocaliva (Obeticholic Acid)", id: "Ocaliva" },
      { name: "Portrazza (Necitumumab)", id: "Portrazaa" },
      { name: "Cytalux (Pofalacanine)", id: "Cytalux" },
      { name: "Pylarify (Piflufolastat F18)", id: "pylarify" },
      { name: "Truseltiq (Infigratinib)", id: "Truseltiq" },
      { name: "Enhertu (Trastuzumab)", id: "Enhertu" },
      { name: "Mektovi (Binimetinib)", id: "Mektovi" },
      { name: "Braftovi (Encorafenib)", id: "Braftovi" },
      { name: "Libtayo (Cemiplimab)", id: "Libtayo" },
      { name: "Lorbrena (Lorlatinib)", id: "Lorbrena" },
      { name: "Talzenna (Talazoparib)", id: "Talzenna" },
      { name: "Balversa (Erdafitinib)", id: "Balversa" },
      { name: "Piqray (Alpelisib)", id: "Piqray" },
      { name: "Alunbrig (Brigatinib)", id: "Alunbrig" },
      { name: "Jemperli (Dostarlimab-gxly)", id: "Jemperli" },
      { name: "Tepmetko (Tepotinib)", id: "Tepmetko" },
      { name: "COSELA (Trilaciclib)", id: "COSELA" },
      { name: "Fotivda (Tivozanib)", id: "Fotivda" },
      { name: "Rozlytrek (Entrectinib)", id: "Rozlytrek" },
      { name: "Tivdak® (tisotumab vedotin-tftv)", id: "Tivdak" },
      { name: "Ayvakit (Avapritinib)", id: "Ayvakit" },
      { name: "Tazverik (Tazemetostat)", id: "Tazverik" },
      { name: "Tukysa (Tucatinib)", id: "Tukysa" },
      { name: "Pemazyre (Pemigatinib)", id: "Pemazyre" },
      { name: "Trodelvy (Sacituzumab govitecan-hziy)", id: "Trodelvy" },
      { name: "Tabrecta (Capmatinib)", id: "Tabrecta" },
      { name: "Retevmo (Selpercatinib)", id: "Retevmo" },
      { name: "Zepzelca (Lurbinectedin)", id: "Zepzelca" },
      { name: "Margenza (margetuximab-cmkb)", id: "Margenza" },
      { name: "Orgovyx (relugolix)", id: "Orgovyx" },
      { name: "DANYELZA (naxitamab-gqgk)", id: "DANYELZA" },
      { name: "Zejula (Niraparib)", id: "Zejula" },
      { name: "Verzenio (Abemaciclib)", id: "Verzenio" },
      { name: "Tecentriq (Atezolizumab)", id: "Tecentriq" },
      { name: "Nerlynx (Neratinib)", id: "Nerlynx" },
      { name: "Yervoy", id: "Yervoy" },
    ],
  },
  {
    title: "HEMATOLOGY",
    color: "emerald",
    items: [
      { name: "Jaypirca (pirtobrutinib)", id: "Jaypirca" },
      { name: "Jesduvroq (Daprodustat)", id: "Jesduvroq" },
      { name: "Columvi (Glofitamab-gxbm)", id: "Columvi" },
      { name: "Feraccru (Ferric Maltol)", id: "Feraccru" },
      { name: "Evrysdi (Risdiplam)", id: "Evrysdi" },
      { name: "Andexxa (Ondexxya)", id: "Andexxa" },
      { name: "Loqtorzi (toripalimab-tpzi)", id: "Loqtorzi" },
      { name: "Evrenzo (Roxadustat)", id: "Evrenzo" },
      { name: "Ninlaro (Ixazomib)", id: "Ninlaro" },
      { name: "Cablivi (Caplacizumab-yhdp)", id: "Cablivi" },
      { name: "Rezurock (Belumosudil)", id: "Rezurock" },
      { name: "Empaveli (Pegcetacoplan)", id: "Empaveli" },
      { name: "Idhifa (Enasidenib)", id: "Idhifa" },
      { name: "Besponsa (Inotuzumab Ozogamicin)", id: "Besponsa" },
      { name: "Tibsovo (Ivosidenib)", id: "Tibsovo" },
      { name: "Poteligeo (Mogamulizumab-kpkc)", id: "Poteligeo" },
      { name: "Xospata (Gilteritinib)", id: "Xospata" },
      { name: "Asparlas (Calaspargase pegol-mknl)", id: "Asparlas" },
      { name: "Polivy (Polatuzumab Vedotin-piiqa)", id: "Polivy" },
      { name: "Reblozyl (Luspatercept-aamt)", id: "Reblozyl" },
      { name: "Ukoniq (Umbralisib)", id: "Ukoniq" },
      { name: "Pepaxto (Melphalan)", id: "Pepaxto" },
      { name: "Zynlonta (Loncastuximab Tesirine-Ipyl)", id: "Zynlonta" },
      { name: "Rylaze", id: "Rylaze" },
      { name: "Exkivity (Mobocertinib)", id: "Exkivity" },
      { name: "Besremi (Ropeginterferon alfa-2b-njft)", id: "Besremi" },
      { name: "SARCLISA (isatuximab-irfc)", id: "SARCLISA" },
      { name: "Inqovi (decitabine and cedazuridine)", id: "Inqovi" },
      { name: "Blenrep (Belantamab Mafodotin-blmf)", id: "Blenrep" },
      { name: "Monjuvi (Tafasitamab-cxix)", id: "Monjuvi" },
      { name: "TAFINLAR (Dabrafenib)", id: "TAFINLAR" },
      { name: "CALQUENCE (Acalabrutinib)", id: "CALQUENCE" },
      { name: "MYLOTARG (Gemtuzumab)", id: "MYLOTARG" },
      { name: "Aliqopa (Copanlisib)", id: "Aliqopa" },
      { name: "Brentuximab Vedotin", id: "Brentuximab" },
      { name: "AGRYLIN (Anagrelide Hydrochloride)", id: "AGRYLIN" },
      { name: "ATRIANCE (Nelarabine)", id: "ATRIANCE" },
      { name: "BLINCYTO (Blinatumomab)", id: "BLINCYTO" },
      { name: "ONCASPAR (Pegaspargase)", id: "ONCASPAR" },
      { name: "ERWINAZE (Asparaginase Erwinia Chrysanthemi)", id: "ERWINAZE" },
      { name: "FOLOTYN (Pralatrexate)", id: "FOLOTYN" },
      { name: "TREOSULFAN (Treosulfan)", id: "TREOSULFAN" },
      { name: "Ponatinib", id: "Ponatinib" },
      { name: "NPLATE (Romiplostim)", id: "NPLATE" },
      { name: "KYPROLIS (Carfilzomib)", id: "KYPROLIS" },
      { name: "MABCAMPATH (Alemtuzumab)", id: "MABCAMPATH" },
      { name: "VENCLEXTA (Venetoclax)", id: "VENCLEXTA" },
      { name: "SOLIRIS (eculizumab)", id: "SOLIRIS" },
      { name: "SYNRIBO (Omacetaxine Mepesuccinate)", id: "SYNRIBO" },
      { name: "ALKERAN (Melphalan)", id: "ALKERAN" },
      { name: "FARYDAK (Panobinostat)", id: "FARYDAK" },
      { name: "BOSULIF (Bosutinib)", id: "BOSULIF" },
      {
        name: "ELDISINE (Vindesine Sulphate)",
        id: "ELDISINE (Vindesine Sulphate)",
      },
      { name: "Ixazomib Citrate", id: "Ixazomib" },
      { name: "TEPADINA (Thiotepa)", id: "TEPADINA" },
      { name: "ZOLINZA (Vorinostat)", id: "ZOLINZA" },
    ],
  },
  {
    title: "NEUROLOGY",
    color: "purple",
    items: [
      { name: "Rilutek (Riluzole)", id: "Rilutek" },
      { name: "Ajovy (Fremanezumab-vfrm)", id: "Ajovy" },
      { name: "Emgality (Galcanezumab)", id: "Emgality" },
      {
        name: "Azstarys (Serdexmethylphenidate and Dexmethylphenidate)",
        id: "Azstarys",
      },
      { name: "Qelbree (Viloxazine)", id: "Qelbree" },
      { name: "Lybalvi (Olanzapine and Samidorphan)", id: "Lybalvi" },
      { name: "Aduhelm (aducanumab-avwa)", id: "Aduhelm" },
      { name: "NUEDEXTA (Dextromethorphan Hydrobromide)", id: "NUEDEXTA" },
      { name: "ILARIS (Canakinumab)", id: "ILARIS" },
      { name: "GLIOLAN (Aminolevulinic acid hydrochloride)", id: "GLIOLAN" },
      { name: "STELARA (Ustekinumab)", id: "STELARA" },
      { name: "HUMIRA (Adlimumab)", id: "HUMIRA" },
    ],
  },
  {
    title: "RARE DISEASES",
    color: "amber",
    items: [
      { name: "Strensiq (Asfotase alfa)", id: "Strensiq" },
      { name: "Tavneos (Avacopan)", id: "Tavneos" },
      { name: "Skytrofa (Lonapegsomatropin-tcgd)", id: "Skytrofa" },
      { name: "Nexviazyme (Avalglucosidase alfa-ngp)", id: "Nexviazyme" },
      { name: "Evkeeza (Evinacumab-dgnb)", id: "Evkeeza" },
      { name: "Nulibry (Fosdenopterin)", id: "Nulibry" },
      { name: "Welireg (Belzutifan)", id: "Welireg" },
      { name: "Qlex (Collagenase Clostridium Histolyticum)", id: "Qlex" },
      { name: "Mepsevii (Vestronidase alfa-vjbk)", id: "Mepsevii" },
      { name: "Symdeko (Tezacaftor/Ivacaftor & Ivacaftor)", id: "Symdeko" },
      { name: "Palynziq (Pegvaliase-pqpz)", id: "Palynziq" },
      { name: "Onpattro (Patisiran)", id: "Onpattro" },
      { name: "Galafold (Migalastat)", id: "Galafold" },
      { name: "Diacomit (Stiripentol)", id: "Diacomit" },
      { name: "Takhzyro (Lanadelumab)", id: "Takhzyro" },
      { name: "Orfadin (Nitisinone)", id: "Orfadin" },
      {
        name: "Trikafta (elexacaftor, tezacaftor and ivacaftor)",
        id: "Trikafta",
      },
      { name: "Spinraza (Nusinersen)", id: "Spinraza" },
      { name: "Amondys 45 (Casimersen)", id: "Amondys" },
      { name: "Tepezza (Teprotumumab-trbw)", id: "Tepezza" },
      { name: "Isturisa (Osilodrostat)", id: "Isturisa" },
      { name: "Koselugo (Selumetinib)", id: "Koselugo" },
      { name: "VILTEPSO (Viltolarsen)", id: "VILTEPSO" },
      { name: "XERMELO (Telotristat)", id: "XERMELO" },
      { name: "BRINUERA (Cerliponase alfa)", id: "BRINUERA" },
      { name: "MEPSEVII (Vestronidase)", id: "MEPSEVII" },
      { name: "PARSABIV (Etelcalcetide)", id: "PARSABIV" },
      { name: "RHOPRESSA (Netarsudil)", id: "RHOPRESSA" },
    ],
  },
];

const colorClasses = {
  blue: {
    bg: "bg-blue-50",
    border: "border-l-4 border-blue-500",
    title: "text-blue-800",
  },
  emerald: {
    bg: "bg-emerald-50",
    border: "border-l-4 border-emerald-500",
    title: "text-emerald-800",
  },
  purple: {
    bg: "bg-slate-50",
    border: "border-l-4 border-slate-600",
    title: "text-slate-800",
  },
  amber: {
    bg: "bg-amber-50",
    border: "border-l-4 border-amber-500",
    title: "text-amber-800",
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
            Rarepharmasupply
          </span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-6 lg:gap-8 text-sm lg:text-base font-semibold">
          <li>
            <a
              href="/"
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
                  mega ? "rotate-180" : ""
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
                            {item.id ? (
                              <Link
                                to={`/product/${item.id}`}
                                className="text-gray-700 hover:text-blue-700 hover:pl-1 transition-all text-xs md:text-sm font-medium block"
                                onClick={() => setMega(false)}
                              >
                                {item.name}
                              </Link>
                            ) : (
                              <span className="text-gray-400 text-xs md:text-sm font-medium block">
                                {item.name}
                              </span>
                            )}
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
        <>
          {/* Dark overlay */}
          <div
            className="fixed inset-0 bg-black/40 z-40 md:hidden"
            onClick={() => setOpen(false)}
          />

          {/* Right slide drawer */}
          <div
            className={`
        fixed top-0 right-0 h-full w-[260px]
        bg-black text-white z-50
        transform translate-x-0
        transition-transform duration-300 ease-in-out
        md:hidden flex flex-col
      `}
            id="main-mobile-menu"
          >
            {/* Header + close */}
            <div className="flex justify-between items-center px-6 py-4 border-b border-gray-700 ">
              <span className="text-lg font-semibold text-red-600">Menu</span>
              <button onClick={() => setOpen(false)}>
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Scrollable links */}
            <div className="flex-1 overflow-y-auto flex flex-col scrollbar-hide">
              <a
                href="/"
                className="px-6 py-3 font-semibold border-b border-gray-800 hover:bg-gray-900 transition"
                onClick={() => setOpen(false)}
              >
                HOME
              </a>
              <Link
                to="/Aboutuss"
                className="px-6 py-3 font-semibold border-b border-gray-800 hover:bg-gray-900 transition"
                onClick={() => setOpen(false)}
              >
                ABOUT US
              </Link>
              {/* Mega menu collapse */}
              <div className="border-b border-gray-100">
               {" "}
                <button
                  onClick={() =>
                    setExpandedCategory(
                      expandedCategory === "products" ? null : "products"
                    )
                  }
                  className="w-full px-6 py-3 font-semibold text-whit-800 flex items-center justify-between hover:bg-gray-50 transition cursor-pointer text-red-600"
                >
                  PRODUCT LIST {" "}
                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-300 ${
                      expandedCategory === "products" ? "rotate-180" : ""
                    }`}
                  />
                 {" "}
                </button>
               {" "}
                {expandedCategory === "products" && (
                  <div className="bg-gray-50 px-6 py-4 space-y-4 border-t border-gray-100">
                   {" "}
                    {megaMenu.map((cat) => {
                      const colors = colorClasses[cat.color];
                      return (
                        <div
                          key={cat.title}
                          className={`${colors.bg} ${colors.border} p-3 rounded-lg`}
                        >
                         {" "}
                          <h4
                            className={`font-bold ${colors.title} text-sm uppercase tracking-wide mb-3`}
                          >
                            {cat.title} {" "}
                          </h4>
                         {" "}
                          <ul className="space-y-2">
                           {" "}
                            {cat.items.map((item, idx) => (
                              <li key={idx}>
                               {" "}
                                {item.id ? (
                                  <Link
                                    to={`/product/${item.id}`}
                                    className="text-gray-700 hover:text-blue-700 text-xs font-medium block"
                                    onClick={() => {
                                      setExpandedCategory(null);
                                      setOpen(false);
                                    }}
                                  >
                                    {item.name}
                                  </Link>
                                ) : (
                                  <span className="text-gray-400 text-xs font-medium block">
                                    {item.name}
                                  </span>
                                )}
                               {" "}
                              </li>
                            ))}
                           {" "}
                          </ul>
                        </div>
                      );
                    })}
                   {" "}
                  </div>
                )}
               {" "}
              </div>
              <Link
                to="/Blog"
                className="px-6 py-3 font-semibold border-b border-gray-800 hover:bg-gray-900 transition"
                onClick={() => setOpen(false)}
              >
                BLOG
              </Link>
              <Link
                to="/Faqsupport"
                className="px-6 py-3 font-semibold border-b border-gray-800 hover:bg-gray-900 transition"
                onClick={() => setOpen(false)}
              >
                FAQ & SUPPORT
              </Link>
              <Link
                to="/Rarecontact"
                className="px-6 py-3 font-semibold hover:bg-gray-900 transition"
                onClick={() => setOpen(false)}
              >
                CONTACT US
              </Link>

              {/* Social + Company footer inside ContactSection */}
<div className="mt-16 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
  <p className="text-center md:text-left">
    © {new Date().getFullYear()} <span className="font-semibold text-gray-700">Rarepharmasupply</span>. All rights reserved.
  </p>

  <div className="flex items-center gap-4">
    {/* Instagram */}
    <a
      href="https://instagram.com/yourhandle"
      target="_blank"
      rel="noreferrer"
      className="w-9 h-9 rounded-full flex items-center justify-center bg-gray-100 text-gray-700 hover:bg-pink-500 hover:text-white transition"
      aria-label="Instagram"
    >
      <i className="ri-instagram-line text-lg" />
    </a>

    {/* Facebook */}
    <a
      href="https://facebook.com/yourpage"
      target="_blank"
      rel="noreferrer"
      className="w-9 h-9 rounded-full flex items-center justify-center bg-gray-100 text-gray-700 hover:bg-blue-600 hover:text-white transition"
      aria-label="Facebook"
    >
      <i className="ri-facebook-circle-fill text-lg" />
    </a>

    {/* Twitter / X */}
    <a
      href="https://x.com/yourhandle"
      target="_blank"
      rel="noreferrer"
      className="w-9 h-9 rounded-full flex items-center justify-center bg-gray-100 text-gray-700 hover:bg-black hover:text-white transition"
      aria-label="Twitter"
    >
      <i className="ri-twitter-x-line text-lg" />
    </a>
  </div>
</div>


             
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
