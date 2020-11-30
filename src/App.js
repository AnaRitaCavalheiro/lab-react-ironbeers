import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import BeerList from './components/BeerList';
import BeerDetails from './components/BeerDetails';
import Navbar from './components/Navbar';
import NewBeer from './components/NewBeer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={BeerList} />
        <Route exact path="/beers" component={BeerList} />
        <Route exact path="/beers/new" component={NewBeer} />
        <Route path="/beers/:id" component={BeerDetails} />
      </Switch>
    </div>
  );
}

export default App;
