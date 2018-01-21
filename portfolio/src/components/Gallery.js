import React from 'react';

const Gallery = () => {
  return (
    <section id="portfolio">
      <section id="viewer"></section>
      <div className="container">
        <h2>Recent Projects</h2>
        <div className="row">
          <div className="col-sm-3">
            <a href="https://gentle-caverns-84204.herokuapp.com/"><div className="image image-one"></div></a>
          </div>
          <div className="col-sm-3">
            <a href="https://lair-project.herokuapp.com/"><div className="image image-two"></div></a>
          </div>
          <div className="col-sm-3">
            <a href="https://out-nate.herokuapp.com/"><div className="image image-three"></div></a>
          </div>
          <div className="col-sm-3">
            <a href="https://hidden-depths-69563.herokuapp.com/"><div className="image image-four"></div></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
