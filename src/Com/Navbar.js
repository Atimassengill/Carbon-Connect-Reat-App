import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            CarbonConnect
            <i class="fas fa-leaf" />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/Resources'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Resources
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/Calculator'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                
                <i class="fas fa-calculator"></i>
              </Link>
            </li>

            <li>
              <Link
                to='/Get-Started'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Get Started
              </Link>
            </li>
            <li>
              
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>Get Started</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
