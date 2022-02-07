import React from 'react';
import store from './redux/store';
import { Provider } from 'react-redux';
import { MainLayout } from './components/layout/MainLayout/MainLayout';

const App = () => (
  <Provider store={store}>
    <MainLayout />
  </Provider>
);

export default App ;
