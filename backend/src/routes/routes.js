const express = require("express");
const {
  createTrip,
  fetchTrips,
  createBooking,
  fetchBookings,
  fetchLocations,
  addLocation
} = require("../controllers/controllers");

const router = express.Router();

router.post("/", createTrip);
router.get("/", fetchTrips);
router.post("/booking", createBooking);
router.get("/booking", fetchBookings);
router.get("/location", fetchLocations);
router.post("/location",addLocation)

module.exports = router;
