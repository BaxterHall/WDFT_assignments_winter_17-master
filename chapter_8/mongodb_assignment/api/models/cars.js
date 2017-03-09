const mongoose = require('mongoose');
const Schema = mongoose.Schema;
ObjectId = Schema.ObjectId;

// Create a schema.
const carSchema = new Schema({
  make: String,
  model: String,
  year: Number,
  dealership_id: ObjectId,
  created_at: Date,
  updated_at: Date
});
carSchema.pre('save', function(next) {
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
const Car = mongoose.model('Car', carSchema);

// Make this available to our Node applications.
module.exports = Car;