import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { useTranslation } from "react-i18next";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home/Home.jsx";
// import { useEffect } from "react";
// import Shop from "./pages/Shop";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Layout فيه Navbar */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          {/* <Route path="shop" element={<Shop />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
