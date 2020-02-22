
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


$('.poimg').click(function(){
  $(this).toggleClass('pmin');
  $(this).toggleClass('pmax');
});
