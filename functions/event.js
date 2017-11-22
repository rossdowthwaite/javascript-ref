// Import events module
var events = require('events');

// Create an event emitter
var eventEmitter = new events.EventEmitter();

// Create an event handler
var connectHandler = function connected() {
	console.log('connection successful');

	// Fire the data_revieved event
	eventEmitter.emit('data_revieved');
}

// Bind the connection event with the handler
eventEmitter.on('connection', connectHandler);

// Bind the data_recieved event with the anonymous function
eventEmitter.on('data_recieved', function(){
	console.log('Data recieved succesfully');
});

// Fire the connection eventEmitter
eventEmitter.emit('connection');

console.log('Program ended');