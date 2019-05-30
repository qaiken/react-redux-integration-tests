import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';
import history from '../history';

import data from './data';
import session from './session';

export default combineReducers({
  data,
  session,
  router: connectRouter(history)
});
