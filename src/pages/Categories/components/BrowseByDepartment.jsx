import React from "react";
import { useTranslation } from "react-i18next";

const BrowseByDepartment = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language.split("-")[0];

  return (
    // تم توحيد اللون الخلفي هنا مع التصميم العام وتنعيم الـ Padding
    <section className="bg-gray-50 dark:bg-zinc-900 transition-colors duration-500">
      {/* Container موحد ومطابق للنافبار والأقسام السابقة */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-12">
        {/* المحتوى تم ضبط محاذاته ليدعم الـ RTL والـ LTR تلقائياً */}
        <div
          className={`flex flex-col ${
            currentLang === "ar"
              ? "items-start text-right"
              : "items-start text-left"
          }`}
        >
          {/* العنوان الصغير العلوي */}
          <span className="block text-[#a07e4d] dark:text-[#d6b38f] text-xs font-bold tracking-[0.2em] uppercase mb-4 transition-colors duration-500">
            {t("The Collection")}
          </span>

          {/* العنوان الرئيسي الهجين */}
          <h2 className="flex flex-col text-5xl md:text-7xl lg:text-8xl font-black leading-tight tracking-tighter">
            {/* الجزء الأسود - خط Sans-serif عريض */}
            <span className="text-gray-900 dark:text-gray-100 transition-colors duration-500">
              {t("Browse by")}
            </span>

            {/* الجزء الأزرق - خط Serif مائل */}
            <span className="text-[#005bc4] dark:text-blue-400 italic font-serif -mt-2 md:-mt-4 transition-colors duration-500">
              {t("Department")}
            </span>
          </h2>

          {/* النص الوصفي */}
          <p className="mt-8 text-gray-600 dark:text-zinc-400 text-base md:text-lg lg:text-xl max-w-2xl leading-relaxed transition-colors duration-500">
            {t(
              "Explore our meticulously selected range of essentials, electronics, and aesthetic improvements. Each category is curated to ensure"
            )}{" "}
            <span className="font-semibold text-gray-800 dark:text-gray-100 transition-colors duration-500">
              {t("quality over quantity")}
            </span>
            .
          </p>

          {/* لمسة زخرفية (الخط يتجه لليمين في العربي ولليسار في الإنجليزي) */}
          <div className="mt-12 w-20 h-1 bg-[#005bc4] dark:bg-blue-400 rounded-full transition-colors duration-500"></div>
        </div>
      </div>
    </section>
  );
};

export default BrowseByDepartment;
