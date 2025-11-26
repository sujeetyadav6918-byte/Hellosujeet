import React, { useEffect, useRef, useState } from "react";

// Related products sample
const relatedProducts = [
  { name: "Krazati", image: "/website.imge/Krazati-adagrasib-250-rc8hcaxqskkikzy0niv38t82mgzzhrm5znh0r2kz0k.webp", url: "/product/krazati" },
  { name: "Lynozyfic", image: "/website.imge/Lynozyfic.jpg.webp", url: "/product/lynozyfic" },
  { name: "Entadfi", image: "/website.imge/Entadfi.webp", url: "/product/entadfi" },
  // Add more products!
];

// Content for each tab
const tabContent = [
  {
    label: "Medical uses",
    content: (
      <>
     <p className="mb-3 text-black-900 text-red-500" > <b > Medical uses</b>  </p>

        <p className="mb-3 text-gray-700 text-sm">
          Lunsumio (mosunetuzumab-axgb) is used to treat adult patients with relapsed/refractory follicular lymphoma after multiple lines of systemic therapy.

        </p>
        <p className="mb-3 text-gray=700 text-sm">Note: The conditional approval is based on the response rate. Studies are going on to establish how well the medicine works.</p>
        <p className="mb-3 text-gray=700 text-sm">Recommended Dosage:  Premedicate prior to each dose in Cycle 1 and 2 to reduce the risk of cytokine release syndrome (CRS) and infusion-related reactions. Administer only as an intravenous (IV) infusion. Each cycle is 21 days. The recommended dosage regimen of Lunsumio is as follows:.</p>
        <ul className="list-disc pl-6 text-gray-700 text-sm mb-3">
          <li>Cycle 1 (Day 1): 1 mg administered intravenously over at least 4 hours.</li>
          <li>Cycle 1 (Day 8): 2 mg administered intravenously over at least 4 hours.</li>
          <li>Cycle 1 (Day 15): 60 mg administered intravenously over at least 4 hours.</li>
          <li>Cycle 2 (Day 1): 60 mg administered intravenously over 2 hours if infusion in Cycle 1 was well-tolerated</li>
          <li>Cycle 3 and subsequent cycles (Day 1): 30 mg administered intravenously over 2 hours if infusion in Cycle 1 was well-tolerated</li>
        </ul>
        <p className="mb-3 text-gray=700 text-sm">
            Continue for 8 cycles, unless respective patients experience unacceptable toxicity or disease progression. For those who reach a complete response, no further treatment of more than 8 cycles is required. For those who reach a partial response or have stable disease in response following 8 cycles, an additional 9 cycles (total 17 cycles) need to be given, unless a patient experiences any unacceptable toxicity or in case of disease progression. 
        </p>
      </>
    )
  },
  {
    label: "Warning & Precautions",
    content: (
      <>
      <p className="mb-3 text-black-900  text-red-500 " > <b > Warning & Precautions</b>  </p>
        <p className="mb-3 text-gray-700 text-sm">
          May cause Cytokine Release Syndrome, neurological toxicities, infections. Monitor closely during infusion. Premedicate per protocol.
        </p>
        <ul className="list-disc pl-6 text-gray-700 text-sm mb-3">
             <li> Lunsumio treatment can cause cytokine release syndrome (CRS), including serious or hazardous reactions. Those who experience CRS (or other side effects that impair consciousness) should be assessed and instructed not to drive and to refrain from operating machinery until resolution. </li>
<li>Therapy with mosunetuzumab can cause serious neurologic toxicity, including Immune Effector Cell-Associated Neurotoxicity Syndrome (ICANS). Assess patients for neurologic toxicity during treatment. At the initial sign of neurologic toxicity, including ICANS, promptly assess the patient, and consider neurology assessment as required.</li>
<li>Lunsumio 1 mg/30 mg can be responsible for causing severe or fatal infections. Monitor patients for signs and symptoms of infection before and throughout the treatment and treat effectively. It should not be used in the presence of current or active infection.</li>
<li>Lunsumio injection can be responsible for causing severe or critical cytopenias, including anemia, neutropenia, and thrombocytopenia. Monitor complete blood counts (CBC) throughout therapy. On behalf of the severity of cytopenias, temporarily interrupt, or permanently stop treatment.  </li>
<li>Lunsumio can cause critical tumor flare. All those with bulky tumors located in near proximity to airways or a vital organ need to be monitored precisely during the first therapy. Monitor patients for compression or obstruction because of mass effect secondary to tumor flare. </li>
<li>As per the mechanism of action, this drug may cause fetal harm if administered to a pregnant woman. Females of reproductive age/potential should use suitable contraception ways during treatment and for 3 months following the last dose.</li>
        </ul>
      </>
    )
  },
  {
    label: "Documentation & Availability",
    content: (
      <>
      <p className="mb-3 text-black-900  text-red-500 " > <b > Documentation & Availability</b>  </p>
       <p className="mb-3 text-gray-700 text-sm"> What documents are required to import LUNSUMIO to India?</p>
<p className="mb-3 text-gray-700 text-sm ">LUNSUMIO (mosunetuzumab-axgb) injection can be imported by patients or government hospitals on the name of the patients only. </p>

<p className="mb-3 text-gray-700 text-sm">The following documentation is required to import the product:</p>
        <ul className="list-disc pl-6 text-gray-700 text-sm mb-3">
        <li>A valid prescription from a qualified doctor.</li>
<li>Patients diagnostic reports</li>
<li>Patients ID proof (issued by the government of India) </li>
        </ul>
     <p className="mb-3 text-gray-700 text-sm"> How does the order be confirmed?</p>
     <p className="mb-3 text-gray-700 text-sm"> The order will be confirmed only after the receipt of:</p>

     <ul className="list-disc pl-6 text-gray-700 text-sm mb-3"> <li>A valid prescription from Doctor </li>
     <li>Import permit if applicable
</li></ul>

     <p className="mb-3 text-gray-700 text-sm"> Is LUNSUMIO available in India?
</p>
     <p className="mb-3 text-gray-700 text-sm">LUNSUMIO (mosunetuzumab-axgb injection) is a (prescription drug, prescription medication, or prescription medicine) pharmaceutical drug that legally requires a medical prescription to be dispensed.

 </p>
     <p className="mb-3 text-gray-700 text-sm">IPN (Indian Pharma Network) helps import cancer medicines on the named patient supply (NPS). Indian Pharma Network is the facilitator providing input

 </p>


     
     <ul className="list-disc pl-6 text-gray-700 text-sm mb-1"> <li>On availability of Lunsumio in India (Mumbai, Kolkata, Hyderabad, Chennai, Ahmedabad, Delhi, Bangalore, Pune etc.)
Medicine Price.</li><li>Medicine Price. </li>
     <li>Finding Genuine and reliable sources from the USA, Canada, Europe, and Australia</li> </ul>

     
     <p className="mb-3 text-gray-700 text-sm">Ensuring 100% transparency. </p>
     <p className="mb-3 text-gray-700 text-sm"> LUNSUMIO can be made available to patients, doctors, and hospitals in Mumbai, Kolkata, Hyderabad, Chennai, Ahmedabad, Delhi, Bangalore, Srinagar, Jammu, Jaipur, Chandigarh, Ludhiana, Noida, Gurgaon, Lucknow, and Pune and other cities in India. The order will be confirmed only after the receipt of a valid prescription from the doctor and an import permit.</p>
     <p className="mb-3 text-gray-700 text-sm">IPN (Indian Pharma Network) can facilitate the supply of LUNSUMIO (prescription medicines) to all locations in the world and in India after fulfilling the legal requirement (if applicable) </p>
     
     <p className="mb-3 text-gray-700 text-sm"> Please contact +91-8928638767| or write us at Rarepharmasupply@gmail.com for Lunsumio 1 mg/30 mg price in India. 

</p>
 <p className="mb-3 text-gray-700 text-sm">We take to guarantee quality and delivery anywhere in the world as per the buyer’s requirements.

</p>
     

        
      </>
    )
  },
  {
    label: "Sourcing & Delivery",
    content: (
      <>

      <p className="mb-3 text-black-900  text-red-500 " > <b > Sourcing & Delivery</b>  </p>
        <p className="mb-3 text-gray-700 text-sm">
Indian Pharma Network is able to source the LUNSUMIO (Cancer Treatment Medicines) from across the globe and has the ability to supply. Indian Pharma offers its customers worldwide access to the best available treatment.

        </p>
         <p className="mb-3 text-gray-700 text-sm">Indian Pharma Network (IPN) is able to dispense any valid prescription in the shortest possible time. All prescriptions are dispensed and checked by registered pharmacists and dispatched to the Patient’s address only from New Delhi, India.

</p>
   
      </>
    )
  },
  {
    label: "FAQ",
    content: (
      <>
      <p className="mb-3 text-black-900  text-red-500 " > <b > FAQ</b>  </p>
        <p className="mb-3 text-gray-700 text-sm">
          <b>Q:</b> What is the Generic Name for the trade name drug Lunsumio®? <br /><b>A:</b>Mosunetuzumab-axgb is a Generic Name for the trade name drug Lunsumio®.
        </p>
         <p className="mb-3 text-gray-700 text-sm">
          <b>Q:What is the Manufacturer’s Name of Lunsumio®?
 </b> <br /><b>A: Lunsumio® is manufactured by Genentech, Inc.

</b>
        </p>
         <p className="mb-3 text-gray-700 text-sm">
          <b>Q: Is Lunsumio® approved by the FDA?
</b> <br /><b>A:Yes, Lunsumio® is approved by the FDA. Date of approval: December 22, 2022.

 </b>
        </p>
         <p className="mb-3 text-gray-700 text-sm">
          <b>Q:Where can I get Lunsumio® at the best price in India?
 </b> <br /><b>A: To get the best Lunsumio price in India, kindly connect with the Indian Pharma Network (a WHO GDP & ISO 9001:2008 certified company). For Lunsumio®, a medical prescription is required from a treating physician.

</b>
        </p>
         <p className="mb-3 text-gray-700 text-sm">
          <b>Q: What is the dosage and form of Lunsumio® supplied?
</b> <br /><b>A: Lunsumio® is supplied as Injections: 1 mg/mL and 30 mg/30 mL (1 mg/mL) solution in a single-dose vial for intravenous administration. 

</b>
        </p>
         <p className="mb-3 text-gray-700 text-sm">
          <b>Q:What are the most common side effects of Lunsumio®? 
 </b> <br /><b>A: </b>
        </p> <p className="mb-3 text-gray-700 text-sm">
          <b>Q: What are the most common side effects of Lunsumio®? 
</b> <br /><b>A: The most common side effects of Lunsumio® are rash, cytokine release syndrome, pyrexia, fatigue, and headache. 

</b>
        </p>
 <p className="mb-3 text-gray-700 text-sm">
          <b>Q:How much does Lunsumio® cost in India?
 </b> <br /><b>A:The cost of Lunsumio in India can vary. In order to procure this follicular lymphoma medication legally, you can Call or WhatsApp +91-9310090915 or send mail to info@indianpharmanetwork.in

 </b>
        </p>
 <p className="mb-3 text-gray-700 text-sm">
          <b>Q: What are the storage conditions of Lunsumio®?
</b> <br /><b>A:Store refrigerated at 2-8°C (36-46°F) in the original carton to protect from light. It is not advisable to freeze or shake it. 

 </b>
        </p>
 <p className="mb-3 text-gray-700 text-sm">
          <b>Q:Is it safe to buy Lunsumio® online in India?
 </b> <br /><b>A:Yes, one can buy Lunsumio online in India at the lowest price from the Indian Pharma Network (IPN) if the medicine Lunsumio® is not (yet) registered or available in their country. We can help facilitate the supply of Lunsumio® through legal channels. 

 </b>
        </p>
 
   












        {/* <ul className="list-disc pl-6 text-gray-700 text-sm mb-3">
          <li><b>Q:</b> How is it given? <b>A:</b> Intravenous infusion in hospital.</li>
          <li><b>Q:</b> How do I get support? <b>A:</b> Contact below.</li>
        </ul> */}
      </>
    )
  }
];

// Auto-scroll slider
function autoScroll(ref, interval = 3000) {
  useEffect(() => {
    const slider = ref.current;
    let idx = 0;
    const intervalId = setInterval(() => {
      if (!slider) return;
      idx = (idx + 1) % relatedProducts.length;
      slider.scrollTo({
        left: idx * 220,
        behavior: "smooth"
      });
    }, interval);

    return () => clearInterval(intervalId);
  }, [ref]);
}

const contactInfo = (
  <div>
    <h2 className="text-lg font-bold mb-3">Contact Patient Support</h2>
    <div className="flex flex-col space-y-2 text-sm">
      <div>
        <div className="font-semibold text-gray-600">📧 Email</div>
        <a href="mailto:info@indianpharmanetwork.in" className="text-blue-700">sujeetyadav6918@gmail.com</a>
      </div>
      <div>
        <div className="font-semibold text-gray-600">📞 Call</div>
        <a href="tel:8928638767" className="text-blue-700">+91-8928638767</a>
      </div>
      <div>
        <div className="font-semibold text-gray-600">💬 Whatsapp</div>
        <a href="https://wa.me/8928638767" target="_blank" rel="noopener noreferrer" className="text-blue-700">+91-8928638767</a>
      </div>
    </div>
  </div>
);

const LunsumioPage = () => {
  const scrollRef = useRef(null);
  const [activeTab, setActiveTab] = useState(0);
  const [showPopup, setShowPopup] = useState(false);

  autoScroll(scrollRef);

  return (
    <div className="bg-white min-h-screen px-4 py-8">
      <div className="max-w-3xl mx-auto">
        {/* Top Section */}
        <div className="md:flex md:items-start mb-8">
          <img
            src="/website.imge/Lunsumio-Mosunetuzumab-axgb-250-rc8hcaxqskkikzy0niv38t82mgzzhrm5znh0r2kz0k.webp"
            alt="Lunsumio"
            className="w-40 h-52 object-contain rounded shadow mx-auto md:mx-0 md:mr-6"
          />
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-red-700 mb-4">Lunsumio (Mosunetuzumab-axgb)</h1>
            <ul className="bg-gray-50 border rounded p-4 mb-2 text-sm">
              <li><b>Medicine Name:</b> Lunsumio</li>
              <li><b>Generic Name:</b> Mosunetuzumab-axgb</li>
              <li><b>Dosage Form & Strength:</b> Injection: 1 mg/mL and 30 mg/30 mL</li>
              <li><b>Manufactured By:</b> Genentech, Inc.</li>
            </ul>
            <button
              className="bg-gray-600 text-white px-5 py-2 rounded mt-2 shadow hover:bg-gray-700 cursor-pointer"
              onClick={() => setShowPopup(true)}
            >
              Submit an Enquiry
            </button>
          </div>
        </div>

       
        {/* Tabs Section */} 
        
<div className="border-b mb-6">
  {/* For desktop/laptop (inline tabs) */}
  <nav className="hidden sm:flex space-x-6 text-sm font-semibold">
    {tabContent.map((tab, idx) => (
      <button
        key={tab.label}
        className={`pb-1 focus:outline-none ${activeTab === idx
          ? "text-red-700 border-b-2 border-red-700"
          : "text-gray-700"}`}
        style={{ background: "none", border: "none", cursor: "pointer" }}
        onClick={() => setActiveTab(idx)}
      >
        {tab.label}
      </button>
    ))}
  </nav>
  {/* For mobile (vertical tabs) */}
  <nav className="flex flex-col sm:hidden">
    {tabContent.map((tab, idx) => (
      <button
        key={tab.label}
        className={`text-left py-2 px-2 border-b text-sm font-semibold whitespace-normal ${
          activeTab === idx
            ? "text-red-700 border-red-700 bg-red-50 font-bold"
            : "text-gray-700"
        }`}
        style={{ background: "none", border: "none", cursor: "pointer" }}
        onClick={() => setActiveTab(idx)}
      >
        {tab.label}
      </button>
    ))}
  </nav>
</div>  
     
       

        {/* Tab Content (Dynamic) */}
        <div>{tabContent[activeTab].content}</div>

        {/* Contact Support */}
        <div className="border rounded mt-10 p-5 bg-gray-50">
          {contactInfo}
        </div>

        {/* Disclaimer */}
        <div className="mt-10 text-xs text-gray-500">
          <b>Disclaimer:</b> All Trademarks and Brands belong to owners. indianpharmanetwork does not claim ownership. Information only provided.
        </div>

        {/* Related Products Slider */}
        <div className="mt-14">
          <h3 className="text-xl mb-6 font-bold text-blue-700">Related Products</h3>
          <div
            ref={scrollRef}
            className="flex overflow-x-auto space-x-6 pb-2"
            style={{ scrollBehavior: "smooth" }}
          >
            {relatedProducts.map((prod, idx) => (
              <a
                key={prod.name}
                href={prod.url}
                className="min-w-[210px] max-w-[220px] bg-white shadow rounded-lg border hover:scale-105 transition p-3 flex-shrink-0 block text-center"
              >
                <img
                  src={prod.image}
                  alt={prod.name}
                  className="h-24 mx-auto mb-2 object-contain"
                />
                <div className="font-bold text-gray-700">{prod.name}</div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Enquiry Popup */}
      {showPopup && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-40"
          onClick={() => setShowPopup(false)}
        >
          <div
            className="bg-white rounded-lg p-8 max-w-md mx-auto shadow-lg relative z-50"
            onClick={e => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-3 text-gray-400 text-xl font-bold"
              onClick={() => setShowPopup(false)}
            >
              &times;
            </button>
            <h2 className="text-xl font-bold mb-4 text-blue-700">Contact Support</h2>
            <div className="mb-2">
              For all enquiries, please use the details below:
            </div>
            {contactInfo}
            <div className="mt-3 text-xs text-gray-600">
              We reply within 24 hours (Mon–Fri 9:00–18:00 IST)
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LunsumioPage;
