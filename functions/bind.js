// Getters & setters using javascripts Bind Function

var randomOject = {
	name: 'Willy',
	surname: 'Johnson',
	job: 'programmer'
}; 

// Get and set surname

var getSurname = function(){
	console.log( this.surname );
};

var setSurname= function( newName ){
	this.name = newName;
}


// Get and set name

var getName = function(){
	console.log( this.name );
}

var setName = function( newName ){
	this.name = newName;
}


//  Bind Usage

getName.bind(randomOject)();
getSurname.bind(randomOject)();

setName.bind(randomOject)('Ramon');
getName.bind(randomOject)();
