import React, {useState} from 'react'

import Greetings from '../components/StartupPanels/Greetings';
import UserName from '../components/StartupPanels/UserName';
import UserDetails from '../components/StartupPanels/UserDetails';

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
  const greetingsBtn = () => {
    setGreetingsPanel(false);
    setUserNamePanel(true)
  }
  const userNameBtn = () => {
    setUserNamePanel(false);
    setUserDetailsPanel(true);
  }

  console.log(userData);
  return (
    <main className='setup_page'>
      
      <Greetings isVisible={greetingsPanel} btnFunc={() => greetingsBtn()}/>

      {userNamePanel && <UserName isVisible={userNamePanel} onChangeFunc={onChange} nameVal={name} btnFunc={() => userNameBtn()}/>}      
    
      {userDetailsPanel && (<UserDetails isVisible={userDetailsPanel} onChangeFunc={onChange} userName={name} 
        selectVal={currency} incomeVal={income} allotments={allotments}
        allotAddFunc={allotmentAddFunc} allotRemFunc={allotmentRemFunc}/>)}
    
    </main>
  )
}

export default Startup