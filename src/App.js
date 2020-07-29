import React from 'react';
import './App.css';
import Intro from './home/home';
import Footer from './home/footer';
import Source from './home/imageSource';
import Slider from './home/slidder';
import End from './home/end-message';

function App(Add) {
  
  return (<div>
      <Intro />
      <Source />
      <Slider />
      <End message={`-Thank You For Visiting.-`}/>
      <Footer />
    </div>
  );
  }
export default App;
