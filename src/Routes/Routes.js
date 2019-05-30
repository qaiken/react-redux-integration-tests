import { ConnectedRouter } from 'connected-react-router';
import React from 'react';
import { Provider } from 'react-redux';
import { Link, Route, Switch } from 'react-router-dom';
import history from '../history';
import store from '../store';
import ChooseYourPokemon from '../views/ChooseYourPokemon';
import SelectedPokemon from '../views/SelectedPokemon';
import './Routes.css';

function App() {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <div className="app">
          <h1>BEST APP EVER</h1>
          <Link to="/choose-your-pokemon">Choose Your Pokemon</Link>
          <Switch>
            <Route component={ChooseYourPokemon} path="/choose-your-pokemon" />
            <Route component={SelectedPokemon} path="/selected" />
          </Switch>
        </div>
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
