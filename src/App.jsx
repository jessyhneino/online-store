import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { setInitialTheme } from "./store/themeSlice";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home/Home.jsx";
import Categories from "./pages/Categories/Categories.jsx";
import Collection from "./pages/Collection/Collection.jsx";
import Curator from "./pages/Curator/Curator.jsx";
import ShoppingCart from "./pages/ShoppingCart/ShoppingCart.jsx";
import CheckOut from "./pages/CheckOut/CheckOut.jsx";
import ProfilePage from "./pages/ProfilePage/ProfilePage.jsx";
import ContactPage from "./pages/ContactPage/ContactPage.jsx";
import ScrollToTop from "./utils/ScrollToTop.jsx";
import SimpleLayout from "./layouts/SimpleLayout.jsx";
import SignIn from "./pages/SignIn/SignIn.jsx";
import SignUp from "./pages/SignUp/SignUp.jsx";
import WishList from "./pages/WishList/WishList.jsx";
import NotificationsPage from "./pages/Notification/NotificationsPage.jsx";
import Invoice from "./pages/Invoice/Invoice.jsx";
import OrdersPage from "./pages/Orders/OrdersPage.jsx";
import ResetPassword from "./pages/ResetPassword/ResetPassword.jsx";
import CreateNewPassword from "./pages/CreateNewPassword/CreateNewPassword.jsx";

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
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="categories" element={<Categories />} />
          <Route path="collection" element={<Collection />} />
          <Route path="curator/:id" element={<Curator />} />
          <Route path="cart" element={<ShoppingCart />} />
          <Route path="checkout" element={<CheckOut />} />
          {/* <Route path="profile" element={<ProfilePage />} /> */}
          <Route path="contactpage" element={<ContactPage />} />
          
          <Route path="wishlist" element={<WishList />} />
          <Route path="notification" element={<NotificationsPage />} />
          <Route path="invoice" element={<Invoice />} />
          <Route path="orders" element={<OrdersPage />} />
        </Route>

        {/* صفحة ProfilePage بدون Navbar و Footer */}
        <Route element={<SimpleLayout />}>
          <Route path="profile" element={<ProfilePage />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="resetpassword" element={<ResetPassword />} />
          <Route path="createnewpassword" element={<CreateNewPassword />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
