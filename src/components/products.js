import style from "../styles/products.css"
import CatCard from "./cat_card"
import roberta from "../assets/cat1.jpeg"
import stephan from "../assets/cat2.jpg"
import simon from "../assets/cat3.jpeg"
import eduardo from "../assets/cat4.jpeg"
import jesus from "../assets/jesus.jpg"
import ponio from "../assets/ponio.jpg"
import diamond from "../assets/diamong.jpeg"
import ramon from "../assets/ramon.jpeg"
import ezequiel from "../assets/ezequiel.jpg"
import jazmin from "../assets/jazmin.jpg"
import esperanza from "../assets/esperanza.jpg"
import { useEffect,useState } from "react"

const Products = () => {
    const [visible,setVisibility] = useState(false)

    useEffect( () => {
        setVisibility(true)
    
        return() => {
        setVisibility(false)
        }
    },[])

    const cats = [  {price:"1.25",name:"Eduardo",personality:"Naps all day",age:"3 y/o",img:eduardo},  
                    {price:"125.50",name:"Jesus",personality:"Dont make him angry",age:"4 y/o",img:jesus},
                    {price:"180.30",name:"Ponio",personality:"Was a dog in his past life",age:"2 y/o",img:ponio},
                    {price:"100.00",name:"Diamond",personality:"Chunky, pompous",age:"1 y/o",img:diamond},
                    {price:"320",name:"Ramón",personality:"Will steal your food",age:"0 y/o",img:ramon},
                    {price:"4500",name:"Ezequiel",personality:"It just ignores you",age:"8 y/o",img:ezequiel},
                    {price:"45.30",name:"Jazmin",personality:"Will form his own cat fight club",age:"4 y/o",img:jazmin},
                    {price:"66.66",name:"Esperanza",personality:"'Yeah, i go to the gym'",age:"2 y/o",img:esperanza},
                    {price:"10,75",name:"Roberta",personality:"Enjoys tomfoolery",age:"2 y/o",img:roberta},
                    {price:"8.25",name:"Stephan",personality:"Alcohol problems",age:"1 y/o",img:stephan},
                    {price:"5.50",name:"Simon",personality:"Enjoys bread too much",age:"1 y/o",img:simon},
                    ];

    return (
        <div id={visible? "products-main-cont-visible" : "products-main-cont-invisible"}>
            <div id="products-cont">
                { cats.map( cat => {
                    return <CatCard name={cat.name}
                                    personality={cat.personality} 
                                    age={cat.age} 
                                    img={cat.img}
                                    price={cat.price} />
                }) }    
            </div>
        </div>
    )
}

export default Products