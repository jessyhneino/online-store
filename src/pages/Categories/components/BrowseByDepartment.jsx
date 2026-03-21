import React from "react";
import { useTranslation } from "react-i18next";

const BrowseByDepartment = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-[#f8f9fa] dark:bg-zinc-900 py-16 px-6 md:py-24 md:px-12 lg:px-24 transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
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
        <p className="mt-8 text-gray-600 dark:text-gray-300 text-base md:text-lg lg:text-xl max-w-xl leading-relaxed transition-colors duration-500">
          {t(
            "Explore our meticulously selected range of essentials, electronics, and aesthetic improvements. Each category is curated to ensure"
          )}{" "}
          <span className="font-semibold text-gray-800 dark:text-gray-100 transition-colors duration-500">
            {t("quality over quantity")}
          </span>
          .
        </p>

        {/* لمسة زخرفية */}
        <div className="mt-12 w-20 h-1 bg-[#005bc4] dark:bg-blue-400 rounded-full transition-colors duration-500"></div>
      </div>
    </section>
  );
};

export default BrowseByDepartment;
