


import React, { useState } from "react";

// Products data
const PRODUCTS = [
    {
        title: "Rezlidhia (Olutasidenib))",
        information: " Capsules: 150 mg",
        image: "src/assets/Hematology/Rezlidhia-Olutasidenib-250-rc8hcaxqskkikzy0niv38t82mgzzhrm5znh0r2kz0k.webp",
        link:"#"
        
    
      },
      {
        title: "Jaypirca(pirtobrutinib)",
        information: "Tablets: 50 mg, 100 mg ",
        image: "src/assets/Hematology/Jaypircapirtobrutinib-250-rc8hcaxqskkikzy0niv38t82mgzzhrm5znh0r2kz0k.webp",
        link: "#"
      },
      {
        title: "Jesduvroq (Daprodustat)",
        information: "Tablets: 1 mg, 2 mg, 4 mg, 6 mg, and 8 mg",
        image: "src/assets/Hematology/Jesduvroq-Daprodustat-250-1-rc8hcaxqskkikzy0niv38t82mgzzhrm5znh0r2kz0k.webp",
        link: "#"
      },
      {
        title: "Columvi (Glofitamab-gxbm)",
        information: "Injection: 2.5 mg/2.5 mL (1 mg/mL) and 10 mg/10 mL (1 mg/mL) in a single-dose vial  ",
        image: "src/assets/Hematology/Columvi-250-rc8hcaxqskkikzy0niv38t82mgzzhrm5znh0r2kz0k.webp",
        link: "#"
      },
      {
        title: "Feraccru (Ferric Maltol)",
        information: " Strength: Capsules: 30 mg",
        image: "src/assets/Hematology/Feraccru-fresh-rc8hcaxqskkikzy0niv38t82mgzzhrm5znh0r2kz0k.webp ",
        link: "#"
      },
      {
        title: "Evrysdi (Risdiplam)",
        information: "Tablets: 5 mg & Oral Solution: 0.75 mg/mL",
        image: "src/assets/Hematology/Evrysdi-Risdiplam-rc8hc922ewhxxs0qyi1u3tp5fp992depbe61sinrd0.webp",

        link: "#"
      },
      {
        title: "AndexxaOndexxya",
        information: "Injection: 200 mg lyophilized powder in single-use vials ",
        image: "src/assets/Hematology/Andexxa-250-rc8hcaxqskkikzy0niv38t82mgzzhrm5znh0r2kz0k.webp ",
        link: "#"
      },
      {
        title: "Loqtorzi (toripalimab-tpzi)",
        information: "Injection: 240 mg/6 mL (40 mg/mL) solution in a single-dose vial ",
        image: "src/assets/Hematology/Loqtorzi-toripalimab-tpzi-rc8hcaxqskkikzy0niv38t82mgzzhrm5znh0r2kz0k.webp",
        link: "#"
      },
      {
        title: "Evrenzo (Roxadustat)",
        information: " Tablets: 20 mg, 50 mg, 70 mg, 100 mg, and 150 mg ",
        image: "src/assets/Hematology/Evrenzo-Tablets-rc8hcaxqskkikzy0niv38t82mgzzhrm5znh0r2kz0k.webp",
        link: "#"
      },
      {
        title: "Ninlaro (Ixazomib)",
        information: "Capsules: 4 mg, 3 mg, and 2.3 mg",
        image: "src/assets/Hematology/Ninlaro-rc8hcaxqskkikzy0niv38t82mgzzhrm5znh0r2kz0k.webp",
        link: "#"
      },
      {
        title: "Cablivi(Caplacizumab-yhdp)",
        information: "injection: 11 mg as a lyophilized powder in a single-dose vial.",
        image: "src/assets/Hematology/Cablivi-rc8hcaxqskkikzy0niv38t82mgzzhrm5znh0r2kz0k.webp ",
        link: "#"
      },
      {
        title: "Rezurock (Belumosudil)",
        information: "Tablet: 200 mg",
        image: "src/assets/Hematology/Rezurock-rc8hc9zwlqj89dzdt0ggobgm134ma2ifnitj9smd6s.webp",
        link: "#"
      },
      {
        title: "Empaveli (Pegcetacoplan)",
        information: " Injection: 1,080 mg/20 mL (54 mg/mL) in a single-dose vial",
        image: "src/assets/Hematology/Empaveli-rc8hcaxqskkikzy0niv38t82mgzzhrm5znh0r2kz0k.webp",
        link: "#"
      },
      {
        title: "Idhifa (Enasidenib)",
        information: "Tablets: 50 mg or 100 mg",
        image: "src/assets/Hematology/Idhifa-250-rc8hcaxqskkikzy0niv38t82mgzzhrm5znh0r2kz0k.webp",
        link: "#"
      },
      {
        title: "Besponsa (Inotuzumab Ozogamicin)",
        information: "Injection: 0.9 mg as a white to off-white lyophilized powder ",
        image: "src/assets/Hematology/Besponsa-rc8hcaxqskkikzy0niv38t82mgzzhrm5znh0r2kz0k.webp ",
        link: "#"
      },
      {
        title: "Tibsovo (Ivosidenib)",
        information: "Strength: Tablets: 250 mg",
        image: "src/assets/Hematology/TIBSOVO-rc8hcaxqskkikzy0niv38t82mgzzhrm5znh0r2kz0k.webp",
        link: "#"
      },
      {
        title: "Poteligeo (Mogamulizumab-kpkc)",
        information: "Injection: 20 mg/5 mL (4 mg/mL) solution in a single-dose vial ",
        image: "",
        link: "#"
      },
      {
        title: "Xospata (Gilteritinib)",
        information: "Strength: Tablets: 40 mg.",
        image: "src/assets/Hematology/xospata-rc8hcbvkzelswlwni19ptazj7uvcpgpwbs4i8cjkuc.webp",
        link: "#"
      },
      {
        title: "Asparlas (Calaspargase pegol-mknl)",
        information: "Injection: 3,750 units/5 mL (750 units/mL) in a single-dose vial ",
        image: "src/assets/Hematology/asparlas-rc8hcbvkzelswlwni19ptazj7uvcpgpwbs4i8cjkuc.webp",
        link: "#"
      },
      {
        title: "Polivy (Polatuzumab Vedotin-piiq) ",
        information: "injection: 30 mg or 140 mg of polatuzumab vedotin-piiq as a lyophilized powder in a single-dose vial",
        image: "src/assets/Hematology/POLIVY-250-1-rc8hcbvkzelswlwni19ptazj7uvcpgpwbs4i8cjkuc.webp",
        link: "#"
      },
      {
        title: "Reblozyl (Luspatercept–aamt)",
        information: "injection: 25mg/75mg lyophilized powder in a single-dose vial for reconstitution",
        image: "src/assets/Hematology/reblozyl-1-rc8hcbvkzelswlwni19ptazj7uvcpgpwbs4i8cjkuc.webp ",
        link: "#"
      },
      {
        title: "Ukoniq (Umbralisib)",
        information: " Strength: Tablets: 200 mg",
        image: "",
        link: "#"
      },
      {
        title: "Pepaxto",
        information: "Strength: Injection: 20 mg ",
        image: " ",
        link: "#"
      },
      {
        title: "Zynlonta (loncastuximab tesirine)",
        information: " Strength: Injection: 10 mg",
        image: "src/assets/Hematology/zynlonta-rc8hcbvkzelswlwni19ptazj7uvcpgpwbs4i8cjkuc.webp",
        link: "#"
      },
      {
        title: "Rylaze",
        information: " Injection: 10 mg/0.5 mL Solution in a Single-dose Vial ",
        image: " ",
        link: "#"
      },
      {
        title: "Exkivity (Mobocertinib)",
        information: "Strength: Capsules: 40 mg",
        image: "src/assets/Hematology/Exkivity-rc8hcbvkzelswlwni19ptazj7uvcpgpwbs4i8cjkuc.webp",
        link: "#"
      },
      {
        title: "Tukysa (Tucatinib)",
        information: "Tablets: 50mg/150mg",
        image: "src/assets/Hematology/tuksya-rc8hcaxqskkikzy0niv38t82mgzzhrm5znh0r2kz0k.webp",
        link: "#"
      },
      {
        title: "Scemblix (Asciminib)",
        information: "Tablets: 20 mg/40 mg",
        image: "src/assets/Hematology/scemblix-rc8hcctf68n387vacjocdsqzt8qpx5tmnwrzpmi6o4.webp",
        link: "#"
      },
      {
        title: "Besremi (Ropeginterferon",
        information: "Injection: 500 mcg/mL solution in a single-dose prefilled syringe ",
        image: "src/assets/Hematology/Besremi-rc8hcbvkzelswlwni19ptazj7uvcpgpwbs4i8cjkuc.webp",
        link: "#"
      },
      {
        title: "Sarclisa (Isatuximab-irfc)",
        information: "Injections: 100 mg/5 mL (20 mg/mL) and 500 mg/25 mL (20 mg/mL)",
        image: "",
        link: "#"
      },
      {
        title: "Inqovi (Decitabine and Cedazuridine))",
        information: "Tablets: 35 mg Decitabine and 100 mg",
        image: "src/assets/Hematology/Inqovi-rc8hcbvkzelswlwni19ptazj7uvcpgpwbs4i8cjkuc.webp",
        link: "#"
      },
      {
        title: "Blenrep (Belantamab Mafodotin-blmf)",
        information: " Strength: Injection: 100mg/Vial",
        image: "src/assets/Hematology/Blenrep-rc8hcbvkzelswlwni19ptazj7uvcpgpwbs4i8cjkuc.webp",
        link: "#"
      },
      {
        title: "Monjuvi (Tafasitamab-cxix)",
        information: "Injection: 200 mg as Lyophilized Powder in Single Dose Vial for Reconstitution",
        image: "src/assets/Hematology/Monjuvi-rc8hcbvkzelswlwni19ptazj7uvcpgpwbs4i8cjkuc.webp",
        link: "#"
      },
      {
        title: "TAFINLAR 50mg and 75mg",
        information: "50mg and 75mg Capsules. ",
        image: "",
        link: "#"
      },
      {
        title: "Calquence (Acalabrutinib)",
        information: "Strength: Capsules: 100 mg",
        image: "src/assets/Hematology/Calquence-rc8hcaxqskkikzy0niv38t82mgzzhrm5znh0r2kz0k.webp",
        link: "#"
      },
      {
        title: "MYLOTARG 5 mg",
        information: "Strength:single-unit of 5 mg ",
        image: "src/assets/Hematology/MYLOTARG-rc8hcbvkzelswlwni19ptazj7uvcpgpwbs4i8cjkuc.webp",
        link: "#"
      },
      {
        title: "Aliqopa (Copanlisib)",
        information: "injection: 60 mg as a lyophilized solid in single-dose vial",
        image: "src/assets/Hematology/ALIQOPA-rc8hcbvkzelswlwni19ptazj7uvcpgpwbs4i8cjkuc.webp",
        link: "#"
      },
      {
        title: "Brentuximab Vedotin",
        information: "Strength: 50 mg.",
        image: "src/assets/Hematology/adcetrisa-rc8hcbvkzelswlwni19ptazj7uvcpgpwbs4i8cjkuc.webp",
        link: "#"
      },
      {
        title: "AGRYLIN",
        information: "Strength: 0.5 mg and 1 mg ",
        image: "src/assets/Hematology/AGRYLIN-rc8hcbvkzelswlwni19ptazj7uvcpgpwbs4i8cjkuc.webp",
        link: "#"
      },
      {
        title: "Atriance (Nelarabine)",
        information: " Strength: Injection: 250 mg/50 mL (5 mg/mL)",
        image: "src/assets/Hematology/Atriance-rc8hcbvkzelswlwni19ptazj7uvcpgpwbs4i8cjkuc.webp",
        link: "#"
      },
      {
        title: "BLINCYTO 35/38.5 mcg",
        information: "Strength: 35 mcg | 38.5 Single-Dose Vial",
        image: "src/assets/Hematology/BLINCYTO-rc8hcbvkzelswlwni19ptazj7uvcpgpwbs4i8cjkuc.webp",
        link: "#"
      },
      {
        title: "ONCASPAR",
        information: "Strength: Units/5 mL solution in a single-use vial.",
        image: "src/assets/Hematology/oncaspar-rc8hcaxqskkikzy0niv38t82mgzzhrm5znh0r2kz0k.webp",
        link: "#"
      },
      {
        title: "ERWINAZE",
        information: "Strength: 150mg Capsule",
        image: "",
        link: "#"
      },
      {
        title: "FOLOTYN 40 mg/2ml",
        information: "Strength: 40 mg/2ml ",
        image: "",
        link: "#"
      },{
        title: "TREOSULFAN",
        information: "Strength: Single Vial.",
        image: "",
        link: "#"
      },
      {
        title: "Ponatinib",
        information: "Tablets: 10 mg/15 mg/30 mg/45 mg",
        image: "src/assets/Hematology/Ponatinib-rc8hcaxqskkikzy0niv38t82mgzzhrm5znh0r2kz0k.webp",
        link: "#"
      },
            {
        title: "NPLATE 250mcg",
        information: "Strength: 250 mcg or 500 mcg single use vials",
        image: "",
        link: "#"
      },

            {
        title: "KYPROLIS",
        information: "injection: 10 mg, 30 mg, or 60 mg lyophilized powder in a single-dose vial for reconstitution",
        image: "src/assets/Hematology/KYPROLIS-rc8hcbvkzelswlwni19ptazj7uvcpgpwbs4i8cjkuc.webp",
        link: "#"
      },

            {
        title: "MABCAMPATH 30 mg",
        information: "Strength: 30 mg/1 mL single use vial",
        image: "src/assets/Hematology/MABCAMPATH-rc8hcbvkzelswlwni19ptazj7uvcpgpwbs4i8cjkuc.webp",
        link: "#"
      },

            {
        title: "VENCLEXTA",
        information: "Strength: 10 mg, 50 mg and 100 mg tablets",
        image: "src/assets/Hematology/Venclexta-rc8hcaxqskkikzy0niv38t82mgzzhrm5znh0r2kz0k.webp",
        link: "#"
      },

            {
        title: "SOLIRIS 300mg",
        information: "Strength: 30 mL of 10 mg/mL",
        image: "src/assets/Hematology/solris-rc8hcctf68n387vacjocdsqzt8qpx5tmnwrzpmi6o4.webp",
        link: "#"
      },

 

  // Add more products
];

export default function HematologyProductsPage() {
  const [query, setQuery] = useState("");
  const filteredProducts = PRODUCTS.filter(p =>
    p.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#f4f7fa] pb-16">
      <div className="max-w-4xl w-[96%] mx-auto bg-white rounded-2xl shadow-lg mt-20 px-6 py-8">
        <h1 className="text-center text-blue-900 text-4xl font-bold mb-6 tracking-wide">HEMATOLOGY</h1>
        {/* Search Box */}
        <div className="flex justify-center mb-7 gap-0">
          <input
            type="text"
            className="px-4 py-3 w-52 sm:w-72 md:w-96 border rounded-l-lg border-gray-300 text-lg focus:outline-blue-300"
            placeholder="Search products..."
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
          <button
            className="bg-blue-900 text-white px-5 rounded-r-lg text-lg transition hover:bg-blue-600 cursor-pointer"
            onClick={() => setQuery(query)}
          >
            Search
          </button>
        </div>
        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8">
          {filteredProducts.length === 0 ? (
            <div className="col-span-2 text-center text-lg text-gray-400 p-6">No products found.</div>
          ) : (
            filteredProducts.map(product => (
              <a
                key={product.title + product.image}
                href={product.link}
                className="block rounded-2xl bg-[#fafafa] border border-gray-200 shadow-md p-6 hover:shadow-2xl transition-all text-center group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex justify-center mb-4">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="rounded-lg shadow-md w-[120px] h-[120px] md:w-[180px] md:h-[180px] object-cover bg-gray-50 transition group-hover:scale-105 group-hover:-rotate-2 group-hover:shadow-xl"
                    style={{ background: "#f0f3f6" }}
                    onError={e => { e.target.src = "https://via.placeholder.com/180x180?text=No+Image"; }}
                  />
                </div>
                <div className="text-xl font-semibold group-hover:text-blue-600 mb-1">{product.title}</div>
                <div className="text-green-600 font-bold text-base mb-1">{product.information}</div>
              </a>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
