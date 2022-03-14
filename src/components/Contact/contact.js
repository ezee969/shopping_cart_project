import instagramImg from "../../assets/instagram.png"
import facebookImg from "../../assets/facebook.png"
import messengerImg from "../../assets/messenger.png"
import githubImg from "../../assets/github2.png"
import twitterImg from "../../assets/twitter.png"
import style from "./contact.css"
import { useState, useEffect } from "react"

const Contact = () => {
    const [visible,setVisibility] = useState(false)

    useEffect( () => {
        setVisibility(true)
    
        return() => {
        setVisibility(false)
        }
    },[])

    return(
        <div id={visible? "contact-main-cont-visible" : "contact-main-cont-invisible"}>
            <div id="contact-imgs">
                <a href="https://www.youtube.com/watch?v=5T5BY1j2MkE&ab_channel=RoastedCurry" target="_blank" rel="noreferrer">
                    <img className="contact-img" src={instagramImg} alt=""></img>
                </a>
                <a href="https://www.youtube.com/watch?v=5T5BY1j2MkE&ab_channel=RoastedCurry" target="_blank" rel="noreferrer">
                    <img className="contact-img" src={facebookImg} alt=""></img>
                </a>
                <a href="https://www.youtube.com/watch?v=5T5BY1j2MkE&ab_channel=RoastedCurry" target="_blank" rel="noreferrer">
                    <img className="contact-img" src={messengerImg} alt=""></img>
                </a>
                <a href="https://www.youtube.com/watch?v=5T5BY1j2MkE&ab_channel=RoastedCurry" target="_blank" rel="noreferrer">
                    <img className="contact-img" src={twitterImg} alt=""></img>
                </a>
                <a href="https://github.com/ezee969" target="_blank" rel="noreferrer">
                    <img className="contact-img" src={githubImg} alt=""></img>
                </a>
            </div>
            <div id="contact-text">
                <p className="contact-p">PawsStore</p>
                <p className="contact-p">Rodeo Drive 42, Los Angeles USA</p>
            </div>
        </div>
    )
}

export default Contact