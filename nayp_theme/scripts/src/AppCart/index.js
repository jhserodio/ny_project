import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';

import CartContainer from './CartContainer';
import store from '../store';

ReactDOM.render(
  <Provider store={store}>
    <CartContainer />
  </Provider>,
  document.getElementById('np-cart-preview-seller'),
);

export { store };
