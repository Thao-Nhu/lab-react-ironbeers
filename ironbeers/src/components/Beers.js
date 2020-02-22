import React from 'react';
import Header from './Header.js';
//import Newbeer from './Newbeer.js'
import { Link } from 'react-router-dom'; 
import axios from "axios";

class Beers extends React.Component {
  state={
    listOfBeers:[]
  }
  getAllBeers=()=>{
  
    axios.get("https://ih-beers-api2.herokuapp.com/beers")
    .then(
      response => {
        this.setState({listOfBeers:response.data})
      }
      )
    .catch(err=>console.log("err"))
  }
  componentDidMount(){
    this.getAllBeers();
  }
  render(){
    return (
      <div >
        <Link to="/"><Header/></Link>
        <div>
          {this.state.listOfBeers.map((beer)=>{
            return(
              <div key={beer._id} className="list-beers">
                <div className="list-beers-1"><img src={beer.image_url} alt={beer.name}/></div>
                <div className="list-beers-2">
                  <ul>
                    <Link to={`/beers/${beer._id}`}><li><h1>{beer.name}</h1></li></Link>
                    <li>{beer.tagline}</li>
                    <li>created by: {beer.contributed_by}</li>
                  </ul>
                </div>
              </div>
            )
          })}
        </div>    
      
      </div>
    )
  }
}

export default Beers;