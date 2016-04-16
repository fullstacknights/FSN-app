import { AsyncStorage } from 'react-native';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, autoRehydrate } from 'redux-persist';

import * as reducers from '../reducers';

const isDebuggingInChrome = __DEV__ && !!window.navigator.userAgent;
const createFSNStore = applyMiddleware(thunk)(createStore);

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
