import React from 'react'
import Feature from '../../components/feature/Feature';
import './resume.css'

const featuresData = [
  {
    title: 'Software Engineer Intern | Rocket Loans | Detroit, MI',
    text: 'Roles and Responsibilities',
  },
  {
    title: 'Software Engineer | Quickenloans | Detroit, MI',
    text: 'Roles and Responsibilities',
  },
  {
    title: 'Software Engineer | Rocket Loans | Detroit, MI',
    text: 'Roles and Responsibilities',
  },
  {
    title: 'Team Leader Engineering | Rocket Loans | Detroit, MI',
    text: 'Roles and Responsibilities',
  },
];

const Resume = () => {
  return (
    <div className="portfolio__features section__padding" id="features">
      <div className="portfolio__features-heading">
        <h1 className="gradient__text">Work Experience</h1>
        <p>From 2015</p>
      </div>
      <div className="portfolio__features-container">
        {featuresData.map((item, index) => (
          <Feature title={item.title} text={item.text} key={item.title + index} />
        ))}
      </div>
    </div>
  )
}

export default Resume