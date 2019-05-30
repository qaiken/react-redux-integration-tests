import { ADD_POKEMON } from '../action_types';

const initialState = { pokemon: {} };

export default function data(state = initialState, action) {
  switch (action.type) {
    case ADD_POKEMON: {
      return {
        ...state,
        pokemon: { ...state.pokemon, ...action.payload }
      };
    }

    default: {
      return state;
    }
  }
}
