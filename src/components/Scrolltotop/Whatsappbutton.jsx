import React from "react";

export default function WhatsAppButton() {
  const whatsappNumber = "919768640067"; // apna full international number
  const message = "Hi Rare Pharma Supply, I need help with medicine.";
  const encoded = encodeURIComponent(message);

  const url = `https://wa.me/${919768640067}?text=${"Hi Rare Pharma Supply,need help with medicine"}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-20 right-5 z-50 flex items-center justify-center w-12 h-12 rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 transition"
      aria-label="Chat on WhatsApp"
    >
      {/* Simple WhatsApp icon (SVG) */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-7 h-7"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12.04 2C6.59 2 2.25 6.34 2.25 11.79c0 2.08.6 4.02 1.75 5.72L2 22l4.64-1.97c1.62.89 3.45 1.35 5.4 1.35 5.45 0 9.79-4.34 9.79-9.79C21.83 6.34 17.49 2 12.04 2zm0 17.44c-1.7 0-3.35-.46-4.79-1.33l-.34-.2-2.75 1.17 1.04-2.83-.22-.29a7.6 7.6 0 01-1.47-4.53c0-4.21 3.43-7.64 7.64-7.64 4.2 0 7.63 3.43 7.63 7.64 0 4.21-3.43 7.64-7.64 7.64zm4.21-5.3c-.23-.12-1.36-.67-1.57-.74-.21-.08-.36-.12-.51.12-.15.23-.59.74-.72.9-.13.15-.27.17-.5.06-.23-.12-.96-.35-1.82-1.11-.67-.6-1.12-1.35-1.25-1.57-.13-.23-.01-.35.1-.47.1-.1.23-.27.35-.4.12-.13.15-.23.23-.38.08-.15.04-.29-.02-.4-.06-.12-.51-1.24-.7-1.7-.18-.44-.36-.38-.51-.38h-.43c-.15 0-.4.06-.61.29-.21.23-.8.78-.8 1.9 0 1.12.82 2.2.93 2.35.12.15 1.6 2.44 3.88 3.42.54.23.96.37 1.29.47.54.17 1.02.15 1.4.09.43-.06 1.36-.56 1.55-1.1.19-.54.19-1 .13-1.1-.06-.1-.21-.16-.44-.27z" />
      </svg>
    </a>
  );
}
