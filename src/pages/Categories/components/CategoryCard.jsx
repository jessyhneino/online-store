import React from "react";
import { useTranslation } from "react-i18next";

const categories = [
  {
    title: "Electronics",
    subtext: "Computing · Audio Visual · Smart Home · Wearables",
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&q=80",
    className: "md:col-span-2 md:row-span-1",
  },
  {
    title: "Fashion",
    subtext: "Men's Editorial · Women's Collection · Footwear",
    image:
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80",
    className: "md:col-span-1 md:row-span-2",
  },
  {
    title: "Home Decor",
    subtext: "Ceramics · Textiles · Lighting",
    image:
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Beauty",
    subtext: "Skincare · Fragrance · Wellness",
    image:
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Accessories",
    subtext:
      "The details that define the look. TIMEPIECES · LEATHER GOODS · EYEWEAR",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80",
    className: "md:col-span-3 md:row-span-1",
    isLarge: true,
  },
];

const LuxuryGrid = ({ category }) => {
  const { t } = useTranslation();

  return (
    <div
      className={`group relative overflow-hidden rounded-2xl bg-gray-200 dark:bg-zinc-800 transition-all duration-500 hover:shadow-2xl ${category.className}`}
    >
      {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-black/30 dark:bg-black/40 transition-opacity duration-300 group-hover:bg-black/20" />

      {/* Background Image */}
      <img
        src={category.image}
        alt={category.title}
        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
      />

      {/* Text Content */}
      <div
        className={`absolute bottom-0 left-0 z-20 w-full p-6 text-white ${
          category.isLarge ? "text-center md:p-12" : ""
        }`}
      >
        <h3
          className={`font-bold tracking-tight ${
            category.isLarge ? "text-4xl md:text-5xl" : "text-2xl"
          }`}
        >
          {t(category.title)}
        </h3>
        <p className="mt-2 text-sm font-light opacity-90 tracking-wide uppercase">
          {t(category.subtext)}
        </p>
      </div>
    </div>
  );
};

const CategoryCard = () => {
  return (
    <section className="min-h-screen bg-gray-50 dark:bg-zinc-900 px-6 py-6 md:px-10 transition-colors duration-500">
      <div className=" mx-auto lg:mx-25 max-w-7xl">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:grid-rows-[400px_400px_350px]">
          {categories.map((cat, index) => (
            <LuxuryGrid key={index} category={cat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryCard;
