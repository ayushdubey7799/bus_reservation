require("dotenv").config();
const  mongoose  = require("mongoose");

const connectToMongo = async () => {
  try {

    // const URI = process.env.MONGO_URI;
    // console.log(process.env.MONGO_URI);
    await mongoose.connect("mongodb+srv://abdul:abdul@cluster0.z0quves.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);

    process.exit(1);
  }
};

module.exports = connectToMongo;
