import React, { useState, useRef } from "react";
import { Menu } from "lucide-react";
import { useTranslation } from "react-i18next";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";

import ProductCard from "./components/ProductCard";
import SidebarFilters from "./components/SidebarFilters";
import Pagination from "./components/Pagination";
import productsData from "./data/products.json";

// ... (نفس الـ imports)

const Collection = () => {
  const { t, i18n } = useTranslation(); // أضفنا i18n لمعرفة اللغة الحالية
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const swiperRef = useRef(null);

  // نحدد إذا كانت اللغة الحالية هي العربية
  const isRTL = i18n.language === "ar";

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-900 text-[#1a1a1a] dark:text-gray-200 antialiased">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-26 py-12">
        {/* Header */}
        <header className="md:mb-20 flex flex-col justify-center items-center">
          <h1 className="text-center text-5xl md:text-5xl font-extrabold mb-6 tracking-tight italic">
            {t("Summer Collection")}
          </h1>
          <p className="text-center text-gray-500 dark:text-gray-400 max-w-2xl text-md leading-relaxed font-light">
            {t(
              "A meticulously curated selection of premium essentials, designed for the discerning individual who values craftsmanship and quiet luxury."
            )}
          </p>
        </header>

        {/* Hamburger + "Filters" للموبايل */}
        <div className="md:hidden">
          <button
            onClick={() => setIsFilterOpen(true)}
            className="flex items-center gap-2 p-2 border border-gray-200 dark:border-zinc-700 rounded-lg font-semibold mb-[30px] mt-[30px] hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors"
          >
            <Menu size={20} className="text-gray-800 dark:text-gray-200" />
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
          {/* أضفنا dir="ltr" هنا عشان نضمن إن السلايدر يضل تصرفه ثابت مهما كانت لغة الصفحة */}
          <main className="flex-1 min-w-0 overflow-hidden" dir="ltr">
            <Swiper
              modules={[Navigation, Autoplay]}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
              spaceBetween={20} // قللت المسافة شوي للموبايل
              slidesPerView={1.2} // حركة ذكية: خلي جزء من السلايد اللي بعده مبين عشان المستخدم يعرف إنه "سلايدر"
              breakpoints={{
                640: { slidesPerView: 2, spaceBetween: 30 },
                1024: { slidesPerView: 3, spaceBetween: 30 },
              }}
              className="mySwiper !pb-4" // أضفنا padding بسيط تحت عشان الظلال (Shadows) ما تنقص
            >
              {productsData.map((product) => (
                <SwiperSlide key={product.id}>
                  {/* نرجع الـ dir للـ RTL داخل الكرت فقط إذا كانت اللغة عربية عشان النصوص */}
                  <div dir={isRTL ? "rtl" : "ltr"}>
                    <ProductCard product={product} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Pagination */}
            <div dir={isRTL ? "rtl" : "ltr"}>
              <Pagination
                onNext={() => swiperRef.current?.slideNext()}
                onPrev={() => swiperRef.current?.slidePrev()}
                currentSlide={activeSlide}
                totalSlides={productsData.length}
              />
            </div>
          </main>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-100 dark:border-zinc-700 text-center">
        <p className="text-xs text-gray-400 dark:text-gray-500 tracking-widest uppercase">
          {t("© 2026 Minimalist E-commerce Experience")}
        </p>
      </footer>
    </div>
  );
};

export default Collection;
