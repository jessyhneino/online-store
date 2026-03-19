import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Twitter, Facebook, ArrowRight } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200 relative shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] ">
      {" "}
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Top Section: Brand + Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-4 border-b border-gray-200">
          <div className="lg:col-span-5 space-y-6">
            <Link
              to="/"
              className="text-3xl font-extrabold tracking-tight flex items-center gap-1"
            >
              <span className="bg-black text-white px-2 py-0.5 rounded">A</span>
              <span>
                TELIER <span className="font-light text-blue-600">LUXE</span>
              </span>
            </Link>
            <p className="text-gray-600 text-sm max-w-sm leading-relaxed">
              Creating timeless pieces that blend modern elegance with
              exceptional quality. Join our world to receive the latest
              collections.
            </p>
            {/* Newsletter Input */}
            <div className="relative max-w-md group">
              <input
                type="email"
                placeholder="Your email"
                className="w-full border border-gray-300 rounded-lg bg-gray-50 px-4 py-3 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              />
              <button className="absolute right-0 top-1/2 -translate-y-1/2 p-2 hover:translate-x-1 transition-transform">
                <ArrowRight
                  size={18}
                  className="text-gray-400 group-focus-within:text-black"
                />
              </button>
            </div>
          </div>

          {/* Links Section */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-10">
            <FooterGroup title="Shop">
              <FooterLink to="#">New Arrivals</FooterLink>
              <FooterLink to="#">Best Sellers</FooterLink>
              <FooterLink to="#">Collections</FooterLink>
              <FooterLink to="#">Deals</FooterLink>
            </FooterGroup>

            <FooterGroup title="Support">
              <FooterLink to="#">Order Tracking</FooterLink>
              <FooterLink to="#">Shipping & Delivery</FooterLink>
              <FooterLink to="#">Return Policy</FooterLink>
              <FooterLink to="#">FAQ</FooterLink>
            </FooterGroup>

            <FooterGroup title="Connect">
              <div className="flex gap-4 pt-2">
                <SocialIcon icon={<Instagram size={18} />} />
                <SocialIcon icon={<Twitter size={18} />} />
                <SocialIcon icon={<Facebook size={18} />} />
              </div>
              <p className="text-xs text-gray-400 mt-4 font-light">
                info@atelierluxe.com
              </p>
            </FooterGroup>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] uppercase tracking-widest text-gray-400">
            © {year} ATELIER LUXE. All rights reserved.
          </p>
          <div className="flex gap-8 items-center">
            <LegalLink>Privacy</LegalLink>
            <LegalLink>Terms</LegalLink>
            <LegalLink>Files</LegalLink>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Sub-components
const FooterGroup = ({ title, children }) => (
  <div className="flex flex-col space-y-4">
    <h4 className="text-[11px] uppercase tracking-[0.2em] font-bold text-gray-900">
      {title}
    </h4>
    <div className="flex flex-col space-y-2.5">{children}</div>
  </div>
);

const FooterLink = ({ to, children }) => (
  <Link
    to={to}
    className="text-gray-600 text-sm hover:text-blue-600 transition-all duration-300 hover:translate-x-1"
  >
    {children}
  </Link>
);

const SocialIcon = ({ icon }) => (
  <button className="text-gray-400 hover:text-blue-600 transition-colors duration-300">
    {icon}
  </button>
);

const LegalLink = ({ children }) => (
  <span className="text-[10px] uppercase tracking-widest text-gray-400 hover:text-black cursor-pointer transition-colors">
    {children}
  </span>
);
