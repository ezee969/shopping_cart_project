import React, { useContext, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Backdrop from '../Backdrop/index'
import ReactDom from "react-dom"
import style from "./modal.css"
import CartItems from '../Cart_items/cart_items'
import { MyContext } from '../../route_switch'
export const modalContext = React.createContext();


const dropIn = {
  hidden: {
    x: "100vw",
    opacity: 0
  },
  visible: {
    x: "34vw",
    opacity: 1,
    transition: {
      duration: 0.6,
    }
  },
  exit: {
    x: "100vw",
    opacity: 0,
    transition: {
      duration: 0.4,
    }
  }
};

const Modal = () => {
  const {handleOpenCloseBut,cart} = useContext(MyContext)
  const [total,setTotal] = useState(0)

  useEffect( () => {
    setTotal(cart.reduce( (a,b) => a + b.total,0))
  },[cart])



  return ReactDom.createPortal (
        <Backdrop handleOpenCloseBut={handleOpenCloseBut} >
            <motion.div id="modal" 
                        onClick={(e) => e.stopPropagation()}
                        variants={dropIn}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        > 
                          <h1 className='cart-title'>You shopping cart</h1>
                          <modalContext.Provider value={{total,setTotal}}>
                            <CartItems />
                          </modalContext.Provider>
                          <h2 className='cart-total'>Total: ${total}</h2>
                          <button className='cart-but' id='checkout-but'>Checkout</button>
                          <button className='cart-but' id='close-but' onClick={handleOpenCloseBut}>Close</button>
            </motion.div>
        </ Backdrop >,
        document.getElementById("portal")
  )
}

export default Modal