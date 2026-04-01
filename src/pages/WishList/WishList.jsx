import React, { useState, useMemo } from "react";
import { ShoppingCart, Filter, Heart, ArrowLeft, Check } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useWishlist } from "../../context/WishlistContext";
import { useCart } from "../../context/CartContext";
import { useTranslation } from "react-i18next";

const Wishlist = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language.split("-")[0];
  const navigate = useNavigate();

  const { wishlistItems, toggleWishlist } = useWishlist();
  const { addToCart, cartItems } = useCart();

  const categories = [
    { id: "all", label: t("allItems") },
    { id: "clothing", label: t("clothing") },
    { id: "accessories", label: t("accessories") },
    { id: "homeDecor", label: t("homeDecor") },
    { id: "electronics", label: t("electronics") },
  ];

  const [activeCategoryId, setActiveCategoryId] = useState("all");

  const filteredItems = useMemo(() => {
    if (activeCategoryId === "all") return wishlistItems;
    return wishlistItems.filter(
      (item) => item.category?.toLowerCase() === activeCategoryId.toLowerCase()
    );
  }, [activeCategoryId, wishlistItems]);

  const isAlreadyInCart = (id) =>
    cartItems.some((cartItem) => cartItem.id === id);

  return (
    <div className="bg-[#F8F9FA] dark:bg-[#0a0a0a] font-sans text-[#1A1A1A] dark:text-gray-100 transition-colors duration-500 min-h-screen">
      {/* Container موحد ومطابق للنافبار وباقي الصفحة */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 md:py-12">
        {/* الهيدر */}
        <div
          className={`flex flex-col lg:flex-row lg:items-end justify-between mb-10 gap-8 ${
            currentLang === "ar" ? "text-right" : "text-left"
          }`}
        >
          <div>
            <button
              onClick={() => navigate(-1)}
              className={`flex items-center gap-2 text-gray-500 dark:text-zinc-400 hover:text-black dark:hover:text-white mb-4 transition-colors ${
                currentLang === "ar" ? "flex-row-reverse" : ""
              }`}
            >
              <ArrowLeft
                size={18}
                className={currentLang === "ar" ? "rotate-180" : ""}
              />
              <span>{t("backToShop")}</span>
            </button>

            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-2 text-black dark:text-white">
              {t("myWishlist")}
            </h1>

            <p className="text-gray-500 dark:text-zinc-500 font-bold uppercase tracking-widest text-xs md:text-sm">
              {wishlistItems.length.toString().padStart(2, "0")}{" "}
              {t("itemsSaved")}
            </p>
          </div>

          <div
            className={`grid grid-cols-2 md:flex items-center gap-3 w-full md:w-auto ${
              currentLang === "ar" ? "md:flex-row-reverse" : ""
            }`}
          >
            <button
              className={`flex items-center justify-center gap-2 bg-[#E9EAEB] dark:bg-zinc-800 hover:bg-gray-200 dark:hover:bg-zinc-700 transition-colors px-4 py-3 rounded-xl font-medium text-sm md:text-base text-black dark:text-white ${
                currentLang === "ar" ? "flex-row-reverse" : ""
              }`}
            >
              <Filter size={18} />
              {t("filter")}
            </button>

            <button
              onClick={() => {
                wishlistItems.forEach((item) => {
                  if (!isAlreadyInCart(item.id)) addToCart(item);
                });
              }}
              className={`flex items-center justify-center gap-2 bg-[#1A73E8] hover:bg-blue-700 transition-all text-white px-4 py-3 rounded-xl font-medium shadow-lg shadow-blue-200 dark:shadow-blue-900/30 text-sm md:text-base ${
                currentLang === "ar" ? "flex-row-reverse" : ""
              }`}
            >
              <ShoppingCart size={18} />
              <span className="whitespace-nowrap">{t("moveAllToBag")}</span>
            </button>
          </div>
        </div>

        {/* شريط التصنيفات */}
        <div
          className={`flex overflow-x-auto pb-4 mb-8 gap-2 no-scrollbar ${
            currentLang === "ar" ? "flex-row-reverse" : ""
          }`}
        >
          <div className="flex flex-nowrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategoryId(cat.id)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 whitespace-nowrap ${
                  activeCategoryId === cat.id
                    ? "bg-[#0062D1] text-white shadow-md"
                    : "bg-[#E2E4E7] dark:bg-zinc-800 text-gray-600 dark:text-zinc-300 hover:bg-gray-300 dark:hover:bg-zinc-700"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {wishlistItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {filteredItems.map((item) => {
              const added = isAlreadyInCart(item.id);

              return (
                <div
                  key={item.id}
                  className={`group cursor-pointer ${
                    currentLang === "ar" ? "text-right" : "text-left"
                  }`}
                >
                  <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-white dark:bg-zinc-900 mb-4 shadow-sm border border-gray-100 dark:border-zinc-800">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleWishlist(item);
                      }}
                      className={`absolute top-4 p-2.5 bg-white/90 dark:bg-zinc-800/80 backdrop-blur-sm rounded-full shadow-md hover:bg-red-50 dark:hover:bg-red-900/30 transition-all z-20 group/heart ${
                        currentLang === "ar" ? "left-4" : "right-4"
                      }`}
                    >
                      <Heart
                        size={20}
                        className="text-red-500 fill-red-500 group-hover/heart:scale-110 transition-transform"
                      />
                    </button>

                    {/* حاوية الزر المجهزة للشاشات الذكية واللابتوب */}
                    <div
                      className={`absolute bottom-4 left-4 right-4 transition-all duration-300 z-10 ${
                        added
                          ? "translate-y-0 opacity-100"
                          : "lg:translate-y-12 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100 translate-y-0 opacity-100"
                      }`}
                    >
                      <button
                        disabled={added}
                        onClick={(e) => {
                          e.stopPropagation();
                          if (!added) addToCart(item);
                        }}
                        className={`w-full py-2.5 rounded-lg text-sm font-bold shadow-xl transition-all flex items-center justify-center gap-2 ${
                          currentLang === "ar" ? "flex-row-reverse" : ""
                        } ${
                          added
                            ? "bg-green-600 text-white cursor-default shadow-none"
                            : "bg-black/80 dark:bg-white/90 backdrop-blur-md text-white dark:text-black hover:bg-black dark:hover:bg-white active:scale-95"
                        }`}
                      >
                        {added ? (
                          <>
                            <Check size={18} strokeWidth={3} />
                            <span>{t("addedToBag")}</span>
                          </>
                        ) : (
                          <>
                            <ShoppingCart size={16} />
                            <span>{t("addToCart")}</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                  <div className="flex flex-col gap-1">
                    <div
                      className={`flex justify-between items-start gap-2 ${
                        currentLang === "ar" ? "flex-row-reverse" : ""
                      }`}
                    >
                      <h3 className="font-bold text-base md:text-lg leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors truncate text-black dark:text-white">
                        {item.name}
                      </h3>
                      <span className="font-extrabold text-base md:text-lg text-black dark:text-white">
                        ${item.price}
                      </span>
                    </div>
                    <p className="text-gray-500 dark:text-zinc-500 text-xs md:text-sm font-medium">
                      {item.tag || t("premiumQuality")}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center flex flex-col items-center gap-4 py-20">
            <div className="w-20 h-20 bg-gray-100 dark:bg-zinc-800 rounded-full flex items-center justify-center">
              <Heart size={40} className="text-gray-300 dark:text-zinc-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
              {t("wishlistEmpty")}
            </h2>
            <p className="text-gray-400 dark:text-zinc-500 max-w-xs mx-auto">
              {t("wishlistEmptyDesc")}
            </p>
            <Link
              to="/collection"
              className="mt-4 px-8 py-3 bg-black dark:bg-white text-white dark:text-black rounded-xl font-bold hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
            >
              {t("startShopping")}
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
