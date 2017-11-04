var gallery = document.querySelector('.product-gallery-images');
var galleryItem = document.querySelectorAll(
  '.product-gallery-images .gallery-item img'
);

var btnPrev = document.getElementById('product-gallery-prev');
var btnNext = document.getElementById('product-gallery-next');

var maxWidth = 0;
var counter = 0;

function moveSlide(btn) {
  btn.addEventListener('click', () => {
    if (btn.value === '+' && counter > 0) {
      maxWidth += galleryItem[counter].offsetWidth;
      counter--;
    } else if (btn.value === '-' && counter < galleryItem.length - 1) {
      maxWidth -= galleryItem[counter].offsetWidth;
      counter++;
    }
    gallery.setAttribute('style', 'margin-left:' + maxWidth + 'px');
  });
}

if (btnPrev) {
  moveSlide(btnPrev);
}

if (btnNext) {
  moveSlide(btnNext);
}
