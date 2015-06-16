'use strict'
var parser = require('./parser.js'),
    Room = require('./room.js')

export default function (maze, room) {
	return new Room(parser(maze, room));
}	
