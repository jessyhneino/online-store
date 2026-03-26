import React, { useState } from "react";
import {
  Bell,
  Truck,
  Tag,
  Heart,
  ShieldCheck,
  CheckCircle,
  Check,
} from "lucide-react";

const NotificationsPage = () => {
  const [filter, setFilter] = useState("All");

  const notifications = [
    {
      id: 1,
      type: "Orders",
      title: "Your order #TC-8921 is out for delivery",
      desc: "Our courier partner is in your neighborhood. Expected delivery between 2:00 PM and 4:00 PM today.",
      time: "2 hours ago",
      unread: true,
      icon: <Truck className="text-blue-600" size={20} />,
      iconBg: "bg-blue-100 dark:bg-blue-900/30",
    },
    {
      id: 2,
      type: "Promotions",
      title: "Exclusive Early Access: Summer Archive",
      desc: "As a Curator member, you have 24-hour early access to our most anticipated collection of the season.",
      time: "5 hours ago",
      unread: false,
      icon: <Tag className="text-orange-600" size={20} />,
      iconBg: "bg-orange-100 dark:bg-orange-900/30",
    },
    {
      id: 3,
      type: "Promotions",
      title: "Price Drop on your Wishlist",
      desc: "The 'Minimalist Ceramic Vase' in your wishlist is now 20% off for a limited time.",
      time: "Yesterday",
      unread: false,
      icon: <Heart className="text-gray-600 dark:text-gray-300" size={20} />,
      iconBg: "bg-gray-100 dark:bg-zinc-800",
    },
    {
      id: 4,
      type: "System",
      title: "Security Update: New Login Detected",
      desc: "A new login was detected on a Safari browser from London, UK. If this wasn't you, please secure your account.",
      time: "2 days ago",
      unread: false,
      icon: (
        <ShieldCheck className="text-gray-600 dark:text-gray-300" size={20} />
      ),
      iconBg: "bg-gray-100 dark:bg-zinc-800",
    },
    {
      id: 5,
      type: "Orders",
      title: "Order Delivered",
      desc: "Package for order #TC-8840 was left at your front door. We hope you enjoy your new pieces.",
      time: "3 days ago",
      unread: false,
      icon: <CheckCircle className="text-blue-600" size={20} />,
      iconBg: "bg-blue-100 dark:bg-blue-900/30",
    },
  ];

  const filteredNotifications =
    filter === "All"
      ? notifications
      : notifications.filter((n) => n.type === filter);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-zinc-900 py-6 px-6 sm:px-6 lg:px-8 font-sans transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-2">
              Notifications
            </h1>
            <p className="text-gray-500 dark:text-gray-400">
              Stay updated with your curated journey.
            </p>
          </div>

          <button className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 transition-colors font-medium">
            <Check size={18} className="mr-1" />
            Mark all as read
          </button>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-8 overflow-x-auto pb-2 scrollbar-hide">
          {["All", "Orders", "Promotions", "System"].map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                filter === tab
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-gray-200 dark:bg-zinc-800 text-gray-600 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-zinc-700"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* List */}
        <div className="space-y-4 mb-10">
          {filteredNotifications.map((item) => (
            <div
              key={item.id}
              className={`relative group flex gap-4 p-5 bg-white dark:bg-zinc-800 rounded-2xl border border-gray-100 dark:border-zinc-700 shadow-sm hover:shadow-md dark:hover:shadow-black/40 transition-all duration-300 ${
                item.unread ? "border-l-4 border-l-blue-600" : ""
              }`}
            >
              <div
                className={`flex-shrink-0 w-12 h-12 rounded-xl ${item.iconBg} flex items-center justify-center`}
              >
                {item.icon}
              </div>

              <div className="flex-grow">
                <div className="flex justify-between items-start gap-2">
                  <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100 leading-tight">
                    {item.title}
                  </h3>
                  <span className="text-xs text-gray-400 dark:text-gray-500 whitespace-nowrap mt-1">
                    {item.time}
                  </span>
                </div>

                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400 leading-relaxed max-w-2xl">
                  {item.desc}
                </p>

                {item.unread && (
                  <div className="mt-2 flex items-center gap-1.5">
                    <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
                    <span className="text-[10px] font-bold text-blue-600 uppercase tracking-wider">
                      Unread
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Settings */}
          <div className="bg-gray-200/50 dark:bg-zinc-800 rounded-2xl p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                Notification Settings
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-6">
                Control how and when you want to be notified.
              </p>
            </div>

            <button className="bg-white dark:bg-zinc-900 text-gray-900 dark:text-white font-semibold py-3 px-6 rounded-xl shadow-sm hover:bg-gray-50 dark:hover:bg-zinc-700 transition-colors w-fit">
              Customize Preferences
            </button>
          </div>

          {/* Deals */}
          <div className="bg-blue-600 rounded-2xl p-8 text-white flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Bell size={120} />
            </div>

            <div className="relative z-10">
              <h3 className="text-xl font-bold mb-2">Exclusive Deals</h3>
              <p className="text-blue-100 text-sm mb-6">
                Don't miss out on our limited editorial drops.
              </p>
            </div>

            <button className="relative z-10 bg-white text-blue-600 font-semibold py-3 px-6 rounded-xl shadow-sm hover:bg-blue-50 transition-colors w-fit">
              View Offers
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationsPage;
