import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const OrdersPage = () => {
  const { t } = useTranslation();

  // ✅ استخدام keys ثابتة
  const [activeTab, setActiveTab] = useState("all");

  const tabs = [
    { key: "all", label: t("All Orders") },
    { key: "progress", label: t("In Progress") },
    { key: "completed", label: t("Completed") },
    { key: "cancelled", label: t("Cancelled") },
  ];

  const orders = [
    {
      id: "#ORD-7742",
      date: "October 14, 2024",
      status: t("PROCESSING"),
      statusColor:
        "bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-300",
      images: [
        "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?q=80&w=200&auto=format&fit=crop",
      ],
      extraItems: 1,
      amount: "$542.00",
      action: "Track Order",
      primaryBtn: true,
      tab: "progress",
    },
    {
      id: "#ORD-6921",
      date: "September 28, 2024",
      status: t("SHIPPED"),
      statusColor:
        "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-300",
      images: [
        "https://images.unsplash.com/photo-1549490349-8643362247b5?q=80&w=200&auto=format&fit=crop",
      ],
      amount: "$1,250.00",
      action: "Track Order",
      primaryBtn: true,
      tab: "progress",
    },
    {
      id: "#ORD-5510",
      date: "August 12, 2024",
      status: t("DELIVERED"),
      statusColor:
        "bg-gray-100 text-gray-600 dark:bg-zinc-800 dark:text-gray-300",
      images: [
        "https://images.unsplash.com/photo-1576016770956-debb63d92058?q=80&w=200&auto=format&fit=crop",
      ],
      amount: "$399.00",
      action: "Return Item",
      primaryBtn: false,
      tab: "completed",
    },
  ];

  // ✅ فلترة حسب التاب
  const filteredOrders =
    activeTab === "all"
      ? orders
      : orders.filter((order) => order.tab === activeTab);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-zinc-900 py-6 px-6 sm:px-6 lg:px-0 font-sans transition-colors duration-300">
      <div className="max-w-6xl mx-auto w-full">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
            {t("My Orders")}
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-2">
            {t("Manage and track your digital gallery acquisitions.")}
          </p>
        </header>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeTab === tab.key
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-gray-200 dark:bg-zinc-800 text-gray-600 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-zinc-700"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Orders */}
        <div className="space-y-6 w-full">
          {filteredOrders.map((order, index) => (
            <div
              key={index}
              className="bg-white dark:bg-zinc-800 rounded-xl border border-gray-100 dark:border-zinc-700 shadow-sm dark:shadow-black/40 overflow-hidden w-full transition-all duration-300"
            >
              <div className="p-6">
                {/* Top Info */}
                <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                  <div className="flex items-center gap-3">
                    <span className="font-bold text-gray-900 dark:text-gray-100">
                      {order.id}
                    </span>
                    <span className="text-gray-400 dark:text-gray-500">•</span>
                    <span className="text-gray-500 dark:text-gray-400 text-sm">
                      {order.date}
                    </span>
                    <span
                      className={`text-[10px] font-bold px-2.5 py-1 rounded-md ml-2 ${order.statusColor}`}
                    >
                      {order.status}
                    </span>
                  </div>
                </div>

                {/* Images */}
                <div className="flex gap-3 mb-8">
                  {order.images.map((img, idx) => (
                    <div
                      key={idx}
                      className="w-20 h-20 bg-gray-100 dark:bg-zinc-700 rounded-lg overflow-hidden border border-gray-50 dark:border-zinc-600"
                    >
                      <img
                        src={img}
                        alt="product"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}

                  {order.extraItems > 0 && (
                    <div className="w-20 h-20 bg-gray-100 dark:bg-zinc-700 rounded-lg flex items-center justify-center text-gray-500 dark:text-gray-300 font-medium border border-gray-50 dark:border-zinc-600 text-sm">
                      +{order.extraItems}
                    </div>
                  )}
                </div>

                <hr className="border-gray-100 dark:border-zinc-700 mb-6" />

                {/* Footer */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                      {t("Total Amount")}
                    </p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                      {order.amount}
                    </p>
                  </div>

                  <div className="flex items-center gap-4">
                    <button className="text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors">
                      {t("View Order Details")}
                    </button>

                    <button
                      className={`px-6 py-2.5 rounded-lg text-sm font-bold transition-all ${
                        order.primaryBtn
                          ? "bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-100 dark:shadow-black/40"
                          : "bg-gray-200 dark:bg-zinc-700 text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-zinc-600"
                      }`}
                    >
                      {t(order.action)}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Support */}
        <div className="mt-12 bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 transition-colors duration-300">
          <div className="max-w-md">
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
              {t("Need assistance with an order?")}
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
              {t(
                "Our curation team is available 24/7 to ensure your experience remains exceptional. From tracking to returns, we handle the details."
              )}
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <button className="px-6 py-3 bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-700 text-gray-700 dark:text-gray-200 rounded-lg font-bold text-sm hover:shadow-md dark:hover:bg-zinc-700 transition-all">
              {t("Contact Support")}
            </button>

            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-bold text-sm hover:bg-blue-700 shadow-lg shadow-blue-100 dark:shadow-black/40 transition-all">
              {t("Visit Help Center")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrdersPage;