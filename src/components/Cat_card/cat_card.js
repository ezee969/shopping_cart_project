import style from "./cat_card.css"

const CatCard = (props) => {
    return (
        <div className="cat-card-cont" id={props.id} key={props.id}> 
            <img className="cat-sell-img" alt="cat img" src={props.img}></img>
            <div className="cat-sell-text-cont">
                <div className="cat-text-prop">Name: {props.name}</div>
                <div className="cat-text-prop">Age: {props.age}</div>
                <div className="cat-text-prop">Personality: {props.personality}</div>
            </div>
            <div className="price-cont">
                ${props.price}
            </div>
            <button onClick={props.onClick} className="add-cart-but">Add to cart</button>
        </div>
    )
}

export default CatCard