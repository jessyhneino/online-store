import React, { useRef } from "react";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/navigation";

const Sellers = () => {
  const { t, i18n } = useTranslation();
  const swiperRef = useRef(null);

  const currentDir = i18n.dir();

  const products = [
    {
      id: 1,
      category: "OUTERWEAR",
      title: "Structured Wool Overcoat",
      price: "$289.00",
      image:
        "https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?q=80&w=600",
      tag: "NEW ARRIVAL",
      tagColor: "bg-[#8B5E3C]",
    },
    {
      id: 2,
      category: "FOOTWEAR",
      title: "AeroFlow Running Series",
      price: "$145.00",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=600",
    },
    {
      id: 3,
      category: "HOME ESSENTIALS",
      title: "Precision Brew Coffee Station",
      price: "$199.00",
      image:
        "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=600",
    },
    {
      id: 4,
      category: "ELECTRONICS",
      title: "Nexus G12 Smartphone",
      price: "$949.00",
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=600",
      tag: "BEST SELLER",
      tagColor: "bg-blue-600",
    },
    {
      id: 5,
      category: "ACCESSORIES",
      title: "Urban Tech Backpack",
      price: "$120.00",
      image:
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=600",
    },
    {
      id: 6,
      category: "LIFESTYLE",
      title: "Minimalist Watch Series",
      price: "$150.00",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=600",
    },
  ];

  return (
    <section
      className="py-12 px-4 max-w-7xl mx-auto font-sans select-none
                 dark:bg-zinc-950"
      dir={currentDir}
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-10">
        <h2
          className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight
                       dark:text-zinc-100"
        >
          {t("Best Sellers")}
        </h2>

        {/* Navigation Buttons */}
        <div className="flex gap-2">
          <button
            onClick={() => swiperRef.current?.swiper.slidePrev()}
            className="p-2 border border-gray-200 rounded-full hover:bg-gray-100 active:scale-95 transition-all shadow-sm bg-white
                       dark:bg-zinc-900 dark:border-zinc-700 dark:hover:bg-zinc-800"
          >
            {currentDir === "rtl" ? (
              <ChevronRight className="w-5 h-5 text-gray-600 dark:text-zinc-300" />
            ) : (
              <ChevronLeft className="w-5 h-5 text-gray-600 dark:text-zinc-300" />
            )}
          </button>

          <button
            onClick={() => swiperRef.current?.swiper.slideNext()}
            className="p-2 border border-gray-200 rounded-full hover:bg-gray-100 active:scale-95 transition-all shadow-sm bg-white
                       dark:bg-zinc-900 dark:border-zinc-700 dark:hover:bg-zinc-800"
          >
            {currentDir === "rtl" ? (
              <ChevronLeft className="w-5 h-5 text-gray-600 dark:text-zinc-300" />
            ) : (
              <ChevronRight className="w-5 h-5 text-gray-600 dark:text-zinc-300" />
            )}
          </button>
        </div>
      </div>

      {/* Swiper */}
      <Swiper
        key={i18n.language}
        dir={currentDir}
        ref={swiperRef}
        modules={[Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          440: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        className="mySwiper"
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="group cursor-pointer">
              <Link to={`/curator/${product.id}`}>
                <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-gray-100 dark:bg-zinc-800 mb-4">
                  {product.tag && (
                    <span
                      className={`absolute top-4 ${
                        currentDir === "rtl" ? "right-4" : "left-4"
                      } z-10 text-[10px] font-bold text-white px-3 py-1 rounded-full uppercase tracking-widest ${
                        product.tagColor
                      }`}
                    >
                      {t(product.tag)}
                    </span>
                  )}

                  <img
                    src={product.image}
                    alt={t(product.title)}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                <div className="space-y-1">
                  <span className="text-[10px] md:text-[11px] font-semibold text-gray-400 dark:text-zinc-500 uppercase tracking-widest">
                    {t(product.category)}
                  </span>

                  <h3 className="text-base md:text-lg font-bold text-gray-800 dark:text-zinc-200 leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 truncate line-clamp-2">
                    {t(product.title)}
                  </h3>

                  <p className="text-blue-600 dark:text-blue-400 font-bold text-sm md:text-md">
                    {product.price}
                  </p>
                </div>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Sellers;
