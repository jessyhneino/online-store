import React from "react";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();

  return (
    <section className="max-w-7xl mx-auto px-4 py-12 font-sans">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
        <div className="max-w-xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t("Curated Categories")}
          </h2>
          <p className="text-gray-500 text-lg">
            {t(
              "Navigate through our meticulously organized collections across lifestyle and technology."
            )}
          </p>
        </div>
        <a
          href="#"
          className="text-blue-600 font-semibold flex items-center hover:underline group"
        >
          {t("Browse all categories")}
          <span className="ml-2 group-hover:translate-x-1 transition-transform">
            →
          </span>
        </a>
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
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />

            {/* Text Content */}
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-2xl font-bold mb-1">{t(cat.title)}</h3>
              <p className="text-sm opacity-90">{t(cat.items)}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CuratedCategories;