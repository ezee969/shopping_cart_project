import React from 'react'
import { motion } from 'framer-motion'
import style from "../../styles/backdrop.css"

const Backdrop = ({children, handleOpenCloseBut})  => {
  return (
    <motion.div onClick={handleOpenCloseBut} 
                id="backdrop"
                initial={{opacity:0}}
                animate={{opacity:1}}
                exit={{opacity:0}}
    >
        {children}
    </motion.div>
  )
}

export default Backdrop