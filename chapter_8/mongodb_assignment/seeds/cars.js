const mongoose = require('mongoose');
const Dealership = require('../models/dealerships');
const Car = require('../models/cars');


module.exports = () => {
    Car.find({}, (err, cars) => {
        if (err) {
            console.log(err);
        } else if (cars.length === 0) {
            Dealership.find({}, (err, dealerships) => {
                if (err) {
                    console.log(err);
                } else {
                    if (dealerships.length < 2) {
                        console.log('No dealership to use for seeding cars');
                    } else {
                        const carsToSeed = [
                            {make: 'Porsche', model: '911 Carrera', year: 2017, dealership_id: dealerships[0]._id},
                            {make: 'Porsche', model: '944', year: 1991, dealership_id: dealerships[0]._id},
                            {make: 'Porsche', model: '550 Spyder', year: 1955, dealership_id: dealerships[1]._id},
                            {make: 'Porsche', model: '911 Targa', year: 1992, dealership_id: dealerships[1]._id},
                            {make: 'Porsche', model: '718 Cayman', year: 2017, dealership_id: dealership[0]._id}
                        ];
                        Car.collection.insert(carsToSeed, (err, cars) => {
                            console.log(cars)
                        })
                    }
                }
            })            
        }
    })
}
