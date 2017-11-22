var Activator = (function () {

	// init locally scoped object
	var myObject = {};

	var s = {
		group: $(".clickers"),
		multipleActive: false,
	}

	// Add active class

	var _activate = function( element ) {
		element.addClass('active');
	}

	// Remove active class

	var _deactivate = function( element ) {
		element.removeClass('active');
	}


	// Check for presence of active class

	var _checkForActiveClass = function( element ) {
		if( element.hasClass('active') ) {
			_deactivate( element );
		} else {
			_activate( element );
		}
	}

	// Bind the click event to the button

	var _bindClick = function( ) {
		s.group.bind( 'click touchstart', function(){
			console.log(s.multipleActive);
			if( s.multipleActive ) {
				_checkForActiveClass( $(this) )
			} else {
				console.log('sdfsdfs');
				_deactivate(s.group);
				_activate( $(this) );
			}
		});
	}

	// Check for new properties and update them

	var _swapProperties = function ( settings ) {
		for(var prop in settings) {
	        if(settings.hasOwnProperty(prop)){
	            s[prop] = settings[prop];
	        }
	    }
	}

	// Global Methods

	myObject.init = function ( settings ) {
		// set new properties if there are any
		_swapProperties( settings );
		// bind the result
		_bindClick();
	}

	return myObject;

});
