import React from 'react';
import Header from './Header.js';
import { Link } from 'react-router-dom'; 

const Newbeer = () => {
  return (
    <div >
      <Link to="/"><Header/></Link>
      <div>Content</div>     
    </div>
  )
}

export default Newbeer;