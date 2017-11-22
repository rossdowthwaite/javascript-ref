var Person =  function(name, side){

	person = {
		name: name,
		side: side
	}

	_printRelationship = function( currentValue ){
		console.log( currentValue.name );
	}

	_checkRelationship = function( currentValue ) {
		return currentValue.side === 'Rebels';
	}

	return person;
}

var personOne = Person('Ross', 'Rebels');
var personTwo = Person('Willy', 'Empire');
var personThree = Person('Brian', 'Rebels');

var people = []
people.push(personOne, personTwo, personThree);

people.filter( _checkRelationship ).map( _printRelationship );
