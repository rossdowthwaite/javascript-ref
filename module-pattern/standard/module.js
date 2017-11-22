var Module = (function () {

	// init locally scoped object
	var myObject = {};

	// scoped variable declarations

	// Private Methods - prefix private methods with _
	var _privateMethod = function () {
		console.log('Private method call');
	}

	// Global Methods 
	myObject.publicMethodOne = function ( text ) {
		//
		console.log( text );
	}

	myObject.publicMethodTwo = function ( text, multiplier ) {
		//
		for (var i = 0; i < multiplier; i++) {
			console.log( text + " " + i );
		};
	}

	myObject.publicMethodThree = function () {
		//
		_privateMethod();
	}

	return myObject;

})();

Module.publicMethodTwo( 'Hello world', 10 );
console.log('');
Module.publicMethodThree();
console.log('');
console.log(Module);