function Vegetable(vegObject){
	this.name = vegObject.name;
	this.steamed = vegObject.steamed;
	this.other = vegObject.other;
	this.instruction = function() {
		console.log(`why not try ${this.other}`)
	}
}

let vegObjects = [];

vegTimes.forEach(function(element, index){
	const vegObject = new Vegetable(element)
})