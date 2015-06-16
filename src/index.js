'use strict'
import getRoom from './getRoom.js'

const maze = 'easy',
      start = getRoom(maze, 'start');

printRoomDetails(start)
console.log(start.toString())
console.log(typeof start)
console.log(start.id)

function printRoomDetails(room) {
	return console.log(JSON.stringify(room, null, '\t'))
}
