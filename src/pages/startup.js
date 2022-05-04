import React, {useEffect, useState} from 'react'

import Greetings from '../components/StartupPanels/Greetings';
import UserName from '../components/StartupPanels/UserName';
import UserDetails from '../components/StartupPanels/UserDetails';
import { AnimatePresence, motion } from 'framer-motion';

const Startup = () => {
  const [greetingsPanel, setGreetingsPanel] = useState(true);
  const [userNamePanel, setUserNamePanel] = useState(false);
  const [userDetailsPanel, setUserDetailsPanel] = useState(false);

  const [userData, setUserData] = useState({
    name: '',
    income: 0,
    currency: '₱',
    allotments: [
      // {
      //   id: 0,
      //   name: "Savings",
      //   percentage: "50%",
      //   color: "#75bdec",
      //   isEmergency: false
      // }
    ]
  })

  const {name, income, currency, allotments} = userData;

  const onChange = e => {
    setUserData(prevState => ({
      ...prevState,
      [e.target.name] : e.target.value
    }))
  }

  const allotmentAddFunc = e => {
    console.log('Add allotment');
  }

  const allotmentRemFunc = e => { 
    console.log('Remove allotment');
  }


  //panel transitions
  const [uNameDelay, setUNameDelay] = useState(0.5);
  const [uDetailsDelay, setUDetailsDelay] = useState(0.5);

  useEffect(() => {
    //username dynamic delay
    if (userNamePanel)
      setUNameDelay(0);
    else
      setUNameDelay(0.5);

    //userdetails dynamic delay
    if (userDetailsPanel)
      setUDetailsDelay(0)
    else
      setUDetailsDelay(0.5);
  }, [userNamePanel, userDetailsPanel]);
  
  const greetingsBtn = () => {
    setGreetingsPanel(false);
    setUserNamePanel(true)
  }
  const userNameBtn = () => {
    setUserNamePanel(false);
    setUserDetailsPanel(true);
  }
  const userDetailsBackBtn = () => {
    setUserDetailsPanel(false);
    setUserNamePanel(true);
  }

  return (
    <main className='setup_page'>
      
      <AnimatePresence>
        {/* Greetings */
        greetingsPanel && (
        <motion.div
          key="panel"
          initial={{opacity: 0 }}
          animate={{opacity: 1}}
          exit={{opacity: 0}}
          transition={{duration: 0.5}}>

          <Greetings btnFunc={() => greetingsBtn()}/>

        </motion.div>)}

        {/* Username Panel */
        userNamePanel && (
        <motion.div
          key="panel2"
          initial={{opacity: 0 }}
          animate={{opacity: 1}}
          exit={{opacity: 0}}
          transition={{delay: uNameDelay, duration: 0.5}}>

          <UserName onChangeFunc={onChange} nameVal={name} btnFunc={() => userNameBtn()}/>

        </motion.div>)}

        {/* User details Panel */
        userDetailsPanel && (
        <motion.div
          key="panel3"
          initial={{opacity: 0 }}
          animate={{opacity: 1}}
          exit={{opacity: 0}}
          transition={{delay: uDetailsDelay, duration: 0.5}}>

          <UserDetails onChangeFunc={onChange} userName={name} 
            selectVal={currency} incomeVal={income} allotments={allotments}
            allotAddFunc={allotmentAddFunc} allotRemFunc={allotmentRemFunc} backFunc={() => userDetailsBackBtn()}/>

        </motion.div>
        )}
        
      </AnimatePresence>      
    
    </main>
  )
}

export default Startup