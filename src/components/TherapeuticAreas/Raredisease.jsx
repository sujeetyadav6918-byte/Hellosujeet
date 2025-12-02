import React, { useState } from "react";
import { Link } from "react-router-dom";

// Products data
const PRODUCTS = [
  {
    title: " Uplizna (Inebilizumab-cdon) ",
    information:
      "Injection: 100 mg/10 mL (10 mg/mL) solution in a single-dose vial ",
    image:
      "Raredisease/UPLIZNA-rc8hcaxqskkikzy0niv38t82mgzzhrm5znh0r2kz0k.webp",
    id: "Uplizna",
  },
  {
    title: "Strensiq (Asfotase alfa) ",
    information:
      "Injection: 80 mg/0.8 mL, 40 mg/mL, 28 mg/0.7 mL, or 18 mg/0.45 mL solution in single-use vials",
    image:
      "Raredisease/Strensiq-Asfotase-alfa-rc8hcaxqskkikzy0niv38t82mgzzhrm5znh0r2kz0k.webp ",
    id: "Strensiq",
  },
  {
    title: "Tavneos (Avacopan) ",
    information: "Dosage Form & Strength: Capsules: 10 mg",
    image:
      " Raredisease/imgpsh_fullsize_anim-rc8hcaxqskkikzy0niv38t82mgzzhrm5znh0r2kz0k.webp",
    id: "Tavneos",
  },
  {
    title: "Skytrofa (Lonapegsomatropin-tcgd) ",
    information:
      "injection: 3mg/3.6mg/4.3mg/5.2mg/6.3mg/7.6mg/9.1mg/11mg/13.3 mg",
    image:
      "Raredisease/Skytrofa-medicine-rc8hcaxqskkikzy0niv38t82mgzzhrm5znh0r2kz0k.webp ",
    id: "Skytrofa",
  },
  {
    title: "Nexviazyme (Avalglucosidase alfa-ngpt ",
    information: " Strength: 100 mg Lyophilized Powder for Injection",
    image:
      " Raredisease/Nexviazyme-rc8hcaxqskkikzy0niv38t82mgzzhrm5znh0r2kz0k.webp",
    id: "Nexviazyme",
  },
  {
    title: "Evkeeza (Evinacumab-dgnb) ",
    information:
      "Injection: 345 mg/2.3 mL (150 mg/mL) and 1,200 mg/8 mL (150 mg/mL) ",
    image: " Raredisease/web-rc8hc9zwlqj89dzdt0ggobgm134ma2ifnitj9smd6s.webp",
    id: "Evkeeza",
  },
  {
    title: "Nulibry (Fosdenopterin) ",
    information:
      "injection: 9.5 mg of fosdenopterin as a lyophilized powder or cake in a single-dose vial for",
    image:
      "Raredisease/Nulibry-rc8hc9zwlqj89dzdt0ggobgm134ma2ifnitj9smd6s.webp ",
    id: "Nulibry",
  },
  {
    title: "Welireg (Belzutifan) ",
    information: " Strength: Tablets: 40 mg",
    image:
      " Raredisease/Welireg-rc8hc9zwlqj89dzdt0ggobgm134ma2ifnitj9smd6s.webp",
    id: "Welireg",
  },
  {
    title: " Xiaflex (Collagenase Clostridium Histolyticum)",
    information: " Single-use glass vials containing 0.9 mg",
    image:
      " Raredisease/XIAFLEX-rc8hcaxqskkikzy0niv38t82mgzzhrm5znh0r2kz0k.webp",
    id: "Xiaflex",
  },
  {
    title: "Mepsevii (Vestronidase alfa-vjbk) ",
    information: "Injection: 10 mg/5 mL (2 mg/mL) in a single-dose vial ",
    image:
      " Raredisease/Mepsevii-rc8hcaxqskkikzy0niv38t82mgzzhrm5znh0r2kz0k.webp",
    id: "Mepsevii",
  },
  {
    title: "Symdeko (Tezacaftor/Ivacaftor & Ivacaftor) ",
    information: "Strength: 100 mg/150 mg and 150 mg ",
    image:
      "Raredisease/Symdeko-250-rc8hcaxqskkikzy0niv38t82mgzzhrm5znh0r2kz0k.webp ",
    id: "Symdeko",
  },
  {
    title: " Pegvaliase-pqpz",
    information:
      "njection: 2.5 mg/0.5 mL, 10 mg/0.5 mL, & 20 mg/mL in a single-dose",
    image:
      " Raredisease/Palynziq-1-rc8hcaxqskkikzy0niv38t82mgzzhrm5znh0r2kz0k.webp",
    id: "Pegvaliase",
  },
  {
    title: "Onpattro (Patisiran) ",
    information:
      "Lipid Complex Injection: 10 mg/5 mL (2 mg/mL) in a single-dose vial",
    image:
      "Raredisease/Untitled-1-rc8hcaxqskkikzy0niv38t82mgzzhrm5znh0r2kz0k.webp ",
    id: "Onpattro",
  },
  {
    title: "Galafold (Migalastat) ",
    information: "Dosage Form & Strength: Capsules: 123 mg",
    image:
      "Raredisease/galafold-rc8hcaxqskkikzy0niv38t82mgzzhrm5znh0r2kz0k.webp ",
    id: "Galafold",
  },
  {
    title: "Diacomit (Stiripentol) ",
    information: "Capsule and Sachets: 250 mg/500 mg ",
    image:
      "Raredisease/01-NORMAL-rc8hcbvkzelswlwni19ptazj7uvcpgpwbs4i8cjkuc.webp ",
    id: "Diacomit",
  },
  {
    title: " Takhzyro (Lanadelumab)",
    information:
      "Injection: 300 mg/2 mL (150 mg/mL) solution in a single-dose vial",
    image:
      "Raredisease/Takhzyro-Takeda-1-rc8hcbvkzelswlwni19ptazj7uvcpgpwbs4i8cjkuc.webp ",
    id: "Takhzyro",
  },
  {
    title: " Orfadin (Nitisinone)",
    information: "Capsules: 2 mg, 5 mg, 10 mg, 20 mg.",
    image:
      " Raredisease/medicine-0001-rc8hcaxqskkikzy0niv38t82mgzzhrm5znh0r2kz0k.webp",
    id: "Orfadin",
  },
  {
    title: "Trikafta (elexacaftor, tezacaftor and ivacaftor ",
    information:
      "Tablets: 100mg/50mg/75mg and 150mg, 50mg/25mg/37.5mg and 75mg",
    image:
      " Raredisease/Trikafta-rc8hcbvkzelswlwni19ptazj7uvcpgpwbs4i8cjkuc.webp",
    id: "Trikafta",
  },
  {
    title: " Spinraza (Nusinersen)",
    information: "strength: 12 mg/5 mL (2.4 mg/mL) in a single-dose vial",
    image:
      " Raredisease/Spinraza-rc8hcbvkzelswlwni19ptazj7uvcpgpwbs4i8cjkuc.webp",
    id: "Spinraza",
  },

  {
    title: "Amondys 45 (Casimersen) ",
    information: "Injection: 100 mg/2 mL in a Single-Dose Vial",
    image:
      "Raredisease/Exondys-51-Eteplirsen-rc8hcctf68n387vacjocdsqzt8qpx5tmnwrzpmi6o4.webp ",
    id: "Amondys45",
  },

  {
    title: " Voxzogo (Vosoritide)",
    information:
      "Injection: 0.4 mg, 0.56 mg, or 1.2 mg lyophilized powder in a single-dose",
    image:
      "Raredisease/Voxzogo-4-rc8hcaxqskkikzy0niv38t82mgzzhrm5znh0r2kz0k.webp ",
    id: "Voxzogo",
  },

  {
    title: " TEPEZZA (teprotumumab-trbw)",
    information: "Injection: 500 mg lyophilized powder in a single-dose vial",
    image:
      " Raredisease/tepezza-rc8hcaxqskkikzy0niv38t82mgzzhrm5znh0r2kz0k.webp",
    id: "Tepezza",
  },
  {
    title: "Isturisa (Osilodrostat) ",
    information: "Strength: Tablets: 1 mg, 5 mg, and 10 mg",
    image:
      "Raredisease/isturisa-rc8hcaxqskkikzy0niv38t82mgzzhrm5znh0r2kz0k.webp ",
    id: "Isturisa",
  },
  {
    title: "Koselugo (Selumetinib) ",
    information: "Strength: Capsules: 10mg/25mg",
    image: " ",
    id: "Koselugo",
  },
  {
    title: " Viltepso (Viltolarsen)",
    information: "Injection: 250 mg/5 mL (50 mg/mL) ",
    image:
      "Raredisease/Viltepso-Viltolarsen-rc8hcctf68n387vacjocdsqzt8qpx5tmnwrzpmi6o4.webp ",
    id: "Viltepso",
  },
  {
    title: "XERMELO 250mg ",
    information: "Strength: tablet of 250mg",
    image: " ",
    id: "XERMELO",
  },
  {
    title: " BRINUERA 150 mg/5 mL",
    information: "Strength: Injection (2 vials of 150 mg/5 mL)",
    image: " ",
    id: "BRINUERA",
  },

  {
    title: "Prevymis (Letermovir) ",
    information:
      "Tablet: 240 mg; 480 mg & Injection: 240 mg/12 mL (20 mg/mL) or 480 mg/24 mL (20 mg/mL) in a single-dose vial ",
    image:
      "Raredisease/PREVYMIS-rc8hcaxqskkikzy0niv38t82mgzzhrm5znh0r2kz0k.webp ",
    id: "Prevymis",
  },
  {
    title: "PARSABIV 2.5mg,5mg and 10mg ",
    information: "Strength: vial of 2.5mg,5mg and 10mg",
    image: " ",
    id: "PARSABIV",
  },
  {
    title: "Strength: vial of 2.5mg,5mg and 10mg ",
    information: "Strength: single-dose vial.",
    image:
      " Raredisease/RADICAVA-30-mg-rc8hc84882gnm6243zn7jbxoubdvuoayz9ikb8p5j8.webp",
    id: "Radicava",
  },
  {
    title: " RHOPRESSA",
    information: "Strength: netarsudil 0.02%",
    image: " ",
    id: "RHOPRESSA",
  },

  // Add more products
];

export default function RarediseaseProductsPage() {
  const [query, setQuery] = useState("");
  const filteredProducts = PRODUCTS.filter((p) =>
    p.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#f4f7fa] pb-16">
      <div className="max-w-4xl w-[96%] mx-auto bg-white rounded-2xl shadow-lg mt-20 px-6 py-8">
        <h1 className="text-center text-blue-900 text-4xl font-bold mb-6 tracking-wide">
          RAREDISEASE
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
                to={`/product/${product.id}`}
                className="block rounded-2xl bg-[#fafafa] border border-gray-200 shadow-md p-6 hover:shadow-2xl transition-all text-center group"
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
