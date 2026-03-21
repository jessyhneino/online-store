import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";

const Pagination = ({ onNext, onPrev, currentSlide, totalSlides }) => {
  const { t } = useTranslation();

  return (
    <div className="mt-10 flex justify-center items-center gap-4 border-t border-gray-100 pt-10">
      <button
        onClick={onPrev}
        className="p-2 hover:bg-gray-50 rounded-full transition-colors text-gray-400 hover:text-black"
        aria-label={t("previousSlide")}
      >
        <ChevronLeft size={20} />
      </button>

      <div className="flex items-center gap-1">
        {/* عرض رقم السلايد الحالي من الإجمالي */}
        <span className="text-sm font-bold bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg">
          {currentSlide + 1}
        </span>
        <span className="text-gray-300 px-2">/</span>
        <span className="text-sm font-bold text-gray-500">
          {totalSlides} {t("slides")}
        </span>
      </div>

      <button
        onClick={onNext}
        className="p-2 hover:bg-gray-50 rounded-full transition-colors text-gray-400 hover:text-black"
        aria-label={t("nextSlide")}
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
};

export default Pagination;
