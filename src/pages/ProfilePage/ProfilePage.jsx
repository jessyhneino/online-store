import React, { useState } from "react";
import {
  User,
  Package,
  Heart,
  Settings,
  LogOut,
  ChevronRight,
  Menu,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const ProfilePage = () => {
  const { t } = useTranslation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const orders = [
    {
      id: "#CR-99021",
      name: "Performance Runner M1",
      status: t("shipped"),
      statusColor: "bg-blue-100 text-blue-600",
      date: `${t("estimated_delivery")}: Oct 24, 2024`,
      price: "$189.00",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=200&auto=format&fit=crop",
    },
    {
      id: "#CR-88712",
      name: "Lunar Edition Timepiece",
      status: t("delivered"),
      statusColor: "bg-gray-100 text-gray-600",
      date: `${t("delivered_on")}: Sept 12, 2024`,
      price: "$420.00",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=200&auto=format&fit=crop",
    },
    {
      id: "#CR-99105",
      name: "Studio Pro ANC Headphones",
      status: t("pending"),
      statusColor: "bg-orange-100 text-orange-600",
      date: t("oawaiting_processing"),
      price: "$299.00",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=200&auto=format&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-zinc-900 flex flex-col md:flex-row font-sans overflow-x-hidden text-gray-800 dark:text-gray-200 transition-colors duration-500">
      {/* Mobile Top Bar */}
      <div className="md:hidden flex items-center justify-between p-4 bg-white dark:bg-zinc-800 border-b dark:border-zinc-700 sticky top-0 z-30">
        <button
          onClick={() => setSidebarOpen(true)}
          className="p-2 hover:bg-gray-100 dark:hover:bg-zinc-700 rounded-lg transition-colors"
        >
          <Menu size={24} />
        </button>

        <h2 className="font-bold text-gray-800 dark:text-gray-100">
          {t("title")}
        </h2>

        <div className="w-10" />
      </div>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 md:hidden transition-opacity duration-300 ${
          sidebarOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setSidebarOpen(false)}
      />

      {/* Sidebar */}
      <aside
        className={`fixed z-[100] md:z-[0] md:static top-0 left-0 h-full w-72 bg-white dark:bg-zinc-900 p-6 pt-[30px] border-r border-gray-100 dark:border-zinc-800 flex flex-col justify-between transform transition-transform duration-300 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <div>
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-orange-100 dark:bg-orange-500/10 rounded-xl flex items-center justify-center text-orange-600 dark:text-orange-400 font-bold">
                JB
              </div>

              <div>
                <h2 className="font-bold text-gray-800 dark:text-gray-100 text-sm">
                  Julian Barnes
                </h2>
                <p className="text-[10px] text-gray-400 dark:text-gray-500 uppercase tracking-wider font-semibold">
                  {t("membership_status")}
                </p>
              </div>
            </div>

            <button
              onClick={() => setSidebarOpen(false)}
              className="md:hidden p-2 hover:bg-gray-100 dark:hover:bg-zinc-700 rounded-full transition-colors text-gray-500 dark:text-gray-400"
            >
              <X size={20} />
            </button>
          </div>

          {/* Nav */}
          <nav className="space-y-1.5">
            <NavItem
              icon={<User size={18} />}
              label={t("profile_info")}
              active
            />
            <NavItem icon={<Package size={18} />} label={t("orders")} />
            <NavItem icon={<Heart size={18} />} label={t("wishlist")} />
            <NavItem icon={<Settings size={18} />} label={t("settings")} />
          </nav>
        </div>

        {/* Logout */}
        <button className="flex items-center space-x-3 text-red-500 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-500/10 transition-all py-3 px-4 rounded-xl group mt-auto">
          <LogOut size={18} />
          <span className="font-semibold text-sm">{t("sign_out")}</span>
        </button>
      </aside>

      {/* Main */}
      <main className="flex-1 p-4 md:p-10 max-w-5xl mx-auto w-full">
        {/* Personal Details */}
        <section className="bg-white dark:bg-zinc-800 rounded-3xl p-6 md:p-8 shadow-sm border border-gray-50 dark:border-zinc-700 mb-8 transition-colors">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-gray-100">
              {t("personal_details")}
            </h2>

            <button className="text-blue-600 dark:text-blue-400 font-bold text-xs md:text-sm hover:bg-blue-50 dark:hover:bg-blue-500/10 px-3 py-1.5 rounded-lg transition-colors">
              {t("edit_button")}
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
            <DetailItem label={t("full_name")} value="Julian Barnes" />
            <DetailItem
              label={t("email")}
              value="j.barnes@curator.com"
            />
            <DetailItem
              label={t("shipping_address")}
              value="221B Baker Street, London, UK"
            />
            <DetailItem label={t("phone")} value="+44 20 7946 0958" />
          </div>
        </section>

        {/* Orders */}
        <section>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-gray-100">
              {t("history_title")}
            </h2>

            <div className="flex bg-gray-200/50 dark:bg-zinc-800 p-1 rounded-xl w-full sm:w-auto overflow-x-auto">
              <FilterBtn label={t("all")} active />
              <FilterBtn label={t("delivered")} />
              <FilterBtn label={t("pending")} />
            </div>
          </div>

          <div className="space-y-4">
            {orders.map((order, index) => (
              <OrderCard key={index} order={order} t={t} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

// --- Sub-Components ---

const NavItem = ({ icon, label, active = false }) => (
  <div
    className={`flex items-center space-x-3 p-3.5 rounded-xl cursor-pointer transition-all ${
      active
        ? "bg-blue-600 text-white shadow-lg shadow-blue-200/50 dark:shadow-blue-900/30"
        : "text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-zinc-800 hover:text-gray-800 dark:hover:text-gray-200"
    }`}
  >
    {icon}
    <span className="font-semibold text-sm">{label}</span>
  </div>
);

const DetailItem = ({ label, value }) => (
  <div className="group">
    <p className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-1 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">
      {label}
    </p>
    <p className="text-gray-800 dark:text-gray-100 font-semibold">{value}</p>
  </div>
);

const FilterBtn = ({ label, active = false }) => (
  <button
    className={`flex-1 sm:flex-none px-4 py-2 rounded-lg text-[11px] font-bold transition-all whitespace-nowrap ${
      active
        ? "bg-white dark:bg-zinc-700 text-blue-600 dark:text-blue-400 shadow-sm"
        : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
    }`}
  >
    {label}
  </button>
);

const OrderCard = ({ order, t }) => (
  <div className="bg-white dark:bg-zinc-800 p-4 rounded-2xl border border-gray-100 dark:border-zinc-700 flex items-center group hover:border-blue-300 dark:hover:border-blue-500 transition-all cursor-pointer shadow-sm hover:shadow-md dark:hover:shadow-zinc-900/50">
    {/* Image */}
    <div className="w-16 h-16 md:w-20 md:h-20 bg-gray-50 dark:bg-zinc-700 rounded-xl overflow-hidden flex-shrink-0">
      <img
        src={order.image}
        alt={order.name}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
      />
    </div>

    {/* Content */}
    <div className="ml-4 flex-1 grid grid-cols-1 md:grid-cols-2 gap-2">
      <div>
        <div className="flex items-center space-x-2 mb-1">
          <span
            className={`text-[8px] md:text-[9px] font-bold px-2 py-0.5 rounded uppercase ${order.statusColor}`}
          >
            {order.status}
          </span>

          <span className="text-[10px] md:text-[11px] text-gray-400 dark:text-gray-500 font-medium">
            {order.id}
          </span>
        </div>

        <h3 className="font-bold text-gray-800 dark:text-gray-100 text-sm md:text-base leading-tight">
          {order.name}
        </h3>

        <p className="text-[10px] md:text-xs text-gray-400 dark:text-gray-500 mt-1">
          {order.date}
        </p>
      </div>

      {/* Right */}
      <div className="flex items-center justify-between md:justify-end md:space-x-8 mt-2 md:mt-0">
        <div className="md:text-right">
          <p className="text-[9px] text-gray-400 dark:text-gray-500 font-bold uppercase md:hidden">
            {t("total_label")}
          </p>
          <p className="text-base md:text-lg font-black text-gray-800 dark:text-gray-100">
            {order.price}
          </p>
        </div>

        <Link to="/checkout" onClick={(e) => e.stopPropagation()}>
          <div className="bg-gray-50 dark:bg-zinc-700 p-2 rounded-full group-hover:bg-blue-600 transition-colors">
            <ChevronRight
              size={18}
              className="text-gray-400 dark:text-gray-500 group-hover:text-white transition-colors"
            />
          </div>
        </Link>
      </div>
    </div>
  </div>
);

export default ProfilePage;
