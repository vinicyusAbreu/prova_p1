const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURL");

const connectDB = async () => {
  try {
    await mongoose.connect(db);
    console.log("MongoDB conectado...");
  } catch (erro) {
    console.log(erro.message);
    process.exit(1);
  }
};

module.exports = connectDB;
