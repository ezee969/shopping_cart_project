import { MyContext } from "../../route_switch"
import { useContext } from "react";
import Item from "../Item/item"
import style from "./cart_items.css"


const CartItems = () => {

    const {cart, setCart} = useContext(MyContext)

    return (
        <div className='cart-items'>
            {cart.map( item => {
                return <Item    name={item.name}
                                quantity={item.quantity}
                                price={item.price}
                                total={item.total}
                                img={item.img}
                                id={item.id}
                                 />
            } )}
        </div>
    )
};

export default CartItems;