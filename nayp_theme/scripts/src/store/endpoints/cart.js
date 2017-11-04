import axios from 'axios';

export function getCartPreview() {
  return axios.get('/cart.js', { withCredentials: 'same-origin' });
}

export function postCartClear() {
  return axios.get('/cart/clear.js', { withCredentials: 'same-origin' });
}
