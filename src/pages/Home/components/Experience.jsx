import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom"; // يُفضل دائماً استخدام Link للتنقل

const Experience = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language.split("-")[0];

  return (
    <section
      className="relative bg-[#1e2329] dark:bg-zinc-950 transition-colors duration-300 min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Decorative Element */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -right-[10%] w-[300px] h-[300px] bg-blue-500/10 dark:bg-blue-500/20 blur-[120px] rounded-full"></div>
        <div className="absolute -bottom-[10%] -left-[10%] w-[300px] h-[300px] bg-white/5 dark:bg-white/10 blur-[120px] rounded-full"></div>
      </div>

      {/* Container موحد ومطابق للنافبار والأقسام السابقة */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        {/* Text Content (تم تعديل المحاذاة لتدعم الاتجاهين) */}
        <div 
          className={`space-y-6 md:space-y-8 text-white order-2 lg:order-1 flex flex-col items-center ${
            currentLang === 'ar' ? 'lg:items-end lg:text-right' : 'lg:items-start lg:text-left'
          }`}
        >
          <div className={`space-y-3 flex flex-col ${currentLang === 'ar' ? 'lg:items-end' : 'lg:items-start'}`}>
            <span className="inline-block text-[#636e7a] dark:text-zinc-400 uppercase tracking-[0.25em] text-[10px] sm:text-xs font-bold bg-white/5 dark:bg-white/10 px-3 py-1 rounded-full lg:bg-transparent lg:p-0">
              {t("Limited Availability")}
            </span>

            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
              {t("Experience Luxury")} <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 dark:from-blue-400 dark:to-blue-500">
                {t("Without Borders.")}
              </span>
            </h1>
          </div>

          <p className="text-gray-400 dark:text-zinc-400 text-base sm:text-lg md:text-xl max-w-md lg:max-w-sm leading-relaxed font-light mx-auto lg:mx-0">
            {t(
              "Global shipping available for our entire collection. Curated locally, delivered globally."
            )}
          </p>

          <div className="pt-4 w-full sm:w-auto">
            <Link
              to="/collection"
              className="w-full sm:w-auto bg-[#1d75e9] hover:bg-[#1669d4] active:scale-95 transition-all duration-300 text-white px-8 md:px-12 py-4 rounded-2xl font-semibold text-base shadow-2xl shadow-blue-500/20 hover:shadow-blue-500/40 dark:shadow-blue-500/30 dark:hover:shadow-blue-500/50 inline-block text-center"
            >
              {t("Discover More")}
            </Link>
          </div>

          {/* Arabic Support (يقلب اتجاهه بذكاء أيضاً) */}
          <div 
            className={`flex flex-wrap items-center justify-center pt-8 opacity-70 border-t border-white/5 dark:border-zinc-800 w-full lg:w-fit gap-3 ${
              currentLang === 'ar' ? 'lg:justify-end lg:flex-row-reverse' : 'lg:justify-start'
            }`}
          >
            <span className="text-[12px] sm:text-[13px] italic font-light tracking-wide">
              {t("Arabic support available")}
            </span>
            <div className="hidden sm:block h-[1px] w-8 bg-gray-600 dark:bg-zinc-700"></div>
            <span className="text-sm sm:text-base font-medium" dir="rtl">
              {t("الدعم العربي متاح")}
            </span>
          </div>
        </div>

        {/* Image Content */}
        <div className={`relative order-1 lg:order-2 flex justify-center px-4 sm:px-0 ${
          currentLang === 'ar' ? 'lg:justify-start' : 'lg:justify-end'
        }`}>
          <div className="absolute -inset-10 bg-blue-600/10 dark:bg-blue-500/20 rounded-full blur-[80px] animate-pulse"></div>

          <div className="relative w-full max-w-[320px] sm:max-w-[400px] lg:max-w-[480px] aspect-[4/5] group">
            {/* إطار الخلفية المائل */}
            <div className={`absolute -inset-3 border border-white/10 dark:border-zinc-700 rounded-[2.5rem] transition-transform duration-700 group-hover:rotate-0 ${
              currentLang === 'ar' ? 'rotate-3' : '-rotate-3'
            }`}></div>

            <div 
              className={`relative w-full h-full overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] shadow-2xl transform transition-all duration-700 ease-out border border-white/10 dark:border-zinc-700 group-hover:rotate-0 ${
                currentLang === 'ar' ? 'lg:-rotate-3' : 'lg:rotate-3'
              }`}
            >
              <img
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1000&auto=format&fit=crop"
                alt={t("Luxury Modern Interior")}
                className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition-opacity duration-500"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;