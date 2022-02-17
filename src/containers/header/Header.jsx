import React from 'react'
import './header.css'
import pinank from '../../assets/Pinank.jpg'

const Header = () => {
  return (
    <div className="portfolio__header section__padding">
      <div className="portfolio__header-content">
        <h1 className="gradient__text">Hi, I am Pinank Dagli</h1>
        <p>Leading a highly motivated engineering team to build financial technology solutions/services for a highly scalable and automated lending platform.</p>
        <p>Experienced full stack engineer with a demonstrated 7+ years and skilled in React.js, Javascript/TypeScript (ES7), Express.js, Node.js, Nestjs, numerous services within Amazon Web Services (AWS).</p>
      </div>
      <div className="portfolio__header-image">
        <img src={pinank} alt="Pinank"/>
      </div>
    </div>
  )
}

export default Header