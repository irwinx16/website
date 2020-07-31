var submitButton = $('#submitNumber');
var numberInput = $('#numberInput');
var input;


submitButton.on('click', function (e) {
	e.preventDefault();
	input = parseInt(numberInput[0].value);
	console.log(input);
});