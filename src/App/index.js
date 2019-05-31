import { ConnectedRouter } from 'connected-react-router';
import React from 'react';
import { Provider } from 'react-redux';
import { Link } from 'react-router-dom';
import history from '../history';
import Routes from '../Routes';
import store from '../store';
import './index.css';

export default function App() {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <div className="app">
          <h1>BEST APP EVER</h1>
          <Link to="/choose-your-pokemon">Choose Your Pokemon</Link>
          <Routes />
        </div>
      </ConnectedRouter>
    </Provider>
  );
}
