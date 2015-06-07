'use strict'
import parser from './parser.js'

var start = parser('/Maze/Location/easy/start')
start.then(printRoomDetails)

function printRoomDetails(room) {
	return console.log(JSON.stringify(room, null, '\t'))
}
