import React, { useState } from "react";
import { Menu } from "lucide-react";
import { useTranslation } from "react-i18next";
import ProductCard from "./components/ProductCard";
import SidebarFilters from "./components/SidebarFilters";
import Pagination from "./components/Pagination";

const Collection = () => {
  const { t } = useTranslation();
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const products = [
    {
      id: 1,
      name: t("Structured Wool Coat"),
      price: 420,
      rating: 4.9,
      reviews: 128,
      tag: t("NEW ARRIVAL"),
      image:
        "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=500",
    },
    {
      id: 2,
      name: t("Heritage Leather Bag"),
      price: 285,
      rating: 4.8,
      reviews: 94,
      image:
        "https://images.unsplash.com/photo-1547949003-9792a18a2601?q=80&w=500",
    },
    {
      id: 3,
      name: t("Studio Sound Headphones"),
      price: 350,
      rating: 5.0,
      reviews: 215,
      tag: t("LIMITED EDITION"),
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=500",
    },
    {
      id: 4,
      name: t("Essential White Sneaker"),
      price: 160,
      rating: 4.7,
      reviews: 310,
      image:
        "https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=500",
    },
    {
      id: 5,
      name: t("Titanium Dial Watch"),
      price: 550,
      rating: 4.9,
      reviews: 82,
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=500",
    },
    {
      id: 6,
      name: t("Silver Signature Pen"),
      price: 120,
      rating: 4.8,
      reviews: 45,
      image:
        "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?q=80&w=500",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-[#1a1a1a] antialiased">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-26 py-12">
        {/* Header */}
        <header className="md:mb-20 flex flex-col justify-center items-center">
          <h1 className="text-center text-5xl md:text-5xl font-extrabold mb-6 tracking-tight italic">
            {t("Summer Collection")}
          </h1>
          <p className="text-center text-gray-500 max-w-2xl text-md leading-relaxed font-light">
            {t(
              "A meticulously curated selection of premium essentials, designed for the discerning individual who values craftsmanship and quiet luxury."
            )}
          </p>
        </header>

        {/* Hamburger + "Filters" للموبايل */}
        <div className="md:hidden">
          <button
            onClick={() => setIsFilterOpen(true)}
            className="flex items-center gap-2 p-2 border border-gray-200 rounded-lg font-semibold mb-[30px] mt-[30px] hover:bg-gray-100 transition-colors"
          >
            <Menu size={20} />
            <span>{t("Filters")}</span>
          </button>
        </div>

        <div className="flex flex-col md:flex-row gap-12 lg:gap-20">
          {/* Sidebar */}
          <SidebarFilters
            isOpen={isFilterOpen}
            onClose={() => setIsFilterOpen(false)}
          />

          {/* Products */}
          <main className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 md:gap-y-16">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            <Pagination />
          </main>
        </div>
      </div>

      <footer className="py-12 border-t border-gray-100 text-center">
        <p className="text-xs text-gray-400 tracking-widest uppercase">
          {t("© 2026 Minimalist E-commerce Experience")}
        </p>
      </footer>
    </div>
  );
};

export default Collection;
