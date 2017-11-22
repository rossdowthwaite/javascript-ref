var Person = function(name, job, side) {
	this.name = name;
	this.job = job;
	this.side = side;
}

Person.prototype = {
	
	getName: function(){
		console.log( this.name );
	},

	getJob: function(){
		console.log( this.job );
	},

	getSide: function(){
		console.log( this.side );
	},

	setName: function( name ){
		this.name = name;
	}

}

var ross = new Person('Ross', 'Programmer', 'Jedi');
var brian = new Person('Brain', 'Chef', 'Sith');

console.log( ross );
console.log( brian );
console.log();

ross.getSide();
brian.getJob();
brian.setName('Yoda');
console.log( brian );