const Location = require("../../models/location");

const addLocation = async (req, res) => {
  try {
    const location = await Location.create(req.body);
    res.status(200).json({ success: true, location });
  } catch (error) {
    console.error("Error creating location:", error);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
};

module.exports = addLocation;
