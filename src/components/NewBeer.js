import React from 'react';
import BeerService from '../utils/api';
import { withRouter } from 'react-router-dom';

class NewBeer extends React.Component {
  state = {
    image: '',
    name: '',
    tagline: '',
    first_brewed: '',
    attenuation_level: '',
    description: '',
    contributed_by: '',
  };

  handleChange = (event) => {
    let { name, value, type } = event.target;

    this.setState({
      [name]: value,
    });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const beerService = new BeerService();
    beerService.NewBeer(this.state).then(() => {
      this.props.history.push('/beers');
    });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <div class="form-group">
            <label for="beername">Name:</label>
            <input
              type="text"
              name="name"
              onChange={this.handleChange}
              value={this.state.name}
              class="form-control"
            />
          </div>
          <div class="form-group">
            <label for="beerTagline">tagline:</label>
            <input
              type="text"
              name="tagline"
              onChange={this.handleChange}
              value={this.state.tagline}
              class="form-control"
            />
          </div>
          <div class="form-group">
            <label for="beerFirstBrewed">First Brewed:</label>
            <input
              type="text"
              name="first_brewed"
              onChange={this.handleChange}
              value={this.state.first_brewed}
              class="form-control"
            />
          </div>
          <div class="form-group">
            <label for="beerFirstBrewed">Brewer's Tips:</label>
            <input
              type="text"
              name="brewers_tips"
              onChange={this.handleChange}
              value={this.state.brewers_tips}
              class="form-control"
            />
          </div>
          <div class="form-group">
            <label for="attenuationLevel">Attenuation Level:</label>
            <input
              type="number"
              name="attenuation_level"
              onChange={this.handleChange}
              value={this.state.attenuation_level}
              class="form-control"
            />
          </div>
          <div class="form-group">
            <label for="description">Description:</label>
            <input
              type="text"
              name="description"
              onChange={this.handleChange}
              value={this.state.description}
              class="form-control"
            />
          </div>
          <div class="form-group">
            <label for="createdBy">Created by:</label>
            <input
              type="text"
              name="contributed_by"
              onChange={this.handleChange}
              value={this.state.contributed_by}
              class="form-control"
            />
          </div>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default withRouter(NewBeer);
