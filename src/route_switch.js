import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/nav_bar"
import MainPage from "./components/main_page"
import Footer from "./components/footer"
import Products from "./components/products"

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <div id="app">
        <NavBar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/products" element={<Products />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default RouteSwitch;