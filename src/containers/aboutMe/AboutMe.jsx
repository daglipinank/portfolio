import React from 'react'
import Feature from '../../components/feature/Feature';
import './aboutMe.css'

const AboutMe = () => (
  <div id="education" className="portfolio__aboutMe section__margin">
    <div className="portfolio__aboutMe-heading">
      <h1 className="gradient__text">Educational Background</h1>
    </div>
  <div className="portfolio__aboutMe-container">
    <Feature title="Masters of Science in Computer Science" context="Western Michigan University, USA" />
    <Feature title="Bachelors of Engineering in Information Technology" context="University of Mumbai, India" />
  </div>
</div>
)

export default AboutMe