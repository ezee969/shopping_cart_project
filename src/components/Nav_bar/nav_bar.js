import logo from "../../assets/logo.png"
import shoppingCartImg from "../../assets/shopping-cart.png"
import style from "./nav_bar.css"
import {Link} from "react-router-dom"
import { useEffect, useState, useContext } from "react"
import { MyContext } from "../../route_switch"


const NavBar = () => {

    const {cart,handleOpenCloseBut} = useContext(MyContext)
    const [cartItemQuantity,setCartItemQuantity] = useState(0)

    useEffect( () => {
        setCartItemQuantity(cart.reduce((a, b) => a + b.quantity, 0)) 
        
    },[cart])


    return(
        <div id="nav-bar">
            <Link to={"/shopping_cart_project"}>
                <img id="logo-img" alt="logo" src={logo}></img>
            </Link >
            <Link to={"/shopping_cart_project"}>
                <h1 id="page-title"> Paws Store </h1>
            </Link >
            <ul>
                <Link to={"/shopping_cart_project"}>
                    <li>Home</li>
                </Link >
                <Link to={{pathname:"/products"}}>
                    <li>Products</li>
                </Link >
                <Link to={"/contact"}>
                    <li>Contact</li>
                </Link >
            </ul>
            <div id="circle-div" onClick={handleOpenCloseBut}>
                <div id="item-quantity">{cartItemQuantity}</div>
                <img id="shopping-cart-img" alt="cart" src={shoppingCartImg}></img>
            </div>

        </div>
    ) 
}

export default NavBar;