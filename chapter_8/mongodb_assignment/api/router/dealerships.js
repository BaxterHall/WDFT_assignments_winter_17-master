var express = require('express')
var router = express.Router()
const Dealership = require('../models/dealerships');
const Review = require('../models/reviews');

// GET: Retrieve all dealership objects
router.get('/', (req, res) => {
    Dealership.find({})
        .then(dealershipsArray => {
            res.json(dealershipsArray)
        })
        .catch(err => {
            console.log(err)
            res.staus(400)
                .json({ err })
        })
});
// GET: Retrieve a single dealership object using id
// FINDBYID
// router.get('/:id', (req, res) => {
//     Dealership.findById(req.params.id)
//         .then(Dealer => {
//             res.json(Dealer)
//         })
//         .catch(err => {
//             console.log(err)
//             res.status(400)
//                 .json({ err })
//         })
// });
//FINDONE
// router.get('/:id', (req, res) => {
//     Dealership.findOne({ "_id": req.params.id })
//         .then(Dealer => {
//             res.json(Dealer)
//         })
//         .catch(err => {
//             console.log(err)
//             res.status(400)
//                 .json(err)
//         })
// });
// POST: Save a single dealership object
// router.post('/', (req, res) => {
//     let info = req.body
//     let newDealer = Dealership({
//         name: info.name,
//         city: info.city,
//         province: info.province,
//         postal_code: info.postal_code,
//         address: info.address,
//         rating: info.rating,

//     })
//     newDealer.save()
//         .then(savedDealer => {
//             res.json(savedDealer)
//         })
//         .catch(err => {
//             console.log(err)
//             res.status(400)
//                 .json({ err })
//         })
// });
// PUT: Change attributes for a single dealership object
// router.put('/:id', (req, res) => {
//     let query = { "_id": req.params.id }
//     let info = req.body
//     let update = {
//         name: info.name,
//         city: info.city,
//         province: info.province,
//         postal_code: info.postal_code,
//         address: info.address,
//         rating: info.rating,

//     }
//     Dealership.findOneAndUpdate(query, update, { new: true, runValidators: true })
//         .then(updatedDealer => {
//             res.json(updatedDealer)
//         })
//         .catch(err => {
//             console.log(err)
//             res.status(400)
//                 .json({ err })
//         })
// });
// DELETE: Delete single dealership object
// router.delete('/:id', (req, res) => {
//     Dealership.findOneAndRemove({ "_id": req.params.id })
//         .then(Dealership => {
//             res.json({ deleted: true })
//         })
//         .catch(err => {
//             console.log(err)
//             res.status(400)
//                 .json({ err })
//         })
// });

//DIVING DEEPER

// GET reviews for certain dealership
// router.get('/:id', (req, res) => {
//     Dealership.findById(req.params.id)
//         .then(dealership => {
//             // console.log(dealership)
//             // console.log(dealership.reviews)
//             let reviews = dealership.reviews
//             res.json(reviews)
//         })
//         .catch(err => {
//             console.log(err)
//             res.status(400)
//                 .json({err})
//         })
// });


//DIVING DEEPER
// GET reviews for certain dealership
//req.params is dealership ID
router.get('/reviews/:id', (req, res) => {
    Dealership.findById(req.params.id)
        .then(dealership => {
            // console.log(dealership)
            // console.log(dealership.reviews)
            let reviews = dealership.reviews
            res.json(reviews)
        })
        .catch(err => {
            console.log(err)
            res.status(400)
                .json({ err })
        })
});

// GET a single review for certain dealership
//req.params.id is review ID
router.get('/reviews/:id/:review_id', (req, res) => {
    Dealership.findById(req.params.id)
        .then(dealership => {

            console.log(dealership.reviews)
            let reviews = dealership.reviews.id(req.params.review_id)
            res.json(reviews)
        })
        .catch(err => {
            console.log(err)
            res.status(400)
                .json({ err })
        })
});

// POST a review for certain dealership
router.post('/reviews/:id', (req, res) => {
    let newReview = req.body;
    Dealership.findById(req.params.id)
        .then(dealership => {
            dealership.reviews.push(Review(newReview));
            return dealership.save()
        })
        .then(savedDealership => {
            res.json(savedDealership)
        })
        .catch(err => {
            console.log(err)
            res.status(400)
                .json({ err })
        })

});
// PUT a review for certain dealership
//target dealership and then target review id
router.put('/reviews/:id', (req, res) => {
    let newReview = req.body;
    Dealership.findById(req.params.id)
        .then(dealership => {
            dealership.reviews.push(Review(newReview));
            return dealership.save()
        })
        .then(savedDealership => {
            res.json(savedDealership)
        })
        .catch(err => {
            console.log(err)
            res.status(400)
                .json({ err })
        })

});

// DELETE a review for certain dealership

router.delete('/reviews/:review_id', (req, res) => {
    Dealership.collection.deleteOne({ "_id": req.params.review_id  })
        .then(dealership => {
            res.json({ deleted: true })
        })
        .catch(err => {
            console.log(err)
            res.status(400)
                .json({ err })
        })
});

module.exports = router
