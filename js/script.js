$(document).ready(function() {
//all code that run after the DOM loads goes here
	$('.navbar').removeClass('open');
	$('.menu-button').on('click', function(){
		$('.navbar').toggleClass('open');
	});
		$('.thumbnail').on('click', function(){
	     var idx = $(this).index();
	     $('.featured-images').children('.active').removeClass('active');
	     $('.featured-image-item').eq(idx).addClass('active');
	     $('.thumbnail-images').children('.active').removeClass('active');
	     $('.thumbnail').eq(idx).addClass('active');
	});
});

// Gallery Portfolio ==================================================================
