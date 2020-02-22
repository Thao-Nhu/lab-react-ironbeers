import React from 'react';
import './App.css';
import Homepage from './components/Homepage.js';
import Beers from './components/Beers.js';
import Newbeer from './components/Newbeer.js';
import Randombeer from './components/Randombeer.js';
import BeerDetail from './components/BeerDetail.js'
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      
      <Switch>
        <Route exact path="/" component={Homepage}/>
        <Route exact path="/beers" component={Beers}/>
        <Route exact path="/beers/:id" component={BeerDetail}/>
        <Route exact path='/newbeer' component={Newbeer}/>
        <Route exact path="/randombeer" component={Randombeer}/>
        
      </Switch>
 
    </div>
  );
}

export default App;
