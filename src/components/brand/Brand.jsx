import React from 'react';
import './brand.css';
import { RiFacebookCircleFill, RiTwitterFill, RiLinkedinBoxFill, RiInstagramFill, RiGithubFill } from 'react-icons/ri'

const Brand = () => {
  return (
    <div id="socials" className="portfolio__brand section__padding">
    <div>
      <a href="https://www.facebook.com/pinank.dagli" target="_blank" rel="noreferrer">
        <RiFacebookCircleFill color="#fff" size={40}/>
      </a>
    </div>
    <div>
      <a href="https://twitter.com/pinankdagli" target="_blank" rel="noreferrer">
        <RiTwitterFill color="#fff" size={40}/>
      </a>
    </div>
    <div>
      <a href="https://www.linkedin.com/in/pinank-dagli-b79242ba" target="_blank" rel="noreferrer">
        <RiLinkedinBoxFill color="#fff" size={40}/>
      </a>
    </div>
    <div>
      <a href="https://www.instagram.com/daglipinank/" target="_blank" rel="noreferrer">
        <RiInstagramFill color="#fff" size={40}/>
      </a>
    </div>
    <div>
      <a href="https://github.com/daglipinank" target="_blank" rel="noreferrer">
        <RiGithubFill color="#fff" size={40}/>
      </a>
    </div>
    
  </div>
  )
}

export default Brand