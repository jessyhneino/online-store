import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  CreditCard,
  Wallet,
  Apple,
  Lock,
  Truck,
  ArrowRight,
  ArrowLeft,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";

const CheckOut = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language.split("-")[0];
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const products = [
    {
      id: 1,
      name: t("vase_name"),
      price: 120.0,
      qty: 1,
      image:
        "https://images.unsplash.com/photo-1581783898377-1c85bf937427?auto=format&fit=crop&q=80&w=100",
    },
    {
      id: 2,
      name: t("headphones_name"),
      price: 299.0,
      qty: 1,
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=100",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8F9FA] dark:bg-[#0a0a0a] font-sans text-slate-900 dark:text-gray-100 transition-colors duration-500">
      
      {/* الحاوية المتناسقة مع باقي الموقع */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 md:py-12">
        
        {/* Header */}
        <div className={`mb-10 ${currentLang === 'ar' ? 'text-right' : 'text-left'}`}>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-2 text-black dark:text-white">
            {t("checkout")}
          </h1>
          <p className="text-slate-500 dark:text-zinc-500 text-lg font-medium">
            {t("checkout_description")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* المحتوى الأساسي (Main Content) */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Shipping Information */}
            <section className={`bg-white dark:bg-zinc-900 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-zinc-800 transition-colors ${
              currentLang === 'ar' ? 'text-right' : 'text-left'
            }`}>
              <div className={`flex items-center gap-3 mb-6 ${currentLang === 'ar' ? 'flex-row-reverse' : ''}`}>
                <div className="p-2 bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-lg">
                  <Truck size={20} />
                </div>
                <h2 className="text-xl font-bold text-black dark:text-white">{t("shipping_info")}</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* First Name */}
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-zinc-400">
                    {t("first_name")}
                  </label>
                  <input
                    type="text"
                    placeholder={t("placeholder_jane")}
                    className={`w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-zinc-800 border border-transparent focus:bg-white dark:focus:bg-zinc-700 focus:ring-2 focus:ring-blue-500 transition-all outline-none text-black dark:text-white ${
                      currentLang === 'ar' ? 'text-right' : 'text-left'
                    }`}
                  />
                </div>

                {/* Last Name */}
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-zinc-400">
                    {t("last_name")}
                  </label>
                  <input
                    type="text"
                    placeholder={t("placeholder_doe")}
                    className={`w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-zinc-800 border border-transparent focus:bg-white dark:focus:bg-zinc-700 focus:ring-2 focus:ring-blue-500 transition-all outline-none text-black dark:text-white ${
                      currentLang === 'ar' ? 'text-right' : 'text-left'
                    }`}
                  />
                </div>

                {/* Address */}
                <div className="md:col-span-2 space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-zinc-400">
                    {t("address")}
                  </label>
                  <input
                    type="text"
                    placeholder={t("placeholder_address")}
                    className={`w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-zinc-800 border border-transparent focus:bg-white dark:focus:bg-zinc-700 focus:ring-2 focus:ring-blue-500 transition-all outline-none text-black dark:text-white ${
                      currentLang === 'ar' ? 'text-right' : 'text-left'
                    }`}
                  />
                </div>

                {/* City */}
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-zinc-400">
                    {t("city")}
                  </label>
                  <input
                    type="text"
                    placeholder={t("placeholder_city")}
                    className={`w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-zinc-800 border border-transparent focus:bg-white dark:focus:bg-zinc-700 focus:ring-2 focus:ring-blue-500 transition-all outline-none text-black dark:text-white ${
                      currentLang === 'ar' ? 'text-right' : 'text-left'
                    }`}
                  />
                </div>

                {/* Zip + Country */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-zinc-400">
                      {t("zip_code")}
                    </label>
                    <input
                      type="text"
                      placeholder="10001"
                      className={`w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-zinc-800 border border-transparent focus:bg-white dark:focus:bg-zinc-700 focus:ring-2 focus:ring-blue-500 transition-all outline-none text-black dark:text-white ${
                        currentLang === 'ar' ? 'text-right' : 'text-left'
                      }`}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-zinc-400">
                      {t("country")}
                    </label>
                    <div className="relative">
                      <select className={`w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-zinc-800 border border-transparent focus:bg-white dark:focus:bg-zinc-700 focus:ring-2 focus:ring-blue-500 transition-all outline-none appearance-none text-black dark:text-white ${
                        currentLang === 'ar' ? 'text-right' : 'text-left'
                      }`}>
                        <option>{t("country_us")}</option>
                        <option>{t("country_uk")}</option>
                        <option>{t("country_ger")}</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Payment Method */}
            <section className={`bg-white dark:bg-zinc-900 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-zinc-800 transition-colors ${
              currentLang === 'ar' ? 'text-right' : 'text-left'
            }`}>
              <div className={`flex items-center gap-3 mb-6 ${currentLang === 'ar' ? 'flex-row-reverse' : ''}`}>
                <div className="p-2 bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-lg">
                  <CreditCard size={20} />
                </div>
                <h2 className="text-xl font-bold text-black dark:text-white">{t("payment_method")}</h2>
              </div>

              {/* Tabs */}
              <div className={`grid grid-cols-3 gap-4 mb-8 ${currentLang === 'ar' ? 'flex-row-reverse' : ''}`}>
                <button
                  onClick={() => setPaymentMethod("card")}
                  className={`flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition-all ${
                    paymentMethod === "card"
                      ? "border-blue-500 bg-blue-50/50 dark:bg-blue-500/10"
                      : "border-gray-50 dark:border-zinc-800 hover:border-gray-100 dark:hover:border-zinc-700"
                  }`}
                >
                  <CreditCard
                    className={
                      paymentMethod === "card"
                        ? "text-blue-600 dark:text-blue-400"
                        : "text-gray-400 dark:text-zinc-600"
                    }
                  />
                  <span
                    className={`text-[10px] font-bold uppercase ${
                      paymentMethod === "card"
                        ? "text-blue-600 dark:text-blue-400"
                        : "text-slate-500 dark:text-zinc-500"
                    }`}
                  >
                    {t("credit_card")}
                  </span>
                </button>

                <button
                  onClick={() => setPaymentMethod("paypal")}
                  className={`flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition-all ${
                    paymentMethod === "paypal"
                      ? "border-blue-500 bg-blue-50/50 dark:bg-blue-500/10"
                      : "border-gray-50 dark:border-zinc-800 hover:border-gray-100 dark:hover:border-zinc-700"
                  }`}
                >
                  <Wallet
                    className={
                      paymentMethod === "paypal"
                        ? "text-blue-600 dark:text-blue-400"
                        : "text-gray-400 dark:text-zinc-600"
                    }
                  />
                  <span
                    className={`text-[10px] font-bold uppercase ${
                      paymentMethod === "paypal"
                        ? "text-blue-600 dark:text-blue-400"
                        : "text-slate-500 dark:text-zinc-500"
                    }`}
                  >
                    {t("paypal")}
                  </span>
                </button>

                <button
                  onClick={() => setPaymentMethod("apple")}
                  className={`flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition-all ${
                    paymentMethod === "apple"
                      ? "border-blue-500 bg-blue-50/50 dark:bg-blue-500/10"
                      : "border-gray-50 dark:border-zinc-800 hover:border-gray-100 dark:hover:border-zinc-700"
                  }`}
                >
                  <Apple
                    className={
                      paymentMethod === "apple"
                        ? "text-blue-600 dark:text-blue-400"
                        : "text-gray-400 dark:text-zinc-600"
                    }
                  />
                  <span
                    className={`text-[10px] font-bold uppercase ${
                      paymentMethod === "apple"
                        ? "text-blue-600 dark:text-blue-400"
                        : "text-slate-500 dark:text-zinc-500"
                    }`}
                  >
                    {t("apple_pay")}
                  </span>
                </button>
              </div>

              {/* Card Inputs */}
              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-zinc-400">
                    {t("card_number")}
                  </label>

                  <div className="relative">
                    <input
                      type="text"
                      placeholder="0000 0000 0000 0000"
                      className={`w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-zinc-800 border border-transparent focus:bg-white dark:focus:bg-zinc-700 focus:ring-2 focus:ring-blue-500 transition-all outline-none text-black dark:text-white ${
                        currentLang === 'ar' ? 'text-right pr-4 pl-12' : 'text-left pl-4 pr-12'
                      }`}
                    />
                    <Lock
                      size={16}
                      className={`absolute top-1/2 -translate-y-1/2 text-gray-400 dark:text-zinc-600 ${
                        currentLang === 'ar' ? 'left-4' : 'right-4'
                      }`}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-zinc-400">
                      {t("expiry_date")}
                    </label>
                    <input
                      type="text"
                      placeholder="MM/YY"
                      className={`w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-zinc-800 border border-transparent focus:bg-white dark:focus:bg-zinc-700 focus:ring-2 focus:ring-blue-500 transition-all outline-none text-black dark:text-white ${
                        currentLang === 'ar' ? 'text-right' : 'text-left'
                      }`}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-zinc-400">
                      {t("cvv")}
                    </label>
                    <input
                      type="text"
                      placeholder="***"
                      className={`w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-zinc-800 border border-transparent focus:bg-white dark:focus:bg-zinc-700 focus:ring-2 focus:ring-blue-500 transition-all outline-none text-black dark:text-white ${
                        currentLang === 'ar' ? 'text-right' : 'text-left'
                      }`}
                    />
                  </div>
                </div>
              </div>
            </section>

            <div className={`w-full flex justify-end pb-20 lg:pb-0 ${currentLang === 'ar' ? 'justify-start' : 'justify-end'}`}>
              <Link
                to="/invoice"
                className={`w-full md:w-auto bg-blue-600 dark:bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-600 text-white font-bold py-4 px-12 rounded-xl shadow-lg transition-all transform hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-2 ${
                  currentLang === 'ar' ? 'flex-row-reverse' : ''
                }`}
              >
                <span>{t("complete_purchase")}</span>
                <ArrowRight size={18} className={currentLang === 'ar' ? 'rotate-180' : ''} />
              </Link>
            </div>
          </div>

          {/* Sidebar Desktop */}
          <div className="lg:col-span-4 space-y-6 hidden lg:block">
            <div className={`bg-white dark:bg-zinc-900 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-zinc-800 transition-colors ${
              currentLang === 'ar' ? 'text-right' : 'text-left'
            }`}>
              <h2 className="text-xl font-bold mb-6 text-black dark:text-white">
                {t("order_summary")}
              </h2>

              <div className="space-y-4 mb-6">
                {products.map((item) => (
                  <div key={item.id} className={`flex gap-4 ${currentLang === 'ar' ? 'flex-row-reverse' : ''}`}>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-xl bg-gray-50 dark:bg-zinc-800"
                    />
                    <div className="flex-1">
                      <h3 className="text-sm font-bold text-black dark:text-white">
                        {item.name}
                      </h3>
                      <p className="text-xs text-slate-400 dark:text-zinc-500 font-medium">
                        {t("qty")}: {item.qty}
                      </p>
                      <p className="text-sm font-bold mt-1 text-black dark:text-white">
                        ${item.price.toFixed(2)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-50 dark:border-zinc-800 pt-4 space-y-3">
                <div className={`flex justify-between text-sm ${currentLang === 'ar' ? 'flex-row-reverse' : ''}`}>
                  <span className="text-slate-500 dark:text-zinc-400 font-medium">{t("subtotal")}</span>
                  <span className="font-bold text-black dark:text-white">
                    $419.00
                  </span>
                </div>

                <div className={`flex justify-between text-sm ${currentLang === 'ar' ? 'flex-row-reverse' : ''}`}>
                  <span className="text-slate-500 dark:text-zinc-400 font-medium">{t("shipping")}</span>
                  <span className="font-bold text-green-600 dark:text-green-400">
                    {t("free")}
                  </span>
                </div>

                <div className={`flex justify-between text-sm ${currentLang === 'ar' ? 'flex-row-reverse' : ''}`}>
                  <span className="text-slate-500 dark:text-zinc-400 font-medium">{t("tax")}</span>
                  <span className="font-bold text-black dark:text-white">
                    $33.52
                  </span>
                </div>

                <div className={`flex justify-between text-lg font-bold border-t border-gray-50 dark:border-zinc-800 pt-4 ${currentLang === 'ar' ? 'flex-row-reverse' : ''}`}>
                  <span className="text-black dark:text-white">{t("total")}</span>
                  <span className="text-blue-600 dark:text-blue-400 font-extrabold">
                    $452.52
                  </span>
                </div>
              </div>

              {/* Promo */}
              <div className={`mt-6 flex gap-2 ${currentLang === 'ar' ? 'flex-row-reverse' : ''}`}>
                <input
                  type="text"
                  placeholder={t("promo_code")}
                  className={`flex-1 px-4 py-2 bg-gray-50 dark:bg-zinc-800 border border-transparent rounded-lg text-sm focus:bg-white dark:focus:bg-zinc-700 focus:ring-1 focus:ring-blue-500 outline-none transition-all text-black dark:text-white ${
                    currentLang === 'ar' ? 'text-right' : 'text-left'
                  }`}
                />
                <button className="px-4 py-2 text-sm font-bold text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-500/10 rounded-lg transition-colors">
                  {t("apply")}
                </button>
              </div>
            </div>

            {/* Security Note */}
            <div className={`bg-white dark:bg-zinc-900 p-4 rounded-xl flex items-center gap-3 border border-gray-100 dark:border-zinc-800 transition-colors ${
              currentLang === 'ar' ? 'flex-row-reverse text-right' : 'text-left'
            }`}>
              <div className="p-2 bg-gray-50 dark:bg-zinc-800 rounded-full text-blue-600 dark:text-blue-400 shadow-sm border dark:border-zinc-700">
                <Lock size={16} />
              </div>
              <div>
                <p className="text-xs font-bold text-black dark:text-white">
                  {t("secure_checkout")}
                </p>
                <p className="text-[10px] text-slate-400 dark:text-zinc-500 font-bold uppercase tracking-tight">
                  {t("encryption_text")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Button */}
      <div className="lg:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[90%]">
        <button
          onClick={() => setIsSidebarOpen(true)}
          className="w-full bg-blue-600 dark:bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-600 text-white font-bold py-4 rounded-xl shadow-lg transition-all"
        >
          {t("view_order_summary")}
        </button>
      </div>

      {/* Mobile Bottom Sheet */}
      {isSidebarOpen && (
        <div className="fixed inset-0 z-50 flex justify-end items-end lg:hidden">
          <div
            onClick={() => setIsSidebarOpen(false)}
            className="absolute inset-0 bg-black/30 backdrop-blur-sm"
          ></div>

          <div className="relative bg-white dark:bg-zinc-900 w-full rounded-t-3xl p-6 max-h-[80vh] overflow-y-auto z-10 border-t dark:border-zinc-800 transition-colors">
            <div className={`flex justify-between items-center mb-4 ${currentLang === 'ar' ? 'flex-row-reverse' : ''}`}>
              <h2 className="text-xl font-bold text-black dark:text-white">{t("order_summary")}</h2>
              <button onClick={() => setIsSidebarOpen(false)} className="text-black dark:text-white">
                <X size={24} />
              </button>
            </div>

            <div className="space-y-4 mb-6">
              {products.map((item) => (
                <div key={item.id} className={`flex gap-4 ${currentLang === 'ar' ? 'flex-row-reverse' : ''}`}>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-xl bg-gray-50 dark:bg-zinc-800"
                  />
                  <div className="flex-1">
                    <h3 className="text-sm font-bold text-black dark:text-white">
                      {item.name}
                    </h3>
                    <p className="text-xs text-slate-400 dark:text-zinc-500 font-medium">
                      {t("qty")}: {item.qty}
                    </p>
                    <p className="text-sm font-bold mt-1 text-black dark:text-white">
                      ${item.price.toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-gray-50 dark:border-zinc-800 pt-4 space-y-3">
              <div className={`flex justify-between text-sm ${currentLang === 'ar' ? 'flex-row-reverse' : ''}`}>
                <span className="text-slate-500 dark:text-zinc-400 font-medium">{t("subtotal")}</span>
                <span className="font-bold text-black dark:text-white">
                  $419.00
                </span>
              </div>

              <div className={`flex justify-between text-sm ${currentLang === 'ar' ? 'flex-row-reverse' : ''}`}>
                <span className="text-slate-500 dark:text-zinc-400 font-medium">{t("shipping")}</span>
                <span className="font-bold text-green-600 dark:text-green-400">
                  {t("free")}
                </span>
              </div>

              <div className={`flex justify-between text-sm ${currentLang === 'ar' ? 'flex-row-reverse' : ''}`}>
                <span className="text-slate-500 dark:text-zinc-400 font-medium">{t("tax")}</span>
                <span className="font-bold text-black dark:text-white">
                  $33.52
                </span>
              </div>

              <div className={`flex justify-between text-lg font-bold border-t border-gray-50 dark:border-zinc-800 pt-4 ${currentLang === 'ar' ? 'flex-row-reverse' : ''}`}>
                <span className="text-black dark:text-white">{t("total")}</span>
                <span className="text-blue-600 dark:text-blue-400 font-extrabold">
                  $452.52
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckOut;