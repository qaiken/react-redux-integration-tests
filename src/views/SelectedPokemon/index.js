import React, { Component } from 'react';
import { connect } from 'react-redux';
import history from '../../history';

class SelectedPokemon extends Component {
  componentDidMount() {
    const { name } = this.props;

    if (!name) {
      history.replace('/');
    }
  }

  render() {
    const { name, img } = this.props;
    return (
      <div>
        <h2>Congrats!</h2>
        <h3>You have selected {name}!</h3>
        <img src={img} alt={name} />
      </div>
    );
  }
}

export default connect(state => {
  const selectedPokemonId = state.session.selectedPokemonId;
  const activePokemon = state.data.pokemon[selectedPokemonId] || {
    species: {},
    sprites: {}
  };

  return {
    name: activePokemon.species.name,
    img: activePokemon.sprites.front_default
  };
})(SelectedPokemon);
