import React from 'react';
import './Marquee.css';  // Import the CSS file

const Marquee = ({ words }) => {
  return (
    <div className="marquee-container">
      <div className="marquee">
        {words.map((word, index) => (
          <span key={index} className="marquee-item">{word}</span>
        ))}
      </div>
      <div className="marquee">
        {words.map((word, index) => (
          <span key={index} className="marquee-item">{word}</span>
        ))}
      </div>
      <div className="marquee marquee2">
        {words.map((word, index) => (
          <span key={index} className="marquee-item">{word}</span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
