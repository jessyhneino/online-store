import React, { useState, useEffect, useRef } from "react";
import {
  ShoppingCart,
  User,
  Search,
  Menu,
  X,
  LogOut,
  LogIn,
  UserPlus,
  Heart,
  Bell,
  ChevronDown,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function AdvancedNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState(null);

  const menuRef = useRef();

  // تغيير ستايل النافبار عند التمرير
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // إغلاق القوائم عند النقر في الخارج
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsUserMenuOpen(false);
        setActiveMegaMenu(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    {
      name: "Shop",
      path: "/shop",
      hasMegaMenu: true,
      categories: [
        {
          title: "New Arrivals",
          items: ["Summer Collection", "Luxury Watches", "Silk Scarves"],
        },
        {
          title: "Featured",
          items: ["Best Sellers", "Limited Edition", "Celebrity Choice"],
        },
      ],
    },
    { name: "Deals", path: "/deals" },
    { name: "About", path: "/about" },
  ];

  return (
    <>
      <nav
        className={`fixed w-full z-[100] transition-all duration-500 border-b border-gray-200 shadow-md ${
          isScrolled
            ? "bg-white/80 backdrop-blur-lg py-3"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* 1. Logo */}
          <Link
            to="/"
            className="text-2xl font-black tracking-tighter flex items-center gap-1 group"
          >
            <span className="bg-black text-white px-2 py-0.5 rounded transition-transform group-hover:-rotate-3">
              A
            </span>
            <span className={isScrolled ? "text-black" : "text-gray-900"}>
              TELIER<span className="font-extralight text-blue-600">LUXE</span>
            </span>
          </Link>

          {/* 2. Desktop Navigation with Mega Menu */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="font-bold relative group"
                onMouseEnter={() =>
                  link.hasMegaMenu && setActiveMegaMenu(link.name)
                }
                onMouseLeave={() => setActiveMegaMenu(null)}
              >
                <Link
                  to={link.path}
                  className={`font-bold flex items-center gap-1 text-[13px] uppercase tracking-widest font-bold transition-colors ${
                    isScrolled ? "text-gray-700" : "text-gray-900"
                  } hover:text-blue-600`}
                >
                  {link.name}
                  {link.hasMegaMenu && (
                    <ChevronDown size={14} className="opacity-50" />
                  )}
                </Link>

                {/* Mega Menu Overlay */}
                <AnimatePresence>
                  {link.hasMegaMenu && activeMegaMenu === link.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full -left-10 mt-4 w-[500px] bg-white shadow-2xl rounded-2xl p-8 grid grid-cols-2 gap-8 border border-gray-100"
                    >
                      {link.categories.map((cat) => (
                        <div key={cat.title}>
                          <h4 className="text-black font-bold mb-4 border-b pb-2 text-sm uppercase">
                            {cat.title}
                          </h4>
                          <ul className="space-y-3">
                            {cat.items.map((item) => (
                              <li key={item}>
                                <Link
                                  to="#"
                                  className="text-gray-500 hover:text-blue-600 text-sm flex items-center gap-2 group/item"
                                >
                                  <div className="h-1 w-0 bg-blue-600 transition-all group-hover/item:w-3" />
                                  {item}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* 3. Actions Area */}
          <div className="flex items-center gap-5">
            {/* Search Animated */}
            <div className="relative flex items-center">
              <AnimatePresence>
                {isSearchOpen && (
                  <motion.input
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: 220, opacity: 1 }}
                    exit={{ width: 0, opacity: 0 }}
                    type="text"
                    placeholder="Search luxury products..."
                    className="absolute right-10 bg-gray-100/80 backdrop-blur-sm border border-gray-200 rounded-full px-5 py-2 text-sm outline-none focus:ring-2 ring-blue-500/20"
                  />
                )}
              </AnimatePresence>
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                {isSearchOpen ? <X size={20} /> : <Search size={20} />}
              </button>
            </div>

            {/* Icons with Tooltips (Simplified) */}
            <div className="hidden sm:flex items-center gap-3 border-l pl-5 border-gray-200">
              <button className="relative p-2 hover:bg-gray-100 rounded-full transition-colors">
                <Heart size={20} className="text-gray-700" />
              </button>

              <button className="relative p-2 hover:bg-gray-100 rounded-full transition-colors">
                <ShoppingCart size={20} className="text-gray-700" />
                <span className="absolute top-1 right-1 bg-blue-600 text-white text-[10px] font-bold h-4 w-4 flex items-center justify-center rounded-full ring-2 ring-white">
                  3
                </span>
              </button>

              <div className="relative" ref={menuRef}>
                <button
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className="flex items-center gap-2 p-1 pr-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-all"
                >
                  <div className="h-8 w-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xs">
                    {isLoggedIn ? "JD" : <User size={16} />}
                  </div>
                  <ChevronDown
                    size={14}
                    className={`transition-transform ${
                      isUserMenuOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* User Dropdown */}
                <AnimatePresence>
                  {isUserMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="absolute right-0 mt-4 w-56 bg-white shadow-2xl rounded-2xl overflow-hidden border border-gray-100"
                    >
                      <div className="p-4 bg-gray-50 border-b border-gray-100">
                        <p className="text-xs text-gray-400 uppercase font-bold tracking-tighter">
                          Account
                        </p>
                        <p className="text-sm font-medium text-gray-800">
                          John Doe
                        </p>
                      </div>
                      <div className="p-2">
                        {isLoggedIn ? (
                          <>
                            <UserMenuItem
                              icon={<User size={16} />}
                              label="Profile"
                            />
                            <UserMenuItem
                              icon={<Bell size={16} />}
                              label="Notifications"
                            />
                            <button
                              onClick={() => setIsLoggedIn(false)}
                              className="flex items-center gap-3 w-full p-3 text-sm text-red-500 hover:bg-red-50 rounded-xl transition-colors"
                            >
                              <LogOut size={16} /> Logout
                            </button>
                          </>
                        ) : (
                          <button
                            onClick={() => setIsLoggedIn(true)}
                            className="flex items-center gap-3 w-full p-3 text-sm text-blue-600 hover:bg-blue-50 rounded-xl transition-colors"
                          >
                            <LogIn size={16} /> Sign In
                          </button>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Mobile Menu Trigger */}
            <button
              className="lg:hidden p-2 bg-black text-white rounded-lg"
              onClick={() => setIsOpen(true)}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* 4. Mobile Side Menu (Drawer) */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[110] lg:hidden"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-[85%] max-w-sm bg-white z-[120] shadow-2xl p-8 lg:hidden flex flex-col"
            >
              <div className="flex items-center justify-between mb-10">
                <span className="font-bold text-xl tracking-tighter">MENU</span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-full"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="flex flex-col gap-6 flex-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className="text-2xl font-bold text-gray-800 flex items-center justify-between group"
                  >
                    {link.name}
                    <ArrowRight
                      size={20}
                      className="opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0"
                    />
                  </Link>
                ))}
              </div>

              <div className="border-t pt-6 space-y-4">
                <button className="w-full bg-black text-white py-4 rounded-2xl font-bold">
                  Shop Now
                </button>
                <div className="flex justify-center gap-6 text-gray-400">
                  <Heart size={20} />
                  <Bell size={20} />
                  <ShoppingCart size={20} />
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

// Helper Component
const UserMenuItem = ({ icon, label }) => (
  <button className="flex items-center gap-3 w-full p-3 text-sm text-gray-600 hover:bg-gray-50 rounded-xl transition-colors text-left">
    {icon} {label}
  </button>
);
