import React, { useState, useRef } from "react";
import { Menu } from "lucide-react";
import { useTranslation } from "react-i18next";

// استيراد Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";

import ProductCard from "./components/ProductCard";
import SidebarFilters from "./components/SidebarFilters";
import Pagination from "./components/Pagination";
import productsData from "./data/products.json";

const Collection = () => {
  const { t } = useTranslation();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const swiperRef = useRef(null);

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

        {/* Hamburger + "Filters" للموبايل - رجعت مثل ما كانت */}
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

          {/* Swiper Slider Section */}
          <main className="flex-1 overflow-hidden">
            <Swiper
              modules={[Navigation, Autoplay]}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
              spaceBetween={30}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className="mySwiper"
            >
              {productsData.map((product) => (
                <SwiperSlide key={product.id}>
                  <ProductCard product={product} />
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Pagination مربوط بالـ Swiper */}
            <Pagination
              onNext={() => swiperRef.current?.slideNext()}
              onPrev={() => swiperRef.current?.slidePrev()}
              currentSlide={activeSlide}
              totalSlides={productsData.length}
            />
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
