import React from "react";
import { Mail } from "lucide-react";
import { useTranslation } from "react-i18next";

const NewsLetter = () => {
  const { t } = useTranslation();

  return (
    <section
      className="bg-gray-50 py-16 px-6 sm:py-24
                        dark:bg-zinc-950"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div
            className="bg-blue-600 p-3 rounded-xl shadow-lg shadow-blue-200
                          dark:shadow-blue-500/30"
          >
            <Mail className="w-8 h-8 text-white" />
          </div>
        </div>

        {/* Title */}
        <h2
          className="text-3xl md:text-4xl font-extrabold text-gray-900
                       dark:text-zinc-100 mb-4 tracking-tight"
        >
          {t("Join the")}{" "}
          <span className="text-blue-600 dark:text-blue-400">
            {t("Curator Club")}
          </span>
        </h2>

        {/* Description */}
        <p
          className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed
                      dark:text-zinc-400"
        >
          {t(
            "Receive early access to seasonal sales, exclusive brand launches, and editorial content directly to your inbox."
          )}
        </p>

        {/* Form */}
        <form className="max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder={t("Enter your email address")}
              className="flex-grow px-5 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white text-gray-800 shadow-sm
                         dark:bg-zinc-900 dark:border-zinc-700 dark:text-zinc-100 dark:placeholder:text-zinc-500"
              required
            />

            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-95 shadow-md shadow-blue-100 whitespace-nowrap
                         dark:shadow-blue-500/30"
            >
              {t("Subscribe Now")}
            </button>
          </div>
        </form>

        {/* Footer Text */}
        <p
          className="mt-6 text-sm text-gray-400 uppercase tracking-widest font-medium
                      dark:text-zinc-500"
        >
          {t("No spam. Only inspiration. Unsubscribe anytime.")}
        </p>
      </div>
    </section>
  );
};

export default NewsLetter;
