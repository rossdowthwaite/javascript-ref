(function () {

	// Module Variables for readability

	var newCallbackFunction = function(){
		console.log('helloWorld');
	}

	var accordion = Accordion.init({
		speed: 500,
		onClosed: newCallbackFunction
	});


})();
