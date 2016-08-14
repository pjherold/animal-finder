var dispatcher = require("../dispatcher");

module.exports = {
    addAnimal:function(animal) {
        dispatcher.dispatch({
           animal:animal,
           type:"animal:addAnimal" 
        });
    },
    deleteAnimal:function(animal) {
        dispatcher.dispatch({
           animal:animal,
           type:"animal:deleteAnimal" 
        });
    }
}
