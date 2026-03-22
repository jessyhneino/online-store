import React from "react";
import { useTranslation } from "react-i18next";

const TechnicalSpecifications = () => {
  const { t } = useTranslation();

  const specs = [
    { label: t("MATERIAL COMPOSITION"), value: t("100% Virgin Wool") },
    { label: t("INTERIOR LINING"), value: t("100% Cupro") },
    { label: t("TAILORED FIT"), value: t("Oversized / Relaxed") },
    { label: t("FABRIC WEIGHT"), value: t("Heavyweight (950 GSM)") },
    { label: t("PROVENANCE"), value: t("Made in Italy") },
    { label: t("GARMENT CARE"), value: t("Dry Clean Only") },
  ];

  return (
    <section className="bg-[#f9f9f9] dark:bg-zinc-900 min-h-screen flex items-center justify-center px-6 md:px-12 font-sans transition-colors duration-500">
      <div className="max-w-5xl w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-blue-600 dark:text-blue-400 font-bold tracking-[0.3em] text-xs uppercase mb-3 block transition-colors">
            {t("The Blueprint")}
          </span>

          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-gray-100 tracking-tight transition-colors">
            {t("Technical Specifications")}
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-0">
          {specs.map((spec, index) => (
            <div
              key={index}
              className="flex justify-between items-center py-6 border-b border-gray-200 dark:border-zinc-700 group hover:bg-white dark:hover:bg-zinc-800 px-2 transition-all duration-300"
            >
              <span className="text-[10px] md:text-xs font-bold text-gray-500 dark:text-gray-400 tracking-widest uppercase">
                {spec.label}
              </span>

              <span className="text-sm md:text-base font-medium text-gray-800 dark:text-gray-200 group-hover:text-black dark:group-hover:text-white">
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
