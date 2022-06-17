const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.REACT_APP_CONNECT_MONGODB_VIA_MONGOOSE, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDb connected ${connect.connection.host}`.blue.underline);
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
