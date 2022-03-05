import {Link} from "react-router-dom"
import style from "../styles/main_page.css"
import mainCat from "../assets/main-cat.jpg"
import cat1 from "../assets/cat1.jpeg"
import cat2 from "../assets/cat2.jpg"
import cat3 from "../assets/cat3.jpeg"
import cat4 from "../assets/cat4.jpeg"

function MainPage() {
  return (
    <div id="main-page">
      <div id="main-page-presentation-cont">
        <div id="main-page-presentation-button-cont">
          <div id="main-page-title-cont">
            <div id="main-page-presentation-cont-upper">BEST ONLINE STORE OF THE YEAR</div>
            <div id="main-page-presentation-cont-lower">All you need is love, and a cat</div>
          </div>
          <button id="shop-now-but">Shop now</button>
        </div>
        <img id="main-cat-pic" src={mainCat} alt="cat-pic"></img>
      </div>
      <div id="description-cont">
        <div id="description-title-cont">
          ¿What do we have to offer?
        </div>
        <div id="info-cont">
          <div className="info-card">
            <img alt="" className="cat-info-img" src={cat1}></img>
            Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto
          </div>
          <div className="info-card">
            <img className="cat-info-img" alt="" src={cat2}></img>
            Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto
          </div>
          <div className="info-card">
            <img alt="" className="cat-info-img" src={cat3}></img>
            Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto
          </div>
          <div className="info-card">
            <img alt="" className="cat-info-img" src={cat4}></img>
            Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto
          </div>
        </div>
      </div>
      {/* <Link to={"/profile"}><button>
        Profile  
      </button></Link>  */}
    </div>
  );
}

export default MainPage;
