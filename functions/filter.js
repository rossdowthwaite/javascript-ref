function Person( name, side ) {
	this.name = name;
	this.side = side;
}

var personOne = new Person('Ross', 'Rebels');
var personTwo = new Person('Willy', 'Empire');
var personThree = new Person('Brian', 'Rebels');

var people = []
people.push(personOne, personTwo, personThree);

var printRelationship = function( currentValue ){
	console.log( currentValue.name );
}

var checkRelationship = function( currentValue ) {
	return currentValue.side === 'Rebels';
}

people.filter(checkRelationship).map( printRelationship );
