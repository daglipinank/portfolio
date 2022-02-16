import React from 'react';
import logo from '../../assets/PinankLogo.png';
import { RiFacebookCircleFill, RiTwitterFill, RiLinkedinBoxFill, RiInstagramFill, RiGithubFill } from 'react-icons/ri'
import './footer.css';

const Footer = () => (
  <div className="portfolio__footer section__padding">
    <div className="portfolio__footer-links">
      <div className="portfolio__footer-links_logo">
        <img src={logo} alt="portfolio_logo" />
        <p> All Rights Reserved</p>
      </div>
      <div className="portfolio__footer-links_div">
        <h4>Links</h4>
        <p>
          <a href="https://www.facebook.com/pinank.dagli" target="_blank" rel="noreferrer">
            Facebook
          </a>
        </p>
        <p>
          <a href="https://twitter.com/pinankdagli" target="_blank" rel="noreferrer">
            Twitter
          </a>
        </p>
        <p>
          <a href="https://www.linkedin.com/in/pinank-dagli-b79242ba" target="_blank" rel="noreferrer">
            Linkedin
          </a>
        </p>
        <p>
          <a href="https://www.instagram.com/daglipinank/" target="_blank" rel="noreferrer">
            Instagram
          </a>
        </p>
        <p>
          <a href="https://github.com/daglipinank" target="_blank" rel="noreferrer">
            Github
          </a>
        </p>
      </div>
    </div>

    <div className="portfolio__footer-copyright">
      <p>@2022 Pinank Dagli. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;