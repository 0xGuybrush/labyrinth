'use strict'

export default class {

	constructor(roomJson) {
		this.id = roomJson.LocationId
		this.type = roomJson.LocationType
		this.exits = roomJson.Exits
	}
	toString() {
		return "Hello!"
	}

	get id() {
              return this.constructor.id 
        }
	 set id(value) {
            console.log('setter: '+value);
        }
}	
