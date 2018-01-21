import React from 'react';

const Hero = () => {
  return (
    <section id="hero">
      <div className= "introbox">
        <img id="mainlogo" src="/assets/images/NWlogo.png"/>
        <h1>Nate Welfare</h1>
        <h2>Designer / Developer</h2>
        <div className="contact">
          <a href="http://www.github.com/nateLW">
            <i className="fa fa-github-square" aria-hidden="true"></i>
          </a>
        </div>
        <div className="contact">
          <a href="https://www.linkedin.com/in/nate-lansdall-welfare">
            <i className="fa fa-linkedin-square" aria-hidden="true"></i>
          </a>
        </div>
        <div className="contact">
          <a href="https://twitter.com/natewelfare">
            <i className="fa fa-twitter-square" aria-hidden="true"></i>
          </a>
        </div>
      </div>
      <div id="startabout"/>
    </section>
  );
};

export default Hero;
