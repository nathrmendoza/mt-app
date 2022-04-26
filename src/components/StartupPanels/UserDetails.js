import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const UserDetails = ({isVisible}) => {
  return (
    <AnimatePresence>
      {isVisible && (
    <motion.section
      key="panel"
      initial={{opacity: 0 }}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
      transition={{delay: 0.5}}
      className='userdetails__panel'>
      <div className='pagewrapper'>
        <h1>We're at user details panel</h1>
      </div>
    </motion.section>
      )}
    </AnimatePresence>
  )
}

export default UserDetails