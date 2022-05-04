import React from 'react'
import ButtonPrimary from '../../components/Button';
import { AnimatePresence, motion } from 'framer-motion';


const Greetings = ({isVisible, btnFunc}) => {
  return (
    <section className='greetings__panel'>
      <div className='pagewrapper'>
          <h1>Hey, nothing's here yet</h1>
          <p>Help us set up your dashboard for you to get started living frugal!</p>
          <ButtonPrimary type="button" disable={false} extraclass="btn-lg" clickFunc={btnFunc}>Begin</ButtonPrimary>
      </div>
    </section>
  )
}

export default Greetings