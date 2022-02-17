import React, { useState } from 'react'
import { RiMenu3Line, RiCloseLine, RiDownload2Fill } from 'react-icons/ri'
import logo from '../../assets/PinankLogo.png'
import resumepdf from '../../assets/Pinank_Dagli__Resume_2022.pdf'
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
          <p><a href="#socials">Socials</a></p>
          <p><a href="#education">Education</a></p>
          <p><a href="#workEx">Work Experience</a></p>
        </div>
      </div>
      <div className="portfolio__navbar-resume">
        <a className="button" href={resumepdf} target="_blank" rel="noreferrer">
          <RiDownload2Fill color="#fff" margin-bottom="-3px"/>   Resume
        </a>
      </div>
      <div className="portfolio__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="portfolio__navbar-menu_container scale-up-center">
          <div className="portfolio__navbar-menu_container-links">
            <p><a href="#home">Home</a></p>
            <p><a href="#socials">Socials</a></p>
            <p><a href="#education">Education</a></p>
            <p><a href="#workEx">Work Experience</a></p>
          </div>
          <div className="portfolio__navbar-menu_container-links-resume">
            <a className="button" href={resumepdf} target="_blank" rel="noreferrer">
              <RiDownload2Fill color="#fff" margin-bottom="-3px"/>   Resume
            </a>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;