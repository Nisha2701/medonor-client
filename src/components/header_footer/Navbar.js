import React from 'react';
import './Navbar.css';
import { useState } from 'react';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';

function Header() {
  const [showLinks, setShowLinks] = useState(false);
  return (
    <div className='Navbar'>
      <div className='nav-left'>
        <button onClick={() => setShowLinks(!showLinks)}>
          <MenuRoundedIcon fontSize='large' />
        </button>
        <div className='brand'>
          <span>MEDONOR</span>
        </div>
        <div className='links' id={showLinks ? 'hidden' : ''}>
        <Link to='/'>Home</Link>
        <Link to='/about'>About Us</Link>
        <Link to='/help'>Ways to Help</Link>
        <Link to='/blog'>Blog</Link>
        </div>
      </div>
      <div className='nav-right'>
        <button>Sign In</button>
      </div>
    </div>
  );
}

export default Header;
