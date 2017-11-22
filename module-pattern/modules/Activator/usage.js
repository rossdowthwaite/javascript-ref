(function () {

	// Module Variables
	var module1 = Activator();

	module1.init({
		group: $(".clickers"),
		multipleActive: true
	});

	// Module Variables
	var module2 = Activator();

	module2.init({
		group: $(".actives"),
		multipleActive: false
	});

})();
