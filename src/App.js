// @flow
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';

import { BrowserRouter } from 'react-router-dom';

import rootReducer from './store/reducers';
import { Dashboard } from './views';

const midleware = [];

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(...midleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

type Props = {};

class App extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Dashboard />
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
