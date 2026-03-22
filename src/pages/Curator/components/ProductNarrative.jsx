import React from "react";
import { useTranslation } from "react-i18next";

const ProductNarrative = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-white dark:bg-zinc-900 py-16 md:py-24 font-sans text-gray-900 dark:text-gray-200 overflow-hidden transition-colors duration-500">
      <div className="max-w-7xl mx-auto pr-6 pl-12 md:pr-6 md:pl-12 lg:pr-10 lg:pl-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* قسم الصور المعدل */}
          <div className="relative flex items-center justify-center lg:justify-start w-full">
            {/* التعديل هنا: جعل translate-x متساوي على كل breakpoints للـ RTL والـ LTR */}
            <div
              className="w-40 h-56 md:w-60 md:h-80 rounded-lg overflow-hidden shadow-2xl z-10 transform
                            ltr:-translate-x-6 rtl:translate-x-6
                            md:ltr:-translate-x-10 md:rtl:translate-x-10
                            ring-4 ring-white dark:ring-zinc-900 transition-all duration-500"
            >
              <img
                src="https://images.unsplash.com/photo-1588099768531-a72d4a198538?q=80&w=800&auto=format&fit=crop"
                alt={t("Fabric Texture Detail")}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="w-52 h-64 md:w-72 md:h-[500px] rounded-lg overflow-hidden shadow-2xl z-20">
              <img
                src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=800&auto=format&fit=crop"
                alt={t("Model wearing minimalist overcoat")}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* النص */}
          <div className="flex flex-col space-y-8">
            <div className="space-y-4">
              <span className="text-blue-600 dark:text-blue-400 font-bold tracking-[0.25em] text-xs uppercase block transition-colors duration-500">
                {t("The Narrative")}
              </span>

              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight text-slate-800 dark:text-gray-100 transition-colors duration-500">
                {t("A masterclass in minimalist architecture.")}
              </h2>
            </div>

            {/* تم تغيير border-l-2 إلى border-s-2 لتناسب العربي والإنجليزي تلقائياً */}
            <p className="font-serif italic text-xl md:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed border-s-2 border-blue-100 dark:border-blue-900 ps-6 transition-colors duration-500">
              {t(
                "Crafted from 100% heavy-weight virgin wool, this overcoat defines the intersection of traditional tailoring and modern silhouette."
              )}
            </p>

            <p className="text-gray-500 dark:text-gray-400 leading-relaxed max-w-lg text-sm md:text-base transition-colors duration-500">
              {t(
                "Designed with a dropped shoulder and an elongated hem, it creates a dramatic yet grounded profile. The interior is fully lined with premium cupro, ensuring effortless layering. Each piece is hand-finished in our small-batch atelier."
              )}
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-8 pt-10 border-t border-gray-100 dark:border-zinc-700 transition-colors duration-500">
              <FeatureItem title={t("Concealed Horn-Button")} />
              <FeatureItem title={t("Dual Internal Pockets")} />
              <FeatureItem title={t("Reinforced Notched Lapel")} />
              <FeatureItem title={t("Italian Cupro Lining")} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FeatureItem = ({ title }) => (
  // استخدمنا space-x-reverse للتوافق مع RTL
  <div className="flex items-center space-x-3 rtl:space-x-reverse group">
    <div className="h-[1px] w-6 bg-blue-300 dark:bg-blue-700 group-hover:w-10 transition-all duration-300"></div>
    <span className="uppercase text-[10px] tracking-widest font-bold text-gray-600 dark:text-gray-300 transition-colors duration-500">
      {title}
    </span>
  </div>
);

export default ProductNarrative;
