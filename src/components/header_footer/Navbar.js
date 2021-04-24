import React from "react";
import "./Navbar.css";
import { useState} from 'react';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';

function Header() {
  const[showLinks, setShowLinks] = useState(false);
  return (
    <div className="Navbar">
        <div className="nav-left">
            <button onClick={() => setShowLinks(!showLinks)}><MenuRoundedIcon fontsize="large"/></button>
            <div className="brand">
                <span>MEDONOR</span>
            </div>
            <div className="links" id={showLinks ? "hidden" : ""}>
                <a href="#home">Home</a>
                <a href="#about">About Us</a>
                <a href="#help">Ways to Help</a>
                <a href="#blog">Blog</a>
            </div>
            
        </div>
        <div className="nav-right">
            <button>Sign In</button>
        </div>
    </div>
    
  );
}

export default Header;