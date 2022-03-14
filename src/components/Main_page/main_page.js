import {Link} from "react-router-dom"
import style from "./main_page.css"
import mainCat from "../../assets/main-cat.jpg"
import cat1 from "../../assets/cat1.jpeg"
import cat2 from "../../assets/cat2.jpg"
import cat3 from "../../assets/cat3.jpeg"
import cat4 from "../../assets/cat4.jpeg"
import { motion } from "framer-motion";
import { useState, useEffect } from "react"

function MainPage() {

  const [visible,setVisibility] = useState(false)

  useEffect( () => {
    setVisibility(true)

    return() => {
      setVisibility(false)
    }
  },[])

  return (
    <div id={visible? "main-page-visible" : "main-page-invisible"}>
      <div id="main-page-presentation-cont">
        <div id="main-page-presentation-button-cont">
          <div id="main-page-title-cont">
            <div id="main-page-presentation-cont-upper">BEST ONLINE STORE OF THE YEAR</div>
            <div id="main-page-presentation-cont-lower">All you need is love, and a cat</div>
          </div>
          <Link to={"/products"}>
            <motion.button
              whileHover={ {scale: 1.1} }
              whileTap={ {scale: 0.9 } }
              id="shop-now-but">Shop now</motion.button>
          </Link >
        </div>
        <img id="main-cat-pic" src={mainCat} alt="cat-pic"></img>
      </div>
      <div id="description-cont">
        <div id="description-title-cont">
          Check out all these little fellas waiting for a home
        </div>
        <div id="info-cont">
          <div className="info-card">
            <img alt="" className="cat-info-img" src={cat1}></img>
            Roberta enjoys transpasing private property. She is up to no good.
          </div>
          <div className="info-card">
            <img className="cat-info-img" alt="" src={cat2}></img>
            This big fella over here is Stephan, he kinda has alcohol problems.
          </div>
          <div className="info-card">
            <img alt="" className="cat-info-img" src={cat3}></img>
            This is Simon and, well, he likes to do this weird thing with the bread.
          </div>
          <div className="info-card">
            <img alt="" className="cat-info-img" src={cat4}></img>
            Little Eduardo! He loves to cuddle in between your legs to nap.
          </div>
        </div>
      </div>
      <div id="phrase-cont">
        <div id="text-cont">
          “Owners of dogs will have noticed that, if you provide them with food and water and shelter and affection, they will think you are God. Whereas owners of cats are compelled to realize that, if you provide them with food and water and affection, they draw the conclusion that they are God.” 
        </div>
        <div id="author-cont">
        -Hitchens, Christopher 
        </div>
      </div>
    </div>
  );
}

export default MainPage;
