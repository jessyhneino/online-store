// src/store/themeSlice.js
import { createSlice } from "@reduxjs/toolkit";

// 1️⃣ وظيفة لتحديد الثيم الابتدائي عند تحميل التطبيق
const getInitialTheme = () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) return savedTheme === "dark";
  // إذا ما في Theme محفوظ، نرجع حسب نظام الجهاز
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
};

// 2️⃣ Slice
const themeSlice = createSlice({
  name: "theme",
  initialState: { isDarkMode: getInitialTheme() },
  reducers: {
    // تبديل الثيم
    toggleTheme: (state) => {
      state.isDarkMode = !state.isDarkMode;

      if (state.isDarkMode) {
        document.documentElement.classList.add("dark"); // إضافة كلاس dark
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark"); // إزالة كلاس dark
        localStorage.setItem("theme", "light");
      }
    },
    // ضبط الثيم عند أول تحميل التطبيق
    setInitialTheme: (state) => {
      if (state.isDarkMode) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    },
  },
});

export const { toggleTheme, setInitialTheme } = themeSlice.actions;
export default themeSlice.reducer;
