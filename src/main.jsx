// مسح اللغة القديمة من localStorage عند أول تحميل
localStorage.removeItem("i18nextLng");

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "./i18n";
import { Provider } from "react-redux";
import { store } from "./store/store";

// 1. استيراد الـ Providers (تأكد من صحة المسارات)
import { WishlistProvider } from "./context/WishlistContext";
import { CartProvider } from "./context/CartContext"; // استيراد الـ CartProvider الجديد

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      {/* تغليف التطبيق بـ WishlistProvider و CartProvider */}
      <WishlistProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </WishlistProvider>
    </Provider>
  </StrictMode>
);
