import React from 'react';
import { render } from 'react-dom';
// import { Provider } from 'react-redux';
// import { createStore } from 'redux';
import reducers from './rootReducers';
import App from './app';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';


// /* eslint-disable no-underscore-dangle */
// const store = createStore(
//   reducers,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );
// /* eslint-enable */

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(
  applyMiddleware(
    promiseMiddleware()
  )
));


render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
);
