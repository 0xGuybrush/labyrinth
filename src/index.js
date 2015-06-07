'use strict'
import parser from './parser.js'

var start = parser('/Maze/Location/easy/start')
start.then(function (value) {
	console.log(JSON.stringify(value, null, '\t'))
})
