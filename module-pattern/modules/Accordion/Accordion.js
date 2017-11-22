var Accordion = (function () {

	// init locally scoped object
	var accordionObj = {};

	var accordion = undefined;
	var accordion_content = undefined;

	// open accordion 

	var _openAccordion = function( tab, section ) {

		$(tab).addClass('active');
		$(section).slideDown( s.speed, _callbackOpen ).addClass('active'); 

	}

	// Close accordion 

	var _closeAccordion = function( tab, section ) {

		$(tab).removeClass('active');

		if ( s.fade ){
			var delayTime = s.fadeSpeed;
			fadeContentOut();
		} else {
			var delayTime = 0;
		}

		$(section).delay(delayTime).slideUp( s.speed, _callbackClosed ).removeClass('active');
		
	}

	var isOpen = function( accordion ) {
		return $(accordion).is('.active');
	}

	var _bindClick = function( ) {
		s.accordion.bind( 'click touchstart', function( e ){

			accordion = $(this);
			accordion_content = accordion.attr('data-accordion');

			if( isOpen( accordion ) ) {
				_closeAccordion( accordion, accordion_content );
			} else {
				_openAccordion( accordion, accordion_content );
			}

		});
	}

	var _callbackOpen = function( ){
		if(s.onOpen !== undefined ){ 
			s.onOpen();
		}
		fadeContentIn(s.fade);
	}

	var _callbackClosed = function( ){
		if(s.onClosed !== undefined ){ 
			s.onClosed();
		}
	}

	var fadeContentIn = function( fade ){
		if( fade ){
			$( accordion_content + ' .accordion-content-inner').animate({opacity: 1}, s.fadeSpeed);
		}
	}

	var fadeContentOut = function( ){
		$( accordion_content + ' .accordion-content-inner').animate( {opacity: 0}, s.fadeSpeed );
	}

	// Check for new properties and update them

	var _swapProperties = function ( settings ) {
		for(var prop in settings) {
	        if(settings.hasOwnProperty(prop)){
	            s[prop] = settings[prop];
	        }
	    }
	}

	var _setFade = function ( ) {
		if( s.fade ) {
			$('.accordion-content-inner').css({opacity: 0});
		}
	}

	// Global Methods 

	accordionObj.init = function ( settings ) {
		// set new properties if there are any
		_swapProperties( settings );
		_bindClick(); 
		_setFade();
	}

	var s = {
		accordion: $('.accordion'),
		speed: 500,
		onOpen: undefined,
		onClosed: undefined,
		fade: true,
		fadeSpeed: 300
	}

	return accordionObj;

})();