/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';

import RootNavigation from './navigation/root';
import {Provider} from 'react-redux';
import store from 'src/redux/store';
const App: () => Node = () => {
  return (
    <Provider store={store}>
      <RootNavigation />
    </Provider>
  );
};

export default App;
