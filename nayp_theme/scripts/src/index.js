import './AppCart';
import './utils/addToCart';
import './utils/footer';
import './utils/header';
import './utils/productGallery';

import { getCartPreview } from './store/endpoints/cart';
import { setCartVisible } from './store/actions/app';
import { store } from './AppCart/index';

const btn = window.document.getElementById('np-cart-preview-active');

if (btn) {
  btn.addEventListener('click', () => {
    store.dispatch(setCartVisible());
  });
}
