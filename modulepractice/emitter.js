//simple Emitter example of how Node's Emitter work

//constructor
function Emitter(){
	this.event = {};
}
//adds 'on' function, that takes in type, and listener. (same thing as "addEventListener")
Emitter.prototype.on = function(type, listener){
	// if a type already exist in event obj, nothing, and if doesnt exist, set it to empty array
	this.event[type] = this.event[type] || [];
	// push a listener in to the event's type array
	this.event[type].push(listener);
}
//function to invoke the event
Emitter.prototype.emit = function(type){
	//if that type exists,
	if(this.event[type]){
		//invoke all function that was added.
		this.event[type].forEach(function(listener){
			listener();
		});
	}
}
//export it so it can be used.
module.exports = Emitter;