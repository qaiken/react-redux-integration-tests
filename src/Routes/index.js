import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ChooseYourPokemon from '../views/ChooseYourPokemon';
import SelectedPokemon from '../views/SelectedPokemon';

export default () => (
  <Switch>
    <Route component={ChooseYourPokemon} path="/choose-your-pokemon" />
    <Route component={SelectedPokemon} path="/selected" />
  </Switch>
);
