import React from "react";
import { useTranslation } from "react-i18next";

const TechnicalSpecifications = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language.split("-")[0];

  const specs = [
    { label: t("MATERIAL COMPOSITION"), value: t("100% Virgin Wool") },
    { label: t("INTERIOR LINING"), value: t("100% Cupro") },
    { label: t("TAILORED FIT"), value: t("Oversized / Relaxed") },
    { label: t("FABRIC WEIGHT"), value: t("Heavyweight (950 GSM)") },
    { label: t("PROVENANCE"), value: t("Made in Italy") },
    { label: t("GARMENT CARE"), value: t("Dry Clean Only") },
  ];

  return (
    <section className="bg-[#f9f9f9] dark:bg-[#0a0a0a] transition-colors duration-500 font-sans">
      {/* Container موحد ومطابق للنافبار والأقسام السابقة */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-blue-600 dark:text-blue-400 font-bold tracking-[0.3em] text-xs uppercase mb-3 block transition-colors">
            {t("The Blueprint")}
          </span>

          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight transition-colors">
            {t("Technical Specifications")}
          </h2>
        </div>

        {/* Grid */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-0 ${
            currentLang === "ar" ? "text-right" : "text-left"
          }`}
        >
          {specs.map((spec, index) => (
            <div
              key={index}
              className={`flex justify-between items-center py-6 border-b border-gray-200 dark:border-zinc-800 group hover:bg-white dark:hover:bg-zinc-900 px-4 -mx-4 rounded-lg transition-all duration-300 ${
                currentLang === "ar" ? "flex-row-reverse" : "flex-row"
              }`}
            >
              <span className="text-[10px] md:text-xs font-bold text-gray-400 dark:text-zinc-500 tracking-widest uppercase transition-colors group-hover:text-blue-600 dark:group-hover:text-blue-400">
                {spec.label}
              </span>

              <span className="text-sm md:text-base font-medium text-gray-800 dark:text-zinc-200 group-hover:text-black dark:group-hover:text-white transition-colors">
                {spec.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnicalSpecifications;
