console.log('READY');
$('#submitNumber').on('click', function (e) {
	e.preventDefault();
	// grab text from input box
	var text = $('#numberInput').val();

	// Construct the URL
	var queryURL = "https://www.omdbapi.com/?t=" + text + "&apikey=trilogy";

	// jQuery Call

	$.ajax({
		url: queryURL,
		method: 'GET'
	}).then(function (response) {
		$('#ajaxRes').text(JSON.stringify(response));
	});
});