import React, { useState } from "react";
import {
  Star,
  Truck,
  ShieldCheck,
  Minus,
  Plus,
  Check,
  ShoppingBag,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useCart } from "../../../context/CartContext";

const ProductPage = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language.split("-")[0];

  const { addToCart, cartItems } = useCart();

  const [selectedSize, setSelectedSize] = useState("S");
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState("obsidian");

  // بيانات المنتج الحالي
  const product = {
    id: "p1",
    name: t("Sculpted Wool Overcoat"),
    price: 895.0,
    image:
      "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?q=80&w=1000&auto=format&fit=crop",
    category: t("Outerwear"),
    color: selectedColor,
    size: selectedSize,
  };

  const alreadyInCart = cartItems.some((item) => item.id === product.id);

  const sizes = ["XS", "S", "M", "L", "XL"];

  const colors = [
    { id: "obsidian", class: "bg-black", name: t("OBSIDIAN BLACK") },
    { id: "charcoal", class: "bg-slate-700", name: t("CHARCOAL GREY") },
    { id: "ash", class: "bg-zinc-200", name: t("ASH WHITE") },
  ];

  const handleAddToCart = () => {
    if (!alreadyInCart) {
      addToCart({ ...product, quantity });
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a] font-sans text-zinc-900 dark:text-gray-200 transition-colors duration-500">
      {/* Container موحد ومطابق للنافبار والأقسام السابقة */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 md:py-16">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ${
            currentLang === "ar" ? "text-right" : "text-left"
          }`}
        >
          {/* Images Section */}
          <div className="space-y-6">
            <div className="relative aspect-[4/5] bg-zinc-100 dark:bg-zinc-800 overflow-hidden rounded-sm">
              <span
                className={`absolute top-4 z-10 bg-white dark:bg-zinc-800 px-3 py-1 text-[10px] font-bold tracking-widest uppercase border dark:border-zinc-700 ${
                  currentLang === "ar" ? "right-4" : "left-4"
                }`}
              >
                {t("Editorial Pick")}
              </span>
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            <div className="flex gap-4 justify-center md:justify-start">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-20 h-24 bg-zinc-100 dark:bg-zinc-800 border-2 dark:border-zinc-700"
                >
                  <img
                    src={product.image}
                    className="w-full h-full object-cover"
                    alt="thumbnail"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Details Section */}
          <div className="flex flex-col space-y-8">
            <div>
              <nav
                className={`text-[10px] tracking-[0.2em] text-zinc-400 uppercase mb-4 flex gap-2 ${
                  currentLang === "ar" ? "justify-end" : "justify-start"
                }`}
              >
                <span>{t("Men")}</span> / <span>{t("Outerwear")}</span> /{" "}
                <span className="font-bold text-black dark:text-white">
                  {t("Overcoats")}
                </span>
              </nav>
              <p className="text-blue-600 text-[11px] font-bold uppercase mb-2">
                {t("The Curator Essentials")}
              </p>
              <h1 className="text-4xl md:text-5xl font-extrabold text-black dark:text-white">
                {product.name}
              </h1>
            </div>

            <div
              className={`flex items-center gap-4 border-b dark:border-zinc-800 pb-6 ${
                currentLang === "ar" ? "flex-row-reverse" : ""
              }`}
            >
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" />
                ))}
              </div>
              <span className="text-[11px] text-zinc-400 uppercase">
                {t("reviews", { count: 48 })}
              </span>
              <div className={currentLang === "ar" ? "mr-auto" : "ml-auto"}>
                <span className="text-3xl text-black dark:text-white font-black">
                  ${product.price.toFixed(2)}
                </span>
              </div>
            </div>

            {/* Color Selection */}
            <div>
              <p className="text-[10px] font-bold uppercase mb-4 text-black dark:text-white">
                {t("Color")}:{" "}
                <span className="font-normal text-zinc-500">
                  {colors.find((c) => c.id === selectedColor).name}
                </span>
              </p>
              <div
                className={`flex gap-3 ${
                  currentLang === "ar" ? "flex-row-reverse justify-end" : ""
                }`}
              >
                {colors.map((color) => (
                  <button
                    key={color.id}
                    onClick={() => setSelectedColor(color.id)}
                    className={`w-10 h-10 rounded-full border-2 transition-all ${
                      selectedColor === color.id
                        ? "border-blue-500 scale-110"
                        : "border-transparent"
                    }`}
                  >
                    <div
                      className={`w-full h-full rounded-full ${color.class}`}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div>
              <div className="flex justify-between mb-4">
                <p className="text-[10px] font-bold uppercase text-black dark:text-white">
                  {t("Size Selection")}
                </p>
                <button className="text-[10px] text-blue-600 font-bold underline uppercase">
                  {t("Sizing Guide")}
                </button>
              </div>
              <div className="grid grid-cols-5 gap-2">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-3 text-xs font-bold border transition-all ${
                      selectedSize === size
                        ? "bg-black text-white border-black dark:bg-white dark:text-black dark:border-white"
                        : "hover:border-black dark:border-zinc-700 dark:text-zinc-300 dark:hover:border-white"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div
              className={`flex flex-col sm:flex-row items-stretch gap-3 ${
                currentLang === "ar" ? "sm:flex-row-reverse" : ""
              }`}
            >
              {/* Quantity Selector */}
              <div
                className={`flex items-center justify-between border dark:border-zinc-700 rounded-lg h-14 px-4 w-full sm:w-40 transition-opacity ${
                  alreadyInCart ? "opacity-50 pointer-events-none" : ""
                } ${currentLang === "ar" ? "flex-row-reverse" : ""}`}
              >
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-zinc-800 rounded-md transition"
                >
                  <Minus size={16} />
                </button>
                <span className="text-sm font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-zinc-800 rounded-md transition"
                >
                  <Plus size={16} />
                </button>
              </div>

              {/* Add to Bag Button */}
              <button
                disabled={alreadyInCart}
                onClick={handleAddToCart}
                className={`flex-1 h-14 rounded-lg p-5 text-sm font-semibold uppercase tracking-wide transition-all flex items-center justify-center gap-3 ${
                  alreadyInCart
                    ? "bg-green-600 text-white cursor-default"
                    : "bg-black text-white hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200 active:scale-[0.98]"
                }`}
              >
                {alreadyInCart ? (
                  <>
                    <Check size={20} />
                    {t("Added to Bag")}
                  </>
                ) : (
                  <>
                    <ShoppingBag size={18} />
                    {t("Add to Bag")}
                  </>
                )}
              </button>
            </div>

            {/* Express Checkout */}
            <Link
              to="/checkout"
              className="flex justify-center items-center w-full border border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 text-center font-bold text-xs uppercase h-14 hover:bg-blue-50 dark:hover:bg-blue-900/10 transition-colors"
            >
              {t("Express Checkout")}
            </Link>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t dark:border-zinc-800">
              <div
                className={`flex items-center gap-4 ${
                  currentLang === "ar" ? "flex-row-reverse text-right" : ""
                }`}
              >
                <Truck size={20} className="text-zinc-400" />
                <div>
                  <p className="text-[10px] font-bold uppercase text-black dark:text-white">
                    {t("Global Shipping")}
                  </p>
                  <p className="text-[10px] text-zinc-400">
                    {t("Delivered within 3 days")}
                  </p>
                </div>
              </div>
              <div
                className={`flex items-center gap-4 ${
                  currentLang === "ar" ? "flex-row-reverse text-right" : ""
                }`}
              >
                <ShieldCheck size={20} className="text-zinc-400" />
                <div>
                  <p className="text-[10px] font-bold uppercase text-black dark:text-white">
                    {t("Quality Guaranteed")}
                  </p>
                  <p className="text-[10px] text-zinc-400">
                    {t("Lifetime finish warranty")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
