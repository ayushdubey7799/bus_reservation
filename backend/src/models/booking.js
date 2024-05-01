const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema({
  uid: { type: String, required: true, trim: true },
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true },
  phone: { type: String, required: true, trim: true },
  age: {
    type: Number,
    required: true,
    trim: true,
    set: (value) => parseInt(value, 10),
  },
  gender: { type: String, required: true, trim: true },
  busName: { type: String, required: true, trim: true },
  origin: { type: String, required: true, trim: true },
  destination: { type: String, required: true, trim: true },
  departureDate: { type: String, required: true, trim: true },
  arrivalDate: { type: String, required: true, trim: true },
  departureTime: { type: String, required: true, trim: true },
  arrivalTime: { type: String, required: true, trim: true },
  seats: { type: [String], required: true, trim: true },
  amount: { type: Number, required: true, trim: true },
  currency: { type: String, default: () => "usd", required: true, trim: true },
  description: { type: String, required: true, trim: true },
  token: { type: Object },
});

const Booking = mongoose.model("booking", BookingSchema);

module.exports = Booking;
