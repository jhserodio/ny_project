import { toggleDisplay } from '../utils/toggleElements'

toggleDisplay("active-collections");
toggleDisplay("active-info");
toggleDisplay("active-search");

// dropdown function header

var activeDropdown  = document.querySelectorAll(".item-drop");
var removeDropdown  = document.querySelectorAll(".dropdown-back");
var displayDropdown = document.querySelectorAll(".dropdown");
var displayMenu     = document.querySelector(".megamenu .menu");

function showDropdown( active, display, menu ) {

  for ( let i = 0; i < active.length; i++ ) {
    active[i].addEventListener('click', (e) => {
      e.preventDefault();
      display[i].classList.add('active');
      menu.classList.add('inactive');
    });
  }

}

showDropdown(activeDropdown, displayDropdown, displayMenu);
