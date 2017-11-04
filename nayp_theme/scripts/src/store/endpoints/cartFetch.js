import axios from 'axios';

export function getCartPreview() {
  fetch('/cart.js', {
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
      'X-Requested-With':
        'xmlhttprequest' /* XMLHttpRequest is ok too, it's case insensitive */,
    },
    method: 'GET',
  })
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      /* we have JSON */
      console.log(json);
    })
    .catch(function(err) {
      /* uh oh, we have error. */
      console.error(err);
    });
}
