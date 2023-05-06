"use strict";
class Vehicle {
    constructor(model) {
        this.modelTypes = model;
    }
}
const model_type = {
    type: 'Car',
    color: 'Blue',
    event: () => {
        console.log('Event Function');
    },
};
const car = new Vehicle(model_type);
console.log(car);
