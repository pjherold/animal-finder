var mongoose = require("mongoose");
var Animal = require("../data/animal");
var _ = require("underscore");

var router = require("express").Router();
router.route("/animals/:id?").get(getAnimals).post(addAnimal).delete(deleteAnimal);

function getAnimals(request, response) {
    Animal.find(function (err, animals) {
        if (err)
            response.send(err);
        else
            response.json(animals);
    });
}

function addAnimal(request, response) {
    var animal = new Animal(_.extend({}, request.body));
    animal.save(function (err) {
        if (err)
            response.send(err);
        else
            response.json(animal);
    });
}

function deleteAnimal(request, response) {
    var id = request.params.id;
    Animal.remove({ _id: id }, function (err, removed) {
        if (err)
            response.send(err)
        else
            response.json(removed);
    });
}

module.exports = router;
