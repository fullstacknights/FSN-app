import React, { Component } from 'react-native';
import { Provider } from 'react-redux';

import Router from './Router/Container';
import configureStore from './store/configureStore';

console.disableYellowBox = true;

const store = configureStore();

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router/>
      </Provider>
    );
  }
}
