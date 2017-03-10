const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Dealership = require('./api/models/dealerships');
const Car = require('./api/models/cars')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost/data/db/');
mongoose.Promise = global.Promise
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("Connected to db at /data/db/")
});
 
//CARS

const cars = require('./api/router/cars')

app.use('/cars', cars)

//DEALERSHIPS

const dealer = require('./api/router/dealerships')

app.use('/dealerships', dealer)

// const seedDealerships = require('./seeds/dealerships');
// const seedCars = require('./seeds/cars');
// seedDealerships();
// seedCars();

app.listen(8080, () => {
    console.log('SERVER RUNNING ON 8080');
})
