(function(){
	
	var slides = document.querySelectorAll('#np-home-slide-gallery .slide-item');
	var slideButtons = document.querySelectorAll('#np-home-slide-navegation li');
	
	var activeClassName = '_active';

	function elementClearActive(elements, className) {
		elements.forEach(element => {
			if (element.classList.contains(className))
				element.classList.remove(className);
		})
	}
	
	if (slideButtons) {
		slideButtons.forEach((button, index) => {
			button.addEventListener('click', e => {
				elementClearActive(slideButtons, activeClassName);
				elementClearActive(slides, activeClassName);

				slides[index].classList.add(activeClassName);
				button.classList.add(activeClassName);
			});
		});
	}

})();