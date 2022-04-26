import React, {useState} from 'react'

import Greetings from '../components/StartupPanels/Greetings';
import UserName from '../components/StartupPanels/UserName';
import UserDetails from '../components/StartupPanels/UserDetails';

const Startup = () => {
  const [greetingsPanel, setGreetingsPanel] = useState(true);
  const [userNamePanel, setUserNamePanel] = useState(false);
  const [userDetailsPanel, setUserDetailsPanel] = useState(false);

  const greetingsBtn = () => {
    setGreetingsPanel(false);
    setUserNamePanel(true)
  }

  return (
    <main className='setup_page'>
      <Greetings isVisible={greetingsPanel} clickFunc={() => greetingsBtn()}/>
      <UserName isVisible={userNamePanel}/>
      <UserDetails isVisible={userDetailsPanel}/>
    </main>
  )
}

export default Startup