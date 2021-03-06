console.log('READY');
// NumberFact Page
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

// Love Calculator Page
$('#submitTest').on('click', function (e) {
	e.preventDefault();
	var access_auth = "d729914ef4msh2509ea0599aca52p1d7882jsn76301ff4760b"
	var name1 = $('#name1').val();
	var name2 = $('#name2').val();

	var url = "https://love-calculator.p.rapidapi.com/getPercentage?fname=" + name1 + "&sname=" + name2 + "&apiKey=" + access_auth;

	// Ajax Call
	var settings = {
		"async": true,
		"crossDomain": true,
		"url": url,
		"method": "GET",
		"headers": {
			"x-rapidapi-host": "love-calculator.p.rapidapi.com",
			"x-rapidapi-key": access_auth
		}
	}

	$.ajax(settings).done(function (response) {
		console.log(response);

		$('#loveResult').empty();
		// create div
		var resDiv = $("<div class='results'> ");
		// store data
		var resName1 = response.fname;
		var resName2 = response.sname;
		var resPrcnt = response.percentage;
		var resResul = response.result;

		// create and append element with the data
		var namesEl = $("<p class='text-center text-capitalize '>").text(resName1 + ' and ' + resName2);
		resDiv.append(namesEl);

		var compatibleEL = $("<p class='text-center text-capitalize '>").text('are ' + resPrcnt + ' % compatible');
		resDiv.append(compatibleEL);

		var resultEL = $("<p class='text-center text-capitalize '>").text(resResul);
		resDiv.append(resultEL);

		$('#loveResult').prepend(resDiv);
	});

});

// Index Weather Section
function getWeather() {
	var access_k = "50f17f039c1613aceda1362d7120808d";
	var url = "https://api.openweathermap.org/data/2.5/weather?" +
		"q=Chicago&appid=" + access_k;
	// Ajax Call
	$.ajax({
		url: url,
		method: 'GET'
	}).then(function (res) {
		console.log(res);
		var tempF = (res.main.temp - 273.15) * 1.80 + 32;
		$("#tempF").text(tempF.toFixed(0))
		$('#img').attr('src', "https://openweathermap.org/img/wn/" + res.weather[0].icon + ".png");
	})

}
getWeather()