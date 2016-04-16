import React, { Component } from 'react-native';
import { Provider } from 'react-redux';

import * as reducers from './reducers';
import App from './Container';
import configureStore from './store/configureStore';

const store = configureStore();

export default class Wrap extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}
