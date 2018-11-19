import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import App from './App';
import reducers from './store/reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const logger = store => next => (action) => {
  const result = next(action);
  console.log('[CURRENT ACTION]', action, '[CURRENT STATE]', store.getState());
  return result;
};

ReactDOM.render(
  <Provider store={createStore(reducers, composeEnhancers(applyMiddleware(logger, thunk)))}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>, document.querySelector('#root'),
);
