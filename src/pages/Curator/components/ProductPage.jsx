import React, { useState } from "react";
import { Star, Truck, ShieldCheck, Minus, Plus } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const ProductPage = () => {
  const { t } = useTranslation();

  const [selectedSize, setSelectedSize] = useState("S");
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState("obsidian");

  const sizes = ["XS", "S", "M", "L", "XL"];

  const colors = [
    { id: "obsidian", class: "bg-black", name: t("OBSIDIAN BLACK") },
    { id: "charcoal", class: "bg-slate-700", name: t("CHARCOAL GREY") },
    { id: "ash", class: "bg-zinc-200", name: t("ASH WHITE") },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-900 font-sans text-zinc-900 dark:text-gray-200 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Images */}
          <div className="space-y-6">
            <div className="relative aspect-[4/5] bg-zinc-100 dark:bg-zinc-800 overflow-hidden rounded-sm">
              <span className="absolute top-4 left-4 z-10 bg-white dark:bg-zinc-800 px-3 py-1 text-[10px] font-bold tracking-widest uppercase border">
                {t("Editorial Pick")}
              </span>

              <img
                src="https://images.unsplash.com/photo-1539533018447-63fcce2678e3?q=80&w=1000&auto=format&fit=crop"
                alt={t("Sculpted Wool Overcoat")}
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
                    src="https://images.unsplash.com/photo-1539533018447-63fcce2678e3?q=80&w=200"
                    className="w-full h-full object-cover"
                    alt={t("thumbnail")}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Details */}
          <div className="flex flex-col space-y-8">
            {/* Header */}
            <div>
              <nav className="text-[10px] tracking-[0.2em] text-zinc-400 uppercase mb-4">
                {t("Men")} / {t("Outerwear")} /{" "}
                <span className="font-bold">{t("Overcoats")}</span>
              </nav>

              <p className="text-blue-600 text-[11px] font-bold uppercase mb-2">
                {t("The Curator Essentials")}
              </p>

              <h1 className="text-4xl md:text-5xl font-extrabold">
                {t("Sculpted Wool Overcoat")}
              </h1>
            </div>

            {/* Rating */}
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
                <span className="text-3xl">$895.00</span>
              </div>
            </div>

            {/* Color */}
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
                    className={`w-10 h-10 rounded-full border-2 ${
                      selectedColor === color.id
                        ? "border-blue-500"
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

            {/* Size */}
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
                    className={`py-3 text-xs font-bold border ${
                      selectedSize === size
                        ? "bg-black text-white"
                        : "hover:border-black"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center border h-14">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>
                  <Minus size={16} />
                </button>

                <span className="flex-1 text-center">{quantity}</span>

                <button onClick={() => setQuantity(quantity + 1)}>
                  <Plus size={16} />
                </button>
              </div>

              <button className="flex-1 bg-black text-white font-bold text-xs uppercase h-14">
                {t("Add to Bag")}
              </button>
            </div>

            <Link to="/checkout" className="flex justify-center items-center w-full border text-blue-600 text-center font-bold text-xs uppercase h-14">
              {t("Express Checkout")}
            </Link>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
              <div className="flex items-center gap-4">
                <Truck size={20} />
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
                <ShieldCheck size={20} />
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
