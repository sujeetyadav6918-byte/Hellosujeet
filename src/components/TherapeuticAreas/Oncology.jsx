import React, { useState } from "react";
import { Link } from "react-router-dom"; // ← yeh add karo

// Products data
const PRODUCTS = [
  {
    title: "Lunsumio(Mosunetuzumab-axgb)",
    information: " Injection: 1 mg/mL and 30 mg/30 mL",
    image:
      "/Oncologyimage/Lunsumio-Mosunetuzumab-axgb-250-rc8hcaxqskkikzy0niv38t82mgzzhrm5znh0r2kz0k (1).webp",
    id: "lunsumio",
  },
  {
    title: "Krazati (adagrasib)",
    information: " It is available as Tablets: 200 mg ",
    image:
      " Oncologyimage/Krazati-adagrasib-250-rc8hcaxqskkikzy0niv38t82mgzzhrm5znh0r2kz0k.webp",
    id: "Krazati",
  },
  {
    title: "Rolvedon (Eflapegrastim-xnst)",
    information: "Injection: 13.2 mg/0.6 mL solution",
    image:
      " Oncologyimage/Rolvedon-Eflapegrastim-xnst-250-1-rc8hcaxqskkikzy0niv38t82mgzzhrm5znh0r2kz0k.webp",
    id: "Rolvedon",
  },
  {
    title: "Orserdu (Elacestrant)",
    information: "tablets: 345 mg and 86 mg  ",
    image:
      " Oncologyimage/Orserdu-Elacestrant-250-rc8hcaxqskkikzy0niv38t82mgzzhrm5znh0r2kz0k.webp ",
    id: "Orserdu",
  },
  {
    title: "Ocaliva (Obeticholic Acid)",
    information: "Tablets: 5 mg, 10 mg ",
    image:
      " Oncologyimage/Ocaliva-01-rc8hcaxqskkikzy0niv38t82mgzzhrm5znh0r2kz0k.webp  ",
    id: "Oncaliva",
  },
  {
    title: "Portrazza (Necitumumab)",
    information: "Injection: 800 mg/50 mL (16 mg/mL)",
    image:
      "rarewebsitedetails//Portrazza-rc8hcaxqskkikzy0niv38t82mgzzhrm5znh0r2kz0k.webp",

    id: "Portrazza",
  },
  {
    title: "Cytalux (Pofalacianine)",
    information: "Injection: 3.2 mg/1.6 mL (2 mg/mL)  ",
    image:
      " Oncologyimage/CYTALUX-rc8hcaxqskkikzy0niv38t82mgzzhrm5znh0r2kz0k.webp ",
    id: "Cytalux",
  },
  {
    title: "Pylarify (Piflufolastat F18)",
    information:
      "Injection: a multiple-dose vial containing 37 MBq/mL to 2,960 MBq/mL (1 mCi/mL to 80 mCi/mL)",
    image:
      " Oncologyimage/Pylarify-Piflufolastat-F18-rc8hc9zwlqj89dzdt0ggobgm134ma2ifnitj9smd6s.webp",
    id: "Pylarify",
  },
  {
    title: "Truseltiq (Infigratinib)",
    information: " Capsules: 25 mg and 100 mg",
    image:
      " Oncologyimage/Truseltiq-rc8hcaxqskkikzy0niv38t82mgzzhrm5znh0r2kz0k.webp",
    id: "Truseltiq",
  },
  {
    title: "ENHERTU (Trastuzumab Deruxtecan)",
    information: "injection: 100 mg lyophilized",
    image:
      " Oncologyimage/Enhertu-rc8hcbvkzelswlwni19ptazj7uvcpgpwbs4i8cjkuc.webp",
    id: "Enhertu",
  },
  {
    title: "Mektovi (Binimetinib)",
    information: " Tablets: 15 mg",
    image:
      " Oncologyimage/mektovi-rc8hcaxqskkikzy0niv38t82mgzzhrm5znh0r2kz0k.webp ",
    id: "Mektovi",
  },
  {
    title: "Braftovi (Encorafenib)",
    information: "Capsules: 75 mg",
    image:
      " Oncologyimage/BRAFTOVI-rc8hcaxqskkikzy0niv38t82mgzzhrm5znh0r2kz0k.webp",
    id: "Braftovi",
  },
  {
    title: "Libtayo (Cemiplimab-rwlc)",
    information: " Injection: 350 mg/7 mL (50 mg/mL) ",
    image:
      " Oncologyimage/lyp-rc8hcbvkzelswlwni19ptazj7uvcpgpwbs4i8cjkuc (1).webp",
    id: "Libtayo",
  },
  {
    title: "Lorbrena (Lorlatinib)",
    information: "Tablets: 25 mg or 100 mg",
    image:
      " Oncologyimage/Lorbrena-250-rc8hcbvkzelswlwni19ptazj7uvcpgpwbs4i8cjkuc.webp",
    id: "Lorbrena",
  },
  {
    title: "Talzenna (Talazoparib)",
    information: "Capsules: 0.25 mg, 1 mg ",
    image:
      "  Oncologyimage/Talzenn-250-rc8hcbvkzelswlwni19ptazj7uvcpgpwbs4i8cjkuc.webp",
    id: "Talzenna",
  },
  {
    title: "Balversa (Erdafitinib)",
    information: "Dosage : 3 mg, 4 mg, & 5 mg",
    image:
      " Oncologyimage/balversa-3-rc8hcbvkzelswlwni19ptazj7uvcpgpwbs4i8cjkuc.webp",
    id: "Balversa",
  },
  {
    title: "Piqray (Alpelisib)",
    information: " Tablets: 50 mg, 150 mg, & 200 mg ",
    image:
      " Oncologyimage/PIQRAY-250-rc8hcbvkzelswlwni19ptazj7uvcpgpwbs4i8cjkuc.webp ",
    id: "Piqray",
  },
  {
    title: "Alunbrig (Brigatinib)",
    information: "ablets in 180 mg, 90 mg, or 30 mg.",
    image:
      " Oncologyimage/Alunbrig-rc8hcaxqskkikzy0niv38t82mgzzhrm5znh0r2kz0k.webp",
    id: "Alunbrig",
  },
  {
    title: "Jemperli (Dostarlimab-gxly)",
    information: "Injection: 500 mg/10 mL (50 mg/mL) ",
    image:
      " Oncologyimage/Jemperli-rc8hcbvkzelswlwni19ptazj7uvcpgpwbs4i8cjkuc.webp",
    id: "Jemperli",
  },
  {
    title: "Tepmetko (Tepotinib)",
    information: "Tablets: 225 mg",
    image: "",
    id: "Tempetko",
  },
  {
    title: "COSELA™ (Trilaciclib)",
    information: "Injection: 300 mg ",
    image: " ",
    id: "Cosela",
  },
  {
    title: "Fotivda (Tivozanib)",
    information: "Capsules: 1.34 mg and 0.89 mg",
    image: "",
    id: "Fotivda",
  },
  {
    title: "Rozlytrek (Entrectinib)",
    information: "Capsules: 100 mg and 200 mg ",
    image:
      " Oncologyimage/Rozlytrek-rc8hcbvkzelswlwni19ptazj7uvcpgpwbs4i8cjkuc.webp ",
    id: "Rozlytrek",
  },
  {
    title: "Tivdak (Tisotumab Vedotin-tftv)",
    information: "Injection: 40mg",
    image:
      " Oncologyimage/Actemra-Tort-rc8hcbvkzelswlwni19ptazj7uvcpgpwbs4i8cjkuc.webp",
    id: "Tivdak",
  },
  {
    title: "Ayvakit (Avapritinib)",
    information: " Tablets: 25 mg, 50 mg, 100 mg, 200 mg and 300 mg ",
    image: " Oncologyimage/Ayvakit-1.webp ",
    id: "Ayvakit",
  },
  {
    title: "Tazverik (Tazemetostat)",
    information: "Tablets: 200 mg",
    image: "",
    id: "Tazverik",
  },
  {
    title: "Tukysa (Tucatinib)",
    information: "Tablets: 50mg/150mg",
    image:
      " Oncologyimage/tuksya-rc8hcaxqskkikzy0niv38t82mgzzhrm5znh0r2kz0k.webp",
    id: "Tukysa",
  },
  {
    title: "Pemazyre (Pemigatinib).",
    information: "Tablets: 4.5mg, 9mg & 13.5mg",
    image:
      " Oncologyimage/Pemazyre-Pemigatinib-250-rc8hc922ewhxxs0qyi1u3tp5fp992depbe61sinrd0.webp",
    id: "Pemazyre",
  },
  {
    title: "Trodelvy (Sacituzumab govitecan-hziy)",
    information: "injection: 200 mg , 180 mg",
    image:
      " Oncologyimage/Trodelvy-rc8hcbvkzelswlwni19ptazj7uvcpgpwbs4i8cjkuc.webp",
    id: "Trodelvy",
  },
  {
    title: "Tabrecta (Capmatinib)",
    information: "Tablets: 150/200 mg",
    image: "",
    id: "Tabrecta",
  },
  {
    title: "Retevmo (Selpercatinib)",
    information: "Capsules: 40/80 mg",
    image:
      " Oncologyimage/Retevmo-rc8hcbvkzelswlwni19ptazj7uvcpgpwbs4i8cjkuc.webp",
    id: "Retevmo",
  },
  {
    title: "Zepzelca (Lurbinectedin)",
    information: "injection: 4 mg Lyophilized",
    image:
      " Oncologyimage/Zepzelca-rc8hcbvkzelswlwni19ptazj7uvcpgpwbs4i8cjkuc.webp",
    id: "Zepzelca",
  },
  {
    title: "Gavreto (Pralsetinib)",
    information: "Capsules: 100mg",
    image:
      " Oncologyimage/Gavreto-rc8hcbvkzelswlwni19ptazj7uvcpgpwbs4i8cjkuc.webp",
    id: "Gavreto",
  },
  {
    title: "MARGENZA (Margetuximab-cmkb)",
    information: "250mg/10mL (25mg/mL) ",
    image:
      " Oncologyimage/MARGENZA-rc8hcbvkzelswlwni19ptazj7uvcpgpwbs4i8cjkuc.webp",
    id: "Margenza",
  },
  {
    title: "Orgovyx (Relugolix)",
    information: "Tablets: 120mg",
    image: "",
    id: "Orgovyx",
  },
  {
    title: "Danyelza (Naxitamab-gqgk)",
    information: "Injection: 40 mg/10 mL (4 mg/mL)",
    image:
      " Oncologyimage/Danyelza-rc8hcbvkzelswlwni19ptazj7uvcpgpwbs4i8cjkuc.webp",
    id: "Danyelza",
  },
  {
    title: "Zejula (Niraparib)",
    information: "Strength: 100 mg Capsules",
    image:
      " Oncologyimage/Zejula-rc8hcbvkzelswlwni19ptazj7uvcpgpwbs4i8cjkuc.webp",
    id: "Zejula",
  },
  {
    title: "VERZENIO",
    information: "Strength: 50mg,100mg,150mg,200mg.",
    image: "",
    id: "Verzenio",
  },
  {
    title: "TECENTRIQ 1200 mg",
    information: "Strength: 1200 mg ",
    image: "",
    id: "Tecentriq",
  },
  {
    title: "NERLYNX 40mg",
    information: "Strength: 40 mg tablet",
    image:
      " Oncologyimage/NERLYNX-rc8hcbvkzelswlwni19ptazj7uvcpgpwbs4i8cjkuc (1).webp",
    id: "Nerlynx",
  },
  {
    title: "Yervoy ",
    information: "Injection 50mg and 200 mg vial",
    image: "",
    id: "Yervoy",
  },
  {
    title: "Caprelsa (Vandetanib)",
    information: "Strength: Tablets: 100 mg and 300 mg",
    image:
      " Oncologyimage/CAPRELSA-rc8hcbvkzelswlwni19ptazj7uvcpgpwbs4i8cjkuc.webp",
    id: "Caprelsa",
  },
  {
    title: "Celsentri (Maraviroc)",
    information: "Tablets: 150 mg and 300 mg",
    image:
      " Oncologyimage/CELSENTRI-rc8hcbvkzelswlwni19ptazj7uvcpgpwbs4i8cjkuc.webp",
    id: "Celsentri",
  },
  {
    title: "Vistide (Cidofovir)",
    information: "Injection: 375mg/5mL ",
    image:
      " Oncologyimage/CIDOFOVIR-rc8hcbvkzelswlwni19ptazj7uvcpgpwbs4i8cjkuc.webp",
    id: "Vistide",
  },
  {
    title: "IBRANCE 125mg",
    information: "Strength: 125mg Capsules",
    image:
      " Oncologyimage/IBRANCE-rc8hcbvkzelswlwni19ptazj7uvcpgpwbs4i8cjkuc.webp",
    id: "",
  },
  {
    title: "Cyramza (Ramucirumab)",
    information:
      "njection: 100 mg/10 mL (10 mg/mL) or 500 mg/50 mL (10 mg/mL) ",
    image:
      " Oncologyimage/CYRAMZA-rc8hcbvkzelswlwni19ptazj7uvcpgpwbs4i8cjkuc.webp",
    id: "#",
  },
  {
    title: "DABRAFENIB 50mg",
    information: "Strength: 50mg",
    image: "",
    id: "#",
  },

  {
    title: "ENTEREG 12mg",
    information: "Strength:12 mg Capsule.",
    image:
      " Oncologyimage/ENTEREG-rc8hcbvkzelswlwni19ptazj7uvcpgpwbs4i8cjkuc.webp",
    id: "#",
  },

  {
    title: "ERIVEDGE 150mg",
    information: "Strength: 150mg Capsule",
    image:
      " Oncologyimage/ERIVEDGE-rc8hcbvkzelswlwni19ptazj7uvcpgpwbs4i8cjkuc.webp",
    id: "#",
  },

  {
    title: "Lynparza(Olaparib)",
    information: "Tablets: 100 mg, 150 mg",
    image:
      " Oncologyimage/LYNPARZA-rc8hcbvkzelswlwni19ptazj7uvcpgpwbs4i8cjkuc.webp",
    id: "#",
  },

  {
    title: "Qinlock (Ripretinib)",
    information: "Tablets: 50 mg",
    image: "",
    id: "#",
  },

  {
    title: "MEKINIST 2mg",
    information: "Strength: 2mg capsules",
    image:
      " Oncologyimage/MEKINIST-rc8hcbvkzelswlwni19ptazj7uvcpgpwbs4i8cjkuc.webp",
    id: "#",
  },

  {
    title: "Lysodren 500mg",
    information: "Tablets: 500 mg",
    image:
      " Oncologyimage/Lysodren-rc8hcbvkzelswlwni19ptazj7uvcpgpwbs4i8cjkuc.webp",
    id: "#",
  },

  {
    title: "NAVELBINE 50mg",
    information: "Strength: 50mg Capsules",
    image: "",
    id: "#",
  },

  {
    title: "TEYSUNO",
    information: "Strength: 20 mg/5.8 mg/15.8 mg).",
    image: "",
    id: "#",
  },

  {
    title: "Zelboraf 240mg",
    information: "ablets: 240 mg",
    image:
      " Oncologyimage/Zelboraf-240mg-rc8hcctf68n387vacjocdsqzt8qpx5tmnwrzpmi6o4.webp",
    id: "#",
  },

  {
    title: "Zepzelca (Lurbinectedin)",
    information: "injection: 4 mg Lyophilized Powder in a Single-dose Vial",
    image: "/Zepzelca-rc8hcbvkzelswlwni19ptazj7uvcpgpwbs4i8cjkuc.webp",
    id: "#",
  },

  {
    title: "ZYDELIG",
    information: "Strength: 100mg Tablets.",
    image:
      "Oncologyimage/ZYDELIG-rc8hcbvkzelswlwni19ptazj7uvcpgpwbs4i8cjkuc.webp",
    id: "#",
  },

  // Add more products
];

export default function OncologyProductsPage() {
  const [query, setQuery] = useState("");
  const filteredProducts = PRODUCTS.filter((p) =>
    p.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#f4f7fa] pb-16">
      <div className="max-w-4xl w-[96%] mx-auto bg-white rounded-2xl mt-4 shadow-lg px-6 py-8">
        <h1 className="text-center text-blue-900 text-4xl font-bold mb-6 tracking-wide">
          ONCOLOGY
        </h1>
        {/* Search Box */}
        <div className="flex justify-center mb-7 gap-0">
          <input
            type="text"
            className="px-4 py-3 w-52 sm:w-72 md:w-96 border rounded-l-lg border-gray-300 text-lg focus:outline-blue-300"
            placeholder="Search products..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
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
            <div className="col-span-2 text-center text-lg text-gray-400 p-6">
              No products found.
            </div>
          ) : (
            filteredProducts.map((product) => (
              <Link
                key={product.id}
                to={product.id ? `/product/${product.id}` : "#"}
                className="block rounded-2xl bg-[#fafafa] border border-gray-200 shadow-md p-6 hover:shadow-2xl transition-all text-center group"
                onClick={() => {
                  // optional: agar id nahi hai to navigation mat karna
                  if (!product.id) return;
                }}
              >
                <div className="flex justify-center mb-4">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="rounded-lg shadow-md w-[120px] h-[120px] md:w-[180px] md:h-[180px] object-cover bg-gray-50 transition group-hover:scale-105 group-hover:-rotate-2 group-hover:shadow-xl"
                    style={{ background: "#f0f3f6" }}
                    onError={(e) => {
                      e.target.src =
                        "https://via.placeholder.com/180x180?text=No+Image";
                    }}
                  />
                </div>
                <div className="text-xl font-semibold group-hover:text-blue-600 mb-1">
                  {product.title}
                </div>
                <div className="text-green-600 font-bold text-base mb-1">
                  {product.information}
                </div>
              </Link>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
