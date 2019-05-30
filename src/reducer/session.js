import { CHOOSE_POKEMON } from '../action_types';

const initialState = { selectedPokemonId: null };

export default function session(state = initialState, action) {
  switch (action.type) {
    case CHOOSE_POKEMON: {
      return {
        ...state,
        selectedPokemonId: action.payload
      };
    }

    default: {
      return state;
    }
  }
}
