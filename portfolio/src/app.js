import React from 'react';
import ReactDOM from 'react-dom';

import 'normalize-scss';
import 'bootstrap-css-only';
import './scss/style.scss';

import Header from './components/Header';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import About from './components/About';
import Footer from './components/Footer';
import Background from './components/Background';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      about: {
        text: [
          'I have always had a love of design since I was small, and I have tinkered, explored and played with computers my whole life. I love creating and this love lead me to my first career, graphic design. ',
          'Here I honed a love of clean accessible design and after a few years I wanted to get more technical with my knowledge; to explore the systems and the way things tick. I have had programming at the back of my mind my whole life and now with taking the General Assembly Web Development Immersive course i have finally been able to merge the creative and the technical. ',
          'At General Assembly have learnt the ins and outs of web development, and i have found something i am talented and passionate about in the process. I want to continue this path to become a great developer and really see what i can do!'
        ]
      },
      footer: {
        text: 'Designed by Nate Welfare'
      }
    };
  }

  render() {
    return (
      <div>
        <Header/>
        <main>
          <Background/>
          <Hero/>
          <About text={this.state.about.text}/>

          <Gallery/>
        </main>
        <Footer text={this.state.footer.text}/>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
