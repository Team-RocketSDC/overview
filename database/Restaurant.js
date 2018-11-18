const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
  _id: mongoose.Schema.ObjectId,
  name: String,
  address: String,
  cost: String,
  phone: String,
  website: String,
  googleMap: String,
});

const Restaurant = mongoose.model('Restaurant', restaurantSchema);

module.exports = Restaurant;
