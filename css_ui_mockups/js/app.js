$(function() {
	$('.slide-next').click(function(){
		var curretnSlide = parseInt($('#signup-form-slider').data('currentslide'));
		curretnSlide = curretnSlide + 1;
		console.log(curretnSlide);
		$('#signup-form-slider').data('currentslide', curretnSlide);
		$('#form-step').text('Step ' + (curretnSlide+1));
		resizeFormSlider();
	});
	$('.slide-prev').click(function(){
		var curretnSlide = parseInt($('#signup-form-slider').data('currentslide'));
		curretnSlide = curretnSlide - 1;
		console.log(curretnSlide);
		$('#signup-form-slider').data('currentslide', curretnSlide);
		$('#form-step').text('Step ' + (curretnSlide+1));
		resizeFormSlider();
	});
	$(window).on('resize', function(){
		//resizeFormSlider();
	});
	resizeFormSlider();
	

	
	$("form").submit(function(e){
        e.preventDefault();
    });
	
});

function resizeFormSlider() {
	var sliderContainer = $('.slider-content');
	var slideDivs = $(sliderContainer).find('.form-slide');
	var containerWidth = $('#signup-form-slider').width();
	slideDivs.width(containerWidth);
	
	// width of each element in slider
	var elementWidth = sliderContainer.find('.form-slide').outerWidth();
	 // count number of slide elements
	var slideElements = sliderContainer.find('.form-slide');
	var elementWidth = sliderContainer.find('.form-slide').outerWidth();
	var slideElements = elementWidth;
	// set width of slider container
	var sliderContainerWidth = sliderContainer.width(elementWidth * slideElements * 1.8);
	
	var curretnSlide = $('#signup-form-slider').data('currentslide');
	var setmarginLeft = 0 - (curretnSlide * elementWidth);
	
	$('.slider-content').animate({ marginLeft: setmarginLeft + "px"}, 500);
    if(curretnSlide == 0) {
		$('.slide-prev').hide();
	}
	else {
		$('.slide-prev').show();
	}
	
}