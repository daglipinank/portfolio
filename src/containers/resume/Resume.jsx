import React from 'react'
import Feature from '../../components/feature/Feature';
import './resume.css'

const featuresData = [
  {
    title: `Team Leader Engineering
    Rocket Loans
    Detroit, MI`,
    subtitle: '2020 to 2022',
    text: `Lead an engineering team focused on developing products and services for credit engine and capital markets, underwriting policies, pricing engine, credit bureaus services to automate loan lending platform.
    Worked on identity and income verification services for detection of fraud and approval of clients on the loan platform.
    Developed and worked with Salesforce Marketing Cloud for marketing channel communication and building client journeys for transactional and drip campaigns.
    Lead and Mentor an Agile team to lean on data-driven experimentation, innovation, and quality improvements.
    Support and lead future projects and new opportunities by working with the product owners and business stakeholders to design, architect and manage the project.
    Manage relationships with platform/service vendors, investors relations for platform support and new integrations related to pricing engine, identity verification, income verification services, etc.
    Work with NestJS, Node.js, Restful API for Express, AWS cloud services to develop microservices driven platform.
    Work with MySQL RDS databases to make and manage platform optimization, improvements for automation opportunities on the loan platform.`,
  },
  {
    title: `Software Engineer
    Rocket Loans / Quicken loans (now Rocket Mortgage)
    Detroit, MI`,
    subtitle: '2015 to 2020',
    text: `Worked on the personal loans platform to provide a fully automated loan process.
    Worked on front-end, back-end projects to manage existing features and add new features to the loan process.
    Worked with HTML, CSS, SCSS Angular.js, React.js, JavaScript ES6 for front-end development of the web application.
    Worked with Node.js, Express, AWS services and REST API development.
    Worked with third party API integration, vendors, investors integrations, pricing engine, identity verification, income verification services, etc.
    Worked with RDS databases to make and manage platform optimization, improvement for automation in SQL.
    Wrote E2E, unit, integration tests for features using JEST, Chai, Mocha, Cypress, Protractor.`,
  },
  {
    title: `Software Engineer
    Office of Information Technology
    Western Michigan University
    Kalamazoo, MI`,
    subtitle: '2013 to 2015',
    text: `Developed a Reporting system for lab statistics for 140+ computer labs throughout the University.
    Created a shift scheduling system and SMS notification via Admin software.
    Developed and maintained PHP Scripts, HTML pages, CSS scripts, JavaScript.
    Managed and Maintained PostgreSQL Databases. Software and Web support at the OIT Department.
    Updated and built new scripts, webpages and designing of User Interface for the Computer labs.
    Maintained Server inequalities and transferring new scripts using FTP.
    Developed a new system for month end reporting for all 140+ computer labs across the university.`
  }
];

const Resume = () => {
  return (
    <div id="workEx" className="portfolio__features section__padding">
      <div className="portfolio__features-heading">
        <h1 className="gradient__text">Work Experience</h1>
        <p>From 2015 to Present</p>
      </div>
      <div className="portfolio__features-container">
        {featuresData.map((item, index) => (
          <Feature title={item.title} subtitle={item.subtitle} text={item.text} key={item.title + index} />
        ))}
      </div>
    </div>
  )
}

export default Resume