import React from 'react'
import ButtonPrimary from '../../components/Button';
import { AnimatePresence, motion } from 'framer-motion';


const Greetings = ({isVisible, clickFunc}) => {
  return (
    <AnimatePresence>
      {isVisible && (
    <motion.section
      key="panel"
      initial={{opacity: 0 }}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
      className='greetings__panel'>
      <div className='pagewrapper'>
          <h1>Hey, nothing's here yet</h1>
          <p>Help us set up your dashboard for you to get started living frugal!</p>
          <ButtonPrimary type="button" extraclass="btn-lg" clickFunc={clickFunc}>Begin</ButtonPrimary>
      </div>
    </motion.section>
      )}
    </AnimatePresence>
  )
}

export default Greetings