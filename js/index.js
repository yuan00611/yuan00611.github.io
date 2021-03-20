$('.pimg').click(function(){
	$(this).toggleClass('min');
	$(this).toggleClass('max');
});

function portfolioCategory(evt, categoryName){
	var i, tabcontent, tablinks;

	// Get all elements with class="tabcontent" and hide them
  	tabcontent = document.getElementsByClassName("tabcontent");
  	for (i = 0; i < tabcontent.length; i++) {
    	tabcontent[i].style.display = "none";
  	}

  	// Get all elements with class="tablinks" and remove the class "active"
  	tablinks = document.getElementsByClassName("tablinks");
  	for (i = 0; i < tablinks.length; i++) {
    	tablinks[i].className = tablinks[i].className.replace(" active", "");
  	}

  	// Show the current tab, and add an "active" class to the button that opened the tab
  	document.getElementById(categoryName).style.display = "block";
  		evt.currentTarget.className += " active";
	
}

// Slidewindow
var slideIndex = 1;
showSlides(slideIndex, "mySlides", "dot");
showSlides(slideIndex, "mySlides2", "dot2");
showSlides(slideIndex, "mySlides3", "dot3");
showSlides(slideIndex, "mySlides4", "dot4");

// Next/previous controls
function plusSlides(n, SlideClassName, dotClassName) {
  var dots = document.getElementsByClassName(dotClassName);
  for (i = 0; i < dots.length; i++) {
      if(dots[i].className.includes("slide_active")){
        slideIndex = i+1;
        break;
      }
  }
  showSlides(slideIndex += n, SlideClassName, dotClassName);
}

// Thumbnail image controls
function currentSlide(n, SlideClassName, dotClassName) {
  showSlides(slideIndex = n, SlideClassName, dotClassName);
}

function showSlides(n, SlideClassName, dotClassName) {
  var i;
  var slides = document.getElementsByClassName(SlideClassName);
  var dots = document.getElementsByClassName(dotClassName);
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" slide_active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " slide_active";
}