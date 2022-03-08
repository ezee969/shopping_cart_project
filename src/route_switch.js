import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/nav_bar"
import MainPage from "./components/main_page"
import Footer from "./components/footer"
import Products from "./components/products"
import Contact from "./components/contact";
// import Cart from "./components/cart"

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <div id="app">
        <NavBar />
        <Routes>
          <Route path="/" element= {<MainPage />} />
          <Route path="/products" element= {<Products />} />
          <Route path="/contact" element= {<Contact />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default RouteSwitch;