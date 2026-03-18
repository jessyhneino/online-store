import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./components/Home";
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