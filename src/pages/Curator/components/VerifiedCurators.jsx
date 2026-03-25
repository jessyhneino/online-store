import React from "react";
import { Pencil } from "lucide-react";
import { useTranslation } from "react-i18next";

const VerifiedCurators = () => {
  const { t } = useTranslation();

  const reviews = [
    {
      id: 1,
      name: "ELENA R.",
      text: t(
        "Perfect oversized fit. I sized down for a more traditional look and it's spot on."
      ),
      rating: 5,
    },
    {
      id: 2,
      name: "JULIAN W.",
      text: t(
        "The cupro lining feels like silk. Extremely comfortable even over heavy cashmere."
      ),
      rating: 5,
    },
  ];

  const StarRating = () => (
    <div className="flex gap-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <span key={i} className="text-yellow-500 text-xs">
          ★
        </span>
      ))}
    </div>
  );

  return (
    <div className="bg-white dark:bg-zinc-900 min-h-screen p-6 md:p-12 lg:py-16 lg:px-6 font-sans text-[#1a1a1a] dark:text-gray-200 transition-colors duration-500">
      {/* Header */}
      <div className="max-w-7xl mx-auto md:mx-28 flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
        <div>
          <span className="text-blue-600 dark:text-blue-400 text-[10px] font-bold tracking-[0.2em] uppercase">
            {t("Social Perspective")}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-3 tracking-tight">
            {t("Verified Curators")}
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-lg">
            {t("A community of perspective and style.")}
          </p>
        </div>

        <button className="bg-black dark:bg-white text-white dark:text-black px-8 py-4 rounded-full flex items-center gap-3 hover:bg-gray-800 dark:hover:bg-gray-200 transition-all shadow-lg active:scale-95">
          <span className="text-sm font-medium uppercase tracking-wider">
            {t("Submit Your Review")}
          </span>
          <Pencil size={16} />
        </button>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Featured Review */}
        <div className="lg:col-span-2 bg-[#fcfcfc] dark:bg-zinc-800 border border-gray-100 dark:border-zinc-700 rounded-[2rem] p-8 md:py-12 md:mx-6 flex flex-col justify-between min-h-[400px] shadow-sm transition-colors">
          <div>
            <StarRating />
            <blockquote className="text-2xl md:text-4xl italic font-serif leading-snug text-gray-800 dark:text-gray-100">
              {t(
                "The weight of the wool is incredible. It hangs exactly how I hoped—structured yet fluid. A true investment piece for years to come."
              )}
            </blockquote>
          </div>

          <div className="mt-12 flex items-center gap-4 pt-8 border-t border-gray-100 dark:border-zinc-700">
            <div className="w-14 h-14 bg-[#e5eef5] dark:bg-zinc-700 rounded-full flex items-center justify-center text-blue-800 dark:text-blue-300 font-bold text-sm">
              AM
            </div>
            <div>
              <h4 className="font-bold text-sm tracking-widest uppercase">
                Alexander M.
              </h4>
              <p className="text-[10px] text-gray-400 dark:text-zinc-500 tracking-widest uppercase mt-1">
                {t("Verified Curator • London, UK")}
              </p>
            </div>
          </div>
        </div>

        {/* Side Reviews */}
        <div className="flex flex-col gap-6">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-[#f8f8f8] dark:bg-zinc-800 rounded-[1.5rem] p-8 md:mx-6 flex flex-col justify-between h-full border border-transparent hover:border-gray-200 dark:hover:border-zinc-600 transition-colors"
            >
              <div>
                <StarRating />
                <p className="text-lg font-serif text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  {review.text}
                </p>
              </div>
              <h4 className="text-[10px] font-bold tracking-[0.2em] text-gray-400 dark:text-zinc-500 uppercase">
                {review.name}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VerifiedCurators;
