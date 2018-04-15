import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import App from './src/components/App';
import reducers from './src/reducers';

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

const Vody = () => {
  return (
    <Provider store={store}>
        <App />
    </Provider>
  );
}

AppRegistry.registerComponent('vody', () => Vody);
