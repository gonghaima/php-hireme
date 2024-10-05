let translate = 0;
const translateAmount = 100;
$(function() {
	$.datepicker.setDefaults(
		$.extend(
			{'dateFormat':'dd/mm/yy'},
			$.datepicker.regional['au']
		)
	);
	$('.slide-next').click(function(){
		steps = document.querySelectorAll(".step");
		translate -= translateAmount;
		steps.forEach(
			steps => (steps.style.transform = `translateX(${translate}%)`)
		);
	});
	$('.slide-prev').click(function(){
		steps = document.querySelectorAll(".step");
		translate += translateAmount;
		steps.forEach(
			steps => (steps.style.transform = `translateX(${translate}%)`)
		);
	});
	resizeFormSlider();
	$('.industry-select').autocomplete({
      source: industries
    });
	$('.occupation-select').autocomplete({
      source: occupations
    });
	$('.country-select').autocomplete({
      source: countries
    });
	$('.datepicker').datepicker({
      showOtherMonths: true,
      selectOtherMonths: true
    });
	$(window).on('resize', function(){
		resizeFormSlider();
	});
	// menu hamburger
	$('.menu-link-wrapper').on('click.mobileNav', function(){
		// Toggle the open/closed state of the menu icon
		$('.menu-link-wrapper .menu-link').toggleClass('menu-trigger-open');
	});
    // Menu
    $('.menu-btn').click(function(){
		if ($('input.menu-btn').is(':checked')) {
			$('#app-header-menu').addClass('show');
		}
		else {
			$('#app-header-menu').removeClass('show');
		}
    });
	// scroll adjust header
	$(window).scroll(function(){
		scroll = $(window).scrollTop();
		if (scroll >= 100) $('#header').addClass('scrolled');
		else $('#header').removeClass('scrolled');
	});
});

function resizeFormSlider() {
	var sliderContainer = $('#signup-form-slider .steps');
	var slides = sliderContainer.children().outerWidth($('#signup-form-slider').width());
}