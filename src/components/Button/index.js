import React from 'react'
import {Link} from 'react-router-dom'

const ButtonPrimary = ({type, disable, url, extraclass, children, clickFunc}) => {
    console.log(disable);
  //if type is link, URL is required or it will break
    if (type === 'link') {
        return (
            <Link to={url} className={'btn-primary ' + extraclass}>
                <div className='btn-actual'>{children}</div>
                <div className='btn-under'></div>
            </Link>
        )
    }
    else {
        return (
            <button type={type} disabled={disable} className={'btn-primary ' + extraclass} onClick={clickFunc}>
                <div className='btn-actual'>{children}</div>
                <div className='btn-under'></div>
            </button>
        )
    }
}

export default ButtonPrimary