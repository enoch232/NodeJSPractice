var Emitter = require('./emitter');
//create new emitter obj
var emtr = new Emitter();
//put it in to the array
emtr.on("Greeter",function(){
	console.log("Called greet");
});
//put it in to the array
emtr.on("Greeter",function(){
	console.log("and also its in English");
});
console.log("hello!");
//manually invoking the emit
emtr.emit("Greeter");