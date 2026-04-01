import React, { useState } from "react";
import { Menu, SlidersHorizontal } from "lucide-react";
import { useTranslation } from "react-i18next";
import ProductCard from "./components/ProductCard";
import SidebarFilters from "./components/SidebarFilters";
import productsData from "./data/products.json";

const Collection = () => {
  const { t, i18n } = useTranslation();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const currentLang = i18n.language.split("-")[0];

  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a] text-[#1a1a1a] dark:text-gray-100 antialiased transition-colors duration-500">
      {/* Container موحد ومطابق لمشروعك */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        {/* Header Section */}
        <header className="border-b border-gray-100 dark:border-zinc-800 pb-6">
          <div
            className={`flex flex-col md:flex-row justify-between items-end gap-6 ${
              currentLang === "ar" ? "md:flex-row-reverse" : ""
            }`}
          >
            <div
              className={`max-w-2xl w-full ${
                currentLang === "ar" ? "text-right" : "text-left"
              }`}
            >
              <nav
                className={`text-[10px] tracking-[0.2em] uppercase text-gray-400 mb-4 flex gap-2 ${
                  currentLang === "ar" ? "justify-end" : "justify-start"
                }`}
              >
                <span>{t("Home")}</span> /{" "}
                <span className="text-black dark:text-white font-bold">
                  {t("Collection")}
                </span>
              </nav>
              <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-4 uppercase italic">
                {t("Summer")}{" "}
                <span className="font-light not-italic text-gray-400">26'</span>
              </h1>
              <p className="text-gray-500 dark:text-zinc-400 text-lg font-light leading-relaxed">
                {t(
                  "A meticulously curated selection of premium essentials, designed for quiet luxury."
                )}
              </p>
            </div>

            {/* Desktop Filter Toggle */}
            <div
              className={`hidden md:flex items-center gap-8 border-t md:border-t-0 pt-4 w-full md:w-auto justify-between ${
                currentLang === "ar" ? "flex-row-reverse" : ""
              }`}
            >
              <div
                className={`flex items-center gap-2 ${
                  currentLang === "ar" ? "flex-row-reverse" : ""
                }`}
              >
                <span className="text-3xl font-bold">
                  {productsData.length}
                </span>
                <span
                  className={`text-[10px] uppercase tracking-widest text-gray-400 leading-none ${
                    currentLang === "ar" ? "text-right" : "text-left"
                  }`}
                >
                  {t("Items")}
                  <br />
                  {t("Total")}
                </span>
              </div>

              <button
                onClick={() => setIsFilterOpen(true)}
                className="group flex items-center gap-3 bg-black dark:bg-white text-white dark:text-black px-8 py-4 rounded-full hover:scale-105 transition-all duration-300 shadow-xl"
              >
                <SlidersHorizontal size={18} />
                <span className="text-sm font-bold uppercase tracking-wider">
                  {t("Filters")}
                </span>
              </button>
            </div>
          </div>
        </header>

        {/* Mobile Filter Button */}
        <div className="md:hidden sticky top-4 z-40 mb-8 mt-4">
          <button
            onClick={() => setIsFilterOpen(true)}
            className="w-full flex items-center justify-between p-4 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border border-gray-200 dark:border-zinc-800 rounded-xl shadow-lg"
          >
            <span className="font-bold uppercase tracking-widest text-sm">
              {t("Filters")}
            </span>
            <Menu size={20} />
          </button>
        </div>

        {/* Main Content Area */}
        <div
          className={`flex flex-col md:flex-row gap-8 mt-10 ${
            currentLang === "ar" ? "md:flex-row-reverse" : ""
          }`}
        >
          {/* Sidebar */}
          <SidebarFilters
            isOpen={isFilterOpen}
            onClose={() => setIsFilterOpen(false)}
          />

          {/* Main Products Grid */}
          <main className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-12">
              {productsData.map((product, index) => (
                <div
                  key={product.id}
                  className="reveal-animation"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <ProductCard product={product} />
                </div>
              ))}
            </div>

            {/* Pagination Replacement */}
            {productsData.length > 0 && (
              <div className="flex flex-col items-center justify-center border-t border-gray-100 dark:border-zinc-900 pt-12 mt-16">
                <p className="text-gray-400 text-sm mb-6 uppercase tracking-[0.3em]">
                  {t("Showing")} {productsData.length} {t("of")}{" "}
                  {productsData.length} {t("Products")}
                </p>
                <div className="w-64 h-[2px] bg-gray-100 dark:bg-zinc-800 relative">
                  <div className="absolute inset-0 bg-black dark:bg-white w-full transition-all duration-1000"></div>
                </div>

                <button
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                  className="mt-10 group flex flex-col items-center gap-2"
                >
                  <span className="text-xs font-black uppercase tracking-widest group-hover:mb-2 transition-all">
                    {t("Back to Top")}
                  </span>
                  <div className="w-[1px] h-12 bg-black dark:bg-zinc-700 group-hover:h-16 transition-all"></div>
                </button>
              </div>
            )}
          </main>
        </div>
      </div>

      {/* Footer (البسيط الذي أدرجته أنت) */}
      <footer className="py-10 bg-gray-50 dark:bg-zinc-950 border-t border-gray-100 dark:border-zinc-900 mt-20">
        <div className="text-center">
          <h2 className="text-2xl font-black italic mb-2">MINIMALIST.</h2>
          <p className="text-[10px] text-gray-400 tracking-[0.5em] uppercase">
            {t("© 2026 E-commerce Experience")}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Collection;
