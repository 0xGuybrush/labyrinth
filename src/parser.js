'use strict'
var http = require('http')

export default function (location) {
	const DOMAIN = 'http://labyrinth.digitaslbi.com'
	const JSON_SUFFIX = '/json';
	var url = DOMAIN + location + JSON_SUFFIX
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
