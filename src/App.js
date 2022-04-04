import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { MainLayout } from './components/layout/MainLayout/MainLayout';
import { store } from './redux/store';
import { persistor } from './redux/store';

// ... normal setup, create store and persistor, import components etc.

const App = () => {
  return (
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
      <MainLayout />
      {/* </PersistGate> */}
    </Provider>
  );
};

export default App;
