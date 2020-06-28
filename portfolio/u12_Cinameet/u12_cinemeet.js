
//scroll spy
var $window = $(window);
$(window).bind('scroll', function() {
  var currentTop = $(window).scrollTop();
  var elems = $('.describe');
  elems.each(function(index){
    var elemTop 	= $(this).offset().top;
    var elemBottom 	= elemTop + $(this).height();
    if(currentTop >= elemTop && currentTop <= elemBottom){
      var id 		= $(this).attr('id');
      var navElem = $('a[href="#' + id+ '"]');
    	navElem.parent().addClass('active').siblings().removeClass('active');
    }
  })
});


// Slidewindow
var slideIndex = 1;
showSlides(slideIndex, "mySlides", "dot");
// showSlides(slideIndex, "mySlides2", "dot2");

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


//picture enlarge
$('.poimg').click(function(){
  $(this).toggleClass('pmin');
  $(this).toggleClass('pmax');
});


//Picture Modal

function zoom_in(id){
  var modal = document.getElementsByClassName("zoom_modal")[id];
  var img = document.getElementsByClassName("zoom_img")[id];
  var modalImg = document.getElementsByClassName("zoom_modal_img")[id];
  // var captionText = document.getElementsByClassName("zoom_caption")[id];

  modal.style.display = "block";
  modalImg.src = img.src;
}

function close_zoom(id){
  var modal = document.getElementsByClassName("zoom_modal")[id];
  modal.style.display = "none";
}












