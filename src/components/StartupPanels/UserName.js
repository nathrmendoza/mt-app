import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import ButtonPrimary from '../Button'

const UserName = ({isVisible, nameVal, onChangeFunc, btnFunc}) => {
  return (
    <AnimatePresence>
      {isVisible && (
      <motion.section
        key="panel"
        initial={{opacity: 0 }}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        className='username__panel'>
        <div className='pagewrapper'>
          <h1>What should we call you?</h1>
          <p>Enter your name down below</p>
          <input type="text" name="name" className='input-primary input-lg' value={nameVal} onChange={onChangeFunc}/>
          <ButtonPrimary type="button" disable={false} extraclass="btn-lg" clickFunc={btnFunc}>Next</ButtonPrimary>
        </div>
      </motion.section>
      )}
    </AnimatePresence>
  )
}

export default UserName