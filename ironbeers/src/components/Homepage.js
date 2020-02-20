import React from 'react';
import Beers from './Beers.js';
import Newbeer from './Newbeer.js';
import Randombeer from './Randombeer.js'

const Homepage = () => {
  return (
    <div>
      <Beers/>
      <Randombeer/>
      <Newbeer/>
    </div>
  )
}

export default Homepage;