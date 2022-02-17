import React from 'react';
import PropTypes from 'prop-types'
import './feature.css';

const Feature = ({ title, subtitle, text, context }) => (
  <div className="portfolio__features-container__feature">
    <div className="portfolio__features-container__feature-title">
      <div />
      {title.split('\n').map(str => <h1 key="id">{str}</h1>)}
      { subtitle && 
        <h5>{subtitle}</h5>
      }
    </div>
    { text &&
      <div className="portfolio__features-container_feature-text">
        <ul>
          {text.split('\n').map(str => <li key="id">{str}</li>)}
        </ul>
      </div>
    }
    { context && 
      <div className="portfolio__features-container_feature-context">
        {context.split('\n').map(str => <p key="id">{str}</p>)}
      </div>
    }
  </div>
);

Feature.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  text: PropTypes.string,
  context: PropTypes.string
}

export default Feature;