import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";

const Pagination = ({ onNext, onPrev, currentSlide, totalSlides }) => {
  const { t } = useTranslation();

  return (
    <div className="mt-10 flex justify-center items-center gap-4 border-t border-gray-100 dark:border-zinc-700 pt-10 transition-colors duration-500">
      {/* زر السابق */}
      <button
        onClick={onPrev}
        className="p-2 rounded-full transition-colors text-gray-400 hover:text-black dark:text-gray-400 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-zinc-800"
        aria-label={t("previousSlide")}
      >
        <ChevronLeft size={20} />
      </button>

      {/* رقم السلايد */}
      <div className="flex items-center gap-1">
        <span className="text-sm font-bold bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg">
          {currentSlide + 1}
        </span>
        <span className="text-gray-300 dark:text-zinc-400 px-2">/</span>
        <span className="text-sm font-bold text-gray-500 dark:text-gray-300">
          {totalSlides} {t("slides")}
        </span>
      </div>

      {/* زر التالي */}
      <button
        onClick={onNext}
        className="p-2 rounded-full transition-colors text-gray-400 hover:text-black dark:text-gray-400 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-zinc-800"
        aria-label={t("nextSlide")}
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
};

export default Pagination;
