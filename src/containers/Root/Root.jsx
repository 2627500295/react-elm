import React from 'react';
import { Provider } from 'react-redux';
import App from '@/containers/App';
import store from '@/store';
import rootSage from '@/sagas';

store.run(rootSage);

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default Root;
