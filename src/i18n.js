import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    supportedLngs: ["en", "ar"],

    // يبدأ بالإنجليزية إذا ما في لغة محفوظة
    lng: localStorage.getItem("i18nextLng") || "en",

    detection: {
      order: ["localStorage", "navigator"], // يتحقق أولاً من localStorage
      caches: ["localStorage"], // يخزن اللغة في localStorage
    },

    backend: {
      loadPath: "/locales/{{lng}}/translation.json", // مسار ملفات الترجمة
    },

    interpolation: {
      escapeValue: false, // لمنع الهروب من الأحرف الخاصة
    },
  });

export default i18n;
