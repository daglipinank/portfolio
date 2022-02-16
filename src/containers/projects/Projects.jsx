import React from 'react';
import Article from '../../components/article/Article';
import { project01, project02, project03, project04, project05 } from './imports';
import './projects.css';

const Project = () => (
  <div className="portfolio__project section__padding" id="project">
    <div className="portfolio__project-heading">
      <h1 className="gradient__text">Some samples of my personal projects</h1>
    </div>
    <div className="portfolio__project-container">
      <div className="portfolio__project-container_groupA">
        <Article imgUrl={project01} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
      </div>
      <div className="portfolio__project-container_groupB">
        <Article imgUrl={project02} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
        <Article imgUrl={project03} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
        <Article imgUrl={project04} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
        <Article imgUrl={project05} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
      </div>
    </div>
  </div>
);

export default Project;