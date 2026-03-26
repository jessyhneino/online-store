import React from "react";
import { Phone, Mail, Instagram, Camera, Share2, MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";

const ContactPage = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-[#f8f9fa] dark:bg-zinc-900 py-6 px-6 sm:px-6 lg:px-8 font-sans text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <div className="max-w-6xl mx-auto md:mx-[110px]">
        {/* Header Section */}
        <header className="mb-16">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">
            {t("Connect with")} <br />
            <span className="text-blue-600 dark:text-blue-400 italic">
              {t("The Curators.")}
            </span>
          </h1>
          <p className="max-w-xl text-gray-500 dark:text-gray-400 text-lg leading-relaxed">
            {t(
              "Whether you're seeking product advice or have a question about your order, our dedicated concierge team is here to assist you with the same precision we apply to our collection."
            )}
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-4 space-y-8">
            {/* Info Card */}
            <div className="bg-[#f1f3f5] dark:bg-zinc-800 p-10 rounded-2xl space-y-10 transition-colors">
              <section>
                <h3 className="text-[10px] uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500 font-bold mb-4">
                  {t("Our Studio")}
                </h3>
                <p className="text-lg font-medium leading-snug text-gray-700 dark:text-gray-200">
                  1204 Editorial Heights
                  <br />
                  Design District, New York 10014
                </p>
              </section>

              <section>
                <h3 className="text-[10px] uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500 font-bold mb-4">
                  {t("Direct Channels")}
                </h3>
                <div className="space-y-3">
                  <a
                    href="tel:+12125550198"
                    className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    <Phone
                      size={18}
                      className="text-blue-600 dark:text-blue-400"
                    />
                    <span className="font-medium">+1 (212) 555-0198</span>
                  </a>
                  <a
                    href="mailto:concierge@thecurator.com"
                    className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    <Mail
                      size={18}
                      className="text-blue-600 dark:text-blue-400"
                    />
                    <span className="font-medium">
                      concierge@thecurator.com
                    </span>
                  </a>
                </div>
              </section>

              <section>
                <h3 className="text-[10px] uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500 font-bold mb-4">
                  {t("Follow Our Story")}
                </h3>
                <div className="flex gap-3">
                  {[Camera, Instagram, Share2].map((Icon, idx) => (
                    <button
                      key={idx}
                      className="p-3 bg-gray-200 dark:bg-zinc-700 rounded-lg hover:bg-gray-300 dark:hover:bg-zinc-600 transition-all text-gray-600 dark:text-gray-300"
                    >
                      <Icon size={20} />
                    </button>
                  ))}
                </div>
              </section>
            </div>

            {/* Map */}
            <div className="relative h-64 bg-gray-200 dark:bg-zinc-800 rounded-2xl overflow-hidden group cursor-pointer">
              <img
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1000"
                alt="Map Location"
                className="w-full h-full object-cover grayscale opacity-80 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-6 left-6 flex items-center gap-2 bg-white/90 dark:bg-zinc-900/80 backdrop-blur px-4 py-2 rounded-full shadow-sm">
                <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full animate-pulse"></div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-800 dark:text-gray-200">
                  {t("View on map")}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-8 bg-white dark:bg-zinc-800 rounded-3xl p-8 md:p-16 shadow-[0_20px_50px_rgba(0,0,0,0.05)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.6)] transition-colors">
            <form className="space-y-12">
              {/* Full Name */}
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500 font-bold">
                  {t("Full Name")}
                </label>
                <input
                  type="text"
                  placeholder={t("John Doe")}
                  className="w-full py-4 px-4 text-lg bg-gray-50 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-700 rounded-xl focus:bg-white dark:focus:bg-zinc-800 focus:border-blue-600 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-100 dark:focus:ring-blue-500/20 outline-none transition-all placeholder:text-gray-400 dark:placeholder:text-gray-500"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500 font-bold">
                  {t("Email Address")}
                </label>
                <input
                  type="email"
                  placeholder={t("john@example.com")}
                  className="w-full py-4 px-4 text-lg bg-gray-50 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-700 rounded-xl focus:bg-white dark:focus:bg-zinc-800 focus:border-blue-600 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-100 dark:focus:ring-blue-500/20 outline-none transition-all placeholder:text-gray-400 dark:placeholder:text-gray-500"
                />
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500 font-bold">
                  {t("Your Inquiry")}
                </label>
                <textarea
                  rows="4"
                  placeholder={t("How can we help you today?")}
                  className="w-full py-4 px-4 text-lg bg-gray-50 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-700 rounded-xl focus:bg-white dark:focus:bg-zinc-800 focus:border-blue-600 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-100 dark:focus:ring-blue-500/20 outline-none transition-all resize-none placeholder:text-gray-400 dark:placeholder:text-gray-500"
                ></textarea>
              </div>

              <button className="bg-[#1a73e8] hover:bg-blue-700 text-white font-bold py-5 px-10 rounded-xl transition-all transform hover:-translate-y-1 shadow-lg shadow-blue-200 dark:shadow-blue-900/40 uppercase tracking-widest text-xs">
                {t("Send Message")}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
