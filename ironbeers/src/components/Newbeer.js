import React from 'react';
import Header from './Header.js';
import { Link } from 'react-router-dom'; 
import axios from "axios";

class NewBeer extends React.Component {
  state={
    name:"",
    tagline:"",
    description:"",
    first_brewed:"",
    brewers_tips:"",
    attenuation_level:0,
    contributed_by:""
  }
  handleFormSubmit=(event)=>{
    event.preventDefault();
    //const [name,tagline,description,first_brewed,brewers_tips,attenuation_level,contributed_by]=this.state
    const name=this.state.name;
    const tagline=this.state.tagline;
    const description=this.state.description;
    const first_brewed=this.state.first_brewed;
    const brewers_tips=this.state.brewers_tips;
    const attenuation_level=this.state.attenuation_level;
    const contributed_by=this.state.contributed_by;
    axios.post("https://ih-beers-api2.herokuapp.com/beers/new",{name,tagline,description,first_brewed,brewers_tips,attenuation_level,contributed_by})
    .then(()=> {
      this.setState({
        name:"",
        tagline:"",
        description:"",
        first_brewed:"",
        brewers_tips:"",
        attenuation_level:0,
        contributed_by:""
      })
      this.props.history.push("/beers")}
    )
    .catch(err=>console.log(err))
  }

  handleChange=(event) => {
    const {name,value}=event.target;
    this.setState({[name]:value})
  }

  render(){
    return (
      <div >
        <Link to="/"><Header/></Link>
        <form onSubmit={this.handleFormSubmit}>
          <label>Name</label>
          <input type="text" name="name" value={this.state.name} onChange={e=>this.handleChange(e)}/>
          <label>Tagline</label>
          <input type="text" name="tagline" value={this.state.tagline} onChange={e=>this.handleChange(e)}/>
          <label>Description</label>
          <input type="textarea" name="description" value={this.state.description} onChange={e=>this.handleChange(e)}/>
          <label>First brewed</label>
          <textarea name="first_brewed" value={this.state.first_brewed} onChange={e=>this.handleChange(e)}/>
          <label>Brewer Tips</label>
          <input type="text" name="brewers_tips" value={this.state.brewers_tips} onChange={e=>this.handleChange(e)}/>
          <label>Attenuation Level</label>
          <input type="number" name="attenuation_level" value={this.state.attenuation_level} onChange={e=>this.handleChange(e)}/>
          <label>Contributed by</label>
          <input type="text" name="contributed_by" value={this.state.contributed_by} onChange={e=>this.handleChange(e)}/>
          <button>Add New</button>
        </form>
      
      </div>
    )
  }
}

export default NewBeer;