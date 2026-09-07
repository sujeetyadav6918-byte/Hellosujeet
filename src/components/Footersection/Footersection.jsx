import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
} from "lucide-react";

const quickLinks = [
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Medicines Directory", href: "/global-medicines" },
  { name: "Contact Us", href: "/contact" },
];

const socialLinks = [
  {
    name: "Facebook",
    href: "#",
    icon: Facebook,
    hover: "hover:text-blue-400 hover:border-blue-400/40 hover:bg-blue-400/10",
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/919768640067",
    icon: Phone,
    hover: "hover:text-green-400 hover:border-green-400/40 hover:bg-green-400/10",
  },
  {
    name: "Instagram",
    href: "#",
    icon: Instagram,
    hover: "hover:text-pink-400 hover:border-pink-400/40 hover:bg-pink-400/10",
  },
];

const FooterSection = () => {
  return (
    <footer
      id="footer"
      className="relative bg-[#04122b] text-white overflow-hidden"
    >
      {/* Ambient gradient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-64 w-[42rem] rounded-full bg-[#ff8706]/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-blue-500/5 blur-3xl"
      />

      {/* Top accent line */}
      <div className="h-1 w-full bg-gradient-to-r from-transparent via-[#ff8706]/60 to-transparent" />

      <div className="relative container mx-auto px-6 md:px-16 py-16">
        {/* ================= FOOTER GRID ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* ================= BRAND ================= */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              {/* Logo */}
              <svg
                className="w-11 h-11 shrink-0 drop-shadow-[0_4px_12px_rgba(255,135,6,0.25)]"
                viewBox="0 0 100 100"
                aria-label="Rare Pharma Supply Logo"
              >
                <path d="M50 95 C20 75,20 35,50 55" fill="#062042" />
                <path d="M50 95 C80 75,80 35,50 55" fill="#062042" />
                <path
                  d="M50 95 C30 85,35 55,50 70"
                  fill="#062042"
                  opacity="0.7"
                />
                <path
                  d="M50 95 C70 85,65 55,50 70"
                  fill="#062042"
                  opacity="0.7"
                />
                <path
                  d="M50 70 C40 50,40 20,50 10 C60 20,60 50,50 70 Z"
                  fill="#ff8706"
                />
              </svg>

              <span className="text-base font-bold tracking-wide">
                RAREPHARMASUPPLY
              </span>
            </div>

            <p className="text-gray-300/90 leading-relaxed mb-6 max-w-sm">
              Your trusted partner in sourcing and importing specialty
              medicines for cancer, rare diseases, and other critical
              conditions.
            </p>

            {/* Social Media */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className={`flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-gray-300 transition-all duration-300 ${social.hover}`}
                  >
                    <Icon className="w-[18px] h-[18px]" strokeWidth={2} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* ================= QUICK LINKS ================= */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/90 mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center text-gray-300 transition-colors duration-300 hover:text-[#ff8706]"
                  >
                    <span className="mr-0 h-px w-0 bg-[#ff8706] transition-all duration-300 group-hover:mr-2 group-hover:w-4" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ================= CONTACT ================= */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/90 mb-5">
              Contact Us
            </h3>

            <ul className="space-y-4 text-gray-300">
              {/* Email */}
              <li className="flex items-start gap-3">
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/5 text-[#ff8706]">
                  <Mail className="w-4 h-4" strokeWidth={2} />
                </span>
                <a
                  href="mailto:rarepharmasupply@gmail.com"
                  className="hover:text-[#ff8706] transition-colors break-all leading-7"
                >
                  rarepharmasupply@gmail.com
                </a>
              </li>

              {/* Phone */}
              <li className="flex items-center gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/5 text-[#ff8706]">
                  <Phone className="w-4 h-4" strokeWidth={2} />
                </span>
                <a
                  href="tel:+919768640067"
                  className="hover:text-[#ff8706] transition-colors"
                >
                  +91 9768640067
                </a>
              </li>

              {/* Location */}
              <li className="flex items-start gap-3">
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/5 text-[#ff8706]">
                  <MapPin className="w-4 h-4" strokeWidth={2} />
                </span>
                <span className="leading-7">
                  Mumbai, Maharashtra, India
                </span>
              </li>
            </ul>
          </div>

          {/* ================= DISCLAIMER ================= */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/90 mb-5">
              Disclaimer
            </h3>

            <p className="text-sm text-gray-400 leading-relaxed">
              We are a service provider facilitating access to medicines
              through legal channels. We are not a manufacturer or an
              authorized distributor of these products.
            </p>
          </div>
        </div>

        {/* ================= DIVIDER ================= */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-500 text-center md:text-left">
              © {new Date().getFullYear()} Rare Pharma Supply.
              All Rights Reserved.
            </p>

            <p className="text-sm text-gray-500">
              Specialty Medicines • Rare Diseases • Oncology
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
