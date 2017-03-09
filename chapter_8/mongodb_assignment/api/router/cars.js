const express = require('express')
const router = express.Router()
const Dealership = require('../models/dealerships');
const Car = require('../models/cars')

// GET: Retrieve all car objects
router.get('/', (req, res) => {
    Car.find({})
        .then(carsArray => {
            res.json(carsArray);
        })
        .catch(err => {
            console.log(err);
            res.status(400)
                .json({ err });
        })

});
// GET: Retrieve a single car object using id
//FIND BY ID
router.get('/:id', (req, res) => {
    Car.findById(req.params.id)
        .then(Car => {
            res.json(Car)
        })
        .catch(err => {
            console.log(err);
            res.status(400)
                .json({ err })
        })
});
//FIND ONE
router.get('/cars/:id', (req, res) => {
    Car.findOne({ _id: req.params.id })
        .then(Car => {
            res.json(Car)
        })
        .catch(err => {
            console.log(err);
            res.statsu(400)
                .json({ err })
        })
});
// POST: Save a single car object
router.post('/cars', (req, res) => {
    Dealership.find({}, (err, dealership) => {
        // console.log(dealership)
        let createcar = req.body;
        // console.log(req.body)
        let newCar = Car({
            make: createcar.make,
            model: createcar.model,
            year: createcar.year,
            dealership_id: dealership[createcar.dealership_id].id
        })
        newCar.save()
            .then(savedCar => {
                res.json(savedCar)
            })
    })
});
// PUT: Change attributes for a single car object
router.put('/cars/:id', (req, res) => {
    let query = { "_id": req.params.id }
    let info = req.body
    // console.log(info)
    Dealership.find({}, (err, dealership) => {
        let update = {
            make: info.make,
            model: info.model,
            year: info.year,
            dealership_id: dealership[info.dealership_id].id
        }
        // console.log(update)
        Car.findOneAndUpdate(query, update, { new: true, runValidators: true })
            .then(updatedCar => {
                res.json(updatedCar)
            })
            .catch(err => {
                console.log(err)
                res.status(400)
                    .json({ err })
            })
    })
});
// DELETE: Delete single car object
router.delete('/cars/:id', (req, res) => {
    Car.findOneAndRemove({ "_id": req.params.id })
        .then(Car => {
            res.json({ deleted: true })
        })
        .catch(err => {
            console.log(err)
            res.status(400)
                .json({ err })
        })
});

module.exports = router
