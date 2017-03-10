const Dealership = require('../models/dealerships');
const dealershipsToSeed = [
    {make: 'Porsche', city: 'Toronto', province: 'ON', postal_code: 'M5A 0B2', address: '68 Parliament St', reviews: []},
    {make: 'Porsche', city: 'Woodbridge', province: 'ON',  postal_code: 'L4L 8R1', address: '101 Auto Park Circle', reviews: []}    
] 

module.exports = () => {
    Dealership.find({}, (err, dealerships) => {
        if (err) {
            console.log(err)
        } else {
            if (dealerships.length === 0) {
                Dealership.collection.insert(dealershipsToSeed, (err, dealerships) => {
                    console.log(dealerships)
                })
            }
        }
    })
}