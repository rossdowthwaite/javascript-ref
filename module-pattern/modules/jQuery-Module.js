(function($) {

	var height = $(window).height();
	var width  = $(window).width();

	$.startup = function( ) {

		var main = {

			onReady: function() {

			},

			onScroll: function() {

			},

			onResize: function() {
				main.calculateDimensions;
			},

			calculateDimensions: function() {
				height = $(window).height();
				width = $(window).width();
			},
		};

		return {
	        onReady: main.onReady,
	        onScroll: main.onScroll,
	        onResize: main.onResize,
	    };

	};
})(jQuery);

var startup = $.startup();

$( document ).ready( startup.onReady );
$( window ).scroll( startup.onScroll );
$( window ).resize( startup.onResize );