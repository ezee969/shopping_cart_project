import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/Nav_bar/nav_bar"
import MainPage from "./components/Main_page/main_page"
import Footer from "./components/Footer/footer"
import Products from "./components/Products/products"
import Contact from "./components/Contact/contact";
import React,{ useState } from "react";
import { AnimatePresence } from "framer-motion"
import Modal from "./components/Modal/index";
export const MyContext = React.createContext();

const RouteSwitch = () => {

  const [cart,setCart] = useState([])
  const [isOpen,setIsOpen] = useState(false);

  const handleOpenCloseBut = () => {
      isOpen ? setIsOpen(false) : setIsOpen(true)
  };
  
  return (
    <BrowserRouter>
    <MyContext.Provider value={{cart,
                                setCart,
                                handleOpenCloseBut}}>
      <div id="app">
        <NavBar />
        <Routes>
          <Route path="/" element= {<MainPage />} />
          <Route path="/products" element= {<Products />} />
          <Route path="/contact" element= {<Contact />} />
        </Routes>
        <Footer />
        <AnimatePresence initial={false} exitBeforeEnter={true}>
                {isOpen && <Modal isOpen={isOpen} />}
        </AnimatePresence>
      </div>

      </MyContext.Provider>
    </BrowserRouter>
  );
};

export default RouteSwitch;