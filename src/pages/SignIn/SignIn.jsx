import React, { useState } from "react";
import { Mail, Lock, Eye, EyeOff, ArrowRight, Github } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function SignIn() {
  const { t } = useTranslation();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login submitted:", formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f8fafc] dark:bg-zinc-900 p-6 font-sans transition-colors duration-300">
      {/* Decorative background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-blue-50 dark:bg-blue-900/20 blur-[120px]" />
        <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] rounded-full bg-purple-50 dark:bg-purple-900/20 blur-[120px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md z-10"
      >
        <div className="bg-white/80 dark:bg-zinc-800/80 backdrop-blur-xl border border-white dark:border-zinc-700 rounded-[2rem] shadow-2xl dark:shadow-black/50 p-10 space-y-8 transition-colors">
          {/* Header */}
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
              {t("WelcomeBack")}
            </h1>
            <p className="text-gray-500 dark:text-gray-400 font-medium">
              {t("SignInToContinue")}
            </p>
          </div>

          {/* Divider */}
          <div className="relative flex items-center justify-center">
            <div className="flex-1 h-px bg-gray-100 dark:bg-zinc-700"></div>
            <span className="px-4 text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest">
              {t("OrWithEmail")}
            </span>
            <div className="flex-1 h-px bg-gray-100 dark:bg-zinc-700"></div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">
                {t("EmailAddress")}
              </label>
              <div className="relative group">
                <Mail
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition-colors"
                  size={20}
                />
                <input
                  type="email"
                  required
                  placeholder={t("EmailPlaceholder")}
                  className="w-full pl-12 pr-4 py-3.5 bg-gray-50/50 dark:bg-zinc-900/50 border border-gray-200 dark:border-zinc-700 rounded-xl focus:ring-4 focus:ring-blue-500/10 dark:focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white dark:focus:bg-zinc-800 outline-none transition-all duration-200 placeholder:text-gray-400 dark:placeholder:text-gray-500"
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-2">
              <div className="flex justify-between items-center ml-1">
                <label className="text-sm font-bold text-gray-700 dark:text-gray-300">
                  {t("Password")}
                </label>
                <button
                  type="button"
                  className="text-xs font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 transition-colors"
                >
                  {t("ForgotPassword")}
                </button>
              </div>
              <div className="relative group">
                <Lock
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition-colors"
                  size={20}
                />
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  placeholder={t("PasswordPlaceholder")}
                  className="w-full pl-12 pr-12 py-3.5 bg-gray-50/50 dark:bg-zinc-900/50 border border-gray-200 dark:border-zinc-700 rounded-xl focus:ring-4 focus:ring-blue-500/10 dark:focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white dark:focus:bg-zinc-800 outline-none transition-all duration-200 placeholder:text-gray-400 dark:placeholder:text-gray-500"
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-black dark:hover:bg-gray-200 hover:shadow-lg hover:shadow-black/10 dark:hover:shadow-white/10 transition-all duration-200 active:scale-[0.98]"
            >
              {t("SignIn")}
              <ArrowRight size={18} />
            </button>

            {/* Social */}
            <div className="grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center gap-2 py-3 px-4 border border-gray-200 dark:border-zinc-700 rounded-xl hover:bg-gray-50 dark:hover:bg-zinc-800 transition-all duration-200 active:scale-95">
                <img
                  src="https://www.svgrepo.com/show/475656/google-color.svg"
                  className="w-5 h-5"
                  alt="Google"
                />
                <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                  {t("Google")}
                </span>
              </button>
              <button className="flex items-center justify-center gap-2 py-3 px-4 border border-gray-200 dark:border-zinc-700 rounded-xl hover:bg-gray-50 dark:hover:bg-zinc-800 transition-all duration-200 active:scale-95">
                <Github
                  size={20}
                  className="text-gray-900 dark:text-gray-100"
                />
                <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                  {t("Github")}
                </span>
              </button>
            </div>
          </form>

          {/* Footer */}
          <p className="text-center text-gray-500 dark:text-gray-400 font-medium">
            {t("NoAccount")} {" "}
            <Link to="/signup" className="text-blue-600 dark:text-blue-400 font-bold hover:underline underline-offset-4">
              {t("CreateOne")}
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
}