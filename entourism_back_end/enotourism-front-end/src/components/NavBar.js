import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import { Button } from './Button';
import './NavBar.css';

function Nav_bar() {
  const[click, setClick] = useState(false);
  const[button, setButton] = useState(true); 


  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if(window.innerWidth <= 960) {
      setButton(false);
    }else{
      setButton(true);
    }
  }

  window.addEventListener('resize', showButton);

  return (
    <>
    <nav className="nav_bar">
        <div className="nav_bar-container">
            <Link to="/" className="nav_bar-logo">
                ENOTOURISM <i className="fab fa-typo3"/>
            </Link>

            <div className='menu-icon' onClick = {handleClick}>
              <i className={click ? 'fas fa-times':'fas fa-bars'}/>
            </div>

            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <Link to='/AboutUs' className='nav-links' onClick={closeMobileMenu}>
                  AboutUs
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/locations' className='nav-links' onClick={closeMobileMenu}>
                  Locations
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/wineries' className='nav-links' onClick={closeMobileMenu}>
                  Wineries
                </Link>
              </li>
              {/* <li className='nav-item'>
                <Link to='/activities' className='nav-links' onClick={closeMobileMenu}>
                  Activities
                </Link>
              </li> */}
              <li className='nav-item'>
                <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                  Sign Up
                </Link>
              </li>
            </ul>
            {button && <Button buttonStyle='btn--outline'>
              Sign Up</Button>}
        </div>
    </nav>
    </>
  )
}

export default Nav_bar