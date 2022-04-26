import React, {useState} from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    const [themeMode, setThemeMode] = useState('light');

  return (
      <header>
          <div className='header-wrapper'>
            <Link to="/" className="site__logo">
                <img src="images/site_logo.png" width="50" height="50" alt="site_logo" />
            </Link>
            <div id='toggle__theme'>
                {themeMode === 'light' ? <img src="images/moon.png" className='moon_logo' alt="moon"/> 
                 : <img src="images/sun.png" width="37.5" height="37.5" className='sun_logo' alt="sun"/>}
            </div>
          </div>
      </header>
  )
}

export default Header