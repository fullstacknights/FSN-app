import { AsyncStorage } from 'react-native';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import devTools from 'remote-redux-devtools';
import { persistStore, autoRehydrate } from 'redux-persist';

import * as reducers from '../reducers';

const devToolsConfig = {
  hostname: 'localhost',
  port: 8000
};

const isDebuggingInChrome = __DEV__ && !!window.navigator.userAgent;
const createFSNStore = compose(
  applyMiddleware(thunk), devTools(devToolsConfig))(createStore);

function configureStore(onComplete) {
  const reducer = combineReducers(reducers);
  const store = autoRehydrate()(createFSNStore)(reducer);
  persistStore(store, { storage: AsyncStorage }, onComplete);
  if (isDebuggingInChrome) {
    window.store = store;
  }
  return store;
}

export default configureStore;
