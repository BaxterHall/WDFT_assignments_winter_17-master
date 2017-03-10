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


// Create a schema.
const dealershipSchema = new Schema({
  name: String,
  city: String,
  province: String,
  postal_code: String,
  address: { 
    type: String, 
    required: true, 
    unique: true 
  },
  rating: {
    type: Number,
    max: 5,
    min: 0
  },
  reviews: [reviewSchema],

  created_at: Date,
  updated_at: Date
});


dealershipSchema.pre('save', function(next) {
    // Get the current date.
    const currentDate = new Date();

    // Change the updated_at field to current date.
    this.updated_at = currentDate;

    // If created_at doesn't exist, add to that field
    if (!this.created_at) {
        this.created_at = currentDate;
    }

    // Continue.
    next();
});
// Create a model using schema.
const Dealership = mongoose.model('Dealership', dealershipSchema);

// Make this available to our Node applications.
module.exports = Dealership;