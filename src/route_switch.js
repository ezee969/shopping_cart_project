import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/nav_bar"
import MainPage from "./components/main_page"
import Footer from "./components/footer"

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <div id="app">
        <NavBar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          {/* <Route path="/profile" element={<Profile />} /> */}
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default RouteSwitch;