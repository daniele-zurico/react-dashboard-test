// @flow
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

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

// override the custom MUI-theme
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#2196f3',
    }
  },
});

type Props = {};

class App extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <MuiThemeProvider theme={theme}>
          <Dashboard />
          </MuiThemeProvider>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
