import React from 'react';
import Header from './Header.js';
import { Link } from 'react-router-dom'; 
import axios from "axios";

class Randombeer extends React.Component {
  state={}
  componentDidMount(){
    this.getRandomBeer()
}
  getRandomBeer=()=>{
      axios.get(`https://ih-beers-api2.herokuapp.com/beers/random`)
      .then(response => {
        console.log("beer detail", response.data)
        this.setState(response.data)
    })
      .catch(err=>console.log(err))
  }


  render(){
    return (
      <div >
          <Link to="/"><Header/></Link>
          <img src={this.state.image_url} alt={this.state.name}/>
          <h1>{this.state.name}</h1>
          <h2>{this.state.tagline}</h2>
          <h2>{this.state.first_brewed}</h2>
          <h2>{this.state.attenuation_level}</h2>
          <h2>{this.state.description}</h2>
          <h2>{this.state.contributed_by}</h2>
         
      </div>
    )
  }
}

export default Randombeer;