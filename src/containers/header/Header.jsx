import React from 'react'
import './header.css'
import pinank from '../../assets/Pinank.jpg'

const Header = () => {
  return (
    <div className="portfolio__header section__padding">
      <div className="portfolio__header-content">
        <h1 className="gradient__text">Hi, I am Pinank Dagli</h1>
        <p>
          Engineering Manager and a Senior Software Engineer with over a decade of experience leading software development and engineering teams. 
          Adept at pioneering innovative solutions in web applications and automated loan platforms, utilizing a wide array of technologies including Javascript, TypeScript, React, Node.Js and AWS services. 
          Proven track record in mentoring and fostering cross-functional collaboration, driving efficiency, and ensuring high-quality product delivery.
        </p>
      </div>
      <div className="portfolio__header-image">
        <img src={pinank} alt="Pinank"/>
      </div>
    </div>
  )
}

export default Header