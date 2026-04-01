import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language.split("-")[0];

  return (
    <section className="relative h-screen w-full overflow-hidden font-sans group">
      {/* Background Image & Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[10s] ease-out group-hover:scale-110"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?q=80&w=2070&auto=format&fit=crop')`,
        }}
      >
        <div className="absolute inset-0 bg-black/50 md:bg-gradient-to-tr md:from-black md:via-black/40 md:to-transparent opacity-90 dark:bg-black/70 dark:md:from-black dark:md:via-black/60 dark:md:to-transparent"></div>
      </div>

      {/* Content Container (تم تعديله ليطابق الـ Navbar تماماً) */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 flex h-full flex-col justify-center text-white">
        {/* Subtitle */}
        <div className="animate-fade-in-down mb-4 md:mb-6 flex items-center gap-3">
          <span className="hidden md:block h-[1px] w-8 bg-blue-600 dark:bg-blue-400"></span>
          <p className="text-[10px] md:text-xs tracking-[0.3em] md:tracking-[0.4em] uppercase font-semibold text-blue-600 dark:text-blue-400">
            {t("Summer Collection 2026")}
          </p>
        </div>

        {/* Title */}
        <h1 className="mb-6 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[1.1] max-w-4xl drop-shadow-2xl">
          {t("The Art Of")} <br className="hidden sm:block" />
          <span className="bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500 bg-clip-text text-transparent">
            {t("Living Well.")}
          </span>
        </h1>

        {/* Description */}
        <p
          className={`mb-8 md:mb-10 max-w-md text-sm md:text-lg text-gray-300/90 dark:text-gray-300/80 leading-relaxed font-light border-none md:border-white/10 ${
            currentLang === "ar"
              ? "md:border-r-2 md:pr-6"
              : "md:border-l-2 md:pl-6"
          }`}
        >
          {t(
            "Explore our curated selection of timeless essentials, handpicked forthe modern aesthetic. High quality meets minimalist design."
          )}
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <Link
            to="/collection"
            className="relative overflow-hidden group/btn rounded-full bg-blue-600 px-10 py-4 text-sm font-bold tracking-wide shadow-lg transition-all duration-300 hover:bg-blue-700 hover:-translate-y-1 active:scale-95 text-center inline-block"
          >
            <span className="relative z-10">{t("shop now")}</span>
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-600 group-hover/btn:translate-x-full"></div>
          </Link>

          <Link
            to="/collection"
            className="rounded-full bg-white/10 px-10 py-4 text-sm font-bold backdrop-blur-md border border-white/20 transition-all duration-300 hover:bg-white/20 hover:border-white/40 hover:-translate-y-1 active:scale-95 inline-block text-center dark:bg-white/10 dark:border-white/20 dark:hover:bg-white/20 dark:hover:border-white/40"
          >
            {t("Show Products")}
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2 opacity-50">
        <div className="w-[1px] h-10 md:h-12 bg-gradient-to-b from-white to-transparent"></div>
        <span className="text-[9px] uppercase tracking-widest text-white">
          {t("Scroll")}
        </span>
      </div>
    </section>
  );
};

export default HeroSection;
