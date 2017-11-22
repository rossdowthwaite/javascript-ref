// Getters & setters using javascripts Bind Function
var BindModule = function( name, suname, job ){

	var bindTest = {};

	bindTest = {
		name: name,
		surname: suname,
		job: job
	}; 

	// Get and set surname

	bindTest.getSurname = function(){
		console.log( this.surname );
	};

	bindTest.setSurname= function( newName ){
		this.name = newName;
	}


	// Get and set name

	bindTest.getName = function(){
		console.log( this.name );
	}

	bindTest.setName = function( newName ){
		this.name = newName;
	}


	// Print object

	bindTest.printObject = function(){
		console.log(bindTest);
	}


	return bindTest;

};

// USAGE

var bound = BindModule( 'Ross', 'Dowthwaite', 'Programmer');

bound.getName.bind(bound)();
bound.setName.bind(bound)('Willy');
bound.getName.bind(bound)();

bound.printObject();

console.log('------------------');

var bound2 = BindModule( 'Brian', 'Dowthwaite', 'Joker');
bound2.getName.bind(bound2)();
bound2.setName.bind(bound2)('James');
bound2.getName.bind(bound2)();

bound2.printObject();
