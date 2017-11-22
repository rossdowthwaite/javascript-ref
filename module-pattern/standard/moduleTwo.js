var ModuleTwo = (function ( Module ) {

	// Sub module access to Module

	// Extend Module with added functions
	Module.anotherMethod = function (  ) {
		//
		console.log( "Booyah!" );
	}

	return Module;

})( Module || {} );