const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const reviewSchema = new Schema({
    review:{
        type:Number,
        max: 10,
        min: 0,
        required:true
    }
})

// Create a model using schema.
const Review = mongoose.model('Review', reviewSchema);

// Make this available to our Node applications.
module.exports = Review;