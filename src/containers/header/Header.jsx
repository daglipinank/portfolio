import React from 'react'
import './header.css'
import pinank from '../../assets/Pinank.jpg'

const Header = () => {
  return (
    <div className="portfolio__header section__padding">
      <div className="portfolio__header-content">
        <h1 className="gradient__text">Hi, I am Pinank Dagli</h1>
      </div>
      <div className="portfolio__header-image">
        <img src={pinank} alt="Pinank"/>
      </div>
    </div>
  )
}

export default Header