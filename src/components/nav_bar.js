import logo from "../assets/logo.png"
import shoppingCartImg from "../assets/shopping-cart.png"
import style from "../styles/nav_bar.css"
import {Link} from "react-router-dom"
import { useState } from "react"
import Modal from "./Modal/index"
import { AnimatePresence } from "framer-motion"


const NavBar = (props) => {

    const [isOpen,setIsOpen] = useState(false);

    const handleOpenCloseBut = () => {
        isOpen ? setIsOpen(false) : setIsOpen(true)
        console.log("nooo")
    };

    return(
        <div id="nav-bar">
            <Link to={"/"}>
                <img id="logo-img" alt="logo" src={logo}></img>
            </Link >
            <Link to={"/"}>
                <h1 id="page-title"> Paws Store </h1>
            </Link >
            <ul>
                <Link to={"/"}>
                    <li>Home</li>
                </Link >
                <Link to={"/products"}>
                    <li>Products</li>
                </Link >
                <Link to={"/contact"}>
                    <li>Contact</li>
                </Link >
            </ul>
            <div id="circle-div" onClick={handleOpenCloseBut}>
                <img id="shopping-cart-img" alt="cart" src={shoppingCartImg}></img>
            </div>
            <AnimatePresence initial={false} exitBeforeEnter={true}>
                {isOpen && <Modal isOpen={isOpen} handleOpenCloseBut={handleOpenCloseBut} />}
            </AnimatePresence>
        </div>
    ) 
}

export default NavBar;