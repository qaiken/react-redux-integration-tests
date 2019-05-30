import { routerMiddleware } from 'connected-react-router';
import { isNil, reject } from 'ramda';
import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import history from '../history';
import rootReducer from '../reducer';

window.__REDUX_DEVTOOLS_EXTENSION__ =
  window.__REDUX_DEVTOOLS_EXTENSION__ ||
  function(f) {
    return f;
  };

const middlewares = reject(isNil)([
  applyMiddleware(thunk),
  applyMiddleware(routerMiddleware(history)),
  window.__REDUX_DEVTOOLS_EXTENSION__()
]);

export const createStoreWithMiddleWare = compose(...middlewares)(createStore);
export default createStoreWithMiddleWare(rootReducer);
