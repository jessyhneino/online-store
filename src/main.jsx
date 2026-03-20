// مسح اللغة القديمة من localStorage عند أول تحميل
localStorage.removeItem("i18nextLng");

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "./i18n";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { setInitialTheme } from "./store/themeSlice"; // ✅ استيراد setInitialTheme

// ✅ ضبط الثيم عند أول تحميل

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
