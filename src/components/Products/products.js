import style from "./products.css"
import CatCard from "../Cat_card/cat_card"
import roberta from "../../assets/cat1.jpeg"
import stephan from "../../assets/cat2.jpg"
import simon from "../../assets/cat3.jpeg"
import eduardo from "../../assets/cat4.jpeg"
import jesus from "../../assets/jesus.jpg"
import ponio from "../../assets/ponio.jpg"
import diamond from "../../assets/diamong.jpeg"
import ramon from "../../assets/ramon.jpeg"
import ezequiel from "../../assets/ezequiel.jpg"
import jazmin from "../../assets/jazmin.jpg"
import esperanza from "../../assets/esperanza.jpg"
import { useEffect, useState,useContext } from "react"
import { MyContext } from "../../route_switch"
import uniqid from 'uniqid';
import modifiedObj from "../utils/modifiedObj"
import insertNewObj from "../utils/insertNewObj"

const Products = () => {

    const [visible,setVisibility] = useState(false)
    const {cart,setCart} = useContext(MyContext)

    useEffect( () => {
        setVisibility(true)
    
        return() => {
        setVisibility(false)
        }
    },[])



    const handleAddCartBut = (event) => {
        const findItem = cats.find(e => e.id === event.target.parentNode.id);
        const cartItemIndex = cart.findIndex( e => e.name === findItem.name );

        if (cartItemIndex === -1) {
            setCart(actualArr => actualArr.concat({ price:findItem.price,
                                                    name:findItem.name,
                                                    img:findItem.img,
                                                    quantity:1,total:parseFloat(findItem.price),
                                                    id:findItem.id}))
        }
        else{
            const newCartItem = modifiedObj( {...cart[cartItemIndex]},
                                             {quantity: cart[cartItemIndex].quantity+1,
                                              total: cart[cartItemIndex].price*(cart[cartItemIndex].quantity+1)} );
            setCart(insertNewObj(cartItemIndex,cart,findItem.name,newCartItem));
        };
    }

    const cats = [  {price:"1.25",name:"Eduardo",personality:"Naps all day",age:"3 y/o",img:eduardo, id:uniqid()},  
                    {price:"125.50",name:"Jesus",personality:"Dont make him angry",age:"4 y/o",img:jesus, id:uniqid()},
                    {price:"180,30",name:"Ponio",personality:"Was a dog in his past life",age:"2 y/o",img:ponio, id:uniqid()},
                    {price:"100.00",name:"Diamond",personality:"Chunky, pompous",age:"1 y/o",img:diamond, id:uniqid()},
                    {price:"320",name:"Ramón",personality:"Will steal your food",age:"0 y/o",img:ramon, id:uniqid()},
                    {price:"4500",name:"Ezequiel",personality:"It just ignores you",age:"8 y/o",img:ezequiel, id:uniqid()},
                    {price:"45.30",name:"Jazmin",personality:"Will form his own cat fight club",age:"4 y/o",img:jazmin, id:uniqid()},
                    {price:"66.66",name:"Esperanza",personality:"'Yeah, i go to the gym'",age:"2 y/o",img:esperanza, id:uniqid()},
                    {price:"10.75",name:"Roberta",personality:"Enjoys tomfoolery",age:"2 y/o",img:roberta, id:uniqid()},
                    {price:"8.25",name:"Stephan",personality:"Alcohol problems",age:"1 y/o",img:stephan, id:uniqid()},
                    {price:"5.50",name:"Simon",personality:"Enjoys bread too much",age:"1 y/o",img:simon, id:uniqid()},
                    ];

    return (
        <div id={visible? "products-main-cont-visible" : "products-main-cont-invisible"}>
            <div id="products-cont">
                { cats.map( cat => {
                    return <CatCard name={cat.name}
                                    personality={cat.personality} 
                                    age={cat.age} 
                                    img={cat.img}
                                    price={cat.price}
                                    onClick={handleAddCartBut}
                                    id={cat.id} />
                }) }    
            </div>
        </div>
    )
}

export default Products