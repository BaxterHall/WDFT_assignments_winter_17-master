/* Postgres Review
Good job overall, I left some more specific review further down. You may want to clean up your endpoints and take a look at your error handling as right now it's 
not working how you think it is.
*/
const express = require('express');
const app = express()

const knex = require('knex')({
    client: 'postgres',
    connection: {
        host: '127.0.0.1',
        user: 'postgres',
        password: 'postgres',
        database: 'cars',
        charset: 'utf8'
    }
})
const bookshelf = require('bookshelf')(knex);

const Car = bookshelf.Model.extend({
    tableName: 'cars',
    dealership: function () {
        return this.belongsTo(Dealer)
    }
});

const Dealer = bookshelf.Model.extend({
    tableName: 'dealerships',
    cars: function () {
        return this.hasMany(Car)
    }
});

//BOOKMARK QUERIES
// create and save new car

const newCar = new Car({
    make: "Porsche",
    model: "718 Boxster",
    year: 2013,
    dealership_id: 2,
});
// newCar.save()
//     .then(Car => {
//     console.log(Car)
// })

// get all cars

// Car
//     .fetchAll()
//     .then(Car => {
//     console.log(Car.models.map(Car => Car.attributes))
// })

// get cars with a filter (e.g., year is 2017)

// Car
//     .where({ year: 2017 })
//     .fetch()
//     .then(Car => {
//         console.log(Car.attributes)
// })

// get a single car with id

// Car
//     .where({id: 2})
//     .fetch()
//     .then(Car => {
//         console.log(Car.attributes)
// })

// update a single car with new attribute values

// const attributesToUpdate = {
//     model:'911 Carrera 4 GTS Cabriolet'
// }
// new Car({id: 20})
//     .save(attributesToUpdate,{patch:true})
//     .then(Car => {
//         console.log(Car.attributes)
//     })

// get dealership of a single car

// Car.where({id:1})
//     .fetch({withRelated: 'dealership'})
//     .then(Car => {
//         console.log(Car.related('dealership').attributes)
//     })

//get all cars for a single dealership

// Dealer.where({id: 1})
// 	.fetch({withRelated: 'cars'})
// 	.then(dealer => {
// 		const cars = dealer.related('cars')
// 		console.log(cars.models.map(cars => cars.attributes))
// 	})


app.listen(8080, () => {
    console.log('Server Started on http://localhost:8080');
    console.log('Press CTRL + C to stop server');

})

app.get('/', function (req, res) {
    res.send('Homepage')
});

//CARS

// GET: Retrieve all car objects
app.get('/cars', (req, res) => {

    Car.where(req.query)
        .fetchAll()
        .then(Car => {
            res.json(Car)
        })
        .catch(err)                             //You're going to get an error every time you hit an endpoint with this .catch, you have to treat it the same as your 
    return                                      //.then, in that it's a function.  Your return + console logs should be within the scope of the catch.
    console.log(err)
    console.log('no cars found matching')
})
// GET: Retrieve a single car object using id
app.get('/cars/:id', (req, res) => {
    Car.where({ id: req.params.id })
        .fetch()
        .then(Car => {
            res.json(Car)
        })
        .catch(err)
    return
    console.log(err)
    console.log('no cars found matching criteria')
});
// POST: Save a single car object
app.post('/cars/:make&:model&:year&:dealership_id', (req, res) => {  //This is a case where using the body of your request would be better, as right now 
    new Car({                                                        //your endpoint is quite bloated with all the req parameters. Try changing this on 
        make: req.params.make,                                       //your other endpoints, it will really clean up how your endpoints look and how you 
        model: req.params.model,                                     //format your new Cars. It also makes your endpoints much more readable, right now it's 
        year: req.params.year,                                       //kind of hard to distinguish which endpoint does what.
        dealership_id: req.params.dealership_id,
    })
        .save()
        .then(Car => {
            res.json(Car)
        })
        .catch(err)
            return
                console.log(err)
                console.log('unable to save car')
});
// PUT: Change attributes for a single car object
app.put('/cars/:id&:make&:model&:year&:dealership_id', (req, res) => {
    new Car({
        make: req.params.make,
        model: req.params.model,
        year: req.params.year,
        dealership_id: req.params.dealership_id
    })
        .save()
        .then(Car => {
            res.json(Car)
        })
        .catch(err)
    return
    console.log(err)
    console.log('unable to create car with given values')
});
// DELETE: Delete single car object

app.delete('/cars/:id', (req, res) => {
    new Car({ id: req.params.id })
        .destroy()
        .then(Car => {
            res.json(Car)
        })
        .catch(err)
            return
                console.log(err)
                console.log('unable to delete car')
});

//DEALERSHIPS
// GET: Retrieve all dealership objects
app.get('/dealership', (req, res) => {
    Dealer.where(req.query)
    fetchAll()
        .then(Dealer => {
            res.json(Dealer)
        })
        .catch(err)
    return
    console.log(err)
    console.log('no dealership found')
});

// GET: Retrieve a single dealership object using id
app.get('/dealership/:id', (req, res) => {
    Dealer.where({ id: req.params.id })
        .fetch()
        .then(Dealer => {
            res.json(Dealer)
        })
        .catch(err)
    return
    console.log(err)
    console.log('no dealership matching criteria found')

});

// POST: Save a single dealership object
app.post('/dealership/:make&:city&:province&:postal_code&:street', (req, res) => {
    let newDealer = new Dealer({
        make: req.params.make,
        city: req.params.city,
        province: req.params.province,
        postal_code: req.params.postal_code,
        street: req.params.street,
    })
    newDealer.save()
        .then(Dealer => {
            res.json(Dealer)
        })
        .catch(err)
            return
                console.log(err)
                console.log('unable to save dealership')
})
// PUT: Change attributes for a single dealership object
app.put('/dealership/:id&:make&:city&:province&:postal_code&:street', (req, res) => {
    let newDealer = new Dealer({        //This is another example of where req.params is just too long, this endpoint is a pain in the ass to read.
        make: req.params.make,          //Try using queries or req.body to really clean this up.
        city: req.params.city,
        province: req.params.province,
        postal_code: req.params.postal_code,
        street: req.params.street,
    })
    newDealer.save()
        .then(Dealer => {
            res.json(Dealer)
        })
        .catch(err)
            return
                console.log(err)
                console.log('unable to change attributes')
});
// DELETE: Delete single dealership object
app.delete('/dealership/:id', (req, res) => {
    new Dealer({ id: req.params.id })
        .destroy()
        .then(Dealer => {
            res.json(Dealer)
        })
        .catch(err)
            return 
                console.log(err)
                console.log('unable to delete dealership')
})

//DIVING DEEPER

// Modify the GET endpoints for collections (e.g., retrieve all car objects) to make use of URL queries. For example, sending a GET request to http://localhost:8080/api/cars?year=2017 would return just the cars with 2017 as its year attribute.
// Make sure your endpoints handles errors correctly. For example, if the POST request is sent without a valid body, the Express server should send back an error back with error messages. Or if a GET request for a single car object returns nothing, it should send an error message.

app.get('/cars/', (req, res) => {

    Car.where(req.query)
        .fetchAll()
        .then(Car => {
            res.json(Car)
        })
        .catch(err)
    return
    console.log(err)
    console.log('no cars found')
})
app.post('/cars/', (req, res) => {
    if (req.query === null) {
        console.log(err)
        console.log('unable to create car')
    }
    else {
        new Car({
            make: req.query.make,
            model: req.query.model,
            year: req.query.year,
            dealership_id: req.query.dealership_id,
        })
            .save()
            .then(Car => {
                res.json(Car)
            })
    }


});



