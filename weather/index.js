#!/usr/bin/env node

var axios = require('axios')

var data = {}

if (porcess.argv[2]) {

	data.params = {
		city : porcess.argv[2]
	}
}

axios.get('http://api.jirengu.com/weather.php',data)
	.then(function(response){
		console.log(response.data)
		var weather = response.data.results[0].weather_data[0]
		console.log(weather.data)
		console.log(weather.temperature)
		console.log(weather.weather + ',' + weather.wind)
		console.log('PM25' + response.data.results[0].pm25)



	})