/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 * Edited by Derek Solven 2016-09-24 
*/

var config = {
	port: 8080,

	language: 'en',
	timeFormat: 12,
	units: 'metric',

	modules: [
		{
			module: 'DailyXKCD',
			position: 'bottom_bar',
			config: {
				invertColors:true
			}
		},
		{
			module: 'alert',
			config: {
				welcome_message: true
			}
		},
		{
			module: 'clock',
			position: 'top_left'
		},
		{
			module: 'calendar',
			header: 'US Holidays',
			position: 'top_left',
			config: {
				calendars: [
					{
						symbol: 'calendar-check-o ',
						url: 'webcal://www.calendarlabs.com/templates/ical/US-Holidays.ics'
					}
				]
			}
		},
		// {
		// 	module: 'compliments',
		// 	position: 'lower_third'
		// },
		{
			module: 'currentweather',
			position: 'top_right',
			config: {
				location: 'San Jose, US',
				locationID: '',  //ID from http://www.openweathermap.org
				appid: '0ba349f4ccea75ab68af9852d0cff152'
			}
		},
		{
			module: 'weatherforecast',
			position: 'top_right',
			header: 'Weather Forecast',
			config: {
				location: 'San Jose, US',
				locationID: '',  //ID from http://www.openweathermap.org
				appid: '0ba349f4ccea75ab68af9852d0cff152'
			}
		},
		// {
		// 	module: 'newsfeed',
		// 	position: 'bottom_bar',
		// 	config: {
		// 		feeds: [
		// 			{
		// 				title: "New York Times",
		// 				url: "http://www.nytimes.com/services/xml/rss/nyt/HomePage.xml"
		// 			}
		// 		],
		// 		showSourceTitle: true,
		// 		showPublishDate: true
		// 	}
		// },
	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== 'undefined') {module.exports = config;}
