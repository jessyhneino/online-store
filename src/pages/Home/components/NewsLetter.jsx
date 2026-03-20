import React from "react";
import { Mail } from "lucide-react"; // أيقونة البريد
import { useTranslation } from "react-i18next";

const NewsLetter = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-gray-50 py-16 px-6 sm:py-24">
      <div className="max-w-4xl mx-auto text-center">
        {/* أيقونة */}
        <div className="flex justify-center mb-6">
          <div className="bg-blue-600 p-3 rounded-xl shadow-lg shadow-blue-200">
            <Mail className="w-8 h-8 text-white" />
          </div>
        </div>

        {/* العنوان */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
          {t("Join the")}{" "}
          <span className="text-blue-600">{t("Curator Club")}</span>
        </h2>

        {/* الوصف */}
        <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          {t(
            "Receive early access to seasonal sales, exclusive brand launches, and editorial content directly to your inbox."
          )}
        </p>

        {/* نموذج الاشتراك */}
        <form className="max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder={t("Enter your email address")}
              className="flex-grow px-5 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white text-gray-800 shadow-sm"
              required
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-95 shadow-md shadow-blue-100 whitespace-nowrap"
            >
              {t("Subscribe Now")}
            </button>
          </div>
        </form>

        {/* نص الفوتر */}
        <p className="mt-6 text-sm text-gray-400 uppercase tracking-widest font-medium">
          {t("No spam. Only inspiration. Unsubscribe anytime.")}
        </p>
      </div>
    </section>
  );
};

export default NewsLetter;
