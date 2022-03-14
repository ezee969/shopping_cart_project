import insertNewObj from "../utils/insertNewObj";
import modifiedObj from "../utils/modifiedObj";
import { useContext,useEffect } from "react";
import { MyContext } from "../../route_switch";
import style from "./item.css"


const Item = (props) => {

    const {cart, setCart} = useContext(MyContext)
    const cartItemIndex = cart.findIndex( e => e.name === props.name );


    useEffect( () => {
        if (props.quantity === 0){
            setCart(cart.filter(e => e.name !== props.name))
        }
    },[cart])


    const handleAddAcumulatorBut = () => {
        const newObj = modifiedObj( cart[cartItemIndex],
                                    { quantity:cart[cartItemIndex].quantity+1,
                                      total: cart[cartItemIndex].price*(cart[cartItemIndex].quantity+1) }
                                    );
        setCart(insertNewObj(cartItemIndex,cart,props.name,newObj))
    };

    const handleSubsAcumulatorBut = () => {
        const newObj = modifiedObj( cart[cartItemIndex],
                                    {   quantity:cart[cartItemIndex].quantity-1,
                                        total: cart[cartItemIndex].price*(cart[cartItemIndex].quantity-1) }
                                    );
        setCart(insertNewObj(cartItemIndex,cart,props.name,newObj))
    };


    return (
        <div className="item" key={props.id} id={props.id}>
            <img className="item-img" src={props.img} alt=""></img>
            <div className="item-info">
                <h4 className="item-name">{props.name}</h4>   
                <h4>${props.price}</h4>
                <h4>Item total: ${props.total}</h4>
                <div className="item-acumulator">
                    <button onClick={handleSubsAcumulatorBut} className="acumulator-but">-</button>
                    {props.quantity}
                    <button onClick={handleAddAcumulatorBut} className="acumulator-but">+</button>
                </div> 
            </div>
        </div>
    )
};

export default Item;