import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Backdrop from '../Backdrop/index'
import ReactDOM from "react-dom"
import style from "../../styles/modal.css"

const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 30,
      stiffness: 500
    }
  },
  exit: {
    y: "100vh",
    opacity: 0
  }
};

const Modal = ({handleOpenCloseBut}) => {

  return ReactDOM.createPortal (

        <Backdrop handleOpenCloseBut={handleOpenCloseBut} >
            <motion.div id="modal" 
                        onClick={(e) => e.stopPropagation()}
                        variants={dropIn}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        >
                <button onClick={handleOpenCloseBut} id="">Close</button>
            </motion.div>
        </ Backdrop >,
        document.getElementById("portal")

  )
}

export default Modal