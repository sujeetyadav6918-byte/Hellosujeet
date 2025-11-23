import React, { useState } from "react";

// Example news data (add your own)
const newsData = [
 {
        img: "rarewebsitedetails/image1.jpg",
        title: "Trientine Hydrochloride (Trikoris) – Trusted Global Supplier from India",
        desc: "A generic version of Trientine available through reliable global supply networks.",
        link:"rarewebsitedetails/full medicine .html "
        
        
      },
      {
        img: "https://img.freepik.com/free-vector/human-body-cells-disease-education-poster_1308-100859.jpg",
        title: "Duchenne Muscular Dystrophy in India: Key Insights & Treatments",
        desc: "DMD is a life-threatening, progressive muscle-wasting disorder. Key new approaches in management.",
         link:"rarewebsitedetails/full medicine .html "
      },
      {
        img: "https://img.freepik.com/premium-vector/approved-stamp-medical-vector-icons-healthy-life-concept-fda-certificate-set_22052-1692.jpg",
        title: "FDA Approves First Intranasal Diuretic, Enbumyst",
        desc: "Enbumyst (bumetanide nasal spray) developed as an alternative for certain heart failure patients.",
         link:"rarewebsitedetails/full medicine .html "

      },
      {
        img: "https://img.freepik.com/free-vector/vaccine-composition-white-background_1308-4229.jpg",
        title: "Moderna’s 2025–2026 COVID-19 Vaccines Receive FDA Approval",
        desc: "Formulations designed to address emerging variants with new mRNA techniques.", 
         link:"rarewebsitedetails/full medicine .html "
      },
      {
        img: "https://img.freepik.com/premium-photo/dna-helix-molecule-scientific-genetic-medicine-background-3d-illustration_317396-999.jpg",
        title: "FDA Approves First-in-Class Therapy for Hereditary Angioedema",
        desc: "Dawnzera (Donidalorsen) is now approved for rare, severe genetic forms of angioedema.",
         link:"rarewebsitedetails/full medicine .html "
      },
      {
        img: "https://img.freepik.com/premium-vector/doctor-symptoms-list-flat-style-design-health-body-care-illustration-hospital-medicine-vector_22052-2106.jpg",
        title: "Advanced Systemic Mastocytosis (AdvSM): Symptoms, Diagnosis & Treatment Options",
        desc: "Diagnosis now includes advanced genetic and imaging methods for more effective management.",
         link:"rarewebsitedetails/full medicine .html "
      },
      {
        img: "https://img.freepik.com/free-vector/pharmaceutical-ads-template_88163-153.jpg",
        title: "How is Ayvakit (avapritinib) Effective in PDGFRA GIST Treatment",
        desc: "Ayvakit, supplied under the brand Ayvakyn, demonstrates strong efficacy for rare GIST forms.",
         link:"rarewebsitedetails/full medicine .html "
      },
      {
        img: "https://img.freepik.com/premium-photo/lung-inside-human-body-isolated-black-background-3d-illustration_786527-6107.jpg",
        title: "Extensive-Stage Small Cell Lung Cancer (ES-SCLC): Symptoms, Causes, & Treatment",
        desc: "Small-cell lung cancer (SCLC) makes up about 15% of all lung cancers and progresses rapidly.",
         link:"rarewebsitedetails/full medicine .html "
      },
      {
        img: "https://img.freepik.com/premium-vector/breast-cancer-awareness-pink-ribbon-colourful-background-vector-illustration_120819-44.jpg",
        title: "Advanced or Metastatic HR+, HER2- Breast Cancer: Symptoms, Risk Factors, and Treatment",
        desc: "The latest therapies for HR+, HER2- advanced breast cancer improve survival and patient quality of life.",
         link:"rarewebsitedetails/full medicine .html "
      },
      {
        img: "https://img.freepik.com/premium-photo/medical-doctor-working-modern-clinic_1048944-5530925.jpg",
        title: "Precision Oncology: The Next Leap in Personalized Cancer Treatment",
        desc: "Targeted therapies now enable precise intervention for genetic, molecular cancer drivers.",
         link:"rarewebsitedetails/full medicine .html "
      },
      {
        img: "https://img.freepik.com/free-vector/laboratory-research-scientist-equipment-science-background-vector_53876-116610.jpg",
        title: "India Scales CAR-T Therapy Approvals in 2025",
        desc: "Regulators speed up institutional review and expansion of cutting-edge therapies for rare cancers.",
         link:"rarewebsitedetails/full medicine .html "
        //  link: "https://www.apple.com/in/iphone-15/",
      },
      {
        img: "https://img.freepik.com/free-vector/medical-health-banner-template-design_1017-31838.jpg",
        title: "Explained: What is a Named Patient Program for Medicines?",
        desc: "A brief about global legal access for unapproved or rare medicines under named patient pathways.",
         link:"rarewebsitedetails/full medicine .html "
      },
       {
        img: "rarewebsitedetails/image1.jpg",
        title: "Trientine Hydrochloride (Trikoris) – Trusted Global Supplier from India",
        desc: "A generic version of Trientine available through reliable global supply networks.",
        link:"rarewebsitedetails/full medicine .html "
        
        
      },
      {
        img: "https://img.freepik.com/free-vector/human-body-cells-disease-education-poster_1308-100859.jpg",
        title: "Duchenne Muscular Dystrophy in India: Key Insights & Treatments",
        desc: "DMD is a life-threatening, progressive muscle-wasting disorder. Key new approaches in management.",
         link:"rarewebsitedetails/full medicine .html "
      },
      {
        img: "https://img.freepik.com/premium-vector/approved-stamp-medical-vector-icons-healthy-life-concept-fda-certificate-set_22052-1692.jpg",
        title: "FDA Approves First Intranasal Diuretic, Enbumyst",
        desc: "Enbumyst (bumetanide nasal spray) developed as an alternative for certain heart failure patients.",
         link:"rarewebsitedetails/full medicine .html "

      },
      {
        img: "https://img.freepik.com/free-vector/vaccine-composition-white-background_1308-4229.jpg",
        title: "Moderna’s 2025–2026 COVID-19 Vaccines Receive FDA Approval",
        desc: "Formulations designed to address emerging variants with new mRNA techniques.", 
         link:"rarewebsitedetails/full medicine .html "
      },
      {
        img: "https://img.freepik.com/premium-photo/dna-helix-molecule-scientific-genetic-medicine-background-3d-illustration_317396-999.jpg",
        title: "FDA Approves First-in-Class Therapy for Hereditary Angioedema",
        desc: "Dawnzera (Donidalorsen) is now approved for rare, severe genetic forms of angioedema.",
         link:"rarewebsitedetails/full medicine .html "
      },
      {
        img: "https://img.freepik.com/premium-vector/doctor-symptoms-list-flat-style-design-health-body-care-illustration-hospital-medicine-vector_22052-2106.jpg",
        title: "Advanced Systemic Mastocytosis (AdvSM): Symptoms, Diagnosis & Treatment Options",
        desc: "Diagnosis now includes advanced genetic and imaging methods for more effective management.",
         link:"rarewebsitedetails/full medicine .html "
      },
      {
        img: "https://img.freepik.com/free-vector/pharmaceutical-ads-template_88163-153.jpg",
        title: "How is Ayvakit (avapritinib) Effective in PDGFRA GIST Treatment",
        desc: "Ayvakit, supplied under the brand Ayvakyn, demonstrates strong efficacy for rare GIST forms.",
         link:"rarewebsitedetails/full medicine .html "
      },
      {
        img: "https://img.freepik.com/premium-photo/lung-inside-human-body-isolated-black-background-3d-illustration_786527-6107.jpg",
        title: "Extensive-Stage Small Cell Lung Cancer (ES-SCLC): Symptoms, Causes, & Treatment",
        desc: "Small-cell lung cancer (SCLC) makes up about 15% of all lung cancers and progresses rapidly.",
         link:"rarewebsitedetails/full medicine .html "
      },
      {
        img: "https://img.freepik.com/premium-vector/breast-cancer-awareness-pink-ribbon-colourful-background-vector-illustration_120819-44.jpg",
        title: "Advanced or Metastatic HR+, HER2- Breast Cancer: Symptoms, Risk Factors, and Treatment",
        desc: "The latest therapies for HR+, HER2- advanced breast cancer improve survival and patient quality of life.",
         link:"rarewebsitedetails/full medicine .html "
      },
      {
        img: "https://img.freepik.com/premium-photo/medical-doctor-working-modern-clinic_1048944-5530925.jpg",
        title: "Precision Oncology: The Next Leap in Personalized Cancer Treatment",
        desc: "Targeted therapies now enable precise intervention for genetic, molecular cancer drivers.",
         link:"rarewebsitedetails/full medicine .html "
      },
      {
        img: "https://img.freepik.com/free-vector/laboratory-research-scientist-equipment-science-background-vector_53876-116610.jpg",
        title: "India Scales CAR-T Therapy Approvals in 2025",
        desc: "Regulators speed up institutional review and expansion of cutting-edge therapies for rare cancers.",
         link:"rarewebsitedetails/full medicine .html "
        //  link: "https://www.apple.com/in/iphone-15/",
      },
      {
        img: "https://img.freepik.com/free-vector/medical-health-banner-template-design_1017-31838.jpg",
        title: "Explained: What is a Named Patient Program for Medicines?",
        desc: "A brief about global legal access for unapproved or rare medicines under named patient pathways.",
         link:"rarewebsitedetails/full medicine .html "
      }
  // ...more news items (add the rest from your list)
];

const itemsPerPage = 6;

export default function PharmaNews() {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(newsData.length / itemsPerPage);

  const shownNews = newsData.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-center text-[#28519c] text-3xl md:text-4xl font-bold mt-5 mb-10">
        Medical & Pharma News
      </h2>
      <div className="grid md:grid-cols-3 gap-8 news-grid">
        {shownNews.map((n, i) => (
          <div key={n.title + i} className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
            <img
              src={n.img}
              alt={n.title}
              className="h-44 object-cover w-full"
              onError={e => (e.target.src = "https://placehold.co/400x180/DFE6EF/707A8A?text=No+Image")}
            />
            <div className="flex-1 flex flex-col p-5">
              <div className="font-semibold text-lg text-blue-900 mb-2">{n.title}</div>
              <div className="text-gray-600 flex-1 mb-3">{n.desc}</div>
              {n.link && (
                <a
                  href={n.link}
                  className="mt-auto inline-block bg-blue-100 text-blue-700 font-medium text-sm px-5 py-2 rounded hover:bg-blue-200 transition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read More
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center gap-2 mt-10 pagination">
        <button
          className="px-3 py-1 mx-1 rounded border border-gray-300 font-semibold text-sm disabled:opacity-40"
          onClick={() => setPage(p => Math.max(1, p - 1))}
          disabled={page === 1}
        >
          &laquo; Prev
        </button>
        {/* Up to 5 pages visible */}
        {Array.from({ length: totalPages }, (_, idx) => idx + 1)
          .filter(
            p =>
              p === 1 ||
              p === totalPages ||
              (p >= page - 2 && p <= page + 2)
          )
          .map(p => (
            <button
              key={p}
              className={`px-3 py-1 mx-1 rounded font-bold text-sm ${
                page === p
                  ? "bg-blue-700 text-white"
                  : "border border-gray-300 bg-white text-gray-900 hover:bg-blue-100"
              }`}
              onClick={() => setPage(p)}
              disabled={page === p}
            >
              {p}
            </button>
          ))}
        <button
          className="px-3 py-1 mx-1 rounded border border-gray-300 font-semibold text-sm disabled:opacity-40"
          onClick={() => setPage(p => Math.min(totalPages, p + 1))}
          disabled={page === totalPages}
        >
          Next &raquo;
        </button>
      </div>
    </div>
  );
}
