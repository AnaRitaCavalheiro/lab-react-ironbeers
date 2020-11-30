import React from 'react';
import BeerService from '../utils/api';

class BeerDetails extends React.Component {
  state = {
    image: '',
    name: '',
    tagline: '',
    first_brewed: '',
    attenuation_level: '',
    description: '',
    contributed_by: '',
  };

  componentDidMount() {
    const beerService = new BeerService();
    const id = this.props.match.params.id;
    beerService.getBeer(id).then((response) => {
      console.log(response);
      this.setState({
        image: response.data.image,
        name: response.data.name,
        tagline: response.data.tagline,
        first_brewed: response.data.first_brewed,
        attenuation_level: response.data.attenuation_level,
        description: response.data.description,
        contributed_by: response.data.conntributed_by,
      });
    });
  }

  render() {
    return (
      <div>
        <h3>{this.state.name}</h3>
        <h4>{this.state.tagline}</h4>
        <ul>
          <li>{this.state.first_brewed}</li>
          <li>{this.state.attenuation_level}</li>
          <li>{this.state.description}</li>
        </ul>
        <p>{this.state.contributed_by}</p>
      </div>
    );
  }
}

export default BeerDetails;
