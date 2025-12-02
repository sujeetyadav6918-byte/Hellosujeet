import React, { useState } from "react";
import { Link } from "react-router-dom";

// EXAMPLE DATA (add your entire medicines dataset below)
const MEDICINE_CATEGORIES = [
  {
    title: "ONCOLOGY",
    color: "text-pink-800",
    medicines: [
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
      { name: "Rozlytrek (Entrectinib)", id:"Rozlytrek" },
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
    
      // ...add more oncology drugs
    ],
  },
  {
    title: "HEMATOLOGY",
    color: "text-red-800",
    medicines: [
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
      { name: "ELDISINE (Vindesine Sulphate)", id: "ELDISINE (Vindesine Sulphate)" },
      { name: "Ixazomib Citrate", id: "Ixazomib" },
      { name: "TEPADINA (Thiotepa)", id: "TEPADINA" },
      { name: "ZOLINZA (Vorinostat)", id: "ZOLINZA" },
    
     
    ],
  },
   
  {
    title: "MISC",
    color: "text-yellow-800",
    medicines: [
      { name: "Daybue (Trofinetide)", id: "daybue" },
  { name: "Sotyktu (Deucravacitinib)", id: "sotyktu" },
  { name: "Orilissa (Elagolix)", id: "orilissa" },
  { name: "Vitrakvi (Larotrectinib)", id: "vitrakvi" },
  { name: "Imjudo (Tremelimumab)", id: "imjudo" },
  { name: "Leqvio (Inclisiran)", id: "leqvio" },
  { name: "Livmarli (Maralixibat)", id: "livmarli" },
  { name: "Saphnelo (Anifrolumab-fnia)", id: "saphnelo" },
  { name: "Nextstellis (Drospirenone and Estetrol)", id: "nextstellis" },
  { name: "Brexafemme (Ibrexafungerp)", id: "brexafemme" },
  { name: "Qulipta (Atogepant)", id: "qulipta" },
  { name: "Zemdri (Plazomicin)", id: "zemdri" },
  { name: "Epidiolex (Cannabidiol)", id: "epidiolex" },
  { name: "Zavicefta (Avibactam + Ceftazidime)", id: "zavicefta" },
  { name: "Baxdela (Delafloxacin)", id: "baxdela" },
  { name: "Bevyxxa (Betrixaban)", id: "bevyxxa" },
  { name: "Fasenra (Benralizumab)", id: "fasenra" },
  { name: "Firazyr (Icatibant)", id: "firazyr" },
  { name: "Kevzara (Sarilumab)", id: "kevzara" },
  { name: "Trulance (Plecanatide)", id: "trulance" },
  { name: "Vivitrol (Naltrexone)", id: "vivitrol" },
  { name: "Xadago (Safinamide)", id: "xadago" },
  { name: "Foscavir (Foscarnet sodium injection)", id: "foscavir" },
  { name: "Anakinra (Kineret)", id: "anakinra" },
  { name: "Padcev (Enfortumab Vedotin-ejfv)", id: "padcev" },
  { name: "Lonsurf (Trifluridine/Tipiracil)", id: "lonsurf" },
  { name: "Dantrium IV (Dantrolene Sodium)", id: "dantrium-iv" },
  { name: "Ngenla (Somatrogon-ghla)", id: "ngenla" },
  { name: "Vanflyta (Quizartinib)", id: "vanflyta" },
  { name: "Beyfortus (Nirsevimab)", id: "beyfortus" },
      
      // ...more
    ],
  },
  {
    title: "RARE DISEASES",
    color: "text-teal-900",
    medicines: [
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
      { name: "Trikafta (elexacaftor, tezacaftor and ivacaftor)", id: "Trikafta" },
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

  
  {
    title: "NEUROLOGY",
    color: "text-indigo-900",
    medicines: [
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
    title: "IMMUNOLOGY",
    color: "text-green-800",
    medicines: [
        { name: "Tezspire (Tezepelumab-ekko)", id: "tezspire" },
  { name: "Livmarli (Maralixibat)", id: "livmarli" },
  { name: "Zegalogue (Dasiglucagon)", id: "zegalogue" },
  { name: "Cabenuva (Cabotegravir/Rilpivirine)", id: "cabenuva" },
  { name: "Ocrevus (Ocrelizumab)", id: "ocrevus" },
  { name: "Skyrizi (Risankizumab-rzaa)", id: "skyrizi" },
  { name: "PONVORY (ponesimod)", id: "ponvory" },
  { name: "Zeposia (Ozanimod)", id: "zeposia" },
  { name: "SILIQ (Brodalumab)", id: "siliq" },
  { name: "TREMFYA (Guselkumab)", id: "tremfya" },

   

   
    ],
  },
  
      {
    title: "CARDIOLOGY",
    color: "text-green-800",
    medicines: [
       { name: "Verquvo (Vericiguat)", id: "verquvo" },
  { name: "Vyndaqel (Tafamidis meglumine)", id: "vyndaqel" },
      
      // ...more
    ],
  },
   {
    title: "NEPHAROLOGY",
    color: "text-green-800",
    medicines: [
      
  { name: "Korsuva (Difelikefalin)", id: "korsuva" },
  { name: "Kerendia (Finerenone)", id: "kerendia" },
  { name: "Ultomiris (Ravulizumab)", id: "ultomiris" },


     
      // ...more
    ],
  },

];

function highlight(text, term) {
  if (!term) return text;
  const regex = new RegExp(`(${term})`, "gi");
  return text.split(regex).map((part, i) =>
    part.toLowerCase() === term.toLowerCase() ? (
      <span key={i} className="bg-yellow-200 rounded">
        {part}
      </span>
    ) : (
      part
    )
  );
}

export default function MedicinesDirectory() {
  const [search, setSearch] = useState("");

  const filteredCategories = MEDICINE_CATEGORIES.map((cat) => ({
    ...cat,
    medicines: cat.medicines.filter(
      (med) =>
        med.name.toLowerCase().includes(search.toLowerCase()) ||
        cat.title.toLowerCase().includes(search.toLowerCase())
    ),
  })).filter((cat) => cat.medicines.length > 0);

  const noResults = filteredCategories.length === 0;

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-white py-14 shadow">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-2">
            Global Medicines Directory
          </h1>
          <p className="text-lg md:text-xl mt-4 max-w-3xl mx-auto text-gray-600">
            An illustrative guide to internationally approved medicines that we
            can help you source and import into India through legal, compliant
            channels.
          </p>
        </div>
      </section>

      {/* Search and Disclaimer Section */}
      <section className="bg-blue-50 py-10 sticky top-0 z-40 shadow-sm">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <input
              type="text"
              className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
              placeholder="Search for a medicine by name or category..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="text-xs text-gray-400 mt-3 ml-2">
            Note: Only legal and permitted imports to India.
          </div>
        </div>
      </section>

      {/* Medicines List Section */}
      <section className="py-16 md:py-24">
        <div
          id="medicine-directory"
          className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {noResults ? (
            <div className="col-span-full text-center text-xl text-gray-400 py-24">
              No medicines found for your search.
            </div>
          ) : (
            filteredCategories.map((category, idx) => (
              <div
                className="medicine-card bg-white p-6 rounded-xl shadow space-y-4"
                key={category.title}
              >
                <h3
                  className={`uppercase font-bold text-2xl mb-3 ${category.color}`}
                >
                  {category.title}
                </h3>
                <ul className="text-gray-700 space-y-2 text-[1.15rem]">
                  {category.medicines.map((med, i) => (
                    <li key={i}>
                      {med.id ? (
                        <Link
                          to={`/product/${med.id}`}
                          className="dropdownlink hover:text-blue-700 transition font-semibold medicine-item"
                        >
                          {highlight(med.name, search)}
                        </Link>
                      ) : (
                        <span className="text-gray-600 font-semibold medicine-item">
                          {highlight(med.name, search)}
                        </span>
                      )}
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
