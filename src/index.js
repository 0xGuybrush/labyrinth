'use strict'
import getRoom from './getRoom.js'

const maze = 'easy',
      start = getRoom(maze, 'start');

start.then(printRoomDetails)

function printRoomDetails(room) {
	console.log(start.toString())
	console.log(typeof start)
	console.log(start.id)
	return console.log(JSON.stringify(room, null, '\t'))
}
