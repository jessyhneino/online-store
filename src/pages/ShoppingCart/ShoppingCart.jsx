import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom"; // أضفنا useNavigate هنا
import {
  Minus,
  Plus,
  X,
  ArrowRight,
  CreditCard,
  Wallet,
  Apple,
  ShoppingBag,
  ArrowLeft,
} from "lucide-react";
import { useCart } from "../../context/CartContext";

const ShoppingCart = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language.split("-")[0];
  const navigate = useNavigate(); // قمنا بتعريف الهوك هنا

  const { cartItems, updateQuantity, removeFromCart } = useCart();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const tax = cartItems.length > 0 ? 77.2 : 0;
  const total = subtotal + tax;

  // الدالة الجديدة المسؤولة عن حفظ البيانات والانتقال
  const handleProceedToCheckout = () => {
    // 1. حفظ السلة في الـ Local Storage (لحمايتها عند الريفرش)
    localStorage.setItem("cart", JSON.stringify(cartItems));

    // 2. التوجيه لصفحة الدفع مع إرسال المنتجات
    navigate("/checkout", { state: { cartProducts: cartItems } });
  };

  return (
    <div className="bg-[#F8F9FA] dark:bg-[#0a0a0a] font-sans text-slate-900 dark:text-gray-100 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 md:py-12">
        {/* Header */}
        <div
          className={`mb-10 ${
            currentLang === "ar" ? "text-right" : "text-left"
          }`}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-2 text-black dark:text-white">
            {t("shopping_cart")}
          </h1>
          <p className="text-slate-500 dark:text-zinc-500 text-lg font-medium">
            {t("items_count", { count: cartItems.length })}
          </p>
        </div>

        {cartItems.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* المنتجات في السلة */}
            <div className="lg:col-span-8 space-y-6">
              {cartItems.map((item) => (
                <div
                  key={item.cartId}
                  className={`relative bg-white dark:bg-zinc-900 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-zinc-800 flex flex-col sm:flex-row gap-6 items-center transition-colors ${
                    currentLang === "ar"
                      ? "sm:flex-row-reverse text-right"
                      : "text-left"
                  }`}
                >
                  <button
                    onClick={() => removeFromCart(item.cartId)}
                    className={`absolute top-4 text-slate-400 dark:text-zinc-500 hover:text-red-500 dark:hover:text-red-400 transition-colors ${
                      currentLang === "ar" ? "left-4" : "right-4"
                    }`}
                  >
                    <X size={20} />
                  </button>

                  <div className="w-full sm:w-32 h-32 flex-shrink-0 bg-gray-100 dark:bg-zinc-800 rounded-xl overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>

                  <div className="flex-grow text-center sm:text-left">
                    <span className="text-[10px] font-bold tracking-[0.15em] text-blue-600 dark:text-blue-400 uppercase block mb-1">
                      {item.category || "Premium Product"}
                    </span>
                    <h3 className="text-xl font-bold text-black dark:text-white">
                      {item.name}
                    </h3>

                    <div className="flex gap-2 justify-center sm:justify-start text-xs text-slate-500 dark:text-zinc-400 mb-2">
                      <span>
                        {t("Color")}:{" "}
                        <b className="text-black dark:text-white uppercase">
                          {item.color}
                        </b>
                      </span>
                      <span>|</span>
                      <span>
                        {t("Size")}:{" "}
                        <b className="text-black dark:text-white">
                          {item.size}
                        </b>
                      </span>
                    </div>

                    <p className="text-slate-400 dark:text-zinc-500 text-sm mb-4">
                      {item.desc || "High quality selection"}
                    </p>

                    <div
                      className={`inline-flex items-center bg-gray-100 dark:bg-zinc-800 rounded-lg p-1 transition-colors ${
                        currentLang === "ar" ? "flex-row-reverse" : ""
                      }`}
                    >
                      <button
                        onClick={() => updateQuantity(item.cartId, -1)}
                        className="p-2 hover:bg-white dark:hover:bg-zinc-700 rounded-md transition-all text-black dark:text-white"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="px-5 font-semibold text-sm text-black dark:text-white">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.cartId, 1)}
                        className="p-2 hover:bg-white dark:hover:bg-zinc-700 rounded-md transition-all text-black dark:text-white"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                  </div>

                  <div
                    className={`text-right sm:self-end ${
                      currentLang === "ar"
                        ? "sm:text-left sm:self-start"
                        : "sm:text-right"
                    }`}
                  >
                    <p className="text-xs text-slate-400 dark:text-zinc-500 mb-1">
                      {t("unit_price")} ${item.price.toFixed(2)}
                    </p>
                    <p className="text-2xl font-extrabold text-black dark:text-white">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}

              <Link
                to="/collection"
                className={`flex items-center text-blue-600 dark:text-blue-400 font-bold text-sm gap-2 transition-transform pb-20 lg:pb-0 hover:opacity-80 ${
                  currentLang === "ar" ? "flex-row-reverse justify-end" : ""
                }`}
              >
                {currentLang === "ar" ? (
                  <ArrowLeft size={18} className="rotate-180" />
                ) : (
                  <ArrowLeft size={18} />
                )}
                <span>{t("continue_shopping")}</span>
              </Link>
            </div>

            {/* الفاتورة (Desktop Summary) */}
            <aside className="lg:col-span-4 hidden lg:block">
              <div
                className={`relative bg-white dark:bg-zinc-900 p-8 shadow-sm rounded-3xl border border-gray-100 dark:border-zinc-800 transition-colors space-y-6 ${
                  currentLang === "ar" ? "text-right" : "text-left"
                }`}
              >
                <h2 className="text-2xl font-bold mb-8 text-black dark:text-white">
                  {t("order_summary")}
                </h2>
                <div className="space-y-4 text-sm font-medium">
                  <div
                    className={`flex justify-between ${
                      currentLang === "ar" ? "flex-row-reverse" : ""
                    }`}
                  >
                    <span className="text-slate-500 dark:text-zinc-400">
                      {t("subtotal")}
                    </span>
                    <span className="text-lg font-bold text-black dark:text-white">
                      ${subtotal.toLocaleString()}
                    </span>
                  </div>

                  <div
                    className={`flex justify-between items-center ${
                      currentLang === "ar" ? "flex-row-reverse" : ""
                    }`}
                  >
                    <span className="text-slate-500 dark:text-zinc-400">
                      {t("shipping")}
                    </span>
                    <span className="text-[10px] font-black text-blue-600 dark:text-blue-400 uppercase tracking-widest">
                      {t("free_express")}
                    </span>
                  </div>

                  <div
                    className={`flex justify-between items-end ${
                      currentLang === "ar" ? "flex-row-reverse" : ""
                    }`}
                  >
                    <span className="text-slate-500 dark:text-zinc-400 mb-1">
                      {t("total")}
                    </span>
                    <div
                      className={
                        currentLang === "ar" ? "text-left" : "text-right"
                      }
                    >
                      <p className="text-4xl font-extrabold tracking-tight text-black dark:text-white">
                        ${total.toLocaleString()}
                      </p>
                      <p className="text-[9px] text-slate-400 dark:text-zinc-500 font-bold uppercase">
                        {t("vat_included")}
                      </p>
                    </div>
                  </div>
                </div>

                <hr className="my-8 border-gray-100 dark:border-zinc-800" />

                {/* تم تعديل هذا الزر من Link إلى button ليعمل عبر الدالة */}
                <button
                  onClick={handleProceedToCheckout}
                  className={`w-full bg-blue-600 dark:bg-blue-500 text-white rounded-2xl py-5 font-bold flex items-center justify-center gap-3 hover:bg-blue-700 dark:hover:bg-blue-600 transition-all shadow-lg active:scale-[0.98] ${
                    currentLang === "ar" ? "flex-row-reverse" : ""
                  }`}
                >
                  {t("proceed_to_checkout")}
                  <ArrowRight
                    size={18}
                    className={currentLang === "ar" ? "rotate-180" : ""}
                  />
                </button>

                <div
                  className={`hidden lg:flex justify-center gap-5 mt-8 text-slate-300 dark:text-zinc-600 ${
                    currentLang === "ar" ? "flex-row-reverse" : ""
                  }`}
                >
                  <CreditCard size={24} />
                  <Wallet size={24} />
                  <Apple size={24} />
                </div>
              </div>
            </aside>
          </div>
        ) : (
          /* السلة فارغة */
          <div className="text-center py-24 bg-white dark:bg-zinc-900 rounded-3xl shadow-sm border border-dashed border-gray-200 dark:border-zinc-800">
            <div className="mb-6 flex justify-center">
              <div className="p-6 bg-gray-100 dark:bg-zinc-800 rounded-full">
                <ShoppingBag
                  size={48}
                  className="text-gray-400 dark:text-zinc-600"
                />
              </div>
            </div>
            <h2 className="text-2xl font-bold mb-2 text-black dark:text-white">
              {t("wishlistEmpty")}
            </h2>
            <p className="text-gray-500 dark:text-zinc-500 mb-8">
              Looks like you haven't added anything yet.
            </p>
            <Link
              to="/collection"
              className="bg-black dark:bg-white text-white dark:text-black px-8 py-3 rounded-xl font-bold hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors inline-block"
            >
              Start Shopping
            </Link>
          </div>
        )}

        {/* الموبايل Summary Sheet */}
        {cartItems.length > 0 && (
          <>
            <div className="lg:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[90%]">
              <button
                onClick={() => setIsSidebarOpen(true)}
                className="w-full bg-blue-600 dark:bg-blue-500 text-white rounded-2xl py-4 font-bold flex items-center justify-center gap-3 shadow-lg"
              >
                {t("view_order_summary")} - ${total.toLocaleString()}
              </button>
            </div>

            {isSidebarOpen && (
              <div className="fixed inset-0 z-50 flex justify-end items-end lg:hidden">
                <div
                  onClick={() => setIsSidebarOpen(false)}
                  className="absolute inset-0 backdrop-blur-sm bg-black/20 dark:bg-black/50"
                ></div>
                <div className="relative bg-white dark:bg-zinc-900 w-full rounded-t-3xl p-6 z-10 border-t dark:border-zinc-800">
                  <div
                    className={`flex justify-between items-center mb-6 ${
                      currentLang === "ar" ? "flex-row-reverse" : ""
                    }`}
                  >
                    <h2 className="text-xl font-bold text-black dark:text-white">
                      {t("order_summary")}
                    </h2>
                    <button
                      onClick={() => setIsSidebarOpen(false)}
                      className="text-black dark:text-white"
                    >
                      <X size={24} />
                    </button>
                  </div>
                  <div className="space-y-4 mb-6">
                    <div
                      className={`flex justify-between ${
                        currentLang === "ar" ? "flex-row-reverse" : ""
                      }`}
                    >
                      <span className="text-slate-500 dark:text-zinc-400">
                        {t("subtotal")}
                      </span>
                      <span className="font-bold text-black dark:text-white">
                        ${subtotal.toLocaleString()}
                      </span>
                    </div>
                    <div
                      className={`flex justify-between ${
                        currentLang === "ar" ? "flex-row-reverse" : ""
                      }`}
                    >
                      <span className="text-slate-500 dark:text-zinc-400">
                        {t("total")}
                      </span>
                      <span className="text-2xl font-extrabold text-black dark:text-white">
                        ${total.toLocaleString()}
                      </span>
                    </div>
                  </div>

                  {/* تم تعديل هذا الزر أيضاً للموبايل ليعمل عبر الدالة */}
                  <button
                    onClick={handleProceedToCheckout}
                    className={`w-full bg-blue-600 text-white rounded-2xl py-4 font-bold flex items-center justify-center gap-3 ${
                      currentLang === "ar" ? "flex-row-reverse" : ""
                    }`}
                  >
                    {t("proceed_to_checkout")}
                    <ArrowRight
                      size={18}
                      className={currentLang === "ar" ? "rotate-180" : ""}
                    />
                  </button>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default ShoppingCart;
