import React, { useState } from "react";
import { ShoppingCart, Filter, Heart, ArrowLeft, Check } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useWishlist } from "../../context/WishlistContext";
import { useCart } from "../../context/CartContext";
import { useTranslation } from "react-i18next";

const Wishlist = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const { wishlistItems, toggleWishlist } = useWishlist();
  const { addToCart, cartItems } = useCart();

  const [activeCategory, setActiveCategory] = useState(t("allItems"));

  const categories = [
    t("allItems"),
    t("clothing"),
    t("accessories"),
    t("homeDecor"),
    t("electronics"),
  ];

  const filteredItems =
    activeCategory === t("allItems")
      ? wishlistItems
      : wishlistItems.filter((item) => item.category === activeCategory);

  const isAlreadyInCart = (id) =>
    cartItems.some((cartItem) => cartItem.id === id);

  return (
    <div className="min-h-screen bg-[#F8F9FA] dark:bg-zinc-900 px-4 py-8 md:px-16 lg:px-24 font-sans text-[#1A1A1A] dark:text-gray-100 transition-colors duration-300">
      <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 gap-8">
        <div className="text-center md:text-left">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white mb-4 transition-colors"
          >
            <ArrowLeft size={18} />
            <span>{t("backToShop")}</span>
          </button>

          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-2">
            {t("myWishlist")}
          </h1>

          <p className="text-gray-500 dark:text-gray-400 font-medium uppercase tracking-widest text-xs md:text-sm">
            {wishlistItems.length.toString().padStart(2, "0")} {t("itemsSaved")}
          </p>
        </div>

        <div className="grid grid-cols-2 md:flex items-center gap-3 w-full md:w-auto">
          <button className="flex items-center justify-center gap-2 bg-[#E9EAEB] dark:bg-zinc-800 hover:bg-gray-200 dark:hover:bg-zinc-700 transition-colors px-4 py-3 rounded-xl font-medium text-sm md:text-base">
            <Filter size={18} />
            {t("filter")}
          </button>

          <button
            onClick={() => {
              wishlistItems.forEach((item) => {
                if (!isAlreadyInCart(item.id)) addToCart(item);
              });
            }}
            className="flex items-center justify-center gap-2 bg-[#1A73E8] hover:bg-blue-700 transition-all text-white px-4 py-3 rounded-xl font-medium shadow-lg shadow-blue-200 dark:shadow-blue-900/30 text-sm md:text-base"
          >
            <ShoppingCart size={18} />
            <span className="whitespace-nowrap">{t("moveAllToBag")}</span>
          </button>
        </div>
      </div>

      <div className="flex overflow-x-auto pb-4 mb-8 gap-2 no-scrollbar">
        <div className="flex flex-nowrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 whitespace-nowrap ${
                activeCategory === cat
                  ? "bg-[#0062D1] text-white shadow-md"
                  : "bg-[#E2E4E7] dark:bg-zinc-800 text-gray-600 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-zinc-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {wishlistItems.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {filteredItems.map((item) => {
            const added = isAlreadyInCart(item.id);

            return (
              <div key={item.id} className="group cursor-pointer">
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-white dark:bg-zinc-800 mb-4 shadow-sm border border-gray-100 dark:border-zinc-700">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleWishlist(item);
                    }}
                    className="absolute top-4 right-4 p-2.5 bg-white/90 dark:bg-zinc-900/80 backdrop-blur-sm rounded-full shadow-md hover:bg-red-50 dark:hover:bg-red-900/30 transition-all z-20 group/heart"
                  >
                    <Heart
                      size={20}
                      className="text-red-500 fill-red-500 group-hover/heart:scale-110 transition-transform"
                    />
                  </button>

                  <div
                    className={`absolute bottom-4 left-4 right-4 transition-all duration-300 z-10 
                    ${
                      added
                        ? "translate-y-0 opacity-100"
                        : "translate-y-12 group-hover:translate-y-0 opacity-0 group-hover:opacity-100"
                    }`}
                  >
                    <button
                      disabled={added}
                      onClick={(e) => {
                        e.stopPropagation();
                        if (!added) addToCart(item);
                      }}
                      className={`w-full py-2.5 rounded-lg text-sm font-bold shadow-xl transition-all flex items-center justify-center gap-2 
                      ${
                        added
                          ? "bg-green-600 text-white cursor-default shadow-none"
                          : "bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 active:scale-95"
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
                          <span >{t("addToCart")}</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                <div className="flex flex-col gap-1">
                  <div className="flex justify-between items-start gap-2">
                    <h3 className="font-bold text-base md:text-lg leading-tight group-hover:text-blue-600 transition-colors truncate">
                      {item.name}
                    </h3>
                    <span className="font-bold text-base md:text-lg">
                      ${item.price}
                    </span>
                  </div>
                  <p className="text-gray-500 dark:text-gray-400 text-xs md:text-sm font-medium">
                    {item.tag || t("premiumQuality")}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="text-center py-32 flex flex-col items-center gap-4">
          <div className="w-20 h-20 bg-gray-100 dark:bg-zinc-800 rounded-full flex items-center justify-center">
            <Heart size={40} className="text-gray-300 dark:text-gray-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
            {t("wishlistEmpty")}
          </h2>
          <p className="text-gray-400 dark:text-gray-500 max-w-xs mx-auto">
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
  );
};

export default Wishlist;

