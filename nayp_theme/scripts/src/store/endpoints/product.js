import axios from 'axios';

export function postProductAdd(product) {
  return axios.post('/cart/add.js', {
    ...product,
    withCredentials: 'same-origin',
  });
}

export function postProductUpdate(product) {
  const data = {};

  data[`${product.id}`] = product.quantity;

  return axios.post('/cart/update.js', {
    ...data,
    withCredentials: 'same-origin',
  });
}
