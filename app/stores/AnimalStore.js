var dispatcher = require("../dispatcher");
var animalService = require("../services/animalService");

function AnimalStore() {
    var listeners = [];

    function onChange(listener) {
        getAnimals(listener);
        listeners.push(listener);
    }

    function getAnimals(listener) {
        animalService.getAnimals().then(function (response) {
            listener(response);
        });
    }

    function addAnimal(animal) {
        animalService.addAnimal(animal).then(function (response) {
            console.log(response);
            triggerListeners();
        })
    }

    function deleteAnimal(animal) {
        animalService.deleteAnimal(animal).then(function (response) {
            console.log(response);
            triggerListeners();
        })
    }

    function triggerListeners() {
        getAnimals(function (response) {
            listeners.forEach(function (listener) {
                listener(response);
            });
        });
    }

    dispatcher.register(function (payload) {
        var split = payload.type.split(":");
        if (split[0] === "animal") {
            switch (split[1]) {
                case "addAnimal":
                    addAnimal(payload.animal);
                    break;
                case "deleteAnimal":
                    deleteAnimal(payload.animal);
                    break;
            }
        }
    });

    return {
        onChange: onChange
    }
}

module.exports = AnimalStore();