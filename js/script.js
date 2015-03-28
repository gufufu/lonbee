

// On Ready: =======================================================================
$(document).ready(function() {

//all code that run after the DOM loads goes here

// Check Navbar:  ==================================================================

	$('.navbar').removeClass('open');
	$('.menu-button').on('click', function(){
		$('.navbar').toggleClass('open');
	});


// Check  thumbnail images: ==================================================================

		$('.thumbnail').on('click', function(){
	     var idx = $(this).index();
	     $('.featured-images').children('.active').removeClass('active');
	     $('.featured-image-item').eq(idx).addClass('active');
	     $('.thumbnail-images').children('.active').removeClass('active');
	     $('.thumbnail').eq(idx).addClass('active');
	});
});

// Check: ==================================================================




// Check beefy script Portfolio: =============================================================

console.log('it works! YES SNOEPIE DOEPIE it WORKS');



// Check_Viewport_Width: ==================================================================

$("<div />", {
  class: 'vw-line',
  html: "Viewport Width: <span id='vw'></span>"
}).prependTo("body");

var vwDisplay = $("#vw");
var imgwDisplay = $("#imgw");
$(window).on("resize", function() {
  imgwDisplay.text($("#bearIMG").width());
  vwDisplay.text($(this).width());
}).resize();


// Check_webp_feature: ==================================================================
// check_webp_feature:
//   'feature' can be one of 'lossy', 'lossless', 'alpha' or 'animation'.
//   'callback(feature, result)' will be passed back the detection result (in an asynchronous way!)
function check_webp_feature(feature, callback) {
    var kTestImages = {
        lossy: "UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",
        lossless: "UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==",
        alpha: "UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==",
        animation: "UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA"
    };
    var img = new Image();
    img.onload = function () {
        var result = (img.width > 0) && (img.height > 0);
        callback(feature, result);
    };
    img.onerror = function () {
        callback(feature, false);
    };
    img.src = "data:image/webp;base64," + kTestImages[feature];
}


// Check: ==================================================================


