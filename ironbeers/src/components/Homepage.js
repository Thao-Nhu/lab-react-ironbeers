import React from 'react';
import { Link } from 'react-router-dom'; 

const Homepage = () => {
  return (
    <div className="beer-total">
      <div className="beer">
        <div><img src="/img/beers.png" alt="beer"/></div>
        <div><Link to="/beers"><h1>All Beers</h1></Link></div>
        <div><p>Lorem ipsum</p></div>      
      </div>
      <div className="beer">
        <div><img src="/img/random-beer.png" alt="beer"/></div>
        <div><Link to="/randombeer"><h1>Random Beer</h1></Link></div>
        <div><p>Lorem ipsum</p></div>
      </div>
      <div className="beer">
        <div><img src="/img/new-beer.png" alt="beer"/></div>
        <div><Link to="/newbeer"><h1>New Beer</h1></Link></div>
        <div><p>Lorem ipsum</p></div>
      </div>
    </div>
  )
}

export default Homepage;