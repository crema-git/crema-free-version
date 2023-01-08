import {configureStore} from '@reduxjs/toolkit';
import reducers from '../reducers';
// import { routerMiddleware } from 'connected-react-router';
// import thunk from 'redux-thunk';

// const createBrowserHistory = require('history').createBrowserHistory;
// const history = createBrowserHistory();
// const routeMiddleware = routerMiddleware(history);

// const middlewares = [thunk, routeMiddleware];
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function ConfigureStore(initialState) {
  const store = configureStore({
    reducer: reducers(),
    // initialState,
    // composeEnhancers(applyMiddleware(...middlewares))
  });

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers/index', () => {
      const nextRootReducer = require('../reducers');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
