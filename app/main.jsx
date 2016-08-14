var React = require("react");
var ReactDOM = require("react-dom");
var AnimalStore = require("./stores/AnimalStore");
var AnimalsList = require("./components/AnimalsList.jsx");

var _animals = [];
var getAnimalsCallback = function(animals) {
	_animals = animals;
	render();
}

AnimalStore.onChange(getAnimalsCallback);
                
function render(){
    ReactDOM.render(<AnimalsList animals={_animals} />, document.getElementById("container"));    
}
render();
