import { ADD_POKEMON, CHOOSE_POKEMON } from '../action_types';
import history from '../history';
import apiService from '../services/api-service';
import { getRandomInt } from '../utils';

export function addPokemon(pokemon) {
  return { type: ADD_POKEMON, payload: pokemon };
}

export function choosePokemon(id) {
  return { type: CHOOSE_POKEMON, payload: id };
}

export function fetchRandomPokemon() {
  return dispatch => {
    const randomInt = getRandomInt(151);

    return apiService
      .request(`https://pokeapi.co/api/v2/pokemon/${randomInt}`)
      .then(res => res.data)
      .then(pokemon => {
        const { id } = pokemon;

        dispatch(addPokemon({ [id]: pokemon }));
        dispatch(choosePokemon(id));

        history.push({ pathname: `/selected` });
      });
  };
}
