(function(){

  // variables fof DOM controll

  var activeCollections = document.getElementById("active-collections");
  var collections       = document.getElementById("collections");

  var activeInfo = document.getElementById("active-info");
  var info       = document.getElementById("info");

  var removeTotal  = document.querySelectorAll(".megamenu");
  var effect       = "display: block;"

  var btnDrop   = document.querySelectorAll(".btn-dropdown");
  var dropList  = document.querySelectorAll(".dropdown");

  var btnSearch      = document.querySelector('#search-button');
  var displaySeaerch = document.querySelector('#search-display');

  // functions DOM controll

  function toggleMenu( active, display, effect ) {

    active.addEventListener("click", function () {

      if( display.hasAttribute("style") )
        display.removeAttribute("style");
      else
        display.setAttribute("style", effect);
    });

  }

  toggleMenu( activeCollections, collections, effect );
  toggleMenu( activeInfo, info, effect );


  for ( var i = 0; i < dropList.length; i++ ) {
      toggleMenu( btnDrop[i], dropList[i], effect );
  }

}());
