import React from 'react';
import { Link } from 'react-router-dom';
import BeerService from '../utils/api';

class BeerList extends React.Component {
  state = {
    beers: [],
  };

  componentDidMount() {
    const beerService = new BeerService();
    beerService.getAll().then((response) => {
      console.log(response);
      this.setState({
        beers: response.data,
      });
    });
  }
  handleSearchBeer = (event) => {
    const value = event.target.value;
    const beerService = new BeerService();
    beerService.searchBeer(value).then((response) => {
      this.setState({
        beers: response.data,
      });
    });
  };

  render() {
    return (
      <div>
        {this.state.beers.map((beers, index) => {
          return (
            <div key={index}>
              <Link to={`/beers/${beers.id}`}>
                <ul>
                  <li>{beers.image}</li>
                  <li>{beers.name}</li>
                  <li>{beers.tagline}</li>
                  <li>Created by:{beers.contributed_by}</li>
                </ul>
              </Link>
            </div>
          );
        })}
      </div>
    );
  }
}

export default BeerList;
