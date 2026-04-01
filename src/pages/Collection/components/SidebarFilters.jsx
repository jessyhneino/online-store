import React from "react";
import { X } from "lucide-react";
import { useTranslation } from "react-i18next";

const SidebarFilters = ({ isOpen, onClose }) => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language.split("-")[0];

  const categories = [
    t("Apparel"),
    t("Accessories"),
    t("Footwear"),
    t("Lifestyle"),
  ];

  const brands = [t("Aether"), t("Minimalist"), t("Vault"), t("Origin")];

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/20 backdrop-blur-sm z-40 transition-opacity md:hidden ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      <aside
        className={`fixed inset-x-0 bottom-0 z-50 bg-white border border-1 dark:bg-zinc-900 !p-5 rounded-t-3xl shadow-2xl dark:shadow-zinc-800/50 transition-transform duration-300 ease-in-out transform
          md:relative md:inset-auto md:p-0 md:bg-transparent md:shadow-none md:translate-y-0 md:block md:w-64
          ${isOpen ? "translate-y-0" : "translate-y-full md:translate-y-0"}
          space-y-6
        `}
      >
        {/* مقبض صغير للموبايل */}
        <div className="w-10 h-1.5 bg-gray-200 dark:bg-zinc-700 rounded-full mx-auto mb-4 md:hidden" />

        {/* زر إغلاق (يعكس مكانه حسب اللغة) */}
        <button
          className={`absolute top-4 md:hidden p-1.5 rounded-full hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors ${
            currentLang === "ar" ? "left-4" : "right-4"
          }`}
          onClick={onClose}
          aria-label="Close filters"
        >
          <X className="w-5 h-5 text-gray-700 dark:text-gray-300" />
        </button>

        {/* Categories */}
        <section
          className={`${currentLang === "ar" ? "text-right" : "text-left"}`}
        >
          <h3 className="font-bold text-[11px] uppercase tracking-[0.2em] mb-3 text-gray-400 dark:text-gray-500">
            {t("Categories")}
          </h3>
          <div className="space-y-2 md:space-y-3">
            {categories.map((cat) => (
              <label
                key={cat}
                className={`flex items-center gap-2.5 cursor-pointer group ${
                  currentLang === "ar" ? "flex-row-reverse justify-end" : ""
                }`}
              >
                <input
                  type="checkbox"
                  className="w-4 h-4 border-gray-300 dark:border-zinc-700 rounded accent-black dark:accent-blue-500"
                  defaultChecked={cat === t("Accessories")}
                />
                <span className="text-sm text-gray-600 dark:text-zinc-300 group-hover:text-black dark:group-hover:text-white transition-colors font-medium">
                  {cat}
                </span>
              </label>
            ))}
          </div>
        </section>

        {/* Price Range */}
        <section
          className={`${currentLang === "ar" ? "text-right" : "text-left"}`}
        >
          <h3 className="font-bold text-[11px] uppercase tracking-[0.2em] mb-3 text-gray-400 dark:text-gray-500">
            {t("Price Range")}
          </h3>
          <input
            type="range"
            className="w-full h-[3px] bg-gray-200 dark:bg-zinc-700 appearance-none cursor-pointer accent-blue-600"
          />
          <div
            className="flex justify-between text-[11px] mt-2 text-gray-500 dark:text-gray-400 font-medium"
            dir="ltr"
          >
            <span>$0</span>
            <span>$1000</span>
          </div>
        </section>

        {/* Brand Buttons */}
        <section
          className={`pb-4 md:pb-0 ${
            currentLang === "ar" ? "text-right" : "text-left"
          }`}
        >
          <h3 className="font-bold text-[11px] uppercase tracking-[0.2em] mb-3 text-gray-400 dark:text-gray-500">
            {t("Brand")}
          </h3>
          <div
            className={`flex flex-wrap gap-2 ${
              currentLang === "ar" ? "flex-row-reverse" : ""
            }`}
          >
            {brands.map((brand, i) => (
              <button
                key={brand}
                className={`px-5 py-2 rounded-full text-[11px] font-bold transition-all ${
                  i === 0
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-200 dark:shadow-blue-900/40"
                    : "bg-gray-100 text-gray-600 dark:bg-zinc-800 dark:text-zinc-300"
                }`}
              >
                {brand}
              </button>
            ))}
          </div>
        </section>
      </aside>
    </>
  );
};

export default SidebarFilters;
