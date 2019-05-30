import { CHOOSE_POKEMON } from '../action_types';

const initialState = { activePokemonId: null };

export default function session(state = initialState, action) {
  switch (action.type) {
    case CHOOSE_POKEMON: {
      return {
        ...state,
        activePokemonId: action.payload
      };
    }

    default: {
      return state;
    }
  }
}
