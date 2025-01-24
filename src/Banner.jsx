import React from 'react';
import './Banner.css';

const Banner = () => {
  return (
    <header className="banner">
      <div className="banner_contents">
        <h1 className="banner_title">Stranger Things</h1>
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>
        <h3 className="banner_description">

        "In the small town of Hawkins, Indiana, the sudden disappearance of a young boy sets off a chain of supernatural events. As friends, family, and local authorities search for answers, they uncover a secret government lab, strange experiments, and a mysterious girl with extraordinary abilities. Together, they face chilling forces from another dimension that threaten their world."
        </h3>
      </div>
      <div className="banner_fadeBottom" />
    </header>
  );
};

export default Banner;
