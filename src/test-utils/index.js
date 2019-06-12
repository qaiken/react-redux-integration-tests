import { ConnectedRouter } from 'connected-react-router';
import { mount } from 'enzyme';
import { mergeDeepRight } from 'ramda';
import React from 'react';
import { Provider } from 'react-redux';
import history from '../history';
import rootReducer from '../reducer';
import { createStoreWithMiddleWare } from '../store';

export const mockData = {
  pokemon: {
    id: 26,
    species: { name: 'raichu' },
    sprites: {
      front_default:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png'
    }
  }
};

export const makeMountRender = (Component, defaultProps = {}) => {
  return (customProps = {}) => {
    const props = {
      ...defaultProps,
      ...customProps
    };
    return mount(<Component {...props} />);
  };
};

export const makeStore = (customState = {}) => {
  const root = rootReducer({}, { type: '@@INIT' });
  const state = mergeDeepRight(root, customState);

  return createStoreWithMiddleWare(rootReducer, state);
};

export const reduxify = (Component, props = {}, state = {}) => {
  return function reduxWrap() {
    return (
      <Provider store={makeStore(state)}>
        <ConnectedRouter history={history}>
          <Component {...props} />
        </ConnectedRouter>
      </Provider>
    );
  };
};

export const snapshotify = reactWrapper => {
  return reactWrapper.html();
};

export const mocker = apiMock => ({
  fetchRandomPokemon() {
    apiMock
      .onGet(/https:\/\/pokeapi.co\/api\/v2\/pokemon\/\d+/)
      .reply(config => {
        const numberCheck = RegExp(/pokemon\/(\d+)/);
        const pokemonInt = Number(numberCheck.exec(config.url)[1]);

        if (pokemonInt > 151) {
          return [500];
        }

        return [200, mockData.pokemon];
      });

    return this;
  }
});

export const ticks = (callbacks = []) => {
  if (callbacks.length < 1) {
    return null;
  }

  setTimeout(() => {
    const cb = callbacks.shift();

    if (cb) {
      cb();
    }

    ticks(callbacks);
  });
};
