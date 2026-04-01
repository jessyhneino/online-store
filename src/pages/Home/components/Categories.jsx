import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom"; // استيراد Link من راوتر

const categories = [
  {
    title: "Clothing",
    items: "420+ Items",
    image:
      "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=1200&auto=format&fit=crop",
    gridClass: "md:col-span-2 md:row-span-1",
  },
  {
    title: "Electronics",
    items: "115+ Items",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop",
    gridClass: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Accessories",
    items: "312+ Items",
    image:
      "https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=1200&auto=format&fit=crop",
    gridClass: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Home",
    items: "200+ Items",
    image:
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&w=1200&auto=format&fit=crop",
    gridClass: "md:col-span-2 md:row-span-1",
  },
];

const CuratedCategories = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language.split("-")[0];

  return (
    <section className="w-full bg-white dark:bg-zinc-950 transition-colors duration-300">
      {/* Container موحد ومطابق للنافبار */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24 font-sans">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-zinc-100 mb-4">
              {t("Curated Categories")}
            </h2>

            <p className="text-gray-500 text-base md:text-lg dark:text-zinc-400">
              {t(
                "Navigate through our meticulously organized collections across lifestyle and technology."
              )}
            </p>
          </div>

          <Link
            to="/categories"
            className="text-blue-600 dark:text-blue-400 font-semibold flex items-center hover:underline group text-sm md:text-base"
          >
            {t("Browse all categories")}
            {/* السهم يقلب اتجاهه تلقائياً في اللغة العربية */}
            <span
              className={`transition-transform duration-300 ${
                currentLang === "ar"
                  ? "mr-2 group-hover:-translate-x-1 rotate-180"
                  : "ml-2 group-hover:translate-x-1"
              }`}
            >
              →
            </span>
          </Link>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-2xl group cursor-pointer h-64 md:h-80 ${cat.gridClass}`}
            >
              {/* Background Image */}
              <img
                src={cat.image}
                alt={t(cat.title)}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                loading="lazy" // تحسين أداء تحميل الصور
              />

              {/* Overlay (محسن لجميع الأوضاع) */}
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-300 dark:bg-black/50 dark:group-hover:bg-black/65" />

              {/* Text Content */}
              <div
                className={`absolute bottom-6 text-white ${
                  currentLang === "ar"
                    ? "right-6 text-right"
                    : "left-6 text-left"
                }`}
              >
                <h3 className="text-xl md:text-2xl font-bold mb-1">
                  {t(cat.title)}
                </h3>
                <p className="text-xs md:text-sm opacity-90 font-light">
                  {t(cat.items)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CuratedCategories;
