import React from 'react';

class About extends React.Component {
  render () {
    return (
      <section id="about">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h2>About me...</h2>
              <p>{this.props.text}</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}


export default About;
