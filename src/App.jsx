import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { setInitialTheme } from "./store/themeSlice";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home/Home.jsx";
import Categories from "./pages/Categories/Categories.jsx";
import Collection from "./pages/Collection/Collection.jsx";

function App() {
  const { i18n } = useTranslation();
  const dispatch = useDispatch();

  // ضبط اللغة والاتجاه
  useEffect(() => {
    const updateAttributes = () => {
      const lang = i18n.resolvedLanguage;
      document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
      document.documentElement.lang = lang;
    };
    updateAttributes();
    i18n.on("languageChanged", updateAttributes);
    return () => i18n.off("languageChanged", updateAttributes);
  }, [i18n]);

  // ضبط الثيم عند أول تحميل باستخدام Redux
  useEffect(() => {
    dispatch(setInitialTheme());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="categories" element={<Categories />} />
          <Route path="collection" element={<Collection />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
