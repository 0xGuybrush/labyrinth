'use strict'
var http = require('http')

export default function (maze, room) {
	const DOMAIN = 'http://labyrinth.digitaslbi.com',
	      PREFIX = '/Maze/Location/',
	      JSON_SUFFIX = '/json',
	      url = DOMAIN + PREFIX + maze + '/' + room + JSON_SUFFIX

	return new Promise (function (resolve, reject) {
		http.get(url, function (response) {
    			var body = ''
    			response.on('data', function (datum) {
        			body += datum
    			})

    			response.on('end', function () {
				resolve(JSON.parse(body))
    			})  
		}).on('error', function (e) {
			reject(Error(e))
		})
	})
}	
