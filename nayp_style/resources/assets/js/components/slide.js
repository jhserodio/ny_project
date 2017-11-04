function slide () {

  var slides = document.querySelectorAll(".slide-item");
  var slidePrev = document.querySelector('.slide-nav-prev');
  var slideNext = document.querySelector('.slide-nav-next');

  slidePrev.addEventListener('click', (e) => {
    e.preventDefault();
    slideArrow(slides, 'left');
  })

  slideNext.addEventListener('click', (e) => {
    e.preventDefault();
    slideArrow(slides, 'right');
  })

}

function slideClear(display) {
  for ( let j = 0; j < display.length; j++ ) {
    if ( display[j].classList.contains('active') )
      display[j].classList.remove('active');
  }
}

function slideArrow(display, direction) {

  var position = 0;

  if ( direction === "left" )
    direction = -1;
  else if ( direction === "right" )
    direction = 1;
  else
    console.log("direction error arg")


  for ( let i = 0; i < display.length; i++ ) {
    if ( (display[i].classList.contains('active'))) {
      var slide = display[i + direction];
      position = i;
    }
  }

  if ( !(((position === 0) && (direction === -1)) || ((position === display.length -1) && (direction === 1))) ) {
    slideClear(display);
    slide.classList.add('active');
  }

}


export { slide };
