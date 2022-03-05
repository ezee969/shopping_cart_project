import logo from "../assets/logo.png"
import shoppingCartImg from "../assets/shopping-cart.png"
import style from "../styles/nav_bar.css"
import {Link} from "react-router-dom"


const NavBar = () => {
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
                <li>Products</li>
                <li>Contact</li>
            </ul>
            <div id="circle-div">
                <img id="shopping-cart-img" alt="cart" src={shoppingCartImg}></img>
            </div>
        </div>
    ) 
}

export default NavBar;