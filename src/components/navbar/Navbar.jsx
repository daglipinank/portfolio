import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine, RiDownload2Fill } from 'react-icons/ri';
import logo from '../../assets/PinankLogo.png';
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="portfolio__navbar">
      <div className="portfolio__navbar-links">
        <div className="portfolio__navbar-links_logo">
          <img src={logo} alt="Pinank Logo"/>
        </div>
        <div className="portfolio__navbar-links_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#career">Career</a></p>
          <p><a href="#aboutMe">About Me</a></p>
          {/* <p><a href="#Projects">Projects</a></p> */}
        </div>
      </div>
      <div className="portfolio__navbar-resume">
        <button type="button">Resume</button>
      </div>
      <div className="portfolio__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="portfolio__navbar-menu_container scale-up-center">
          <div className="portfolio__navbar-menu_container-links">
            <p><a href="#home">Home</a></p>
            <p><a href="#career">Career</a></p>
            <p><a href="#aboutMe">About Me</a></p>
            {/* <p><a href="#Projects">Projects</a></p> */}
          </div>
          <div className="portfolio__navbar-menu_container-links-resume">
            <button type="button">
              <RiDownload2Fill color="#fff" size={27}/>Resume
            </button>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;