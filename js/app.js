'use strict';
// http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=8f1c64b2a3233443141d27242c53b104


fetch('http://api.openweathermap.org/data/2.5/weather?id=693805&APPID=8f1c64b2a3233443141d27242c53b104')
	.then(function (resp) {
		return resp.json(); // convert data to json
	})
	.then(function (data) {
		console.log(data);
		document.querySelector('.weather__city').textContent = data.name;
		document.querySelector('.weather__temp').innerHTML = `${Math.round(data.main.temp-273)}&deg`;
		document.querySelector('.weather__disclaimer').textContent = data.weather[0]['main'];
		document.querySelector('.weather__wind').innerHTML = `Wind: ${data.wind.speed}`;
	})
	.catch(function () {
		// catch any error
	});