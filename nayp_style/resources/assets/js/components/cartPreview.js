
function cartPreview() {

  var btnCart = document.getElementById('active-cart');
  var btnShip = document.getElementById('active-ship');
  var displayCart = document.querySelector('.cart-preview');
  var displayShip = document.querySelector('.preview-shipping');
  var closeCart  = document.getElementById('close-preview-cart');;
  var closeShip  = document.getElementById('close-preview-ship');



  btnCart.addEventListener('click', () => {
        displayCart.classList.add('active');
        document.body.setAttribute('style', 'overflow:hidden');
  })

  btnShip.addEventListener('click', () => {
    displayShip.classList.toggle('active');
  })

  closeCart.addEventListener('click', () => {
    displayShip.classList.remove('active');
    displayCart.classList.remove('active');
    document.body.removeAttribute('style');
  })

  closeShip.addEventListener('click', () => {
    displayShip.classList.remove('active');
  })


}

export { cartPreview };
