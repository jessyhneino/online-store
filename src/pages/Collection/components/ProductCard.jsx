import React from "react";
import { Star, ShoppingBag, Eye, Heart } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useWishlist } from "../../../context/WishlistContext";

const ProductCard = ({ product }) => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const currentLang = i18n.language.split("-")[0];

  const { toggleWishlist, isFavorite } = useWishlist();
  const favorite = isFavorite(product.id);

  return (
    <div
      className="group relative flex flex-col cursor-pointer"
      // التعديل هنا: نقوم بتمرير الـ product كامل في الـ state
      onClick={() => navigate(`/curator/${product.id}`, { state: { product } })}
    >
      {/* Container الصورة */}
      <div className="relative aspect-[3/4] overflow-hidden bg-[#f6f6f6] dark:bg-zinc-900 rounded-xl transition-all duration-500">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 scale-[1.01] group-hover:scale-110"
          loading="lazy"
        />

        {/* زر القلب */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleWishlist(product);
          }}
          className={`absolute top-3 z-20 p-2.5 bg-white/80 dark:bg-zinc-800/80 backdrop-blur-md rounded-full shadow-sm hover:scale-110 active:scale-95 transition-all duration-300 ${
            currentLang === "ar" ? "left-3" : "right-3"
          }`}
        >
          <Heart
            size={18}
            className={`transition-colors duration-300 ${
              favorite
                ? "fill-red-500 text-red-500"
                : "text-gray-400 dark:text-zinc-500 group-hover:text-red-400"
            }`}
          />
        </button>

        {/* التاج - Tag (يعكس مكانه حسب اللغة) */}
        {product.tag && (
          <div
            className={`absolute top-3 overflow-hidden z-10 ${
              currentLang === "ar" ? "right-3" : "left-3"
            }`}
          >
            <span
              className={`block bg-black/80 dark:bg-white/90 backdrop-blur-md px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white dark:text-black rounded-sm transition-transform duration-500 ${
                currentLang === "ar"
                  ? "translate-x-full group-hover:translate-x-0"
                  : "-translate-x-full group-hover:translate-x-0"
              }`}
            >
              {t(product.tag)}
            </span>
          </div>
        )}

        {/* أزرار سريعة */}
        <div className="absolute inset-0 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/10 backdrop-blur-[2px]">
          <button
            className="p-3 bg-white dark:bg-zinc-800 rounded-full shadow-xl hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all transform translate-y-4 group-hover:translate-y-0 duration-300"
            onClick={(e) => e.stopPropagation()}
            aria-label="Add to cart"
          >
            <ShoppingBag size={18} />
          </button>
          <button
            className="p-3 bg-white dark:bg-zinc-800 rounded-full shadow-xl hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all transform translate-y-4 group-hover:translate-y-0 duration-[400ms]"
            onClick={(e) => e.stopPropagation()}
            aria-label="Quick view"
          >
            <Eye size={18} />
          </button>
        </div>
      </div>

      {/* تفاصيل المنتج */}
      <div
        className={`mt-4 flex flex-col gap-1 ${
          currentLang === "ar" ? "text-right" : "text-left"
        }`}
      >
        <div
          className={`flex justify-between items-baseline ${
            currentLang === "ar" ? "flex-row-reverse" : ""
          }`}
        >
          <h3 className="text-[14px] font-medium text-gray-500 dark:text-zinc-400 uppercase tracking-wider">
            {t(product.category || "Electronics")}
          </h3>
          <div
            className={`flex items-center gap-1 ${
              currentLang === "ar" ? "flex-row-reverse" : ""
            }`}
          >
            <Star size={12} className="fill-orange-400 text-orange-400" />
            <span className="text-[12px] font-bold dark:text-zinc-200">
              {product.rating}
            </span>
          </div>
        </div>

        <h2 className="text-[17px] font-bold text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors">
          {t(product.name)}
        </h2>

        <div
          className={`flex items-center gap-2 mt-1 ${
            currentLang === "ar" ? "flex-row-reverse justify-end" : ""
          }`}
        >
          <span className="text-lg font-black text-gray-900 dark:text-white">
            ${product.price}
          </span>
          <span className="text-sm text-gray-400 line-through">
            ${(product.price * 1.2).toFixed(0)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
