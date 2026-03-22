import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import {
  Minus,
  Plus,
  X,
  ArrowRight,
  ShieldCheck,
  CreditCard,
  Wallet,
  Apple,
} from "lucide-react";

const ShoppingCart = () => {
  const { t } = useTranslation(); // استخدام دالة الترجمة

  const [items, setItems] = useState([
    {
      id: 1,
      category: "THE CURATOR'S PICK",
      name: "Linear Chronograph",
      desc: "Matte Black / Italian Leather",
      price: 245.0,
      quantity: 1,
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=300&h=300&auto=format&fit=crop",
    },
    {
      id: 2,
      category: "BOUTIQUE PANTRY",
      name: "Artisan Linen Apron",
      desc: "Natural Flax / Heavyweight",
      price: 85.0,
      quantity: 2,
      image:
        "https://images.unsplash.com/photo-1544650039-22886fbb4323?q=80&w=300&h=300&auto=format&fit=crop",
    },
    {
      id: 3,
      category: "SOUND DESIGN",
      name: "Acoustic Studio Shells",
      desc: "Charcoal / Wireless 5.0",
      price: 550.0,
      quantity: 1,
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=300&h=300&auto=format&fit=crop",
    },
  ]);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const updateQuantity = (id, delta) => {
    setItems(
      items.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const subtotal = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const tax = 77.2;
  const total = subtotal + tax;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-zinc-900 pt-12 md:py-12 px-4 sm:px-6 lg:px-8 font-sans text-slate-900 dark:text-gray-200 transition-colors duration-500">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-4xl font-extrabold tracking-tight mb-2">
            {t("shopping_cart")}
          </h1>
          <p className="text-slate-500 dark:text-gray-400 text-lg">
            {t("items_count", { count: items.length })}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main Cart Items Section */}
          <div className="lg:col-span-8 space-y-6">
            {items.map((item) => (
              <div
                key={item.id}
                className="relative bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-zinc-700 flex flex-col sm:flex-row gap-6 items-center transition-colors"
              >
                <button
                  onClick={() => removeItem(item.id)}
                  className="absolute top-4 right-4 text-slate-400 dark:text-gray-400 hover:text-red-500 transition-colors"
                >
                  <X size={20} />
                </button>

                <div className="w-full sm:w-32 h-32 flex-shrink-0 bg-gray-100 dark:bg-zinc-700 rounded-xl overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex-grow text-center sm:text-left">
                  <span className="text-[10px] font-bold tracking-[0.15em] text-amber-700 dark:text-amber-500 uppercase">
                    {item.category}
                  </span>
                  <h3 className="text-xl font-bold mt-1 mb-1">{item.name}</h3>
                  <p className="text-slate-400 dark:text-gray-400 text-sm mb-4">
                    {item.desc}
                  </p>

                  <div className="inline-flex items-center bg-gray-100 dark:bg-zinc-700 rounded-lg p-1 transition-colors">
                    <button
                      onClick={() => updateQuantity(item.id, -1)}
                      className="p-2 hover:bg-white dark:hover:bg-zinc-600 rounded-md transition-all"
                    >
                      <Minus size={14} />
                    </button>
                    <span className="px-5 font-semibold text-sm">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, 1)}
                      className="p-2 hover:bg-white dark:hover:bg-zinc-600 rounded-md transition-all"
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                </div>

                <div className="text-right sm:self-end">
                  <p className="text-xs text-slate-400 dark:text-gray-400 mb-1">
                    {t("unit_price")} ${item.price.toFixed(2)}
                  </p>
                  <p className="text-2xl font-black">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
            
              <Link to="/collection"  className="flex items-center text-blue-600 dark:text-blue-400 font-bold text-sm gap-2 hover:translate-x-[-4px] transition-transform pb-20 lg:pb-0">
                <span className="text-xl">←</span> {t("continue_shopping")}
              </Link>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4 hidden lg:block">
            <div className="relative bg-white dark:bg-zinc-800 p-8 shadow-md dark:shadow-zinc-700 rounded-3xl border transition-colors space-y-6">
              <h2 className="text-2xl font-bold mb-8">{t("order_summary")}</h2>
              <div className="space-y-4 text-sm font-medium">
                <div className="flex justify-between">
                  <span className="text-slate-500 dark:text-gray-400">
                    {t("subtotal")}
                  </span>
                  <span className="text-lg font-bold">
                    ${subtotal.toLocaleString()}
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-slate-500 dark:text-gray-400">
                    {t("shipping")}
                  </span>
                  <span className="text-[10px] font-black text-blue-600 dark:text-blue-400 uppercase tracking-widest">
                    {t("free_express")}
                  </span>
                </div>

                <div className="flex justify-between items-end">
                  <span className="text-slate-500 dark:text-gray-400 mb-1">
                    {t("total")}
                  </span>
                  <div className="text-right">
                    <p className="text-4xl font-black tracking-tight">
                      ${total.toLocaleString()}
                    </p>
                    <p className="text-[9px] text-slate-400 dark:text-gray-500 font-bold uppercase">
                      {t("vat_included")}
                    </p>
                  </div>
                </div>
              </div>

              <hr className="my-8 border-gray-100 dark:border-zinc-700" />

              <Link to="/checkout" className="w-full bg-blue-600 dark:bg-blue-500 text-white rounded-2xl py-5 font-bold flex items-center justify-center gap-3 hover:bg-blue-700 dark:hover:bg-blue-600 transition-all shadow-lg active:scale-[0.98]">
                {t("proceed_to_checkout")} <ArrowRight size={18} />
              </Link>

              <div className="hidden lg:flex justify-center gap-5 mt-8 text-slate-300 dark:text-gray-400">
                <CreditCard size={24} />
                <Wallet size={24} />
                <Apple size={24} />
              </div>
            </div>
          </aside>
        </div>

        {/* Mobile Bottom Button */}
        <div className="lg:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[90%]">
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="w-full bg-blue-600 dark:bg-blue-500 text-white rounded-2xl py-4 font-bold flex items-center justify-center gap-3 hover:bg-blue-700 dark:hover:bg-blue-600 transition-all shadow-lg active:scale-[0.98]"
          >
            {t("view_order_summary")}
          </button>
        </div>

        {/* Mobile Bottom Sheet */}
        {isSidebarOpen && (
          <div className="fixed inset-0 z-50 flex justify-end items-end lg:hidden">
            <div
              onClick={() => setIsSidebarOpen(false)}
              className="absolute inset-0 backdrop-blur-sm bg-white/10 dark:bg-black/20"
            ></div>

            <div className="relative bg-white dark:bg-zinc-800 w-full rounded-t-3xl p-6 max-h-[80vh] overflow-y-auto z-10 transition-colors">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">{t("order_summary")}</h2>
                <button
                  onClick={() => setIsSidebarOpen(false)}
                  className="text-slate-400 dark:text-gray-400 hover:text-red-500 transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="space-y-3 text-sm font-medium">
                <div className="flex justify-between">
                  <span className="text-slate-500 dark:text-gray-400">
                    {t("subtotal")}
                  </span>
                  <span className="text-lg font-bold">
                    ${subtotal.toLocaleString()}
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-slate-500 dark:text-gray-400">
                    {t("shipping")}
                  </span>
                  <span className="text-[10px] font-black text-blue-600 dark:text-blue-400 uppercase tracking-widest">
                    {t("free_express")}
                  </span>
                </div>

                <div className="flex justify-between items-end">
                  <span className="text-slate-500 dark:text-gray-400 mb-1">
                    {t("total")}
                  </span>
                  <div className="text-right">
                    <p className="text-2xl font-black tracking-tight">
                      ${total.toLocaleString()}
                    </p>
                    <p className="text-[9px] text-slate-400 dark:text-gray-500 font-bold uppercase">
                      {t("vat_included")}
                    </p>
                  </div>
                </div>
              </div>

              <hr className="my-4 border-gray-100 dark:border-zinc-700" />

              <Link to="/checkout" className="w-full bg-blue-600 dark:bg-blue-500 text-white rounded-2xl py-4 font-bold flex items-center justify-center gap-3 hover:bg-blue-700 dark:hover:bg-blue-600 transition-all shadow-lg active:scale-[0.98]">
                {t("proceed_to_checkout")} <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShoppingCart;
