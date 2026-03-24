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
import { useCart } from "../../../context/CartContext"; // 1. استيراد سياق السلة

const ProductPage = () => {
  const { t } = useTranslation();

  // 2. جلب دوال وبيانات السلة
  const { addToCart, cartItems } = useCart();

  const [selectedSize, setSelectedSize] = useState("S");
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState("obsidian");

  // بيانات المنتج الحالي (يفضل أن تأتي من props أو API)
  const product = {
    id: "p1", // معرف فريد للمنتج
    name: t("Sculpted Wool Overcoat"),
    price: 895.0,
    image:
      "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?q=80&w=1000&auto=format&fit=crop",
    category: t("Outerwear"),
    color: selectedColor,
    size: selectedSize,
  };

  // 3. التحقق إذا كان المنتج في السلة
  const alreadyInCart = cartItems.some((item) => item.id === product.id);

  const sizes = ["XS", "S", "M", "L", "XL"];

  const colors = [
    { id: "obsidian", class: "bg-black", name: t("OBSIDIAN BLACK") },
    { id: "charcoal", class: "bg-slate-700", name: t("CHARCOAL GREY") },
    { id: "ash", class: "bg-zinc-200", name: t("ASH WHITE") },
  ];

  // 4. دالة معالجة الإضافة
  const handleAddToCart = () => {
    if (!alreadyInCart) {
      // نمرر المنتج مع الكمية المختارة
      addToCart({ ...product, quantity });
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-900 font-sans text-zinc-900 dark:text-gray-200 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Images Section */}
          <div className="space-y-6">
            <div className="relative aspect-[4/5] bg-zinc-100 dark:bg-zinc-800 overflow-hidden rounded-sm">
              <span className="absolute top-4 left-4 z-10 bg-white dark:bg-zinc-800 px-3 py-1 text-[10px] font-bold tracking-widest uppercase border">
                {t("Editorial Pick")}
              </span>
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex gap-4 justify-center md:justify-start">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-20 h-24 bg-zinc-100 dark:bg-zinc-800 border-2"
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
              <nav className="text-[10px] tracking-[0.2em] text-zinc-400 uppercase mb-4">
                {t("Men")} / {t("Outerwear")} /{" "}
                <span className="font-bold">{t("Overcoats")}</span>
              </nav>
              <p className="text-blue-600 text-[11px] font-bold uppercase mb-2">
                {t("The Curator Essentials")}
              </p>
              <h1 className="text-4xl md:text-5xl font-extrabold">
                {product.name}
              </h1>
            </div>

            <div className="flex items-center gap-4 border-b pb-6">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" />
                ))}
              </div>
              <span className="text-[11px] text-zinc-400 uppercase">
                {t("reviews", { count: 48 })}
              </span>
              <div className="ml-auto">
                <span className="text-3xl">${product.price.toFixed(2)}</span>
              </div>
            </div>

            {/* Color Selection */}
            <div>
              <p className="text-[10px] font-bold uppercase mb-4">
                {t("Color")}:{" "}
                <span className="font-normal text-zinc-500">
                  {colors.find((c) => c.id === selectedColor).name}
                </span>
              </p>
              <div className="flex gap-3">
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
                <p className="text-[10px] font-bold uppercase">
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
                        ? "bg-black text-white border-black"
                        : "hover:border-black dark:border-zinc-700"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-stretch gap-3">
              {/* Quantity Selector - يتم تعطيله إذا أضيف للمنتج */}
              <div
                className={`flex items-center justify-between border rounded-lg h-14 px-4 w-full sm:w-40 transition-opacity ${
                  alreadyInCart ? "opacity-50 pointer-events-none" : ""
                }`}
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

              {/* Add to Bag Button المطور */}
              <button
                disabled={alreadyInCart}
                onClick={handleAddToCart}
                className={`flex-1 h-14 rounded-lg text-sm font-semibold uppercase tracking-wide transition-all flex items-center justify-center gap-3 ${
                  alreadyInCart
                    ? "bg-green-600 text-white cursor-default"
                    : "bg-black text-white hover:bg-zinc-800 active:scale-[0.98]"
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
              className="flex justify-center items-center w-full border border-zinc-200 dark:border-zinc-700 text-blue-600 text-center font-bold text-xs uppercase h-14 hover:bg-blue-50 dark:hover:bg-blue-900/10 transition-colors"
            >
              {t("Express Checkout")}
            </Link>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t dark:border-zinc-800">
              <div className="flex items-center gap-4">
                <Truck size={20} className="text-zinc-400" />
                <div>
                  <p className="text-[10px] font-bold uppercase">
                    {t("Global Shipping")}
                  </p>
                  <p className="text-[10px] text-zinc-400">
                    {t("Delivered within 3 days")}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <ShieldCheck size={20} className="text-zinc-400" />
                <div>
                  <p className="text-[10px] font-bold uppercase">
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
