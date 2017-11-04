import store from '../store';
import { setProduct } from '../store/actions/product';

var btnAddToCart = window.document.getElementById('ny-product-add-to-cart');

const product = {
  id: null,
  quantity: 1,
  properties: {},
};

var selects = window.document.querySelectorAll('#np-product-variants select');

if (btnAddToCart) {
  btnAddToCart.addEventListener('click', e => {
    product.id = e.target.value;
    store.dispatch(setProduct(product));
  });
}

if (selects && selects.length > 0) {
  selects.forEach(select => {
    select.addEventListener('change', e => {
      product.properties[`${e.target.name}`] = e.target.value;
    });
  });
}
