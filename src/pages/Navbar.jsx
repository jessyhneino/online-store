import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../store/themeSlice";
import {
  ShoppingCart,
  User,
  Search,
  Menu,
  X,
  LogOut,
  LogIn,
  Heart,
  Bell,
  ChevronDown,
  ArrowRight,
  Sun,
  Moon,
  Languages,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function AdvancedNavbar() {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const menuRef = useRef(null);
  const searchRef = useRef(null);

  // --- حالات القوائم والبحث ---
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  // --- منطق اللغة والاتجاه ---
  const currentLang = i18n.language.split("-")[0];

  useEffect(() => {
    const lang = i18n.resolvedLanguage;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = lang;
  }, [i18n.resolvedLanguage]);

  const toggleLanguage = () => {
    const newLang = i18n.resolvedLanguage === "en" ? "ar" : "en";
    i18n.changeLanguage(newLang);
  };

  // --- تأثيرات إضافية (Scroll & Click Outside) ---
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target))
        setIsUserMenuOpen(false);
      if (searchRef.current && !searchRef.current.contains(e.target))
        setIsSearchOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearchSubmit = (e) => {
    if (e.key === "Enter" && searchQuery.trim() !== "") {
      navigate(`/search?q=${searchQuery}`);
      setIsSearchOpen(false);
      setIsOpen(false);
    }
  };

  const navLinks = [
    { name: t("Home"), path: "/" },
    {
      name: t("Categories"),
      path: "/categories",
      hasMegaMenu: true,
      categories: [
        { title: t("Skincare"), items: [t("Moisturizers"), t("Cleansers")] },
        { title: t("Fragrance"), items: [t("Perfumes"), t("Candles")] },
      ],
    },
    { name: t("Deals"), path: "/deals" },
    { name: t("About"), path: "/about" },
  ];

  return (
    <>
      <nav
        className={`fixed w-full z-[100] transition-all duration-500 border-b ${
          isScrolled
            ? "bg-white/90 py-3 border-gray-200 shadow-md backdrop-blur-md dark:bg-black/90 dark:border-blue-500"
            : "bg-transparent py-6 border-transparent dark:bg-black/70 dark:border-blue-500"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* 1. Logo */}
          <Link
            to="/"
            className="text-xl sm:text-2xl font-black tracking-tighter flex items-center gap-1 group z-[110]"
          >
            <span className="bg-black dark:bg-blue-600 text-white px-2 py-0.5 rounded transition-transform group-hover:-rotate-3">
              A
            </span>
            <span
              className={
                isScrolled
                  ? "text-black dark:text-white"
                  : "text-gray-900 dark:text-gray-100"
              }
            >
              {t("TELIER")}
              <span className="font-extralight text-blue-600 dark:text-blue-400">
                {t("LUXE")}
              </span>
            </span>
          </Link>

          {/* 2. Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-10">
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
                  className={`flex items-center gap-1 text-[13px] uppercase tracking-widest transition-colors ${
                    isScrolled
                      ? "text-gray-700 dark:text-gray-300"
                      : "text-gray-900 dark:text-gray-100"
                  } hover:text-blue-600 dark:hover:text-blue-400`}
                >
                  {link.name}
                  {link.hasMegaMenu && (
                    <ChevronDown size={14} className="opacity-50" />
                  )}
                </Link>

                <AnimatePresence>
                  {link.hasMegaMenu && activeMegaMenu === link.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full -left-10 mt-4 w-[500px] bg-white dark:bg-zinc-900 shadow-2xl rounded-2xl p-8 grid grid-cols-2 gap-8 border border-gray-100 dark:border-zinc-800"
                    >
                      {link.categories.map((cat) => (
                        <div key={cat.title}>
                          <h4 className="text-black dark:text-white font-bold mb-4 border-b dark:border-zinc-800 pb-2 text-sm uppercase">
                            {cat.title}
                          </h4>
                          <ul className="space-y-3">
                            {cat.items.map((item) => (
                              <li key={item}>
                                <Link
                                  to="#"
                                  className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm flex items-center gap-2 group/item"
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
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Search - Desktop */}
            <div className="hidden lg:flex items-center" ref={searchRef}>
              <AnimatePresence>
                {isSearchOpen && (
                  <motion.div
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: 180, opacity: 1 }}
                    exit={{ width: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <input
                      autoFocus
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      onKeyDown={handleSearchSubmit}
                      placeholder="Search..."
                      className="w-full bg-gray-100 dark:bg-zinc-800 dark:text-white border border-gray-200 dark:border-zinc-700 rounded-full px-4 py-1.5 text-xs outline-none focus:ring-2 ring-blue-500/20"
                    />
                  </motion.div>
                )}
              </AnimatePresence>
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="p-2 hover:bg-gray-100 dark:hover:bg-zinc-800 rounded-full dark:text-gray-300 transition-colors"
              >
                {isSearchOpen ? <X size={18} /> : <Search size={18} />}
              </button>
            </div>

            {/* Language Switcher - HIDDEN ON MOBILE */}
            <button
              onClick={toggleLanguage}
              className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 border border-gray-200 dark:border-zinc-800 rounded-full hover:bg-gray-50 dark:hover:bg-zinc-800 transition-all group"
            >
              <Languages
                size={15}
                className="text-gray-600 dark:text-gray-400 group-hover:text-blue-600"
              />
              <span className="text-[11px] font-black dark:text-gray-300 uppercase">
                {currentLang === "en" ? "AR" : "EN"}
              </span>
            </button>

            {/* Dark Mode Button - HIDDEN ON MOBILE */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => dispatch(toggleTheme())}
              className="hidden lg:flex flex-col items-center justify-center w-10 h-10 rounded-full transition-all bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-zinc-800 dark:text-yellow-400 dark:hover:bg-zinc-700"
            >
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </motion.button>

            <div className="h-6 w-[1px] bg-gray-200 dark:bg-zinc-800 mx-1 hidden lg:block" />

            {/* User Account */}
            <div className="relative" ref={menuRef}>
              <button
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                className="flex items-center gap-2 p-1 pr-3 bg-gray-100 dark:bg-zinc-800 rounded-full hover:bg-gray-200 dark:hover:bg-zinc-700 transition-all"
              >
                <div className="h-8 w-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xs">
                  {isLoggedIn ? "JD" : <User size={14} />}
                </div>
                <ChevronDown
                  size={12}
                  className={`dark:text-gray-400 transition-transform ${
                    isUserMenuOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {isUserMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 10 }}
                    className="absolute right-0 mt-4 w-56 bg-white dark:bg-zinc-900 shadow-2xl rounded-2xl overflow-hidden border border-gray-100 dark:border-zinc-800 z-[120]"
                  >
                    <div className="p-4 bg-gray-50 dark:bg-zinc-800/50 border-b border-gray-100 dark:border-zinc-800">
                      <p className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">
                        {t("Account")}
                      </p>
                      <p className="text-sm font-medium dark:text-white">
                        John Doe
                      </p>
                    </div>
                    <div className="p-2">
                      <UserMenuItem
                        icon={<User size={16} />}
                        label={t("Profile")}
                        isDark={isDarkMode}
                      />
                      <UserMenuItem
                        icon={<Bell size={16} />}
                        label={t("Notifications")}
                        isDark={isDarkMode}
                      />
                      <button
                        onClick={() => setIsLoggedIn(!isLoggedIn)}
                        className={`flex items-center gap-3 w-full p-3 text-sm rounded-xl transition-colors ${
                          isLoggedIn
                            ? "text-red-500 hover:bg-red-50 dark:hover:bg-red-900/10"
                            : "text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/10"
                        }`}
                      >
                        {isLoggedIn ? (
                          <LogOut size={16} />
                        ) : (
                          <LogIn size={16} />
                        )}
                        {isLoggedIn ? "Logout" : t("Sign In")}
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <button
              className="lg:hidden p-2 bg-black dark:bg-blue-600 text-white rounded-lg active:scale-90"
              onClick={() => setIsOpen(true)}
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </nav>

      {/* 4. Mobile Side Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[150] lg:hidden"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-[80%] max-w-sm bg-white dark:bg-zinc-900 z-[160] shadow-2xl p-6 lg:hidden flex flex-col"
            >
              <div className="flex items-center justify-between mb-8">
                <span className="font-bold text-xl tracking-tighter dark:text-white">
                  {t("MENU")}
                </span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 dark:text-white hover:bg-gray-100 dark:hover:bg-zinc-800 rounded-full"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="mb-6 relative">
                <Search
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={handleSearchSubmit}
                  placeholder="Search products..."
                  className="w-full bg-gray-100 dark:bg-zinc-800 dark:text-white border-none rounded-2xl py-4 pl-12 pr-4 text-base focus:ring-2 ring-blue-500/50 outline-none"
                />
              </div>

              <div className="flex flex-col gap-4 flex-1 overflow-y-auto">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className="text-xl font-bold text-gray-800 dark:text-gray-100 flex items-center justify-between py-2 border-b border-gray-50 dark:border-zinc-800"
                  >
                    {link.name}
                    <ArrowRight size={20} className="text-blue-600" />
                  </Link>
                ))}
              </div>

              <div className="border-t dark:border-zinc-800 pt-6 space-y-4">
                <div className="flex items-center justify-around p-4 bg-gray-50 dark:bg-zinc-800 rounded-2xl">
                  {/* Mode & Language stay here for Mobile */}
                  <button
                    onClick={() => dispatch(toggleTheme())}
                    className="flex flex-col items-center gap-1 dark:text-yellow-400"
                  >
                    {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                    <span className="text-[10px] uppercase font-bold text-gray-500">
                      {t("Mode")}
                    </span>
                  </button>
                  <button
                    onClick={toggleLanguage}
                    className="flex flex-col items-center gap-1 dark:text-white"
                  >
                    <Languages
                      size={20}
                      className="text-gray-600 dark:text-gray-400"
                    />
                    <span className="text-[11px] font-black uppercase">
                      {currentLang === "en" ? "AR" : "EN"}
                    </span>
                  </button>
                  <div className="relative flex flex-col items-center gap-1">
                    <ShoppingCart size={20} className="dark:text-white" />
                    <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-[9px] h-4 w-4 rounded-full flex items-center justify-center font-bold">
                      3
                    </span>
                    <span className="text-[10px] uppercase font-bold text-gray-500">
                      {t("Cart")}
                    </span>
                  </div>
                </div>
                <button className="w-full bg-black dark:bg-blue-600 text-white py-4 rounded-2xl font-bold active:scale-95 transition-transform">
                  {t("Shop Now")}
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

const UserMenuItem = ({ icon, label, isDark }) => (
  <button
    className={`flex items-center gap-3 w-full p-3 text-sm transition-colors text-left rounded-xl ${
      isDark
        ? "text-gray-300 hover:bg-zinc-800"
        : "text-gray-600 hover:bg-gray-50"
    }`}
  >
    {icon} {label}
  </button>
);
