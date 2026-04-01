import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { CreditCard, Wallet, Apple, Lock, Truck } from "lucide-react";
import { Link, useLocation } from "react-router-dom"; // أضفنا useLocation هنا

const CheckOut = () => {
  const { t } = useTranslation();
  const location = useLocation(); // استدعاء الهوك
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // 1. استقبال المنتجات المرسلة من السلة (أو قراءتها من الـ local storage كخيار بديل)
  const products =
    location.state?.cartProducts ||
    JSON.parse(localStorage.getItem("cart")) ||
    [];

  // 2. حساب المجموع الفرعي ديناميكياً
  const subtotal = products.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  // 3. حساب الضريبة والمجموع الكلي (إذا كانت السلة فارغة نجعل القيم 0)
  const tax = products.length > 0 ? 77.2 : 0; // يمكنك تغيير قيمة الضريبة الثابتة هنا أو جعلها نسبة
  const total = subtotal + tax;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-zinc-900 py-6 px-6 sm:px-6 lg:px-8 font-sans text-slate-800 dark:text-gray-200 transition-colors duration-500">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
            {t("checkout")}
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-2">
            {t("checkout_description")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-8">
            {/* Shipping Information */}
            <section className="bg-white dark:bg-zinc-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-zinc-700 transition-colors">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-lg">
                  <Truck size={20} />
                </div>
                <h2 className="text-xl font-semibold">{t("shipping_info")}</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* First Name */}
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                    {t("first_name")}
                  </label>
                  <input
                    type="text"
                    placeholder={t("placeholder_jane")}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-zinc-700 border border-transparent focus:bg-white dark:focus:bg-zinc-600 focus:ring-2 focus:ring-blue-500 transition-all outline-none"
                  />
                </div>

                {/* Last Name */}
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                    {t("last_name")}
                  </label>
                  <input
                    type="text"
                    placeholder={t("placeholder_doe")}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-zinc-700 border border-transparent focus:bg-white dark:focus:bg-zinc-600 focus:ring-2 focus:ring-blue-500 transition-all outline-none"
                  />
                </div>

                {/* Address */}
                <div className="md:col-span-2 space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                    {t("address")}
                  </label>
                  <input
                    type="text"
                    placeholder={t("placeholder_address")}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-zinc-700 border border-transparent focus:bg-white dark:focus:bg-zinc-600 focus:ring-2 focus:ring-blue-500 transition-all outline-none"
                  />
                </div>

                {/* City */}
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                    {t("city")}
                  </label>
                  <input
                    type="text"
                    placeholder={t("placeholder_city")}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-zinc-700 border border-transparent focus:bg-white dark:focus:bg-zinc-600 focus:ring-2 focus:ring-blue-500 transition-all outline-none"
                  />
                </div>

                {/* Zip + Country */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                      {t("zip_code")}
                    </label>
                    <input
                      type="text"
                      placeholder="10001"
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-zinc-700 border border-transparent focus:bg-white dark:focus:bg-zinc-600 focus:ring-2 focus:ring-blue-500 transition-all outline-none"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                      {t("country")}
                    </label>
                    <select className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-zinc-700 border border-transparent focus:bg-white dark:focus:bg-zinc-600 focus:ring-2 focus:ring-blue-500 transition-all outline-none appearance-none">
                      <option>{t("country_us")}</option>
                      <option>{t("country_uk")}</option>
                      <option>{t("country_ger")}</option>
                    </select>
                  </div>
                </div>
              </div>
            </section>

            {/* Payment Method */}
            <section className="bg-white dark:bg-zinc-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-zinc-700 transition-colors">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-lg">
                  <CreditCard size={20} />
                </div>
                <h2 className="text-xl font-semibold">{t("payment_method")}</h2>
              </div>
              {/* Tabs */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <button
                  onClick={() => setPaymentMethod("card")}
                  className={`flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition-all ${
                    paymentMethod === "card"
                      ? "border-blue-500 bg-blue-50/50 dark:bg-blue-500/10"
                      : "border-gray-100 dark:border-zinc-700 hover:border-gray-200 dark:hover:border-zinc-600"
                  }`}
                >
                  <CreditCard
                    className={
                      paymentMethod === "card"
                        ? "text-blue-600 dark:text-blue-400"
                        : "text-gray-400 dark:text-gray-500"
                    }
                  />
                  <span
                    className={`text-[10px] font-bold uppercase ${
                      paymentMethod === "card"
                        ? "text-blue-600 dark:text-blue-400"
                        : "text-gray-500 dark:text-gray-400"
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
                      : "border-gray-100 dark:border-zinc-700 hover:border-gray-200 dark:hover:border-zinc-600"
                  }`}
                >
                  <Wallet
                    className={
                      paymentMethod === "paypal"
                        ? "text-blue-600 dark:text-blue-400"
                        : "text-gray-400 dark:text-gray-500"
                    }
                  />
                  <span
                    className={`text-[10px] font-bold uppercase ${
                      paymentMethod === "paypal"
                        ? "text-blue-600 dark:text-blue-400"
                        : "text-gray-500 dark:text-gray-400"
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
                      : "border-gray-100 dark:border-zinc-700 hover:border-gray-200 dark:hover:border-zinc-600"
                  }`}
                >
                  <Apple
                    className={
                      paymentMethod === "apple"
                        ? "text-blue-600 dark:text-blue-400"
                        : "text-gray-400 dark:text-gray-500"
                    }
                  />
                  <span
                    className={`text-[10px] font-bold uppercase ${
                      paymentMethod === "apple"
                        ? "text-blue-600 dark:text-blue-400"
                        : "text-gray-500 dark:text-gray-400"
                    }`}
                  >
                    {t("apple_pay")}
                  </span>
                </button>
              </div>

              {/* Card Inputs */}
              <div className="space-y-6">
                {/* Card Number */}
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                    {t("card_number")}
                  </label>

                  <div className="relative">
                    <input
                      type="text"
                      placeholder="0000 0000 0000 0000"
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-zinc-700 border border-transparent focus:bg-white dark:focus:bg-zinc-600 focus:ring-2 focus:ring-blue-500 transition-all outline-none"
                    />
                    <Lock
                      size={16}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500"
                    />
                  </div>
                </div>

                {/* Expiry + CVV */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                      {t("expiry_date")}
                    </label>
                    <input
                      type="text"
                      placeholder="MM/YY"
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-zinc-700 border border-transparent focus:bg-white dark:focus:bg-zinc-600 focus:ring-2 focus:ring-blue-500 transition-all outline-none"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                      {t("cvv")}
                    </label>
                    <input
                      type="text"
                      placeholder="***"
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-zinc-700 border border-transparent focus:bg-white dark:focus:bg-zinc-600 focus:ring-2 focus:ring-blue-500 transition-all outline-none"
                    />
                  </div>
                </div>
              </div>
            </section>
            <Link
              to="/invoice"
              className="w-full md:w-auto md:float-right bg-blue-600 dark:bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-600 text-white font-bold py-4 px-12 rounded-xl shadow-lg shadow-blue-200/50 dark:shadow-blue-900/30 transition-all transform hover:-translate-y-1 active:scale-95"
            >
              {t("complete_purchase")}
            </Link>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-6 hidden lg:block">
            {/* Order Summary */}
            <div className="bg-white dark:bg-zinc-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-zinc-700 transition-colors">
              <h2 className="text-xl font-semibold mb-6">
                {t("order_summary")}
              </h2>

              <div className="space-y-4 mb-6">
                {products.map((item) => (
                  <div key={item.cartId || item.id} className="flex gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-xl"
                    />
                    <div className="flex-1">
                      <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100">
                        {item.name}
                      </h3>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {t("qty")}: {item.quantity || item.qty}
                      </p>
                      <p className="text-sm font-bold mt-1">
                        ${item.price.toFixed(2)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-50 dark:border-zinc-700 pt-4 space-y-3">
                <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
                  <span>{t("subtotal")}</span>
                  <span className="font-semibold text-gray-900 dark:text-gray-100">
                    ${subtotal.toFixed(2)}
                  </span>
                </div>

                <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
                  <span>{t("shipping")}</span>
                  <span className="font-semibold text-green-600 dark:text-green-400">
                    {t("free")}
                  </span>
                </div>

                <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
                  <span>{t("tax")}</span>
                  <span className="font-semibold text-gray-900 dark:text-gray-100">
                    ${tax.toFixed(2)}
                  </span>
                </div>

                <div className="flex justify-between text-lg font-bold border-t border-gray-50 dark:border-zinc-700 pt-4">
                  <span>{t("total")}</span>
                  <span className="text-blue-600 dark:text-blue-400">
                    ${total.toFixed(2)}
                  </span>
                </div>
              </div>

              {/* Promo */}
              <div className="mt-6 flex gap-2">
                <input
                  type="text"
                  placeholder={t("promo_code")}
                  className="flex-1 px-4 py-2 bg-gray-50 dark:bg-zinc-700 border border-transparent rounded-lg text-sm focus:bg-white dark:focus:bg-zinc-600 focus:ring-1 focus:ring-blue-500 outline-none transition-all"
                />
                <button className="px-4 py-2 text-sm font-bold text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-500/10 rounded-lg transition-colors">
                  {t("apply")}
                </button>
              </div>
            </div>

            {/* Security Note */}
            <div className="bg-gray-100/50 dark:bg-zinc-800 p-4 rounded-xl flex items-center gap-3 border border-gray-100 dark:border-zinc-700 transition-colors">
              <div className="p-2 bg-white dark:bg-zinc-700 rounded-full text-blue-600 dark:text-blue-400 shadow-sm">
                <Lock size={16} />
              </div>
              <div>
                <p className="text-xs font-bold text-gray-800 dark:text-gray-200">
                  {t("secure_checkout")}
                </p>
                <p className="text-[10px] text-gray-500 dark:text-gray-400 uppercase tracking-tight">
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

          <div className="relative bg-white dark:bg-zinc-800 w-full rounded-t-3xl p-6 max-h-[80vh] overflow-y-auto z-10 transition-colors">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">{t("order_summary")}</h2>
              <button onClick={() => setIsSidebarOpen(false)}>✕</button>
            </div>

            <div className="space-y-4 mb-6">
              {products.map((item) => (
                <div key={item.cartId || item.id} className="flex gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-xl"
                  />
                  <div className="flex-1">
                    <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100">
                      {item.name}
                    </h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {t("qty")}: {item.quantity || item.qty}
                    </p>
                    <p className="text-sm font-bold mt-1">
                      ${item.price.toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-gray-50 dark:border-zinc-700 pt-4 space-y-3">
              <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
                <span>{t("subtotal")}</span>
                <span className="font-semibold text-gray-900 dark:text-gray-100">
                  ${subtotal.toFixed(2)}
                </span>
              </div>

              <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
                <span>{t("shipping")}</span>
                <span className="font-semibold text-green-600 dark:text-green-400">
                  {t("free")}
                </span>
              </div>

              <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
                <span>{t("tax")}</span>
                <span className="font-semibold text-gray-900 dark:text-gray-100">
                  ${tax.toFixed(2)}
                </span>
              </div>

              <div className="flex justify-between text-lg font-bold border-t border-gray-50 dark:border-zinc-700 pt-4">
                <span>{t("total")}</span>
                <span className="text-blue-600 dark:text-blue-400">
                  ${total.toFixed(2)}
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
