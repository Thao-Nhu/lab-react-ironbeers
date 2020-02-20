import React from 'react';
import Header from './Header.js';
import { Link } from 'react-router-dom'; 
import axios from "axios";

class Beers extends React.Component {
  state={
    listOfBeers:[]
  }
  getAllBeers=()=>{
    console.log("hello")
    axios.get("https://ih-beer-api.herokuapp.com/beers")
    .then(
      response => {
        console.log("response from API", response.data)
        this.setState({listOfBeers:response.data})
      }
      )
    .catch(err=>console.log("err"))
  }
  render(){
    return (
      <div >
        <Link to="/"><Header/></Link>
        <div>
          {this.state.listOfBeers.map((beer,index)=>{
            return(
              <div key={index}>{beer}</div>
            )
          })}
        </div>    
         
      </div>
    )
  }
}

export default Beers;