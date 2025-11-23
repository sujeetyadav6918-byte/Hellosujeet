


import React, { useState } from "react";

// Products data
const PRODUCTS = [

     {
        title: "Radicut (Edaravone) ",
        information: "Injection: 30 mg/100 mL in single-dose vials",
        image: " src/assets/Neurology/Radicut-Edaravone-250-rc8hcaxqskkikzy0niv38t82mgzzhrm5znh0r2kz0k.webp",
        link:"#"
        
    
      },
      {
        title: " Rilutek (Riluzole)",
        information: " Strength: Tablets: 50 mg",
        image: " src/assets/Neurology/Rilutek-riluzole-Neuro-250-rc8hcaxqskkikzy0niv38t82mgzzhrm5znh0r2kz0k.webp ",
        link:"#"
        
    
      },
      
      {
        title: "Ajovy (Fremanezumab-vfrm) ",
        information: "Strength: Injections: 225 mg/1.5 mL ",
        image: "src/assets/Neurology/Ajovy-fremanezumab-vfrm-Neuro-250-rc8hcaxqskkikzy0niv38t82mgzzhrm5znh0r2kz0k.webp  ",
        link:"#"
        
    
      },
      {
        title: "Emgality (Galcanezumab) ",
        information: "Injection: 120 mg/mL and 300 mg/mL",
        image: "  ",
        link:"#"
        
    
      },
      {
        title: " Fycompa (Perampanel)",
        information: "Strength: 2 mg/4 mg/6 mg/8 mg/10 mg/12 mg, and 0.5 mg/mL",
        image: "src/assets/Neurology/Fycompa-250-rc8hcaxqskkikzy0niv38t82mgzzhrm5znh0r2kz0k.webp  ",
        link:"#"
        
    
      },
      {
        title: "Azstarys ",
        information: "Capsules: 26.1 mg/5.2 mg, 39.2 mg/7.8 mg, 52.3 mg/10.4 mg",
        image: " src/assets/Neurology/AZSTARYS-rc8hcaxqskkikzy0niv38t82mgzzhrm5znh0r2kz0k.webp ",
        link:"#"
        
    
      },
      {
        title: "Qelbree (Viloxazine) ",
        information: "Capsules: 100 mg, 150 mg and 200 mg",
        image: " src/assets/Neurology/Qelbree-rc8hcaxqskkikzy0niv38t82mgzzhrm5znh0r2kz0k.webp ",
        link:"#"
        
    
      },
      {
        title: "Lybalvi (Olanzapine and Samidorphan) ",
        information: ": Tablets: 5 mg/10 mg, 10 mg/10 mg, 15 mg/10 mg and 20 mg/10 mg",
        image: " src/assets/Neurology/Lybalvi-rc8hcaxqskkikzy0niv38t82mgzzhrm5znh0r2kz0k.webp ",
        link:"#"
        
    
      },
      {
        title: "Aduhelm (Aducanumab-avwa) ",
        information: "Injection: 170 mg/1.7 mL (100 mg/mL) and 300 mg/3 mL (100 mg/mL) ",
        image: "src/assets/Neurology /Aduhelm--rc8hcctf68n387vacjocdsqzt8qpx5tmnwrzpmi6o4.webp ",
        link:"#"
        
    
      },
      {
        title: " NUEDEXTA",
        information: "Strength: 20 mg/Quinidine 10 mg Capsules.",
        image: "  ",
        link:"#"
        
    
      },
      {
        title: "ILARIS ",
        information: "Strength: single-use vial.",
        image: "  ",
        link:"#"
        
    
      },
      {
        title: "GLIOLAN ",
        information: "Strength: 30 mg/ml ",
        image: "  ",
        link:"#"
        
    
      },
      {
        title: "STELARA ",
        information: "Strength: 45 mg/0.5 ml and 90 mg/1 ml vial.",
        image: " src/assets/Neurology/Stelara-rc8hcbvkzelswlwni19ptazj7uvcpgpwbs4i8cjkuc.webp ",
        link:"#"
        
    
      },
      {
        title: "HUMIRA ",
        information: "Strength: 40 mg (0.8 mL) Injection.",
        image: "src/assets/Neurology/humira-rc8hcbvkzelswlwni19ptazj7uvcpgpwbs4i8cjkuc.webp ",
        link:"#"
        
    
      }
     

    

  // Add more products
];

export default function NaurologyProductsPage() {
  const [query, setQuery] = useState("");
  const filteredProducts = PRODUCTS.filter(p =>
    p.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#f4f7fa] pb-16">
      <div className="max-w-4xl w-[96%] mx-auto bg-white rounded-2xl shadow-lg mt-20 px-6 py-8">
        <h1 className="text-center text-blue-900 text-4xl font-bold mb-6 tracking-wide">NEUROLOGY</h1>
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
