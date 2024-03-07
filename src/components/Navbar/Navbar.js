import React, { useState } from "react";
import "./navbar.css";
import menu from "../../assets/ui.png"


import {Link}  from 'react-scroll';


const Navbar = () => {
  const [showMenu , setShowMenu] = useState(false);

  const handleMenu = ()=>{
    setShowMenu(false)
  }
  const handleContact=()=>{
    return document.getElementById('contact').scrollIntoView({behavior:'smooth'})
  }
  return (
    <nav className="navbar">
    <p><span className="navName">Sristi </span><span className="navSurname">Barman</span></p>
      
      <div className="desktopMenu">
        <Link className="desktopMenuList" activeClass="active" to='intro' spy={true} smooth={true} offset={-50} >Home</Link>
        <Link className="desktopMenuList" activeClass="active" to='aboutSec' spy={true} smooth={true} offset={-50}>About</Link>
       
        <Link className="desktopMenuList" activeClass="active" to='projectSection' spy={true} smooth={true} offset={-50}>Projects</Link>
        
      </div>
      
      <button class="header-btn" onClick={handleContact}>Contact Me</button>

      <img src={menu} alt="menu" onClick={()=>setShowMenu(!showMenu)} className="menu"></img>
      <div className="mobMenu" style={{display: showMenu ? 'flex':'none'}}>
        <Link className="mobMenuList" activeClass="mobActive" to='intro' spy={true} smooth={true} offset={-50} onClick={handleMenu}>Home</Link>
        <Link className="mobMenuList" activeClass="mobActive" to='aboutSec' spy={true} smooth={true} offset={-50} onClick={handleMenu}>About</Link>
        <Link className="mobMenuList" activeClass="mobActive" to='projectSec' spy={true} smooth={true} offset={-50} onClick={handleMenu}>My Projects</Link>
        <Link className="mobMenuList" activeClass="mobActive" to='contact' spy={true} smooth={true} offset={-50} onClick={handleMenu}>Contact Me</Link>
        
      </div>
    </nav>
  );
};

export default Navbar;