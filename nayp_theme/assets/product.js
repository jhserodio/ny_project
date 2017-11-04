(function() {
  var submitButton = window.document.getElementById("ny-product-add_to_cart");
  var addData = {
    quantity: 1,
    id: Number(submitButton.value)
  }

  console.log(addData);

  submitButton.addEventListener('click', function() {
    fetch('/cart/add.js', {
      method: 'POST',
      body: JSON.stringify(addData),
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
        'X-Requested-With':'xmlhttprequest'
      }
    }).then(function(response) {
      return response.json();
    }).then(function(json) {
      /* we have JSON */
      console.log(json)
    }).catch(function(err) {
      
      /* uh oh, we have error. */
      console.error(err)
    });
  })
}())